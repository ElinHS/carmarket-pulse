#!/usr/bin/env node
/**
 * 把 data/*.js 匯出成 Claude 專案（Project knowledge）可直接讀取的 Markdown。
 *
 *   node tools/export_for_claude.js
 *
 * 產出到 export/，每月更新完資料後重跑一次即可。
 * 不含 data/creatives.js（36MB 影像，對文字分析無用）。
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'export');
const load = (file, name) =>
  new Function(fs.readFileSync(path.join(ROOT, 'data', file), 'utf8') + '; return ' + name + ';')();

const MO = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
const ML = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
const clean = s => String(s == null ? '' : s)
  .replace(/<strong>/g, '**').replace(/<\/strong>/g, '**')
  .replace(/<[^>]+>/g, '').replace(/\n/g, '；');
const n = v => (v == null ? '—' : Number(v).toLocaleString());

fs.mkdirSync(OUT, { recursive: true });
const write = (file, body) => {
  fs.writeFileSync(path.join(OUT, file), body, 'utf8');
  console.log(`  ${file.padEnd(38)} ${(Buffer.byteLength(body) / 1024).toFixed(1)} KB`);
};
const today = new Date().toISOString().slice(0, 10);
const head = (title, note) =>
  `# ${title}\n\n> 來源：carmarket-pulse 儀表板，匯出日 ${today}\n> ${note}\n\n`;

// ─────────────────────────────────────────────────────────────
const RAW = load('registrations.js', 'RAW');
const COMP = load('comp.js', 'COMP_DATA');
const PROMO = load('promos.js', 'PROMO');
const NIE = load('nielsen.js', 'NIELSEN_MONTHLY');
const INTEL = load('intel.js', 'INTEL');
const LAUNCH = load('launch.js', 'LAUNCH_2026');
const NEWS = load('models.js', 'MODEL_NEWS');
const KOL = load('kol.js', 'KOL_DATA');
const ACTIONS = load('actions.js', 'ACTIONS');
const THEMES = load('actions.js', 'THEMES');
const STRAT = load('strategy.js', 'STRAT_DATA');
const CASES = load('strategy.js', 'CASES');

const latest = RAW[RAW.length - 1];
const nieMonths = Object.keys(NIE);

// ── 01 掛牌數 ────────────────────────────────────────────────
{
  const MODELS = [['kicks','Kicks 汽油'],['kickse','Kicks e-POWER'],['sentra','Sentra'],
                  ['xtrail','X-Trail 汽油版'],['xtraile','X-Trail e-POWER'],['ariya','ARIYA']];
  let md = head('NISSAN 掛牌數（2024–2026）',
    '單位：台。資料源為交通部公路局掛牌數，非出廠或銷售數。');
  [2024, 2025, 2026].forEach(yr => {
    const rows = RAW.filter(r => r.yr === yr);
    if (!rows.length) return;
    md += `## ${yr} 年\n\n| 車款 | ${ML.join(' | ')} | 合計 |\n|${'---|'.repeat(14)}\n`;
    MODELS.forEach(([k, label]) => {
      const cells = ML.map((_, i) => { const r = rows.find(x => x.mo === i + 1); return r ? n(r[k]) : '—'; });
      md += `| ${label} | ${cells.join(' | ')} | ${n(rows.reduce((a, r) => a + r[k], 0))} |\n`;
    });
    const tot = ML.map((_, i) => {
      const r = rows.find(x => x.mo === i + 1);
      return r ? n(MODELS.reduce((a, [k]) => a + r[k], 0)) : '—';
    });
    md += `| **合計** | ${tot.join(' | ')} | **${n(rows.reduce((a, r) => a + MODELS.reduce((b, [k]) => b + r[k], 0), 0))}** |\n\n`;
    const notes = rows.filter(r => r.note);
    if (notes.length) {
      md += `**該年度註記**\n\n`;
      notes.forEach(r => { md += `- ${r.mo}月：${clean(r.note)}\n`; });
      md += `\n`;
    }
  });
  write('01_掛牌數_NISSAN.md', md);
}

// ── 02 競品四大戰場 ──────────────────────────────────────────
{
  let md = head('競品四大戰場掛牌比對（2026）',
    '戰場定義以「2026掛牌數_RAW+競品對戰分析.xlsx」的級距對戰工作表為準。ext 標記為延伸參考車款，列入市占計算但視覺淡化。');
  Object.values(COMP).forEach(bg => {
    const models = bg.models || [];
    const months = MO.filter(m => models.some(x => x.data[m] != null));
    md += `## ${bg.label}\n\n`;
    if (bg.segment) md += `級距定義：${bg.segment}\n\n`;
    md += `| 車款 | ${months.map(m => ML[MO.indexOf(m)]).join(' | ')} | 合計 | 市占 |\n|${'---|'.repeat(months.length + 3)}\n`;
    const segTot = models.reduce((a, x) => a + months.reduce((b, m) => b + (x.data[m] || 0), 0), 0);
    [...models]
      .map(x => ({ ...x, ytd: months.reduce((a, m) => a + (x.data[m] || 0), 0) }))
      .sort((a, b) => b.ytd - a.ytd)
      .forEach(x => {
        const tag = x.brand === 'NISSAN' ? ' ★' : x.ext ? `（${x.ext}）` : '';
        md += `| ${x.brand} ${x.name}${tag} | ${months.map(m => n(x.data[m])).join(' | ')} | ${n(x.ytd)} | ${(x.ytd / segTot * 100).toFixed(1)}% |\n`;
      });
    md += `| **級距合計** | ${months.map(m => n(models.reduce((a, x) => a + (x.data[m] || 0), 0))).join(' | ')} | **${n(segTot)}** | 100% |\n\n`;
    const noted = models.filter(x => x.note);
    if (noted.length) {
      md += `**異常值與判讀註記**\n\n`;
      noted.forEach(x => { md += `- **${x.brand} ${x.name}**：${clean(x.note)}\n`; });
      md += `\n`;
    }
  });
  write('02_競品四大戰場.md', md);
}

// ── 03 促銷方案 ──────────────────────────────────────────────
{
  const months = MO.filter(m => PROMO.some(r => r[m] != null));
  let md = head('競車促銷方案（2026，六品牌）',
    '「—」代表該月無方案。既定拆併規則：RAV4 汽油／油電併為單列；C-HR 沿用 Corolla Sport 方案；HYUNDAI IONIQ 6 與 TOYOTA Camry 未列入追蹤。');
  let brand = null;
  PROMO.forEach(r => {
    if (r.brand !== brand) { brand = r.brand; md += `\n## ${brand}\n`; }
    md += `\n### ${r.model}（${r.cat}）\n\n`;
    months.forEach(m => {
      const v = clean(r[m]);
      if (v && v !== '—') md += `- **${ML[MO.indexOf(m)]}**：${v}\n`;
    });
    const empty = months.filter(m => !r[m] || r[m] === '—').map(m => ML[MO.indexOf(m)]);
    if (empty.length) md += `- 無方案月份：${empty.join('、')}\n`;
  });
  write('03_競車促銷方案.md', md);
}

// ── 04 Nielsen 數位投放 ──────────────────────────────────────
{
  let md = head('數位廣告投放監測（Nielsen AdIntel）',
    '金額單位為萬元。跨月一律以份額（SOV%）比較，不比絕對金額。已知問題：1–6 月各品牌 channels[].sp 與 totalSp 存在約 100 倍的尺度不一致，圖表讀的是 pct 故無視覺影響，但引用 channels 的絕對金額前須先回查原始匯出檔。');
  nieMonths.forEach(mo => {
    const d = NIE[mo];
    const brands = Object.keys(d).filter(k => d[k] && typeof d[k] === 'object' && 'totalSp' in d[k]);
    const tot = brands.reduce((a, b) => a + (d[b].totalSp || 0), 0);
    md += `## ${d.label || mo}${d.period ? `（${d.period}）` : ''}\n\n`;
    md += `六品牌合計 ${n(Math.round(tot))} 萬元\n\n`;
    md += `| 品牌 | 投放（萬元） | SOV | CPM | 主力車款 |\n|---|---|---|---|---|\n`;
    brands.sort((a, b) => (d[b].totalSp || 0) - (d[a].totalSp || 0)).forEach(b => {
      const x = d[b];
      const top = (x.vehicles || []).slice(0, 2).map(v => `${v.name} ${n(Math.round(v.sp))}萬`).join('、') || '—';
      md += `| ${b.toUpperCase()} | ${n(Math.round(x.totalSp))} | ${tot ? (x.totalSp / tot * 100).toFixed(1) : '0.0'}% | ${x.cpm ?? '—'} | ${top} |\n`;
    });
    md += `\n`;
    brands.forEach(b => {
      if (d[b].note) md += `- **${b.toUpperCase()}**：${clean(d[b].note)}\n`;
    });
    md += `\n`;
  });
  write('04_數位廣告投放_Nielsen.md', md);
}

// ── 05 車市銷售觀察 ──────────────────────────────────────────
{
  let md = head('車市銷售觀察月報（2024/08–迄今）',
    '每月一則，含整體市場、媒體投資、消費者觀察與 NISSAN 專項。這是最主要的敘事型資料來源。');
  INTEL.forEach(e => {
    md += `## ${e.label}｜${clean(e.title)}\n\n**${clean(e.sub)}**\n\n`;
    (e.mkt || []).forEach(s => {
      md += `### ${clean(s.t)}\n\n`;
      s.i.forEach(x => { md += `- ${clean(x)}\n`; });
      md += `\n`;
    });
    (e.nis || []).forEach(s => {
      md += `### ▲ ${clean(s.t)}\n\n`;
      s.i.forEach(x => { md += `- ${clean(x)}\n`; });
      md += `\n`;
    });
    md += `---\n\n`;
  });
  write('05_車市銷售觀察月報.md', md);
}

// ── 06 品牌動態與新車時程 ────────────────────────────────────
{
  let md = head('品牌動態：新車上市時程與行銷活動（2026）',
    'LAUNCH_2026 為產品時程（上市／改款／特仕／預售），MODEL_NEWS 為品牌繞著特定車款推動的市場活動。');
  md += `## 新車與產品時程\n\n`;
  LAUNCH.forEach(g => {
    md += `### ${g.label}\n\n`;
    (g.items || []).forEach(it => {
      md += `**${it.brand}｜${clean(it.title)}**（${it.type}）\n\n`;
      (it.points || []).forEach(p => { md += `- ${clean(p)}\n`; });
      md += `\n`;
    });
  });
  md += `## 品牌活動動態\n\n`;
  [...NEWS].sort((a, b) => String(b.ym).localeCompare(String(a.ym))).forEach(x => {
    md += `### ${x.date || x.ym}｜${x.brand} ${x.model}｜${clean(x.title)}\n\n`;
    md += `類型：${x.type}\n\n`;
    if (x.summary) md += `${clean(x.summary)}\n\n`;
    (x.points || []).forEach(p => { md += `- ${clean(p)}\n`; });
    (x.links || []).forEach(l => { md += `- 出處：${l.label} ${l.url}\n`; });
    md += `\n`;
  });
  write('06_品牌動態與新車時程.md', md);
}

// ── 07 車媒與 KOL ────────────────────────────────────────────
{
  let md = head('車媒風格與 KOL 檢索',
    `共 ${KOL.length} 筆。用於內容與合作佈局的參考。`);
  const LABEL = { person:'主持人／經營者', positioning:'定位', summary:'風格摘要',
                  collab:'可合作形式', audience:'受眾輪廓', fb:'FB 粉絲', yt:'YT 訂閱',
                  founded:'開台日', link:'連結' };
  const ORDER = ['person','positioning','summary','collab','audience','fb','yt','founded','link'];
  const byCat = {};
  KOL.forEach(k => { const c = k.catLabel || '未分類'; (byCat[c] = byCat[c] || []).push(k); });
  Object.entries(byCat).forEach(([cat, list]) => {
    md += `## ${cat}（${list.length}）\n\n`;
    list.forEach(k => {
      // 同一媒體會有「媒體網站」與個別主持人兩種列，標題需帶 person 才分得開
      const who = k.person && k.person !== k.name ? `｜${k.person}` : '';
      md += `### ${k.name}${who}\n\n`;
      ORDER.forEach(key => {
        const v = k[key];
        if (v == null || v === '' || (key === 'person' && !who)) return;
        md += `- ${LABEL[key]}：${clean(v)}\n`;
      });
      md += `\n`;
    });
  });
  write('07_車媒與KOL.md', md);
}

// ── 08 行銷主軸與品牌行動 ────────────────────────────────────
{
  let md = head('六品牌行銷主軸與品牌行動',
    'THEMES 為各品牌逐月的行銷主軸；ACTIONS 為可對照銷量的具體品牌行動。依設計原則只做時間對齊，不做因果量化。');
  md += `## 逐月行銷主軸\n\n`;
  Object.entries(THEMES).forEach(([brand, byMo]) => {
    md += `### ${brand}\n\n`;
    Object.entries(byMo).forEach(([m, v]) => {
      md += `- **${ML[MO.indexOf(m)] || m}**：${clean(v)}\n`;
    });
    md += `\n`;
  });
  md += `## 品牌行動紀錄\n\n`;
  ACTIONS.forEach(a => {
    md += `- **${a.ym || ''} ${a.brand || ''}**：${clean(a.title || a.desc || JSON.stringify(a))}\n`;
  });
  write('08_行銷主軸與品牌行動.md', md);
}

// ── 09 2025 國產車品牌策略 ───────────────────────────────────
{
  let md = head('2025 國產車品牌策略（往年資料）',
    '2025 年度的國產車品牌策略整理與案例，供年度對照參考。');
  const SLAB = { year2025result:'2025 年成績', coreLogic:'核心邏輯', products:'產品線',
                 marketing:'行銷作為', takeaway:'可借鏡之處', weakness:'弱點' };
  Object.entries(STRAT).forEach(([brand, v]) => {
    md += `## ${brand}\n\n`;
    Object.entries(v).forEach(([k, val]) => {
      if (k === 'color' || val == null || val === '') return;
      const label = SLAB[k] || k;
      if (Array.isArray(val)) {
        md += `**${label}**\n\n`;
        val.forEach(x => { md += `- ${clean(x)}\n`; });
        md += `\n`;
      } else {
        md += `**${label}**：${clean(val)}\n\n`;
      }
    });
  });
  md += `## 案例與借鏡\n\n`;
  CASES.forEach(c => {
    md += `### ${c.brand}｜${clean(c.title)}${c.tag ? `（${c.tag}）` : ''}\n\n`;
    if (c.summary) md += `${clean(c.summary)}\n\n`;
    if (c.lesson) md += `> **${clean(c.lesson)}**\n\n`;
  });
  write('09_2025國產車品牌策略.md', md);
}

// ── 00 讀我（最後產生，才能引用上面算出的統計）──────────────
{
  const y26 = RAW.filter(r => r.yr === 2026);
  const tot26 = y26.reduce((a, r) => a + r.kicks + r.kickse + r.sentra + r.xtrail + r.xtraile + r.ariya, 0);
  const md = head('資料說明與判讀須知（請先讀這份）',
    '這份說明的目的是避免誤讀。其餘檔案的數字都要搭配本篇的口徑規則一起看。') + `
## 這是什麼

NISSAN 台灣市場的競爭情報儀表板匯出。資料涵蓋掛牌數、競品級距、促銷方案、
數位廣告投放、車市月報、新車時程、車媒與 KOL。

- 掛牌資料：2024/01 – ${latest.yr}/${latest.mo}
- 車市月報：${INTEL[0].label} – ${INTEL[INTEL.length - 1].label}（共 ${INTEL.length} 則）
- Nielsen 投放：${NIE[nieMonths[0]].label} – ${NIE[nieMonths[nieMonths.length - 1]].label}（共 ${nieMonths.length} 個月）
- 2026 年 1–${latest.mo} 月 NISSAN 追蹤車款合計 ${n(tot26)} 台

## 四大戰場定義

| 戰場 | NISSAN 對應車款 |
|---|---|
${Object.values(COMP).map(b => `| ${b.label} | ${(b.models || []).filter(m => m.brand === 'NISSAN').map(m => m.name).join('、')} |`).join('\n')}

## ⚠ 口徑陷阱（最容易誤讀的六件事）

1. **Kicks 的成長率不能只看汽油版。** Kicks e-POWER 已於 2025/10 停售，需求移轉到汽油版，
   使汽油版的年增率看起來很高。引用時一律用「Kicks 車系合計（汽油＋e-POWER）」口徑，
   否則會把停售造成的移轉誤認為成長。

2. **民俗月（8 月）的市占率會被分母灌水。** 級距整體在民俗月大幅萎縮，
   某車款的市占因此上升並不代表競爭力提升。看 8 月市占請同時看級距的絕對規模。

3. **單月暴增多半是上市效應，不是趨勢。** 例如 X-Trail e-POWER 2026/09 的 169 台
   來自小改款上市，次月即回到 86 台（全年均值 87）。判斷趨勢請看三個月以上。

4. **年式交替與世代交替會造成斷檔。** 掛牌暴跌不等於需求消失。
   comp.js 的 note 欄已逐款標註，引用前務必一起讀。

5. **Nielsen 跨月只比 SOV，不比絕對金額。** 各月的監測範圍與單位基準不保證一致。
   另：1–6 月的 channels 明細金額與月總額有約 100 倍的尺度不一致，尚未回查原始檔。

6. **未列入追蹤的車款。** HYUNDAI IONIQ 6、TOYOTA Camry 不在促銷追蹤內；
   Nielsen 僅涵蓋六品牌（NISSAN／TOYOTA／HONDA／FORD／HYUNDAI／MAZDA），
   MITSUBISHI、MG、KIA、Tesla 的投放不在監測範圍。

## 資料性質

- 掛牌數為**交通部公路局掛牌數**，不是出廠數也不是訂單數，會受交車節奏與船期影響
- 促銷方案為各月蒐集的**公開牌告與經銷端方案**，實際成交價可能更低
- 車市月報的敘述含**第三方報導與論壇觀察**，非全部可由本儀表板的數字驗證；
  檔案中標有 ⚠ 者即為未經交叉驗證的項目
- 媒體投放與銷售的對應**只做時間對齊，不做因果宣稱**

## 檔案清單

| 檔案 | 內容 |
|---|---|
| 00_讀我_資料說明與判讀須知.md | 本篇 |
| 01_掛牌數_NISSAN.md | 2024–2026 逐月掛牌，含月度註記 |
| 02_競品四大戰場.md | 四個級距的競品掛牌與市占，含異常值註記 |
| 03_競車促銷方案.md | 六品牌逐車款逐月促銷方案 |
| 04_數位廣告投放_Nielsen.md | 六品牌逐月投放金額、SOV、主力車款與觀察 |
| 05_車市銷售觀察月報.md | ${INTEL.length} 則月報，最主要的敘事來源 |
| 06_品牌動態與新車時程.md | 新車上市時程與品牌行銷活動 |
| 07_車媒與KOL.md | 車媒風格與 KOL 檢索 |
| 08_行銷主軸與品牌行動.md | 六品牌逐月行銷主軸 |
| 09_2025國產車品牌策略.md | 往年對照資料 |
`;
  write('00_讀我_資料說明與判讀須知.md', md);
}

console.log(`\n已匯出至 ${OUT}`);
