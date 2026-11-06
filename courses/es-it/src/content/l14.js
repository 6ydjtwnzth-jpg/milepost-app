DLG.l14=[["A","¡Buenos días! ¿Qué le pongo?","Buongiorno! Che cosa le do?"],["B","Quería tomates. ¿A cuánto está el kilo?","Vorrei dei pomodori. Quanto costano al chilo?"],["A","A dos euros. ¿Cómo los quiere?","Due euro. Come li vuole?"],["B","Los quiero maduros, para una ensalada.","Li voglio maturi, per un'insalata."],["A","Muy bien. Un kilo de tomates. ¿Algo más?","Benissimo. Un chilo di pomodori. Altro?"],["B","Sí, medio kilo de fresas y una sandía pequeña.","Sì, mezzo chilo di fragole e un'anguria piccola."],["A","¿La sandía? Esta es muy dulce. ¿La quiere?","L'anguria? Questa è dolcissima. La vuole?"],["B","Sí, la quiero. Eso es todo. ¿Cuánto es?","Sì, la voglio. È tutto. Quanto le devo?"],["A","Son siete euros con veinte.","Sono sette euro e venti."]];
EX.l14=[
 {q:"«Vorrei del pane.»",o:["{Quería pan.}","{Quería del pan.}","{Quería de pan.}"],e:"Lo spagnolo non ha il partitivo: il nome da solo."},
 {q:"«un etto di prosciutto»:",o:["{cien gramos de jamón}","{un etto de jamón}","{un hecto de jamón}"],e:"In Spagna si dice {cien gramos}."},
 {q:"«I pomodori? Li voglio maturi.»",o:["{¿Los tomates? Los quiero maduros.}","{¿Los tomates? Quiero los maduros.}","{¿Los tomates? Les quiero maduros.}"],e:"{los} prima del verbo coniugato."},
 {q:"«Voglio comprarla.»",o:["{Quiero comprarla.}","{Quiero la comprar.}","{Quiero comprar la.}"],e:"Con l'infinito il pronome si attacca alla fine (o va prima di {quiero}: {la quiero comprar})."},
 {q:"«Come primo, una zuppa.»",o:["{De primero, una sopa.}","{De primo, una sopa.}","{Por primo, una zuppa.}"],e:"{de primero} / {primer plato}; {primo} è il cugino!"},
 {q:"«È tutto, grazie.»",o:["{Eso es todo, gracias.}","{Es todo eso, gracias.}","{Todo es, gracias.}"],e:"{Eso es todo} o {Nada más}."},
 {q:"Ascolta: quanto costano i pomodori al chilo?",au:"A dos euros el kilo.",o:["2 € al chilo","12 € al chilo","2 € l'etto"],e:"{a dos euros el kilo}."},
 {q:"Ascolta: che cosa compra?",au:"Medio kilo de fresas y una sandía pequeña.",o:["fragole e un'anguria","fragole e un melone","arance e un'anguria"],e:"{fresas} = fragole, {sandía} = anguria."},
 {q:"Ascolta: che cosa ordina come secondo?",au:"De segundo, pescado con patatas.",o:["pesce con patate","pollo con patate","pesce con insalata"],e:"{pescado} = pesce (da mangiare)."},
 {t:"type",q:"Completa: {¿El vino?} ＿ {compro yo.}",a:["lo"],full:"¿El vino? Lo compro yo."},
 {t:"type",q:"Completa: {Una} ＿ {de huevos, por favor.} (dozzina)",a:["docena"],full:"Una docena de huevos, por favor."},
 {t:"dict",au:"¿A cuánto está el kilo de fresas?"},
 {t:"say",zh:"Al mercato: chiedi un chilo d'arance e mezzo chilo di fragole",it:"Póngame un kilo de naranjas y medio kilo de fresas, por favor."},
 {t:"say",zh:"Al ristorante: ordina come primo un'insalata e come secondo il pollo",it:"De primero, una ensalada, y de segundo, pollo."}
];
VOC.l14=[
 ["mercado","mercato","m"],["kilo","chilo","m"],["medio","mezzo",""],["gramo","grammo","m"],["docena","dozzina","f"],["barra de pan","filone di pane","f"],["lata","lattina, scatoletta","f"],["paquete","pacchetto","m"],["litro","litro","m"],["un poco de","un po' di",""],["a cuánto está","quanto costa (al chilo)",""],["eso es todo","è tutto",""],["póngame","mi dia",""],
 ["pan","pane","m"],["fruta","frutta","f"],["manzana","mela","f"],["naranja","arancia","f"],["fresa","fragola","f"],["sandía","anguria","f"],["huevo","uovo","m"],["carne","carne","f"],["pescado","pesce (da mangiare)","m"],["pollo","pollo","m"],["patata","patata","f"],["ensalada","insalata","f"],["sopa","zuppa, minestra","f"],["gambas","gamberi","fp"],["galleta","biscotto","f"],
 ["maduro","maturo",""],["dulce","dolce",""],["bueno","buono",""],["curado","stagionato",""],["menú del día","menù del giorno","m"],["primer plato","primo piatto","m"],["segundo plato","secondo piatto","m"],["postre","dolce, dessert","m"],["bebida","bevanda","f"],["qué van a tomar","che cosa prendete",""],["comprar","comprare",""],["conocer","conoscere",""],["lo","lo (pronome)",""]
];
EX.l14=EX.l14.concat([
 {t:"dict",au:"Eso es todo, gracias."},
 {t:"say",zh:"Chiedi al cameriere che cosa c'è di dolce",it:"¿Qué hay de postre?"},
 {t:"type",q:"Completa: {Las fresas están muy buenas. ¿} ＿ {quieres?}",a:["las"],full:"Las fresas están muy buenas. ¿Las quieres?"}
]);
