DLG.l8=[["A","Buongiorno, dica!","¡Buenos días, dígame!"],["B","Buongiorno. Vorrei un cappuccino e un cornetto, per favore.","Buenos días. Quisiera un capuchino y un cruasán, por favor."],["A","Altro?","¿Algo más?"],["B","Anche un bicchiere d'acqua. Quant'è?","También un vaso de agua. ¿Cuánto es?"],["A","Tre euro e venti.","Tres euros con veinte."],["B","Ecco a Lei.","Aquí tiene."],["A","Grazie, buona giornata!","¡Gracias, que tenga un buen día!"],["B","Grazie, altrettanto!","¡Gracias, igualmente!"]];
EX.l8=[
 {q:"Escucha: ¿cuánto es?",au:"Sono tre euro e venti.",o:["3,20 €","3,12 €","20,30 €"],e:"{tre euro e venti} = 3,20 €."},
 {q:"Escucha: ¿cuánto es?",au:"Un euro e cinquanta.",o:["1,50 €","1,15 €","15 €"],e:"{cinquanta} = 50."},
 {q:"Escucha y elige el significado:",au:"Vorrei un cappuccino, per favore.",o:["Quisiera un capuchino, por favor.","Me gusta el capuchino.","¿Cuánto cuesta el capuchino?"],e:"{vorrei} = quisiera."},
 {q:"La forma más educada para pedir:",o:["{Vorrei un caffè, per favore.}","{Voglio un caffè.}","{Dammi un caffè.}"],e:"{voglio} suena brusco."},
 {q:"El camarero pregunta:",au:"Altro?",o:["{No, grazie. Quant'è?}","{Sì, altro.}","{Prego, altro.}"],e:"¿Algo más? → No, gracias. ¿Cuánto es?"},
 {q:"Preguntas el precio de dos cruasanes:",o:["{Quanto costano due cornetti?}","{Quanto costa due cornetti?}","{Quanti costa due cornetti?}"],e:"Plural: {costano}."},
 {q:"Quieres un café con leche:",o:["{un caffellatte}","{un latte}","{un caffè con latte}"],e:"{latte} solo es leche."},
 {q:"¿Cómo se pronuncia {strada}?",o:["«strada», sin «e» delante","«estrada»","«s-trada» con pausa"],e:"{s} + consonante sin «e»."},
 {t:"type",q:"Completa: ＿ {un caffè, per favore.} (quisiera)",a:["vorrei"],full:"Vorrei un caffè, per favore."},
 {t:"dict",au:"Il conto, per favore."},
 {t:"dict",au:"Quanto costa?"},
 {t:"say",zh:"Pide: «Quisiera un cruasán y un vaso de agua, por favor.»",it:"Vorrei un cornetto e un bicchiere d'acqua, per favore."},
 {t:"say",zh:"Al pagar di «Aquí tiene» y al salir «Gracias, adiós»",it:"Ecco a Lei. Grazie, arrivederci!"}
];
VOC.l8=[
 ["nulla", "nada", ""],["abbastanza", "bastante", ""],["paio", "par", "m"],
 ["bar","bar, cafetería","m"],["cappuccino","capuchino","m"],["cornetto","cruasán","m"],["spremuta","zumo natural","f"],["tramezzino","sándwich triangular","m"],["panino","bocadillo","m"],
 ["acqua","agua","f"],["tè","té","m"],["latte","leche","m"],["zucchero","azúcar","m"],["bicchiere","vaso","m"],["bottiglia","botella","f"],
 ["conto","cuenta","m"],["euro","euro","m"],["cassa","caja","f"],["scontrino","tique, recibo","m"],["vorrei","quisiera",""],["quanto costa?","¿cuánto cuesta?",""],
 ["altro","otro; algo más",""],["ecco","aquí está, aquí tiene",""],["subito","enseguida",""],["altrettanto","igualmente",""],["dica","dígame",""],["strada","calle","f"],["cinquanta","cincuenta",""]
];
