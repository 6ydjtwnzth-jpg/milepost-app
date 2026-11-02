DLG.l7=[["A","Che lavoro fai?","¿En qué trabajas?"],["B","Sono studentessa. Studio italiano all'università. E tu?","Soy estudiante. Estudio italiano en la universidad. ¿Y tú?"],["A","Lavoro in un ristorante. Faccio il cuoco. Ma tu parli molto bene!","Trabajo en un restaurante. Soy cocinero. ¡Pero tú hablas muy bien!"],["B","Grazie! Ma capisco poco quando le persone parlano veloce.","¡Gracias! Pero entiendo poco cuando la gente habla rápido."],["A","È normale. Piano piano capisci tutto!","Es normal. ¡Poco a poco lo entiendes todo!"],["B","Speriamo!","¡Ojalá!"]];
EX.l7=[
 {q:"Escucha y elige el significado:",au:"Abito a Milano.",o:["Vivo en Milán.","Trabajo en Milán.","Voy a Milán."],e:"{abitare} = vivir (en un lugar)."},
 {q:"Escucha y elige el significado:",au:"Lavori o studi?",o:["¿Trabajas o estudias?","¿Te gusta trabajar?","Trabajo y estudio."],e:"{-i} = tú."},
 {q:"«Hablas italiano.»",o:["{Parli italiano.}","{Parlas italiano.}","{Parla italiano.}"],e:"{tu} termina siempre en {-i}."},
 {q:"«Hablamos español.»",o:["{Parliamo spagnolo.}","{Parlamos spagnolo.}","{Parlano spagnolo.}"],e:"{noi} termina siempre en {-iamo}."},
 {q:"«Viven en Roma.»",o:["{Abitano a Roma.}","{Abita a Roma.}","{Abitiamo a Roma.}"],e:"{loro} → {-ano}."},
 {q:"{capire} en la forma {io}:",o:["{capisco}","{capo}","{capiro}"],e:"{capire} añade {-isc-}."},
 {q:"«¿En qué trabajas?»",o:["{Che lavoro fai?}","{Che lavoro fa tu?}","{In che lavori?}"],e:"{fare} con {tu}: {fai}."},
 {q:"Escucha: ¿dónde cae el acento?",au:"parlano",o:["PAR-la-no","par-LA-no"],e:"{pàrlano}: tres sílabas antes del final."},
 {t:"type",q:"Completa: {Io} ＿ {italiano all'università.} (studiare)",a:["studio"],full:"Io studio italiano all'università."},
 {t:"type",q:"Completa: {Loro} ＿ {in un ristorante.} (lavorare)",a:["lavorano"],full:"Loro lavorano in un ristorante."},
 {t:"type",q:"Completa: {Che cosa} ＿ {voi stasera?} (fare)",a:["fate"],full:"Che cosa fate voi stasera?"},
 {t:"dict",au:"Non capisco."},
 {t:"ord",q:"Ordena: «Vivimos en Milán.»",w:["Abitiamo","a","Milano."],a:["Abitiamo a Milano."]},
 {t:"say",zh:"Di qué haces: si trabajas o estudias, y dónde",it:"Sono studente, studio economia all'università di Bologna.",e:"Cámbialo con tus datos."},
 {t:"say",zh:"Di «No entiendo, ¿puedes repetir?»",it:"Non capisco, puoi ripetere?"}
];
VOC.l7=[
 ["parlare","hablar",""],["abitare","vivir (en un lugar)",""],["lavorare","trabajar",""],["studiare","estudiar",""],["capire","entender",""],["prendere","tomar, coger",""],
 ["dormire","dormir",""],["leggere","leer",""],["scrivere","escribir",""],["fare","hacer",""],["ripetere","repetir",""],
 ["medico","médico","m"],["ingegnere","ingeniero","m"],["cuoco","cocinero","m"],["cameriere","camarero","m"],["commessa","dependienta","f"],["impiegato","empleado","m"],["avvocato","abogado","m"],
 ["università","universidad","f"],["ristorante","restaurante","m"],["ufficio","oficina","m"],["lingua","lengua, idioma","f"],["economia","economía","f"],["un po'","un poco",""],["veloce","rápido",""],["piano piano","poco a poco",""]
];
