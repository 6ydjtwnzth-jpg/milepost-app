DLG.l1=[["A","¡Hola, buenos días!","Salve, buongiorno!"],["B","¡Hola! Un café, por favor.","Salve! Un caffè, per favore."],["A","Aquí tiene.","Ecco a lei."],["B","¡Gracias!","Grazie!"],["A","De nada.","Prego."],["B","¡Adiós, hasta luego!","Arrivederci, a dopo!"],["A","¡Hasta luego!","A dopo!"]];
EX.l1=[
 {q:"Ascolta: quale parola senti?",au:"gente",o:["{gente}","{gato}"],e:"{gente}: la {g} davanti a {e} si dice come la {jota}, un soffio dalla gola."},
 {q:"Ascolta: quale parola senti?",au:"mañana",o:["{mañana}","{manzana}"],e:"{mañana} (domani) ha la {ñ}, come «gn»; {manzana} (mela) ha la {z}."},
 {q:"Come si legge la {h} di {hola}?",o:["non si legge","come una «k»","come la {jota}"],e:"La {h} è muta, come in italiano."},
 {q:"Come si scrive in spagnolo «grazie»?",o:["{gracias}","{grazias}","{graccias}"],e:"Con la {c}, e le consonanti non si raddoppiano."},
 {q:"Sono le nove di sera ed entri in un ristorante. Che cosa dici?",o:["{¡Buenas noches!}","{¡Buenos días!}","{¡Hasta mañana!}"],e:"La sera tardi si saluta con {buenas noches}, anche arrivando."},
 {q:"Entri in un negozio alle cinque del pomeriggio. Che cosa dici?",o:["{¡Buenas tardes!}","{¡Buenos días!}","{¡Buenas noches!}"],e:"Dal pranzo fino a sera: {buenas tardes}."},
 {q:"Qualcuno ti dice:",au:"¡Muchas gracias!",o:["{De nada.}","{Perdone.}","{Hasta luego.}"],e:"Grazie → prego: {de nada}."},
 {q:"Come si scrive la domanda «Un caffè?»",o:["{¿Un café?}","{Un café?}","{?Un café?}"],e:"Le domande cominciano con {¿}."},
 {q:"Come si chiama la lettera {J}?",o:["{jota}","{ge}","{i griega}"],e:"{J} = {jota}."},
 {t:"dict",au:"¡Gracias!"},
 {t:"dict",au:"¡Hola, buenos días!"},
 {t:"say",zh:"Di' con il soffio della {jota}: {jamón}, {hijo}, {gente}",it:"jamón, hijo, gente",e:"Un soffio forte dalla gola, non la «g» italiana."},
 {t:"say",zh:"Al bar: chiedi un tè per favore e ringrazia",it:"Un té, por favor. ¡Gracias!"}
];
VOC.l1=[
 ["hola","ciao, salve",""],["buenos días","buongiorno",""],["buenas tardes","buon pomeriggio, buonasera",""],["buenas noches","buonasera (tardi), buonanotte",""],["adiós","arrivederci, addio",""],["hasta luego","a dopo, ciao",""],["hasta mañana","a domani",""],
 ["gracias","grazie",""],["muchas gracias","grazie mille",""],["de nada","prego (risposta a grazie)",""],["por favor","per favore",""],["perdón","scusa",""],["perdone","mi scusi",""],["sí","sì",""],["no","no",""],["aquí tiene","ecco a lei",""],
 ["café","caffè; bar","m"],["té","tè","m"],["agua","acqua","f"],["zumo","succo","m"],["hotel","albergo","m"],["jamón","prosciutto","m"],["hijo","figlio","m"],["gente","gente","f"],["mañana","domani; mattina",""],["vino","vino","m"],["queso","formaggio","m"],["España","Spagna",""]
];
EX.l1=EX.l1.concat([
 {t:"type",q:"Completa: {¡Gracias! — De} ＿ {.}",a:["nada"],full:"¡Gracias! — De nada."},
 {t:"dict",au:"¡Adiós, hasta luego!"},
 {t:"say",zh:"Al bar ti offrono un caffè: rispondi «Sì, per favore!»",it:"Sí, por favor."}
]);
