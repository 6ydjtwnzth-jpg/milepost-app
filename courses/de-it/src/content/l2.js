DLG.l2=[["A","Hallo! Ich bin Anna. Wie heißt du?","Ciao! Sono Anna. Come ti chiami?"],["B","Ich heiße Luca.","Mi chiamo Luca."],["A","Woher kommst du, Luca?","Di dove sei, Luca?"],["B","Ich komme aus Italien, aus Rom. Und du?","Vengo dall'Italia, da Roma. E tu?"],["A","Ich komme aus Österreich, aus Wien. Aber ich wohne jetzt in Berlin.","Vengo dall'Austria, da Vienna. Ma adesso abito a Berlino."],["B","Bist du Studentin?","Sei studentessa?"],["A","Ja, ich studiere Musik. Und du?","Sì, studio musica. E tu?"],["B","Ich bin auch Student. Ich lerne Deutsch.","Anch'io sono studente. Imparo il tedesco."],["A","Super! Willkommen in Berlin!","Fantastico! Benvenuto a Berlino!"]];
EX.l2=[
 {q:"«Sono Luca.»",o:["{Ich bin Luca.}","{Bin Luca.}","{Ich ist Luca.}"],e:"Il soggetto è obbligatorio: {ich bin}."},
 {q:"«Siamo a Berlino.»",o:["{Wir sind in Berlin.}","{Wir seid in Berlin.}","{Wir bin in Berlin.}"],e:"{wir sind}; {ihr seid}."},
 {q:"«Di dove sei?»",o:["{Woher kommst du?}","{Wo kommst du?}","{Woher komme du?}"],e:"«da dove» = {woher}; con {du}: {kommst}."},
 {q:"«Sono studente.»",o:["{Ich bin Student.}","{Ich bin ein Student.}","{Ich bin der Student.}"],e:"Con la professione o lo stato di studente non si mette l'articolo."},
 {q:"«Vengo dalla Svizzera.»",o:["{Ich komme aus der Schweiz.}","{Ich komme aus Schweiz.}","{Ich komme von der Schweiz.}"],e:"{die Schweiz} ha l'articolo: {aus der Schweiz}."},
 {q:"Una donna italiana dice:",o:["{Ich bin Italienerin.}","{Ich bin Italiener.}","{Ich bin italienisch.}"],e:"Il femminile aggiunge {-in}: {Italienerin}."},
 {q:"Ascolta: di dove è Anna?",au:"Ich komme aus Österreich, aus Wien.",o:["di Vienna","di Berlino","di Roma"],e:"{aus Wien} = di Vienna."},
 {q:"Ascolta: dove abita?",au:"Ich wohne jetzt in Berlin.",o:["a Berlino","a Vienna","a Monaco"],e:"{Ich wohne in Berlin}."},
 {q:"Ascolta: che cosa studia?",au:"Ich studiere Musik.",o:["musica","medicina","tedesco"],e:"{Musik} = musica."},
 {t:"type",q:"Completa: {Wie} ＿ {du?} (heißen)",a:["heißt"],full:"Wie heißt du?"},
 {t:"type",q:"Completa: {Ihr} ＿ {aus Italien.} (sein)",a:["seid"],full:"Ihr seid aus Italien."},
 {t:"dict",au:"Ich komme aus Italien, aus Rom."},
 {t:"say",zh:"Presentati: nome, da dove vieni e dove abiti",it:"Ich heiße Marco. Ich komme aus Italien, aus Bologna. Ich wohne in Bologna."},
 {t:"say",zh:"Chiedi a un ragazzo come si chiama e di dov'è",it:"Wie heißt du? Woher kommst du?"}
];
VOC.l2=[
 ["ich","io",""],["du","tu",""],["er","lui",""],["sie","lei; loro",""],["es","esso (neutro)",""],["wir","noi",""],["ihr","voi",""],
 ["sein","essere",""],["heißen","chiamarsi",""],["kommen","venire",""],["wohnen","abitare",""],["lernen","imparare, studiare",""],["studieren","studiare (all'università)",""],
 ["wie","come",""],["woher","da dove",""],["wo","dove",""],["und","e",""],["aber","ma",""],["auch","anche",""],["jetzt","adesso",""],["aus","da (provenienza)",""],["in","in, a",""],["super","fantastico",""],["willkommen","benvenuto",""],
 ["Italien","Italia",""],["Deutschland","Germania",""],["Österreich","Austria",""],["Schweiz","Svizzera","f:-"],["Spanien","Spagna",""],["Frankreich","Francia",""],
 ["Italiener","italiano (uomo)","m:Italiener"],["Italienerin","italiana (donna)","f:Italienerinnen"],["Italienisch","italiano (la lingua)",""],["Deutsch","tedesco (la lingua)",""],["Student","studente","m:Studenten"],["Studentin","studentessa","f:Studentinnen"],["Musik","musica","f:-"],
 ["Name", "nome", "m:Namen"],
 ["Vorname", "nome (di battesimo)", "m:Vornamen"],
 ["Land", "paese, nazione; campagna", "n:Länder"],
 ["Ausland", "estero", "n:-"],
 ["Ausländer", "straniero", "m:Ausländer"],
 ["fremd", "forestiero, straniero; sconosciuto", ""]
];
EX.l2=EX.l2.concat([
 {t:"dict",au:"Wir sind in Berlin."},
 {t:"say",zh:"Di' che lingua impari",it:"Ich lerne Deutsch."},
 {t:"type",q:"Completa: {Woher} ＿ {du?} (kommen)",a:["kommst"],full:"Woher kommst du?"}
]);
