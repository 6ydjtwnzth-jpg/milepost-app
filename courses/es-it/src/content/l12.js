DLG.l12=[["A","Perdone, ¿hay una farmacia por aquí?","Mi scusi, c'è una farmacia qui vicino?"],["B","Sí, hay una en la calle Mayor.","Sì, ce n'è una in calle Mayor."],["A","¿Por dónde se va?","Da che parte si va?"],["B","Siga todo recto y tome la segunda calle a la izquierda.","Vada dritto e prenda la seconda strada a sinistra."],["A","La segunda a la izquierda…","La seconda a sinistra…"],["B","Luego gire a la derecha. Está al lado del banco, enfrente de la iglesia.","Poi giri a destra. È accanto alla banca, di fronte alla chiesa."],["A","¿Está lejos?","È lontano?"],["B","No, está a cinco minutos a pie.","No, è a cinque minuti a piedi."],["A","¡Muchas gracias!","Grazie mille!"],["B","De nada.","Di niente."]];
EX.l12=[
 {q:"«La farmacia è accanto alla banca.»",o:["{La farmacia está al lado del banco.}","{La farmacia está al lado el banco.}","{La farmacia hay al lado del banco.}"],e:"{al lado de} + {el} = {al lado del}."},
 {q:"«C'è un bar all'angolo.»",o:["{Hay un bar en la esquina.}","{Está un bar en la esquina.}","{Hay un bar en el ángulo.}"],e:"Una cosa nuova: {hay}; l'angolo della strada: {la esquina}."},
 {q:"«Giri a destra.» (Lei)",o:["{Gire a la derecha.}","{Gira a destra.}","{Gire a derecha.}"],e:"{a la derecha}, con l'articolo."},
 {q:"«Vada sempre dritto.»",o:["{Siga todo recto.}","{Sigue todo dritto.}","{Vaya todo derecho a la izquierda.}"],e:"{seguir} → {siga}; dritto = {recto}."},
 {q:"«al terzo piano»:",o:["{en el tercer piso}","{en el tercero piso}","{al tres piso}"],e:"{tercero} → {tercer} davanti a un nome maschile."},
 {q:"«Vado al lavoro a piedi.»",o:["{Voy al trabajo a pie.}","{Voy al trabajo en pie.}","{Voy al trabajo con pies.}"],e:"{a pie}; con i mezzi invece {en}: {en metro}."},
 {q:"Ascolta: dov'è l'albergo?",au:"El hotel está enfrente de la estación.",o:["di fronte alla stazione","accanto alla stazione","dietro la stazione"],e:"{enfrente de} = di fronte a."},
 {q:"Ascolta: che cosa deve fare?",au:"Siga todo recto y gire a la izquierda en el puente.",o:["dritto, poi a sinistra al ponte","a sinistra, poi dritto","dritto, poi a destra al ponte"],e:"{a la izquierda} = a sinistra."},
 {q:"Ascolta: quanto è lontano?",au:"Está a diez minutos a pie.",o:["dieci minuti a piedi","dieci minuti in autobus","due minuti a piedi"],e:"{a pie} = a piedi."},
 {t:"type",q:"Completa: {Correos está} ＿ {el supermercado y la iglesia.} (tra)",a:["entre"],full:"Correos está entre el supermercado y la iglesia."},
 {t:"type",q:"Completa: {Tome la} ＿ {calle a la derecha.} (1ª)",a:["primera"],full:"Tome la primera calle a la derecha."},
 {t:"dict",au:"¿Por dónde se va a la estación?"},
 {t:"say",zh:"Spiega la strada: «Vada dritto, prenda la prima a destra. È accanto al supermercato.»",it:"Siga todo recto y tome la primera a la derecha. Está al lado del supermercado."},
 {t:"say",zh:"Chiedi a un passante se c'è un bancomat qui vicino",it:"Perdone, ¿hay un cajero por aquí?"}
];
VOC.l12=[
 ["calle","via, strada","f"],["esquina","angolo (della strada)","f"],["iglesia","chiesa","f"],["farmacia","farmacia","f"],["correos","ufficio postale","m"],["supermercado","supermercato","m"],["cajero","bancomat","m"],["parada","fermata","f"],["metro","metropolitana","m"],["autobús","autobus","m"],["tren","treno","m"],
 ["enfrente de","di fronte a",""],["delante de","davanti a",""],["detrás de","dietro",""],["entre","tra",""],["cerca de","vicino a",""],["lejos","lontano",""],["derecha","destra","f"],["izquierda","sinistra","f"],["todo recto","sempre dritto",""],["por aquí","qui vicino, da queste parti",""],["por dónde se va","da che parte si va",""],
 ["seguir","proseguire, seguire",""],["girar","girare",""],["tomar","prendere",""],["coger","prendere (in Spagna)",""],["cruzar","attraversare",""],["a pie","a piedi",""],["minuto","minuto","m"],["primero","primo",""],["segundo","secondo",""],["tercero","terzo",""],["puente","ponte","m"],["del","del, dello (de + el)",""],["dirección", "indirizzo; direzione", "f"],["barrio", "quartiere", "m"],["aeropuerto", "aeroporto", "m"],["taxi", "taxi", "m"],["billete", "biglietto (di treno, autobus)", "m"],["bajar", "scendere", ""],["arriba", "sopra, su", ""],["abajo", "sotto, giù", ""],["fuera", "fuori", ""]
];
EX.l12=EX.l12.concat([
 {t:"dict",au:"La farmacia está al lado del banco."},
 {t:"say",zh:"Chiedi se è lontano",it:"¿Está lejos?"},
 {t:"type",q:"Completa: {El parking está} ＿ {del museo.} (dietro)",a:["detrás"],full:"El parking está detrás del museo."}
]);
