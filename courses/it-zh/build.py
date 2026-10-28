#!/usr/bin/env python3
"""Assemble index.html from src/.

src/course.json      order, titles, icons of lessons, reviews and appendices
src/content/<id>.html body of each section (the coloured header is generated here)
src/content/<id>.js   optional data for that section: DLG.<id>, EX.<id>, VOC.<id>
src/js/dict.js        Italian -> Chinese tooltip dictionary
src/js/app.js         runtime (audio, dialogs, exercises, flashcards, conjugator ...)
"""
import json, os, re, html

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'src')

def rd(*p):
    with open(os.path.join(SRC, *p), encoding='utf-8') as f:
        return f.read()

COURSE = json.loads(rd('course.json'))
CYCLE = ['red', 'blue', 'yellow', 'green', 'pink']
APPCOL = {'frasi': 'yellow', 'flash': 'pink', 'vocab': 'green', 'verbi': 'blue'}
ZH_NUM = '零一二三四五六七八九十'

def zh_num(n):
    if n <= 10: return ZH_NUM[n]
    if n < 20: return '十' + ZH_NUM[n - 10]
    t, u = divmod(n, 10)
    return ZH_NUM[t] + '十' + (ZH_NUM[u] if u else '')

ICONS = {
'i-abc':'<rect x="6" y="8" width="52" height="40" rx="13"/><path d="M16 46 L12 58 L28 47Z"/><text x="32" y="37" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="23" fill="var(--c)">Aa</text>',
'i-wave':'<path d="M4 38 C12 20 20 20 28 38 S44 56 52 38" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><circle cx="46" cy="20" r="8"/><rect x="50" y="2" width="5" height="19" rx="2.5"/>',
'i-tag':'<rect x="6" y="14" width="52" height="40" rx="11"/><rect x="25" y="6" width="14" height="12" rx="4" fill-opacity=".55"/><circle cx="22" cy="33" r="7" fill="var(--c)"/><rect x="34" y="27" width="17" height="5" rx="2.5" fill="var(--c)"/><rect x="34" y="36" width="11" height="5" rx="2.5" fill="var(--c)"/>',
'i-book':'<path d="M5 14 Q19 7 31 14 V55 Q19 48 5 55Z"/><path d="M59 14 Q45 7 33 14 V55 Q45 48 59 55Z" fill-opacity=".55"/>',
'i-sun':'<g>' + ''.join(f'<rect x="29.5" y="2" width="5" height="11" rx="2.5" transform="rotate({d} 32 32)"/>' for d in range(0, 360, 45)) + '</g><circle cx="32" cy="32" r="14"/><circle cx="27" cy="29" r="2" fill="var(--c)"/><circle cx="37" cy="29" r="2" fill="var(--c)"/><path d="M26 35 Q32 41 38 35" stroke="var(--c)" stroke-width="3" fill="none" stroke-linecap="round"/>',
'i-chat':'<rect x="3" y="6" width="38" height="28" rx="11"/><path d="M11 33 L9 44 L22 34Z"/><rect x="23" y="26" width="38" height="26" rx="11" fill-opacity=".55"/><path d="M51 51 L55 60 L42 51Z" fill-opacity=".55"/>',
'i-q':'<circle cx="32" cy="32" r="28"/><text x="32" y="45" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="38" fill="var(--c)">?</text>',
'i-cup':'<path d="M8 26 H46 V37 C46 49 38 55 27 55 C16 55 8 49 8 37Z"/><circle cx="48" cy="36" r="7" fill="none" stroke="currentColor" stroke-width="4.5"/><rect x="3" y="57" width="50" height="5" rx="2.5" fill-opacity=".55"/><path d="M21 8 c-5 4 5 8 0 13 M33 6 c-5 4 5 8 0 13" stroke="currentColor" stroke-width="3.5" fill="none" stroke-linecap="round"/>',
'i-phone':'<rect x="15" y="3" width="34" height="58" rx="9"/><rect x="20" y="11" width="24" height="36" rx="4" fill="var(--c)"/><circle cx="32" cy="53" r="3" fill="var(--c)"/>',
'i-ticket':'<path d="M5 17 H59 V27 A5 5 0 0 0 59 37 V47 H5 V37 A5 5 0 0 0 5 27Z"/><polygon points="32,21 35,28.5 43,29 37,34 39,42 32,37.5 25,42 27,34 21,29 29,28.5" fill="var(--c)"/>',
'i-clock':'<circle cx="32" cy="32" r="28"/><rect x="29.5" y="13" width="5" height="22" rx="2.5" fill="var(--c)"/><rect x="29.5" y="29.5" width="17" height="5" rx="2.5" fill="var(--c)"/><circle cx="32" cy="32" r="4" fill="currentColor"/>',
'i-umbrella':'<path d="M4 32 A28 24 0 0 1 60 32Z"/><path d="M18 32 A14 24 0 0 1 46 32Z" fill-opacity=".5"/><rect x="29.5" y="28" width="5" height="30" rx="2.5"/><ellipse cx="32" cy="59" rx="22" ry="4" fill-opacity=".5"/>',
'i-heart':'<path d="M32 57 C10 43 4 31 8 20 C12 10 26 8 32 21 C38 8 52 10 56 20 C60 31 54 43 32 57Z"/>',
'i-bag':'<path d="M9 22 H55 L51 59 H13Z"/><path d="M22 26 V18 A10 10 0 0 1 42 18 V26" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><circle cx="22" cy="30" r="3" fill="var(--c)"/><circle cx="42" cy="30" r="3" fill="var(--c)"/>',
'i-suitcase':'<rect x="5" y="18" width="54" height="40" rx="9"/><rect x="23" y="7" width="18" height="14" rx="5" fill="none" stroke="currentColor" stroke-width="4.5"/><rect x="17" y="18" width="5" height="40" fill="var(--c)"/><rect x="42" y="18" width="5" height="40" fill="var(--c)"/>',
'i-arch':'<path d="M3 58 V23 Q32 5 61 23 V58Z"/>' + ''.join(f'<path d="M{x} 37 v-6 a4.5 4.5 0 0 1 9 0 v6z" fill="var(--c)"/><path d="M{x} 54 v-8 a4.5 4.5 0 0 1 9 0 v8z" fill="var(--c)"/>' for x in (8, 20.5, 33, 45.5)),
'i-lemon':'<ellipse cx="29" cy="37" rx="23" ry="18" transform="rotate(-22 29 37)"/><path d="M44 15 Q56 3 61 14 Q51 23 44 15Z" fill-opacity=".55"/><circle cx="20" cy="41" r="2.5" fill="var(--c)"/><circle cx="30" cy="36" r="2.5" fill="var(--c)"/>',
'i-cards':'<rect x="6" y="14" width="30" height="42" rx="7" fill-opacity=".55" transform="rotate(-11 21 35)"/><rect x="25" y="8" width="30" height="42" rx="7" transform="rotate(8 40 29)"/><text x="40" y="36" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="18" fill="var(--c)" transform="rotate(8 40 29)">ciao</text>',
'i-verb':'<rect x="5" y="9" width="22" height="11" rx="5.5"/><rect x="5" y="26" width="34" height="11" rx="5.5"/><rect x="5" y="43" width="46" height="11" rx="5.5"/><path d="M45 8 L60 20 L45 32Z" fill-opacity=".55"/>',
'i-bulb':'<circle cx="32" cy="25" r="19"/><rect x="23" y="44" width="18" height="14" rx="4" fill-opacity=".55"/><path d="M25 26 l7 7 l7 -7" stroke="var(--c)" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
'i-family':'<circle cx="20" cy="17" r="9"/><circle cx="44" cy="17" r="9"/><path d="M5 52 C5 36 13 29 20 29 C27 29 35 36 35 52Z"/><path d="M29 52 C29 36 37 29 44 29 C51 29 59 36 59 52Z" fill-opacity=".55"/><circle cx="32" cy="38" r="6" fill="var(--c)"/><circle cx="32" cy="38" r="4.5"/><path d="M24 60 C24 51 28 47 32 47 C36 47 40 51 40 60Z"/>',
'i-pin':'<path d="M32 60 C32 60 10 38 10 24 A22 22 0 0 1 54 24 C54 38 32 60 32 60Z"/><circle cx="32" cy="24" r="8" fill="var(--c)"/>',
'i-fork':'<circle cx="34" cy="34" r="22" fill-opacity=".55"/><circle cx="34" cy="34" r="14"/><rect x="3" y="6" width="4" height="18" rx="2"/><rect x="9" y="6" width="4" height="18" rx="2"/><rect x="15" y="6" width="4" height="18" rx="2"/><rect x="5" y="20" width="12" height="6" rx="3"/><rect x="8.5" y="22" width="5" height="36" rx="2.5"/>',
'i-ball':'<circle cx="32" cy="32" r="27"/><path d="M8 24 Q32 34 56 24 M8 40 Q32 30 56 40" stroke="var(--c)" stroke-width="3.5" fill="none"/><path d="M32 5 Q22 32 32 59" stroke="var(--c)" stroke-width="3.5" fill="none"/>',
'i-kite':'<polygon points="32,3 54,26 32,49 10,26"/><path d="M32 3 V49 M10 26 H54" stroke="var(--c)" stroke-width="3"/><path d="M32 49 q-6 4 0 7 q6 3 0 6" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>',
'i-scroll':'<rect x="10" y="8" width="40" height="48" rx="6"/><rect x="40" y="4" width="16" height="12" rx="6" fill-opacity=".55"/><rect x="17" y="20" width="26" height="4" rx="2" fill="var(--c)"/><rect x="17" y="29" width="26" height="4" rx="2" fill="var(--c)"/><rect x="17" y="38" width="18" height="4" rx="2" fill="var(--c)"/>',
'i-cross':'<rect x="4" y="4" width="56" height="56" rx="16"/><path d="M26 15 H38 V26 H49 V38 H38 V49 H26 V38 H15 V26 H26Z" fill="var(--c)"/>',
'i-loop':'<path d="M32 8 A24 24 0 1 1 9 38" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round"/><polygon points="32,0 44,9 32,18"/><circle cx="32" cy="32" r="8" fill-opacity=".55"/>',
'i-lock':'<rect x="12" y="28" width="40" height="30" rx="8"/><path d="M21 29 V20 A11 11 0 0 1 43 20 V29" fill="none" stroke="currentColor" stroke-width="6"/>',
'i-flame':'<path d="M32 60 C17 60 9 50 10 38 C11 27 20 22 21 10 C29 15 33 23 31 31 C35 28 37 23 37 18 C48 26 55 36 54 44 C53 54 45 60 32 60Z"/><path d="M32 56 C25 56 21 51 22 45 C23 40 28 37 29 31 C33 35 35 40 34 44 C37 42 38 40 39 37 C43 41 44 45 43 49 C41 54 37 56 32 56Z" fill-opacity=".45"/>',
'i-check':'<path d="M12 33 L26 47 L53 18" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>',
'i-ear':'<path d="M20 26 A14 14 0 0 1 48 26 C48 36 40 38 38 46 C36 54 30 58 24 56" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><path d="M28 27 A6 6 0 0 1 40 27 C40 31 36 33 35 36" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>',
'i-trophy':'<path d="M16 6 H48 V24 A16 16 0 0 1 16 24Z"/><path d="M16 12 H6 V18 A10 10 0 0 0 16 28 M48 12 H58 V18 A10 10 0 0 1 48 28" fill="none" stroke="currentColor" stroke-width="4.5"/><rect x="28" y="38" width="8" height="12" fill-opacity=".55"/><rect x="18" y="50" width="28" height="9" rx="3"/>',
'i-moka':'<path d="M18 30 H46 L52 60 H12Z"/><path d="M20 28 L24 10 H40 L44 28Z" fill-opacity=".55"/><rect x="28" y="3" width="8" height="8" rx="3"/><path d="M46 36 C56 36 58 48 50 52" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M18 28 L8 22" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>',
'i-star':'<polygon points="32,3 40,22 61,23 45,37 50,58 32,47 14,58 19,37 3,23 24,22"/>',
}

