DLG.l10=[["A","Elena, ¿a qué hora te levantas?","Elena, a che ora ti alzi?"],["B","Normalmente me levanto a las siete.","Di solito mi alzo alle sette."],["A","¿Desayunas en casa?","Fai colazione a casa?"],["B","No, desayuno en un bar: un café con leche y una tostada.","No, faccio colazione in un bar: un caffellatte e una fetta di pane tostato."],["A","¿Y a qué hora empiezas a trabajar?","E a che ora cominci a lavorare?"],["B","A las nueve. Como a las dos y vuelvo a casa a las seis.","Alle nove. Pranzo alle due e torno a casa alle sei."],["A","¿Qué haces por la tarde?","Che cosa fai la sera?"],["B","A veces voy al gimnasio. Ceno a las nueve y media.","A volte vado in palestra. Ceno alle nove e mezza."],["A","¡Qué tarde!","Così tardi!"],["B","¡En España es normal! Me acuesto a las doce.","In Spagna è normale! Vado a letto a mezzanotte."]];
EX.l10=[
 {q:"«Mi alzo alle sette.»",o:["{Me levanto a las siete.}","{Levanto a las siete.}","{Me levanto en las siete.}"],e:"Riflessivo con {me}; l'ora con {a las}."},
 {q:"«Torno a casa alle sei.» ({volver})",o:["{Vuelvo a casa a las seis.}","{Volvo a casa a las seis.}","{Vuelvo a la casa en seis.}"],e:"{o} → {ue}: {vuelvo}."},
 {q:"{dormir} con {nosotros}:",o:["{dormimos}","{duermimos}","{duermemos}"],e:"Con {nosotros} la vocale non cambia."},
 {q:"«A che ora andate a letto?»",o:["{¿A qué hora os acostáis?}","{¿A qué hora vi acostáis?}","{¿A qué hora os acuestáis?}"],e:"«vi» = {os}; con {vosotros} niente {ue}."},
 {q:"«Pranzo alle due.»",o:["{Como a las dos.}","{Pranzo a las dos.}","{Almuerzo a las dos de la noche.}"],e:"In Spagna «pranzare» si dice di solito {comer}."},
 {q:"{pedir} con {yo}:",o:["{pido}","{pedo}","{piedo}"],e:"{e} → {i}: {pido}."},
 {q:"Ascolta: a che ora cena?",au:"Ceno a las nueve y media.",o:["alle 21:30","alle 19:30","alle 22:00"],e:"{las nueve y media} di sera."},
 {q:"Ascolta: quanto spesso va in palestra?",au:"Voy al gimnasio dos veces a la semana.",o:["due volte alla settimana","tutti i giorni","mai"],e:"{dos veces a la semana}."},
 {q:"«Non faccio mai colazione a casa.»",o:["{Nunca desayuno en casa.}","{No desayuno nunca casa.}","{Nunca no desayuno en casa.}"],e:"{nunca} prima del verbo, senza {no}; oppure {No desayuno nunca en casa}."},
 {t:"type",q:"Completa: {Mi hijo} ＿ {solo.} (vestirse)",a:["se viste"],full:"Mi hijo se viste solo."},
 {t:"type",q:"Completa: {Yo} ＿ {a trabajar a las nueve.} (empezar)",a:["empiezo"],full:"Yo empiezo a trabajar a las nueve."},
 {t:"dict",au:"Me levanto a las siete y me ducho."},
 {t:"say",zh:"Racconta la tua mattina: a che ora ti alzi, dove fai colazione, a che ora cominci a lavorare",it:"Me levanto a las siete y media. Desayuno en casa. Empiezo a trabajar a las nueve."},
 {t:"say",zh:"Chiedi a un amico a che ora va a letto",it:"¿A qué hora te acuestas?"}
];
VOC.l10=[
 ["levantarse","alzarsi",""],["ducharse","fare la doccia",""],["vestirse","vestirsi",""],["acostarse","andare a letto",""],["despertarse","svegliarsi",""],["volver","tornare",""],["dormir","dormire",""],["poder","potere",""],["preferir","preferire",""],["pedir","chiedere, ordinare",""],["jugar","giocare",""],
 ["desayunar","fare colazione",""],["cenar","cenare",""],["desayuno","colazione","m"],["comida","cibo; pranzo","f"],["normalmente","di solito",""],["a menudo","spesso",""],["a veces","a volte",""],["vez","volta","f"],["semana","settimana","f"],
 ["gimnasio","palestra","m"],["normal","normale",""],["qué tarde","così tardi",""],["niño","bambino","m"],["niños","bambini","mp"],["temprano","presto",""],["luego","poi, dopo",""],["después","dopo",""],["mediodía","mezzogiorno","m"],["medianoche","mezzanotte","f"],["pensar", "pensare", ""],["cerrar", "chiudere", ""],["sentarse", "sedersi", ""],["lavarse", "lavarsi", ""],["noche", "notte, sera", "f"],["antes", "prima", ""]
];
EX.l10=EX.l10.concat([
 {t:"dict",au:"Vuelvo a casa a las seis."},
 {t:"say",zh:"Di': «A volte ceno con i miei amici.»",it:"A veces ceno con mis amigos."},
 {t:"type",q:"Completa: {Los niños} ＿ {nueve horas.} (dormir)",a:["duermen"],full:"Los niños duermen nueve horas."}
]);
