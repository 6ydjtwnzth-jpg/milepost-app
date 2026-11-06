DLG.l3=[["A","Buenos días, señora Gómez. ¿Cómo está usted?","Buongiorno, signora Gómez. Come sta?"],["B","Muy bien, gracias. ¿Y tú, Ana? ¿Qué tal estás?","Molto bene, grazie. E tu, Ana? Come stai?"],["A","Regular. Un poco cansada.","Così così. Un po' stanca."],["B","¿Y tu hermano? ¿Cuántos años tiene?","E tuo fratello? Quanti anni ha?"],["A","Tiene doce años.","Ha dodici anni."],["B","¡Doce años! ¿Y tú?","Dodici anni! E tu?"],["A","Yo tengo diecinueve.","Io ne ho diciannove."],["B","Muy bien. ¡Hasta luego, Ana!","Molto bene. Ciao, Ana!"],["A","Hasta luego, señora.","Arrivederci, signora."]];
EX.l3=[
 {q:"Parli con un signore anziano che non conosci:",o:["{¿Cómo está usted?}","{¿Qué tal estás?}","{¿Cómo estás usted?}"],e:"Con {usted} il verbo è alla terza persona: {está}."},
 {q:"Parli con due amici:",o:["{¿Vosotros sois de aquí?}","{¿Ustedes sois de aquí?}","{¿Vosotros son de aquí?}"],e:"Tra amici, al plurale: {vosotros sois}."},
 {q:"«Ho vent'anni.»",o:["{Tengo veinte años.}","{Soy veinte años.}","{Tengo venti años.}"],e:"L'età con {tener}, come in italiano; 20 = {veinte}."},
 {q:"«Quanti anni ha?» (Lei)",o:["{¿Cuántos años tiene?}","{¿Cuántos años tienes?}","{¿Cuánto años tiene?}"],e:"Con {usted}: {tiene}; e {cuántos} si accorda con {años}."},
 {q:"Ascolta: quale numero senti?",au:"quince",o:["15","50","5"],e:"{quince} = 15."},
 {q:"Ascolta: quale numero senti?",au:"diecisiete",o:["17","7","70"],e:"{diecisiete} = 17."},
 {q:"Qualcuno ti chiede {¿Qué tal?} e stai così così:",o:["{Regular.}","{Muy bien.}","{Fatal.}"],e:"{regular} = così così."},
 {q:"{tu} senza accento vuol dire:",o:["tuo","tu (pronome)","sì"],e:"{tu} = tuo; {tú} = tu."},
 {q:"In Spagna, con un ragazzo della tua età in un negozio:",o:["di solito {tú}","sempre {usted}","{vosotros}"],e:"In Spagna il {tú} è molto comune, anche con chi non conosci."},
 {t:"type",q:"Completa: {Mi hermana} ＿ {once años.} (tener)",a:["tiene"],full:"Mi hermana tiene once años."},
 {t:"type",q:"Completa: {¿Cuántos años} ＿ {tú?}",a:["tienes"],full:"¿Cuántos años tienes tú?"},
 {t:"dict",au:"¿Qué tal estás?"},
 {t:"say",zh:"Chiedi a una signora anziana come sta, dandole del Lei",it:"¿Cómo está usted, señora?"},
 {t:"say",zh:"Di' quanti anni hai",it:"Tengo treinta años.",e:"Con {tener} + {años}."}
];
VOC.l3=[
 ["señora","signora","f"],["señor","signore","m"],["amigo","amico","m"],["amiga","amica","f"],["aquí","qui",""],["qué tal","come va",""],["estar","stare, essere",""],["bien","bene",""],["muy","molto",""],["regular","così così",""],["fatal","malissimo",""],["cansado","stanco",""],["cansada","stanca",""],["un poco","un po'",""],
 ["tener","avere",""],["año","anno","m"],["cuántos","quanti",""],["hermano","fratello","m"],["hermana","sorella","f"],["número","numero","m"],["teléfono","telefono","m"],["cuál","quale",""],
 ["cero","zero",""],["uno","uno",""],["dos","due",""],["tres","tre",""],["cuatro","quattro",""],["cinco","cinque",""],["seis","sei",""],["siete","sette",""],["ocho","otto",""],["nueve","nove",""],["diez","dieci",""],
 ["once","undici",""],["doce","dodici",""],["trece","tredici",""],["catorce","quattordici",""],["quince","quindici",""],["dieciséis","sedici",""],["diecisiete","diciassette",""],["dieciocho","diciotto",""],["diecinueve","diciannove",""],["veinte","venti",""],["tu","tuo, tua",""]
];
EX.l3=EX.l3.concat([
 {t:"dict",au:"Tengo diecinueve años."},
 {t:"say",zh:"Rispondi a un amico che ti chiede come stai: «Bene, grazie. E tu?»",it:"Bien, gracias. ¿Y tú?"},
 {t:"type",q:"Completa: {¿Cómo} ＿ {usted?} (estar)",a:["está"],full:"¿Cómo está usted?"}
]);
