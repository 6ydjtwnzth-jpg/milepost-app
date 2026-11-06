DLG.l1=[["A","Hello!","Salve!"],["B","Hi! A coffee, please.","Ciao! Un caffè, per favore."],["A","Here you are.","Ecco a lei."],["B","Thank you!","Grazie!"],["A","You're welcome!","Prego!"],["B","Goodbye!","Arrivederci!"],["A","Bye!","Ciao!"]];
EX.l1=[
 {q:"Ascolta: quale parola senti?",au:"three",o:["{three}","{tree}"],e:"{three} (tre) si dice con la lingua tra i denti; {tree} (albero) con una «t» normale."},
 {q:"Ascolta: quale parola senti?",au:"hello",o:["{hello}","{yellow}"],e:"{hello} comincia con un soffio: la {h} si pronuncia."},
 {q:"Come si chiama la lettera {E}?",o:["«i»","«e»","«ai»"],e:"In inglese {E} si chiama «i», {I} si chiama «ai», {A} si chiama «ei»."},
 {q:"Come si chiama la lettera {I}?",o:["«ai»","«i»","«ei»"],e:"{I} si chiama «ai», come la parola {I} (io)."},
 {q:"Sono le dieci di sera e vai a dormire. Che cosa dici?",o:["{Good night!}","{Good evening!}","{Good morning!}"],e:"{Good night} si dice solo andando via la sera tardi o a letto."},
 {q:"Entri in un negozio alle cinque del pomeriggio. Che cosa dici?",o:["{Good afternoon!}","{Good night!}","{Good morning!}"],e:"Dopo mezzogiorno: {good afternoon}. Va bene anche {hello}."},
 {q:"Qualcuno ti dice:",au:"Thank you!",o:["{You're welcome.}","{Excuse me.}","{Goodbye.}"],e:"Grazie → prego: {you're welcome}."},
 {q:"Al bar porgi il caffè a un cliente. Che cosa dici?",o:["{Here you are.}","{You're welcome.}","{Excuse me.}"],e:"Porgendo qualcosa si dice {here you are}: ecco a lei."},
 {q:"Pesti un piede a qualcuno sull'autobus. Che cosa dici?",o:["{Sorry!}","{Please!}","{Thank you!}"],e:"Per chiedere scusa: {sorry}. {Excuse me} serve soprattutto per attirare l'attenzione o per passare."},
 {t:"dict",au:"Thank you!"},
 {t:"dict",au:"Hello!"},
 {t:"say",zh:"Di' con la lingua tra i denti: {thank you}, {three}",it:"Thank you, three.",e:"Punta della lingua tra i denti e soffia: niente «t»."},
 {t:"say",zh:"Al bar: chiedi un tè per favore e, quando arriva, ringrazia",it:"A tea, please. Thank you!"}
];
VOC.l1=[
 ["hello","ciao, salve",""],["hi","ciao (tra amici)",""],["good morning","buongiorno (fino a mezzogiorno)",""],["good afternoon","buon pomeriggio",""],["good evening","buonasera",""],["good night","buonanotte",""],
 ["goodbye","arrivederci",""],["bye","ciao (andando via)",""],["please","per favore",""],["thank you","grazie",""],["thanks","grazie (più informale)",""],["you're welcome","prego (risposta a grazie)",""],
 ["excuse me","mi scusi (per attirare l'attenzione)",""],["sorry","scusa, mi dispiace",""],["yes","sì",""],["no","no",""],["here you are","ecco a lei, ecco a te",""],
 ["coffee","caffè",""],["tea","tè",""],["water","acqua",""],["house","casa (l'edificio)",""],["hotel","albergo",""],["happy birthday","buon compleanno",""],["sleep well","dormi bene",""],
 ["three","tre",""],["tree","albero",""]
];
EX.l1=EX.l1.concat([
 {t:"type",q:"Completa: {Thank you! — You're} ＿ {!}",a:["welcome"],full:"Thank you! — You're welcome!"},
 {t:"dict",au:"Goodbye!"},
 {t:"say",zh:"Al bar ti offrono un caffè: rispondi «Sì, per favore!»",it:"Yes, please!"}
]);
