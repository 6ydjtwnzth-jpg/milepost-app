DLG.l9=[["A","Excusez-moi, je fais un sondage. Je peux vous poser quelques questions ?","Mi scusi, sto facendo un sondaggio. Posso farle qualche domanda?"],["B","Oui, bien sûr.","Sì, certo."],["A","Où habitez-vous ?","Dove abita?"],["B","J'habite à Nice, mais je suis italien.","Abito a Nizza, ma sono italiano."],["A","Ah bon ? Et pourquoi est-ce que vous habitez en France ?","Ah sì? E perché abita in Francia?"],["B","Parce que ma femme est française !","Perché mia moglie è francese!"],["A","Et qu'est-ce que vous faites le week-end ?","E che cosa fa nel fine settimana?"],["B","Je vais à la plage avec mes enfants.","Vado in spiaggia con i miei figli."]];
EX.l9=[
 {q:"La domanda più neutra per «Parli inglese?»:",o:["{Est-ce que tu parles anglais ?}","{Que tu parles anglais ?}","{Parles tu anglais ?}"],e:"{est-ce que} + frase normale."},
 {q:"«Perché…?» — risposta:",o:["{Parce que…}","{Pourquoi…}","{Pour que…}"],e:"Si chiede con {pourquoi}, si risponde con {parce que}."},
 {q:"«Che cosa fai?»",o:["{Qu'est-ce que tu fais ?}","{Que cosa tu fais ?}","{Quoi est-ce tu fais ?}"],e:"{qu'est-ce que} = che cosa."},
 {q:"Scegli: ＿ {ville ?} (quale città)",o:["{Quelle}","{Quel}","{Quels}"],e:"{ville} è femminile: {quelle}."},
 {q:"Ascolta: è una domanda?",au:"Tu viens ?",o:["sì: la voce sale","no: la voce scende"],e:"Nelle domande sì / no la voce sale alla fine."},
 {q:"Forma formale (inversione) di {Vous habitez où ?}:",o:["{Où habitez-vous ?}","{Où vous habitez-vous ?}","{Où habitez vous-?}"],e:"Verbo, trattino, soggetto."},
 {t:"type",q:"Completa: ＿ {coûte ce livre ?} (quanto)",a:["Combien"],full:"Combien coûte ce livre ?"},
 {t:"dict",au:"Où est-ce que tu habites ?"},
 {t:"say",zh:"Chiedi a un collega, in modo neutro, dove abita e perché studia il francese",it:"Où est-ce que tu habites ? Pourquoi est-ce que tu apprends le français ?"}
];
VOC.l9=[
 ["où","dove",""],["quand","quando",""],["pourquoi","perché (domanda)",""],["parce que","perché (risposta)",""],["qui","chi",""],["quoi","che cosa",""],["qu'est-ce que","che cosa",""],["est-ce que","(introduce una domanda)",""],
 ["quel","quale, che",""],["quelle","quale, che (f.)",""],["question","domanda","f"],["réponse","risposta","f"],["sondage","sondaggio","m"],["adresse","indirizzo","f"],
 ["week-end","fine settimana","m"],["plage","spiaggia","f"],["soir","sera","m"],["ce soir","stasera",""],["venir","venire",""],["poser une question","fare una domanda",""],
 ["quelques","qualche, alcuni",""],["voyager","viaggiare",""],["apprendre","imparare",""],["ah bon","ah sì? davvero?",""],["coûter","costare",""]
];
