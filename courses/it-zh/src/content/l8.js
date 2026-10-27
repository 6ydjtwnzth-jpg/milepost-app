DLG.l8=[["A","Buongiorno, dica!","早上好，请说！"],["B","Buongiorno. Vorrei un cappuccino e un cornetto, per favore.","早上好。我想要一杯卡布奇诺和一个羊角面包，谢谢。"],["A","Altro?","还要别的吗？"],["B","Anche un bicchiere d'acqua. Quant'è?","再要一杯水。一共多少钱？"],["A","Tre euro e venti.","三欧二十。"],["B","Ecco a Lei.","给您。"],["A","Grazie, buona giornata!","谢谢，祝您愉快！"],["B","Grazie, altrettanto!","谢谢，您也是！"]];
EX.l8=[
 {q:"听：多少钱？",au:"Sono tre euro e venti.",o:["3.20 欧元","3.12 欧元","20.30 欧元"],e:"tre euro e venti = 3 欧 20 分。"},
 {q:"听：多少钱？",au:"Un euro e cinquanta.",o:["1.50 欧元","1.15 欧元","15 欧元"],e:"cinquanta = 50。"},
 {q:"听，选择意思：",au:"Vorrei un cappuccino, per favore.",o:["我想要一杯卡布奇诺，谢谢。","我喜欢卡布奇诺。","卡布奇诺多少钱？"],e:"vorrei = 我想要（礼貌）。"},
 {q:"在咖啡馆点东西，最礼貌的说法：",o:["Vorrei un caffè, per favore.","Voglio un caffè.","Un caffè, subito!"],e:"voglio 听起来很不客气。"},
 {q:"店员问你：",au:"Altro?",o:["No, grazie. Quant'è?","Sì, altro.","Prego, altro."],e:"还要别的吗？→ 不用了，谢谢。一共多少钱？"},
 {q:"问两个羊角面包的价格：",o:["Quanto costano due cornetti?","Quanto costa due cornetti?","Quanti costa due cornetti?"],e:"复数用 costano。"},
 {q:"strada 怎么读？",o:["str 连在一起读","斯-特-拉达","s-trada 中间停顿"],e:"辅音连着读，不加元音。"},
 {t:"type",q:"填空：___ un caffè, per favore.（礼貌地「我想要」）",a:["vorrei"],full:"Vorrei un caffè, per favore."},
 {t:"dict",au:"Il conto, per favore."},
 {t:"dict",au:"Quanto costa?"},
 {t:"say",zh:"点餐：「我想要一个羊角面包和一杯水，谢谢。」",it:"Vorrei un cornetto e un bicchiere d'acqua, per favore."},
 {t:"say",zh:"付钱时说「给您」，离开时说「谢谢，再见」。",it:"Ecco a Lei. Grazie, arrivederci!"}
];
VOC.l8=[
 ["bar","咖啡馆、酒吧","m"],["cappuccino","卡布奇诺","m"],["cornetto","羊角面包","m"],["spremuta","鲜榨果汁","f"],["tramezzino","三角三明治","m"],["panino","帕尼尼、面包","m"],
 ["acqua","水","f"],["tè","茶","m"],["latte","牛奶","m"],["zucchero","糖","m"],["bicchiere","杯子","m"],["bottiglia","瓶子","f"],
 ["conto","账单","m"],["euro","欧元","m"],["cassa","收银台","f"],["scontrino","小票","m"],["vorrei","我想要（礼貌）",""],["quanto costa?","多少钱？",""],
 ["altro","别的",""],["ecco","这就是；给你",""],["subito","马上",""],["altrettanto","你也一样",""],["dica","请说（礼貌）",""],["strada","街道","f"],["cinquanta","五十",""]
];
