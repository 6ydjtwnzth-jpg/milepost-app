DLG.l6=[["A","ゆき さん 、 お元気[げんき] です か 。","Yuki, come stai?"],["B","はい 、 元気[げんき] です 。 マルコ さん は ？","Bene, grazie. E tu, Marco?"],["A","元気[げんき] です 。 でも 、 とうきょう は ちょっと あつい です ね 。","Bene. Però a Tokyo fa un po' caldo, eh?"],["B","そう です ね 。 ミラノ は どう です か 。","Eh sì. E Milano com'è?"],["A","ミラノ も にぎやか です 。 でも 、 とうきょう は もっと 大[おお]きい です 。","Anche Milano è vivace. Ma Tokyo è più grande."],["B","とうきょう の アパート は どう です か 。","E il tuo appartamento a Tokyo com'è?"],["A","きれい です が 、 あまり 大[おお]きくない です 。 それに 、 たかい です 。","È pulito, ma non è molto grande. E poi è caro."],["B","とうきょう は たかい です から ね 。","Eh, Tokyo è cara."]];
EX.l6=[
 {q:"Ascolta: com'è il ramen?",au:"この ラーメン は おいしい です 。",o:["buono","caro","piccolo"],e:"おいしい = buono (cibo)."},
 {q:"Ascolta: com'è la stanza?",au:"へや は あまり 大[おお]きくない です 。",o:["non molto grande","molto grande","molto piccola"],e:"あまり + negativo = non molto."},
 {q:"Negativo di たかい:",o:["たかくない です","たかい じゃ ありません","たかくな です"],e:"-い → -くない."},
 {q:"Negativo di しずか:",o:["しずか じゃ ありません","しずかくない です","しずかない です"],e:"Aggettivo な: じゃ ありません."},
 {q:"Negativo di いい:",o:["よくない です","いくない です","いい じゃ ありません"],e:"Eccezione: いい → よくない."},
 {q:"«una città tranquilla»",o:["しずか な まち","しずか まち","しずかい まち"],e:"Aggettivo な davanti a un nome: + な."},
 {q:"«una montagna alta»",o:["たかい やま","たかい な やま","たかく やま"],e:"Aggettivo in -い davanti al nome: invariato."},
 {q:"きれい è un aggettivo…",o:["な (きれい な へや)","in -い (きれくない)","non è un aggettivo"],e:"Trappola: きれい è な."},
 {q:"Completa: この へや は ___ きれい じゃ ありません 。",o:["あまり","とても","もっと"],e:"あまり + negativo."},
 {t:"ord",q:"Componi: «Tokyo è molto vivace.»",w:["とうきょう","は","とても","にぎやか","です","。"],a:["とうきょう は とても にぎやか です 。"]},
 {t:"type",q:"Negativo: さむい です → ___ です 。",a:["さむくない"],full:"さむくない です 。"},
 {t:"type",q:"Davanti a un nome: ゆうめい ___ ひと (una persona famosa)",a:["な"],full:"ゆうめい な ひと"},
 {t:"dict",au:"あつい です ね 。"},
 {t:"say",it:"Chiedi a un amico che non vedi da tempo come sta.",jp:"お元気[げんき] です か 。"},
 {t:"say",it:"Descrivi la tua città: «È tranquilla, ma non è molto grande.»",jp:"しずか です が 、 あまり 大[おお]きくない です 。"}
];
VOC.l6=[
 ["元気[げんき]","in forma, in salute","a"],["大[おお]きい","grande","a"],["小[ちい]さい","piccolo","a"],["たかい","alto; caro","a"],["やすい","economico","a"],["おいしい","buono (cibo)","a"],["あつい","caldo","a"],["さむい","freddo (tempo)","a"],
 ["あたらしい","nuovo","a"],["ふるい","vecchio (cose)","a"],["おもしろい","interessante, divertente","a"],["しずか","tranquillo","a"],["にぎやか","vivace, animato","a"],["ゆうめい","famoso","a"],["しんせつ","gentile","a"],
 ["とても","molto","x"],["あまり","(con negativo) non molto","x"],["ちょっと","un po'","x"],["もっと","di più","x"],["どう","come?","x"],["まち","città, quartiere","n"],["へや","stanza","n"],["アパート","appartamento","n"],["ラーメン","ramen","n"],["が","ma (tra due frasi)","x"]
];
