DLG.l3=[["A","マルコ さん は とうきょう だいがく の 学生[がくせい] です か 。","Marco, sei uno studente dell'Università di Tokyo?"],["B","はい 、 そう です 。 けん さん も 学生[がくせい] です か 。","Sì, esatto. Anche tu sei studente, Ken?"],["A","はい 、 わたし も 学生[がくせい] です 。 けいざい の 学生[がくせい] です 。","Sì, anch'io sono studente. Studio economia."],["B","そう です か 。 あ 、 それ は けん さん の かさ です か 。","Ah, davvero? Oh, quello è il tuo ombrello?"],["A","いいえ 、 わたし の かさ じゃ ありません 。 ゆき さん の です 。","No, non è il mio ombrello. È di Yuki."],["B","ゆき さん の ？ じゃあ 、 これ も ゆき さん の です か 。","Di Yuki? Allora anche questo è di Yuki?"],["A","はい 、 たぶん 。","Sì, probabilmente."]];
EX.l3=[
 {q:"Ascolta: di chi è l'ombrello?",au:"それ は ゆき さん の かさ です 。",o:["di Yuki","di Ken","di Marco"],e:"ゆき さん の かさ = l'ombrello di Yuki."},
 {q:"Ascolta: che cosa significa?",au:"わたし も 学生[がくせい] です 。",o:["Anch'io sono studente.","Io non sono studente.","Sono uno studente?"],e:"も = anche."},
 {q:"«il mio gatto»",o:["わたし の ねこ","ねこ の わたし","わたし も ねこ"],e:"Prima chi possiede, poi la cosa."},
 {q:"«Anche Ken è italiano?»",o:["けん さん も イタリア人[じん] です か 。","けん さん は も イタリア人[じん] です か 。","けん さん の イタリア人[じん] です か 。"],e:"も prende il posto di は."},
 {q:"Come si legge きって?",o:["kitte","kite","kiite"],e:"っ piccolo = doppia."},
 {q:"Ascolta e scegli la parola:",au:"おばあさん",o:["おばあさん","おばさん","おじさん"],e:"おばあさん (vocale lunga) = nonna; おばさん = zia."},
 {q:"Ascolta e scegli la parola:",au:"きょう",o:["きょう","きよう","こう"],e:"きょう = oggi, una sola sillaba kyō."},
 {q:"Quale kana si legge «ga»?",o:["が","か","ぱ"],e:"か + ゛ = が."},
 {q:"を come particella si legge:",o:["o","wo","wa"],e:"を si legge o."},
 {t:"ord",q:"Componi: «È l'insegnante di giapponese.»",w:["日本語[にほんご]","の","先生[せんせい]","です","。"],a:["日本語[にほんご] の 先生[せんせい] です 。"]},
 {t:"type",q:"Scrivi come si legge: がっこう",a:["がっこう"],full:"がっこう",e:"Si legge gakkō."},
 {t:"type",q:"Completa: わたし ___ 学生[がくせい] です 。 (anch'io)",a:["も"],full:"わたし も 学生[がくせい] です 。"},
 {t:"dict",au:"とうきょう"},
 {t:"say",it:"Di' che sei uno studente di giapponese.",jp:"日本語[にほんご] の 学生[がくせい] です 。"},
 {t:"say",it:"Un amico dice 学生[がくせい] です. Rispondi «anch'io sono studente».",jp:"わたし も 学生[がくせい] です 。"}
];
VOC.l3=[
 ["だいがく","università","n"],["がっこう","scuola","n"],["けいざい","economia","n"],["かさ","ombrello","n"],["それ","quello (vicino a te)","x"],["これ","questo","x"],["たぶん","probabilmente","x"],["そう です","sì, esatto","x"],
 ["きって","francobollo","n"],["おばあさん","nonna; signora anziana","n"],["おじいさん","nonno; signore anziano","n"],["おばさん","zia; signora","n"],["おじさん","zio; signore","n"],["とうきょう","Tokyo","n"],["おちゃ","tè verde","n"],["きょう","oggi","n"],
 ["やま","montagna","n"],["みず","acqua","n"],["ごはん","riso cotto; pasto","n"],["でんわ","telefono","n"],["あめ","pioggia; caramella","n"],["はし","ponte; bacchette","n"]
];
