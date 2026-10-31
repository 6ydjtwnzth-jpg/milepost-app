#!/usr/bin/env python3
"""Build Milepost into docs/ (served by GitHub Pages from the main branch, /docs folder).

- shell/: the app (onboarding, plan, home) -> docs/index.html with CSS and JS inlined
- courses/<id>/: one course pack each, built with its own build.py -> docs/c/<id>/index.html
- docs/c/<id>/audio/: the course audio lives here directly (it is not copied, to keep the repo small)
"""
import hashlib, json, os, re, shutil, struct, subprocess, sys, zlib

ROOT = os.path.dirname(os.path.abspath(__file__))
SHELL = os.path.join(ROOT, 'shell')
DOCS = os.path.join(ROOT, 'docs')


def rd(*p):
    with open(os.path.join(*p), encoding='utf-8') as f:
        return f.read()


def wr(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)


def catalog():
    meta = json.loads(rd(SHELL, 'courses.json'))
    for c in meta['courses']:
        src = json.loads(rd(ROOT, 'courses', c['id'], 'src', 'course.json'))
        units, worlds = [], []
        for part in src['parts']:
            items = [i for i in part['items'] if i.get('kind') in (None, 'lesson', 'review')]
            if not items:
                continue
            w = len(worlds) + 1
            worlds.append({'w': w, 'level': part.get('level', ''), 'title': part['title']})
            for i in items:
                units.append({'id': i['id'], 'w': w, 'kind': i.get('kind', 'lesson'),
                              't': i.get(c['titleField']) or i.get('t') or i['id']})
        c['units'], c['worlds'] = units, worlds
    return meta


def build_course(cid):
    cdir = os.path.join(ROOT, 'courses', cid)
    subprocess.run([sys.executable, os.path.join(cdir, 'build.py')], check=True)
    html = rd(cdir, 'index.html')
    # The course engine runs inside one closure: the app code is inserted in the same closure,
    # right after the engine, so it can reuse its functions (steps, quizzes, audio).
    head_js = '<script src="../../catalog.js"></script><script src="../../plan.js"></script><script src="../../sync-config.js"></script><script src="../../sync.js"></script>\n'
    start = html.rfind('<script>\n(function(){')
    end = html.rfind('\n})();\n</script>')
    if start < 0 or end < start:
        raise SystemExit(f'{cid}: course script block not found')
    html = (html[:start] + head_js + html[start:end] + '\n/* ---- Milepost course app ---- */\n' +
            rd(SHELL, 'course-app.js') + '\n' + rd(SHELL, 'exercises.js') + html[end:])
    # the class goes on before the first paint, so the old book layout never flashes while the page loads
    html = html.replace('</head>', '<link rel="stylesheet" href="../../course-app.css">\n<script>document.documentElement.classList.add("mp")</script>\n' + splash_head() + '\n</head>', 1)
    html = re.sub(r'(<body[^>]*>)', lambda m: m.group(1) + '\n' + rd(SHELL, 'splash.html'), html, count=1)
    wr(os.path.join(DOCS, 'c', cid, 'index.html'), html)
    os.remove(os.path.join(cdir, 'index.html'))
    audio_index(cid)
    n = len(os.listdir(os.path.join(DOCS, 'c', cid, 'audio')))
    print(f'  course {cid}: {len(html) // 1024} KB, {n} audio clips')


def audio_index(cid):
    """docs/c/<id>/audio/index.json: every audio file of the course, so the app can save them all for offline use."""
    base = os.path.join(DOCS, 'c', cid, 'audio')
    files, size = [], 0
    for dp, _, fs in os.walk(base):
        for f in sorted(fs):
            if f.endswith('.mp3'):
                p = os.path.join(dp, f)
                files.append(os.path.relpath(p, base).replace(os.sep, '/'))
                size += os.path.getsize(p)
    files.sort()
    wr(os.path.join(base, 'index.json'), json.dumps({'n': len(files), 'bytes': size, 'files': files}, separators=(',', ':')))


def write_sw(cat):
    """sw.js with the course list and a version that changes whenever a page changes (so phones get the update)."""
    h = hashlib.sha1()
    for p in ['index.html', 'catalog.js', 'plan.js', 'course-app.css'] + [f'c/{c["id"]}/index.html' for c in cat['courses']]:
        fp = os.path.join(DOCS, p)
        if os.path.exists(fp):
            with open(fp, 'rb') as f:
                h.update(f.read())
    sw = rd(SHELL, 'sw.js').replace('/*VERSION*/', h.hexdigest()[:12]).replace('/*COURSES*/[]', json.dumps([c['id'] for c in cat['courses']]))
    wr(os.path.join(DOCS, 'sw.js'), sw)


