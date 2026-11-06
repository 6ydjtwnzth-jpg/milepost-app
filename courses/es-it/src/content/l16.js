DLG.l16=[["A","Marco, ¿qué tal las vacaciones?","Marco, com'è andata la vacanza?"],["B","¡Muy bien! El verano pasado fuimos a Galicia.","Benissimo! L'estate scorsa siamo andati in Galizia."],["A","¿Cuándo salisteis?","Quando siete partiti?"],["B","El tres de agosto. Fuimos en avión a Santiago.","Il 3 agosto. Siamo andati in aereo a Santiago."],["A","¿Alquilasteis un coche?","Avete noleggiato una macchina?"],["B","No, viajamos en tren y en autobús.","No, abbiamo viaggiato in treno e in autobus."],["A","¿Qué visteis?","Che cosa avete visto?"],["B","Estuvimos tres días en Santiago y vimos la catedral. ¡Fue precioso!","Siamo stati tre giorni a Santiago e abbiamo visto la cattedrale. È stato bellissimo!"],["A","¿Llovió?","Ha piovuto?"],["B","¡Sí, todos los días! Pero comimos muy bien.","Sì, tutti i giorni! Ma abbiamo mangiato benissimo."]];
EX.l16=[
 {q:"«Ieri ho mangiato al ristorante.»",o:["{Ayer comí en un restaurante.}","{Ayer he comido en un restaurante.}","{Ayer como en un restaurante.}"],e:"Con {ayer}: {indefinido}."},
 {q:"«Oggi ho mangiato al ristorante.»",o:["{Hoy he comido en un restaurante.}","{Hoy he comida en un restaurante.}","{Hoy comido en un restaurante.}"],e:"Con {hoy}, in Spagna: {perfecto} (in America Latina si sente spesso {comí})."},
 {q:"L'{indefinido} di {ir} con {nosotros}:",o:["{fuimos}","{fimos}","{íbamos}"],e:"{ir} → {fui}, {fuiste}, {fue}, {fuimos}…"},
 {q:"L'{indefinido} di {hacer} con {él}:",o:["{hizo}","{hació}","{hico}"],e:"Irregolare: {hizo} (con la {z})."},
 {q:"«due anni fa»:",o:["{hace dos años}","{dos años hace}","{dos años fa}"],e:"{hace} va prima del periodo."},
 {q:"«Sono arrivato lunedì.»",o:["{Llegué el lunes.}","{Llegé el lunes.}","{Llegó el lunes.}"],e:"Prima persona di {llegar}: {llegué}, con la {u}."},
 {q:"Ascolta: come sono andati a Santiago?",au:"Fuimos en avión a Santiago.",o:["in aereo","in treno","in macchina"],e:"{en avión}."},
 {q:"Ascolta: quando sono partiti?",au:"Salimos el tres de agosto.",o:["il 3 agosto","il 13 agosto","il 3 aprile"],e:"{el tres de agosto}."},
 {q:"Ascolta: quale forma senti?",au:"habló",o:["{habló}, passato","{hablo}, presente"],e:"L'accento sull'ultima sillaba: {habló}."},
 {t:"type",q:"Completa: {¿Dónde} ＿ {el año pasado?} (estar, tu)",a:["estuviste"],full:"¿Dónde estuviste el año pasado?"},
 {t:"type",q:"Completa: {Anoche} ＿ {una película.} (ver, io)",a:["vi"],full:"Anoche vi una película."},
 {t:"dict",au:"El verano pasado fuimos a Galicia."},
 {t:"say",zh:"Racconta un viaggio: dove sei andato, quando, come e che cosa hai visto",it:"En junio fui a Sevilla en avión. Vi la catedral y comí muy bien."},
 {t:"say",zh:"Chiedi a un'amica dove è andata in vacanza l'anno scorso",it:"¿Adónde fuiste de vacaciones el año pasado?"}
];
VOC.l16=[
 ["vacaciones","vacanze","fp"],["de vacaciones","in vacanza",""],["viaje","viaggio","m"],["avión","aereo","m"],["catedral","cattedrale","f"],["alquilar","noleggiare, affittare",""],
 ["ayer","ieri",""],["anoche","ieri sera",""],["anteayer","l'altro ieri",""],["pasado","scorso",""],["el año pasado","l'anno scorso",""],["la semana pasada","la settimana scorsa",""],["hace","fa (hace dos años)",""],["verano","estate","m"],["precioso","bellissimo",""],["cumpleaños","compleanno","m"],["fantástico","fantastico",""],["todos los días","tutti i giorni",""],
 ["fui","andai, fui (ir, ser)",""],["fue","andò, fu",""],["estuve","stetti, sono stato (estar)",""],["tuve","ebbi (tener)",""],["hice","feci (hacer)",""],["vi","vidi (ver)",""],
 ["enero","gennaio","m"],["febrero","febbraio","m"],["marzo","marzo","m"],["abril","aprile","m"],["mayo","maggio","m"],["junio","giugno","m"],["julio","luglio","m"],["agosto","agosto","m"],["septiembre","settembre","m"],["octubre","ottobre","m"],["noviembre","novembre","m"],["diciembre","dicembre","m"]
];
EX.l16=EX.l16.concat([
 {t:"dict",au:"Hace dos años viví en Barcelona."},
 {t:"say",zh:"Di' la data del tuo compleanno",it:"Mi cumpleaños es el catorce de febrero."},
 {t:"type",q:"Completa: {¿Fuisteis al museo? — No, no} ＿ {.} (andare, noi)",a:["fuimos"],full:"No, no fuimos."}
]);
