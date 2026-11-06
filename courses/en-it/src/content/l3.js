DLG.l3=[["A","Good morning. What's your name, please?","Buongiorno. Come si chiama, per favore?"],["B","Luca Bianchi.","Luca Bianchi."],["A","How do you spell your surname?","Come si scrive il cognome?"],["B","B-I-A-N-C-H-I.","B-I-A-N-C-H-I."],["A","Thank you. How old are you, Luca?","Grazie. Quanti anni ha, Luca?"],["B","I'm nineteen.","Ho diciannove anni."],["A","Are you a student?","È uno studente?"],["B","Yes, I am.","Sì."],["A","And what's your phone number?","E qual è il suo numero di telefono?"],["B","It's three four seven, double two, five oh nine.","È 347 22 509."],["A","Great. Here's your card.","Perfetto. Ecco la sua tessera."]];
EX.l3=[
 {q:"«Sei italiano?»",o:["{Are you Italian?}","{You are Italian?}","{Is you Italian?}"],e:"Nella domanda il verbo va prima del soggetto: {are you…?}"},
 {q:"{Is she a teacher?} Rispondi di sì:",o:["{Yes, she is.}","{Yes, she's.}","{Yes, is.}"],e:"Risposta breve affermativa senza contrazione: {Yes, she is}."},
 {q:"«Ho vent'anni.»",o:["{I'm twenty.}","{I have twenty years.}","{I have twenty.}"],e:"L'età si dice con {be}."},
 {q:"«Non siamo in ritardo.»",o:["{We aren't late.}","{We not are late.}","{We don't late.}"],e:"Negazione di {be}: {not} dopo il verbo, {aren't} = {are not}."},
 {q:"Ascolta: quale numero senti?",au:"thirteen",o:["13","30","3"],e:"{thirteen} ha l'accento sulla fine: thir-TEEN. {thirty} (30) ha l'accento all'inizio."},
 {q:"Ascolta: quale numero senti?",au:"seventeen",o:["17","70","7"],e:"{seventeen} = 17."},
 {q:"Ascolta: qual è il numero?",au:"It's three four seven, double two, five oh nine.",o:["347 22 509","347 2 509","347 22 59"],e:"{double two} = 22, {oh} = 0."},
 {q:"Un collega ti chiede {How are you?} Rispondi:",o:["{Fine, thanks. And you?}","{I'm twenty.}","{Yes, I am.}"],e:"Risposta breve e domanda ricambiata."},
 {q:"Ascolta: quale parola senti?",au:"it",o:["{it}","{eat}"],e:"{it} ha la «i» breve; {eat} (mangiare) ha la «i» lunga."},
 {t:"type",q:"Completa: {Is he Spanish? — No, he} ＿ {.}",a:["isn't","is not"],full:"No, he isn't."},
 {t:"type",q:"Completa: {How} ＿ {are you? — I'm eleven.}",a:["old"],full:"How old are you?"},
 {t:"dict",au:"How old are you?"},
 {t:"say",zh:"Chiedi a qualcuno se è inglese e quanti anni ha",it:"Are you English? How old are you?"},
 {t:"say",zh:"Rispondi: «No, non sono uno studente. Sono un insegnante.»",it:"No, I'm not a student. I'm a teacher."}
];
VOC.l3=[
 ["not","non",""],["how","come",""],["how old","quanti anni",""],["how are you","come stai, come sta",""],["fine","bene",""],["OK","bene, d'accordo",""],["great","fantastico, benissimo",""],["tired","stanco",""],["a bit","un po'",""],
 ["late","in ritardo, tardi",""],["years old","anni (di età)",""],["number","numero",""],["phone number","numero di telefono",""],["surname","cognome",""],["teacher","insegnante",""],["here","qui",""],["card","tessera, carta",""],["double","doppio",""],
 ["zero","zero",""],["oh","zero (nei numeri di telefono)",""],["one","uno",""],["two","due",""],["four","quattro",""],["five","cinque",""],["six","sei",""],["seven","sette",""],["eight","otto",""],["nine","nove",""],["ten","dieci",""],
 ["eleven","undici",""],["twelve","dodici",""],["thirteen","tredici",""],["fourteen","quattordici",""],["fifteen","quindici",""],["sixteen","sedici",""],["seventeen","diciassette",""],["eighteen","diciotto",""],["nineteen","diciannove",""],["twenty","venti",""]
];
EX.l3=EX.l3.concat([
 {t:"dict",au:"I'm not Spanish, I'm Italian."},
 {t:"say",zh:"Di' il tuo numero di telefono, una cifra alla volta",it:"It's three four seven, one two four, five six seven eight.",e:"Ogni cifra separata; 0 = {oh}, due cifre uguali = {double}."},
 {t:"type",q:"Completa: ＿ {they here? — Yes, they are.}",a:["are"],full:"Are they here? — Yes, they are."}
]);
