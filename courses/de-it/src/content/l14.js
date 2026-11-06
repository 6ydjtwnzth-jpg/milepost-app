DLG.l14=[["A","Guten Tag! Was darf es sein?","Buongiorno! Che cosa desidera?"],["B","Ich hätte gern ein Kilo Tomaten.","Vorrei un chilo di pomodori."],["A","Die Tomaten hier sind sehr gut. Nehmen Sie sie?","Questi pomodori sono molto buoni. Li prende?"],["B","Ja, ich nehme sie. Haben Sie auch Erdbeeren?","Sì, li prendo. Ha anche le fragole?"],["A","Ja, eine Schale kostet vier Euro.","Sì, una vaschetta costa quattro euro."],["B","Gut, eine Schale, bitte. Und der Käse da? Wie viel kostet er?","Bene, una vaschetta, per favore. E quel formaggio? Quanto costa?"],["A","Zwei Euro pro hundert Gramm. Möchten Sie ihn probieren?","Due euro all'etto. Vuole assaggiarlo?"],["B","Mmm, lecker! Zweihundert Gramm, bitte. Das ist alles.","Mmm, buonissimo! Duecento grammi, per favore. È tutto."],["A","Das macht zehn Euro achtzig.","Sono dieci euro e ottanta."]];
EX.l14=[
 {q:"«Il formaggio? Lo prendo.»",o:["{Der Käse? Ich nehme ihn.}","{Der Käse? Ich nehme es.}","{Der Käse? Ich nehme sie.}"],e:"{der Käse} è maschile: {ihn}."},
 {q:"«La salsiccia? La prendo.»",o:["{Die Wurst? Ich nehme sie.}","{Die Wurst? Ich nehme ihn.}","{Die Wurst? Ich nehme ihr.}"],e:"{die Wurst} è femminile: {sie}."},
 {q:"«un chilo di pomodori»:",o:["{ein Kilo Tomaten}","{ein Kilo von Tomaten}","{ein Kilo der Tomaten}"],e:"Dopo una quantità niente «di»."},
 {q:"«due litri di latte»:",o:["{zwei Liter Milch}","{zwei Liters Milch}","{zwei Liter von Milch}"],e:"Le misure non prendono il plurale."},
 {q:"«Ti chiamo domani.»",o:["{Ich rufe dich morgen an.}","{Ich rufe morgen dich an.}","{Ich rufe dir morgen an.}"],e:"{anrufen} vuole l'accusativo: {dich}, subito dopo il verbo."},
 {q:"Al ristorante chiedi il menù:",o:["{Die Speisekarte, bitte.}","{Das Menü, bitte.}","{Die Rechnung, bitte.}"],e:"{die Speisekarte} = il menù; {das Menü} è un menù fisso."},
 {q:"Ascolta: quanti pomodori compra?",au:"Ich hätte gern ein Kilo Tomaten.",o:["un chilo","mezzo chilo","due chili"],e:"{ein Kilo}."},
 {q:"Ascolta: quanto costa il formaggio?",au:"Zwei Euro pro hundert Gramm.",o:["2 € all'etto","2 € al chilo","12 € all'etto"],e:"{zwei Euro pro hundert Gramm}."},
 {q:"Ascolta: quanto paga in tutto?",au:"Das macht zehn Euro achtzig.",o:["10,80 €","18,10 €","10,18 €"],e:"{zehn Euro achtzig}."},
 {t:"type",q:"Completa: {Das Brot? Ich nehme} ＿ {.}",a:["es"],full:"Das Brot? Ich nehme es."},
 {t:"type",q:"Completa: {Kennst du Paul? — Ja, ich kenne} ＿ {gut.}",a:["ihn"],full:"Kennst du Paul? — Ja, ich kenne ihn gut."},
 {t:"dict",au:"Zweihundert Gramm Käse, bitte."},
 {t:"say",zh:"Al mercato: chiedi mezzo chilo di fragole",it:"Ich hätte gern ein Pfund Erdbeeren."},
 {t:"say",zh:"Al ristorante: chiedi che cosa consiglia il cameriere",it:"Was empfehlen Sie?"}
];
VOC.l14=[
 ["mich","mi, me",""],["dich","ti, te",""],["ihn","lo, lui (accusativo)",""],["uns","ci, noi",""],["euch","vi, voi",""],["Was darf es sein?","che cosa desidera?",""],["probieren","assaggiare, provare",""],["kosten","costare",""],["Wie viel kostet…?","quanto costa…?",""],["lecker","buonissimo, gustoso",""],["schmecken","avere un buon sapore, piacere (cibo)",""],["empfehlen","consigliare",""],["brauchen","avere bisogno di",""],["kennen","conoscere",""],
 ["Markt","mercato","m:Märkte"],["Tomate","pomodoro","f:Tomaten"],["Erdbeere","fragola","f:Erdbeeren"],["Kartoffel","patata","f:Kartoffeln"],["Brot","pane","n:Brote"],["Wurst","salsiccia, salume","f:Würste"],["Fleisch","carne","n:-"],["Fisch","pesce","m:Fische"],["Ei","uovo","n:Eier"],["Obst","frutta","n:-"],["Gemüse","verdura","n:-"],["Salat","insalata","m:Salate"],["Schnitzel","cotoletta","n:Schnitzel"],
 ["Kilo","chilo","n:Kilo"],["Pfund","mezzo chilo","n:Pfund"],["Gramm","grammo","n:Gramm"],["pro","per, a (pro hundert Gramm = all'etto)",""],["Liter","litro","m:Liter"],["Flasche","bottiglia","f:Flaschen"],["Packung","pacco, confezione","f:Packungen"],["Dose","lattina, scatoletta","f:Dosen"],["Schale","vaschetta","f:Schalen"],
 ["Speisekarte","menù, carta","f:Speisekarten"],["Vorspeise","antipasto","f:Vorspeisen"],["Hauptgericht","piatto principale","n:Hauptgerichte"],["Nachtisch","dolce, dessert","m:Nachtische"]
];
EX.l14=EX.l14.concat([
 {t:"dict",au:"Die Speisekarte, bitte."},
 {t:"say",zh:"Il cameriere chiede se ti piace: rispondi «Sì, buonissimo!»",it:"Ja, sehr lecker!"},
 {t:"type",q:"Completa: {Die Erdbeeren sind lecker. Ich nehme} ＿ {.}",a:["sie"],full:"Die Erdbeeren sind lecker. Ich nehme sie."}
]);
