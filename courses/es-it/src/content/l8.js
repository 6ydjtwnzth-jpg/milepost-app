DLG.l8=[["A","¡Buenos días! ¿Qué le pongo?","Buongiorno! Che cosa le porto?"],["B","¿Me pone un cortado, por favor?","Mi fa un macchiato, per favore?"],["A","Muy bien. ¿Algo más?","Benissimo. Altro?"],["B","Sí, quería una tostada con tomate.","Sì, vorrei una fetta di pane tostato con il pomodoro."],["A","¿Con aceite?","Con l'olio?"],["B","Sí, con aceite, por favor. ¿Cuánto es?","Sì, con l'olio, per favore. Quanto le devo?"],["A","Son tres euros con cincuenta.","Sono tre euro e cinquanta."],["B","¿Puedo pagar con tarjeta?","Posso pagare con la carta?"],["A","Claro. Aquí tiene.","Certo. Ecco a lei."]];
EX.l8=[
 {q:"Al bar, in Spagna, il modo più naturale per ordinare:",o:["{¿Me pone un café, por favor?}","{Dame un café.}","{Voglio un café.}"],e:"{¿Me pone…?} è la formula tipica dei bar spagnoli."},
 {q:"«Vorrei un panino.» (con gentilezza)",o:["{Quería un bocadillo.}","{Quiero un bocadillo, ¡ya!}","{Quería a un bocadillo.}"],e:"{quería} è il modo cortese, come «vorrei»."},
 {q:"Vuoi un caffè macchiato:",o:["{un cortado}","{un manchado}","{un café solo}"],e:"Il macchiato in Spagna si chiama {cortado}."},
 {q:"«Il conto, per favore.»",o:["{La cuenta, por favor.}","{El conto, por favor.}","{La cuenta, para favor.}"],e:"{la cuenta}."},
 {q:"Vuoi il burro per il pane:",o:["{mantequilla}","{burro}","{aceite}"],e:"{burro} è l'asino! Il burro è {la mantequilla}."},
 {q:"«Quanto costa?»",o:["{¿Cuánto cuesta?}","{¿Cuánto costa?}","{¿Cuánta cuesta?}"],e:"{costar} cambia la radice: {cuesta}."},
 {q:"Ascolta: quanto deve pagare?",au:"Son tres euros con cincuenta.",o:["3,50 €","3,15 €","13,50 €"],e:"{tres euros con cincuenta} = 3,50 €."},
 {q:"Ascolta: che cosa vuole?",au:"Un café con leche y una tostada, por favor.",o:["caffellatte e pane tostato","caffè nero e un panino","tè e una brioche"],e:"{café con leche} + {tostada}."},
 {q:"Il barista chiede {¿Algo más?} Non vuoi altro:",o:["{No, nada más, gracias.}","{No, algo más.}","{Sí, nada.}"],e:"{nada más} = nient'altro."},
 {t:"type",q:"Completa: {¿Puedo pagar con} ＿ {?} (carta)",a:["tarjeta"],full:"¿Puedo pagar con tarjeta?"},
 {t:"type",q:"Completa: {¿Me} ＿ {una caña, por favor?} (poner)",a:["pone"],full:"¿Me pone una caña, por favor?"},
 {t:"dict",au:"La cuenta, por favor."},
 {t:"say",zh:"Ordina un caffellatte e una fetta di pane tostato con il pomodoro",it:"¿Me pone un café con leche y una tostada con tomate, por favor?"},
 {t:"say",zh:"Chiedi quanto devi e se puoi pagare con la carta",it:"¿Cuánto es? ¿Puedo pagar con tarjeta?"}
];
VOC.l8=[
 ["poner","mettere; servire (al bar)",""],["qué le pongo","che cosa le porto",""],["me pone","mi dà, mi fa (al bar)",""],["quería","vorrei (cortese)",""],["querer","volere",""],["para mí","per me",""],["algo","qualcosa",""],["algo más","altro?",""],["nada más","nient'altro",""],["claro","certo",""],
 ["cortado","caffè macchiato","m"],["café solo","caffè nero","m"],["café con leche","caffellatte","m"],["descafeinado","decaffeinato","m"],["caña","birra piccola alla spina","f"],["cerveza","birra","f"],["botella","bottiglia","f"],["vaso","bicchiere","m"],["taza","tazza","f"],
 ["bocadillo","panino","m"],["tostada","fetta di pane tostato","f"],["tomate","pomodoro","m"],["aceite","olio","m"],["mantequilla","burro","f"],["burro","asino (falso amico!)","m"],["azúcar","zucchero","m"],["tapa","tapa, stuzzichino","f"],
 ["cuánto es","quanto le devo",""],["cuánto cuesta","quanto costa",""],["costar","costare",""],["euro","euro","m"],["céntimo","centesimo","m"],["cuenta","conto","f"],["pagar","pagare",""],["con tarjeta","con la carta",""],["en efectivo","in contanti",""],["propina","mancia","f"],["bar","bar","m"],["precio", "prezzo", "m"],["dinero", "soldi, denaro", "m"],["otro", "altro", ""]
];
EX.l8=EX.l8.concat([
 {t:"dict",au:"¿Cuánto es?"},
 {t:"say",zh:"Il barista chiede {¿Qué te pongo?}: chiedi due birre piccole",it:"Dos cañas, por favor."},
 {t:"type",q:"Completa: {Para mí, un café} ＿ {.} (nero)",a:["solo"],full:"Para mí, un café solo."}
]);
