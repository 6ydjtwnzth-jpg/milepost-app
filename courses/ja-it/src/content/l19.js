DLG.l19=[["A","マルコ さん 、 ラーメン と パスタ と 、 どちら が 好[す]き です か 。","Marco, ti piace di più il ramen o la pasta?"],["B","うーん … 。 やっぱり パスタ の ほう が 好[す]き です 。","Mmm… Alla fine preferisco la pasta."],["A","イタリア人[じん] です から ね 。 じゃあ 、 日本[にほん] の 食[た]べもの の 中[なか] で 何[なに] が いちばん 好[す]き です か 。","Sei italiano, eh. E tra i cibi giapponesi quale ti piace di più?"],["B","おこのみやき が いちばん 好[す]き です 。 ピザ より おいしい と 思[おも]います よ 。","L'okonomiyaki è quello che preferisco. Penso che sia più buono della pizza!"],["A","えっ 、 ほんとう ？ ピザ より ？","Eh? Davvero? Più buono della pizza?"],["B","いいえ 、 じょうだん です 。 ピザ ほど おいしい もの は ない と 思[おも]います 。","No, scherzo. Penso che non ci sia niente di buono come la pizza."],["A","ははは 。 けん さん は どう 思[おも]います か 。","Ahah. Ken, tu che ne pensi?"],["B","わたし は どちら も 好[す]き です 。","A me piacciono tutti e due."]];
EX.l19=[
 {q:"Ascolta: che cosa preferisce?",au:"コーヒー より おちゃ の ほう が 好[す]き です 。",o:["il tè","il caffè","tutti e due"],e:"〜 の ほう が = preferisce…"},
 {q:"Ascolta: quale è la stagione più bella secondo lui?",au:"秋[あき] が いちばん きれい だ と 思[おも]います 。",o:["l'autunno","la primavera","l'estate"],e:"いちばん = il più."},
 {q:"«Quale è più caro, A o B?»",o:["A と B と 、 どちら が たかい です か 。","A と B と 、 何[なに] が たかい です か 。","A より B が たかい です か 。"],e:"Tra due: どちら."},
 {q:"«Tokyo è più grande di Roma.»",o:["東京[とうきょう] は ローマ より 大[おお]きい です 。","ローマ は 東京[とうきょう] より 大[おお]きい です 。","東京[とうきょう] より ローマ は 大[おお]きい です 。"],e:"A は B より + aggettivo = A è più … di B."},
 {q:"«Milano non è grande come Roma.»",o:["ミラノ は ローマ ほど 大[おお]きくない です 。","ミラノ は ローマ より 大[おお]きくない です 。","ミラノ は ローマ ほど 大[おお]きい です 。"],e:"〜 ほど + negativo."},
 {q:"«Penso che domani piova.» (nome 雨[あめ])",o:["あした は 雨[あめ] だ と 思[おも]います 。","あした は 雨[あめ] と 思[おも]います 。","あした は 雨[あめ] です と 思[おも]います 。"],e:"Nome + だ + と 思[おも]います."},
 {q:"«Penso che sia interessante.»",o:["おもしろい と 思[おも]います 。","おもしろい だ と 思[おも]います 。","おもしろい です と 思[おも]います 。"],e:"Aggettivi in -い: niente だ."},
 {q:"«Che cosa ne pensi?»",o:["どう 思[おも]います か 。","何[なに] 思[おも]います か 。","どれ 思[おも]います か 。"],e:"どう = come."},
 {t:"ord",q:"Componi: «Il sushi è quello che mi piace di più.»",w:["すし","が","いちばん","好[す]き","です","。"],a:["すし が いちばん 好[す]き です 。"]},
 {t:"type",q:"Completa: パスタ ___ ほう が 好[す]き です 。",a:["の"],full:"パスタ の ほう が 好[す]き です 。"},
 {t:"type",q:"Completa: ローマ は 東京[とうきょう] ___ ふるい です 。 (più di)",a:["より"],full:"ローマ は 東京[とうきょう] より ふるい です 。"},
 {t:"dict",au:"どちら も 好[す]き です 。"},
 {t:"say",it:"Di' quale preferisci tra estate e inverno, e perché.",jp:"冬[ふゆ] より 夏[なつ] の ほう が 好[す]き です 。 うみ に 行[い]けます から 。",e:"行[い]けます = posso andare (lezione 22)."},
 {t:"say",it:"Dai un'opinione: «Penso che il giapponese sia difficile, ma divertente.»",jp:"日本語[にほんご] は むずかしい です が 、 おもしろい と 思[おも]います 。"}
];
VOC.l19=[
 ["どちら","quale (tra due)?","x"],["〜 の ほう が","(preferenza) più…","x"],["より","più di, rispetto a","x"],["〜 ほど 〜ない","non … come","x"],["いちばん","il più","x"],["〜 の 中[なか] で","tra…","x"],["〜 と 思[おも]います","penso che…","x"],["どう 思[おも]います か","che cosa ne pensi?","x"],
 ["やっぱり","alla fine, come pensavo","x"],["じょうだん","scherzo","n"],["ほんとう","vero","n"],["きせつ","stagione","n"],["もの","cosa, oggetto","n"],["むずかしい","difficile","a"],["やさしい","facile; gentile","a"],["はやい","presto; veloce","a"],["おそい","tardi; lento","a"],["ちかい","vicino","a"],["とおい","lontano","a"],["べんり","comodo, pratico","a"],["どちら も","tutti e due","x"],["かも しれません","forse","x"]
];