def splash_head():
    # decided before the first paint: the opening animation plays once per app launch (per tab session)
    return ('<style>\n' + rd(SHELL, 'splash.css') + '</style>\n<script>(function(){var s=0;try{s=sessionStorage.getItem("milepost-splash")}'
            'catch(e){}if(!s)document.documentElement.classList.add("mp-splash-play")})()</script>')


# iPhone and iPad screens (CSS width, height, pixel ratio). iOS shows a still image while a home-screen app starts:
# a plain paper-colored screen, the first frame of the opening animation.
LAUNCH_SCREENS = [(440, 956, 3), (430, 932, 3), (420, 912, 3), (402, 874, 3), (393, 852, 3), (428, 926, 3), (390, 844, 3),
                  (375, 812, 3), (414, 896, 3), (414, 896, 2), (414, 736, 3), (375, 667, 2), (320, 568, 2)]
LAUNCH_TABLETS = [(1032, 1376, 2), (834, 1210, 2), (1024, 1366, 2), (834, 1194, 2), (820, 1180, 2), (834, 1112, 2),
                  (810, 1080, 2), (768, 1024, 2), (744, 1133, 2)]


def png_solid(w, h, hexcolor):
    # one-color PNG (1-bit palette): a few hundred bytes for any size
    def chunk(t, d):
        return struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    row = b'\x00' + b'\x00' * ((w + 7) // 8)
    return (b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 1, 3, 0, 0, 0)) +
            chunk(b'PLTE', bytes.fromhex(hexcolor.lstrip('#'))) + chunk(b'IDAT', zlib.compress(row * h, 9)) + chunk(b'IEND', b''))


def launch_images():
    css = rd(SHELL, 'app.css')
    light, dark = re.findall(r'--paper:(#[0-9a-fA-F]{6})', css)[:2]
    out = os.path.join(DOCS, 'icons', 'launch')
    os.makedirs(out, exist_ok=True)
    tags = []
    shapes = [(s, 'portrait') for s in LAUNCH_SCREENS] + [(s, o) for s in LAUNCH_TABLETS for o in ('portrait', 'landscape')]
    for (w, h, r), o in shapes:
        pw, ph = (w * r, h * r) if o == 'portrait' else (h * r, w * r)
        for scheme, color in (('light', light), ('dark', dark)):
            name = f'{pw}x{ph}-{scheme}.png'
            with open(os.path.join(out, name), 'wb') as f:
                f.write(png_solid(pw, ph, color))
            tags.append(f'<link rel="apple-touch-startup-image" href="icons/launch/{name}" media="(device-width: {w}px) and '
                        f'(device-height: {h}px) and (-webkit-device-pixel-ratio: {r}) and (orientation: {o}) and '
                        f'(prefers-color-scheme: {scheme})">')
    return '\n'.join(tags)


def build_shell(cat):
    page = rd(SHELL, 'index.html')
    page = page.replace('<!--SPLASHHEAD-->', splash_head()).replace('<!--SPLASH-->', rd(SHELL, 'splash.html'))
    page = page.replace('/*CSS*/', rd(SHELL, 'app.css'))
    js = 'var CATALOG=' + json.dumps(cat, ensure_ascii=False, separators=(',', ':')) + ';\n'
    js += rd(SHELL, 'i18n.js') + '\n' + rd(SHELL, 'art.js') + '\n' + rd(SHELL, 'plan.js') + '\n' + rd(SHELL, 'app.js')
    js += '\nif(window.mpSplashReady)mpSplashReady();'
    page = page.replace('/*JS*/', js)
    os.makedirs(os.path.join(DOCS, 'icons'), exist_ok=True)
    page = page.replace('<!--LAUNCH-->', launch_images())
    wr(os.path.join(DOCS, 'index.html'), page)
    wr(os.path.join(DOCS, 'catalog.js'), 'var CATALOG=' + json.dumps(cat, ensure_ascii=False, separators=(',', ':')) + ';\n')
    for f in ('plan.js', 'course-app.css', 'manifest.webmanifest', 'sync.js', 'sync-config.js'):
        shutil.copy(os.path.join(SHELL, f), os.path.join(DOCS, f))
    write_sw(cat)
    os.makedirs(os.path.join(DOCS, 'icons'), exist_ok=True)
    for f in os.listdir(os.path.join(SHELL, 'icons')):
        shutil.copy(os.path.join(SHELL, 'icons', f), os.path.join(DOCS, 'icons', f))
    print(f'  shell: {len(page) // 1024} KB')


if __name__ == '__main__':
    cat = catalog()
    only = sys.argv[1:]
    for c in cat['courses']:
        if not only or c['id'] in only:
            build_course(c['id'])
    build_shell(cat)
    wr(os.path.join(DOCS, '.nojekyll'), '')
    print('docs/ ready')
