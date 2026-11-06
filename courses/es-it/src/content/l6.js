DLG.l6=[["A","¡Hola, Pedro! ¿Qué tal?","Ciao, Pedro! Come va?"],["B","Estoy cansado, pero bien. ¿Y tú?","Sono stanco, ma bene. E tu?"],["A","Muy bien. Oye, ¿qué hora es?","Molto bene. Senti, che ore sono?"],["B","Son las siete y media.","Sono le sette e mezza."],["A","¡Uf! La película es a las ocho.","Uff! Il film è alle otto."],["B","¿Vas con tu hermano?","Vai con tuo fratello?"],["A","Sí. Mi hermano es muy simpático, pero siempre llega tarde.","Sì. Mio fratello è molto simpatico, ma arriva sempre tardi."],["B","¿Y dónde está el cine?","E dov'è il cinema?"],["A","Está cerca, en la plaza.","È vicino, in piazza."]];
EX.l6=[
 {q:"«Sono stanco.»",o:["{Estoy cansado.}","{Soy cansado.}","{Tengo cansado.}"],e:"Uno stato del momento: {estar}."},
 {q:"«Siamo a Madrid.»",o:["{Estamos en Madrid.}","{Somos en Madrid.}","{Hay en Madrid.}"],e:"Dove si trova: {estar}."},
 {q:"«Sono medico.»",o:["{Soy médico.}","{Estoy médico.}","{Soy de médico.}"],e:"La professione: {ser}, senza articolo."},
 {q:"«È l'una.»",o:["{Es la una.}","{Son la una.}","{Es una hora.}"],e:"Con l'una {es la una}; dalle due {son las…}."},
 {q:"4:45:",o:["{Son las cinco menos cuarto.}","{Son las cuatro y tres cuartos.}","{Son las cuatro menos cuarto.}"],e:"Un quarto alle cinque: {las cinco menos cuarto}."},
 {q:"«il lunedì» (tutti i lunedì):",o:["{los lunes}","{en lunes}","{el lunedí}"],e:"Abitudine: {los lunes}."},
 {q:"100:",o:["{cien}","{ciento}","{cento}"],e:"100 da solo è {cien}."},
 {q:"Ascolta: che ore sono?",au:"Son las diez y cuarto.",o:["10:15","10:45","4:10"],e:"{las diez y cuarto}."},
 {q:"Ascolta: quale numero senti?",au:"cuarenta y cinco",o:["45","54","14"],e:"{cuarenta y cinco} = 45."},
 {q:"{Está aburrido} vuol dire:",o:["si annoia","è noioso","è pronto"],e:"{estar aburrido} = annoiarsi; {ser aburrido} = essere noioso."},
 {t:"type",q:"Completa: {¿Dónde} ＿ {? — Estoy en casa.} (estar, tu)",a:["estás"],full:"¿Dónde estás? — Estoy en casa."},
 {t:"type",q:"Completa: {La película es} ＿ {las ocho.}",a:["a"],full:"La película es a las ocho."},
 {t:"dict",au:"¿Qué hora es?"},
 {t:"say",zh:"Di' che ore sono adesso",it:"Son las cuatro y veinte.",e:"Per esempio 4:20 = {las cuatro y veinte}."},
 {t:"say",zh:"Fissa un appuntamento: «Ci vediamo giovedì alle otto e mezza.»",it:"Nos vemos el jueves a las ocho y media."}
];
VOC.l6=[
 ["hora","ora","f"],["qué hora es","che ore sono",""],["y cuarto","e un quarto",""],["y media","e mezza",""],["menos cuarto","meno un quarto",""],["a qué hora","a che ora",""],["de la mañana","di mattina",""],["de la tarde","di pomeriggio, di sera",""],["de la noche","di sera, di notte",""],
 ["contento","contento",""],["aburrido","noioso; annoiato",""],["listo","intelligente; pronto",""],["limpio","pulito",""],["médico","medico","m"],["película","film","f"],["cine","cinema","m"],["cerca","vicino",""],["tarde","tardi; pomeriggio",""],["siempre","sempre",""],["oye","senti, ascolta",""],["hoy","oggi",""],["día","giorno","m"],
 ["lunes","lunedì","m"],["martes","martedì","m"],["miércoles","mercoledì","m"],["jueves","giovedì","m"],["viernes","venerdì","m"],["sábado","sabato","m"],["domingo","domenica","m"],["fin de semana","fine settimana","m"],["nos vemos","ci vediamo",""],
 ["treinta","trenta",""],["cuarenta","quaranta",""],["cincuenta","cinquanta",""],["sesenta","sessanta",""],["setenta","settanta",""],["ochenta","ottanta",""],["noventa","novanta",""],["cien","cento",""],["museo","museo","m"],["con","con",""],["cerrado","chiuso",""],["llegar","arrivare",""],["mal", "male", ""],["poco", "poco", ""]
];
EX.l6=EX.l6.concat([
 {t:"dict",au:"El museo está cerrado los lunes."},
 {t:"say",zh:"Chiedi che giorno è oggi",it:"¿Qué día es hoy?"},
 {t:"type",q:"Completa: {Ana} ＿ {simpática.} (è, carattere)",a:["es"],full:"Ana es simpática."}
]);
