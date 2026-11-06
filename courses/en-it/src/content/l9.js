DLG.l9=[["A","Where do you live, Giulia?","Dove abiti, Giulia?"],["B","In Camden, near the station.","A Camden, vicino alla stazione."],["A","Do you live alone?","Abiti da sola?"],["B","No, I don't. I live with two friends.","No. Abito con due amici."],["A","What do they do?","Che cosa fanno?"],["B","Sarah studies music and Jack works in a bookshop.","Sarah studia musica e Jack lavora in una libreria."],["A","Does Jack like books?","A Jack piacciono i libri?"],["B","Yes, he does! He reads every day.","Sì! Legge tutti i giorni."],["A","Why do you live in London?","Perché vivi a Londra?"],["B","Because I study here. And I love this city!","Perché studio qui. E adoro questa città!"]];
EX.l9=[
 {q:"«Dove abiti?»",o:["{Where do you live?}","{Where you live?}","{Where are you live?}"],e:"Parola interrogativa + {do} + soggetto + verbo."},
 {q:"«Lei parla inglese?»",o:["{Does she speak English?}","{Does she speaks English?}","{Do she speak English?}"],e:"Con {she}: {does} + verbo senza {-s}."},
 {q:"{Do you like tea?} Rispondi di sì:",o:["{Yes, I do.}","{Yes, I like.}","{Yes, I am.}"],e:"Si ripete l'aiutante: {Yes, I do}."},
 {q:"«Sei stanco?»",o:["{Are you tired?}","{Do you are tired?}","{Do you tired?}"],e:"Con {be} niente {do}."},
 {q:"«Con chi abiti?»",o:["{Who do you live with?}","{With who you live?}","{Who you live with?}"],e:"La preposizione va in fondo: {Who do you live with?}"},
 {q:"«Perché studi inglese?» — «Perché…»",o:["{Why…? — Because…}","{Because…? — Because…}","{Why…? — Why…}"],e:"Domanda: {why}. Risposta: {because}."},
 {q:"Ascolta: dove lavora Jack?",au:"Jack works in a bookshop.",o:["in una libreria","in una biblioteca","in una banca"],e:"{bookshop} = libreria. {library} = biblioteca: falso amico!"},
 {q:"Ascolta: la domanda chiede…",au:"What time does the film start?",o:["l'ora","il giorno","il titolo"],e:"{What time} = a che ora."},
 {q:"Non capisci una parola. Chiedi:",o:["{What does this word mean?}","{What means this word?}","{What does mean this word?}"],e:"Anche qui {does} + verbo base: {What does it mean?}"},
 {t:"type",q:"Completa: ＿ {your brother work in a bank? — Yes, he does.}",a:["does"],full:"Does your brother work in a bank? — Yes, he does."},
 {t:"type",q:"Completa: {Where} ＿ {they live?}",a:["do"],full:"Where do they live?"},
 {t:"dict",au:"Why do you study English?"},
 {t:"say",zh:"Chiedi a un nuovo collega dove abita, con chi abita e perché studia inglese",it:"Where do you live? Who do you live with? Why do you study English?"},
 {t:"say",zh:"Di': «Scusi, non capisco. Può parlare piano, per favore?»",it:"Sorry, I don't understand. Can you speak slowly, please?"}
];
VOC.l9=[
 ["when","quando",""],["why","perché (nelle domande)",""],["because","perché (nelle risposte)",""],["which","quale (tra pochi)",""],["what time","a che ora",""],["alone","da solo",""],["every day","ogni giorno, tutti i giorni",""],
 ["station","stazione",""],["music","musica",""],["bookshop","libreria (negozio)",""],["library","biblioteca",""],["read","leggere",""],["know","sapere, conoscere",""],["understand","capire",""],["mean","voler dire, significare",""],
 ["say","dire",""],["word","parola",""],["question","domanda",""],["answer","risposta; rispondere",""],["language","lingua",""],["learn","imparare",""],["slowly","piano, lentamente",""],["again","di nuovo, ancora",""],["take","prendere",""]
];
EX.l9=EX.l9.concat([
 {t:"dict",au:"Who do you live with?"},
 {t:"say",zh:"Chiedi a un'amica a che ora comincia a lavorare",it:"What time do you start work?"},
 {t:"type",q:"Completa: {Does she like music? — No, she} ＿ {.}",a:["doesn't","does not"],full:"No, she doesn't."}
]);
