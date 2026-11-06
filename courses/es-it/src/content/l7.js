DLG.l7=[["A","Carlos, ¿a qué te dedicas?","Carlos, che lavoro fai?"],["B","Soy enfermero. Trabajo en un hospital.","Sono infermiere. Lavoro in un ospedale."],["A","¡Mi hermana es enfermera también!","Anche mia sorella è infermiera!"],["B","¿Ah, sí? ¿Dónde trabaja?","Ah, sì? Dove lavora?"],["A","En Bilbao. Trabaja de noche.","A Bilbao. Lavora di notte."],["B","Yo no trabajo de noche. Empiezo a las siete de la mañana.","Io non lavoro di notte. Comincio alle sette di mattina."],["A","Yo soy profesora. Enseño italiano en una academia.","Io sono insegnante. Insegno italiano in una scuola di lingue."],["B","¿Y te gusta?","E ti piace?"],["A","¡Me encanta! Pero no me gustan los lunes.","Lo adoro! Ma non mi piacciono i lunedì."]];
EX.l7=[
 {q:"«Lei lavora in un negozio.»",o:["{Trabaja en una tienda.}","{Trabaje en una tienda.}","{Es trabaja en una tienda.}"],e:"Terza persona dei verbi in {-ar}: {-a}."},
 {q:"{vivir} con {nosotros}:",o:["{vivimos}","{vivemos}","{vivamos}"],e:"I verbi in {-ir} fanno {-imos}."},
 {q:"{comer} con {vosotros}:",o:["{coméis}","{cométe}","{comís}"],e:"{-er}: {coméis}; {-ir}: {vivís}."},
 {q:"«Non parla francese.» (lui)",o:["{No habla francés.}","{Habla no francés.}","{No hablas francés.}"],e:"{no} prima del verbo."},
 {q:"«Sono infermiere.»",o:["{Soy enfermero.}","{Soy un enfermero.}","{Estoy enfermero.}"],e:"Il lavoro con {ser}, senza articolo."},
 {q:"«Che lavoro fai?»",o:["{¿A qué te dedicas?}","{¿Qué trabajo haces tú?} (sempre)","{¿Qué te trabajas?}"],e:"La domanda più naturale: {¿A qué te dedicas?} o {¿En qué trabajas?}"},
 {q:"Ascolta: dove lavora?",au:"Mi padre trabaja en un banco en Bilbao.",o:["in una banca","in un ospedale","in una scuola"],e:"{un banco} = una banca (e anche una panchina)."},
 {q:"Ascolta: che cosa non fa il sabato?",au:"No trabajo los sábados.",o:["non lavora","non studia","non cucina"],e:"{No trabajo} = non lavoro."},
 {q:"Ascolta: quale forma senti?",au:"hablo",o:["{hablo}, presente","{habló}, passato"],e:"{hablo} ha l'accento sulla prima sillaba: «àblo»."},
 {t:"type",q:"Completa: {Mi hermano} ＿ {en Madrid.} (vivir)",a:["vive"],full:"Mi hermano vive en Madrid."},
 {t:"type",q:"Completa: {Ellos} ＿ {trabajan los domingos.} (non)",a:["no"],full:"Ellos no trabajan los domingos."},
 {t:"dict",au:"Trabajo en una oficina."},
 {t:"say",zh:"Di' che lavoro fai e dove (o che cosa studi)",it:"Soy estudiante. Estudio ingeniería en Turín."},
 {t:"say",zh:"Di': «Mia sorella non lavora il venerdì.»",it:"Mi hermana no trabaja los viernes."}
];
VOC.l7=[
 ["trabajar","lavorare",""],["hablar","parlare",""],["comer","mangiare",""],["enseñar","insegnare",""],["estudiar","studiare",""],["empezar","cominciare",""],["dedicarse","fare di lavoro, occuparsi di",""],["a qué te dedicas","che lavoro fai",""],["de noche","di notte",""],["nunca","mai",""],["nadie","nessuno",""],
 ["enfermero","infermiere","m"],["enfermera","infermiera","f"],["profesor","insegnante, professore","m"],["profesora","insegnante, professoressa","f"],["camarero","cameriere","m"],["camarera","cameriera","f"],["abogado","avvocato","m"],["abogada","avvocata","f"],["cocinero","cuoco","m"],["dependiente","commesso","m"],["conductor","autista","m"],
 ["oficina","ufficio","f"],["hospital","ospedale","m"],["colegio","scuola (elementare, media)","m"],["academia","scuola privata (di lingue…)","f"],["tienda","negozio","f"],["restaurante","ristorante","m"],["banco","banca; panchina","m"],["empresa","azienda","f"],["trabajo","lavoro","m"],
 ["cena","cena","f"],["ingeniería","ingegneria","f"],["me gusta","mi piace",""],["me encanta","lo adoro",""]
];
EX.l7=EX.l7.concat([
 {t:"dict",au:"No trabajo los sábados."},
 {t:"say",zh:"Di': «Lui fa il cameriere. Lavora in un ristorante, ma non lavora la domenica.»",it:"Es camarero. Trabaja en un restaurante, pero no trabaja los domingos."},
 {t:"type",q:"Completa: {¿Vosotros} ＿ {en casa?} (comer)",a:["coméis"],full:"¿Vosotros coméis en casa?"}
]);
