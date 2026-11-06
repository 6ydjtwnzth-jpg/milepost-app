DLG.l19=[["A","Nächste Woche hat Mama Geburtstag. Was schenken wir ihr?","La settimana prossima è il compleanno della mamma. Che cosa le regaliamo?"],["B","Schenken wir ihr ein Buch?","Le regaliamo un libro?"],["A","Nein, letztes Jahr haben wir ihr schon ein Buch geschenkt. Vielleicht eine Tasche?","No, l'anno scorso le abbiamo già regalato un libro. Magari una borsa?"],["B","Eine Tasche ist teurer als ein Buch.","Una borsa è più cara di un libro."],["A","Ja, aber sie ist praktischer. Und Taschen gefallen ihr sehr.","Sì, ma è più pratica. E le borse le piacciono molto."],["B","Okay. Schau mal: Die große ist schöner als die kleine.","Va bene. Guarda: quella grande è più bella di quella piccola."],["A","Aber die kleine ist genauso schön und billiger.","Ma quella piccola è bella uguale ed è più economica."],["B","Stimmt. Das ist die beste!","Vero. È la migliore!"],["A","Und wir schreiben ihr eine Karte: „Für die beste Mama der Welt“.","E le scriviamo un biglietto: «Per la mamma migliore del mondo»."]];
EX.l19=[
 {q:"«Le regalo un libro.» (a lei)",o:["{Ich schenke ihr ein Buch.}","{Ich schenke sie ein Buch.}","{Ich schenke ihm ein Buch.}"],e:"«a lei» = dativo {ihr}; {ihm} = a lui."},
 {q:"«Ti aiuto.»",o:["{Ich helfe dir.}","{Ich helfe dich.}","{Ich helfe du.}"],e:"{helfen} vuole il dativo: {dir}."},
 {q:"«La borsa mi piace.»",o:["{Die Tasche gefällt mir.}","{Ich gefalle die Tasche.}","{Die Tasche gefällt mich.}"],e:"Come «piacere»: la cosa è il soggetto, la persona al dativo."},
 {q:"«Berlino è più grande di Monaco.»",o:["{Berlin ist größer als München.}","{Berlin ist größer wie München.}","{Berlin ist mehr groß als München.}"],e:"{groß} → {größer}; il confronto con {als}."},
 {q:"«Questo caffè è migliore.»",o:["{Dieser Kaffee ist besser.}","{Dieser Kaffee ist guter.}","{Dieser Kaffee ist mehr gut.}"],e:"{gut} → {besser} → {am besten}."},
 {q:"«Mio fratello è più vecchio di me.»",o:["{Mein Bruder ist älter als ich.}","{Mein Bruder ist alter als ich.}","{Mein Bruder ist älter als mich.}"],e:"{alt} → {älter}; dopo {als} il nominativo: {ich}."},
 {q:"Ascolta: che cosa regalano alla mamma?",au:"Vielleicht eine Tasche?",o:["una borsa","un libro","dei fiori"],e:"{eine Tasche}."},
 {q:"Ascolta: quale borsa costa meno?",au:"Aber die kleine ist genauso schön und billiger.",o:["quella piccola","quella grande","costano uguale"],e:"{die kleine… billiger}."},
 {q:"Ascolta: che cosa scrivono sul biglietto?",au:"Für die beste Mama der Welt.",o:["Per la mamma migliore del mondo","Buon compleanno, mamma","Per la mamma più bella"],e:"{die beste Mama der Welt}."},
 {t:"type",q:"Completa: {Das Hotel ist} ＿ {als das andere.} (billig, comparativo)",a:["billiger"],full:"Das Hotel ist billiger als das andere."},
 {t:"type",q:"Completa: {Was schenkst du} ＿ {Vater?} (a tuo: deinem)",a:["deinem"],full:"Was schenkst du deinem Vater?"},
 {t:"dict",au:"Die Tasche gefällt mir sehr."},
 {t:"say",zh:"Confronta la tua città con Berlino",it:"Meine Stadt ist kleiner als Berlin, aber sie ist sehr schön."},
 {t:"say",zh:"Di' che cosa regali a un amico per il compleanno",it:"Ich schenke ihm ein Buch."}
];
VOC.l19=[
 ["schenken","regalare",""],["Geschenk","regalo","n:Geschenke"],["gefallen","piacere (all'aspetto)",""],["gehören","appartenere, essere di",""],["passen","andare bene, stare bene",""],["erklären","spiegare",""],["mir","a me, mi",""],["dir","a te, ti",""],["ihm","a lui, gli",""],["ihnen","a loro",""],["Ihnen","a Lei, Le",""],
 ["so… wie","tanto… quanto",""],["genauso","altrettanto, uguale",""],["besser","migliore, meglio",""],["mehr","più",""],["am meisten","più di tutti",""],["beste","il migliore, la migliore",""],["älter","più vecchio, più grande (età)",""],["jünger","più giovane",""],["größer","più grande; più alto",""],
 ["teuer","caro",""],["billig","economico",""],["praktisch","pratico",""],["jung","giovane",""],["hoch","alto",""],["stimmt","è vero, giusto",""],["Schau mal!","guarda!",""],["nächste Woche","la settimana prossima",""],
 ["Tasche","borsa","f:Taschen"],["Karte","biglietto; cartolina","f:Karten"],["Blume","fiore","f:Blumen"],["Parfüm","profumo","n:Parfüms"],["Welt","mondo","f:Welten"],["Salz","sale","n:-"]
];
EX.l19=EX.l19.concat([
 {t:"dict",au:"Mein Bruder ist älter als ich."},
 {t:"say",zh:"Di': «Questo libro è mio.» (con gehören)",it:"Das Buch gehört mir."},
 {t:"type",q:"Completa: {Hamburg ist} ＿ {schön wie Berlin.} (tanto)",a:["so"],full:"Hamburg ist so schön wie Berlin."}
]);