def sprite():
    return ('<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
            ''.join(f'<symbol id="{k}" viewBox="0 0 64 64" fill="currentColor">{v}</symbol>' for k, v in ICONS.items()) +
            (rd('scenes.svg') if os.path.exists(os.path.join(SRC, 'scenes.svg')) else '') +
            '</defs></svg>')

# ---------- ordering, numbering, colours ----------
items = []
n = 0
ci = 0
for part in COURSE['parts']:
    for it in part['items']:
        kind = it.get('kind', 'lesson')
        if kind == 'lesson':
            n += 1
            it['n'] = n
        if kind == 'app':
            it['color'] = APPCOL[it['id']]
        else:
            it['color'] = CYCLE[ci % 5]
            ci += 1
        it['kind'] = kind
        it['part'] = part['title']
        items.append(it)

def kicker(it):
    k = it['kind']
    if k == 'lesson':
        return f'<span>第{zh_num(it["n"])}课</span><span class="itk">Lezione {it["n"]}</span>'
    if k == 'review':
        return f'<span>复习 · {it["id"][1:]}</span><span class="itk">{html.escape(it["it"])}</span>'
    return f'<span>附录 {it["letter"]}</span><span class="itk">{html.escape(it["it"])}</span>'

def section(it):
    body = rd('content', it['id'] + '.html')
    body = re.sub(r'<summary>(?!<span class="sq">)(.*?)</summary>', r'<summary><span class="sq">\1</span></summary>', body, flags=re.S)
    sub = '' if it['kind'] == 'review' else f'<small>{html.escape(it["it"])}</small>'
    return (f'<section class="lesson t-{it["color"]}" id="{it["id"]}" data-kind="{it["kind"]}">\n'
            f'  <header class="lhead"><div class="lh-text"><div class="kicker">{kicker(it)}</div>\n'
            f'  <h2>{html.escape(it["zh"])}{sub}</h2></div><svg class="lic" aria-hidden="true"><use href="#{it["icon"]}"/></svg></header>\n'
            f'{body}\n</section>\n')

