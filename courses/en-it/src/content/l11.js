DLG.l11=[["A","What do you do in your free time, Sam?","Che cosa fai nel tempo libero, Sam?"],["B","I love dancing and I play the guitar.","Adoro ballare e suono la chitarra."],["A","Can you sing too?","Sai anche cantare?"],["B","No, I can't! What about you?","No! E tu?"],["A","I like swimming. I go swimming twice a week.","Mi piace nuotare. Vado a nuotare due volte alla settimana."],["B","Do you play any sports?","Fai qualche sport?"],["A","Yes, I play tennis on Saturdays. Can you play tennis?","Sì, gioco a tennis il sabato. Sai giocare a tennis?"],["B","Yes, I can, but not very well.","Sì, ma non molto bene."],["A","We can play together on Saturday!","Possiamo giocare insieme sabato!"],["B","Great idea!","Ottima idea!"]];
EX.l11=[
 {q:"«Mi piace leggere.»",o:["{I like reading.}","{I like read.}","{I'm like reading.}"],e:"Dopo {like} la forma in {-ing}."},
 {q:"La forma in {-ing} di {swim}:",o:["{swimming}","{swiming}","{swimmming}"],e:"Vocale breve + consonante: la consonante raddoppia."},
 {q:"La forma in {-ing} di {dance}:",o:["{dancing}","{danceing}","{dancking}"],e:"La {e} finale cade."},
 {q:"«Lei sa nuotare.»",o:["{She can swim.}","{She cans swim.}","{She can to swim.}"],e:"{can}: niente {-s}, niente {to}."},
 {q:"{Can you drive?} Rispondi di no:",o:["{No, I can't.}","{No, I don't.}","{No, I can't drive it.}"],e:"Risposta breve: {No, I can't}."},
 {q:"«Gioco a calcio.»",o:["{I play football.}","{I do football.}","{I go football.}"],e:"Giochi con la palla: {play}."},
 {q:"«Vado a sciare.»",o:["{I go skiing.}","{I play skiing.}","{I do ski.}"],e:"Attività in {-ing}: {go}."},
 {q:"«Faccio yoga.»",o:["{I do yoga.}","{I play yoga.}","{I make yoga.}"],e:"{do yoga}, {do judo}, {do sport}."},
 {q:"Ascolta: sa nuotare?",au:"I can't swim.",o:["no","sì"],e:"{can't}, con la «a» lunga: non sa nuotare."},
 {q:"Ascolta: sa cantare?",au:"She can sing very well.",o:["sì, molto bene","no","un po'"],e:"{can} debole + {very well}: canta molto bene."},
 {t:"type",q:"Completa: {My brother loves} ＿ {football.} (play)",a:["playing"],full:"My brother loves playing football."},
 {t:"type",q:"Completa: {I play} ＿ {piano.}",a:["the"],full:"I play the piano."},
 {t:"dict",au:"I can play the guitar, but I can't sing."},
 {t:"say",zh:"Di' due cose che ti piace fare e una che non ti piace",it:"I love reading and I like cooking, but I don't like running."},
 {t:"say",zh:"Chiedi a un amico se sa suonare uno strumento",it:"Can you play an instrument?"}
];
VOC.l11=[
 ["free time","tempo libero",""],["enjoy","godersi, piacere",""],["hate","odiare",""],["dance","ballare",""],["sing","cantare",""],["swim","nuotare",""],["run","correre",""],["ride a bike","andare in bici",""],["drive","guidare",""],
 ["play","giocare; suonare",""],["guitar","chitarra",""],["piano","pianoforte",""],["instrument","strumento",""],["football","calcio",""],["tennis","tennis",""],["basketball","pallacanestro",""],["sport","sport",""],["yoga","yoga",""],
 ["go swimming","andare a nuotare",""],["go running","andare a correre",""],["go skiing","andare a sciare",""],["park","parco",""],["sea","mare",""],["together","insieme",""],["what about you","e tu?",""],["great idea","ottima idea",""],
 ["very well","molto bene",""],["a little","un po'",""],["photography","fotografia",""],["painting","pittura",""],["game","gioco, partita",""],["practise","esercitarsi",""]
];
EX.l11=EX.l11.concat([
 {t:"dict",au:"We play football on Sundays."},
 {t:"say",zh:"Di': «So andare in bici, ma non so guidare.»",it:"I can ride a bike, but I can't drive."},
 {t:"type",q:"Completa: {They} ＿ {running in the park.}",a:["go"],full:"They go running in the park."}
]);
