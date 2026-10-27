DLG.l20=[["A","いらっしゃいませ 。","Benvenuta."],["B","すみません 、 母[はは] に プレゼント を あげたい です 。 何[なに] が いい です か 。","Scusi, vorrei fare un regalo a mia madre. Che cosa mi consiglia?"],["A","こちら の スカーフ は いかが です か 。 にんき が あります よ 。","Che ne dice di questa sciarpa? Va molto."],["B","きれい です ね 。 これ の 青[あお] は あります か 。","È bella. Ce l'avete blu?"],["A","はい 、 ございます 。 どうぞ 、 さわって みて ください 。","Sì, certo. Prego, la tocchi pure."],["B","やわらかい です ね 。 じゃあ 、 これ に します 。 プレゼント 用[よう] に つつんで ください 。","È morbida. Allora prendo questa. Me la può incartare come regalo?"],["A","かしこまりました 。","Certamente."],["B","… マルコ さん 、 見[み]て ！ この 前[まえ] 、 マルコ さん が くれた チョコ 、 母[はは] も 大好[だいす]き でした よ 。","… Marco, guarda! Anche a mia madre è piaciuta tantissimo la cioccolata che mi hai regalato l'altra volta."]];
EX.l20=[
 {q:"Ascolta: che cosa ha ricevuto?",au:"ともだち に 本[ほん] を もらいました 。",o:["un libro","dei fiori","una sciarpa"],e:"もらいました = ho ricevuto."},
 {q:"Ascolta: che cosa chiede?",au:"もう すこし 小[ちい]さい の は あります か 。",o:["una taglia più piccola","un altro colore","il prezzo"],e:"小[ちい]さい の = una più piccola."},
 {q:"Io do un regalo a Yuki:",o:["わたし は ゆき さん に プレゼント を あげました 。","わたし は ゆき さん に プレゼント を くれました 。","ゆき さん は わたし に プレゼント を あげました 。"],e:"Verso l'esterno: あげる."},
 {q:"Yuki dà un regalo a me:",o:["ゆき さん が わたし に プレゼント を くれました 。","ゆき さん が わたし に プレゼント を あげました 。","わたし は ゆき さん に プレゼント を くれました 。"],e:"Verso di me: くれる."},
 {q:"«Ho ricevuto dei fiori dalla mamma.»",o:["母[はは] に はな を もらいました 。","母[はは] に はな を くれました 。","母[はは] が はな を もらいました 。"],e:"もらう: ricevere da (に / から)."},
 {q:"«Ho provato a mangiare il natto.»",o:["なっとう を 食[た]べて みました 。","なっとう を 食[た]べる みました 。","なっとう を 食[た]べた みます 。"],e:"Forma -te + みる."},
 {q:"Per le scarpe e i pantaloni si dice:",o:["はく","着[き]る","かぶる"],e:"Sotto la vita: はく."},
 {q:"Offrendo un regalo, per modestia:",o:["つまらない もの です が …","とても たかい です よ 。","いただきます 。"],e:"つまらない もの です が = è una cosa da poco."},
 {q:"In negozio non vuoi comprare subito:",o:["ちょっと 考[かんが]えます 。","これ に します 。","つつんで ください 。"],e:"«Ci penso» = per ora no."},
 {t:"ord",q:"Componi: «Ce l'avete rosso?»",w:["これ","の","赤[あか]","は","あります","か","。"],a:["これ の 赤[あか] は あります か 。"]},
 {t:"type",q:"«provare (a indossare)»: 着[き]る → 着[き]て ___",a:["みる"],full:"着[き]て みる"},
 {t:"type",q:"Completa: 父[ちち] ___ ネクタイ を あげました 。 (a papà)",a:["に"],full:"父[ちち] に ネクタイ を あげました 。"},
 {t:"dict",au:"プレゼント を もらいました 。"},
 {t:"say",it:"In negozio: chiedi di provare questa maglietta.",jp:"この Tシャツ 、 着[き]て みて も いい です か 。"},
 {t:"say",it:"Racconta: «Per il compleanno un amico mi ha regalato un libro.»",jp:"たんじょうび に ともだち が 本[ほん] を くれました 。"}
];
VOC.l20=[
 ["あげる","dare (a un altro)","v"],["くれる","dare (a me)","v"],["もらう","ricevere","v"],["〜て みる","provare a fare","x"],["プレゼント","regalo","n"],["おみやげ","souvenir, regalo dal viaggio","n"],["たんじょうび","compleanno","n"],["買[か]い物[もの]","spesa, shopping","n"],
 ["スカーフ","sciarpa, foulard","n"],["くつ","scarpe","n"],["Tシャツ","maglietta","n"],["チョコ","cioccolato","n"],["ネクタイ","cravatta","n"],["色[いろ]","colore","n"],["赤[あか]","rosso","n"],["青[あお]","blu","n"],["白[しろ]","bianco","n"],["黒[くろ]","nero","n"],
 ["はく","indossare (sotto la vita)","v"],["つつむ","incartare","v"],["さわる","toccare","v"],["考[かんが]える","pensare, riflettere","v"],["やわらかい","morbido","a"],["にんき","popolarità","n"],["いかが です か","che ne dice? (cortese)","x"],["かしこまりました","certamente (commessi)","x"]
];
