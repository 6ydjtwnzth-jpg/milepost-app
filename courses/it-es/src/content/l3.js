DLG.l3=[["A","Buongiorno!","¡Buenos días!"],["B","Buongiorno! Come sta?","¡Buenos días! ¿Cómo está?"],["A","Bene, grazie. E Lei?","Bien, gracias. ¿Y usted?"],["B","Molto bene, grazie. Lei è il nuovo insegnante?","Muy bien, gracias. ¿Usted es el nuevo profesor?"],["A","Sì, sono Paolo Rossi. Piacere!","Sí, soy Paolo Rossi. ¡Encantado!"],["B","Piacere! Arrivederci, buona giornata!","¡Encantada! ¡Adiós, que tenga un buen día!"]];
EX.l3=[
 {q:"Hablas con tu nueva vecina, una señora mayor:",o:["{Buongiorno! Come sta?}","{Ciao! Come stai?}","{Ciao! Come va?}"],e:"Con una persona mayor que no conoces: {Lei}."},
 {q:"«¿Y usted?» se dice:",o:["{E Lei?}","{E Usted?}","{E tu?}"],e:"«Usted» = {Lei}."},
 {q:"Tu amigo te pregunta {Come va?}. Respondes:",o:["{Bene, e tu?}","{Bene, e Lei?}","{Buonanotte!}"],e:"Con un amigo: {e tu?}"},
 {q:"¿Dónde va el acento en {telefono}?",o:["te-LÈ-fo-no","te-le-FÒ-no","te-le-fo-NÒ"],e:"Antepenúltima sílaba, sin tilde escrita."},
 {q:"Son las 21:00. Al salir de un restaurante dices:",o:["{Buonasera!}","{Buongiorno!}","{Buonanotte!}"],e:"{buonanotte} solo al irse a dormir."},
 {q:"{macchina} significa:",o:["coche","máquina","mancha"],e:"Falso amigo: {la macchina} = el coche."},
 {t:"type",q:"Completa: {Buongiorno! Come} ＿ {?} (usted)",a:["sta"],full:"Buongiorno! Come sta?"},
 {t:"dict",au:"Bene, grazie. E Lei?"},
 {t:"say",zh:"Saluda a la señora Bianchi por la mañana y pregúntale cómo está",it:"Buongiorno, signora Bianchi! Come sta?"},
 {t:"say",zh:"Di «Muy bien, gracias. ¿Y tú?»",it:"Molto bene, grazie. E tu?"}
];
VOC.l3=[
 ["buona giornata","buen día (al despedirse)",""],["salve","hola (neutro)",""],["come va?","¿qué tal?",""],["come sta?","¿cómo está? (usted)",""],["a dopo","hasta luego",""],["molto","muy; mucho",""],
 ["numero","número","m"],["telefono","teléfono","m"],["cellulare","móvil, celular","m"],["macchina","coche","f"],["signore","señor","m"],["signora","señora","f"],["signorina","señorita","f"],["nuovo","nuevo",""],
 ["perché","por qué; porque",""],["sei","seis",""],["otto","ocho",""],["nove","nueve",""],["quattro","cuatro",""],["città","ciudad","f"],["vicino","vecino","m"],["vicina","vecina","f"]
];
