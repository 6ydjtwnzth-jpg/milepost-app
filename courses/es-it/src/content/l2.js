DLG.l2=[["A","¡Hola! Me llamo Lucía. ¿Y tú?","Ciao! Mi chiamo Lucía. E tu?"],["B","Me llamo Marco.","Mi chiamo Marco."],["A","¿Eres francés?","Sei francese?"],["B","No, soy italiano, de Roma. ¿Y tú, eres de Madrid?","No, sono italiano, di Roma. E tu, sei di Madrid?"],["A","No, yo soy de Sevilla. Soy estudiante.","No, io sono di Siviglia. Sono studentessa."],["B","¡Yo también! Encantado, Lucía.","Anch'io! Piacere, Lucía."],["A","Encantada.","Piacere."]];
EX.l2=[
 {q:"{nosotros} + {ser}:",o:["{nosotros somos}","{nosotros sois}","{nosotros son}"],e:"{somos}, {sois}, {son}."},
 {q:"Una donna di Parigi dice:",o:["{Soy francesa.}","{Soy francésa.}","{Soy francés.}"],e:"Femminile {francesa}: l'accento sparisce."},
 {q:"Ascolta: chi parla?",au:"Soy italiana.",o:["una donna","un uomo"],e:"{italiana}: femminile."},
 {q:"«Mi chiamo Anna.»",o:["{Me llamo Anna.}","{Me chiamo Anna.}","{Yo llamo Anna.}"],e:"{llamarse}: {me llamo}, con {ll}."},
 {q:"{Ellas son mexicanas} vuol dire:",o:["Loro (donne) sono messicane","Lei è messicana","Siete messicane"],e:"{ellas} = loro, solo donne."},
 {q:"Marco, conoscendo Lucía, dice:",o:["{Encantado.}","{Encantada.}","{Encantados.}"],e:"Chi parla è un uomo: {encantado}."},
 {q:"Ascolta: quale parola senti?",au:"perro",o:["{perro}","{pero}"],e:"{perro} (cane) ha la {rr} vibrata; {pero} (ma) una {r} leggera."},
 {q:"«Sono studente.» Come suona meglio?",o:["{Soy estudiante.}","{Yo soy estudiante.} (sempre)","{Estudiante soy yo.}"],e:"Il pronome si può togliere, come in italiano; {yo} serve solo a sottolineare."},
 {t:"type",q:"Completa: {¿Vosotros} ＿ {italianos?} (ser)",a:["sois"],full:"¿Vosotros sois italianos?"},
 {t:"type",q:"Completa: {¿Cómo te} ＿ {?}",a:["llamas"],full:"¿Cómo te llamas?"},
 {t:"dict",au:"Soy de Roma."},
 {t:"say",zh:"Presentati: «Mi chiamo…, sono italiano/a, di…»",it:"Me llamo Giulia. Soy italiana, de Milán."},
 {t:"say",zh:"Chiedi a una ragazza come si chiama e se è spagnola",it:"¿Cómo te llamas? ¿Eres española?"}
];
VOC.l2=[
 ["yo","io",""],["tú","tu",""],["él","lui",""],["ella","lei",""],["usted","Lei (cortesia)",""],["nosotros","noi",""],["vosotros","voi",""],["ellos","loro (m.)",""],["ellas","loro (f.)",""],["ustedes","voi, Loro (cortesia, plurale)",""],
 ["ser","essere",""],["llamarse","chiamarsi",""],["y","e",""],["también","anche",""],["de","di, da",""],["cómo","come",""],["dónde","dove",""],["encantado","piacere (detto da un uomo)",""],["encantada","piacere (detto da una donna)",""],["mucho gusto","piacere",""],
 ["italiano","italiano",""],["español","spagnolo",""],["francés","francese",""],["alemán","tedesco",""],["inglés","inglese",""],["argentino","argentino",""],["mexicano","messicano",""],
 ["estudiante","studente (la estudiante = la studentessa)","m"],["nombre","nome","m"],["apellido","cognome","m"],["pero","ma",""],["perro","cane","m"],["escribir","scrivere",""],["hombre", "uomo", "m"]
];
EX.l2=EX.l2.concat([
 {t:"dict",au:"Somos estudiantes."},
 {t:"say",zh:"Chiedi a un ragazzo di dov'è",it:"¿De dónde eres?"},
 {t:"type",q:"Completa: {Ella es alemana y él es} ＿ {.} (tedesco)",a:["alemán"],full:"Ella es alemana y él es alemán."}
]);
