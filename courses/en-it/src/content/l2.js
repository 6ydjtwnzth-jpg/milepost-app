DLG.l2=[["A","Hi! I'm Emma. What's your name?","Ciao! Sono Emma. Come ti chiami?"],["B","My name's Marco.","Mi chiamo Marco."],["A","Nice to meet you, Marco!","Piacere di conoscerti, Marco!"],["B","Nice to meet you too.","Piacere mio."],["A","Where are you from?","Di dove sei?"],["B","I'm from Italy, from Rome. And you?","Vengo dall'Italia, da Roma. E tu?"],["A","I'm English. I'm from London.","Sono inglese. Sono di Londra."],["B","I'm a student.","Sono uno studente."],["A","Me too!","Anch'io!"]];
EX.l2=[
 {q:"{we} + {be}:",o:["{we are}","{we is}","{we am}"],e:"{I am}, {you are}, {he / she / it is}, {we are}, {they are}."},
 {q:"Una ragazza di Madrid dice:",o:["{I'm Spanish.}","{I'm spanish.}","{Am Spanish.}"],e:"Nazionalità con la maiuscola, e il soggetto {I} non si toglie mai."},
 {q:"«È un albergo.»",o:["{It's a hotel.}","{Is a hotel.}","{He's a hotel.}"],e:"Per le cose ci vuole il soggetto {it}."},
 {q:"«Sono di Napoli.»",o:["{I'm from Naples.}","{I'm of Naples.}","{I'm Naples.}"],e:"La provenienza si dice con {from}."},
 {q:"«Sono studentessa.»",o:["{I'm a student.}","{I'm student.}","{I'm the student.}"],e:"Con le professioni ci vuole {a}: {I'm a student}."},
 {q:"{They're American} vuol dire:",o:["Sono americani","È americana","Siete americani"],e:"{they} = loro. {American} non cambia: vale per tutti."},
 {q:"Ascolta: di dove è?",au:"She's Irish, from Dublin.",o:["dall'Irlanda","dall'Inghilterra","dagli Stati Uniti"],e:"{Irish} = irlandese; {Dublin} = Dublino."},
 {q:"Come si scrive {Emma}, lettera per lettera?",o:["«i, em, em, ei»","«e, em, em, a»","«ai, em, em, ei»"],e:"{E} si chiama «i» e {A} si chiama «ei»."},
 {q:"Qualcuno ti dice {Nice to meet you!}. Rispondi:",o:["{Nice to meet you too.}","{You're welcome.}","{Me too meet you.}"],e:"Si risponde ripetendo e aggiungendo {too}: anche io."},
 {t:"type",q:"Completa: {She} ＿ {from Milan.}",a:["is","'s"],full:"She's from Milan."},
 {t:"type",q:"Completa: {What's} ＿ {name?}",a:["your"],full:"What's your name?"},
 {t:"dict",au:"I'm from Italy."},
 {t:"say",zh:"Presentati: «Mi chiamo…, sono italiano/a, di…»",it:"My name's Giulia. I'm Italian, from Milan."},
 {t:"say",zh:"Chiedi a qualcuno come si chiama e di dov'è",it:"What's your name? Where are you from?"}
];
VOC.l2=[
 ["I","io",""],["you","tu; voi; Lei",""],["he","lui",""],["she","lei",""],["it","esso, essa (cose e animali)",""],["we","noi",""],["they","loro",""],
 ["be","essere",""],["my","il mio, la mia",""],["your","il tuo, il vostro, il Suo",""],["name","nome",""],["what","che cosa, quale",""],["where","dove",""],["from","da, di (provenienza)",""],
 ["and","e",""],["too","anche (in fondo alla frase)",""],["me too","anch'io",""],["nice to meet you","piacere di conoscerti",""],["student","studente, studentessa",""],["spell","fare lo spelling",""],
 ["Italy","Italia",""],["Italian","italiano",""],["England","Inghilterra",""],["English","inglese",""],["the UK","il Regno Unito",""],["British","britannico",""],["the USA","gli Stati Uniti",""],["American","americano",""],
 ["Ireland","Irlanda",""],["Irish","irlandese",""],["Spain","Spagna",""],["Spanish","spagnolo",""],["France","Francia",""],["French","francese",""],["Germany","Germania",""],["German","tedesco",""],["nice","simpatico, bello, piacevole",""]
];
EX.l2=EX.l2.concat([
 {t:"dict",au:"We're students."},
 {t:"say",zh:"Di' a un'amica: «Anche lei è inglese, di Londra.» (parlando di Emma)",it:"She's English too, from London."},
 {t:"type",q:"Completa: {They} ＿ {French.}",a:["are","'re"],full:"They're French."}
]);
