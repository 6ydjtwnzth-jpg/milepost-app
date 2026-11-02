DLG.l16=[["A","Alors, Sophie, ces vacances ?","Allora, Sophie, queste vacanze?"],["B","Magnifiques ! Je suis partie le 3 août avec mon copain.","Magnifiche! Sono partita il 3 agosto con il mio ragazzo."],["A","Vous êtes allés où ?","Dove siete andati?"],["B","D'abord, nous sommes allés à Marseille, puis nous sommes restés une semaine en Corse.","Prima siamo andati a Marsiglia, poi siamo rimasti una settimana in Corsica."],["A","Il a fait beau ?","Ha fatto bel tempo?"],["B","Il a fait très chaud ! Mais un jour, il y a eu un orage.","Ha fatto caldissimo! Ma un giorno c'è stato un temporale."],["A","Et vous êtes rentrés quand ?","E quando siete tornati?"],["B","Nous sommes rentrés hier soir. Je suis fatiguée mais contente !","Siamo tornati ieri sera. Sono stanca ma contenta!"]];
EX.l16=[
 {q:"«Siamo andati a Lione»:",o:["{Nous sommes allés à Lyon.}","{Nous avons allé à Lyon.}","{Nous sommes allé à Lyon.}"],e:"{aller} vuole {être}; plurale: {allés}."},
 {q:"Claire: «Sono arrivata ieri».",o:["{Je suis arrivée hier.}","{J'ai arrivé hier.}","{Je suis arrivé hier.}"],e:"Soggetto femminile: {arrivée}."},
 {q:"«Sono stato a Parigi»:",o:["{J'ai été à Paris.}","{Je suis été à Paris.}","{J'ai étais à Paris.}"],e:"{être} al {passé composé} vuole {avoir}: {j'ai été}."},
 {q:"«Il 14 luglio»:",o:["{le 14 juillet}","{le 14 de juillet}","{au 14 juillet}"],e:"Data: {le} + numero + mese."},
 {q:"Ascolta: che tempo fa?",au:"Il pleut et il y a du vent.",o:["piove e c'è vento","fa bello e caldo","nevica"],e:"{il pleut} = piove, {du vent} = vento."},
 {q:"«Ci siamo alzati presto» (due uomini):",o:["{Nous nous sommes levés tôt.}","{Nous avons levés tôt.}","{Nous nous avons levé tôt.}"],e:"I pronominali vogliono {être}."},
 {t:"type",q:"Completa: {Elles} ＿ {en Corse.} (aller, passé composé)",a:["sont allées"],full:"Elles sont allées en Corse."},
 {t:"dict",au:"Il a fait très beau."},
 {t:"say",zh:"Racconta: sei partito/a in luglio, sei andato/a in Bretagna, ha piovuto",it:"Je suis parti en juillet, je suis allé en Bretagne et il a plu."}
];
VOC.l16=[
 ["voyage","viaggio","m"],["partir","partire",""],["arriver","arrivare; succedere",""],["rester","restare, rimanere",""],["entrer","entrare",""],["monter","salire",""],["descendre","scendere",""],["tomber","cadere",""],["naître","nascere",""],
 ["copain","ragazzo, amico","m"],["copine","ragazza, amica","f"],["d'abord","prima, per prima cosa",""],["semaine","settimana","f"],["mois","mese","m"],["janvier","gennaio","m"],["mai","maggio","m"],["juillet","luglio","m"],["août","agosto","m"],
 ["décembre","dicembre","m"],["été","estate","m"],["hiver","inverno","m"],["il fait beau","fa bel tempo",""],["il pleut","piove",""],["il neige","nevica",""],["vent","vento","m"],["orage","temporale","m"],["soleil","sole","m"],["magnifique","magnifico",""]
];
EX.l16=EX.l16.concat([
 {t:"dict",au:"Nous sommes rentrés hier soir."},
 {t:"say",zh:"Racconta: «Sono partita il 3 agosto con il mio ragazzo»",it:"Magnifiques ! Je suis partie le 3 août avec mon copain."},
 {t:"type",q:"Completa: {D'abord, nous} ＿ {allés à Marseille.} (être)",a:["sommes"],full:"D'abord, nous sommes allés à Marseille, puis nous sommes restés une semaine en Corse."}
]);
