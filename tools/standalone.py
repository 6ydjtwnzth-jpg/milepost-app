"""Pack one course as a standalone site for the Android app: no website, no Google Fonts, no accounts.
The pages are copied from docs/ (run build.py first) and lightly patched:
  - the catalog lists only this course (CATALOG.only), so the app opens straight on it;
  - fonts come from standalone/fonts instead of Google;
  - accounts and the service worker are off (everything is already on the phone).
usage: python3 tools/standalone.py fr-it OUTDIR"""
import json, os, re, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, 'docs')
cid, out = sys.argv[1], os.path.abspath(sys.argv[2])
if os.path.exists(out):
    shutil.rmtree(out)
os.makedirs(out)

FONT_LINKS = re.compile(r'<link rel="preconnect" href="https://fonts\.googleapis\.com">\s*<link rel="preconnect" href="https://fonts\.gstatic\.com" crossorigin>\s*<link rel="stylesheet" href="https://fonts\.googleapis\.com/css2[^"]*">')


def only(cat):
    cat['courses'] = [c for c in cat['courses'] if c['id'] == cid]
    if not cat['courses']:
        sys.exit('unknown course ' + cid)
    cat['only'] = cid
    cat['soon'] = {}
    return cat


def patch_catalog(text):
    i = text.index('var CATALOG=') + len('var CATALOG=')
    cat, end = json.JSONDecoder().raw_decode(text, i)
    return text[:i] + json.dumps(only(cat), ensure_ascii=False, separators=(',', ':')) + text[end:]


def patch_page(text, up):
    text, n = FONT_LINKS.subn('<link rel="stylesheet" href="' + up + 'fonts/fonts.css">', text)
    assert n == 1, 'font links not found'
    text = text.replace('"serviceWorker" in navigator&&(', 'false&&(')
    if 'var CATALOG=' in text:
        text = patch_catalog(text)
    return text


def wr(rel, text):
    p = os.path.join(out, rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    open(p, 'w', encoding='utf-8').write(text)


def rd(rel):
    return open(os.path.join(DOCS, rel), encoding='utf-8').read()


wr('index.html', patch_page(rd('index.html'), ''))
wr('c/%s/index.html' % cid, patch_page(rd('c/%s/index.html' % cid), '../../'))
wr('catalog.js', patch_catalog(rd('catalog.js')))
wr('sync-config.js', '/* standalone app: no accounts */\nwindow.MP_SYNC_CONFIG = null;\n')
for f in ['plan.js', 'sync.js', 'course-app.css', 'manifest.webmanifest']:
    shutil.copy2(os.path.join(DOCS, f), os.path.join(out, f))
shutil.copytree(os.path.join(DOCS, 'icons'), os.path.join(out, 'icons'))
shutil.copytree(os.path.join(DOCS, 'c', cid, 'audio'), os.path.join(out, 'c', cid, 'audio'))
shutil.copytree(os.path.join(ROOT, 'standalone', 'fonts'), os.path.join(out, 'fonts'))
left = [l for l in re.findall(r'https://[^\s"\')]+', rd('index.html') + rd('c/%s/index.html' % cid)) if 'fonts.g' in l]
size = sum(os.path.getsize(os.path.join(d, f)) for d, _, fs in os.walk(out) for f in fs)
print('%s: standalone site in %s, %.1f MB' % (cid, out, size / 1e6))
