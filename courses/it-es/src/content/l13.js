DLG.l13=[["A","Stasera che cosa fai?","¿Qué haces esta noche?"],["B","Niente di speciale. Perché?","Nada especial. ¿Por qué?"],["A","Vuoi venire al cinema con me?","¿Quieres venir al cine conmigo?"],["B","Sì, volentieri! A che ora?","¡Sí, con mucho gusto! ¿A qué hora?"],["A","Alle otto. Puoi venire alle sette e mezza davanti al cinema?","A las ocho. ¿Puedes venir a las siete y media delante del cine?"],["B","Va bene. Prima devo finire un lavoro, ma vengo!","Vale. Antes tengo que terminar un trabajo, ¡pero voy!"]];
DLG.l13b=[["A","Pronto?","¿Diga?"],["B","Ciao Marco, sono Lucía. Dove sei?","Hola, Marco, soy Lucía. ¿Dónde estás?"],["A","Sono al supermercato. Perché?","Estoy en el supermercado. ¿Por qué?"],["B","Mi dispiace, stasera non posso venire al cinema: devo studiare.","Lo siento, esta noche no puedo ir al cine: tengo que estudiar."],["A","Che peccato! Possiamo andare sabato?","¡Qué pena! ¿Podemos ir el sábado?"],["B","Sì, sabato va benissimo. Ci sentiamo!","Sí, el sábado me va muy bien. ¡Hablamos!"],["A","A sabato!","¡Hasta el sábado!"]];
EX.l13=[
 {q:"Escucha y elige el significado:",au:"Vuoi venire al cinema?",o:["¿Quieres venir al cine?","¿Has estado en el cine?","¿Dónde está el cine?"],e:"{vuoi} + infinitivo = ¿quieres…?"},
 {q:"Escucha y elige el significado:",au:"Mi dispiace, non posso.",o:["Lo siento, no puedo.","No me gusta.","No lo sé."],e:"{non posso} = no puedo."},
 {q:"Escucha y elige el significado:",au:"Devo lavorare domani.",o:["Mañana tengo que trabajar.","Mañana quiero trabajar.","Mañana no trabajo."],e:"{devo} = tengo que."},
 {q:"«Tengo que estudiar.»",o:["{Devo studiare.}","{Ho che studiare.}","{Devo di studiare.}"],e:"Modal + infinitivo, sin «que»."},
 {q:"Pides permiso: «¿Puedo entrar?»",o:["{Posso entrare?}","{Voglio entrare?}","{Devo entrare?}"],e:"{posso} = puedo."},
 {q:"Un amigo te invita y aceptas:",au:"Vieni con noi?",o:["{Sì, vengo!}","{Sì, vado!}","{Sì, puoi!}"],e:"Hacia quien habla: {vengo}."},
 {q:"«Tenéis que estudiar.»",o:["{Dovete studiare.}","{Devete studiare.}","{Dovete studiate.}"],e:"{dovere} → {dovete} + infinitivo."},
 {q:"Contestas al teléfono:",o:["{Pronto?}","{Diga?}","{Prego?}"],e:"{Pronto?} = ¿Diga?"},
 {t:"type",q:"Completa: ＿ {aiutarmi?} (potere, tú)",a:["puoi"],full:"Puoi aiutarmi?"},
 {t:"type",q:"Completa: {Loro} ＿ {andare al mare.} (volere)",a:["vogliono"],full:"Loro vogliono andare al mare."},
 {t:"dict",au:"Mi dispiace, non posso."},
 {t:"dict",au:"Va bene alle otto?"},
 {t:"say",zh:"Invita a un amigo: «¿Quieres venir a comer una pizza conmigo el sábado?»",it:"Vuoi venire a mangiare una pizza con me sabato?"},
 {t:"say",zh:"Rechaza con educación y da una razón",it:"Mi dispiace, non posso: domani ho un esame.",e:"Al rechazar, los italianos suelen dar una razón."}
];
VOC.l13=[
 ["sapere", "saber", ""],["credere", "creer", ""],["pensare", "pensar", ""],["sembrare", "parecer", ""],["riuscire", "lograr, conseguir", ""],["lasciare", "dejar", ""],["mettere", "poner", ""],
 ["volere","querer",""],["potere","poder",""],["dovere","deber, tener que",""],["invitare","invitar",""],["entrare","entrar",""],["aiutare","ayudar",""],["finire","terminar",""],
 ["mi dispiace","lo siento",""],["volentieri","con mucho gusto",""],["va bene","vale, de acuerdo",""],["peccato","pena, lástima","m"],["niente","nada",""],["speciale","especial",""],
 ["pronto","¿diga? (teléfono); listo",""],["chiamare","llamar",""],["messaggio","mensaje","m"],["esame","examen","m"],["più tardi","más tarde",""],["ci sentiamo","hablamos",""],
 ["domani","mañana (el día después)",""],["oggi","hoy",""],["prima","antes",""],["insieme","juntos",""],["festa","fiesta","f"],["bisogna","hay que",""]
];
