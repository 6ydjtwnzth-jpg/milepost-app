DLG.l22=[["A","Buenos días. ¿Qué le pasa?","Buongiorno. Che cos'ha?"],["B","Me duele mucho la garganta y tengo fiebre.","Mi fa molto male la gola e ho la febbre."],["A","¿Desde cuándo?","Da quando?"],["B","Desde hace tres días. Y también me duele la cabeza.","Da tre giorni. E mi fa male anche la testa."],["A","A ver… Es una gripe. Debería quedarse en casa y descansar.","Vediamo… È un'influenza. Dovrebbe restare a casa e riposare."],["B","¿Podría darme algo para la fiebre?","Potrebbe darmi qualcosa per la febbre?"],["A","Sí, le doy una receta para un jarabe. Tómelo tres veces al día.","Sì, le faccio la ricetta per uno sciroppo. Lo prenda tre volte al giorno."],["B","Me gustaría tener también un justificante para el trabajo.","Vorrei avere anche un certificato per il lavoro."],["A","Claro, aquí tiene. Y yo, en su lugar, bebería mucha agua.","Certo, ecco a lei. E io, al suo posto, berrei molta acqua."],["B","Muchas gracias, doctora.","Grazie mille, dottoressa."]];
EX.l22=[
 {q:"«Mi fa male la testa.»",o:["{Me duele la cabeza.}","{Me duele mi cabeza.}","{Me hace mal la cabeza.}"],e:"{doler} come {gustar}; con il corpo l'articolo, non il possessivo."},
 {q:"«Mi fanno male i piedi.»",o:["{Me duelen los pies.}","{Me duele los pies.}","{Me duelen mis pies.}"],e:"Al plurale {me duelen}, come {me gustan}."},
 {q:"«Potrebbe aiutarmi?»",o:["{¿Podría ayudarme?}","{¿Podería ayudarme?}","{¿Puedería ayudarme?}"],e:"Stessa radice del futuro: {podr-} + {-ía}."},
 {q:"«Dovresti riposare.»",o:["{Deberías descansar.}","{Deberás descansar.}","{Debías descansar.}"],e:"Il consiglio: condizionale {deberías}. {deberás} = dovrai."},
 {q:"«da tre giorni»:",o:["{desde hace tres días}","{de tres días}","{desde tres días}"],e:"Con una durata: {desde hace}; con una data: {desde el lunes}."},
 {q:"«Mi piacerebbe andare in Messico.»",o:["{Me gustaría ir a México.}","{Me gustaré ir a México.}","{Me gustaba ir a México.}"],e:"{gustar} al condizionale: {me gustaría}."},
 {q:"Ascolta: che cosa le fa male?",au:"Me duele mucho la garganta y tengo fiebre.",o:["la gola","la testa","la pancia"],e:"{la garganta}."},
 {q:"Ascolta: che cosa consiglia la dottoressa?",au:"Debería quedarse en casa y descansar.",o:["restare a casa e riposare","andare al lavoro","fare sport"],e:"{quedarse en casa y descansar}."},
 {q:"Ascolta: quante volte al giorno?",au:"Tómelo tres veces al día.",o:["tre volte","due volte","una volta"],e:"{tres veces al día}."},
 {t:"type",q:"Completa: {Yo, en tu lugar,} ＿ {al médico.} (ir, io, condizionale)",a:["iría"],full:"Yo, en tu lugar, iría al médico."},
 {t:"type",q:"Completa: {¿} ＿ {abrir la ventana, por favor?} (potere, Lei, condizionale)",a:["podría"],full:"¿Podría abrir la ventana, por favor?"},
 {t:"dict",au:"Me duele la cabeza desde hace dos días."},
 {t:"say",zh:"Dal medico: di' che hai la febbre e la tosse",it:"Tengo fiebre y tos."},
 {t:"say",zh:"In posta: di' che vorresti spedire questo pacco in Italia",it:"Quería enviar este paquete a Italia."}
];
VOC.l22=[
 ["salud","salute","f"],["enfermo","malato",""],["¿qué le pasa?","che cos'ha? (Lei)",""],["doler","fare male",""],["me duele","mi fa male",""],["dolor","dolore","m"],["cuerpo","corpo","m"],["cabeza","testa","f"],["garganta","gola","f"],["estómago","stomaco","m"],["barriga","pancia","f"],["espalda","schiena","f"],["mano","mano","f"],["brazo","braccio","m"],["pierna","gamba","f"],["pie","piede","m"],["diente","dente","m"],
 ["fiebre","febbre","f"],["tos","tosse","f"],["gripe","influenza","f"],["resfriado","raffreddore; raffreddato",""],["constipado","raffreddato",""],["receta","ricetta (medica)","f"],["jarabe","sciroppo","m"],["pastilla","pastiglia","f"],["justificante","certificato, giustificazione","m"],["descansar","riposare",""],["beber","bere",""],
 ["desde hace","da (+ durata)",""],["en tu lugar","al posto tuo",""],["en su lugar","al suo posto",""],["deberías","dovresti (deber)",""],["podría","potrei, potrebbe (poder)",""],["me gustaría","mi piacerebbe, vorrei",""],["veces","volte","fp"],["al día","al giorno",""],
 ["enviar","spedire, inviare",""],["sello","francobollo","m"],["carta","lettera","f"],["ventana","finestra","f"]
];
EX.l22=EX.l22.concat([
 {t:"dict",au:"¿Tiene algo para la tos?"},
 {t:"say",zh:"Dai un consiglio a un amico stanco",it:"Deberías dormir más."},
 {t:"type",q:"Completa: {Me} ＿ {mucho los ojos.} (doler)",a:["duelen"],full:"Me duelen mucho los ojos."}
]);
