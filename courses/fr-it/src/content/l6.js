DLG.l6=[["A","Salut, Tom ! Comment ça va ?","Ciao, Tom! Come va?"],["B","Bof… je suis fatigué et j'ai faim !","Mah… sono stanco e ho fame!"],["A","Tu as faim ? Il est seulement dix heures !","Hai fame? Sono solo le dieci!"],["B","Oui, mais j'ai vingt ans, j'ai toujours faim !","Sì, ma ho vent'anni, ho sempre fame!"],["A","Allez, on va au café ?","Dai, andiamo al bar?"],["B","Bonne idée ! Et toi, tu vas bien ?","Buona idea! E tu, stai bene?"],["A","Oui, très bien. Mais j'ai un peu froid.","Sì, benissimo. Ma ho un po' freddo."]];
EX.l6=[
 {q:"«Ho vent'anni» si dice:",o:["{J'ai vingt ans.}","{Je suis vingt ans.}","{J'ai vingt.}"],e:"L'età si dice con {avoir} e la parola {ans}."},
 {q:"{ils} + {aller}:",o:["{ils vont}","{ils allent}","{ils vas}"],e:"{aller} è irregolare: {je vais}, {ils vont}."},
 {q:"Ascolta: che numero senti?",au:"quarante-cinq",o:["45","55","35"],e:"{quarante} = 40, {cinquante} = 50, {trente} = 30."},
 {q:"Ascolta: che numero senti?",au:"dix-sept",o:["17","7","70"],e:"{dix-sept} = dieci + sette."},
 {q:"«Ventuno» si scrive:",o:["{vingt et un}","{vingt-un}","{vingt et une}"],e:"Con 21, 31, 41, 51, 61 si usa {et}."},
 {q:"«Sono stanca» (una donna):",o:["{Je suis fatiguée.}","{J'ai fatiguée.}","{Je suis fatigué.}"],e:"Con {être} e al femminile: {fatiguée}."},
 {q:"Ascolta: che cosa senti?",au:"poisson",o:["{poisson} (pesce)","{poison} (veleno)"],e:"{ss} = s sorda. {poison} ha la s sonora."},
 {t:"type",q:"Completa: {Tu as quel} ＿ ?",a:["âge","age"],full:"Tu as quel âge ?"},
 {t:"dict",au:"J'ai froid."},
 {t:"say",zh:"Di' quanti anni hai e che hai sete",it:"J'ai trente ans et j'ai soif."}
];
VOC.l6=[
 ["aller","andare; stare (di salute)",""],["faim","fame","f"],["soif","sete","f"],["chaud","caldo",""],["froid","freddo",""],["peur","paura","f"],["sommeil","sonno","m"],
 ["fatigué","stanco",""],["content","contento",""],["malade","malato",""],["tête","testa","f"],["âge","età","m"],["an","anno","m"],["bof","mah, così così",""],["toujours","sempre",""],
 ["un peu","un po'",""],["seulement","solo, soltanto",""],["heure","ora","f"],["idée","idea","f"],["on","noi (colloquiale); si",""],
 ["zéro","zero",""],["deux","due",""],["trois","tre",""],["dix","dieci",""],["vingt","venti",""],["trente","trenta",""],["quarante","quaranta",""],["cinquante","cinquanta",""],["soixante","sessanta",""]
];
EX.l6=EX.l6.concat([
 {t:"dict",au:"Je suis fatigué et j'ai faim !"},
 {t:"say",zh:"Proponi a un amico di andare al bar",it:"Allez, on va au café ?"},
 {t:"type",q:"Completa: {J'ai vingt ans, j'ai toujours} ＿ {!} (fame)",a:["faim"],full:"Oui, mais j'ai vingt ans, j'ai toujours faim !"}
]);
