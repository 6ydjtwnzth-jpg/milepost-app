DLG.l4=[["A","¡Bienvenida! Esta es mi casa.","Benvenuta! Questa è casa mia."],["B","¡Qué bonita! Es muy grande.","Che bella! È molto grande."],["A","Mira, esta es la cocina, y aquí está el salón.","Guarda, questa è la cucina, e qui c'è il soggiorno."],["B","¿Hay terraza?","C'è la terrazza?"],["A","Sí, hay una terraza pequeña. Y hay dos habitaciones.","Sì, c'è una piccola terrazza. E ci sono due camere."],["B","¿Y dónde está el baño?","E dov'è il bagno?"],["A","Está al lado de mi habitación.","È accanto alla mia camera."],["B","¡Hay muchos libros!","Ci sono tanti libri!"],["A","Sí, son de mi hermano.","Sì, sono di mio fratello."]];
EX.l4=[
 {q:"«il latte»:",o:["{la leche}","{el leche}","{lo leche}"],e:"{leche} è femminile, al contrario dell'italiano."},
 {q:"«l'acqua»:",o:["{el agua}","{la agua}","{lo agua}"],e:"Femminile con {a-} accentata: {el agua} al singolare."},
 {q:"Il plurale di {ciudad}:",o:["{ciudades}","{ciudads}","{ciudadas}"],e:"Dopo consonante: {-es}."},
 {q:"Il plurale di {lápiz}:",o:["{lápices}","{lápizes}","{lápizs}"],e:"{-z} → {-ces}."},
 {q:"«In soggiorno c'è un divano.»",o:["{En el salón hay un sofá.}","{En el salón está un sofá.}","{En el salón hay el sofá.}"],e:"Una cosa nuova, con {un}: {hay}."},
 {q:"«Dov'è il bagno?»",o:["{¿Dónde está el baño?}","{¿Dónde hay el baño?}","{¿Dónde es el baño?}"],e:"Dove si trova una cosa nota: {está}."},
 {q:"«la macchina»:",o:["{el coche}","{la coche}","{lo coche}"],e:"{coche} è maschile, al contrario di «la macchina»."},
 {q:"Ascolta: quante camere ci sono?",au:"Hay dos habitaciones.",o:["due","una","tre"],e:"{dos habitaciones}."},
 {q:"Ascolta: dove sono le chiavi?",au:"Las llaves están en la mesa.",o:["sul tavolo","in cucina","nella borsa"],e:"{en la mesa} = sul tavolo."},
 {t:"type",q:"Completa: {En la plaza} ＿ {dos hoteles.} (ci sono)",a:["hay"],full:"En la plaza hay dos hoteles."},
 {t:"type",q:"Completa: {Los baños} ＿ {arriba.} (si trovano)",a:["están"],full:"Los baños están arriba."},
 {t:"dict",au:"En mi habitación hay una cama."},
 {t:"say",zh:"Descrivi la tua casa: «Nella mia casa ci sono due camere e una cucina grande.»",it:"En mi casa hay dos habitaciones y una cocina grande."},
 {t:"say",zh:"Chiedi dov'è la cucina",it:"¿Dónde está la cocina?"}
];
VOC.l4=[
 ["el","il, lo",""],["la","la",""],["los","i, gli",""],["las","le",""],["un","un, uno",""],["una","una",""],["hay","c'è, ci sono",""],["al lado de","accanto a",""],["arriba","sopra, al piano di sopra",""],["en","in, su",""],["muchos","molti",""],["mira","guarda",""],["bienvenida","benvenuta",""],
 ["casa","casa","f"],["cocina","cucina","f"],["salón","soggiorno, salotto","m"],["habitación","stanza, camera","f"],["baño","bagno","m"],["terraza","terrazza","f"],["cama","letto","f"],["mesa","tavolo","f"],["sofá","divano","m"],["puerta","porta","f"],["llave","chiave","f"],
 ["libro","libro","m"],["lápiz","matita","m"],["espejo","specchio","m"],["televisión","televisione","f"],["leche","latte","f"],["sal","sale","f"],["nariz","naso","f"],["flor","fiore","f"],["árbol","albero","m"],["problema","problema","m"],["coche","macchina, auto","m"],["mapa","mappa, cartina","m"],["ciudad","città","f"],["plaza","piazza","f"],
 ["grande","grande",""],["pequeño","piccolo",""],["bonito","bello, carino",""],["qué bonito","che bello",""]
];
EX.l4=EX.l4.concat([
 {t:"dict",au:"¿Dónde está el baño?"},
 {t:"say",zh:"Chiedi se c'è la terrazza",it:"¿Hay terraza?"},
 {t:"type",q:"Completa: ＿ {sal está en la mesa.} (La / El)",a:["la"],full:"La sal está en la mesa."}
]);
