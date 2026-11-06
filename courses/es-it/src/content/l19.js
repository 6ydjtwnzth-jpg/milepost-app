DLG.l19=[["A","El domingo es el cumpleaños de mamá. ¿Qué le regalamos?","Domenica è il compleanno della mamma. Che cosa le regaliamo?"],["B","¿Le compramos un libro?","Le compriamo un libro?"],["A","No, el año pasado le regalamos uno. ¿Y un bolso?","No, l'anno scorso gliene abbiamo regalato uno. E una borsa?"],["B","Mmm… un bolso es más caro que un libro.","Mmm… una borsa è più cara di un libro."],["A","Sí, pero es más útil. Y a mamá le encantan los bolsos.","Sì, ma è più utile. E alla mamma piacciono tantissimo le borse."],["B","Vale. Mira estos dos: el grande es más elegante que el pequeño.","D'accordo. Guarda queste due: quella grande è più elegante di quella piccola."],["A","Sí, pero el pequeño es tan bonito como el grande y es más barato.","Sì, ma quella piccola è bella quanto quella grande ed è più economica."],["B","Tienes razón. ¡Es el mejor!","Hai ragione. È la migliore!"],["A","Y le escribimos una tarjeta: «Para la mejor madre del mundo».","E le scriviamo un biglietto: «Alla mamma migliore del mondo»."]];
EX.l19=[
 {q:"«Le regalo un libro.» (a mia madre)",o:["{Le regalo un libro.}","{La regalo un libro.}","{Lo regalo un libro.}"],e:"«a lei» è complemento indiretto: {le}."},
 {q:"«Scrivo ai miei nonni.»",o:["{Les escribo a mis abuelos.}","{Los escribo a mis abuelos.}","{Le escribo a mis abuelos.}"],e:"«a loro» → {les}; con il nome, lo spagnolo ripete il pronome."},
 {q:"«Madrid è più grande di Siviglia.»",o:["{Madrid es más grande que Sevilla.}","{Madrid es más grande de Sevilla.}","{Madrid es más grande como Sevilla.}"],e:"«più… di» = {más… que}."},
 {q:"«Siviglia è bella quanto Granada.»",o:["{Sevilla es tan bonita como Granada.}","{Sevilla es tanto bonita como Granada.}","{Sevilla es tan bonita que Granada.}"],e:"{tan} + aggettivo + {como}."},
 {q:"«Questa paella è migliore.»",o:["{Esta paella es mejor.}","{Esta paella es más buena.}","{Esta paella es más mejor.}"],e:"{bueno} → {mejor}, come «buono» → «migliore»."},
 {q:"«Mio fratello è più grande di me.» (età)",o:["{Mi hermano es mayor que yo.}","{Mi hermano es mayor que mí.}","{Mi hermano es mayor de mí.}"],e:"Per l'età {mayor}; dopo {que} si dice {yo}, {tú}."},
 {q:"Ascolta: che cosa regalano alla mamma?",au:"Le regalamos un bolso a mamá.",o:["una borsa","un libro","dei fiori"],e:"{un bolso}."},
 {q:"Ascolta: quale borsa costa meno?",au:"El bolso pequeño es más barato que el grande.",o:["quella piccola","quella grande","costano uguale"],e:"{el pequeño es más barato}."},
 {q:"Ascolta: com'è il ristorante?",au:"Es el mejor restaurante de la ciudad.",o:["il migliore della città","il più caro della città","il peggiore della città"],e:"{el mejor… de la ciudad}."},
 {t:"type",q:"Completa: {Este hotel es} ＿ {caro que el otro.} (meno)",a:["menos"],full:"Este hotel es menos caro que el otro."},
 {t:"type",q:"Completa: {¿Qué} ＿ {regalas a tu padre?} (a lui)",a:["le"],full:"¿Qué le regalas a tu padre?"},
 {t:"dict",au:"Sevilla es tan bonita como Granada."},
 {t:"say",zh:"Confronta la tua città con Madrid",it:"Mi ciudad es más pequeña que Madrid, pero es muy bonita."},
 {t:"say",zh:"Di' che cosa regali a un amico per il compleanno",it:"Le regalo un libro y una camiseta."}
];
VOC.l19=[
 ["regalar","regalare",""],["regalo","regalo","m"],["dar","dare",""],["prestar","prestare",""],["mandar","mandare, spedire",""],["preguntar","chiedere, domandare",""],["contestar","rispondere",""],["mensaje","messaggio","m"],["le","gli, le, Le",""],["les","a loro, gli",""],
 ["bolso","borsa","m"],["perfume","profumo","m"],["camiseta","maglietta","f"],["reloj","orologio","m"],["tarta","torta","f"],["mundo","mondo","m"],
 ["más… que","più… di",""],["menos… que","meno… di",""],["tan… como","tanto… quanto",""],["tanto como","quanto, tanto quanto",""],["mejor","migliore, meglio",""],["peor","peggiore, peggio",""],["mayor","più grande (età), maggiore",""],["menor","più piccolo (età), minore",""],["el mejor","il migliore",""],["buenísimo","buonissimo",""],["muchísimo","moltissimo",""],
 ["caro","caro",""],["barato","economico",""],["útil","utile",""],["malo","cattivo",""],["guapo","bello (persona)",""],["feo","brutto",""],["bajo","basso",""],["elegante","elegante",""],["moderno","moderno",""],["tranquilo","tranquillo",""],["ruidoso","rumoroso",""],["igual","uguale",""],["tener razón","avere ragione",""],["gordo", "grasso", ""],["delgado", "magro", ""],["antipático", "antipatico", ""],["rápido", "veloce", ""]
];
EX.l19=EX.l19.concat([
 {t:"dict",au:"Es la ciudad más bonita de España."},
 {t:"say",zh:"Di': «Questa torta è buonissima!»",it:"¡Esta tarta está buenísima!"},
 {t:"type",q:"Completa: {En la fiesta había} ＿ {cien personas.} (più di)",a:["más de"],full:"En la fiesta había más de cien personas."}
]);
