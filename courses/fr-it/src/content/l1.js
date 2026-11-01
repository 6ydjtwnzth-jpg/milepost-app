DLG.l1=[["A","Bonjour !","Buongiorno!"],["B","Bonjour !","Buongiorno!"],["A","Un café ?","Un caffè?"],["B","Oui, merci !","Sì, grazie!"],["A","De rien !","Prego!"],["B","Merci, au revoir !","Grazie, arrivederci!"]];
EX.l1=[
 {q:"Ascolta: quale parola senti?",au:"tu",o:["{tu}","{tout}"],e:"{tu} ha la u francese (labbra a fischio, lingua in avanti); {tout} ha la u italiana."},
 {q:"Ascolta: quale parola senti?",au:"la roue",o:["{la roue}","{la rue}"],e:"{roue} (ruota) si scrive con ou: la nostra u. {rue} (strada) ha la u francese."},
 {q:"Ascolta: quale parola senti?",au:"vous",o:["{vous}","{vu}"],e:"{vous} si pronuncia come la nostra «vu»: la s finale non si sente."},
 {q:"Come si pronuncia {salut}?",o:["«salü», senza la t","«salut», con la t","«saluto»"],e:"La t finale non si pronuncia."},
 {q:"Come si pronuncia {merci}?",o:["«mersì»","«merci», come in italiano","«merc»"],e:"La c davanti a i si legge s: {merci} = «mersì», con l'accento sull'ultima sillaba."},
 {q:"Entri in un negozio la mattina. Che cosa dici?",o:["{Bonjour !}","{Salut !}","{De rien !}"],e:"In negozio si saluta sempre con {bonjour}, anche gli sconosciuti."},
 {q:"Qualcuno ti dice:",au:"Merci !",o:["{De rien.}","{Excusez-moi.}","{Au revoir.}"],e:"Grazie → prego: {de rien}."},
 {t:"dict",au:"Merci !"},
 {t:"dict",au:"Bonjour !"},
 {t:"say",zh:"Di' con le labbra a fischio: {tu}, {salut}, {la rue}",it:"tu, salut, la rue",e:"Di' «i» e arrotonda le labbra senza muovere la lingua."},
 {t:"say",zh:"Saluta il commesso entrando e, uscendo, di' «grazie, arrivederci»",it:"Bonjour ! Merci, au revoir !"}
];
VOC.l1=[
 ["bonjour","buongiorno, salve",""],["bonsoir","buonasera",""],["salut","ciao",""],["au revoir","arrivederci",""],["à bientôt","a presto",""],
 ["merci","grazie",""],["de rien","prego, di niente",""],["excusez-moi","mi scusi",""],["pardon","scusa, pardon",""],["s'il vous plaît","per favore",""],
 ["oui","sì",""],["non","no",""],["bien","bene",""],
 ["café","caffè; bar","m"],["rue","strada, via","f"],["roue","ruota","f"],["maison","casa","f"],["livre","libro","m"],["ami","amico","m"],["amie","amica","f"],["chat","gatto","m"],["vin","vino","m"]
];
