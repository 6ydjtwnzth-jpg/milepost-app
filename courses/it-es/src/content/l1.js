DLG.l1=[["A","Ciao!","¡Hola!"],["B","Ciao!","¡Hola!"],["A","Un caffè?","¿Un café?"],["B","Sì, grazie!","¡Sí, gracias!"],["A","Prego!","¡De nada!"],["B","Grazie, ciao!","¡Gracias, adiós!"]];
EX.l1=[
 {q:"Escucha: ¿qué palabra oyes?",au:"cena",o:["{cena}","{chena}","{sena}"],e:"{ce} suena «che»: {cena} se lee «chena»."},
 {q:"Escucha: ¿qué palabra oyes?",au:"chiesa",o:["{chiesa}","{ciesa}"],e:"{chi} suena «ki»: {chiesa} = «kiesa». {ci} sonaría «chi»."},
 {q:"Escucha: ¿qué palabra oyes?",au:"gatto",o:["{gatto}","{gelato}"],e:"{ga} = «ga»; {ge} = «dye»."},
 {q:"¿Cómo se lee {grazie}?",o:["«gratsie»","«grasie»","«grathie» (con la z de Madrid)"],e:"La {z} italiana suena «ts»."},
 {q:"¿Cómo se lee {ciao}?",o:["«chao»","«siao»","«kiao»"],e:"{ci} = «chi»."},
 {q:"Entras en una tienda por la mañana. ¿Qué dices?",o:["{Buongiorno!}","{Ciao!}","{Prego!}"],e:"Con desconocidos, {buongiorno}."},
 {q:"Alguien te dice:",au:"Grazie!",o:["{Prego.}","{Scusi.}","{Arrivederci.}"],e:"Gracias → de nada: {prego}."},
 {t:"dict",au:"Grazie!"},
 {t:"dict",au:"Buongiorno!"},
 {t:"say",zh:"Lee en voz alta, cuidando la {c} y la {g}: {casa, cena, chiesa, gelato}",it:"casa, cena, chiesa, gelato",e:"{ce}, {ci} = «che, chi»; {che}, {chi} = «ke, ki»."},
 {t:"say",zh:"Saluda al dependiente al entrar y, al salir, di «gracias, adiós»",it:"Buongiorno! Grazie, arrivederci!"}
];
VOC.l1=[
 ["ciao","hola; adiós",""],["buongiorno","buenos días",""],["buonasera","buenas tardes, buenas noches",""],["buonanotte","buenas noches (al acostarse)",""],["arrivederci","adiós (formal)",""],
 ["grazie","gracias",""],["prego","de nada; adelante",""],["scusi","perdone (formal)",""],["scusa","perdona (informal)",""],["per favore","por favor",""],
 ["sì","sí",""],["no","no",""],["a presto","hasta pronto",""],["bene","bien",""],
 ["casa","casa","f"],["vino","vino","m"],["sole","sol","m"],["luna","luna","f"],["pasta","pasta","f"],["caffè","café","m"],["pizza","pizza","f"],["gatto","gato","m"],
 ["cena","cena","f"],["chiesa","iglesia","f"],["gelato","helado","m"]
];
