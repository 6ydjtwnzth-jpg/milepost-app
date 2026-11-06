DLG.l1=[["A","Guten Morgen!","Buongiorno!"],["B","Guten Morgen! Einen Kaffee, bitte.","Buongiorno! Un caffè, per favore."],["A","Hier, bitte.","Ecco a lei."],["B","Danke schön!","Grazie mille!"],["A","Bitte schön.","Prego."],["B","Auf Wiedersehen!","Arrivederci!"],["A","Wiedersehen! Schönen Tag noch!","Arrivederci! Buona giornata!"]];
EX.l1=[
 {q:"Ascolta: quale parola senti?",au:"schön",o:["{schön}","{schon}"],e:"{schön} (bello) ha la {ö}: si dice «e» con le labbra a cerchio. {schon} vuol dire «già»."},
 {q:"Come si legge {ei} in {nein}?",o:["«ai»","«ei»","«i» lunga"],e:"{ei} = «ai»: {nein}, {drei}."},
 {q:"Come si legge {ie} in {Bier}?",o:["«i» lunga","«ie»","«ai»"],e:"{ie} = «i» lunga: {Bier}, {wie}."},
 {q:"Come si legge la {w} di {Wasser}?",o:["come la «v» italiana","come la «u»","come la «w» inglese"],e:"{w} = «v»: {Wasser}, {wie}."},
 {q:"Sono le otto di sera ed entri in un ristorante. Che cosa dici?",o:["{Guten Abend!}","{Guten Morgen!}","{Gute Nacht!}"],e:"La sera, arrivando: {Guten Abend}. {Gute Nacht} solo andando a dormire."},
 {q:"Entri in un negozio alle tre del pomeriggio. Che cosa dici?",o:["{Guten Tag!}","{Guten Abend!}","{Gute Nacht!}"],e:"Durante il giorno: {Guten Tag}."},
 {q:"Qualcuno ti dice:",au:"Danke schön!",o:["{Bitte schön.}","{Entschuldigung.}","{Tschüss.}"],e:"Grazie → prego: {bitte schön}."},
 {q:"Come si chiama la lettera {V}?",o:["«fau»","«ve»","«vu»"],e:"{V} = «fau»; la {W} si chiama «ve»."},
 {q:"Quale parola è scritta bene?",o:["{Kaffee}","{kaffee}","{Kaffe}"],e:"I nomi hanno sempre la maiuscola; {Kaffee} ha due {f} e due {e}."},
 {t:"dict",au:"Danke schön!"},
 {t:"dict",au:"Guten Morgen!"},
 {t:"say",zh:"Di' con il soffio leggero della {ch}: {ich}, {nicht}, {Milch}",it:"ich, nicht, Milch",e:"Un soffio leggero, come «hi» detto sorridendo."},
 {t:"say",zh:"Al bar: chiedi un tè per favore e ringrazia",it:"Einen Tee, bitte. Danke!"}
];
VOC.l1=[
 ["hallo","ciao, salve",""],["Guten Morgen","buongiorno (la mattina)",""],["Guten Tag","buongiorno",""],["Guten Abend","buonasera",""],["Gute Nacht","buonanotte",""],["tschüss","ciao (andando via)",""],["Auf Wiedersehen","arrivederci",""],["bis später","a dopo",""],["bis morgen","a domani",""],
 ["danke","grazie",""],["danke schön","grazie mille",""],["bitte","per favore; prego; ecco",""],["bitte schön","prego",""],["Entschuldigung","scusi, scusa",""],["ja","sì",""],["nein","no",""],["hier","qui, ecco",""],["schön","bello",""],["sehr","molto",""],["Schönen Tag noch!","buona giornata!",""],
 ["Kaffee","caffè","m:Kaffees"],["Tee","tè","m:Tees"],["Wasser","acqua","n:-"],["Bier","birra","n:Biere"],["Milch","latte","f:-"],["Buch","libro","n:Bücher"],["Nacht","notte","f:Nächte"],["Zeit","tempo","f:Zeiten"],["drei","tre",""]
];
EX.l1=EX.l1.concat([
 {t:"type",q:"Completa: {Danke! —} ＿ {.}",a:["Bitte","Bitte schön"],full:"Danke! — Bitte."},
 {t:"dict",au:"Auf Wiedersehen!"},
 {t:"say",zh:"Al bar ti offrono un caffè: rispondi «Sì, per favore!»",it:"Ja, bitte."}
]);
