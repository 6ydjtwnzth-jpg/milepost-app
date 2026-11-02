DLG.l21=[["A","Che cosa farai dopo la laurea?","¿Qué harás después de la carrera?"],["B","Se trovo lavoro, resterò in Italia.","Si encuentro trabajo, me quedaré en Italia."],["A","E se non lo trovi?","¿Y si no lo encuentras?"],["B","Allora tornerò in Spagna, ma prima farò un viaggio in Sicilia.","Entonces volveré a España, pero antes haré un viaje a Sicilia."],["A","Bella idea! Quando partirai?","¡Buena idea! ¿Cuándo saldrás?"],["B","Forse a luglio, quando finiscono gli esami.","Quizás en julio, cuando terminen los exámenes."],["A","In bocca al lupo per gli esami!","¡Mucha suerte con los exámenes!"],["B","Crepi!","¡Crepi! (la respuesta de siempre)"]];
EX.l21=[
 {q:"Escucha y elige el significado:",au:"Se piove, resto a casa.",o:["Si llueve, me quedo en casa.","Como llueve, me quedo en casa.","Aunque llueva, salgo."],e:"{se} = si."},
 {q:"Escucha y elige el significado:",au:"Quando arrivo, ti chiamo.",o:["Cuando llegue, te llamo.","Cuando llegues, llámame.","¿Cuándo llego?"],e:"Después de {quando}: presente."},
 {q:"Escucha y elige el significado:",au:"Che cosa farai dopo la laurea?",o:["¿Qué harás después de la carrera?","¿Has terminado la carrera?","¿Por qué fuiste a la universidad?"],e:"{farai} = harás."},
 {q:"«Iré» ({andare}):",o:["{andrò}","{anderò}","{andarò}"],e:"Irregular: {andrò}."},
 {q:"«Hablaremos»:",o:["{parleremo}","{parlaremo}","{parliremo}"],e:"{-are} → {-er-}."},
 {q:"«Cuando tenga tiempo, haré un viaje.»",o:["{Quando avrò tempo, farò un viaggio.}","{Quando abbia tempo, farò un viaggio.}","{Quando ho avuto tempo, farò un viaggio.}"],e:"Sin subjuntivo: futuro."},
 {q:"«Vendrán mañana.»",o:["{Verranno domani.}","{Veniranno domani.}","{Vendranno domani.}"],e:"{venire} → {verranno}."},
 {q:"Un amigo te dice:",au:"In bocca al lupo!",o:["{Crepi!}","{Grazie!}","{Anche a te!}"],e:"La respuesta fija es {Crepi!}"},
 {t:"type",q:"Completa: {L'anno prossimo io} ＿ {in Italia.} (andare, futuro)",a:["andrò"],full:"L'anno prossimo io andrò in Italia."},
 {t:"type",q:"Completa: {Domani} ＿ {bel tempo.} (fare, futuro)",a:["farà"],full:"Domani farà bel tempo."},
 {t:"type",q:"Completa: {Esco} ＿ ＿ {piove.} (aunque)",a:["anche se"],full:"Esco anche se piove."},
 {t:"dict",au:"Se trovo lavoro, resterò in Italia."},
 {t:"say",zh:"Di «Si mañana hace buen tiempo, vamos a la playa.»",it:"Se domani fa bel tempo, andiamo al mare."},
 {t:"say",zh:"Cuenta tus planes para el año que viene (al menos tres frases en futuro)",it:"L'anno prossimo finirò l'università. Poi andrò in Italia e cercherò un lavoro."}
];
VOC.l21=[
 ["futuro","futuro","m"],["progetto","proyecto, plan","m"],["laurea","título universitario, carrera","f"],["esame","examen","m"],["lavoro","trabajo","m"],["idea","idea","f"],
 ["prossimo","próximo",""],["l'anno prossimo","el año que viene",""],["forse","quizás",""],["se","si",""],["quindi","así que",""],["allora","entonces",""],["però","pero",""],["anche se","aunque",""],
 ["dopo","después",""],["restare","quedarse",""],["trovare","encontrar",""],["sperare","esperar (desear)",""],["magari","ojalá; quizás",""],["in bocca al lupo","¡mucha suerte!",""],["crepi","respuesta a «in bocca al lupo»",""],["Sicilia","Sicilia","f"]
];
