DLG.l20=[["A","Have you ever been to New York, Luca?","Sei mai stato a New York, Luca?"],["B","Yes, I have. I went there in 2019.","Sì. Ci sono andato nel 2019."],["A","Did you like it?","Ti è piaciuta?"],["B","I loved it! Have you ever been to the USA?","L'ho adorata! Tu sei mai stata negli Stati Uniti?"],["A","No, I haven't. I've never been outside Europe.","No. Non sono mai stata fuori dall'Europa."],["B","How long have you lived in London?","Da quanto tempo abiti a Londra?"],["A","For six years. I came here for university.","Da sei anni. Sono venuta qui per l'università."],["B","Have you booked your summer holiday yet?","Hai già prenotato le vacanze estive?"],["A","Not yet. And you?","Non ancora. E tu?"],["B","I've just booked a flight to Lisbon!","Ho appena prenotato un volo per Lisbona!"]];
EX.l20=[
 {q:"«Sei mai stato in Irlanda?»",o:["{Have you ever been to Ireland?}","{Did you ever be in Ireland?}","{Have you ever been in Ireland?}"],e:"Esperienza: {Have you ever been to…?}"},
 {q:"«Sono stato a Londra l'anno scorso.»",o:["{I went to London last year.}","{I've been to London last year.}","{I've gone to London last year.}"],e:"Con un momento preciso ({last year}) si usa il {past simple}."},
 {q:"«Abito qui da tre anni.»",o:["{I've lived here for three years.}","{I live here since three years.}","{I live here for three years.}"],e:"Situazione che continua: {present perfect} + {for}."},
 {q:"«Lavora qui dal 2020.»",o:["{She's worked here since 2020.}","{She's worked here for 2020.}","{She works here since 2020.}"],e:"Punto di partenza: {since}."},
 {q:"«Non ho mai mangiato il sushi.»",o:["{I've never eaten sushi.}","{I haven't never eaten sushi.}","{I've never ate sushi.}"],e:"{never} è già negativo; participio {eaten}."},
 {q:"Il participio di {write}:",o:["{written}","{wrote}","{writed}"],e:"{write} – {wrote} – {written}."},
 {q:"Tom è andato al supermercato e non è ancora tornato:",o:["{He's gone to the supermarket.}","{He's been to the supermarket.}","{He went in the supermarket.}"],e:"{gone to} = è andato ed è ancora là."},
 {q:"«Hai già finito?» — «Non ancora.»",o:["{Have you finished yet? — Not yet.}","{Have you yet finished? — Not already.}","{Did you finish already? — No yet.}"],e:"{yet} in fondo alla frase."},
 {q:"Ascolta: da quanto tempo abita a Londra?",au:"For six years. I came here for university.",o:["da sei anni","dal 2006","da sedici anni"],e:"{for six years}."},
 {q:"Ascolta: che cosa ha appena fatto?",au:"I've just booked a flight to Lisbon!",o:["ha prenotato un volo","ha comprato una valigia","è tornato da Lisbona"],e:"{I've just booked} = ho appena prenotato."},
 {t:"type",q:"Completa: {Have you} ＿ {been to Scotland?} (mai)",a:["ever"],full:"Have you ever been to Scotland?"},
 {t:"type",q:"Completa: {We've lived here} ＿ {2018.}",a:["since"],full:"We've lived here since 2018."},
 {t:"dict",au:"I've never been outside Europe."},
 {t:"say",zh:"Di' tre esperienze: un paese dove sei stato, una cosa che non hai mai fatto, una cosa che hai appena fatto",it:"I've been to Spain. I've never ridden a horse. I've just had a coffee."},
 {t:"say",zh:"Chiedi a qualcuno da quanto tempo studia inglese",it:"How long have you studied English?"}
];
VOC.l20=[
 ["ever","mai (nelle domande)",""],["been","stato (be)",""],["gone","andato (go)",""],["seen","visto (see)",""],["eaten","mangiato (eat)",""],["done","fatto (do)",""],["written","scritto (write)",""],["flown","volato (fly)",""],
 ["since","da (punto di partenza)",""],["how long","da quanto tempo, quanto tempo",""],["just","appena",""],["already","già",""],["yet","ancora (non ancora); già (domande)",""],["not yet","non ancora",""],
 ["outside","fuori",""],["Europe","Europa",""],["book a flight","prenotare un volo",""],["flight","volo",""],["homework","compiti",""],["times","volte",""],["a long time","molto tempo",""],["write","scrivere",""],["horse","cavallo",""],["sushi","sushi",""],["abroad","all'estero",""],["experience","esperienza",""]
];
EX.l20=EX.l20.concat([
 {t:"dict",au:"How long have you known Emma?"},
 {t:"say",zh:"Rispondi: «Sì, ci sono stato. Ci sono andato due anni fa.»",it:"Yes, I have. I went there two years ago."},
 {t:"type",q:"Completa: {She} ＿ {just arrived.}",a:["has","'s"],full:"She's just arrived."}
]);
