DLG.l11=[["A","Was machst du gern in deiner Freizeit, Felix?","Che cosa ti piace fare nel tempo libero, Felix?"],["B","Ich spiele gern Fußball und ich lese viel. Und du?","Mi piace giocare a calcio e leggo molto. E tu?"],["A","Ich spiele Gitarre und mache Yoga. Aber am liebsten tanze ich.","Suono la chitarra e faccio yoga. Ma più di tutto mi piace ballare."],["B","Tanzen? Das kann ich überhaupt nicht!","Ballare? Non lo so fare per niente!"],["A","Am Samstag ist ein Salsakurs im Zentrum. Kommst du mit?","Sabato c'è un corso di salsa in centro. Vieni anche tu?"],["B","Am Samstag kann ich nicht, da spiele ich Fußball.","Sabato non posso, gioco a calcio."],["A","Schade! Magst du Jazz?","Peccato! Ti piace il jazz?"],["B","Ja, sehr! Ich höre lieber Jazz als Pop.","Sì, molto! Preferisco il jazz al pop."],["A","Super! Am Freitag ist ein Jazzkonzert. Kommst du mit?","Fantastico! Venerdì c'è un concerto jazz. Vieni?"],["B","Ja, gern!","Sì, volentieri!"]];
EX.l11=[
 {q:"«Mi piace nuotare.»",o:["{Ich schwimme gern.}","{Ich gern schwimme.}","{Ich mag gern schwimmen.}"],e:"Verbo coniugato + {gern}."},
 {q:"«Preferisco il tè al caffè.»",o:["{Ich trinke lieber Tee als Kaffee.}","{Ich trinke gerner Tee als Kaffee.}","{Ich trinke lieber Tee wie Kaffee.}"],e:"{gern} → {lieber}; il confronto con {als}."},
 {q:"«Ti piacciono i gatti?»",o:["{Magst du Katzen?}","{Gefallen du Katzen?}","{Magst du gern Katzen?}"],e:"Con un nome: {mögen}."},
 {q:"«So suonare la chitarra.»",o:["{Ich kann Gitarre spielen.}","{Ich kann spielen Gitarre.}","{Ich kann die Gitarre spielen.}"],e:"L'infinito in fondo; niente articolo con lo strumento."},
 {q:"{du} + {können}:",o:["{du kannst}","{du könnst}","{du kann}"],e:"{ich kann}, {du kannst}, {er kann}."},
 {q:"«Gioco a calcio.»",o:["{Ich spiele Fußball.}","{Ich spiele zu Fußball.}","{Ich mache Fußball spielen.}"],e:"{Fußball spielen}, senza preposizione."},
 {q:"Ascolta: che cosa preferisce Mia?",au:"Aber am liebsten tanze ich.",o:["ballare","suonare","leggere"],e:"{am liebsten tanze ich}."},
 {q:"Ascolta: perché Felix non può sabato?",au:"Am Samstag kann ich nicht, da spiele ich Fußball.",o:["gioca a calcio","lavora","va a un concerto"],e:"{da spiele ich Fußball}."},
 {q:"Ascolta: che musica preferisce Felix?",au:"Ich höre lieber Jazz als Pop.",o:["il jazz","il pop","la salsa"],e:"{lieber Jazz als Pop}."},
 {t:"type",q:"Completa: {Ich lese} ＿ {.} (volentieri)",a:["gern","gerne"],full:"Ich lese gern."},
 {t:"type",q:"Completa: {Am Freitag} ＿ {ich nicht kommen.} (können)",a:["kann"],full:"Am Freitag kann ich nicht kommen."},
 {t:"dict",au:"Kannst du Gitarre spielen?"},
 {t:"say",zh:"Di' che cosa ti piace fare nel tempo libero (due cose)",it:"Ich lese gern und ich spiele gern Tennis."},
 {t:"say",zh:"Di' che sai nuotare ma non sai ballare",it:"Ich kann schwimmen, aber ich kann nicht tanzen."}
];
VOC.l11=[
 ["Freizeit","tempo libero","f:-"],["lieber","preferibilmente, preferisco",""],["am liebsten","più di tutto",""],["mögen","piacere, amare (con un nome)",""],["können","sapere (fare), potere",""],["spielen","giocare; suonare (uno strumento)",""],["tanzen","ballare",""],["schwimmen","nuotare",""],["hören","sentire, ascoltare",""],["singen","cantare",""],["reisen","viaggiare",""],["zeigen","mostrare",""],
 ["Fußball","calcio","m:-"],["Tennis","tennis","n:-"],["Yoga","yoga","n:-"],["Sport","sport","m:-"],["Gitarre","chitarra","f:Gitarren"],["Klavier","pianoforte","n:Klaviere"],["Konzert","concerto","n:Konzerte"],["Jazz","jazz","m:-"],["Hobby","hobby","n:Hobbys"],["Zentrum","centro","n:Zentren"],["Schwimmbad","piscina","n:Schwimmbäder"],
 ["überhaupt nicht","per niente",""],["schade","peccato",""],["leider","purtroppo",""],["als","di, che (nei confronti)",""],["Ja, gern!","sì, volentieri!",""],["gelb","giallo",""],["klingeln","suonare (il campanello)",""]
];
EX.l11=EX.l11.concat([
 {t:"dict",au:"Ich höre lieber Jazz als Pop."},
 {t:"say",zh:"Chiedi a un amico se gli piace il calcio",it:"Magst du Fußball?"},
 {t:"type",q:"Completa: {Meine Kinder} ＿ {Pizza.} (mögen)",a:["mögen"],full:"Meine Kinder mögen Pizza."}
]);
