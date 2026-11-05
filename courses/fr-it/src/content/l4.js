DLG.l4=[["A","Voilà la chambre. Il y a un lit, une table et deux chaises.","Ecco la camera. C'è un letto, un tavolo e due sedie."],["B","Elle est jolie ! Il y a une armoire ?","È carina! C'è un armadio?"],["A","Oui, à côté de la fenêtre.","Sì, accanto alla finestra."],["B","Et la salle de bains ?","E il bagno?"],["A","Elle est là, en face.","È lì, di fronte."],["B","Il y a une baignoire ?","C'è la vasca?"],["A","Non, il n'y a pas de baignoire. Il y a une douche.","No, non c'è la vasca. C'è la doccia."],["B","Pas de problème. Et il y a le wifi ?","Nessun problema. E c'è il wi-fi?"],["A","Bien sûr !","Certo!"]];
EX.l4=[
 {q:"Scegli l'articolo: ＿ {mer}",o:["{la mer}","{le mer}","{les mer}"],e:"{mer} è femminile, al contrario dell'italiano: {la mer}."},
 {q:"Scegli l'articolo: ＿ {école}",o:["{l'école}","{la école}","{le école}"],e:"Davanti a vocale {le} e {la} diventano {l'}."},
 {q:"Ascolta: singolare o plurale?",au:"les chaises",o:["plurale","singolare"],e:"Lo dice l'articolo: {les} «lé». La s di {chaises} non si sente."},
 {q:"«Ci sono dei libri» si dice:",o:["{Il y a des livres.}","{Il y a livres.}","{Ils sont des livres.}"],e:"{il y a} + articolo: {des livres}."},
 {q:"«Non c'è la tv» si dice:",o:["{Il n'y a pas de télé.}","{Il n'y a pas une télé.}","{Il y a pas télé.}"],e:"Al negativo {un}/{une}/{des} diventano {de}."},
 {q:"Plurale di {un journal}:",o:["{des journaux}","{des journals}","{des journales}"],e:"-al → -aux."},
 {q:"Ascolta: quale parola senti?",au:"bon",o:["{bon}","{bonne}"],e:"{bon} è nasale, la n non si sente. {bonne} invece ha la n: «bonn»."},
 {t:"type",q:"Completa: ＿ {y a une douche.}",a:["Il"],full:"Il y a une douche."},
 {t:"dict",au:"Il y a un lit et une table."},
 {t:"say",zh:"Descrivi la tua camera: c'è un letto, un armadio, non c'è la tv",it:"Il y a un lit et une armoire. Il n'y a pas de télé."}
];
VOC.l4=[
 ["là", "lì, là", ""],["pas de problème", "nessun problema", ""],["wifi", "wi-fi", "m"],
 ["chambre","camera da letto","f"],["lit","letto","m"],["table","tavolo","f"],["chaise","sedia","f"],["armoire","armadio","f"],["fenêtre","finestra","f"],["porte","porta","f"],
 ["salle de bains","bagno","f"],["douche","doccia","f"],["baignoire","vasca da bagno","f"],["cuisine","cucina","f"],["salon","salotto","m"],["jardin","giardino","m"],
 ["télé","tv","f"],["frigo","frigo","m"],["école","scuola","f"],["mer","mare","f"],["fleur","fiore","f"],["gâteau","torta, dolce","m"],["journal","giornale","m"],
 ["il y a","c'è, ci sono",""],["voilà","ecco",""],["joli","carino, bello",""],["à côté de","accanto a",""],["en face","di fronte",""],["dans","in, dentro",""],["sur","su, sopra",""],["bien sûr","certo",""]
];
EX.l4=EX.l4.concat([
 {t:"dict",au:"Il y a un lit, une table et deux chaises."},
 {t:"say",zh:"Chiedi se c'è il wi-fi",it:"Et il y a le wifi ?"},
 {t:"type",q:"Completa: {Mais il n'y a pas} ＿ {baignoire.}",a:["de"],full:"Mais il n'y a pas de baignoire."}
]);
