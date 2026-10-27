DLG.l7=[["A","マルコ さん 、 毎日[まいにち] 何[なに] を します か 。","Marco, che cosa fai ogni giorno?"],["B","毎朝[まいあさ] コーヒー を 飲[の]みます 。 それから 、 大学[だいがく] に 行[い]きます 。","Ogni mattina bevo un caffè. Poi vado all'università."],["A","大学[だいがく] で 何[なに] を 勉強[べんきょう]します か 。","Che cosa studi all'università?"],["B","日本語[にほんご] と れきし を 勉強[べんきょう]します 。 ゆき さん は ？","Studio giapponese e storia. E tu, Yuki?"],["A","わたし は かいしゃいん です 。 ぎんこう で はたらいて います 。","Io sono impiegata. Lavoro in banca."],["B","ばん ごはん は うち で 食[た]べます か 。","La cena la mangi a casa?"],["A","はい 。 でも 、 金曜日[きんようび] は ともだち と 食[た]べます 。","Sì. Però il venerdì mangio con gli amici."],["B","いい です ね 。 わたし も 行[い]きます ！","Che bello. Vengo anch'io!"]];
EX.l7=[
 {q:"Ascolta: che cosa beve ogni mattina?",au:"毎朝[まいあさ] おちゃ を 飲[の]みます 。",o:["tè verde","caffè","acqua"],e:"おちゃ = tè verde."},
 {q:"Ascolta: dove mangia?",au:"うち で 食[た]べます 。",o:["a casa","all'università","al ristorante"],e:"うち で = a casa."},
 {q:"«Non bevo il caffè.»",o:["コーヒー を 飲[の]みません 。","コーヒー を 飲[の]みます 。","コーヒー が 飲[の]みません 。"],e:"Negativo: -ません."},
 {q:"Particella per l'oggetto: パン ___ 食[た]べます 。",o:["を","で","に"],e:"を = oggetto."},
 {q:"Particella per il luogo dell'azione: としょかん ___ 本[ほん] を 読[よ]みます 。",o:["で","に","を"],e:"で = dove si fa l'azione."},
 {q:"Particella per la destinazione: 大学[だいがく] ___ 行[い]きます 。",o:["に","で","を"],e:"に (o へ) = dove si va."},
 {q:"Dove va il verbo nella frase giapponese?",o:["sempre alla fine","dopo il soggetto","all'inizio"],e:"Il verbo chiude la frase."},
 {q:"«Domani vado a Kyoto.» Che forma ha il verbo?",o:["行[い]きます (la stessa del presente)","行[い]きました","行[い]きません"],e:"-ます vale per presente e futuro."},
 {t:"ord",q:"Componi: «Leggo un libro in biblioteca.»",w:["としょかん","で","本[ほん]","を","読[よ]みます","。"],a:["としょかん で 本[ほん] を 読[よ]みます 。"]},
 {t:"ord",q:"Componi: «Ogni mattina bevo il caffè.»",w:["毎朝[まいあさ]","コーヒー","を","飲[の]みます","。"],a:["毎朝[まいあさ] コーヒー を 飲[の]みます 。"]},
 {t:"type",q:"Negativo: 見[み]ます → ___",a:["見[み]ません"],full:"見[み]ません"},
 {t:"type",q:"Completa: テレビ ___ 見[み]ます 。",a:["を"],full:"テレビ を 見[み]ます 。"},
 {t:"dict",au:"大学[だいがく] に 行[い]きます 。"},
 {t:"say",it:"Racconta: «Ogni mattina bevo il caffè e poi vado all'università.»",jp:"毎朝[まいあさ] コーヒー を 飲[の]みます 。 それから 、 大学[だいがく] に 行[い]きます 。"},
 {t:"say",it:"Chiedi a un collega che lavoro fa.",jp:"おしごと は 何[なん] です か 。"}
];
VOC.l7=[
 ["食[た]べます","mangiare","v"],["飲[の]みます","bere","v"],["行[い]きます","andare","v"],["来[き]ます","venire","v"],["かえります","tornare (a casa)","v"],["見[み]ます","vedere, guardare","v"],["読[よ]みます","leggere","v"],["します","fare","v"],["勉強[べんきょう]します","studiare","v"],["起[お]きます","alzarsi","v"],["ねます","dormire, andare a letto","v"],
 ["毎日[まいにち]","ogni giorno","n"],["毎朝[まいあさ]","ogni mattina","n"],["あした","domani","n"],["ばん ごはん","cena","n"],["うち","casa (mia)","n"],["としょかん","biblioteca","n"],["ともだち","amico","n"],["れきし","storia","n"],["パン","pane","n"],
 ["おしごと","lavoro (di altri)","n"],["かいしゃいん","impiegato","n"],["ぎんこう","banca","n"],["それから","poi, e poi","x"],["何[なに]","che cosa?","x"],["金曜日[きんようび]","venerdì","n"]
];
