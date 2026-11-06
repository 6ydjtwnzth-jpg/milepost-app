DLG.l8=[["A","Hallo! Was möchten Sie?","Salve! Che cosa desidera?"],["B","Ich hätte gern einen Cappuccino und ein Stück Kuchen.","Vorrei un cappuccino e una fetta di torta."],["A","Welchen Kuchen möchten Sie? Wir haben Apfelkuchen und Käsekuchen.","Quale torta desidera? Abbiamo torta di mele e torta al formaggio."],["B","Den Apfelkuchen, bitte. Und für meine Freundin einen Tee.","La torta di mele, per favore. E per la mia amica un tè."],["A","Gern. Sonst noch etwas?","Volentieri. Altro?"],["B","Nein, danke. Das ist alles.","No, grazie. È tutto."],["B","Wir möchten zahlen, bitte.","Vorremmo pagare, per favore."],["A","Zusammen oder getrennt?","Insieme o separati?"],["B","Zusammen, bitte.","Insieme, per favore."],["A","Das macht elf Euro vierzig.","Sono undici euro e quaranta."],["B","Zwölf, bitte. Stimmt so.","Dodici, per favore. Va bene così."]];
EX.l8=[
 {q:"«Vorrei un caffè.»",o:["{Ich möchte einen Kaffee.}","{Ich möchte ein Kaffee.}","{Ich möchte einer Kaffee.}"],e:"{Kaffee} è maschile: all'accusativo {einen}."},
 {q:"«Prendo la torta di mele.»",o:["{Ich nehme den Apfelkuchen.}","{Ich nehme der Apfelkuchen.}","{Ich nehme die Apfelkuchen.}"],e:"Maschile all'accusativo: {den}."},
 {q:"«Vorrei un'acqua.»",o:["{Ich möchte ein Wasser.}","{Ich möchte einen Wasser.}","{Ich möchte eine Wasser.}"],e:"{das Wasser} è neutro: all'accusativo resta {ein}."},
 {q:"Il modo più gentile per ordinare:",o:["{Ich hätte gern einen Tee.}","{Ich will einen Tee.}","{Ich habe gern einen Tee.}"],e:"{Ich hätte gern…} = vorrei."},
 {q:"Il cameriere chiede {Zusammen oder getrennt?}. Che cosa vuole sapere?",o:["se pagate insieme o separati","se volete sedervi insieme","se volete il caffè con il latte"],e:"Un conto o conti separati."},
 {q:"{du} + {möchten}:",o:["{du möchtest}","{du möchst}","{du möchte}"],e:"{du möchtest}."},
 {q:"Ascolta: che cosa ordina?",au:"Ich hätte gern einen Cappuccino und ein Stück Kuchen.",o:["un cappuccino e una fetta di torta","un tè e una torta","un caffè e un'acqua"],e:"{einen Cappuccino und ein Stück Kuchen}."},
 {q:"Ascolta: quanto costa?",au:"Das macht elf Euro vierzig.",o:["11,40 €","14,10 €","11,14 €"],e:"{elf Euro vierzig}."},
 {q:"Ascolta: che torta prende?",au:"Den Apfelkuchen, bitte.",o:["di mele","al formaggio","al cioccolato"],e:"{Apfelkuchen} = torta di mele."},
 {t:"type",q:"Completa: {Ich trinke} ＿ {Tee.} (un)",a:["einen"],full:"Ich trinke einen Tee."},
 {t:"type",q:"Completa: {Was} ＿ {Sie?} (möchten)",a:["möchten"],full:"Was möchten Sie?"},
 {t:"dict",au:"Zahlen, bitte!"},
 {t:"say",zh:"Ordina un tè e una fetta di torta al formaggio",it:"Ich hätte gern einen Tee und ein Stück Käsekuchen."},
 {t:"say",zh:"Il conto è 9,60 €: paga dieci euro e lascia il resto",it:"Zehn, bitte. Stimmt so."}
];
VOC.l8=[
 ["möchten","vorrei (volere, cortese)",""],["ich möchte","vorrei",""],["ich hätte gern","vorrei (molto gentile)",""],["nehmen","prendere",""],["trinken","bere",""],["essen","mangiare",""],["zahlen","pagare",""],["Zahlen, bitte!","il conto, per favore!",""],["zusammen","insieme",""],["getrennt","separato",""],["Das macht…","sono… (il totale)",""],["Stimmt so.","va bene così, tenga il resto",""],["Sonst noch etwas?","altro?",""],["Das ist alles.","è tutto",""],["gern","volentieri; con un verbo: mi piace (ich lese gern)",""],["für","per",""],["welcher","quale",""],["den","il (accusativo maschile)",""],
 ["Café","caffè (locale), bar","n:Cafés"],["Cappuccino","cappuccino","m:Cappuccinos"],["Kuchen","torta, dolce","m:Kuchen"],["Stück","pezzo; fetta","n:Stücke"],["Apfel","mela","m:Äpfel"],["Apfelkuchen","torta di mele","m:Apfelkuchen"],["Käse","formaggio","m:-"],["Käsekuchen","torta al formaggio","m:Käsekuchen"],["Saft","succo","m:Säfte"],["Apfelsaft","succo di mela","m:Apfelsäfte"],["Cola","Coca-Cola","f:Colas"],["Brötchen","panino","n:Brötchen"],["Zucker","zucchero","m:-"],["Glas","bicchiere","n:Gläser"],["Tasse","tazza","f:Tassen"],
 ["Euro","euro","m:Euro"],["Cent","centesimo","m:Cent"],["Rechnung","conto, fattura","f:Rechnungen"],["Trinkgeld","mancia","n:Trinkgelder"]
];
EX.l8=EX.l8.concat([
 {t:"dict",au:"Ich möchte einen Tee und eine Cola."},
 {t:"say",zh:"Chiedi alla tua amica che cosa vuole bere",it:"Was möchtest du trinken?"},
 {t:"type",q:"Completa: {Wir nehmen} ＿ {Kuchen.} (nessun)",a:["keinen"],full:"Wir nehmen keinen Kuchen."}
]);