def toc():
    out = ['<nav class="toc" aria-label="目录">\n  <details id="tocd">\n    <summary>目录 · Indice</summary>\n    <ol>',
           '      <li><a href="#mappa">课程地图</a></li>',
           '      <li><a class="t-green" href="#metodo"><span><i class="dot"></i>学习方法</span></a></li>']
    for part in COURSE['parts']:
        lvl = f' · {part["level"]}' if part.get('level') else ''
        out.append(f'      <li class="part">{part["title"]}{lvl}</li>')
        for it in part['items']:
            if it['kind'] == 'lesson':
                label = f'{it["n"]} · {it["zh"]}'
            elif it['kind'] == 'review':
                label = f'↺ {it["zh"]}'
            else:
                label = f'{it["letter"]} · {it["zh"]}'
            sc = '' if it['kind'] == 'app' and it['id'] != 'verbi' else f'<span class="sc" data-sc="{it["id"]}"></span>'
            out.append(f'      <li><a class="t-{it["color"]}" href="#{it["id"]}"><span><i class="dot"></i>{html.escape(label)}</span>{sc}</a></li>')
    out.append('    </ol>\n  </details>\n</nav>')
    return '\n'.join(out)

def tiles():
    out = []
    for it in items:
        if it['kind'] == 'lesson':
            num = f'{it["n"]:02d}'
        elif it['kind'] == 'review':
            num = 'R' + it['id'][1:]
        else:
            if it['id'] not in ('verbi', 'flash'):
                continue
            num = it['letter']
        sc = f'<span class="sc" data-sc="{it["id"]}"></span>' if it['id'] != 'flash' else '<span class="sc"></span>'
        cls = ' review' if it['kind'] == 'review' else ''
        out.append(f'    <a class="tile t-{it["color"]}{cls}" href="#{it["id"]}"><span class="n">{num}</span><svg aria-hidden="true"><use href="#{it["icon"]}"/></svg>'
                   f'<b>{html.escape(it["zh"])}</b><i lang="it">{html.escape(it["it"])}</i>{sc}</a>')
    return '\n'.join(out)

