DLG.l12=[["A","すみません 、 この ちかく に ゆうびんきょく は あります か 。","Scusi, qui vicino c'è un ufficio postale?"],["B","ゆうびんきょく です か 。 えき の 東口[ひがしぐち] に あります よ 。","L'ufficio postale? È all'uscita est della stazione."],["A","えき は どこ です か 。","E la stazione dov'è?"],["B","この 道[みち] を まっすぐ 行[い]って ください 。 二[ふた]つ目[め] の しんごう を 左[ひだり] に まがって ください 。","Vada dritto per questa strada. Al secondo semaforo giri a sinistra."],["A","二[ふた]つ目[め] の しんごう を 左[ひだり] です ね 。","Al secondo semaforo a sinistra, giusto?"],["B","はい 。 ゆうびんきょく は ぎんこう の となり に あります 。","Sì. L'ufficio postale è accanto alla banca."],["A","わかりました 。 ありがとう ございます 。","Ho capito. Grazie mille."],["B","いいえ 。 気[き]を つけて 。","Di niente. Faccia attenzione."]];
EX.l12=[
 {q:"Ascolta: dov'è la banca?",au:"ぎんこう は えき の 前[まえ] に あります 。",o:["davanti alla stazione","dietro la stazione","dentro la stazione"],e:"前[まえ] = davanti."},
 {q:"Ascolta: dove deve girare?",au:"しんごう を 右[みぎ] に まがって ください 。",o:["a destra al semaforo","a sinistra al semaforo","dritto"],e:"右[みぎ] = destra."},
 {q:"Ascolta: dov'è il gatto?",au:"ねこ は いす の 上[うえ] に います 。",o:["sopra la sedia","sotto la sedia","accanto alla sedia"],e:"上[うえ] = sopra."},
 {q:"«accanto alla banca»",o:["ぎんこう の となり","となり の ぎんこう","ぎんこう に となり"],e:"Riferimento の posizione."},
 {q:"«Vicino alla stazione c'è un konbini.»",o:["えき の ちかく に コンビニ が あります 。","えき の ちかく に コンビニ が います 。","コンビニ の ちかく に えき を あります 。"],e:"Luogo に cosa が あります."},
 {q:"«Ci sono tanti bambini nel parco.» Che verbo?",o:["います","あります","です"],e:"Persone: います."},
 {q:"«là» (lontano da tutti e due):",o:["あそこ","そこ","ここ"],e:"あそこ = là."},
 {q:"«Vada dritto.»",o:["まっすぐ 行[い]って ください 。","まっすぐ 行[い]きます ください 。","まっすぐ 行[い]って ありません 。"],e:"Forma -te + ください."},
 {t:"ord",q:"Componi: «L'ufficio postale è accanto alla banca.»",w:["ゆうびんきょく","は","ぎんこう","の","となり","に","あります","。"],a:["ゆうびんきょく は ぎんこう の となり に あります 。"]},
 {t:"type",q:"Completa: つくえ の ___ に 本[ほん] が あります 。 (sopra)",a:["上[うえ]"],full:"つくえ の 上[うえ] に 本[ほん] が あります 。"},
 {t:"type",q:"Completa: トイレ は ___ です か 。 (dove)",a:["どこ"],full:"トイレ は どこ です か 。"},
 {t:"dict",au:"えき は あそこ です 。"},
 {t:"say",it:"Chiedi a un passante se qui vicino c'è un konbini.",jp:"すみません 、 この ちかく に コンビニ は あります か 。"},
 {t:"say",it:"Spiega: «Vada dritto e al semaforo giri a destra.»",jp:"まっすぐ 行[い]って ください 。 しんごう を 右[みぎ] に まがって ください 。"}
];
VOC.l12=[
 ["上[うえ]","sopra","n"],["下[した]","sotto","n"],["中[なか]","dentro","n"],["外[そと]","fuori","n"],["前[まえ]","davanti","n"],["うしろ","dietro","n"],["となり","accanto","n"],["ちかく","vicino","n"],["右[みぎ]","destra","n"],["左[ひだり]","sinistra","n"],
 ["ここ","qui","x"],["そこ","lì","x"],["あそこ","là","x"],["道[みち]","strada","n"],["しんごう","semaforo","n"],["ゆうびんきょく","ufficio postale","n"],["こうえん","parco","n"],["ホテル","hotel","n"],["こうばん","posto di polizia","n"],["東口[ひがしぐち]","uscita est","n"],
 ["まっすぐ","dritto","x"],["まがって ください","giri, per favore","x"],["わかりました","ho capito","x"],["たくさん","tanto, tanti","x"],["子[こ]ども","bambino","n"],["気[き]を つけて","fai attenzione","x"]
];
