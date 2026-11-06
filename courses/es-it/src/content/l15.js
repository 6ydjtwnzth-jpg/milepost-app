DLG.l15=[["A","¡Hola, Clara! ¿Qué tal el fin de semana?","Ciao, Clara! Com'è andato il fine settimana?"],["B","¡Genial! He estado en Cádiz con mi hermana.","Benissimo! Sono stata a Cadice con mia sorella."],["A","¿Qué habéis hecho?","Che cosa avete fatto?"],["B","Hemos ido a la playa y hemos comido pescado.","Siamo andate in spiaggia e abbiamo mangiato pesce."],["A","¿Ha hecho buen tiempo?","Ha fatto bel tempo?"],["B","Sí, mucho sol. ¿Y tú?","Sì, tanto sole. E tu?"],["A","Yo me he quedado en casa. He limpiado el piso.","Io sono rimasto a casa. Ho pulito l'appartamento."],["B","¿Has visto a Pablo?","Hai visto Pablo?"],["A","Sí, esta mañana. Me ha dicho que te llama esta noche.","Sì, stamattina. Mi ha detto che ti chiama stasera."]];
EX.l15=[
 {q:"«Sono andato al cinema.» (oggi)",o:["{He ido al cine.}","{Soy ido al cine.}","{Ha ido al cine.}"],e:"Ausiliare sempre {haber}: {he ido}."},
 {q:"«Mi sono alzata tardi.»",o:["{Me he levantado tarde.}","{Me he levantada tarde.}","{Me soy levantado tarde.}"],e:"{haber}, e il participio non si accorda."},
 {q:"Il participio di {hacer}:",o:["{hecho}","{hacido}","{hacho}"],e:"Irregolare: {hecho}."},
 {q:"Il participio di {volver}:",o:["{vuelto}","{volvido}","{vuelvido}"],e:"Irregolare: {vuelto}."},
 {q:"«Hai già mangiato?»",o:["{¿Ya has comido?}","{¿Has ya comido?}","{¿Ya comido has?}"],e:"{ya} va prima di {has} (o dopo {comido}), mai in mezzo."},
 {q:"«Ho visto Carmen.»",o:["{He visto a Carmen.}","{He visto Carmen.}","{He vista a Carmen.}"],e:"Persona come oggetto: {a}."},
 {q:"Ascolta: dov'è stata Clara?",au:"He estado en Cádiz con mi hermana.",o:["a Cadice","a Madrid","al mare a Valencia"],e:"{en Cádiz}."},
 {q:"Ascolta: che cosa ha fatto lui?",au:"Me he quedado en casa. He limpiado el piso.",o:["è rimasto a casa e ha pulito","è andato in spiaggia","ha lavorato"],e:"{me he quedado en casa}, {he limpiado}."},
 {q:"Ascolta: è mai stato in Argentina?",au:"Nunca he estado en Argentina.",o:["no, mai","sì, una volta","sì, l'anno scorso"],e:"{nunca} = mai."},
 {t:"type",q:"Completa: {Esta semana} ＿ {mucho.} (trabajar, noi)",a:["hemos trabajado"],full:"Esta semana hemos trabajado mucho."},
 {t:"type",q:"Completa: {¿Qué} ＿ {este fin de semana?} (hacer, tu)",a:["has hecho"],full:"¿Qué has hecho este fin de semana?"},
 {t:"dict",au:"Hoy he trabajado mucho."},
 {t:"say",zh:"Racconta tre cose che hai fatto oggi",it:"Hoy me he levantado a las siete, he trabajado y he cocinado una paella."},
 {t:"say",zh:"Chiedi a un amico se è mai stato in Messico",it:"¿Has estado en México?"}
];
VOC.l15=[
 ["haber","avere (ausiliare)",""],["he","ho (ausiliare)",""],["ya","già",""],["todavía no","non ancora",""],["esta mañana","stamattina",""],["esta semana","questa settimana",""],["este mes","questo mese",""],["este año","quest'anno",""],["alguna vez","qualche volta, mai (nelle domande)",""],
 ["hecho","fatto (hacer)",""],["dicho","detto (decir)",""],["visto","visto (ver)",""],["puesto","messo (poner)",""],["escrito","scritto (escribir)",""],["vuelto","tornato (volver)",""],["abierto","aperto (abrir)",""],["roto","rotto (romper)",""],["ido","andato (ir)",""],["estado","stato (estar)",""],
 ["limpiar","pulire",""],["llamar","chiamare, telefonare",""],["romper","rompere",""],["abrir","aprire",""],["hacer buen tiempo","fare bel tempo",""],["sol","sole","m"],["mes","mese","m"],["Cádiz","Cadice",""]
];
EX.l15=EX.l15.concat([
 {t:"dict",au:"¿Ya has comido? — No, todavía no."},
 {t:"say",zh:"Di': «Stamattina ho chiamato mia madre.»",it:"Esta mañana he llamado a mi madre."},
 {t:"type",q:"Completa: {¿} ＿ {visto a Pablo?} (avere, tu)",a:["has"],full:"¿Has visto a Pablo?"}
]);
