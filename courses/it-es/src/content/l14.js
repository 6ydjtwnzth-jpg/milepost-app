DLG.l14=[["A","Buongiorno, signora! Cosa Le do?","¡Buenos días, señora! ¿Qué le pongo?"],["B","Buongiorno. Vorrei dei pomodori, per favore.","Buenos días. Quisiera unos tomates, por favor."],["A","Quanti ne vuole?","¿Cuántos quiere?"],["B","Ne vorrei un chilo. E anche delle mele.","Quisiera un kilo. Y también unas manzanas."],["A","Queste sono buonissime. Quante?","Estas están buenísimas. ¿Cuántas?"],["B","Ne prendo sei. Quant'è?","Me llevo seis. ¿Cuánto es?"],["A","Quattro euro e cinquanta. Altro?","Cuatro euros con cincuenta. ¿Algo más?"],["B","No, grazie. Ecco a Lei.","No, gracias. Aquí tiene."]];
DLG.l14b=[["A","Buonasera! Siete pronti per ordinare?","¡Buenas noches! ¿Están listos para pedir?"],["B","Sì. Che cosa ci consiglia?","Sí. ¿Qué nos recomienda?"],["A","Le tagliatelle al ragù sono la specialità della casa.","Los tallarines a la boloñesa son la especialidad de la casa."],["B","Perfetto, per me le tagliatelle. E come secondo, niente.","Perfecto, para mí los tallarines. Y de segundo, nada."],["A","Da bere?","¿Para beber?"],["B","Una bottiglia d'acqua naturale, per favore.","Una botella de agua sin gas, por favor."],["A","Arriva subito!","¡Enseguida!"]];
EX.l14=[
 {q:"Escucha y elige el significado:",au:"Vorrei del pane.",o:["Quisiera pan.","Quisiera este pan.","No tengo pan."],e:"{del} = partitivo."},
 {q:"Escucha y elige el significado:",au:"Ne vorrei tre.",o:["Quisiera tres.","Tengo tres.","Quisiera el tercero."],e:"{ne} sustituye lo que ya se dijo."},
 {q:"«Unas manzanas»:",o:["{delle mele}","{dei mele}","{unas mele}"],e:"{mela} femenino, plural {mele} → {delle}."},
 {q:"«Agua» (partitivo):",o:["{dell'acqua}","{della acqua}","{degli acqua}"],e:"Delante de vocal: {dell'}."},
 {q:"«¿Tienes hermanos? — Sí, dos.»",o:["{Sì, ne ho due.}","{Sì, ho due.}","{Sì, li ho due.}"],e:"Con una cantidad: {ne}."},
 {q:"«No tengo pan.»",o:["{Non ho pane.}","{Non ho del pane.}","{No ho pane.}"],e:"En negativo, sin partitivo."},
 {q:"En el menú italiano, la pasta y el risotto son:",o:["{primo}","{secondo}","{contorno}"],e:"Pasta y arroz: primer plato."},
 {q:"¿Cuánto es {un etto di prosciutto}?",o:["100 g","1 kg","10 g"],e:"{un etto} = 100 gramos."},
 {q:"Escucha: ¿cómo empieza la palabra?",au:"gelato",o:["como la «j» inglesa de «jeans»","como la «j» española","como «gue»"],e:"{ge} = «ch» sonora."},
 {t:"type",q:"Completa: {Vorrei} ＿ {formaggio.} (partitivo, masc. sing.)",a:["del"],full:"Vorrei del formaggio."},
 {t:"type",q:"Completa: {Quanti pomodori vuole?} — ＿ {vorrei un chilo.}",a:["ne"],full:"Ne vorrei un chilo."},
 {t:"dict",au:"Il conto, per favore."},
 {t:"say",zh:"En el mercado: «Quisiera medio kilo de tomates y unas manzanas.»",it:"Vorrei mezzo chilo di pomodori e delle mele."},
 {t:"say",zh:"En el restaurante: «De primero, espaguetis con tomate y una botella de agua con gas.»",it:"Per me, come primo, gli spaghetti al pomodoro e una bottiglia d'acqua frizzante."}
];
VOC.l14=[
 ["Cosa Le do?", "¿Qué le pongo? (en una tienda)", ""],
 ["mercato","mercado","m"],["pane","pan","m"],["frutta","fruta","f"],["verdura","verdura","f"],["pomodoro","tomate","m"],["mela","manzana","f"],["arancia","naranja","f"],["patata","patata","f"],
 ["uovo","huevo (plural le uova)","m"],["formaggio","queso","m"],["prosciutto","jamón","m"],["olio","aceite","m"],["carne","carne","f"],["pollo","pollo","m"],["insalata","ensalada","f"],
 ["chilo","kilo","m"],["etto","cien gramos","m"],["litro","litro","m"],["pacco","paquete","m"],["menù","menú, carta","m"],["primo","primer plato","m"],["secondo","segundo plato","m"],["contorno","guarnición","m"],["dolce","postre; dulce","m"],
 ["ordinare","pedir (en un restaurante)",""],["consigliare","recomendar",""],["naturale","sin gas (agua)",""],["frizzante","con gas",""],["buonissimo","buenísimo",""],["burro","mantequilla","m"]
];
