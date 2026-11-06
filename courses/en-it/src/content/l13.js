DLG.l13=[["A","Excuse me, is there a chemist's near here?","Mi scusi, c'è una farmacia qui vicino?"],["B","Yes, there's one in Station Road.","Sì, ce n'è una in Station Road."],["A","How do I get there?","Come ci arrivo?"],["B","Go straight on and take the second street on the left.","Vada dritto e prenda la seconda strada a sinistra."],["A","The second on the left…","La seconda a sinistra…"],["B","Then turn right. It's next to the bank, opposite the church.","Poi giri a destra. È accanto alla banca, di fronte alla chiesa."],["A","Is it far?","È lontano?"],["B","No, it's about five minutes on foot.","No, sono circa cinque minuti a piedi."],["A","Thank you very much!","Grazie mille!"],["B","No problem.","Di niente."]];
EX.l13=[
 {q:"«La farmacia è di fronte alla chiesa» (dall'altra parte della strada):",o:["{The chemist's is opposite the church.}","{The chemist's is in front of the church.}","{The chemist's is front the church.}"],e:"Dall'altra parte della strada: {opposite}."},
 {q:"«Giri a sinistra.»",o:["{Turn left.}","{Turn on the left.}","{You turn at left.}"],e:"{turn left}, {turn right}: senza preposizione."},
 {q:"«all'angolo» (della strada):",o:["{on the corner}","{in the corner}","{at the angle}"],e:"L'angolo della strada: {on the corner}."},
 {q:"«Non attraversare qui!»",o:["{Don't cross here!}","{No cross here!}","{Not cross here!}"],e:"Imperativo negativo: {Don't} + verbo."},
 {q:"«Mi scusi, come arrivo al museo?»",o:["{Excuse me, how do I get to the museum?}","{Excuse me, how I arrive at the museum?}","{Sorry, where is to the museum?}"],e:"{How do I get to…?} è la domanda più naturale."},
 {q:"«la terza strada a destra»:",o:["{the third street on the right}","{the three street on the right}","{the third street at right}"],e:"Ordinale {third} e {on the right}."},
 {q:"Ascolta: dov'è l'albergo?",au:"The hotel is opposite the station.",o:["di fronte alla stazione","accanto alla stazione","dietro la stazione"],e:"{opposite} = di fronte, dall'altra parte."},
 {q:"Ascolta: che cosa deve fare?",au:"Go straight on and turn left at the bridge.",o:["dritto, poi a sinistra al ponte","a sinistra, poi dritto","dritto, poi a destra al ponte"],e:"{straight on} = dritto; {turn left at the bridge}."},
 {q:"Ascolta: quanto è lontano?",au:"It's about ten minutes on foot.",o:["dieci minuti a piedi","dieci minuti in autobus","due minuti a piedi"],e:"{on foot} = a piedi."},
 {t:"type",q:"Completa: {The bank is} ＿ {the café and the post office.} (tra)",a:["between"],full:"The bank is between the café and the post office."},
 {t:"type",q:"Completa: {Take the} ＿ {street on the left.} (1ª)",a:["first"],full:"Take the first street on the left."},
 {t:"dict",au:"Excuse me, how do I get to the station?"},
 {t:"say",zh:"Spiega la strada: «Vada dritto, prenda la prima a destra. È accanto al supermercato.»",it:"Go straight on and take the first street on the right. It's next to the supermarket."},
 {t:"say",zh:"Chiedi a un passante se c'è un bancomat qui vicino",it:"Excuse me, is there a cash machine near here?"}
];
VOC.l13=[
 ["town","città (piccola), centro",""],["street","strada, via",""],["road","strada",""],["square","piazza",""],["bridge","ponte",""],["corner","angolo",""],["church","chiesa",""],["chemist's","farmacia",""],["post office","ufficio postale",""],["supermarket","supermercato",""],
 ["cash machine","bancomat",""],["car park","parcheggio",""],["underground","metropolitana",""],["next to","accanto a",""],["opposite","di fronte a (dall'altra parte)",""],["in front of","davanti a",""],["behind","dietro",""],["between","tra",""],
 ["left","sinistra",""],["right","destra",""],["on the left","a sinistra",""],["on the right","a destra",""],["straight on","dritto",""],["turn","girare",""],["cross","attraversare",""],["get to","arrivare a",""],
 ["far","lontano",""],["minute","minuto",""],["on foot","a piedi",""],["about","circa",""],["then","poi",""],["first","primo",""],["second","secondo",""],["third","terzo",""],["wait","aspettare",""],["push","spingere",""],["pull","tirare",""],["no problem","di niente, nessun problema",""],["café","bar, caffetteria",""],["gap","spazio, varco",""],["thank you very much","grazie mille",""]
];
EX.l13=EX.l13.concat([
 {t:"dict",au:"There's a café on the corner."},
 {t:"say",zh:"Chiedi se il posto è lontano e se ci puoi andare a piedi",it:"Is it far? Can I walk there?"},
 {t:"type",q:"Completa: {The car park is} ＿ {the museum.} (dietro)",a:["behind"],full:"The car park is behind the museum."}
]);
