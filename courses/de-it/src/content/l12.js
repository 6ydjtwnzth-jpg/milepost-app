DLG.l12=[["A","Entschuldigung, gibt es hier in der Nähe eine Apotheke?","Mi scusi, c'è una farmacia qui vicino?"],["B","Ja, am Marktplatz. Gehen Sie geradeaus und dann die zweite Straße links.","Sì, in piazza del mercato. Vada dritto e poi prenda la seconda strada a sinistra."],["A","Ist das weit?","È lontano?"],["B","Nein, nur fünf Minuten zu Fuß. Die Apotheke ist neben der Post.","No, solo cinque minuti a piedi. La farmacia è accanto alla posta."],["A","Und gibt es dort auch einen Geldautomaten?","E lì c'è anche un bancomat?"],["B","Ja, vor der Bank, gegenüber vom Rathaus.","Sì, davanti alla banca, di fronte al municipio."],["A","Und wie komme ich danach zum Bahnhof?","E dopo, come arrivo alla stazione?"],["B","Am besten mit dem Bus. Die Haltestelle ist an der Ecke.","La cosa migliore è l'autobus. La fermata è all'angolo."],["A","Vielen Dank!","Grazie mille!"],["B","Gern geschehen!","Prego, di niente!"]];
EX.l12=[
 {q:"«C'è un supermercato qui?»",o:["{Gibt es hier einen Supermarkt?}","{Gibt es hier ein Supermarkt?}","{Ist hier einen Supermarkt?}"],e:"{es gibt} + accusativo: {einen}."},
 {q:"«La farmacia è accanto alla posta.»",o:["{Die Apotheke ist neben der Post.}","{Die Apotheke ist neben die Post.}","{Die Apotheke ist neben dem Post.}"],e:"Dove? Dativo: {die Post} → {der Post}."},
 {q:"«con l'autobus»:",o:["{mit dem Bus}","{mit der Bus}","{mit Bus}"],e:"{mit} + dativo; {der Bus} → {dem Bus}."},
 {q:"«alla stazione» (verso):",o:["{zum Bahnhof}","{zu Bahnhof}","{zur Bahnhof}"],e:"{zu} + {dem} = {zum}."},
 {q:"«alla posta» (verso):",o:["{zur Post}","{zum Post}","{zu die Post}"],e:"{zu} + {der} = {zur}."},
 {q:"«a piedi»:",o:["{zu Fuß}","{mit dem Fuß}","{auf Fuß}"],e:"{zu Fuß}."},
 {q:"Ascolta: dov'è la farmacia?",au:"Die Apotheke ist neben der Post.",o:["accanto alla posta","davanti alla banca","di fronte al municipio"],e:"{neben der Post}."},
 {q:"Ascolta: quanto è lontana?",au:"Nein, nur fünf Minuten zu Fuß.",o:["cinque minuti a piedi","cinque minuti in autobus","quindici minuti a piedi"],e:"{fünf Minuten zu Fuß}."},
 {q:"Ascolta: come si va alla stazione?",au:"Am besten mit dem Bus.",o:["in autobus","a piedi","in metropolitana"],e:"{mit dem Bus}."},
 {t:"type",q:"Completa: {Wir wohnen} ＿ {Zentrum.} (in + dem)",a:["im"],full:"Wir wohnen im Zentrum."},
 {t:"type",q:"Completa: {Ich fahre mit} ＿ {U-Bahn.} (la)",a:["der"],full:"Ich fahre mit der U-Bahn."},
 {t:"dict",au:"Wie komme ich zum Bahnhof?"},
 {t:"say",zh:"Chiedi se c'è un bancomat qui vicino",it:"Gibt es hier in der Nähe einen Geldautomaten?"},
 {t:"say",zh:"Spiega: dritto, poi la prima strada a destra",it:"Gehen Sie geradeaus und dann die erste Straße rechts."}
];
VOC.l12=[
 ["es gibt","c'è, ci sono (+ accusativo)",""],["in der Nähe","qui vicino",""],["weit","lontano",""],["nur","solo",""],["zu Fuß","a piedi",""],["geradeaus","dritto",""],["erste","primo",""],["zweite","secondo",""],["dritte","terzo",""],["neben","accanto a",""],["hinter","dietro",""],["zwischen","tra",""],["gegenüber von","di fronte a",""],["an","a, presso (+ luogo)",""],["im","nel (in + dem)",""],["zum","al (zu + dem)",""],["zur","alla (zu + der)",""],["dem","al, allo (dativo)",""],["dort","lì",""],["danach","dopo, poi",""],["am besten","meglio di tutti; la cosa migliore è…",""],["Vielen Dank!","grazie mille!",""],["Gern geschehen!","prego, di niente!",""],["Wie komme ich zum…?","come arrivo al…?",""],
 ["Apotheke","farmacia","f:Apotheken"],["Post","posta, ufficio postale","f:-"],["Bahnhof","stazione","m:Bahnhöfe"],["Haltestelle","fermata","f:Haltestellen"],["Geldautomat","bancomat","m:Geldautomaten"],["Rathaus","municipio","n:Rathäuser"],["Marktplatz","piazza del mercato","m:Marktplätze"],["Ecke","angolo","f:Ecken"],["Ampel","semaforo","f:Ampeln"],["U-Bahn","metropolitana","f:U-Bahnen"],["Kirche","chiesa","f:Kirchen"],["Museum","museo","n:Museen"],["Stadt","città","f:Städte"],["Dorf","paese, villaggio","n:Dörfer"],
 ["bei", "da, presso", ""],
 ["Platz", "piazza; posto", "m:Plätze"],
 ["Taxi", "taxi", "n:Taxis"],
 ["über", "sopra; attraverso; su (un argomento)", ""],
 ["Straßenbahn", "tram", "f:Straßenbahnen"],
 ["Weg", "strada, percorso", "m:Wege"],
 ["durch", "attraverso", ""]
];
EX.l12=EX.l12.concat([
 {t:"dict",au:"Die Haltestelle ist an der Ecke."},
 {t:"say",zh:"Chiedi come si arriva alla posta",it:"Wie komme ich zur Post?"},
 {t:"type",q:"Completa: {Der Geldautomat ist vor} ＿ {Bank.} (la)",a:["der"],full:"Der Geldautomat ist vor der Bank."}
]);
