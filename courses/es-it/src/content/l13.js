DLG.l13=[["A","¡Hola, Álex! ¿Qué estás haciendo?","Ciao, Álex! Che cosa stai facendo?"],["B","Estoy trabajando. ¿Qué pasa?","Sto lavorando. Che c'è?"],["A","¿Quieres venir al cine esta noche?","Vuoi venire al cinema stasera?"],["B","Lo siento, esta noche no puedo. Tengo que estudiar.","Mi dispiace, stasera non posso. Devo studiare."],["A","¿Y el sábado? ¿Qué vas a hacer?","E sabato? Che cosa fai?"],["B","Por la mañana voy a ir a la playa, pero por la tarde sí puedo.","La mattina vado al mare, ma il pomeriggio sì che posso."],["A","¿Quedamos a las siete en la plaza?","Ci vediamo alle sette in piazza?"],["B","¡Vale! ¡Hasta el sábado!","D'accordo! A sabato!"]];
EX.l13=[
 {q:"«Vuoi venire al cinema?»",o:["{¿Quieres venir al cine?}","{¿Quieres de venir al cine?}","{¿Queres venir al cine?}"],e:"{querer} + infinito, senza preposizione; {quieres}."},
 {q:"«Devo lavorare.»",o:["{Tengo que trabajar.}","{Tengo trabajar.}","{Devo trabajar.}"],e:"{tener que} + infinito."},
 {q:"«Ci vediamo sabato?»",o:["{¿Quedamos el sábado?}","{¿Nos quedamos el sábado?}","{¿Vemos el sábado?}"],e:"{quedar} = darsi appuntamento; {quedarse} = restare."},
 {q:"«Sto cucinando.»",o:["{Estoy cocinando.}","{Soy cocinando.}","{Estoy cocinendo.}"],e:"{estar} + gerundio: {-ar} → {-ando}."},
 {q:"Il gerundio di {leer}:",o:["{leyendo}","{leendo}","{leiendo}"],e:"Tra due vocali la {i} diventa {y}: {leyendo}."},
 {q:"Rifiuti un invito, con gentilezza:",o:["{Lo siento, no puedo.}","{No quiero.}","{No, gracias, nunca.}"],e:"{Lo siento, no puedo} è il modo più cortese."},
 {q:"Ascolta: perché non può?",au:"Lo siento, no puedo. Tengo que estudiar.",o:["deve studiare","deve lavorare","è stanco"],e:"{tengo que estudiar}."},
 {q:"Ascolta: dove si vedono?",au:"¿Quedamos a las siete en la plaza?",o:["in piazza alle sette","al cinema alle sette","in piazza alle otto"],e:"{a las siete en la plaza}."},
 {q:"Ascolta: che cosa sta facendo papà?",au:"Papá está durmiendo.",o:["dorme","cucina","lavora"],e:"{durmiendo} = dormendo."},
 {t:"type",q:"Completa: {¿} ＿ {venir mañana?} (potere, voi)",a:["podéis"],full:"¿Podéis venir mañana?"},
 {t:"type",q:"Completa: {Estamos} ＿ {el autobús.} (esperar)",a:["esperando"],full:"Estamos esperando el autobús."},
 {t:"dict",au:"No puedo, tengo que trabajar."},
 {t:"say",zh:"Invita un'amica a cena sabato alle nove",it:"¿Quieres venir a cenar el sábado a las nueve?"},
 {t:"say",zh:"Al telefono: di' che stai studiando e che non puoi uscire",it:"Estoy estudiando. No puedo salir."}
];
VOC.l13=[
 ["tener que","dovere",""],["deber","dovere (più forte)",""],["quedar","darsi appuntamento, vedersi",""],["quedarse","restare",""],["quedamos","ci vediamo? (proposta)",""],["lo siento","mi dispiace",""],["genial","fantastico",""],["perfecto","perfetto",""],["qué pasa","che c'è, che succede",""],
 ["ir a","andare a, stare per (+ infinito)",""],["esta noche","stasera",""],["hasta el sábado","a sabato",""],["esperar","aspettare",""],["invitar","invitare",""],["cita","appuntamento","f"],["plan","programma, piano","m"],["libre","libero",""],["ocupado","occupato",""],
 ["haciendo","facendo (hacer)",""],["trabajando","lavorando",""],["comiendo","mangiando",""],["escribiendo","scrivendo",""],["leyendo","leggendo",""],["durmiendo","dormendo",""],["papá","papà","m"],["mamá","mamma","f"],["playa","spiaggia","f"],["llover","piovere",""],["ver","vedere",""]
];
EX.l13=EX.l13.concat([
 {t:"dict",au:"¿Quedamos a las ocho en la plaza?"},
 {q:"«Che cosa farai sabato?»",o:["{¿Qué vas a hacer el sábado?}","{¿Qué vas hacer el sábado?}","{¿Qué vas de hacer el sábado?}"],e:"{ir a} + infinito: non dimenticare la {a}."},
 {t:"type",q:"Completa: {Mañana} ＿ {a ver a mis abuelos.} (ir, noi)",a:["vamos"],full:"Mañana vamos a ver a mis abuelos."},
 {t:"say",zh:"Rispondi a un invito: «D'accordo! A che ora ci vediamo?»",it:"¡Vale! ¿A qué hora quedamos?"},
 {t:"type",q:"Completa: {Lo siento, el viernes no} ＿ {.} (potere, io)",a:["puedo"],full:"Lo siento, el viernes no puedo."}
]);
