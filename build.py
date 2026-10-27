#!/usr/bin/env python3
"""Build Milepost into docs/ (served by GitHub Pages from the main branch, /docs folder).

- shell/: the app (onboarding, plan, home) -> docs/index.html with CSS and JS inlined
- courses/<id>/: one course pack each, built with its own build.py -> docs/c/<id>/index.html
- docs/c/<id>/audio/: the course audio lives here directly (it is not copied, to keep the repo small)
"""
import json, os, re, shutil, subprocess, sys

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
    head_js = '<script src="../../catalog.js"></script><script src="../../plan.js"></script>\n'
    start = html.rfind('<script>\n(function(){')
    end = html.rfind('\n})();\n</script>')
    if start < 0 or end < start:
        raise SystemExit(f'{cid}: course script block not found')
    html = (html[:start] + head_js + html[start:end] + '\n/* ---- Milepost course app ---- */\n' +
            rd(SHELL, 'course-app.js') + html[end:])
    html = html.replace('</head>', '<link rel="stylesheet" href="../../course-app.css">\n</head>', 1)
    wr(os.path.join(DOCS, 'c', cid, 'index.html'), html)
    os.remove(os.path.join(cdir, 'index.html'))
    n = len(os.listdir(os.path.join(DOCS, 'c', cid, 'audio')))
    print(f'  course {cid}: {len(html) // 1024} KB, {n} audio clips')


def build_shell(cat):
    page = rd(SHELL, 'index.html')
    page = page.replace('/*CSS*/', rd(SHELL, 'app.css'))
    js = 'var CATALOG=' + json.dumps(cat, ensure_ascii=False, separators=(',', ':')) + ';\n'
    js += rd(SHELL, 'i18n.js') + '\n' + rd(SHELL, 'art.js') + '\n' + rd(SHELL, 'plan.js') + '\n' + rd(SHELL, 'app.js')
    page = page.replace('/*JS*/', js)
    wr(os.path.join(DOCS, 'index.html'), page)
    wr(os.path.join(DOCS, 'catalog.js'), 'var CATALOG=' + json.dumps(cat, ensure_ascii=False, separators=(',', ':')) + ';\n')
    for f in ('plan.js', 'course-app.css', 'sw.js', 'manifest.webmanifest'):
        shutil.copy(os.path.join(SHELL, f), os.path.join(DOCS, f))
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
