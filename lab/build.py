#!/usr/bin/env python3
"""從 index.html 產生 lab/actions.html（品牌行動×銷量 的獨立測試頁）。

用法：python3 lab/build.py
改完 lab/actions.html 要合併回去時，把 AX 區塊與 page-actions 區塊貼回
index.html 的對應位置即可（見下方 AX_MARK / PAGE_MARK）。
"""
import re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
src  = (ROOT/'index.html').read_text(encoding='utf-8')

PAGE_MARK = '<div class="page" id="page-actions">'
AX_MARK   = 'const AX_BRANDS=['
AX_END    = '// ── URL 深連結（hash routing）──'

# 需要一併帶過去的共用工具（依 index.html 的定義順序）
HELPERS = ['csvEscape','downloadCSV','MONTHS_AVAIL','MONTH_LABELS','PROMO_SIGNALS',
           'promoIntensity','promoLevel','promoBrandIndex','ESOV_BRANDS','nielsenShare','TL_YM']
DATA    = ['promos.js','nielsen.js','comp.js','q1_report.js','launch.js','intel.js','actions.js']

def grab(name, src):
    """抓出一個頂層宣告。

    本檔的排版慣例：頂層宣告一律從第 0 欄開始，內容縮排。因此從宣告那一行
    往下讀到「下一個第 0 欄的宣告／註解」為止即可，不必解析 JS 語法
    （字串、正規表達式字面量、樣板字面量都會讓字元級掃描出錯）。
    """
    lines = src.split('\n')
    pat = re.compile(r'^(?:const|let|var|function)\s+' + re.escape(name) + r'\b')
    for i, ln in enumerate(lines):
        if pat.match(ln): break
    else:
        raise SystemExit(f'找不到 {name}')
    stop = re.compile(r'^(?:const|let|var|function|//|/\*|<)')
    j = i + 1
    while j < len(lines) and not stop.match(lines[j]):
        j += 1
    return '\n'.join(lines[i:j]).rstrip()

style   = re.search(r'<style>.*?</style>', src, re.S).group(0)
fonts   = '\n'.join(re.findall(r'<link[^>]+fonts\.(?:googleapis|gstatic)[^>]*>', src))
page_s  = src.index(PAGE_MARK)
page    = src[page_s:src.index('\n<!-- PAGE 6', page_s)].rstrip()
ax      = src[src.index(AX_MARK):src.index(AX_END)].rstrip()
helpers = '\n'.join(grab(n, src) for n in HELPERS)

if re.search(r'\bQ1_CREATIVE_IMGS\b|\b_cac\b', ax):
    DATA.insert(0, 'creatives.js')          # 35MB，非必要不載入

out = f"""<!doctype html>
<html lang="zh-Hant"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>品牌行動 × 銷量（測試版）</title>
{fonts}
{style}
<style>
  body{{padding:18px 22px}}
  .page{{display:block!important}}
  .lab-flag{{background:#f97316;color:#0b0d12;font-family:'DM Mono',monospace;font-size:11px;
    font-weight:700;letter-spacing:.08em;padding:6px 12px;border-radius:5px;display:inline-block;margin-bottom:14px}}
</style>
</head><body>

<div class="lab-flag">⚗ 測試版 · 與正式儀表板分開，改動不影響 index.html</div>

{page}

{''.join(f'<script src="../data/{d}"></script>' + chr(10) for d in DATA)}
<script>
// ── 由 lab/build.py 從 index.html 抽出，請勿直接手改上游片段 ──
{helpers}

{ax}

document.addEventListener('DOMContentLoaded',()=>buildActionsPage());
</script>
</body></html>
"""
(ROOT/'lab'/'actions.html').write_text(out, encoding='utf-8')
print(f'已產生 lab/actions.html（{len(out)/1024:.0f} KB）')
print('  資料檔:', ' '.join(DATA))
print('  共用工具:', len(HELPERS), '項')