def js_data():
    parts = []
    for it in items:
        p = os.path.join(SRC, 'content', it['id'] + '.js')
        if os.path.exists(p):
            parts.append(f'/* ---- {it["id"]} ---- */\n' + rd('content', it['id'] + '.js'))
    worlds = [p for p in COURSE['parts'] if p.get('level')]
    lessons = [{'id': it['id'], 'n': it.get('n'), 'zh': it['zh'], 'it': it['it'], 'kind': it['kind'], 'icon': it['icon'], 'color': it['color'],
                'w': next(i for i, p in enumerate(worlds) if p['title'] == it['part']) + 1} for it in items if it['kind'] != 'app']
    wl = [{'title': p['title'], 'level': p['level'], 'it': p['it']} for p in worlds]
    return ('var DLG={},EX={},VOC={},CULT={};\nvar LESSONS=' + json.dumps(lessons, ensure_ascii=False) + ';\nvar WORLDS=' + json.dumps(wl, ensure_ascii=False) + ';\n' + '\n'.join(parts) + '\n' + rd('culture.js'))

def stats(data_js):
    n_less = sum(1 for it in items if it['kind'] == 'lesson')
    n_dlg = len(re.findall(r'^DLG\.\w+\s*=', data_js, re.M))
    n_ex = len(re.findall(r'^\s*\{(?:t:"\w+",)?(?:q|zh|au):', data_js, re.M))
    n_voc = len(re.findall(r'\["[^"]+","[^"]+","[mf]?"\]', data_js.split('var FRASI')[0]))
    return n_less, n_dlg, n_ex, n_voc

