DLG.l7=[["A","What do you do, Luca?","Che lavoro fai, Luca?"],["B","I'm a nurse. I work in a hospital.","Sono infermiere. Lavoro in un ospedale."],["A","My sister is a nurse too.","Anche mia sorella è infermiera."],["B","Really? Where does she work?","Davvero? Dove lavora?"],["A","In Leeds. She works at night.","A Leeds. Lavora di notte."],["B","I don't work at night. I start at seven in the morning.","Io non lavoro di notte. Comincio alle sette di mattina."],["A","I'm a teacher. I teach English at a school.","Io sono insegnante. Insegno inglese in una scuola."],["B","Do you like it?","Ti piace?"],["A","Yes, I love it! But I don't like Mondays.","Sì, lo adoro! Ma i lunedì non mi piacciono."]];
EX.l7=[
 {q:"«Lei lavora in un negozio.»",o:["{She works in a shop.}","{She work in a shop.}","{She's work in a shop.}"],e:"Con {he}, {she}, {it} il verbo prende la {-s}."},
 {q:"{teach} con {he}:",o:["{he teaches}","{he teachs}","{he teach}"],e:"Dopo {ch} si aggiunge {-es}."},
 {q:"{study} con {she}:",o:["{she studies}","{she studys}","{she studyes}"],e:"Consonante + {y} → {-ies}."},
 {q:"«Non parla tedesco.» (lui)",o:["{He doesn't speak German.}","{He don't speak German.}","{He doesn't speaks German.}"],e:"Con {he}: {doesn't} + verbo senza {-s}."},
 {q:"«Sono ingegnere.»",o:["{I'm an engineer.}","{I'm engineer.}","{I engineer.}"],e:"Professione con l'articolo; {an} perché {engineer} comincia con vocale."},
 {q:"«Che lavoro fai?»",o:["{What do you do?}","{What job you do?}","{What are you doing?}"],e:"{What do you do?} chiede il lavoro. {What are you doing?} vuol dire «che cosa stai facendo?»."},
 {q:"Ascolta: dove lavora?",au:"My father works in a bank in Glasgow.",o:["in una banca","in un ospedale","in una scuola"],e:"{a bank} = una banca."},
 {q:"Ascolta: che cosa non fa il sabato?",au:"I don't work on Saturdays.",o:["non lavora","non studia","non cucina"],e:"{I don't work} = non lavoro."},
 {q:"Ascolta: quale forma senti?",au:"She teaches.",o:["{teaches}, con una sillaba in più","{teach}","{teachs}"],e:"Dopo {ch} la {-es} si dice «iz»: {teaches}."},
 {t:"type",q:"Completa: {My brother} ＿ {in Manchester.} (live)",a:["lives"],full:"My brother lives in Manchester."},
 {t:"type",q:"Completa: {They} ＿ {work at the weekend.}",a:["don't","do not"],full:"They don't work at the weekend."},
 {t:"dict",au:"She teaches English at a school."},
 {t:"say",zh:"Di' che lavoro fai e dove (o che cosa studi)",it:"I'm a student. I study engineering in Turin."},
 {t:"say",zh:"Di': «Mia sorella non lavora il venerdì.»",it:"My sister doesn't work on Fridays."}
];
VOC.l7=[
 ["work","lavorare",""],["live","abitare, vivere",""],["teach","insegnare",""],["study","studiare",""],["speak","parlare (una lingua)",""],["start","cominciare",""],["help","aiutare",""],["like","piacere (I like = mi piace)",""],
 ["do","fare",""],["what do you do","che lavoro fai",""],["don't","non (do not)",""],["doesn't","non (does not)",""],["job","lavoro, impiego",""],["really","davvero",""],["at night","di notte",""],["at home","a casa",""],["for","per",""],
 ["nurse","infermiere, infermiera",""],["doctor","medico",""],["engineer","ingegnere",""],["waiter","cameriere",""],["shop assistant","commesso, commessa",""],["cook","cuoco; cucinare",""],["driver","autista",""],["lawyer","avvocato",""],["manager","direttore, responsabile",""],
 ["office","ufficio",""],["hospital","ospedale",""],["school","scuola",""],["shop","negozio",""],["restaurant","ristorante",""],["bank","banca",""],["company","azienda, società",""],["factory","fabbrica",""],["engineering","ingegneria",""],["go","andare",""],["by bus","in autobus",""]
];
EX.l7=EX.l7.concat([
 {t:"dict",au:"I don't work on Saturdays."},
 {t:"say",zh:"Di': «Lui fa il cameriere. Lavora in un ristorante, ma non lavora la domenica.»",it:"He's a waiter. He works in a restaurant, but he doesn't work on Sundays."},
 {t:"type",q:"Completa: {She} ＿ {to school by bus.} (go)",a:["goes"],full:"She goes to school by bus."}
]);
