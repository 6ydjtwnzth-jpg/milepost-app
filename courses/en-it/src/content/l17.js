DLG.l17=[["A","Is this you, Grandma?","Questa sei tu, nonna?"],["B","Yes! I was born in Bari in 1950.","Sì! Sono nata a Bari nel 1950."],["A","Did you live near the sea?","Abitavi vicino al mare?"],["B","Yes. In summer I used to swim every day.","Sì. D'estate nuotavo tutti i giorni."],["A","Could you swim when you were five?","Sapevi nuotare a cinque anni?"],["B","Yes, I could. But I couldn't ride a bike!","Sì. Ma non sapevo andare in bici!"],["A","Did you use to watch TV?","Guardavi la televisione?"],["B","No, we didn't have a TV. We used to play in the street.","No, non avevamo la televisione. Giocavamo per strada."],["A","Wow, life was different!","Wow, la vita era diversa!"],["B","Yes, it was. But we were happy.","Sì. Ma eravamo felici."]];
EX.l17=[
 {q:"«Sono nato nel 1995.»",o:["{I was born in 1995.}","{I am born in 1995.}","{I born in 1995.}"],e:"«nascere» è al passato: {I was born}."},
 {q:"«Da bambino giocavo a calcio.» (abitudine)",o:["{When I was a child, I used to play football.}","{When I was a child, I use to play football.}","{When I was a child, I was play football.}"],e:"Abitudine passata: {used to} + forma base."},
 {q:"«Di solito mi alzo alle sette.» (oggi)",o:["{I usually get up at seven.}","{I use to get up at seven.}","{I used to get up at seven.}"],e:"{used to} è solo passato; per oggi {usually}."},
 {q:"«Non avevamo la macchina.»",o:["{We didn't use to have a car.}","{We didn't used to have a car.}","{We used not have a car.}"],e:"Dopo {didn't}: {use to}, senza -d. Va bene anche {We didn't have a car}."},
 {q:"«Sapevi nuotare?»",o:["{Could you swim?}","{Did you could swim?}","{Could you to swim?}"],e:"{could} fa le domande da solo, senza {did}."},
 {q:"«Dove è nata tua madre?»",o:["{Where was your mother born?}","{Where is your mother born?}","{Where did your mother born?}"],e:"{Where was… born?}"},
 {q:"Ascolta: dove abitava?",au:"When I was a child, I used to live on a farm.",o:["in una fattoria","in città","al mare"],e:"{on a farm} = in una fattoria."},
 {q:"Ascolta: che cosa non sapeva fare?",au:"I couldn't ride a bike until I was ten.",o:["andare in bici","nuotare","leggere"],e:"{couldn't ride a bike} fino a dieci anni."},
 {q:"Ascolta: quando è nato?",au:"My son was born on the second of June.",o:["il 2 giugno","il 2 luglio","il 22 giugno"],e:"{the second of June}."},
 {t:"type",q:"Completa: {My dad} ＿ {to work in a factory.}",a:["used"],full:"My dad used to work in a factory."},
 {t:"type",q:"Completa: {I} ＿ {read when I was four.} (sapevo)",a:["could"],full:"I could read when I was four."},
 {t:"dict",au:"We used to play in the street."},
 {t:"say",zh:"Di' dove e quando sei nato",it:"I was born in Turin in 1988."},
 {t:"say",zh:"Racconta due abitudini della tua infanzia con {used to}",it:"When I was a child, I used to go to the beach with my grandparents and I used to read comics."}
];
VOC.l17=[
 ["used to","ero solito (abitudine passata)",""],["couldn't","non sapevo, non potevo",""],["be born","nascere",""],["was born","sono nato, è nato",""],["when I was a child","da bambino",""],
 ["grandma","nonna",""],["grandpa","nonno",""],["life","vita",""],["different","diverso",""],["summer","estate",""],["winter","inverno",""],["spring","primavera",""],["autumn","autunno",""],
 ["farm","fattoria",""],["village","paese, villaggio",""],["countryside","campagna",""],["toy","giocattolo",""],["comics","fumetti",""],["until","fino a",""],["called","chiamato, che si chiama",""],["use","usare",""],["grow up","crescere",""],["primary school","scuola elementare",""],["teenager","adolescente",""],["remember","ricordare",""],["forest", "bosco, foresta", ""],["lake", "lago", ""],["still", "ancora", ""],["quite", "piuttosto, abbastanza", ""]
];
EX.l17=EX.l17.concat([
 {t:"dict",au:"Our house was small, but it had a big garden."},
 {t:"say",zh:"Chiedi a un amico se da piccolo giocava a calcio",it:"Did you use to play football when you were a child?"},
 {t:"type",q:"Completa: {Where} ＿ {you born?}",a:["were"],full:"Where were you born?"}
]);
