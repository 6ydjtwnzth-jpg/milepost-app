DLG.l18=[["A","¿Qué te pasó ayer? Llegaste muy tarde.","Che cosa ti è successo ieri? Sei arrivata molto tardi."],["B","¡Uf! Estaba en el metro y leía un libro.","Uff! Ero in metropolitana e leggevo un libro."],["A","¿Y entonces?","E allora?"],["B","De repente, el metro se paró en un túnel.","All'improvviso la metro si è fermata in una galleria."],["A","¡Qué miedo! ¿Había mucha gente?","Che paura! C'era molta gente?"],["B","Sí, y hacía mucho calor. Todos estábamos nerviosos.","Sì, e faceva molto caldo. Eravamo tutti nervosi."],["A","¿Cuánto tiempo estuvisteis allí?","Quanto tempo siete rimasti lì?"],["B","Cuarenta minutos. Al final, salimos y caminamos hasta la estación.","Quaranta minuti. Alla fine siamo usciti e abbiamo camminato fino alla stazione."],["A","¡Qué aventura!","Che avventura!"],["B","Sí, pero mientras caminábamos, conocí a un chico muy simpático.","Sì, ma mentre camminavamo ho conosciuto un ragazzo molto simpatico."]];
EX.l18=[
 {q:"«Dormivo quando ha squillato il telefono.»",o:["{Dormía cuando sonó el teléfono.}","{Dormí cuando sonaba el teléfono.}","{Dormía cuando sonaba el teléfono.}"],e:"Lo sfondo {dormía}, l'evento che interrompe {sonó}."},
 {q:"«Stavo cucinando quando è arrivato Pablo.»",o:["{Estaba cocinando cuando llegó Pablo.}","{Estuve cocinando cuando llegaba Pablo.}","{Estaba cocinado cuando llegó Pablo.}"],e:"{estaba} + gerundio per l'azione in corso, {llegó} per l'evento."},
 {q:"«Siamo stati tre ore in treno.»",o:["{Estuvimos tres horas en el tren.}","{Estábamos tres horas en el tren.}","{Éramos tres horas en el tren.}"],e:"Una durata chiusa (tre ore): {indefinido}, come «siamo stati»."},
 {q:"«Il viaggio è stato fantastico.» (giudizio finale)",o:["{El viaje fue fantástico.}","{El viaje era fantástico.}","{El viaje fui fantástico.}"],e:"Il giudizio su un'esperienza finita: {fue}."},
 {q:"«all'improvviso»:",o:["{de repente}","{en repente}","{a repente}"],e:"{de repente} (o {de pronto})."},
 {q:"«mentre»:",o:["{mientras}","{mientres}","{durante}"],e:"{mientras} + verbo; {durante} + nome: {durante la cena}."},
 {q:"Ascolta: che cosa faceva?",au:"Estaba leyendo un libro en el metro.",o:["leggeva un libro","dormiva","ascoltava la radio"],e:"{estaba leyendo un libro}."},
 {q:"Ascolta: che tempo faceva?",au:"Hacía mucho calor y todos estábamos nerviosos.",o:["faceva molto caldo","pioveva","faceva freddo"],e:"{hacía mucho calor}."},
 {q:"Ascolta: che cosa è successo all'improvviso?",au:"De repente, el metro se paró en un túnel.",o:["la metro si è fermata","è andata via la luce","è salito un ragazzo"],e:"{el metro se paró}."},
 {t:"type",q:"Completa: {Estaba en la ducha cuando} ＿ {el teléfono.} (sonar, indefinido)",a:["sonó"],full:"Estaba en la ducha cuando sonó el teléfono."},
 {t:"type",q:"Completa: {¿Qué} ＿ {haciendo a las ocho?} (estar, tu, imperfecto)",a:["estabas"],full:"¿Qué estabas haciendo a las ocho?"},
 {t:"dict",au:"De repente, se apagó la luz."},
 {t:"say",zh:"Racconta che cosa facevi quando ti ha chiamato un amico",it:"Estaba cenando cuando me llamó Pablo."},
 {t:"say",zh:"Comincia una storia: che giorno era e che tempo faceva",it:"Era sábado, hacía sol y yo paseaba por el parque."}
];
VOC.l18=[
 ["pasar","succedere; passare",""],["¿qué te pasó?","che cosa ti è successo?",""],["de repente","all'improvviso",""],["de pronto","all'improvviso",""],["entonces","allora, a quel punto",""],["en ese momento","in quel momento",""],["mientras","mentre",""],["durante","durante",""],["al final","alla fine",""],["así que","quindi, così",""],
 ["pararse","fermarsi",""],["apagarse","spegnersi",""],["sonar","suonare, squillare",""],["caminar","camminare",""],["pasear","passeggiare",""],["perder","perdere",""],["encontrar","trovare",""],["olvidar","dimenticare",""],["caerse","cadere",""],
 ["túnel","galleria, tunnel","m"],["luz","luce","f"],["ducha","doccia","f"],["móvil","cellulare","m"],["parque","parco","m"],["aventura","avventura","f"],["miedo","paura","m"],["suerte","fortuna","f"],["nervioso","nervoso",""],
 ["el tiempo","il tempo (meteo)",""],["hace calor","fa caldo",""],["hace frío","fa freddo",""],["hace sol","c'è il sole",""],["hace viento","c'è vento",""],["está nublado","è nuvoloso",""],["nevar","nevicare",""],["lluvia","pioggia","f"],["allí","lì, là",""],["periódico","giornale","m"]
];
EX.l18=EX.l18.concat([
 {t:"dict",au:"Primero cenamos y luego fuimos a bailar."},
 {t:"say",zh:"Di': «È stato un viaggio bellissimo.»",it:"Fue un viaje precioso."},
 {t:"type",q:"Completa: {Llovía mucho, así que} ＿ {en casa.} (quedarse, noi, indefinido)",a:["nos quedamos"],full:"Llovía mucho, así que nos quedamos en casa."}
]);
