DLG.l16=[["A","Marco, wie war der Urlaub?","Marco, com'è andata la vacanza?"],["B","Super! Letzten Sommer sind wir nach Wien gefahren.","Benissimo! L'estate scorsa siamo andati a Vienna."],["A","Mit dem Auto?","In macchina?"],["B","Nein, mit dem Zug. Wir sind am dritten August losgefahren und am Abend angekommen.","No, in treno. Siamo partiti il 3 agosto e siamo arrivati la sera."],["A","Und was habt ihr gesehen?","E che cosa avete visto?"],["B","Wir haben viel gesehen: den Stephansdom, das Schloss Schönbrunn, viele Museen.","Abbiamo visto molto: il duomo di Santo Stefano, il castello di Schönbrunn, tanti musei."],["A","Wie lange seid ihr geblieben?","Quanto tempo siete rimasti?"],["B","Eine Woche. Leider hat es oft geregnet. Aber wir haben sehr gut gegessen!","Una settimana. Purtroppo è piovuto spesso. Ma abbiamo mangiato benissimo!"],["A","Und seid ihr auch in die Oper gegangen?","E siete andati anche all'opera?"],["B","Ja! Das war fantastisch.","Sì! È stato fantastico."]];
EX.l16=[
 {q:"«Siamo andati a Vienna.»",o:["{Wir sind nach Wien gefahren.}","{Wir haben nach Wien gefahren.}","{Wir sind nach Wien gefahrt.}"],e:"Movimento: {sein}; participio forte {gefahren}."},
 {q:"«Sono rimasto a casa.»",o:["{Ich bin zu Hause geblieben.}","{Ich habe zu Hause geblieben.}","{Ich bin zu Hause gebleibt.}"],e:"{bleiben} vuole {sein}: {geblieben}."},
 {q:"«Ho mangiato molto.»",o:["{Ich habe viel gegessen.}","{Ich bin viel gegessen.}","{Ich habe viel geesst.}"],e:"{essen} vuole {haben}: {gegessen}."},
 {q:"«il 3 agosto»:",o:["{am dritten August}","{am drei August}","{im dritten August}"],e:"{am} + ordinale in {-en}."},
 {q:"«a luglio»:",o:["{im Juli}","{am Juli}","{in Juli}"],e:"Mesi e stagioni: {im}."},
 {q:"Il participio di {ankommen}:",o:["{angekommen}","{geankommen}","{ankommt}"],e:"Separabile: {an} + {ge} + {kommen}."},
 {q:"Ascolta: come sono andati a Vienna?",au:"Nein, mit dem Zug.",o:["in treno","in macchina","in aereo"],e:"{mit dem Zug}."},
 {q:"Ascolta: quanto tempo sono rimasti?",au:"Eine Woche. Leider hat es oft geregnet.",o:["una settimana","due settimane","un weekend"],e:"{eine Woche}."},
 {q:"Ascolta: quando sono partiti?",au:"Wir sind am dritten August losgefahren.",o:["il 3 agosto","il 13 agosto","il 3 aprile"],e:"{am dritten August}."},
 {t:"type",q:"Completa: {Wann} ＿ {du angekommen?} (sein)",a:["bist"],full:"Wann bist du angekommen?"},
 {t:"type",q:"Completa: {Wir sind nach Berlin} ＿ {.} (fliegen)",a:["geflogen"],full:"Wir sind nach Berlin geflogen."},
 {t:"dict",au:"Letzten Sommer sind wir nach Wien gefahren."},
 {t:"say",zh:"Racconta un viaggio: dove, come, quanto tempo",it:"Im Juni bin ich nach Berlin geflogen. Ich bin eine Woche geblieben."},
 {t:"say",zh:"Di' la data del tuo compleanno",it:"Mein Geburtstag ist am vierzehnten Februar."}
];
VOC.l16=[
 ["Urlaub","vacanza, ferie","m:Urlaube"],["Reise","viaggio","f:Reisen"],["fliegen","volare, andare in aereo",""],["ankommen","arrivare",""],["losfahren","partire",""],["bleiben","restare",""],["passieren","succedere",""],["gefahren","andato (fahren)",""],["geflogen","andato in aereo (fliegen)",""],["gegangen","andato (gehen)",""],["gekommen","venuto (kommen)",""],["angekommen","arrivato (ankommen)",""],["geblieben","rimasto (bleiben)",""],["gewesen","stato (sein)",""],["aufgestanden","alzato (aufstehen)",""],["geregnet","piovuto (regnen)",""],
 ["Flugzeug","aereo","n:Flugzeuge"],["Schloss","castello","n:Schlösser"],["Oper","opera; teatro dell'opera","f:Opern"],["Meer","mare","n:Meere"],["See","lago","m:Seen"],["Berg","montagna","m:Berge"],["Geburtstag","compleanno","m:Geburtstage"],["fantastisch","fantastico",""],["wie lange","quanto tempo",""],["letzten Sommer","l'estate scorsa",""],
 ["Januar","gennaio","m:-"],["Februar","febbraio","m:-"],["März","marzo","m:-"],["April","aprile","m:-"],["Mai","maggio","m:-"],["Juni","giugno","m:-"],["Juli","luglio","m:-"],["August","agosto","m:-"],["September","settembre","m:-"],["Oktober","ottobre","m:-"],["November","novembre","m:-"],["Dezember","dicembre","m:-"],["Frühling","primavera","m:-"],["Sommer","estate","m:-"],["Herbst","autunno","m:-"],["Winter","inverno","m:-"],["kalt", "freddo", ""],["geboren", "nato", ""],
 ["Flughafen", "aeroporto", "m:Flughäfen"]
];
EX.l16=EX.l16.concat([
 {t:"dict",au:"Wir sind eine Woche in Wien geblieben."},
 {t:"say",zh:"Di' in che anno sei nato",it:"Ich bin neunzehnhundertneunzig geboren."},
 {t:"type",q:"Completa: {Seid ihr auch in die Oper} ＿ {?} (gehen)",a:["gegangen"],full:"Seid ihr auch in die Oper gegangen?"}
]);
