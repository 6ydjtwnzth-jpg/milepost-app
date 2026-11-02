DLG.l22=[["A","Buongiorno, mi dica.","Buenos días, dígame."],["B","Buongiorno. Ho mal di gola e un po' di febbre da ieri.","Buenos días. Desde ayer me duele la garganta y tengo un poco de fiebre."],["A","Ha anche la tosse?","¿Tiene también tos?"],["B","Sì, soprattutto di notte. Potrebbe darmi qualcosa?","Sí, sobre todo por la noche. ¿Podría darme algo?"],["A","Le do questo sciroppo. Ne prenda un cucchiaio tre volte al giorno.","Le doy este jarabe. Tome una cucharada tres veces al día."],["B","Grazie. Dovrei andare dal medico?","Gracias. ¿Debería ir al médico?"],["A","Se la febbre non passa in tre giorni, sì, dovrebbe andarci.","Si la fiebre no se le pasa en tres días, sí, debería ir."],["B","Va bene, grazie mille.","De acuerdo, muchas gracias."]];
EX.l22=[
 {q:"Escucha y elige el significado:",au:"Ho mal di testa.",o:["Me duele la cabeza.","Me duelen las muelas.","Me duele la barriga."],e:"{testa} = cabeza."},
 {q:"Escucha y elige el significado:",au:"Mi fanno male i piedi.",o:["Me duelen los pies.","Me duelen las piernas.","No puedo andar."],e:"{piedi} plural → {fanno male}."},
 {q:"Escucha y elige el significado:",au:"Dovresti riposarti.",o:["Deberías descansar.","Tienes que trabajar.","¿Quieres descansar?"],e:"{dovresti} = deberías."},
 {q:"«Me duele la espalda.»",o:["{Mi fa male la schiena.}","{Mi fanno male la schiena.}","{Mi duole la schiena.}"],e:"{schiena} singular → {fa male}."},
 {q:"«Estoy constipado» (resfriado):",o:["{Ho il raffreddore.}","{Sono costipato.}","{Sono raffreddato di testa.}"],e:"{costipato} = estreñido."},
 {q:"«Hablaría con el médico.»",o:["{Parlerei con il medico.}","{Parleria con il medico.}","{Parlarei con il medico.}"],e:"Terminación {-ei}, raíz {parler-}."},
 {q:"La petición más educada:",o:["{Potrebbe aiutarmi?}","{Può aiutarmi?}","{Aiutami!}"],e:"El condicional es lo más cortés."},
 {q:"«Me gustaría vivir en Italia.»",o:["{Mi piacerebbe vivere in Italia.}","{Mi piace vivere in Italia.}","{Mi piaceria vivere in Italia.}"],e:"Deseo → {mi piacerebbe}."},
 {q:"En Italia el número de emergencias es:",o:["112","911","091"],e:"El número europeo de emergencias es el 112."},
 {t:"type",q:"Completa: ＿ {un appuntamento, per favore.} (volere, condicional, yo)",a:["vorrei"],full:"Vorrei un appuntamento, per favore."},
 {t:"type",q:"Completa: {Tu} ＿ {andare dal medico.} (dovere, condicional)",a:["dovresti"],full:"Tu dovresti andare dal medico."},
 {t:"type",q:"Completa: {Ho} ＿ {di denti.} (dolor)",a:["mal"],full:"Ho mal di denti."},
 {t:"dict",au:"Mi fa male la gola."},
 {t:"say",zh:"En la farmacia: «Tengo fiebre y tos. ¿Podría darme algo?»",it:"Ho la febbre e la tosse. Potrebbe darmi qualcosa?"},
 {t:"say",zh:"Dale un consejo a un amigo enfermo",it:"Dovresti bere molta acqua e riposarti."}
];
VOC.l22=[
 ["testa","cabeza","f"],["gola","garganta","f"],["denti","dientes",""],["pancia","barriga","f"],["schiena","espalda","f"],["braccio","brazo","m"],["gamba","pierna","f"],["piede","pie","m"],["ginocchio","rodilla","m"],["occhio","ojo","m"],
 ["febbre","fiebre","f"],["tosse","tos","f"],["raffreddore","resfriado","m"],["mal di testa","dolor de cabeza","m"],["fare male","doler",""],["costipato","estreñido",""],
 ["medico","médico","m"],["farmacia","farmacia","f"],["farmacista","farmacéutico","m"],["ricetta","receta","f"],["sciroppo","jarabe","m"],["medicina","medicina","f"],["appuntamento","cita","m"],["pronto soccorso","urgencias","m"],
 ["ho bisogno di","necesito",""],["sentirsi","sentirse",""],["guarire","curarse",""],["potrebbe","podría (usted)",""],["dovresti","deberías",""],["mi piacerebbe","me gustaría",""],["cucchiaio","cuchara, cucharada","m"]
];
