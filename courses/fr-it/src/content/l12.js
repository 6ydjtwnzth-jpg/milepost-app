DLG.l12=[["A","Pardon, monsieur. Pour aller au musée d'Orsay, s'il vous plaît ?","Mi scusi, signore. Per andare al museo d'Orsay, per favore?"],["B","Alors… Allez tout droit jusqu'au pont.","Allora… Vada sempre dritto fino al ponte."],["A","Jusqu'au pont, d'accord.","Fino al ponte, va bene."],["B","Traversez le pont, puis tournez à gauche. Le musée est sur votre droite.","Attraversi il ponte, poi giri a sinistra. Il museo è sulla sua destra."],["A","C'est loin ?","È lontano?"],["B","Non, c'est à dix minutes à pied.","No, è a dieci minuti a piedi."],["A","Merci beaucoup, monsieur !","Grazie mille, signore!"],["B","Je vous en prie. Bonne visite !","Prego. Buona visita!"]];
EX.l12=[
 {q:"«Vado al cinema»:",o:["{Je vais au cinéma.}","{Je vais à le cinéma.}","{Je vais en cinéma.}"],e:"{à} + {le} = {au}."},
 {q:"«Abito in Francia»:",o:["{J'habite en France.}","{J'habite à France.}","{J'habite au France.}"],e:"Paesi femminili: {en}."},
 {q:"«Andiamo in Giappone»:",o:["{Nous allons au Japon.}","{Nous allons en Japon.}","{Nous allons à Japon.}"],e:"Paesi maschili: {au}."},
 {q:"«Stasera ceno da Marie»:",o:["{Ce soir, je dîne chez Marie.}","{Ce soir, je dîne à Marie.}","{Ce soir, je dîne de Marie.}"],e:"«da» una persona = {chez}."},
 {q:"Imperativo di {tu tournes}:",o:["{Tourne !}","{Tournes !}","{Tu tourne !}"],e:"Verbi in -er: la forma {tu} perde la s."},
 {q:"Ascolta: dove deve girare?",au:"Tournez à gauche, puis à droite.",o:["prima a sinistra, poi a destra","prima a destra, poi a sinistra","sempre dritto"],e:"{à gauche} = a sinistra, {à droite} = a destra."},
 {t:"type",q:"Completa: {Je viens} ＿ {centre-ville.} (de + le)",a:["du"],full:"Je viens du centre-ville."},
 {t:"dict",au:"Allez tout droit."},
 {t:"say",zh:"Chiedi a una signora come andare alla stazione",it:"Pardon, madame. Pour aller à la gare, s'il vous plaît ?"}
];
VOC.l12=[
 ["endroit", "posto", "m"],["route", "strada (fuori città)", "f"],["chemin", "strada, cammino", "m"],["partout", "dappertutto", ""],["ailleurs", "altrove", ""],["pays", "paese, nazione", "m"],["terre", "terra", "f"],["lieu", "luogo", "m"],
 ["musée","museo","m"],["gare","stazione","f"],["hôtel","albergo","m"],["place","piazza; posto","f"],["pont","ponte","m"],["église","chiesa","f"],["magasin","negozio","m"],["boulangerie","panetteria","f"],
 ["pharmacie","farmacia","f"],["banque","banca","f"],["centre-ville","centro città","m"],["à gauche","a sinistra",""],["à droite","a destra",""],["tout droit","sempre dritto",""],["jusqu'à","fino a",""],
 ["tourner","girare",""],["traverser","attraversare",""],["à pied","a piedi",""],["puis","poi",""],["chez","da, a casa di",""],["en","in; ne (pronome)",""],["au","al, allo (à + le)",""],["du","del, dello (de + le)",""],
 ["d'accord","d'accordo",""],["je vous en prie","prego (formale)",""],["visite","visita","f"],["deuxième","secondo",""],["premier","primo",""]
];
EX.l12=EX.l12.concat([
 {t:"dict",au:"C'est à dix minutes à pied."},
 {t:"say",zh:"Chiedi a un signore come andare al museo d'Orsay",it:"Pardon, monsieur. Pour aller au musée d'Orsay, s'il vous plaît ?"},
 {t:"type",q:"Completa: {Traversez le pont, puis} ＿ {à gauche.} (tourner, vous)",a:["tournez"],full:"Traversez le pont, puis tournez à gauche. Le musée est sur votre droite."}
]);
