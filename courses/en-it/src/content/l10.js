DLG.l10=[["A","What time do you get up, Kate?","A che ora ti alzi, Kate?"],["B","I usually get up at seven.","Di solito mi alzo alle sette."],["A","Do you have breakfast?","Fai colazione?"],["B","Yes, always. Tea and toast.","Sì, sempre. Tè e pane tostato."],["A","How do you go to work?","Come vai al lavoro?"],["B","I usually take the bus.","Di solito prendo l'autobus."],["A","Is it fast?","È veloce?"],["B","Yes, and I'm never late!","Sì, e non sono mai in ritardo!"],["A","What do you do in the evening?","Che cosa fai la sera?"],["B","I often cook dinner. I never watch TV.","Spesso preparo la cena. Non guardo mai la TV."],["A","Never?","Mai?"],["B","Well, sometimes on Sunday.","Be', a volte la domenica."]];
EX.l10=[
 {q:"«Di solito mi alzo alle sette.»",o:["{I usually get up at seven.}","{I get up usually at seven.}","{Usually I get up in seven.}"],e:"L'avverbio va prima del verbo; con l'ora {at}."},
 {q:"«Non sono mai in ritardo.»",o:["{I'm never late.}","{I never am late.}","{I'm not never late.}"],e:"Con {be} l'avverbio va dopo il verbo; {never} è già negativo."},
 {q:"«Faccio colazione alle otto.»",o:["{I have breakfast at eight.}","{I make breakfast at eight.}","{I do breakfast at eight.}"],e:"Fare colazione = {have breakfast}."},
 {q:"«di notte»:",o:["{at night}","{in the night}","{on night}"],e:"Eccezione da ricordare: {at night}, ma {in the morning}."},
 {q:"«il sabato mattina»:",o:["{on Saturday morning}","{in Saturday morning}","{at Saturday morning}"],e:"Con un giorno, anche con {morning}, ci vuole {on}."},
 {q:"Quanto spesso? «due volte alla settimana»:",o:["{twice a week}","{two times in week}","{twice the week}"],e:"{once a week}, {twice a week}, {three times a week}."},
 {q:"Ascolta: a che ora va a letto?",au:"She gets home at six and goes to bed at eleven.",o:["alle 23","alle 18","alle 21"],e:"{goes to bed at eleven} = va a letto alle undici."},
 {q:"Ascolta: quanto spesso va in palestra?",au:"I go to the gym once a week.",o:["una volta alla settimana","tutti i giorni","due volte al mese"],e:"{once a week}."},
 {q:"Ascolta: quale parola senti?",au:"walk",o:["{walk}","{work}"],e:"{walk} ha una «o» lunga e la {l} muta; {work} ha la vocale centrale di {word}."},
 {t:"type",q:"Completa: {I} ＿ {drink coffee in the evening.} (mai)",a:["never"],full:"I never drink coffee in the evening."},
 {t:"type",q:"Completa: {We have dinner} ＿ {eight o'clock.}",a:["at"],full:"We have dinner at eight o'clock."},
 {t:"dict",au:"I get up at seven and I have a shower."},
 {t:"say",zh:"Racconta la tua mattina: a che ora ti alzi, che cosa fai a colazione, come vai al lavoro",it:"I get up at half past six. I have coffee and toast. I usually go to work by bus."},
 {t:"say",zh:"Chiedi a un amico quanto spesso va al cinema",it:"How often do you go to the cinema?"}
];
VOC.l10=[
 ["wake up","svegliarsi",""],["get up","alzarsi",""],["get","prendere, ottenere, arrivare",""],["have a shower","fare la doccia",""],["shower","doccia",""],["breakfast","colazione",""],["lunch","pranzo",""],["dinner","cena",""],["have breakfast","fare colazione",""],
 ["go to work","andare al lavoro",""],["get home","arrivare a casa",""],["go to bed","andare a letto",""],["cook dinner","preparare la cena",""],["watch TV","guardare la TV",""],["watch","guardare (TV, partite)",""],["go shopping","andare a fare spese",""],["walk","camminare, andare a piedi",""],
 ["always","sempre",""],["usually","di solito",""],["sometimes","a volte",""],["never","mai",""],["how often","quanto spesso",""],["once","una volta",""],["twice","due volte",""],["every","ogni",""],
 ["gym","palestra",""],["toast","pane tostato",""],["fast","veloce",""],["well","be'; bene",""],["night","notte",""],["drink","bere",""],["month","mese",""],["bike","bici",""],["by bike","in bici",""],["go out","uscire",""]
];
EX.l10=EX.l10.concat([
 {t:"dict",au:"How often do you go to the gym?"},
 {t:"say",zh:"Di': «Il venerdì sera esco spesso con gli amici.»",it:"I often go out with friends on Friday evening.",e:"{go out} = uscire. Avverbio prima del verbo, {on} con il giorno."},
 {t:"type",q:"Completa: {She reads} ＿ {the evening.}",a:["in"],full:"She reads in the evening."}
]);
