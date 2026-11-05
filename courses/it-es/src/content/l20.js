DLG.l20=[["A","Buongiorno, posso aiutarLa?","Buenos días, ¿puedo ayudarla?"],["B","Grazie, sto solo guardando.","Gracias, solo estoy mirando."],["A","Prego, faccia pure.","Por favor, mire tranquila."],["B","Scusi, avete questa giacca in nero?","Perdone, ¿tienen esta chaqueta en negro?"],["A","Sì, eccola. Che taglia porta?","Sí, aquí está. ¿Qué talla tiene?"],["B","La quarantadue. Posso provarla?","La cuarenta y dos. ¿Puedo probármela?"],["A","Certo, il camerino è lì.","Claro, el probador está allí."],["B","Mi sta bene! La prendo. Quanto costa?","¡Me queda bien! Me la llevo. ¿Cuánto cuesta?"],["A","Ottanta euro, ma oggi c'è il venti per cento di sconto.","Ochenta euros, pero hoy hay un veinte por ciento de descuento."],["B","Perfetto! Posso pagare con la carta?","¡Perfecto! ¿Puedo pagar con tarjeta?"]];
EX.l20=[
 {q:"Escucha y elige el significado:",au:"La prendo!",o:["¡Me la llevo!","¡Te la doy!","¡No la quiero!"],e:"{la} = la (la chaqueta)."},
 {q:"Escucha y elige el significado:",au:"Che cosa stai facendo?",o:["¿Qué estás haciendo?","¿Qué hiciste?","¿Qué vas a hacer?"],e:"{stai facendo} = estás haciendo."},
 {q:"«¿Conoces a Marco? — Sí, lo conozco.»",o:["{Sì, lo conosco.}","{Sì, gli conosco.}","{Sì, le conosco.}"],e:"Complemento directo: {lo}."},
 {q:"«¿Los pantalones? Los compro.»",o:["{Li compro.}","{Los compro.}","{Le compro.}"],e:"«los» = {li}."},
 {q:"«¿Los zapatos? Me los pruebo.» ({le scarpe}, femenino)",o:["{Le provo.}","{Li provo.}","{La provo.}"],e:"{scarpe} es femenino plural → {le}."},
 {q:"«Marco está durmiendo.»",o:["{Marco sta dormendo.}","{Marco sta dormiendo.}","{Marco è dormendo.}"],e:"{-ire} → {-endo}, sin «i»."},
 {q:"«Esta falda es demasiado larga.»",o:["{Questa gonna è troppo lunga.}","{Questa gonna è troppo larga.}","{Questa gonna è molto larga.}"],e:"«largo» = {lungo}; {largo} = ancho."},
 {q:"«Una chaqueta negra»:",o:["{una giacca nera}","{una giacca nero}","{una nera giacca}"],e:"El color detrás, concordado."},
 {t:"type",q:"Completa: {Che cosa stai} ＿ {?} (fare, gerundio)",a:["facendo"],full:"Che cosa stai facendo?"},
 {t:"type",q:"Completa: {I pantaloni?} ＿ {compro.}",a:["li"],full:"I pantaloni? Li compro."},
 {t:"type",q:"Completa: {Sto} ＿ {un libro.} (leggere, gerundio)",a:["leggendo"],full:"Sto leggendo un libro."},
 {t:"dict",au:"Posso provarla?"},
 {t:"say",zh:"En una tienda: «Perdone, ¿tienen estos zapatos en el 39? ¿Puedo probármelos?»",it:"Scusi, avete queste scarpe nel trentanove? Posso provarle?"},
 {t:"say",zh:"Di lo que estás haciendo ahora",it:"Sto studiando l'italiano e sto ascoltando la musica."}
];
VOC.l20=[
 ["sicurezza", "seguridad", "f"],["attenzione", "atención", "f"],
 ["solo", "solo", ""],["pagare", "pagar", ""],["troppo", "demasiado", ""],
 ["giacca","chaqueta","f"],["maglietta","camiseta","f"],["camicia","camisa","f"],["pantaloni","pantalones",""],["gonna","falda","f"],["vestito","vestido; traje","m"],["scarpa","zapato","f"],["borsa","bolso","f"],
 ["taglia","talla","f"],["numero","número (de zapato)","m"],["camerino","probador","m"],["sconto","descuento","m"],["saldi","rebajas",""],["carta","tarjeta; papel","f"],
 ["nero","negro",""],["bianco","blanco",""],["rosso","rojo",""],["giallo","amarillo",""],["verde","verde",""],["blu","azul",""],["grigio","gris",""],["rosa","rosa, rosado",""],
 ["stretto","estrecho",""],["largo","ancho",""],["lungo","largo",""],["provare","probar",""],["portare","llevar; usar (talla)",""],["comprare","comprar",""],["conoscere","conocer",""]
];
