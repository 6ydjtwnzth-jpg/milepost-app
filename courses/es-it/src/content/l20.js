DLG.l20=[["A","Buenas tardes. ¿Qué desea?","Buonasera. Desidera?"],["B","Busco una chaqueta para el invierno.","Cerco una giacca per l'inverno."],["A","¿Qué talla tiene?","Che taglia porta?"],["B","La 40. ¿Puedo probarme esta azul?","La 40. Posso provare questa blu?"],["A","Claro. El probador está allí, al fondo.","Certo. Il camerino è lì, in fondo."],["B","Me queda un poco pequeña. ¿La tiene en la 42?","Mi sta un po' piccola. Ce l'ha nella 42?"],["A","En azul no, pero tengo esa negra en la 42.","In blu no, ma ho quella nera nella 42."],["B","Perfecto, me la llevo. ¿Cuánto cuesta?","Perfetto, la prendo. Quanto costa?"],["A","Setenta euros, está rebajada. ¿Se la envuelvo?","Settanta euro, è scontata. Gliela incarto?"],["B","No, gracias. Hace frío: me la pongo ahora.","No, grazie. Fa freddo: la metto subito."]];
EX.l20=[
 {q:"«Questo libro è mio.»",o:["{Este libro es mío.}","{Esto libro es mío.}","{Esta libro es mío.}"],e:"Con un nome maschile: {este}. {esto} si usa senza nome."},
 {q:"«Che cos'è questo?»",o:["{¿Qué es esto?}","{¿Qué es este?}","{¿Qué es esta?}"],e:"Una cosa che non si sa che cosa sia: {esto}, neutro."},
 {q:"«Glielo regalo.» (il libro, a mia madre)",o:["{Se lo regalo.}","{Le lo regalo.}","{Lo le regalo.}"],e:"{le} + {lo} → {se lo}, come «gli» + «lo» → «glielo»."},
 {q:"«Me lo presti?»",o:["{¿Me lo prestas?}","{¿Lo me prestas?}","{¿Me le prestas?}"],e:"Prima l'indiretto ({me}), poi il diretto ({lo}), come in italiano."},
 {q:"«Questi pantaloni mi stanno grandi.»",o:["{Estos pantalones me quedan grandes.}","{Estos pantalones me están grandes.}","{Estos pantalones me queda grande.}"],e:"«stare» (di un vestito) = {quedar}, come {gustar}: {me quedan}."},
 {q:"«Posso provarla?» (la giacca)",o:["{¿Puedo probármela?}","{¿Puedo probarmela?}","{¿Puedo me la probar?}"],e:"Pronomi attaccati all'infinito, con l'accento scritto: {probármela}."},
 {q:"Ascolta: che cosa cerca?",au:"Busco una chaqueta para el invierno.",o:["una giacca","un cappotto","un maglione"],e:"{una chaqueta}."},
 {q:"Ascolta: quanto costa?",au:"Setenta euros, está rebajada.",o:["70 €","17 €","60 €"],e:"{setenta}."},
 {q:"Ascolta: di che colore è la giacca nella 42?",au:"En azul no, pero tengo esa negra en la cuarenta y dos.",o:["nera","blu","grigia"],e:"{esa negra}."},
 {t:"type",q:"Completa: {Me llevo} ＿ {zapatos.} (questi)",a:["estos"],full:"Me llevo estos zapatos."},
 {t:"type",q:"Completa: {¿La chaqueta? Sí,} ＿ {llevo.} (me + la)",a:["me la"],full:"¿La chaqueta? Sí, me la llevo."},
 {t:"dict",au:"¿Tiene esta camisa en azul?"},
 {t:"say",zh:"Chiedi se puoi provare questi pantaloni",it:"¿Puedo probarme estos pantalones?"},
 {t:"say",zh:"Di' che le scarpe ti stanno piccole e chiedi il 39",it:"Me quedan pequeños. ¿Los tiene en el treinta y nueve?"}
];
VOC.l20=[
 ["este","questo",""],["ese","quello (vicino a te)",""],["aquel","quello (lontano)",""],["esto","questo (neutro)",""],["eso","quello (neutro), ciò",""],["ahí","lì (vicino a te)",""],["se lo","glielo",""],
 ["desear","desiderare",""],["talla","taglia","f"],["probarse","provarsi, provare (un vestito)",""],["probador","camerino","m"],["quedar bien","stare bene (un vestito)",""],["me queda pequeño","mi sta piccolo",""],["llevarse","prendere, portarsi via",""],["envolver","incartare",""],["rebajas","saldi","fp"],["rebajado","scontato",""],["efectivo","contanti","m"],["al fondo","in fondo",""],["llevar","portare, indossare",""],["ponerse","mettersi (un vestito)",""],
 ["ropa","vestiti, abbigliamento","f"],["chaqueta","giacca","f"],["abrigo","cappotto","m"],["jersey","maglione","m"],["camisa","camicia","f"],["pantalones","pantaloni","mp"],["vaqueros","jeans","mp"],["falda","gonna","f"],["vestido","vestito (da donna)","m"],["zapatos","scarpe","mp"],["zapatillas","scarpe da ginnastica","fp"],
 ["color","colore","m"],["rojo","rosso",""],["blanco","bianco",""],["negro","nero",""],["amarillo","giallo",""],["azul","blu, azzurro",""],["gris","grigio",""],["marrón","marrone",""],["rosa","rosa",""],["edificio","edificio, palazzo","m"],["para ti","per te",""],["largo", "lungo", ""],["corto", "corto", ""]
];
EX.l20=EX.l20.concat([
 {t:"dict",au:"Me quedan un poco grandes."},
 {t:"say",zh:"Di': «Lo prendo.» (un maglione)",it:"Me lo llevo."},
 {t:"type",q:"Completa: {¿El regalo para Ana? Ya} ＿ {he dado.} (a lei + lo)",a:["se lo"],full:"¿El regalo para Ana? Ya se lo he dado."}
]);
