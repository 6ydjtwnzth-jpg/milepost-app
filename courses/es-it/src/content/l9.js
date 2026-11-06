DLG.l9=[["A","¿Dónde vives, Luca?","Dove abiti, Luca?"],["B","En Lavapiés, cerca de la estación.","A Lavapiés, vicino alla stazione."],["A","¿Vives solo?","Vivi da solo?"],["B","No, vivo con dos amigos.","No, vivo con due amici."],["A","¿Y qué hacen?","E che cosa fanno?"],["B","Marta estudia música y Juan trabaja en una librería.","Marta studia musica e Juan lavora in una libreria."],["A","¿Por qué vives en Madrid?","Perché vivi a Madrid?"],["B","Porque estudio aquí. ¡Y me encanta la ciudad!","Perché studio qui. E adoro la città!"],["A","¿Adónde vas ahora?","Dove vai adesso?"],["B","Voy a la biblioteca. ¿Vienes conmigo?","Vado in biblioteca. Vieni con me?"]];
EX.l9=[
 {q:"«Dove abiti?»",o:["{¿Dónde vives?}","{¿Donde vives?}","{¿Adónde vives?}"],e:"Con l'accento; {adónde} solo con i verbi di movimento come {ir}."},
 {q:"«Dove vai?»",o:["{¿Adónde vas?}","{¿Dónde vas?}","{¿Adónde vades?}"],e:"Con {ir}: {¿adónde?}"},
 {q:"«Perché studi spagnolo?» — «Perché…»",o:["{¿Por qué…? — Porque…}","{¿Porque…? — Por qué…}","{¿Por que…? — Por qué…}"],e:"Domanda: {por qué}; risposta: {porque}."},
 {q:"«Faccio colazione alle otto.» Prima persona di {hacer}:",o:["{hago}","{haco}","{hazo}"],e:"{hacer} → {hago}."},
 {q:"«Esco di casa alle sette.»",o:["{Salgo de casa a las siete.}","{Salo de casa a las siete.}","{Subo de casa a las siete.}"],e:"{salir} = uscire → {salgo}."},
 {q:"«Quante persone ci sono?»",o:["{¿Cuántas personas hay?}","{¿Cuántos personas hay?}","{¿Cuánto personas hay?}"],e:"{cuánto} si accorda: {cuántas personas}."},
 {q:"Ascolta: dove lavora Juan?",au:"Juan trabaja en una librería.",o:["in una libreria","in una biblioteca","in una banca"],e:"{librería} = libreria; la biblioteca è {biblioteca}."},
 {q:"Ascolta: la domanda chiede…",au:"¿A qué hora empieza la película?",o:["l'ora","il giorno","il titolo"],e:"{¿A qué hora?} = a che ora."},
 {q:"«Vieni con me?»",o:["{¿Vienes conmigo?}","{¿Vienes con mí?}","{¿Venes conmigo?}"],e:"«con me» = {conmigo}; {venir} → {vienes}."},
 {t:"type",q:"Completa: {¿Qué} ＿ {el sábado?} (hacer, tu)",a:["haces"],full:"¿Qué haces el sábado?"},
 {t:"type",q:"Completa: {Nosotros} ＿ {al cine.} (ir)",a:["vamos"],full:"Nosotros vamos al cine."},
 {t:"dict",au:"¿Por qué estudias español?"},
 {t:"say",zh:"Chiedi a un nuovo collega dove abita, con chi abita e perché studia spagnolo",it:"¿Dónde vives? ¿Con quién vives? ¿Por qué estudias español?"},
 {t:"say",zh:"Di': «Scusi, non capisco. Può parlare più piano?»",it:"Perdone, no entiendo. ¿Puede hablar más despacio?"}
];
VOC.l9=[
 ["qué","che cosa",""],["adónde","dove (verso dove)",""],["cuándo","quando",""],["cuánto","quanto",""],["por qué","perché (domanda)",""],["porque","perché (risposta)",""],["con quién","con chi",""],["conmigo","con me",""],["solo","da solo",""],["ahora","adesso",""],
 ["ir","andare",""],["hacer","fare",""],["salir","uscire, partire",""],["subir","salire",""],["venir","venire",""],["entender","capire",""],["significar","significare",""],["decir","dire",""],["despacio","piano, lentamente",""],["más","più",""],
 ["estación","stazione","f"],["música","musica","f"],["librería","libreria","f"],["biblioteca","biblioteca","f"],["palabra","parola","f"],["pregunta","domanda","f"],["respuesta","risposta","f"],["persona","persona","f"],["oír", "sentire, udire", ""],["traer", "portare (qui)", ""],["repetir", "ripetere", ""],["explicar", "spiegare", ""]
];
EX.l9=EX.l9.concat([
 {t:"dict",au:"¿Con quién vives?"},
 {t:"say",zh:"Chiedi a un'amica a che ora esce di casa",it:"¿A qué hora sales de casa?"},
 {t:"type",q:"Completa: {¿} ＿ {vienes? — En autobús.} (come)",a:["cómo"],full:"¿Cómo vienes? — En autobús."}
]);
