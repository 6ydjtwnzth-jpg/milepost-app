DLG.l8=[["A","Bonjour, madame ! Vous désirez ?","Buongiorno, signora! Che cosa desidera?"],["B","Bonjour ! Je voudrais un café crème et un croissant, s'il vous plaît.","Buongiorno! Vorrei un cappuccino e un croissant, per favore."],["A","Très bien. Et avec ça ?","Benissimo. E poi?"],["B","Un thé au citron pour mon ami, et une bouteille d'eau.","Un tè al limone per il mio amico, e una bottiglia d'acqua."],["A","Voilà. Ça fait neuf euros quatre-vingts.","Ecco a voi. Sono nove euro e ottanta."],["B","Je peux payer par carte ?","Posso pagare con la carta?"],["A","Bien sûr, madame. Merci, bonne journée !","Certo, signora. Grazie, buona giornata!"]];
EX.l8=[
 {q:"Al bar, nel modo più gentile:",o:["{Je voudrais un thé, s'il vous plaît.}","{Je veux un thé.}","{Donne un thé.}"],e:"{je voudrais} = vorrei."},
 {q:"{nous} + {prendre}:",o:["{nous prenons}","{nous prendons}","{nous prennons}"],e:"{prendre} è irregolare: {nous prenons}, {ils prennent}."},
 {q:"Ascolta: che numero senti?",au:"quatre-vingt-dix",o:["90","80","70"],e:"{quatre-vingt-dix} = 4 × 20 + 10."},
 {q:"Ascolta: che numero senti?",au:"soixante-quinze",o:["75","65","15"],e:"{soixante-quinze} = 60 + 15."},
 {q:"Ascolta: quanto costa?",au:"Ça fait neuf euros quatre-vingts.",o:["9,80 €","9,20 €","4,80 €"],e:"{neuf} = 9, {quatre-vingts} = 80."},
 {q:"Vuoi un cappuccino all'italiana. Chiedi:",o:["{un café crème}","{un café}","{un crème de café}"],e:"{un café} è un espresso."},
 {q:"Come si legge {trois}?",o:["«trua»","«tro-is»","«trois»"],e:"{oi} = «ua»."},
 {t:"type",q:"Completa: {L'}＿{, s'il vous plaît.} (il conto)",a:["addition"],full:"L'addition, s'il vous plaît."},
 {t:"dict",au:"Ça fait combien ?"},
 {t:"say",zh:"Ordina un tè al limone e un croissant, poi chiedi quanto costa",it:"Je voudrais un thé au citron et un croissant, s'il vous plaît. Ça fait combien ?"}
];
VOC.l8=[
 ["vouloir","volere",""],["je voudrais","vorrei",""],["prendre","prendere",""],["désirer","desiderare",""],["thé","tè","m"],["café crème","caffè con latte, cappuccino","m"],["croissant","cornetto","m"],
 ["eau","acqua","f"],["bouteille","bottiglia","f"],["citron","limone","m"],["lait","latte","m"],["jus d'orange","succo d'arancia","m"],["bière","birra","f"],["verre","bicchiere","m"],
 ["sucre","zucchero","m"],["addition","conto (al ristorante)","f"],["carte","carta; menù","f"],["euro","euro","m"],["centime","centesimo","m"],["combien","quanto",""],["payer","pagare",""],
 ["pour","per",""],["avec","con",""],["sans","senza",""],["soixante-dix","settanta",""],["quatre-vingts","ottanta",""],["quatre-vingt-dix","novanta",""],["cent","cento",""]
];
