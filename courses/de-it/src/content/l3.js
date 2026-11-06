DLG.l3=[["A","Guten Tag, Frau Weber! Wie geht es Ihnen?","Buongiorno, signora Weber! Come sta?"],["B","Danke, gut. Und wie geht's dir, Tom?","Bene, grazie. E tu come stai, Tom?"],["A","Es geht. Ich bin ein bisschen müde.","Così così. Sono un po' stanco."],["B","Und dein Bruder? Wie alt ist er jetzt?","E tuo fratello? Quanti anni ha adesso?"],["A","Er ist zwölf.","Dodici."],["B","Zwölf! Und du?","Dodici! E tu?"],["A","Ich bin neunzehn.","Io diciannove."],["B","Toll! Tschüss, Tom!","Bello! Ciao, Tom!"],["A","Auf Wiedersehen, Frau Weber!","Arrivederci, signora Weber!"]];
EX.l3=[
 {q:"Parli con un signore anziano che non conosci. Come gli chiedi come sta?",o:["{Wie geht es Ihnen?}","{Wie geht es dir?}","{Wie geht's, Herr?}"],e:"Con {Sie}: {Wie geht es Ihnen?}"},
 {q:"«Ho vent'anni.»",o:["{Ich bin zwanzig.}","{Ich habe zwanzig Jahre.}","{Ich bin zwanzig alt.}"],e:"L'età si dice con {sein}: {Ich bin zwanzig (Jahre alt)}."},
 {q:"«Quanti anni hai?»",o:["{Wie alt bist du?}","{Wie viel Jahre hast du?}","{Wie alt hast du?}"],e:"{Wie alt bist du?}"},
 {q:"Come si dice 21?",o:["{einundzwanzig}","{zwanzigeins}","{zwanzigundeins}"],e:"L'unità prima: «uno-e-venti»."},
 {q:"Come si dice 30?",o:["{dreißig}","{dreizig}","{dreizehn}"],e:"{dreißig}, con la {ß}. {dreizehn} = 13."},
 {q:"«Di dov'è, signora Weber?»",o:["{Woher kommen Sie, Frau Weber?}","{Woher kommst du, Frau Weber?}","{Woher kommen sie, Frau Weber?}"],e:"{Sie} con la maiuscola e il verbo come «loro»: {kommen}."},
 {q:"Ascolta: quanti anni ha?",au:"Er ist zwölf.",o:["12","20","2"],e:"{zwölf} = 12."},
 {q:"Ascolta: come sta?",au:"Es geht. Ich bin ein bisschen müde.",o:["così così, un po' stanco","benissimo","male, è malato"],e:"{es geht} = così così; {müde} = stanco."},
 {q:"Ascolta: che numero senti?",au:"siebenundvierzig",o:["47","74","57"],e:"{sieben} + {vierzig}: 47."},
 {t:"type",q:"Completa: {Wie} ＿ {es dir?} (gehen)",a:["geht"],full:"Wie geht es dir?"},
 {t:"type",q:"Completa: {Wie alt} ＿ {Sie?} (sein)",a:["sind"],full:"Wie alt sind Sie?"},
 {t:"dict",au:"Wie geht es Ihnen?"},
 {t:"say",zh:"Di' quanti anni hai",it:"Ich bin dreißig Jahre alt."},
 {t:"say",zh:"Saluta la signora Klein e chiedile come sta",it:"Guten Tag, Frau Klein! Wie geht es Ihnen?"}
];
VOC.l3=[
 ["Sie","Lei (cortesia); loro (cortesia)",""],["Frau","signora; donna; moglie","f:Frauen"],["Herr","signore","m:Herren"],["Wie geht's?","come va?",""],["Wie geht es Ihnen?","come sta?",""],["Wie geht es dir?","come stai?",""],["gut","bene; buono",""],["sehr gut","benissimo",""],["es geht","così così",""],["nicht so gut","non tanto bene",""],["schlecht","male; cattivo",""],["müde","stanco",""],["ein bisschen","un po'",""],["alt","vecchio",""],["Wie alt bist du?","quanti anni hai?",""],["Jahr","anno","n:Jahre"],["Bruder","fratello","m:Brüder"],["toll","bello, fantastico",""],["Nummer","numero","f:Nummern"],
 ["null","zero",""],["eins","uno",""],["zwei","due",""],["vier","quattro",""],["fünf","cinque",""],["sechs","sei",""],["sieben","sette",""],["acht","otto",""],["neun","nove",""],["zehn","dieci",""],["elf","undici",""],["zwölf","dodici",""],["dreizehn","tredici",""],["sechzehn","sedici",""],["siebzehn","diciassette",""],["neunzehn","diciannove",""],["zwanzig","venti",""],["einundzwanzig","ventuno",""],["dreißig","trenta",""],["vierzig","quaranta",""],["fünfzig","cinquanta",""],["hundert","cento",""],["dein", "tuo", ""],
 ["Alter", "età", "n:-"],
 ["Adresse", "indirizzo", "f:Adressen"],
 ["Postleitzahl", "codice postale (CAP)", "f:Postleitzahlen"]
];
EX.l3=EX.l3.concat([
 {t:"dict",au:"Ich bin neunzehn."},
 {t:"say",zh:"Rispondi «Benissimo, grazie! E Lei?»",it:"Sehr gut, danke! Und Ihnen?"},
 {t:"type",q:"Completa: {Wie alt} ＿ {du?} (sein)",a:["bist"],full:"Wie alt bist du?"}
]);
