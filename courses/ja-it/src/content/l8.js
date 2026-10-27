DLG.l8=[["A","いらっしゃいませ 。","Benvenuto!"],["B","すみません 、 この おにぎり は いくら です か 。","Scusi, quanto costa questo onigiri?"],["A","百五十[ひゃくごじゅう] 円[えん] です 。","150 yen."],["B","じゃあ 、 おにぎり を 二[ふた]つ と お茶[ちゃ] を ください 。","Allora due onigiri e un tè, per favore."],["A","はい 。 ぜんぶ で 四百五十[よんひゃくごじゅう] 円[えん] です 。 ふくろ は いります か 。","Certo. In tutto sono 450 yen. Le serve la busta?"],["B","いいえ 、 だいじょうぶ です 。 カード で いい です か 。","No, va bene così. Posso pagare con la carta?"],["A","はい 、 どうぞ 。 ありがとう ございました 。","Sì, prego. Grazie!"]];
EX.l8=[
 {q:"Ascolta: quanto costa?",au:"三百[さんびゃく] 円[えん] です 。",o:["300 yen","3.000 yen","30 yen"],e:"三[さん]百[びゃく] = さんびゃく = 300."},
 {q:"Ascolta: quanto costa?",au:"千[せん] 八百[はっぴゃく] 円[えん] です 。",o:["1.800 yen","1.008 yen","8.100 yen"],e:"千[せん] = 1.000, 八[はっ]百[ぴゃく] = 800."},
 {q:"Ascolta: che cosa chiede la cassiera?",au:"ふくろ は いります か 。",o:["Le serve la busta?","Glielo scaldo?","Paga con la carta?"],e:"ふくろ = busta; いります = serve."},
 {q:"«Tre caffè, per favore.»",o:["コーヒー を 三[みっ]つ ください 。","三[みっ]つ を コーヒー ください 。","コーヒー を 三[さん] ください 。"],e:"Oggetto を numero ください."},
 {q:"10.000 si dice:",o:["一万[いちまん]","十千[じゅうせん]","千万[せんまん]"],e:"Il giapponese conta per diecimila: 万[まん]."},
 {q:"600 si legge:",o:["ろっぴゃく","ろくひゃく","ろっびゃく"],e:"Cambio di suono: ろっぴゃく."},
 {q:"Alla domanda あたためます か 。 vuoi che te lo scaldino. Rispondi:",o:["はい 、 お願[ねが]いします 。","いいえ 、 だいじょうぶ です 。","いくら です か 。"],e:"はい 、 お願[ねが]いします = sì, per favore."},
 {q:"«Quanto costa?»",o:["いくら です か 。","何[なに] です か 。","どこ です か 。"],e:"いくら = quanto (prezzo)."},
 {t:"ord",q:"Componi: «Due onigiri, per favore.»",w:["おにぎり","を","二[ふた]つ","ください","。"],a:["おにぎり を 二[ふた]つ ください 。"]},
 {t:"type",q:"Scrivi il prezzo 5.000 yen (in kana o rōmaji):",a:["五千[ごせん] 円[えん]","五千円[ごせんえん]"],full:"五千[ごせん] 円[えん]"},
 {t:"type",q:"Come si conta «quattro cose»? ___",a:["四[よっ]つ"],full:"四[よっ]つ"},
 {t:"dict",au:"これ を ください 。"},
 {t:"say",it:"Al bar: chiedi un caffè caldo, per favore.",jp:"ホット コーヒー 、 お願[ねが]いします 。"},
 {t:"say",it:"Chiedi quanto costa questo (vicino a te) e se puoi pagare con la carta.",jp:"これ は いくら です か 。 カード で いい です か 。"}
];
VOC.l8=[
 ["コンビニ","konbini, minimarket","n"],["おにぎり","onigiri (polpetta di riso)","n"],["サンドイッチ","panino, tramezzino","n"],["お茶[ちゃ]","tè verde","n"],["お水[みず]","acqua","n"],["ホット","caldo (bevanda)","x"],["アイス","freddo, con ghiaccio","x"],["ケーキ","torta, dolce","n"],
 ["〜 円[えん]","… yen","x"],["百[ひゃく]","cento","n"],["千[せん]","mille","n"],["一万[いちまん]","diecimila","n"],["いくら","quanto costa?","x"],["ぜんぶ で","in tutto","x"],["ください","mi dia, per favore","x"],["お願[ねが]いします","per favore","x"],
 ["一[ひと]つ","uno (cosa)","n"],["二[ふた]つ","due (cose)","n"],["三[みっ]つ","tre (cose)","n"],["ふくろ","busta","n"],["いります","serve, è necessario","v"],["あたためます","scaldare","v"],["カード","carta (di credito)","n"],["だいじょうぶ","va bene, a posto","a"]
];
