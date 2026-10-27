DLG.l13=[["A","もしもし 、 ゆき さん です か 。 マルコ です 。","Pronto, Yuki? Sono Marco."],["B","あ 、 マルコ さん 。 どう しました か 。","Ah, Marco. Che succede?"],["A","今[いま] 、 えき に います 。 でも 、 ゆき さん の うち が わかりません 。","Sono alla stazione, ma non trovo casa tua."],["B","じゃあ 、 えき で 待[ま]って ください 。 すぐ 行[い]きます 。","Allora aspettami alla stazione. Arrivo subito."],["A","すみません 。 あの 、 コンビニ で 飲[の]みもの を 買[か]って も いい です か 。","Scusa. Ehm, posso comprare da bere al konbini?"],["B","いい です よ 。 わたし の 分[ぶん] も 買[か]って ください 。","Certo. Compra qualcosa anche per me."],["A","わかりました 。 何[なに] が いい です か 。 ここ に 書[か]いて ください 。","D'accordo. Che cosa vuoi? Scrivimelo qui."],["B","ははは 、 電話[でんわ] です よ 。 お茶[ちゃ] で いい です 。","Ahah, siamo al telefono! Va bene un tè."]];
EX.l13=[
 {q:"Forma -te di 待[ま]つ:",o:["待[ま]って","待[ま]ちて","待[ま]んで"],e:"-つ → って."},
 {q:"Forma -te di 飲[の]む:",o:["飲[の]んで","飲[の]みて","飲[の]って"],e:"-む → んで."},
 {q:"Forma -te di 書[か]く:",o:["書[か]いて","書[か]って","書[か]きて"],e:"-く → いて."},
 {q:"Forma -te di 話[はな]す:",o:["話[はな]して","話[はな]って","話[はな]いて"],e:"-す → して."},
 {q:"Forma -te di 行[い]く:",o:["行[い]って","行[い]いて","行[い]きて"],e:"Eccezione: 行[い]って."},
 {q:"Forma -te di 食[た]べる:",o:["食[た]べて","食[た]べって","食[た]んで"],e:"Gruppo 2: る → て."},
 {q:"Ascolta: che cosa chiede?",au:"しゃしん を とって も いい です か 。",o:["se può fare una foto","se può entrare","di fare una foto a lui"],e:"〜て も いい です か = posso…?"},
 {q:"Ascolta: che cosa non si può fare?",au:"ここ で たばこ を すって は いけません 。",o:["fumare","mangiare","parlare al telefono"],e:"たばこ を すう = fumare."},
 {q:"«Parli più piano, per favore.»",o:["ゆっくり 話[はな]して ください 。","ゆっくり 話[はな]します ください 。","ゆっくり 話[はな]して は いけません 。"],e:"-te + ください."},
 {q:"Al telefono si risponde:",o:["もしもし","いらっしゃいませ","いただきます"],e:"もしもし = pronto."},
 {t:"type",q:"Forma -te di 来[く]る:",a:["来[き]て"],full:"来[き]て"},
 {t:"type",q:"Forma -te di 買[か]う:",a:["買[か]って"],full:"買[か]って"},
 {t:"ord",q:"Componi: «Posso usare il bagno?»",w:["トイレ","を","使[つか]って","も","いい","です","か","。"],a:["トイレ を 使[つか]って も いい です か 。"]},
 {t:"dict",au:"ちょっと 待[ま]って ください 。"},
 {t:"say",it:"Chiedi di ripetere ancora una volta, per favore.",jp:"もう 一度[いちど] 言[い]って ください 。"},
 {t:"say",it:"In un museo, chiedi se puoi fare una foto.",jp:"しゃしん を とって も いい です か 。"}
];
VOC.l13=[
 ["待[ま]つ","aspettare","v"],["書[か]く","scrivere","v"],["読[よ]む","leggere","v"],["話[はな]す","parlare","v"],["聞[き]く","ascoltare; chiedere","v"],["言[い]う","dire","v"],["買[か]う","comprare","v"],["使[つか]う","usare","v"],["とる","prendere; fare (foto)","v"],["すう","fumare; aspirare","v"],
 ["〜て ください","per favore, faccia…","x"],["〜て も いい です か","posso…?","x"],["〜て は いけません","non si può…","x"],["もしもし","pronto (al telefono)","x"],["すぐ","subito","x"],["ゆっくり","piano, con calma","x"],["もう 一度[いちど]","ancora una volta","x"],
 ["しゃしん","foto","n"],["たばこ","sigaretta","n"],["飲[の]みもの","bevanda","n"],["電話[でんわ]","telefono","n"],["電車[でんしゃ]","treno","n"],["どう しました か","che succede?","x"],["あの","ehm (per cominciare a parlare)","x"]
];
