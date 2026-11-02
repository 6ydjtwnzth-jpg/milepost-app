DLG.l10=[["A","Julie, tu te lèves à quelle heure le matin ?","Julie, a che ora ti alzi la mattina?"],["B","Je me lève à six heures et demie.","Mi alzo alle sei e mezza."],["A","Si tôt ! Pourquoi ?","Così presto! Perché?"],["B","Parce que je commence à huit heures et j'habite loin.","Perché comincio alle otto e abito lontano."],["A","Et le soir, tu rentres tard ?","E la sera torni tardi?"],["B","Je rentre vers dix-neuf heures. Je dîne et je me couche à onze heures.","Torno verso le diciannove. Ceno e vado a letto alle undici."],["A","Et le week-end ?","E nel fine settimana?"],["B","Le week-end, je ne me lève pas avant dix heures !","Nel fine settimana non mi alzo prima delle dieci!"]];
EX.l10=[
 {q:"Ascolta: che ore sono?",au:"Il est huit heures et quart.",o:["8:15","8:45","4:15"],e:"{et quart} = e un quarto."},
 {q:"Ascolta: che ore sono?",au:"Il est onze heures moins le quart.",o:["10:45","11:15","11:45"],e:"{moins le quart} = meno un quarto."},
 {q:"«Mi vesto»:",o:["{je m'habille}","{je me habille}","{je s'habille}"],e:"{me} → {m'} davanti a vocale."},
 {q:"«Ci alziamo»:",o:["{nous nous levons}","{nous nous lèvons}","{nous se levons}"],e:"Con {nous} il pronome è {nous} e la e resta senza accento."},
 {q:"«Non mi alzo presto»:",o:["{Je ne me lève pas tôt.}","{Je me ne lève pas tôt.}","{Je ne lève me pas tôt.}"],e:"{ne} va prima del pronome riflessivo."},
 {q:"Come si legge {famille}?",o:["«famìi»","«famìlle»","«fami-glie»"],e:"{ill} dopo vocale = «i»."},
 {t:"type",q:"Completa: {Il est midi et} ＿ . (e mezzo)",a:["demi","demie"],full:"Il est midi et demi."},
 {t:"dict",au:"Je me lève à sept heures."},
 {t:"say",zh:"Racconta: mi alzo alle sette, faccio colazione e comincio a lavorare alle nove",it:"Je me lève à sept heures, je prends le petit-déjeuner et je commence à travailler à neuf heures."}
];
VOC.l10=[
 ["minute","minuto","f"],["midi","mezzogiorno","m"],["minuit","mezzanotte","m"],["et quart","e un quarto",""],["et demie","e mezza",""],["moins le quart","meno un quarto",""],
 ["matin","mattina","m"],["après-midi","pomeriggio","m"],["nuit","notte","f"],["tôt","presto",""],["tard","tardi",""],["loin","lontano",""],["vers","verso, circa",""],["avant","prima di",""],["après","dopo",""],
 ["se lever","alzarsi",""],["se coucher","andare a letto",""],["s'habiller","vestirsi",""],["se doucher","farsi la doccia",""],["se réveiller","svegliarsi",""],
 ["commencer","cominciare",""],["finir","finire",""],["rentrer","rientrare, tornare a casa",""],["dîner","cenare",""],["petit-déjeuner","colazione","m"],["déjeuner","pranzo; pranzare","m"],["si","così; se; sì (dopo una domanda negativa)",""]
];
EX.l10=EX.l10.concat([
 {t:"dict",au:"Je me lève à six heures et demie."},
 {t:"say",zh:"Racconta a che ora torni la sera e a che ora vai a letto",it:"Je rentre vers dix-neuf heures. Je dîne et je me couche à onze heures."},
 {t:"type",q:"Completa: {Le week-end, je ne} ＿ {lève pas avant dix heures !}",a:["me"],full:"Le week-end, je ne me lève pas avant dix heures !"}
]);