def main():
    data_js = js_data()
    n_less, n_dlg, n_ex, n_voc = stats(data_js)
    hero = rd('hero.html').format(LESSONS=n_less, DIALOGS=n_dlg, EXERCISES=n_ex, WORDS=n_voc, TILES=tiles())
    metodo = rd('content', 'metodo.html')
    body = []
    cur_part = None
    for it in items:
        if it['part'] != cur_part:
            cur_part = it['part']
            part = next(p for p in COURSE['parts'] if p['title'] == cur_part)
            lvl = f'<span class="lvl">{part["level"]}</span>' if part.get('level') else ''
            body.append(f'<div class="partttl">{part["title"]}{lvl}</div>\n')
        body.append(section(it))
    footer = rd('footer.html')
    page = (rd('head.html') + '<style>\n' + rd('style.css') + '\n' + rd('extra.css') + '\n' + rd('path.css') + '\n</style>\n</head>\n<body>\n' +
            sprite() + '\n' + rd('topbar.html') + '<div class="book">\n' + toc() + '\n\n<main>\n' + hero + '\n' +
            '<section class="lesson t-green" id="metodo" data-kind="intro">\n  <header class="lhead"><div class="lh-text"><div class="kicker"><span>开始之前</span><span class="itk">Il metodo</span></div>\n  <h2>学习方法：先用耳朵，再用嘴巴</h2></div><svg class="lic" aria-hidden="true"><use href="#i-bulb"/></svg></header>\n' + metodo + '\n</section>\n\n' +
            ''.join(body) + footer + '\n</main>\n</div>\n\n<script>\n(function(){\n"use strict";\n' +
            rd('js', 'dict.js') + '\n' + rd('js', 'dict2.js') + '\n' + data_js + '\n' + rd('js', 'app.js') + '\n' + rd('js', 'path.js') + '\n})();\n</script>\n\n</body>\n</html>\n')
    with open(os.path.join(ROOT, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(page)
    print(f'index.html: {n_less} lessons, {n_dlg} dialogs, {n_ex} exercises, {n_voc} words, {len(page)//1024} KB')

if __name__ == '__main__':
    main()
