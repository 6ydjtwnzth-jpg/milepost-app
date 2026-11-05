DLG.l10=[["A","A che ora ti alzi la mattina?","¿A qué hora te levantas por la mañana?"],["B","Mi alzo alle sette. E tu?","Me levanto a las siete. ¿Y tú?"],["A","Alle sei e mezza, perché comincio a lavorare alle otto.","A las seis y media, porque empiezo a trabajar a las ocho."],["B","Che fatica! Fai colazione?","¡Qué cansancio! ¿Desayunas?"],["A","Sì, sempre: un caffè e un cornetto al bar.","Sí, siempre: un café y un cruasán en el bar."],["B","Io invece non faccio mai colazione.","Yo, en cambio, nunca desayuno."],["A","Ma il sabato dormo fino alle dieci!","¡Pero los sábados duermo hasta las diez!"],["B","Anch'io! Il sabato non mi sveglio mai prima delle nove.","¡Yo también! Los sábados nunca me despierto antes de las nueve."]];
EX.l10=[
 {q:"Escucha: ¿qué hora es?",au:"Sono le otto e mezza.",o:["8:30","8:15","9:30"],e:"{e mezza} = y media."},
 {q:"Escucha: ¿qué hora es?",au:"Sono le dieci meno cinque.",o:["9:55","10:05","10:55"],e:"{meno} = menos."},
 {q:"«Es la una»:",o:["{È l'una.}","{Sono le una.}","{È una ora.}"],e:"Como en español: singular."},
 {q:"Te preguntan:",au:"A che ora ti alzi?",o:["{Mi alzo alle sette.}","{Alzo alle sette.}","{Sono le sette.}"],e:"Reflexivo: {mi alzo}."},
 {q:"«Nunca bebo café.»",o:["{Non bevo mai il caffè.}","{Mai bevo il caffè.}","{Non mai bevo il caffè.}"],e:"{non} + verbo + {mai}."},
 {q:"«Desayuno en el bar.»",o:["{Faccio colazione al bar.}","{Desayuno al bar.}","{Mi colaziono al bar.}"],e:"«Desayunar» = {fare colazione}."},
 {q:"«Los lunes voy al gimnasio.»",o:["{Il lunedì vado in palestra.}","{I lunedì vado in palestra.}","{Lunedì vado al gimnasio.}"],e:"{il lunedì} = los lunes (no cambia en plural)."},
 {q:"«Nos levantamos a las siete.»",o:["{Ci alziamo alle sette.}","{Nos alziamo alle sette.}","{Si alziamo alle sette.}"],e:"«nos» = {ci}."},
 {q:"Escucha: ¿qué día es hoy?",au:"Oggi è giovedì.",o:["jueves","martes","sábado"],e:"{giovedì} = jueves."},
 {t:"type",q:"Completa: {Noi} ＿ {alziamo alle sette.} (pronombre reflexivo)",a:["ci"],full:"Noi ci alziamo alle sette."},
 {t:"type",q:"Completa: {Lei} ＿ {chiama Giulia.} (pronombre reflexivo)",a:["si"],full:"Lei si chiama Giulia."},
 {t:"dict",au:"Che ore sono?"},
 {t:"dict",au:"Mi alzo alle sette."},
 {t:"say",zh:"Cuenta tu mañana: a qué hora te despiertas, te levantas y si desayunas",it:"Mi sveglio alle sette, mi alzo alle sette e un quarto e faccio sempre colazione."},
 {t:"say",zh:"Di algo que no haces nunca",it:"Non vado mai a letto prima di mezzanotte.",e:"{non … mai} = nunca."}
];
VOC.l10=[
 ["fatica", "cansancio, esfuerzo (che fatica!: ¡qué cansancio!)", "f"],["invece", "en cambio", ""],["fino a", "hasta", ""],["prima di", "antes de", ""],
 ["ora","hora","f"],["mezza","media (hora)",""],["un quarto","un cuarto",""],["meno","menos",""],["mezzogiorno","mediodía","m"],["mezzanotte","medianoche","f"],
 ["mattina","mañana (parte del día)","f"],["pomeriggio","tarde","m"],["sera","noche, tarde-noche","f"],["alzarsi","levantarse",""],["svegliarsi","despertarse",""],["lavarsi","lavarse",""],["vestirsi","vestirse",""],["riposarsi","descansar",""],
 ["colazione","desayuno","f"],["pranzo","almuerzo, comida","m"],["cena","cena","f"],["palestra","gimnasio","f"],["sempre","siempre",""],["spesso","a menudo",""],["qualche volta","a veces",""],["mai","nunca (non … mai)",""],
 ["lunedì","lunes",""],["martedì","martes",""],["mercoledì","miércoles",""],["giovedì","jueves",""],["venerdì","viernes",""],["sabato","sábado",""],["domenica","domingo",""],["ritardo","retraso","m"]
];
