// ⚠ 本檔為 index.html 抽出的純資料檔，需在 index.html 主程式之前載入。
// 每月更新資料時只需修改本檔，不必動 index.html 的程式邏輯。
//
// 資料源：「2026掛牌數_RAW+競品對戰分析.xlsx」四戰場定義，兩邊須保持一致。
//   ext  ：延伸參考標記（進口延伸／掀背延伸），列入市占計算但視覺淡化
//   note ：質化備註（停產、大改款交替、促銷異常等），表格備註欄與異常標記用
// null = 待填入，數字填入後自動更新圖表

const COMP_DATA = {
  kicks: {
    label: '戰場① 小型SUV/CUV',
    nissanKey: 'kicks',
    color: '#c8f55a',
    segment: '小型SUV/CUV（國產＋進口延伸）',
    models: [
      { brand:'NISSAN',     name:'Kicks',       color:'#c8f55a', data:{jan:458,feb:180,mar:511,apr:515,may:467,jun:481,jul:478} },
      { brand:'TOYOTA',     name:'Yaris Cross', color:'#f97316', data:{jan:1229,feb:616,mar:1109,apr:1129,may:1090,jun:1555,jul:1787} },
      { brand:'HONDA',      name:'HR-V',        color:'#fb7185', data:{jan:1112,feb:637,mar:1091,apr:791,may:908,jun:889,jul:1003} },
      { brand:'MITSUBISHI', name:'XFORCE',      color:'#f43f5e', data:{jan:634,feb:395,mar:473,apr:468,may:489,jun:499,jul:535} },
      { brand:'MAZDA',      name:'CX-30',       color:'#34d399', ext:'進口延伸', data:{jan:187,feb:129,mar:474,apr:173,may:339,jun:215,jul:273} },
      { brand:'HYUNDAI',    name:'VENUE',       color:'#a78bfa', data:{jan:310,feb:195,mar:250,apr:267,may:282,jun:207,jul:304} },
      { brand:'MG',         name:'ZS',          color:'#64748b', data:{jan:175,feb:122,mar:140,apr:169,may:142,jun:167,jul:273} },
      { brand:'MAZDA',      name:'CX-3',        color:'#6ee7b7', ext:'進口延伸', data:{jan:6,feb:21,mar:63,apr:30,may:38,jun:38,jul:52} },
    ]
  },
  sentra: {
    label: '戰場② 中型房車',
    nissanKey: 'sentra',
    color: '#c8f55a',
    segment: '中型房車 SEDAN（含掀背／進口延伸參考）',
    models: [
      { brand:'NISSAN', name:'Sentra',        color:'#c8f55a', data:{jan:294,feb:170,mar:299,apr:227,may:286,jun:304,jul:265} },
      { brand:'TOYOTA', name:'Corolla Altis', color:'#f97316', data:{jan:852,feb:411,mar:625,apr:641,may:646,jun:704,jul:772} },
      { brand:'HONDA',  name:'Fit e:HEV',     color:'#fb7185', ext:'掀背延伸', data:{jan:520,feb:238,mar:405,apr:199,may:217,jun:246,jul:286} },
      { brand:'MAZDA',  name:'MAZDA3',        color:'#34d399', ext:'進口延伸', data:{jan:140,feb:58,mar:297,apr:257,may:134,jun:284,jul:132} },
      { brand:'FORD',   name:'FOCUS',         color:'#60a5fa', note:'已近停產尾量', data:{jan:1,feb:106,mar:65,apr:3,may:0,jun:0,jul:0} },
    ]
  },
  xtrail: {
    label: '戰場③ 國產中大型SUV',
    nissanKey: 'xtrail',
    color: '#c8f55a',
    segment: '國產中大型SUV',
    models: [
      { brand:'NISSAN', name:'X-Trail 汽油版', color:'#c8f55a', data:{jan:248,feb:123,mar:163,apr:227,may:192,jun:260,jul:305} },
      { brand:'TOYOTA', name:'Corolla Cross',  color:'#f97316', data:{jan:4604,feb:2441,mar:3565,apr:3573,may:3917,jun:4551,jul:4710} },
      { brand:'FORD',   name:'Territory',      color:'#60a5fa', data:{jan:1333,feb:838,mar:1257,apr:1294,may:857,jun:1276,jul:963} },
      { brand:'HONDA',  name:'CR-V',           color:'#fb7185', note:'4月0台／5月57台為大改款交替期，6月起回升', data:{jan:840,feb:589,mar:1114,apr:0,may:57,jun:1089,jul:894} },
      { brand:'HYUNDAI',name:'Tucson L',       color:'#a78bfa', data:{jan:222,feb:124,mar:235,apr:215,may:151,jun:218,jul:221} },
      { brand:'HYUNDAI',name:'MUFASA',         color:'#c084fc', data:{jan:235,feb:134,mar:190,apr:173,may:169,jun:138,jul:121} },
      { brand:'FORD',   name:'KUGA',           color:'#93c5fd', note:'5月起近0，全面停產', data:{jan:132,feb:59,mar:161,apr:99,may:0,jun:7,jul:0} },
    ]
  },
  xtraile: {
    label: '戰場④ 進口中大型SUV',
    nissanKey: 'xtraile',
    color: '#c8f55a',
    segment: '進口中大型SUV',
    models: [
      { brand:'NISSAN', name:'X-Trail e-POWER', color:'#c8f55a', data:{jan:129,feb:57,mar:58,apr:76,may:70,jun:93,jul:72} },
      { brand:'TOYOTA', name:'RAV4',            color:'#f97316', data:{jan:1822,feb:1796,mar:2063,apr:2028,may:1830,jun:2943,jul:2683} },
      { brand:'MAZDA',  name:'CX-5',            color:'#34d399', data:{jan:281,feb:358,mar:753,apr:320,may:773,jun:808,jul:576} },
      { brand:'KIA',    name:'Sportage',        color:'#94a3b8', note:'6月952台暴增：電池八年延保＋優惠；7月935台維持高檔（TNCAP撞擊2星未見明顯衝擊）', data:{jan:208,feb:164,mar:217,apr:158,may:338,jun:952,jul:935} },
      { brand:'VW',     name:'Tiguan',          color:'#7dd3fc', data:{jan:123,feb:99,mar:116,apr:137,may:165,jun:126,jul:148} },
      { brand:'MAZDA',  name:'CX-60',           color:'#6ee7b7', data:{jan:131,feb:64,mar:80,apr:227,may:107,jun:110,jul:175} },
    ]
  }
};
