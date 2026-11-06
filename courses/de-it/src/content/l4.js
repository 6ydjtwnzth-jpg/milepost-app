DLG.l4=[["A","Komm rein! Das ist meine Wohnung.","Entra! Questo è il mio appartamento."],["B","Oh, schön! Ist das das Wohnzimmer?","Oh, bello! Questo è il soggiorno?"],["A","Ja. Und hier ist die Küche.","Sì. E qui c'è la cucina."],["B","Die Küche ist klein, aber hell.","La cucina è piccola, ma luminosa."],["A","Ja. Und das ist der Balkon.","Sì. E questo è il balcone."],["B","Toll! Und wo ist das Bad?","Fantastico! E dov'è il bagno?"],["A","Da links. Das Schlafzimmer ist auch da.","Lì a sinistra. Anche la camera da letto è lì."],["B","Ist das ein Sofa?","Questo è un divano?"],["A","Nein, das ist kein Sofa, das ist ein Bett!","No, non è un divano, è un letto!"]];
EX.l4=[
 {q:"«la cucina»:",o:["{die Küche}","{der Küche}","{das Küche}"],e:"{Küche} è femminile: {die Küche}."},
 {q:"«la ragazza»:",o:["{das Mädchen}","{die Mädchen}","{der Mädchen}"],e:"Le parole in {-chen} sono neutre: {das Mädchen}."},
 {q:"«Non è un divano.»",o:["{Das ist kein Sofa.}","{Das ist nicht ein Sofa.}","{Das ist nein Sofa.}"],e:"Con un nome: {kein}."},
 {q:"«una lampada»:",o:["{eine Lampe}","{ein Lampe}","{einer Lampe}"],e:"Femminile: {eine}."},
 {q:"Il plurale di {der Tisch}:",o:["{die Tische}","{die Tischs}","{der Tische}"],e:"{Tisch} → {Tische}; al plurale l'articolo è {die}."},
 {q:"Il plurale di {das Buch}:",o:["{die Bücher}","{die Buchs}","{die Buche}"],e:"{-er} con la dieresi: {Bücher}."},
 {q:"Ascolta: com'è la cucina?",au:"Die Küche ist klein, aber hell.",o:["piccola e luminosa","grande e buia","piccola e brutta"],e:"{klein} = piccolo, {hell} = luminoso."},
 {q:"Ascolta: dov'è il bagno?",au:"Da links.",o:["lì a sinistra","lì a destra","qui"],e:"{links} = a sinistra."},
 {q:"Ascolta: che cos'è?",au:"Das ist kein Sofa, das ist ein Bett!",o:["un letto","un divano","un tavolo"],e:"{ein Bett} = un letto."},
 {t:"type",q:"Completa: {Das ist} ＿ {Balkon.} (il)",a:["der"],full:"Das ist der Balkon."},
 {t:"type",q:"Completa: {Hier sind zwei} ＿ {.} (Stuhl, plurale)",a:["Stühle"],full:"Hier sind zwei Stühle."},
 {t:"dict",au:"Das ist das Wohnzimmer."},
 {t:"say",zh:"Descrivi la tua cucina: com'è?",it:"Die Küche ist klein, aber schön."},
 {t:"say",zh:"Indica un oggetto e di' che non è una lampada",it:"Das ist keine Lampe."}
];
VOC.l4=[
 ["Wohnung","appartamento","f:Wohnungen"],["Zimmer","stanza","n:Zimmer"],["Wohnzimmer","soggiorno","n:Wohnzimmer"],["Schlafzimmer","camera da letto","n:Schlafzimmer"],["Küche","cucina","f:Küchen"],["Bad","bagno","n:Bäder"],["Balkon","balcone","m:Balkone"],["Tür","porta","f:Türen"],["Fenster","finestra","n:Fenster"],
 ["Tisch","tavolo","m:Tische"],["Stuhl","sedia","m:Stühle"],["Bett","letto","n:Betten"],["Sofa","divano","n:Sofas"],["Lampe","lampada","f:Lampen"],["Schrank","armadio","m:Schränke"],["Löffel","cucchiaio","m:Löffel"],["Auto","macchina, auto","n:Autos"],["Mädchen","ragazza, bambina","n:Mädchen"],["Sonne","sole","f:Sonnen"],["Mond","luna","m:Monde"],
 ["der","il (maschile)",""],["die","la (femminile); i, le (plurale)",""],["das","il (neutro); questo",""],["ein","un, uno",""],["eine","una",""],["kein","nessuno, non… un",""],["keine","nessuna; nessuno (plurale)",""],
 ["Das ist…","questo è…",""],["groß","grande",""],["klein","piccolo",""],["hell","luminoso, chiaro",""],["dunkel","buio, scuro",""],["neu","nuovo",""],["da","lì; ecco",""],["links","a sinistra",""],["rechts","a destra",""],["Komm rein!","entra!",""],["oh","oh!",""]
];
EX.l4=EX.l4.concat([
 {t:"dict",au:"Die Zimmer sind groß."},
 {t:"say",zh:"Di' «Questo è un letto, non è un divano.»",it:"Das ist ein Bett, kein Sofa."},
 {t:"type",q:"Completa: {Das ist} ＿ {Küche, das ist ein Bad.} (non una)",a:["keine"],full:"Das ist keine Küche, das ist ein Bad."}
]);
