DLG.l2=[["A","はじめまして 。 たなか ゆき です 。","Piacere. Sono Yuki Tanaka."],["B","はじめまして 。 マルコ です 。","Piacere. Sono Marco."],["A","マルコ さん は 学生[がくせい] です か 。","Marco, sei uno studente?"],["B","はい 、 学生[がくせい] です 。 イタリア人[じん] です 。","Sì, sono uno studente. Sono italiano."],["A","そう です か 。 わたし は 先生[せんせい] です 。","Ah, davvero? Io sono un'insegnante."],["B","えっ 、 先生[せんせい] です か 。","Oh, è un'insegnante?"],["A","はい 。 日本語[にほんご] の 先生[せんせい] です 。 よろしく お願[ねが]いします 。","Sì. Insegno giapponese. Piacere di conoscerti."],["B","よろしく お願[ねが]いします 。","Piacere mio."]];
EX.l2=[
 {q:"Ascolta: che cosa significa?",au:"わたし は 学生[がくせい] です 。",o:["Sono uno studente.","Sono un insegnante.","Non sono uno studente."],e:"学生[がくせい] = studente."},
 {q:"Ascolta: di che nazionalità è?",au:"ロッシ さん は イタリア人[じん] です 。",o:["italiana","giapponese","francese"],e:"イタリア人[じん] = italiano."},
 {q:"Come si legge は in わたし は マルコ です?",o:["wa","ha","ba"],e:"Come particella は si legge wa."},
 {q:"«Non sono giapponese.»",o:["日本人[にほんじん] じゃ ありません 。","日本人[にほんじん] です か 。","日本人[にほんじん] です 。"],e:"Negativo: じゃ ありません."},
 {q:"Per trasformare una frase in domanda si aggiunge:",o:["か alla fine","は all'inizio","です all'inizio"],e:"学生[がくせい] です か。 = È studente?"},
 {q:"Presentandoti dici:",o:["マルコ です 。","マルコ さん です 。","さん マルコ です 。"],e:"さん non si usa mai per sé stessi."},
 {q:"Come si legge つ?",o:["tsu","tu","chi"],e:"つ = tsu."},
 {q:"Ascolta e scegli la parola:",au:"ねこ",o:["ねこ","ねこう","のこ"],e:"ねこ = gatto."},
 {t:"ord",q:"Componi: «Yuki è giapponese.»",w:["ゆき さん","は","日本人[にほんじん]","です","。"],a:["ゆき さん は 日本人[にほんじん] です 。"]},
 {t:"type",q:"Completa: わたし ___ マルコ です 。",a:["は"],full:"わたし は マルコ です 。"},
 {t:"type",q:"Completa: 学生[がくせい] です ___ 。 (domanda)",a:["か"],full:"学生[がくせい] です か 。"},
 {t:"dict",au:"はじめまして 。"},
 {t:"say",it:"Presentati: «Piacere. Sono (il tuo nome). Sono italiano/a. Piacere di conoscerla.»",jp:"はじめまして 。 マルコ です 。 イタリア人[じん] です 。 よろしく お願[ねが]いします 。",e:"Al posto di マルコ di' il tuo nome."},
 {t:"say",it:"Chiedi a Yuki se è un'insegnante.",jp:"ゆき さん は 先生[せんせい] です か 。"}
];
VOC.l2=[
 ["はじめまして","piacere (la prima volta)","x"],["よろしく お願[ねが]いします","piacere di conoscerla","x"],["わたし","io","n"],["〜 さん","signor/signora (dopo il nome)","x"],["学生[がくせい]","studente","n"],["先生[せんせい]","insegnante","n"],
 ["日本[にほん]","Giappone","n"],["日本人[にほんじん]","giapponese (persona)","n"],["日本語[にほんご]","lingua giapponese","n"],["イタリア","Italia","n"],["イタリア人[じん]","italiano (persona)","n"],["イタリア語[ご]","lingua italiana","n"],["中国[ちゅうごく]","Cina","n"],["フランス","Francia","n"],
 ["そう です か","ah, davvero?","x"],["です","è, sono (cortese)","x"],["じゃ ありません","non è, non sono","x"],
 ["ねこ","gatto","n"],["なつ","estate","n"],["ひと","persona","n"],["はな","fiore; naso","n"],["ふね","nave","n"],["て","mano","n"],["くち","bocca","n"]
];
