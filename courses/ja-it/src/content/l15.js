DLG.l15=[["A","マルコ さん 、 週末[しゅうまつ] は どう でした か 。","Marco, com'è andato il fine settimana?"],["B","きょうと に 行[い]きました 。 とても 楽[たの]しかった です 。","Sono andato a Kyoto. Mi sono divertito tantissimo."],["A","いい です ね 。 天気[てんき] は どう でした か 。","Che bello. Com'era il tempo?"],["B","土曜日[どようび] は 雨[あめ] でした が 、 日曜日[にちようび] は いい 天気[てんき] でした 。","Sabato pioveva, ma domenica era bel tempo."],["A","お寺[てら] は どう でした か 。","E i templi com'erano?"],["B","しずか で 、 とても きれい でした 。 でも 、 人[ひと] が 多[おお]かった です 。","Tranquilli e bellissimi. Però c'era tanta gente."],["A","食[た]べもの は ？","E il cibo?"],["B","おいしくて 、 やすかった です 。 でも 、 ホテル は あまり よくなかった です 。","Buono ed economico. Ma l'hotel non era un granché."]];
EX.l15=[
 {q:"Ascolta: com'era il film?",au:"えいが は おもしろかった です 。",o:["interessante","noioso","lungo"],e:"おもしろかった = era interessante."},
 {q:"Ascolta: com'era il tempo?",au:"きのう は 寒[さむ]かった です 。",o:["freddo","caldo","piovoso"],e:"寒[さむ]かった = faceva freddo."},
 {q:"Passato di たかい です:",o:["たかかった です","たかい でした","たかく でした"],e:"-い → かった です."},
 {q:"Passato di いい です:",o:["よかった です","いかった です","いい でした"],e:"いい → よかった."},
 {q:"Passato di しずか です:",o:["しずか でした","しずかかった です","しずかった です"],e:"Aggettivo な: でした."},
 {q:"«Non era caro.»",o:["たかくなかった です 。","たかい じゃ ありません でした 。","たかくない でした 。"],e:"-くなかった です."},
 {q:"«economico e buono»",o:["やすくて 、 おいしい","やすい で 、 おいしい","やすいて 、 おいしい"],e:"-い → くて."},
 {q:"«tranquillo e bello» (しずか è な)",o:["しずか で 、 きれい","しずかくて 、 きれい","しずか な 、 きれい"],e:"な → で."},
 {q:"«In Giappone i treni sono puntuali.» (puntuale = せいかく)",o:["日本[にほん] は 電車[でんしゃ] が せいかく です 。","日本[にほん] が 電車[でんしゃ] は せいかく です 。","日本[にほん] の せいかく は 電車[でんしゃ] です 。"],e:"A は B が + aggettivo."},
 {t:"ord",q:"Componi: «Com'è andato il fine settimana?»",w:["週末[しゅうまつ]","は","どう","でした","か","。"],a:["週末[しゅうまつ] は どう でした か 。"]},
 {t:"type",q:"Passato: あつい です → ___ です",a:["あつかった"],full:"あつかった です"},
 {t:"type",q:"Passato negativo: きれい じゃ ありません → きれい じゃ ありません ___",a:["でした"],full:"きれい じゃ ありません でした"},
 {t:"dict",au:"とても 楽[たの]しかった です 。"},
 {t:"say",it:"Racconta: «Sabato faceva caldo, ma il mare era bellissimo.»",jp:"土曜日[どようび] は 暑[あつ]かった です が 、 うみ は とても きれい でした 。"},
 {t:"say",it:"Chiedi a un collega com'è andato il fine settimana.",jp:"週末[しゅうまつ] は どう でした か 。"}
];
VOC.l15=[
 ["週末[しゅうまつ]","fine settimana","n"],["どう でした か","com'è andato?","x"],["楽[たの]しかった","è stato divertente","a"],["よかった","è stato bello; meno male","a"],["おもしろい","interessante, divertente","a"],["つまらない","noioso","a"],["多[おお]い","numeroso, tanto","a"],["すくない","poco","a"],
 ["暑[あつ]い","caldo (clima)","a"],["寒[さむ]い","freddo (clima)","a"],["ながい","lungo","a"],["みじかい","corto","a"],["雨[あめ]","pioggia","n"],["ゆき","neve","n"],["天気[てんき]","tempo (meteo)","n"],["お寺[てら]","tempio buddhista","n"],["じんじゃ","santuario shintoista","n"],
 ["きょうと","Kyoto","n"],["うみ","mare","n"],["かみ","capelli","n"],["食[た]べもの","cibo","n"],["大変[たいへん]","faticoso, duro","a"],["せいかく","preciso, puntuale","a"]
];
