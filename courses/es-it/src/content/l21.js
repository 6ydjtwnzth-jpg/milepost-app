DLG.l21=[["A","¿Qué planes tienes para el año que viene?","Che progetti hai per l'anno prossimo?"],["B","¡Me voy a México! Trabajaré en un hotel en Oaxaca.","Vado in Messico! Lavorerò in un albergo a Oaxaca."],["A","¡Qué bien! ¿Cuándo saldrás?","Che bello! Quando partirai?"],["B","En septiembre. Estaré allí un año.","A settembre. Starò lì un anno."],["A","¿Y tu novio? ¿Irá contigo?","E il tuo ragazzo? Verrà con te?"],["B","No, él tiene trabajo aquí. Pero vendrá a verme en Navidad.","No, lui ha un lavoro qui. Ma verrà a trovarmi a Natale."],["A","¿Y después? ¿Volverás a Madrid?","E dopo? Tornerai a Madrid?"],["B","No lo sé. Si me gusta el trabajo, me quedaré más tiempo.","Non lo so. Se il lavoro mi piace, resterò di più."],["A","Seguro que te va a encantar. ¡Te echaré de menos!","Di sicuro ti piacerà tantissimo. Mi mancherai!"],["B","¡Y yo a ti! Si tienes vacaciones, ¿vendrás a verme?","E tu a me! Se avrai le ferie, verrai a trovarmi?"]];
EX.l21=[
 {q:"«Domani lavorerò.»",o:["{Mañana trabajaré.}","{Mañana trabajeré.}","{Mañana trabajerò.}"],e:"Infinito intero + {-é}: {trabajar} → {trabajaré}."},
 {q:"«Se avrò tempo, verrò.»",o:["{Si tengo tiempo, vendré.}","{Si tendré tiempo, vendré.}","{Si tengo tiempo, veniré.}"],e:"Dopo {si} mai il futuro: {si tengo}. E {venir} → {vendré}."},
 {q:"Il futuro di {hacer} con {yo}:",o:["{haré}","{haceré}","{hacré}"],e:"Irregolare: {haré}, come «farò»."},
 {q:"«tra due anni»:",o:["{dentro de dos años}","{entre dos años}","{tra dos años}"],e:"«tra» nel futuro = {dentro de}."},
 {q:"«con te»:",o:["{contigo}","{con ti}","{con tú}"],e:"{conmigo}, {contigo}: una parola sola."},
 {q:"«Ci sarà molta gente.»",o:["{Habrá mucha gente.}","{Haberá mucha gente.}","{Estará mucha gente.}"],e:"Il futuro di {hay} è {habrá}."},
 {q:"Ascolta: dove lavorerà?",au:"Trabajaré en un hotel en Oaxaca.",o:["in un albergo","in una scuola","in un ristorante"],e:"{en un hotel}."},
 {q:"Ascolta: quanto tempo starà lì?",au:"Estaré allí un año.",o:["un anno","un mese","due anni"],e:"{un año}."},
 {q:"Ascolta: quando verrà il ragazzo?",au:"Vendrá a verme en Navidad.",o:["a Natale","a Pasqua","in estate"],e:"{en Navidad}."},
 {t:"type",q:"Completa: {El año que viene} ＿ {a Japón.} (ir, noi, futuro)",a:["iremos"],full:"El año que viene iremos a Japón."},
 {t:"type",q:"Completa: {Si llueve, no} ＿ {.} (salir, io, futuro)",a:["saldré"],full:"Si llueve, no saldré."},
 {t:"dict",au:"Si tengo tiempo, te llamaré."},
 {t:"say",zh:"Racconta due progetti per l'anno prossimo",it:"El año que viene estudiaré inglés y viajaré a México."},
 {t:"say",zh:"Prometti a un amico che lo chiamerai domani",it:"Te llamaré mañana, te lo prometo."}
];
VOC.l21=[
 ["el año que viene","l'anno prossimo",""],["la semana que viene","la settimana prossima",""],["próximo","prossimo",""],["pasado mañana","dopodomani",""],["dentro de","tra, fra (nel futuro)",""],["pronto","presto, tra poco",""],["algún día","un giorno",""],["seguro","sicuro, di sicuro",""],["quizás","forse",""],["tal vez","forse",""],
 ["prometer","promettere",""],["terminar","finire",""],["aprender","imparare",""],["cambiar","cambiare",""],["mudarse","traslocare, trasferirsi",""],["casarse","sposarsi",""],["echar de menos","sentire la mancanza",""],["te echaré de menos","mi mancherai",""],["contigo","con te",""],
 ["extranjero","straniero; estero",""],["idioma","lingua","m"],["universidad","università","f"],["Navidad","Natale","f"],["Semana Santa","settimana di Pasqua","f"],["vacaciones de verano","vacanze estive","fp"],
 ["trabajaré","lavorerò (trabajar)",""],["iré","andrò (ir)",""],["habrá","ci sarà, ci saranno (hay)",""],["tendré","avrò (tener)",""],["podré","potrò (poder)",""],["saldré","partirò, uscirò (salir)",""],["vendré","verrò (venir)",""],["haré","farò (hacer)",""],["diré","dirò (decir)",""],["sabré","saprò (saber)",""],["querré","vorrò (querer)",""],["pondré","metterò (poner)",""],["curso","corso","m"],["país", "paese (nazione)", "m"],["nuevo", "nuovo", ""],["ganar", "vincere; guadagnare", ""],["celebrar", "festeggiare", ""]
];
EX.l21=EX.l21.concat([
 {t:"dict",au:"Dentro de dos años viviré en Madrid."},
 {t:"say",zh:"Di': «Mi mancherai!»",it:"¡Te echaré de menos!"},
 {t:"type",q:"Completa: {¿Dónde está Ana? — No sé,} ＿ {en casa.} (estar, futuro: «sarà»)",a:["estará"],full:"¿Dónde está Ana? — No sé, estará en casa."}
]);
