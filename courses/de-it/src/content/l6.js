DLG.l6=[["A","Entschuldigung, wie spät ist es?","Mi scusi, che ore sono?"],["B","Es ist Viertel nach fünf.","Sono le cinque e un quarto."],["A","Danke. Bis wann ist die Bank heute offen?","Grazie. Fino a che ora è aperta la banca oggi?"],["B","Bis halb sechs. Am Samstag ist sie zu.","Fino alle cinque e mezza. Il sabato è chiusa."],["A","Und am Montag?","E lunedì?"],["B","Von Montag bis Freitag ist sie von neun bis siebzehn Uhr offen.","Dal lunedì al venerdì è aperta dalle nove alle diciassette."],["A","Halb sechs… Dann habe ich noch fünfzehn Minuten!","Le cinque e mezza… Allora ho ancora quindici minuti!"],["B","Viel Glück!","Buona fortuna!"]];
EX.l6=[
 {q:"«Sono le due e mezza.»",o:["{Es ist halb drei.}","{Es ist halb zwei.}","{Es ist zwei und halb.}"],e:"{halb drei} = mezz'ora prima delle tre: 2:30."},
 {q:"«Sono le cinque e un quarto.»",o:["{Es ist Viertel nach fünf.}","{Es ist Viertel vor fünf.}","{Es ist fünf und Viertel.}"],e:"{nach} = dopo; {vor} = prima."},
 {q:"«alle otto»:",o:["{um acht Uhr}","{am acht Uhr}","{in acht Uhr}"],e:"Con l'ora: {um}."},
 {q:"«lunedì» (quando?):",o:["{am Montag}","{um Montag}","{im Montag}"],e:"Con i giorni: {am}."},
 {q:"«il sabato» (tutti i sabati):",o:["{samstags}","{Samstags}","{am Samstags}"],e:"Abitudine: {-s} e minuscola."},
 {q:"Che ore sono? {Viertel vor neun}",o:["8:45","9:15","9:45"],e:"Un quarto prima delle nove."},
 {q:"Ascolta: che ore sono?",au:"Es ist Viertel nach fünf.",o:["5:15","4:45","5:30"],e:"{Viertel nach fünf} = 5:15."},
 {q:"Ascolta: quando è chiusa la banca?",au:"Am Samstag ist sie zu.",o:["il sabato","la domenica","il lunedì"],e:"{am Samstag} = sabato; {zu} = chiuso."},
 {q:"Ascolta: a che ora parte il treno?",au:"Der Zug fährt um siebzehn Uhr zehn.",o:["17:10","7:10","17:50"],e:"{siebzehn Uhr zehn}."},
 {t:"type",q:"Completa: {Der Kurs beginnt} ＿ {acht Uhr.}",a:["um"],full:"Der Kurs beginnt um acht Uhr."},
 {t:"type",q:"Completa: {Ich arbeite} ＿ {neun bis siebzehn Uhr.} (da)",a:["von"],full:"Ich arbeite von neun bis siebzehn Uhr."},
 {t:"dict",au:"Wie spät ist es?"},
 {t:"say",zh:"Di' che ore sono adesso: le 9:30",it:"Es ist halb zehn."},
 {t:"say",zh:"Chiedi fino a che ora è aperto il supermercato",it:"Bis wann ist der Supermarkt offen?"}
];
VOC.l6=[
 ["Wie spät ist es?","che ore sono?",""],["Wie viel Uhr ist es?","che ore sono?",""],["es ist","è; sono (le ore)",""],["Uhr","ora; orologio","f:Uhren"],["Viertel","quarto","n:Viertel"],["halb","mezzo; halb drei = 2:30",""],["nach","dopo; a, verso (città, paesi: nach Wien)",""],["vor","prima, meno; davanti a",""],["um","alle (+ ora)",""],["am","il, di (+ giorno)",""],["von… bis","da… a",""],["bis","fino a",""],["wann","quando",""],["heute","oggi",""],["morgen","domani",""],["dann","allora, poi",""],["noch","ancora",""],["Minute","minuto","f:Minuten"],["Stunde","ora (durata)","f:Stunden"],["Viel Glück!","buona fortuna!",""],
 ["Montag","lunedì","m:Montage"],["Dienstag","martedì","m:Dienstage"],["Mittwoch","mercoledì","m:Mittwoche"],["Donnerstag","giovedì","m:Donnerstage"],["Freitag","venerdì","m:Freitage"],["Samstag","sabato","m:Samstage"],["Sonntag","domenica","m:Sonntage"],["montags","il lunedì (ogni lunedì)",""],["Wochenende","fine settimana","n:Wochenenden"],["Tag","giorno","m:Tage"],["Woche","settimana","f:Wochen"],
 ["Bank","banca","f:Banken"],["Supermarkt","supermercato","m:Supermärkte"],["Geschäft","negozio","n:Geschäfte"],["Kurs","corso","m:Kurse"],["Zug","treno","m:Züge"],["offen","aperto",""],["geschlossen","chiuso",""],["zu","chiuso; a, da (preposizione)",""],["auf","aperto; su, sopra (preposizione)",""],["beginnen","cominciare",""]
];
EX.l6=EX.l6.concat([
 {t:"dict",au:"Am Samstag ist die Bank zu."},
 {t:"say",zh:"Di' a che ora cominci a lavorare il lunedì",it:"Am Montag beginne ich um acht Uhr."},
 {t:"type",q:"Completa: {Es ist} ＿ {vor neun.} (un quarto)",a:["Viertel"],full:"Es ist Viertel vor neun."}
]);
