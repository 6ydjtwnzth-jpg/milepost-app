DLG.l12=[["A","Scusi, dov'è la stazione?","Perdone, ¿dónde está la estación?"],["B","La stazione? È un po' lontana. Vada sempre dritto fino alla piazza.","¿La estación? Está un poco lejos. Siga recto hasta la plaza."],["A","E poi?","¿Y luego?"],["B","In piazza giri a destra e prenda la seconda strada a sinistra.","En la plaza gire a la derecha y tome la segunda calle a la izquierda."],["A","C'è anche un autobus?","¿Hay también un autobús?"],["B","Sì, il sessantaquattro. La fermata è davanti alla banca.","Sí, el sesenta y cuatro. La parada está delante del banco."],["A","Grazie mille!","¡Muchas gracias!"],["B","Prego, buona giornata!","De nada, ¡buen día!"]];
EX.l12=[
 {q:"Escucha y elige el significado:",au:"Le chiavi sono sul tavolo.",o:["Las llaves están sobre la mesa.","Las llaves están debajo de la mesa.","He dejado las llaves en la mesa."],e:"{su} + {il} = {sul}."},
 {q:"Escucha y elige el significado:",au:"Giri a destra.",o:["Gire a la derecha.","Gire a la izquierda.","Siga recto."],e:"{destra} = derecha."},
 {q:"Escucha y elige el significado:",au:"La fermata è davanti alla banca.",o:["La parada está delante del banco.","La parada está detrás del banco.","El banco está al lado de la parada."],e:"{davanti a} = delante de."},
 {q:"«En la nevera»: {in} + {il frigo} =",o:["{nel frigo}","{in il frigo}","{en el frigo}"],e:"{in} + {il} = {nel}."},
 {q:"«Estoy cerca de la estación.»",o:["{Sono vicino alla stazione.}","{Sono vicino a la stazione.}","{Sono vicino della stazione.}"],e:"{a} + {la} = {alla}."},
 {q:"«Voy a casa de Marco.»",o:["{Vado da Marco.}","{Vado a casa de Marco.}","{Vado di Marco.}"],e:"{da} + persona = a casa de."},
 {q:"A un desconocido: «Siga recto.»",o:["{Vada sempre dritto.}","{Va' sempre dritto.}","{Vaya sempre dritto.}"],e:"{Lei}: {vada}, como «vaya»."},
 {q:"A un amigo: «¡No te preocupes!»",o:["{Non preoccuparti!}","{Non ti preoccupi!}","{No preoccuparti!}"],e:"Negativo con {tu}: {non} + infinitivo."},
 {q:"Escucha: ¿cómo suena la {z}?",au:"grazie",o:["«ts»","como la «z» española","«s»"],e:"{grazie} = «gratsie»."},
 {t:"type",q:"Completa: {Il libro è} ＿ {zaino.} (in + lo)",a:["nello"],full:"Il libro è nello zaino."},
 {t:"type",q:"Completa (de usted): ＿ {a sinistra, per favore.} (girare)",a:["giri"],full:"Giri a sinistra, per favore."},
 {t:"dict",au:"Scusi, dov'è la stazione?"},
 {t:"say",zh:"Pregunta el camino: «Perdone, ¿para ir a la estación?»",it:"Scusi, per andare alla stazione?"},
 {t:"say",zh:"Da indicaciones a un amigo: «Sigue recto y luego gira a la derecha.»",it:"Va' sempre dritto e poi gira a destra."}
];
VOC.l12=[
 ["posto", "lugar, sitio", "m"],["parte", "parte", "f"],["fuori", "fuera", ""],["dentro", "dentro", ""],["sopra", "encima", ""],["ospedale", "hospital", "m"],
 ["stazione","estación","f"],["piazza","plaza","f"],["banca","banco (dinero)","f"],["chiesa","iglesia","f"],["museo","museo","m"],["farmacia","farmacia","f"],["supermercato","supermercado","m"],
 ["autobus","autobús","m"],["fermata","parada","f"],["metro","metro","f"],["destra","derecha","f"],["sinistra","izquierda","f"],["dritto","recto",""],
 ["davanti a","delante de",""],["dietro","detrás de",""],["accanto a","al lado de",""],["di fronte a","enfrente de",""],["lontano","lejos",""],["vicino a","cerca de",""],
 ["girare","girar",""],["attraversare","cruzar",""],["a piedi","a pie",""],["minuto","minuto","m"],["frigo","nevera","m"],["grazie mille","muchas gracias",""],["poi","luego, después",""]
];
