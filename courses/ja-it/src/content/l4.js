DLG.l4=[["A","いらっしゃいませ 。","Benvenuto!"],["B","すみません 、 これ は 何[なん] です か 。","Scusi, che cos'è questo?"],["A","それ は まくら です 。","Quello è un cuscino."],["B","まくら ？ じゃあ 、 あれ は 何[なん] です か 。","Un cuscino? E quello là che cos'è?"],["A","あれ は ふろしき です 。 日本[にほん] の ふくろ です よ 。","Quello è un furoshiki. È una borsa giapponese, sa."],["B","へえ 、 きれい です ね 。 この ふろしき は いくら です か 。","Oh, che bello! Quanto costa questo furoshiki?"],["A","千[せん] えん です 。","Mille yen."],["B","じゃあ 、 これ を ください 。","Allora prendo questo."]];
EX.l4=[
 {q:"Ascolta: che cosa chiede?",au:"これ は 何[なん] です か 。",o:["Che cos'è questo?","Di chi è questo?","Dov'è questo?"],e:"何[なん] です か = che cos'è?"},
 {q:"Ascolta: di chi è la borsa?",au:"それ は せんせい の かばん です 。",o:["dell'insegnante","dello studente","mia"],e:"せんせい の かばん = la borsa dell'insegnante."},
 {q:"L'oggetto è in mano a te. Dici:",o:["これ","それ","あれ"],e:"これ = vicino a chi parla."},
 {q:"L'oggetto è lontano da tutti e due:",o:["あれ","それ","これ"],e:"あれ = lontano da tutti e due."},
 {q:"«Questo libro è mio.»",o:["この ほん は わたし の です 。","これ ほん は わたし の です 。","この は わたし の ほん です 。"],e:"この + nome."},
 {q:"«Chi è quella persona?»",o:["あの ひと は だれ です か 。","あれ ひと は 何[なん] です か 。","あの ひと は どれ です か 。"],e:"だれ = chi."},
 {q:"Come si legge コーヒー?",o:["kōhī","kohi","kōfi"],e:"ー allunga la vocale."},
 {q:"Quale katakana è «tsu»?",o:["ツ","シ","ソ"],e:"ツ = tsu; シ = shi."},
 {q:"Ascolta e scegli la parola:",au:"テレビ",o:["テレビ","デレビ","テルビ"],e:"テレビ = televisione."},
 {t:"ord",q:"Componi: «Di chi è questo ombrello?»",w:["この","かさ","は","だれ","の","です","か","。"],a:["この かさ は だれ の です か 。"]},
 {t:"type",q:"Completa: ___ は 何[なん] です か 。 (questo, vicino a me)",a:["これ"],full:"これ は 何[なん] です か 。"},
 {t:"type",q:"Scrivi come si legge: パスタ",a:["パスタ"],full:"パスタ"},
 {t:"dict",au:"それ は わたし の です 。"},
 {t:"say",it:"In un negozio, indica un oggetto vicino al commesso e chiedi che cos'è.",jp:"すみません 、 それ は 何[なん] です か 。"},
 {t:"say",it:"Di' che il telefono è tuo.",jp:"それ は わたし の でんわ です 。",e:"Anche: わたし の です."}
];
VOC.l4=[
 ["これ","questo (vicino a me)","x"],["それ","quello (vicino a te)","x"],["あれ","quello (lontano)","x"],["どれ","quale?","x"],["この","questo + nome","x"],["その","quel + nome (vicino a te)","x"],["あの","quel + nome (lontano)","x"],
 ["何[なん]","che cosa?","x"],["だれ","chi?","x"],["ほん","libro","n"],["かばん","borsa, zaino","n"],["ペン","penna","n"],["まくら","cuscino","n"],["ふろしき","furoshiki (telo per avvolgere)","n"],["ふくろ","busta, sacchetto","n"],["おかし","dolci, snack","n"],
 ["コーヒー","caffè","n"],["テレビ","televisione","n"],["スマホ","smartphone","n"],["パスタ","pasta","n"],["ピザ","pizza","n"],["いらっしゃいませ","benvenuto (nei negozi)","x"],["きれい","bello, pulito","a"],["いくら","quanto costa?","x"]
];
