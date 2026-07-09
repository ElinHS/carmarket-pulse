// ⚠ 本檔為 index.html 抽出的純資料檔，需在 index.html 主程式之前載入。
// 每月更新資料時只需修改本檔，不必動 index.html 的程式邏輯。

// null = 待填入，數字填入後自動更新圖表
const COMP_DATA = {
  xtrail: {
    label: 'X-Trail 汽油版',
    nissanKey: 'xtrail',
    color: '#c8f55a',
    segment: '中型 SUV',
    models: [
      { brand:'NISSAN', name:'X-Trail 汽油版', color:'#c8f55a', data:{jan:248,feb:123,mar:163,apr:227,may:192,jun:260} },
      { brand:'HONDA',  name:'CR-V',           color:'#fb7185', data:{jan:840,feb:589,mar:1115,apr:0,may:57,jun:1089} },
      { brand:'HYUNDAI',name:'Tucson L',        color:'#a78bfa', data:{jan:222,feb:124,mar:235,apr:215,may:151,jun:218} },
      { brand:'FORD',   name:'Territory',       color:'#60a5fa', data:{jan:1333,feb:838,mar:1257,apr:1294,may:857,jun:1276} },
      { brand:'TOYOTA', name:'RAV4',            color:'#f97316', data:{jan:1822,feb:1796,mar:2063,apr:2028,may:1830,jun:2943} },
      { brand:'MAZDA',  name:'CX-5',            color:'#34d399', data:{jan:281,feb:358,mar:753,apr:320,may:773,jun:808} },
      { brand:'TOYOTA', name:'Corolla Cross',    color:'#fb923c', data:{jan:4604,feb:2441,mar:3565,apr:3573,may:3917,jun:4551} },
    ]
  },
  xtraile: {
    label: 'X-Trail e-POWER',
    nissanKey: 'xtraile',
    color: '#c8f55a',
    segment: '中型 SUV Hybrid',
    models: [
      { brand:'NISSAN', name:'X-Trail e-POWER',      color:'#c8f55a', data:{jan:129,feb:57,mar:58,apr:76,may:70,jun:93} },
      { brand:'TOYOTA', name:'RAV4',                   color:'#f97316', data:{jan:1822,feb:1796,mar:2063,apr:2028,may:1830} },
      { brand:'HYUNDAI',name:'Tucson L',               color:'#a78bfa', data:{jan:222,feb:124,mar:235,apr:215,may:151} },
      { brand:'KIA',    name:'Sportage',              color:'#94a3b8', data:{jan:208,feb:164,mar:217,apr:158,may:338,jun:952} },
      { brand:'VW',     name:'Tiguan',                color:'#7dd3fc', data:{jan:123,feb:99,mar:116,apr:137,may:165,jun:126} },
      { brand:'MAZDA',  name:'CX-60',                 color:'#34d399', data:{jan:131,feb:64,mar:80,apr:227,may:107,jun:110} },
    ]
  },
  kicks: {
    label: 'Kicks',
    nissanKey: 'kicks',
    color: '#c8f55a',
    segment: '小型跨界 CUV',
    models: [
      { brand:'NISSAN',     name:'Kicks',         color:'#c8f55a', data:{jan:458,feb:180,mar:511,apr:515,may:467,jun:481} },
      { brand:'TOYOTA',     name:'Yaris Cross',   color:'#f97316', data:{jan:1229,feb:616,mar:1109,apr:1129,may:1090,jun:1555} },
      { brand:'HONDA',      name:'HR-V',          color:'#fb7185', data:{jan:1112,feb:637,mar:1091,apr:791,may:908,jun:889} },
      { brand:'HYUNDAI',    name:'VENUE',         color:'#a78bfa', data:{jan:310,feb:195,mar:250,apr:267,may:282,jun:207} },
      { brand:'MITSUBISHI', name:'XFORCE',        color:'#f43f5e', data:{jan:634,feb:395,mar:473,apr:468,may:489,jun:499} },
      { brand:'MG',         name:'ZS',            color:'#64748b', data:{jan:175,feb:122,mar:140,apr:169,may:142,jun:167} },
      { brand:'HONDA',      name:'Fit e:HEV',     color:'#fca5a5', data:{jan:520,feb:238,mar:405,apr:199,may:217,jun:246} },
      { brand:'HYUNDAI',    name:'Mufasa',        color:'#c084fc', data:{jan:235,feb:134,mar:190,apr:173,may:169,jun:138} },
    ]
  },
  sentra: {
    label: 'Sentra',
    nissanKey: 'sentra',
    color: '#c8f55a',
    segment: '國產中型房車',
    models: [
      { brand:'NISSAN', name:'Sentra',        color:'#c8f55a', data:{jan:294,feb:170,mar:299,apr:227,may:286,jun:304} },
      { brand:'TOYOTA', name:'Corolla Altis', color:'#f97316', data:{jan:852,feb:411,mar:625,apr:641,may:646,jun:704} },
    ]
  }
};

