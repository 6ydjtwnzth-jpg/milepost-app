DLG.l6=[["A","Excuse me, what time is it?","Scusi, che ore sono?"],["B","It's half past six.","Sono le sei e mezza."],["A","Oh no! The film is at seven!","Oh no! Il film è alle sette!"],["B","The cinema is near here. It's OK.","Il cinema è qui vicino. Va bene."],["A","Is the museum open tomorrow?","Il museo è aperto domani?"],["B","No, it isn't. Tomorrow is Monday.","No. Domani è lunedì."],["A","Is it closed on Mondays?","È chiuso il lunedì?"],["B","Yes, it is. It's open from Tuesday to Sunday.","Sì. È aperto dal martedì alla domenica."],["A","Thank you! Bye!","Grazie! Arrivederci!"]];
EX.l6=[
 {q:"7:30:",o:["{half past seven}","{seven and half}","{half past eight}"],e:"{half past} = e mezza, dopo l'ora."},
 {q:"8:45:",o:["{quarter to nine}","{quarter past eight}","{quarter to eight}"],e:"{to} = meno: un quarto alle nove."},
 {q:"«Sono le dieci.»",o:["{It's ten o'clock.}","{They are ten.}","{It's ten hours.}"],e:"In inglese «è» l'ora: {It's…}. {o'clock} solo con l'ora esatta."},
 {q:"«lunedì alle nove»:",o:["{on Monday at nine}","{in Monday at nine}","{on monday in nine}"],e:"{on} con i giorni, {at} con le ore, e la maiuscola."},
 {q:"Ascolta: quale numero senti?",au:"fifty",o:["50","15","55"],e:"Accento all'inizio: FIF-ty = 50."},
 {q:"Ascolta: quale numero senti?",au:"eighteen",o:["18","80","8"],e:"Accento alla fine: eigh-TEEN = 18."},
 {q:"Ascolta: a che ora è il film?",au:"The film is at quarter past eight.",o:["8:15","7:45","8:45"],e:"{quarter past eight} = le otto e un quarto."},
 {q:"Il museo è chiuso tutti i martedì:",o:["{It's closed on Tuesdays.}","{It's closed in Tuesday.}","{It's closed the tuesdays.}"],e:"Abitudine: giorno al plurale con {on}."},
 {q:"Come si scrive 40?",o:["{forty}","{fourty}","{fourteen}"],e:"{four}, ma {forty} senza la u."},
 {t:"type",q:"Completa: {See you} ＿ {Saturday!}",a:["on"],full:"See you on Saturday!"},
 {t:"type",q:"Completa: {The bus is} ＿ {ten past nine.}",a:["at"],full:"The bus is at ten past nine."},
 {t:"dict",au:"What time is it?"},
 {t:"say",zh:"Di' che ore sono adesso, con {past} o {to}",it:"It's twenty past four.",e:"Ad esempio 4:20 = {twenty past four}."},
 {t:"say",zh:"Fissa un appuntamento: «Ci vediamo giovedì alle sette e mezza!»",it:"See you on Thursday at half past seven!"}
];
VOC.l6=[
 ["time","ora, tempo",""],["what time is it","che ore sono",""],["o'clock","in punto",""],["half past","e mezza",""],["quarter past","e un quarto",""],["quarter to","meno un quarto",""],["past","dopo (nelle ore)",""],["to","meno (nelle ore); a",""],
 ["at","a (con le ore)",""],["on","di, il (con i giorni)",""],["morning","mattina",""],["afternoon","pomeriggio",""],["evening","sera",""],["day","giorno",""],["today","oggi",""],["tomorrow","domani",""],["week","settimana",""],["weekend","fine settimana",""],
 ["Monday","lunedì",""],["Tuesday","martedì",""],["Wednesday","mercoledì",""],["Thursday","giovedì",""],["Friday","venerdì",""],["Saturday","sabato",""],["Sunday","domenica",""],
 ["open","aperto",""],["closed","chiuso",""],["near","vicino a",""],["film","film",""],["cinema","cinema",""],["museum","museo",""],["bus","autobus",""],["see you","ci vediamo",""],["oh no","oh no",""],
 ["thirty","trenta",""],["forty","quaranta",""],["fifty","cinquanta",""],["sixty","sessanta",""],["seventy","settanta",""],["eighty","ottanta",""],["ninety","novanta",""],["a hundred","cento",""]
];
EX.l6=EX.l6.concat([
 {t:"dict",au:"The museum is closed on Mondays."},
 {t:"say",zh:"Chiedi che giorno è oggi",it:"What day is it today?"},
 {t:"type",q:"Completa: {It's ten} ＿ {nine.} (9:50)",a:["to"],full:"It's ten to nine."}
]);
