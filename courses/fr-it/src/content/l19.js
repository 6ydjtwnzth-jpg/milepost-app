DLG.l19=[["A","C'est bientôt l'anniversaire de ta mère, non ? Qu'est-ce que tu lui offres ?","Tra poco è il compleanno di tua madre, no? Che cosa le regali?"],["B","Je ne sais pas… Un livre, peut-être. Elle adore lire.","Non so… Un libro, forse. Adora leggere."],["A","Un roman ou une bande dessinée ?","Un romanzo o un fumetto?"],["B","Un roman. Les romans lui plaisent plus que les BD.","Un romanzo. I romanzi le piacciono più dei fumetti."],["A","Et tes parents, tu leur téléphones souvent ?","E i tuoi genitori, gli telefoni spesso?"],["B","Tous les dimanches. Ma mère parle plus que mon père !","Tutte le domeniche. Mia madre parla più di mio padre!"],["A","Comme la mienne !","Come la mia!"]];
EX.l19=[
 {q:"«Gli parlo» (a Marco):",o:["{Je lui parle.}","{Je le parle.}","{Je parle lui.}"],e:"{parler à} → pronome indiretto {lui}."},
 {q:"«Le scrivo» (a Sophie):",o:["{Je lui écris.}","{Je la écris.}","{Je l'écris.}"],e:"{écrire à} → {lui}, anche per una donna."},
 {q:"«Gli telefono» (ai miei genitori):",o:["{Je leur téléphone.}","{Je les téléphone.}","{Je leurs téléphone.}"],e:"{téléphoner à} + plurale → {leur} (senza s)."},
 {q:"«Parigi è più grande di Lione»:",o:["{Paris est plus grand que Lyon.}","{Paris est plus grand de Lyon.}","{Paris est più grand que Lyon.}"],e:"{plus… que}."},
 {q:"«Questo vino è migliore»:",o:["{Ce vin est meilleur.}","{Ce vin est plus bon.}","{Ce vin est mieux bon.}"],e:"{bon} → {meilleur}."},
 {q:"Ascolta: «plü» o «plüs»?",au:"Je n'ai plus faim.",o:["«plü»: {ne… plus} = non più","«plüs»: di più"],e:"Nella negazione {ne… plus} la s non si sente."},
 {t:"type",q:"Completa: {Le train est} ＿ {cher que l'avion.} (meno)",a:["moins"],full:"Le train est moins cher que l'avion."},
 {t:"dict",au:"Je lui offre un livre."},
 {t:"say",zh:"Confronta la tua città con Parigi: più piccola, ma più tranquilla",it:"Ma ville est plus petite que Paris, mais elle est plus tranquille."}
];
VOC.l19=[
 ["pire", "peggiore", ""],["mauvais", "cattivo, brutto", ""],["fort", "forte", ""],["dur", "duro, difficile", ""],["facile", "facile", ""],["avis", "opinione (à mon avis: secondo me)", "m"],["sujet", "argomento", "m"],
 ["anniversaire","compleanno","m"],["cadeau","regalo","m"],["offrir","regalare, offrire",""],["donner","dare",""],["téléphoner","telefonare",""],["plaire","piacere",""],["bientôt","presto, fra poco",""],
 ["peut-être","forse",""],["roman","romanzo","m"],["bande dessinée","fumetto","f"],["lui","gli, le (a lui, a lei)",""],["plus","più",""],["moins","meno",""],["aussi… que","tanto… quanto",""],
 ["meilleur","migliore",""],["mieux","meglio",""],["cher","caro (prezzo)",""],["avion","aereo","m"],["tranquille","tranquillo",""],["intéressant","interessante",""],["beau","bello",""],["belle","bella",""],["vie","vita","f"],["la mienne","la mia",""]
];
EX.l19=EX.l19.concat([
 {t:"dict",au:"Elle adore lire."},
 {t:"say",zh:"Di' che telefoni ai tuoi genitori tutte le domeniche",it:"Tous les dimanches. Ma mère parle plus que mon père !"},
 {t:"type",q:"Completa: {Et tes parents, tu} ＿ {téléphones souvent ?}",a:["leur"],full:"Et tes parents, tu leur téléphones souvent ?"}
]);
