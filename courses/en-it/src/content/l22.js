DLG.l22=[["A","Good morning. What's the matter?","Buongiorno. Che cosa c'è?"],["B","I've got a sore throat and a headache.","Ho mal di gola e mal di testa."],["A","Have you got a temperature?","Ha la febbre?"],["B","Yes, a little. I feel terrible.","Sì, un po'. Mi sento malissimo."],["A","Let me see… It's a bad cold. You should stay in bed for two days.","Vediamo… È un brutto raffreddore. Dovrebbe stare a letto per due giorni."],["B","Do I have to take any medicine?","Devo prendere qualche medicina?"],["A","You don't have to take antibiotics. Take paracetamol and drink a lot of water.","Non deve prendere antibiotici. Prenda del paracetamolo e beva tanta acqua."],["B","Can I go to work?","Posso andare al lavoro?"],["A","No, you shouldn't. And you mustn't go to the gym this week!","No, non dovrebbe. E questa settimana non deve assolutamente andare in palestra!"],["B","OK. Thank you, doctor.","Va bene. Grazie, dottore."]];
EX.l22=[
 {q:"«Dovresti andare dal medico.»",o:["{You should see a doctor.}","{You should to see a doctor.}","{You must to see a doctor.}"],e:"{should} + forma base, senza {to}."},
 {q:"«Qui è vietato fumare.»",o:["{You mustn't smoke here.}","{You don't have to smoke here.}","{You haven't to smoke here.}"],e:"Divieto: {mustn't}."},
 {q:"«Non è necessario pagare: è gratis.»",o:["{You don't have to pay.}","{You mustn't pay.}","{You shouldn't to pay.}"],e:"Non necessario: {don't have to}."},
 {q:"«Ieri sono dovuto andare dal dentista.»",o:["{Yesterday I had to go to the dentist.}","{Yesterday I must go to the dentist.}","{Yesterday I musted go to the dentist.}"],e:"Passato di obbligo: {had to}."},
 {q:"«Lei deve alzarsi alle cinque.»",o:["{She has to get up at five.}","{She have to get up at five.}","{She has get up at five.}"],e:"{have to} prende la {-s}: {she has to}."},
 {q:"«Ho la febbre.»",o:["{I've got a temperature.}","{I have fever.}","{I've got a fever of temperature.}"],e:"In inglese britannico: {I've got a temperature}."},
 {q:"«Mi fa male la schiena.»",o:["{My back hurts.}","{I hurt the back.}","{Me hurts the back.}"],e:"La parte del corpo è il soggetto: {My back hurts}."},
 {q:"Ascolta: che cosa ha?",au:"I've got a sore throat and a headache.",o:["mal di gola e mal di testa","mal di pancia","il raffreddore"],e:"{sore throat} + {headache}."},
 {q:"Ascolta: che cosa deve fare?",au:"You should stay in bed for two days.",o:["stare a letto due giorni","andare al lavoro","prendere antibiotici"],e:"{stay in bed}."},
 {q:"Ascolta: che cosa è vietato?",au:"You mustn't go to the gym this week.",o:["andare in palestra","andare al lavoro","bere acqua"],e:"{mustn't go to the gym}."},
 {t:"type",q:"Completa: {You} ＿ {see this film! It's fantastic!} (devi assolutamente)",a:["must"],full:"You must see this film! It's fantastic!"},
 {t:"type",q:"Completa: {Do I} ＿ {to take any medicine?}",a:["have"],full:"Do I have to take any medicine?"},
 {t:"dict",au:"I don't feel well. I think I've got a temperature."},
 {t:"say",zh:"Dal medico: di' che ti fa male lo stomaco e che non ti senti bene",it:"I've got a stomach ache and I don't feel well."},
 {t:"say",zh:"Dai un consiglio a un amico stanco: «Dovresti andare a letto presto.»",it:"You should go to bed early."}
];
VOC.l22=[
 ["should","dovrei, dovresti (consiglio)",""],["shouldn't","non dovresti",""],["have to","dovere (è necessario)",""],["don't have to","non è necessario",""],["must","dovere (è importante)",""],["mustn't","è vietato, non devi",""],["had to","sono dovuto, dovevo",""],
 ["what's the matter","che cosa c'è, che cosa non va",""],["feel","sentirsi",""],["ill","malato",""],["terrible","terribile, malissimo",""],["hurt","fare male",""],["headache","mal di testa",""],["stomach ache","mal di pancia",""],["sore throat","mal di gola",""],["a cold","raffreddore",""],["temperature","febbre; temperatura",""],
 ["medicine","medicina",""],["antibiotics","antibiotici",""],["paracetamol","paracetamolo",""],["dentist","dentista",""],["let me see","vediamo, fammi vedere",""],["smoke","fumare",""],["early","presto",""],["rest","riposo; riposare",""],
 ["body","corpo",""],["head","testa",""],["back","schiena",""],["stomach","stomaco",""],["throat","gola",""],["eye","occhio",""],["ear","orecchio",""],["tooth","dente",""],["teeth","denti",""],["hand","mano",""],["foot","piede",""],["feet","piedi",""],["appointment","appuntamento",""]
];
EX.l22=EX.l22.concat([
 {t:"dict",au:"You don't have to pay. It's free."},
 {t:"say",zh:"Al telefono: chiedi un appuntamento dal medico per domani",it:"Can I make an appointment with the doctor for tomorrow, please?"},
 {t:"type",q:"Completa: {You} ＿ {go to work today. Stay at home!} (non dovresti)",a:["shouldn't","should not"],full:"You shouldn't go to work today. Stay at home!"}
]);
