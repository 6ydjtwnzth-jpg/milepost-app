DLG.l17=[["A","Abuela, ¿esta eres tú?","Nonna, questa sei tu?"],["B","¡Sí! Nací en Málaga en 1950.","Sì! Sono nata a Malaga nel 1950."],["A","¿Vivías cerca del mar?","Abitavi vicino al mare?"],["B","Sí. En verano nadaba todos los días.","Sì. D'estate nuotavo tutti i giorni."],["A","¿Y qué hacías en invierno?","E che cosa facevi d'inverno?"],["B","Iba al colegio y ayudaba a mi madre en casa.","Andavo a scuola e aiutavo mia madre in casa."],["A","¿Teníais televisión?","Avevate la televisione?"],["B","No, no teníamos. Jugábamos en la calle con los vecinos.","No, non l'avevamo. Giocavamo per strada con i vicini."],["A","¡Qué diferente era la vida!","Com'era diversa la vita!"],["B","Sí, pero éramos muy felices.","Sì, ma eravamo molto felici."]];
EX.l17=[
 {q:"«Nuotavo tutti i giorni.»",o:["{Nadaba todos los días.}","{Nadava todos los días.}","{Nadé todos los días.}"],e:"{-aba}, con la {b}; un'abitudine: {imperfecto}."},
 {q:"«Avevamo un cane.»",o:["{Teníamos un perro.}","{Teniamos un perro.}","{Tuvíamos un perro.}"],e:"{-íamos}, con l'accento."},
 {q:"«Quando ero piccolo…»",o:["{Cuando era pequeño…}","{Cuando ero pequeño…}","{Cuando estaba pequeño…}"],e:"{ser} → {era}."},
 {q:"«Andavamo in spiaggia.»",o:["{Íbamos a la playa.}","{Ibamos a la playa.}","{Fuíbamos a la playa.}"],e:"{ir} → {íbamos}, con l'accento."},
 {q:"«Sono nato a Bari.»",o:["{Nací en Bari.}","{Soy nacido en Bari.}","{He nacido a Bari.}"],e:"«nascere» = {nacer}: {nací}."},
 {q:"«Di solito cenavamo tardi.»",o:["{Solíamos cenar tarde.}","{Solíamos de cenar tarde.}","{Soléamos cenar tarde.}"],e:"{soler} + infinito: {solíamos cenar}."},
 {q:"Ascolta: dove abitava?",au:"Cuando era niño, vivía en un pueblo pequeño.",o:["in un paesino","in una grande città","al mare"],e:"{un pueblo pequeño}."},
 {q:"Ascolta: che cosa facevano?",au:"Jugábamos en la calle con los vecinos.",o:["giocavano per strada","guardavano la tv","andavano a scuola"],e:"{jugábamos en la calle}."},
 {q:"Ascolta: quando è nata?",au:"Nací en Málaga en 1950.",o:["nel 1950","nel 1915","nel 1960"],e:"{mil novecientos cincuenta}."},
 {t:"type",q:"Completa: {Mi padre} ＿ {en una fábrica.} (trabajar, imperfecto)",a:["trabajaba"],full:"Mi padre trabajaba en una fábrica."},
 {t:"type",q:"Completa: {La casa} ＿ {vieja, pero bonita.} (ser, imperfecto)",a:["era"],full:"La casa era vieja, pero bonita."},
 {t:"dict",au:"En verano nadaba todos los días."},
 {t:"say",zh:"Di' dove e quando sei nato",it:"Nací en Turín en 1988."},
 {t:"say",zh:"Racconta due abitudini della tua infanzia",it:"Cuando era pequeño, iba a la playa con mis abuelos y leía muchos cómics."}
];
VOC.l17=[
 ["nacer","nascere",""],["nací","sono nato, nacqui",""],["cuando","quando",""],["de pequeño","da piccolo",""],["soler","essere solito",""],["vida","vita","f"],["diferente","diverso",""],["feliz","felice",""],
 ["invierno","inverno","m"],["primavera","primavera","f"],["otoño","autunno","m"],["pueblo","paese, paesino","m"],["campo","campagna","m"],["vecino","vicino di casa","m"],["juguete","giocattolo","m"],["cómic","fumetto","m"],["fábrica","fabbrica","f"],["jardín","giardino","m"],["viejo","vecchio",""],
 ["ayudar","aiutare",""],["era","ero, era (ser)",""],["iba","andavo, andava (ir)",""],["veía","vedevo, vedeva (ver)",""],["recordar","ricordare",""],["crecer","crescere",""],["triste", "triste", ""],["bosque", "bosco", "m"],["mismo", "stesso", ""]
];
EX.l17=EX.l17.concat([
 {t:"dict",au:"Vivíamos en un pueblo pequeño."},
 {t:"say",zh:"Chiedi a un amico dove abitava da bambino",it:"¿Dónde vivías cuando eras niño?"},
 {t:"type",q:"Completa: {¿Dónde} ＿ {? — En Bari.} (nacer, tu)",a:["naciste"],full:"¿Dónde naciste? — En Bari."}
]);
