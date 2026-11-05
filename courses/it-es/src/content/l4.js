DLG.l4=[["A","Ecco la mia camera!","¡Esta es mi habitación!"],["B","Che bella! È grande.","¡Qué bonita! Es grande."],["A","Questo è il letto e questa è la scrivania.","Esta es la cama y este es el escritorio."],["B","C'è anche un armadio?","¿Hay también un armario?"],["A","Sì, c'è. E ci sono due finestre.","Sí, hay. Y hay dos ventanas."],["B","E questi sono i tuoi libri?","¿Y estos son tus libros?"],["A","Sì, sono libri di italiano.","Sí, son libros de italiano."],["B","E che cos'è questo?","¿Y qué es esto?"],["A","È uno zaino. È un regalo.","Es una mochila. Es un regalo."]];
EX.l4=[
 {q:"Elige el artículo: ＿ {zaino}",o:["{lo zaino}","{il zaino}","{la zaino}"],e:"Delante de {z}: {lo}."},
 {q:"Elige el artículo: ＿ {studenti}",o:["{gli studenti}","{i studenti}","{le studenti}"],e:"{lo studente} → {gli studenti}."},
 {q:"Plural de {la finestra}:",o:["{le finestre}","{las finestras}","{le finestras}"],e:"{-a} → {-e}, sin {s}."},
 {q:"«Hay dos ventanas» se dice:",o:["{Ci sono due finestre.}","{C'è due finestre.}","{Hai due finestre.}"],e:"Plural: {ci sono}."},
 {q:"Plural de {la città}:",o:["{le città}","{le cittàe}","{le cittàs}"],e:"Las palabras con acento final no cambian."},
 {q:"Escucha: ¿qué palabra oyes?",au:"bagno",o:["{bagno}","{bango}"],e:"{gn} = ñ: «baño»."},
 {q:"Indeterminado: ＿ {amica}",o:["{un'amica}","{uno amica}","{un amica}"],e:"Femenino + vocal: {un'} con apóstrofo."},
 {t:"type",q:"Completa: {Nella camera} ＿ {un letto.} (hay)",a:["c'è"],full:"Nella camera c'è un letto."},
 {t:"dict",au:"Ci sono due finestre."},
 {t:"say",zh:"Describe tu habitación: hay una cama, un armario y dos ventanas",it:"Nella mia camera c'è un letto, c'è un armadio e ci sono due finestre."}
];
VOC.l4=[
 ["la mia", "mi (femenino; los posesivos, en la lección 5)", ""],["i tuoi", "tus (masculino plural)", ""],["televisione", "televisión", "f"],
 ["libro","libro","m"],["quaderno","cuaderno","m"],["penna","bolígrafo","f"],["giornale","periódico","m"],["camera","habitación, dormitorio","f"],["letto","cama","m"],["scrivania","escritorio","f"],["tavolo","mesa","m"],
 ["sedia","silla","f"],["armadio","armario","m"],["finestra","ventana","f"],["porta","puerta","f"],["zaino","mochila","m"],["chiave","llave","f"],["regalo","regalo","m"],["foto","foto","f"],
 ["bagno","baño","m"],["amico","amigo","m"],["amica","amiga","f"],["questo","este, esto",""],["grande","grande",""],["bello","bonito, guapo",""],["c'è","hay (singular)",""],["ci sono","hay (plural)",""],["scuola","escuela","f"],["ecco","aquí está, he aquí",""]
];
