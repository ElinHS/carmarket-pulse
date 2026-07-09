// ⚠ 本檔為 index.html 抽出的純資料檔，需在 index.html 主程式之前載入。
// 每月更新資料時只需修改本檔，不必動 index.html 的程式邏輯。

// 每月從 Opview 匯出後更新此物件；vol=總聲量, pos/neu/neg=情緒則數, pn=正負比
const OPVIEW_MONTHLY = {
  may:{label:'2026年 5月',period:'05/05–05/19（NISSAN Z 發表監測期）',
    nissan:{vol:707,pos:213,neu:437,neg:56,pn:3.8,peak:'05/13 單日244則（發表日）',
      hot:['nissan','e-power','Fairlady Z','改款','裕隆日產','x-trail'],
      note:'Z 發表會三軌同日爆發（社群+新聞+搜尋），P/N 3.8 健康水位；05/14 試駕期 P/N 達 11.25 全期峰值；駕途 JASPER TOUR 連 5 日聲量榜首'},
    toyota:null, honda:null, ford:null, hyundai:null, mazda:null,
  },
  jun:{label:'2026年 6月',period:'待 Opview 匯出後更新',
    nissan:{vol:null,pos:null,neu:null,neg:null,pn:null,peak:'—',hot:[],
      note:'質化訊號（源自車市觀察）：Sentra 304台擠入國產第九；Kicks/X-Trail 缺乏爆點聲量'},
    toyota:{vol:null,pn:null,hot:[],note:'質化訊號：RAV4 PHEV「直上PHEV」成論壇高頻詞，聲量與銷量高度正相關'},
    honda:{vol:null,pn:null,hot:[],note:'質化訊號：論壇出現「廣告打這麼大怎麼才賣千台」質疑——投放與輿論落差警訊'},
    ford:{vol:null,pn:null,hot:[],note:'質化訊號：Territory「便宜治百病」論壇口碑發酵，LINE 封閉社群擴散'},
    hyundai:{vol:null,pn:null,hot:[],note:'質化訊號：論壇出現「Tucson L 被TT打趴了」討論，競品分流輿論成形'},
    mazda:{vol:null,pn:null,hot:[],note:'—'},
  },
};

