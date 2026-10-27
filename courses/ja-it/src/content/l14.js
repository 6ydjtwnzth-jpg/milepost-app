DLG.l14=[["A","いらっしゃいませ 。 何名[なんめい] さま です か 。","Benvenuti. Quanti siete?"],["B","二人[ふたり] です 。","Siamo in due."],["A","こちら へ どうぞ 。 … ご注文[ちゅうもん] は ？","Da questa parte, prego. … Che cosa ordinate?"],["B","おすすめ は 何[なん] です か 。","Che cosa ci consiglia?"],["A","きょう は 魚[さかな] の ていしょく が おいしい です よ 。","Oggi il menù di pesce è ottimo."],["B","じゃあ 、 わたし は それ に します 。 ゆき さん は ？","Allora io prendo quello. E tu, Yuki?"],["A","わたし は 肉[にく] の ていしょく に します 。 それから 、 ビール を 二本[にほん] お願[ねが]いします 。","Io prendo il menù di carne. E poi due birre, per favore."],["B","… ごちそうさま でした 。 すみません 、 お会計[かいけい] お願[ねが]いします 。","… Grazie, era tutto buonissimo. Scusi, il conto per favore."]];
EX.l14=[
 {q:"Ascolta: quante persone?",au:"三人[さんにん] です 。",o:["tre","due","quattro"],e:"三人[さんにん] = tre persone."},
 {q:"Ascolta: che cosa ordina?",au:"ビール を 一本[いっぽん] ください 。",o:["una birra","tre birre","un bicchiere d'acqua"],e:"一本[いっぽん] = いっぽん."},
 {q:"Per le bottiglie si usa:",o:["本[ほん]","枚[まい]","杯[はい]"],e:"本[ほん] = oggetti lunghi."},
 {q:"Per i fogli e le magliette si usa:",o:["枚[まい]","本[ほん]","人[にん]"],e:"枚[まい] = oggetti piatti."},
 {q:"«tre bottiglie»",o:["三本[さんぼん]","三本[さんほん]","三本[さんぽん]"],e:"Cambio di suono: さんぼん."},
 {q:"«Io prendo il ramen.»",o:["わたし は ラーメン に します 。","わたし は ラーメン を します 。","わたし は ラーメン が します 。"],e:"〜 に します = scelgo…"},
 {q:"«Che cosa ci consiglia?»",o:["おすすめ は 何[なん] です か 。","お会計[かいけい] は 何[なん] です か 。","おいしい は 何[なん] です か 。"],e:"おすすめ = consiglio, specialità."},
 {q:"Dopo aver mangiato si dice:",o:["ごちそうさま でした 。","いただきます 。","いらっしゃいませ 。"],e:"ごちそうさま でした = grazie del pasto."},
 {q:"«Vorrei una borsa nuova.»",o:["あたらしい かばん が ほしい です 。","あたらしい かばん を ほしい です 。","あたらしい かばん が ほしいます 。"],e:"〜 が ほしい です."},
 {t:"ord",q:"Componi: «Due birre, per favore.»",w:["ビール","を","二本[にほん]","お願[ねが]いします","。"],a:["ビール を 二本[にほん] お願[ねが]いします 。"]},
 {t:"type",q:"Completa: お会計[かいけい] 、 ___ 。 (per favore)",a:["お願[ねが]いします"],full:"お会計[かいけい] 、 お願[ねが]いします 。"},
 {t:"type",q:"«due fogli»: 紙[かみ] を ___",a:["二枚[にまい]"],full:"紙[かみ] を 二枚[にまい]"},
 {t:"dict",au:"何[なに] に します か 。"},
 {t:"say",it:"Entri in un ristorante con un'amica: di' che siete in due.",jp:"二人[ふたり] です 。"},
 {t:"say",it:"Ordina: «Io prendo il menù di pesce. E un tè, per favore.»",jp:"わたし は 魚[さかな] の ていしょく に します 。 それから 、 お茶[ちゃ] を お願[ねが]いします 。"}
];
VOC.l14=[
 ["〜 本[ほん]","(classificatore per oggetti lunghi)","x"],["〜 枚[まい]","(classificatore per oggetti piatti)","x"],["〜 杯[はい]","(classificatore per bicchieri, tazze)","x"],["何名[なんめい] さま","quante persone? (cortese)","x"],["〜 に します","scelgo, prendo…","x"],["おすすめ","piatto consigliato","n"],["ご注文[ちゅうもん]","ordinazione","n"],["お会計[かいけい]","conto","n"],
 ["肉[にく]","carne","n"],["魚[さかな]","pesce","n"],["ご飯[はん]","riso; pasto","n"],["てんぷら","tempura","n"],["ていしょく","menù fisso (定食[ていしょく])","n"],["ビール","birra","n"],["おさけ","sake; alcolici","n"],["みそしる","zuppa di miso","n"],["はし","bacchette","n"],["お店[みせ]","negozio, locale","n"],
 ["ほしい","che si desidera","a"],["少[すこ]し","un po'","x"],["こちら へ どうぞ","da questa parte, prego","x"],["いただきます","(prima di mangiare)","x"],["ごちそうさま でした","(dopo mangiato) grazie","x"],["紙[かみ]","carta, foglio","n"]
];
