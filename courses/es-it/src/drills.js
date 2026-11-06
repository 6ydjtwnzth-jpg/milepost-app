/* ---------- Milepost exercises (Spanish for Italians): ord, gap, err, rep ----------
   Formats in shell/exercises.js. Sentences come from the lessons whenever possible (same audio);
   «err» uses mistakes that Italian speakers really make. Checked by tools/drills_check.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"rep",ask:"¡Gracias!",who:"un'amica",o:[["De nada.","Prego."],["¡Hola!","Ciao!"],["¡Adiós!","Arrivederci!"]],e:"A {gracias} si risponde {de nada}."},
 {t:"rep",ask:"¡Buenos días!",who:"il barista, alle 9",o:[["¡Buenos días!","Buongiorno!"],["¡Buenas noches!","Buonanotte!"],["¡Hasta mañana!","A domani!"]],e:"Si risponde con lo stesso saluto."},
 {t:"gap",s:"Un café, ＿ .",o:["por favor","de nada","adiós"],it:"Un caffè, per favore.",e:"{por favor} = per favore."},
 {t:"ord",q:"«Arrivederci, a dopo!»",w:["adiós","hasta","luego"],x:["después"],a:["¡Adiós, hasta luego!"]},
 {t:"err",s:"¡Buenos tardes!",bad:0,fix:"¡Buenas tardes!",it:"Vuoi dire «Buon pomeriggio!».",e:"{tarde} è femminile: {buenas tardes}, ma {buenos días}."}
]);
XX("l2",[
 {t:"ord",q:"«Mi chiamo Marco.»",w:["me","llamo","Marco"],x:["chiamo"],a:["Me llamo Marco."]},
 {t:"ord",ear:1,q:"«Sono italiano, di Roma.»",w:["soy","italiano","de","Roma"],x:["estoy"],a:["Soy italiano, de Roma."]},
 {t:"gap",s:"Nosotros ＿ estudiantes.",o:["somos","son","estamos"],it:"Siamo studenti.",e:"{ser}: {nosotros somos}."},
 {t:"err",s:"Soy italiano de Milano.",bad:3,fix:"Soy italiano, de Milán.",it:"Vuoi dire «Sono italiano, di Milano».",e:"Le città hanno spesso un nome spagnolo: {Milán}, {Turín}, {Nápoles}."},
 {t:"err",s:"Yo soy Italiana.",bad:2,fix:"Yo soy italiana.",it:"Vuoi dire «Io sono italiana».",e:"Le nazionalità si scrivono con la minuscola, come in italiano: {italiana}."},
 {t:"rep",ask:"¡Hola! Soy Ana. ¿Cómo te llamas?",o:[["Me llamo Luca.","Mi chiamo Luca."],["Soy de Roma.","Sono di Roma."],["Muy bien, gracias.","Molto bene, grazie."]],e:"Ti chiede il nome: {Me llamo…}"}
]);
XX("l3",[
 {t:"ord",q:"«Come sta Lei?»",w:["cómo","está","usted"],x:["estás"],a:["¿Cómo está usted?"]},
 {t:"ord",ear:1,q:"«Molto bene, grazie. E tu?»",w:["muy","bien","gracias","y","tú"],x:["bueno"],a:["Muy bien, gracias. ¿Y tú?"]},
 {t:"gap",s:"¿Cuántos años ＿ ?",o:["tienes","eres","estás"],it:"Quanti anni hai?",e:"L'età si dice con {tener}, come in italiano."},
 {t:"err",s:"Yo soy veinte años.",bad:1,fix:"Yo tengo veinte años.",it:"Vuoi dire «Io ho vent'anni».",e:"L'età vuole {tener}: {tengo veinte años}."},
 {t:"rep",ask:"¿Qué tal estás?",who:"una collega, la mattina",o:[["Muy bien, ¿y tú?","Molto bene, e tu?"],["Tengo veinte años.","Ho vent'anni."],["Me llamo Ana.","Mi chiamo Ana."]],e:"Rispondi e ricambia la domanda."}
]);
XX("l4",[
 {t:"ord",q:"«Nella mia stanza c'è un letto.»",w:["en","mi","habitación","hay","una","cama"],x:["está"],a:["En mi habitación hay una cama.","Hay una cama en mi habitación."]},
 {t:"gap",s:"En la mesa ＿ dos libros.",o:["hay","son","están"],it:"Sul tavolo ci sono due libri.",e:"«c'è / ci sono» = {hay}, sempre uguale."},
 {t:"gap",s:"Es ＿ problema.",o:["un","una","uno"],it:"È un problema.",e:"{problema} è maschile: {el problema}, {un problema}."},
 {t:"err",s:"Hay la llave en la mesa.",bad:0,fix:"La llave está en la mesa.",it:"Vuoi dire «La chiave è sul tavolo».",e:"Con una cosa precisa ({la llave}) non si usa {hay} ma {estar}."},
 {t:"err",s:"Dos libros nuevos y dos sillas nuevos.",bad:6,fix:"Dos libros nuevos y dos sillas nuevas.",it:"Vuoi dire «Due libri nuovi e due sedie nuove».",e:"L'aggettivo si accorda: {sillas nuevas}."},
 {t:"rep",ask:"¿Hay un supermercado por aquí?",o:[["Sí, hay uno en la plaza.","Sì, ce n'è uno in piazza."],["Sí, es en la plaza.","Sì, è in piazza."],["Sí, tengo uno.","Sì, ne ho uno."]],e:"Si risponde con {hay}: {hay uno}."}
]);
XX("l5",[
 {t:"ord",q:"«Ho due fratelli.»",w:["tengo","dos","hermanos"],x:["he"],a:["Tengo dos hermanos."]},
 {t:"ord",ear:1,q:"«Questa è la macchina di mia madre.»",w:["este","es","el","coche","de","mi","madre"],x:["la"],a:["Este es el coche de mi madre."]},
 {t:"gap",s:"Marta y ＿ hermano.",o:["su","sus","tu"],it:"Marta e suo fratello.",e:"«suo» = {su}; al plurale {sus}."},
 {t:"err",s:"Mi madre y la mia hermana.",bad:4,fix:"Mi madre y mi hermana.",it:"Vuoi dire «Mia madre e mia sorella».",e:"Il possessivo spagnolo non vuole l'articolo e non è «mia»: {mi hermana}."},
 {t:"err",s:"Mis hijo se llama Leo.",bad:0,fix:"Mi hijo se llama Leo.",it:"Vuoi dire «Mio figlio si chiama Leo».",e:"Un solo figlio: {mi hijo}; {mis} solo al plurale."},
 {t:"rep",ask:"¿Tienes hijos?",o:[["Sí, tengo una hija.","Sì, ho una figlia."],["Sí, soy una hija.","Sì, sono una figlia."],["Sí, hay una hija.","Sì, c'è una figlia."]],e:"Con {tener}: {Sí, tengo…} / {No, no tengo hijos}."}
]);
XX("l6",[
 {t:"ord",q:"«Sono un po' stanca.»",w:["estoy","un","poco","cansada"],x:["soy"],a:["Estoy un poco cansada."]},
 {t:"ord",ear:1,q:"«Che ore sono? Sono le tre.»",w:["qué","hora","es","son","las","tres"],x:["horas"],a:["¿Qué hora es? Son las tres."]},
 {t:"gap",s:"Es ＿ una.",o:["la","las","el"],it:"È l'una.",e:"L'una: {es la una}; le altre ore: {son las dos}."},
 {t:"err",s:"Soy cansado hoy.",bad:0,fix:"Estoy cansado hoy.",it:"Vuoi dire «Sono stanco oggi».",e:"Uno stato del momento vuole {estar}: {estoy cansado}."},
 {t:"err",s:"El museo es cerrado.",bad:2,fix:"El museo está cerrado.",it:"Vuoi dire «Il museo è chiuso».",e:"Aperto e chiuso sono stati: {está cerrado}."},
 {t:"rep",ask:"¿A qué hora llega el tren?",o:[["A las cinco y media.","Alle cinque e mezza."],["Son las cinco.","Sono le cinque."],["Está en la estación.","È in stazione."]],e:"«A che ora?» → {A las…}"}
]);
XX("l7",[
 {t:"ord",q:"«Lavoro in un ospedale.»",w:["trabajo","en","un","hospital"],x:["a"],a:["Trabajo en un hospital."]},
 {t:"ord",ear:1,q:"«Non parlo tedesco.»",w:["no","hablo","alemán"],x:["non"],a:["No hablo alemán."]},
 {t:"gap",s:"¿Dónde ＿ (vivir, tú)?",o:["vives","vivas","vivís"],it:"Dove vivi?",e:"{vivir}: {tú vives}."},
 {t:"err",s:"Mi hermano es un médico.",bad:3,fix:"Mi hermano es médico.",it:"Vuoi dire «Mio fratello è medico».",e:"Con la professione dopo {ser} niente articolo: {es médico}."},
 {t:"err",s:"Yo trabajo a Madrid.",bad:2,fix:"Yo trabajo en Madrid.",it:"Vuoi dire «Io lavoro a Madrid».",e:"Stato in luogo con le città: {en Madrid}."},
 {t:"rep",ask:"¿A qué te dedicas?",o:[["Soy profesora.","Sono insegnante."],["Me llamo Ana.","Mi chiamo Ana."],["Vivo en Roma.","Vivo a Roma."]],e:"{¿A qué te dedicas?} chiede il lavoro."}
]);
XX("l8",[
 {t:"ord",q:"«Mi fa un caffè, per favore?»",w:["me","pone","un","café","por","favor"],x:["da"],a:["¿Me pone un café, por favor?"]},
 {t:"ord",ear:1,q:"«Quanto costa?»",w:["cuánto","cuesta"],x:["costa"],a:["¿Cuánto cuesta?"]},
 {t:"gap",s:"Para mí, un zumo de ＿ .",o:["naranja","arancia","naranjo"],it:"Per me, un succo d'arancia.",e:"«arancia» = {naranja}."},
 {t:"err",s:"Un caffè con leche, por favor.",bad:1,fix:"Un café con leche, por favor.",it:"Vuoi dire «Un caffellatte, per favore».",e:"{café}, con una sola {f} e l'accento."},
 {t:"err",s:"La cuenta, per favor.",bad:2,fix:"La cuenta, por favor.",it:"Vuoi dire «Il conto, per favore».",e:"«per favore» = {por favor}."},
 {t:"rep",ask:"¿Qué le pongo?",who:"il barista",o:[["Un cortado, por favor.","Un macchiato, per favore."],["Son tres euros.","Sono tre euro."],["De nada.","Prego."]],e:"Ti chiede che cosa vuoi: ordina."}
]);
XX("r1",[
 {t:"gap",s:"Mi hermana es médica y ahora ＿ en el hospital.",o:["está","es","hay"],it:"Mia sorella è medico e adesso è in ospedale.",e:"Professione con {ser}, luogo con {estar}."},
 {t:"err",s:"Tengo trenta años.",bad:1,fix:"Tengo treinta años.",it:"Vuoi dire «Ho trent'anni».",e:"«trenta» = {treinta}."},
 {t:"ord",q:"«C'è un bar in piazza?»",w:["hay","un","bar","en","la","plaza"],x:["está"],a:["¿Hay un bar en la plaza?"]}
]);
XX("l9",[
 {t:"ord",q:"«Dove vai?»",w:["adónde","vas"],x:["vienes"],a:["¿Adónde vas?"]},
 {t:"ord",ear:1,q:"«Che cosa fai il sabato?»",w:["qué","haces","los","sábados"],x:["fai"],a:["¿Qué haces los sábados?"]},
 {t:"gap",s:"Yo ＿ de casa a las ocho.",o:["salgo","salo","sale"],it:"Esco di casa alle otto.",e:"{salir}: {yo salgo}, con la {g}."},
 {t:"err",s:"¿Cuando sales?",bad:0,fix:"¿Cuándo sales?",it:"Vuoi dire «Quando esci?».",e:"Nelle domande le parole interrogative hanno l'accento: {cuándo}, {dónde}, {qué}."},
 {t:"err",s:"Yo hace la compra.",bad:1,fix:"Yo hago la compra.",it:"Vuoi dire «Io faccio la spesa».",e:"{hacer}: {yo hago}."},
 {t:"rep",ask:"¿De dónde eres?",o:[["Soy de Bari.","Sono di Bari."],["Voy a Bari.","Vado a Bari."],["Estoy en Bari.","Sono a Bari."]],e:"{¿De dónde eres?} = di dove sei?"}
]);
XX("l10",[
 {t:"ord",q:"«Mi alzo alle sette.»",w:["me","levanto","a","las","siete"],x:["alzo"],a:["Me levanto a las siete."]},
 {t:"ord",ear:1,q:"«A che ora vai a letto?»",w:["a","qué","hora","te","acuestas"],x:["acostas"],a:["¿A qué hora te acuestas?"]},
 {t:"gap",s:"Los niños ＿ mucho.",o:["duermen","dormen","durmen"],it:"I bambini dormono molto.",e:"o → ue: {duermen}."},
 {t:"err",s:"Yo levanto a las siete.",bad:1,fix:"Yo me levanto a las siete.",it:"Vuoi dire «Io mi alzo alle sette».",e:"{levantarse} è riflessivo: {me levanto}."},
 {t:"err",s:"Nosotros nos acuestamos tarde.",bad:2,fix:"Nosotros nos acostamos tarde.",it:"Vuoi dire «Noi andiamo a letto tardi».",e:"Con {nosotros} niente dittongo: {acostamos}."},
 {t:"rep",ask:"¿Qué haces por la mañana?",o:[["Me ducho y desayuno.","Faccio la doccia e colazione."],["Me llamo Ana.","Mi chiamo Ana."],["Son las ocho.","Sono le otto."]],e:"Racconta la tua mattina con i verbi riflessivi."}
]);
XX("l11",[
 {t:"ord",q:"«Mi piace molto ballare.»",w:["me","gusta","mucho","bailar"],x:["gusto"],a:["Me gusta mucho bailar."]},
 {t:"ord",ear:1,q:"«A mio padre non piace il calcio.»",w:["a","mi","padre","no","le","gusta","el","fútbol"],x:["gustan"],a:["A mi padre no le gusta el fútbol."]},
 {t:"gap",s:"Me ＿ los libros de historia.",o:["gustan","gusta","gusto"],it:"Mi piacciono i libri di storia.",e:"Con un plurale: {me gustan}."},
 {t:"err",s:"Yo juego la guitarra.",bad:1,fix:"Yo toco la guitarra.",it:"Vuoi dire «Io suono la chitarra».",e:"Gli strumenti si suonano con {tocar}."},
 {t:"err",s:"Me gusta mucho. — Yo también.",bad:4,fix:"Me gusta mucho. — A mí también.",it:"Vuoi dire «Mi piace molto. — Anche a me».",e:"Con {gustar}: {a mí también}."},
 {t:"rep",ask:"No me gusta el café.",o:[["A mí tampoco.","Neanche a me."],["Yo también.","Anch'io."],["A mí también no.","Anche a me no."]],e:"Accordo con una frase negativa: {a mí tampoco}."}
]);
XX("l12",[
 {t:"ord",q:"«Dov'è la stazione, per favore?»",w:["dónde","está","la","estación","por","favor"],x:["hay"],a:["¿Dónde está la estación, por favor?"]},
 {t:"ord",ear:1,q:"«Vada sempre dritto e giri a destra.»",w:["siga","todo","recto","y","gire","a","la","derecha"],x:["drecho"],a:["Siga todo recto y gire a la derecha."]},
 {t:"gap",s:"La farmacia está ＿ de la iglesia.",o:["enfrente","frente a","de fronte"],it:"La farmacia è di fronte alla chiesa.",e:"«di fronte a» = {enfrente de}."},
 {t:"err",s:"¿Dónde hay el museo?",bad:1,fix:"¿Dónde está el museo?",it:"Vuoi dire «Dov'è il museo?».",e:"Un luogo preciso ({el museo}): {estar}."},
 {t:"err",s:"Está a diez minutos a piedes.",bad:5,fix:"Está a diez minutos a pie.",it:"Vuoi dire «È a dieci minuti a piedi».",e:"«a piedi» = {a pie}."},
 {t:"rep",ask:"Perdone, ¿hay un cajero por aquí?",o:[["Sí, al lado de la farmacia.","Sì, accanto alla farmacia."],["Sí, es la farmacia.","Sì, è la farmacia."],["No, gracias.","No, grazie."]],e:"Indica dove: {al lado de…}"}
]);
XX("l13",[
 {t:"ord",q:"«Vuoi venire al cinema?»",w:["quieres","venir","al","cine"],x:["de"],a:["¿Quieres venir al cine?"]},
 {t:"ord",ear:1,q:"«Mi dispiace, devo studiare.»",w:["lo","siento","tengo","que","estudiar"],x:["debo"],a:["Lo siento, tengo que estudiar."]},
 {t:"gap",s:"¿Qué vas ＿ hacer el sábado?",o:["a","de","por"],it:"Che cosa fai sabato?",e:"{ir a} + infinito."},
 {t:"err",s:"Tengo estudiar mucho.",bad:0,fix:"Tengo que estudiar mucho.",it:"Vuoi dire «Devo studiare molto».",e:"«dovere» = {tener que} + infinito."},
 {t:"err",s:"Estoy cocinendo.",bad:1,fix:"Estoy cocinando.",it:"Vuoi dire «Sto cucinando».",e:"Verbi in {-ar}: gerundio in {-ando}."},
 {t:"rep",ask:"¿Quedamos el viernes a las ocho?",o:[["¡Vale! Hasta el viernes.","D'accordo! A venerdì."],["Me quedo en casa.","Resto a casa."],["Estoy quedando.","Sto restando."]],e:"Accetti: {¡Vale!}"}
]);
XX("l14",[
 {t:"ord",q:"«Vorrei un chilo di pomodori.»",w:["quería","un","kilo","de","tomates"],x:["vorría"],a:["Quería un kilo de tomates."]},
 {t:"ord",ear:1,q:"«Le fragole? Le prendo.»",w:["las","fresas","las","quiero"],x:["les"],a:["¿Las fresas? Las quiero."]},
 {t:"gap",s:"¿El pan? Sí, ＿ quiero.",o:["lo","le","la"],it:"Il pane? Sì, lo voglio.",e:"{el pan} → {lo}."},
 {t:"err",s:"Quiero comprar la.",bad:2,fix:"Quiero comprarla.",it:"Vuoi dire «Voglio comprarla».",e:"Con l'infinito il pronome si attacca: {comprarla}."},
 {t:"err",s:"Cien grammos de jamón.",bad:1,fix:"Cien gramos de jamón.",it:"Vuoi dire «Cento grammi di prosciutto».",e:"Lo spagnolo non raddoppia: {gramos}."},
 {t:"rep",ask:"¿Algo más?",who:"il fruttivendolo",o:[["No, eso es todo, gracias.","No, è tutto, grazie."],["Sí, es todo.","Sì, è tutto."],["Nada más bueno.","Niente di più buono."]],e:"Per finire: {Eso es todo}."}
]);
XX("r2",[
 {t:"gap",s:"A mis padres les ＿ viajar.",o:["encanta","encantan","encantamos"],it:"Ai miei genitori piace tantissimo viaggiare.",e:"Con un infinito: {les encanta}."},
 {t:"err",s:"¿Quieres de venir?",bad:1,fix:"¿Quieres venir?",it:"Vuoi dire «Vuoi venire?».",e:"Dopo {querer} niente preposizione."},
 {t:"ord",q:"«Mi alzo presto e faccio la doccia.»",w:["me","levanto","temprano","y","me","ducho"],x:["presto"],a:["Me levanto temprano y me ducho."]}
]);
XX("l15",[
 {t:"ord",q:"«Oggi ho lavorato molto.»",w:["hoy","he","trabajado","mucho"],x:["sido"],a:["Hoy he trabajado mucho."]},
 {t:"ord",ear:1,q:"«Sei mai stato in Messico?»",w:["has","estado","en","México"],x:["sido"],a:["¿Has estado en México?"]},
 {t:"gap",s:"Esta mañana ＿ ido al mercado.",o:["he","soy","ha"],it:"Stamattina sono andato al mercato.",e:"L'ausiliare è sempre {haber}: {he ido}."},
 {t:"err",s:"Me he levantada tarde.",bad:2,fix:"Me he levantado tarde.",it:"Vuoi dire «Mi sono alzata tardi».",e:"Il participio non si accorda: {levantado}."},
 {t:"err",s:"¿Qué has hacido?",bad:2,fix:"¿Qué has hecho?",it:"Vuoi dire «Che cosa hai fatto?».",e:"Participio irregolare: {hecho}."},
 {t:"rep",ask:"¿Ya has comido?",o:[["No, todavía no.","No, non ancora."],["No, ya no.","No, non più."],["Sí, como.","Sì, mangio."]],e:"«non ancora» = {todavía no}."}
]);
XX("l16",[
 {t:"ord",q:"«L'estate scorsa siamo andati in Galizia.»",w:["el","verano","pasado","fuimos","a","Galicia"],x:["hemos"],a:["El verano pasado fuimos a Galicia."]},
 {t:"ord",ear:1,q:"«Ieri sera ho visto un film.»",w:["anoche","vi","una","película"],x:["he"],a:["Anoche vi una película."]},
 {t:"gap",s:"Ayer ＿ en un restaurante gallego.",o:["comí","he comido","como"],it:"Ieri ho mangiato in un ristorante galiziano.",e:"Con {ayer}: {indefinido}."},
 {t:"err",s:"Ayer he ido al cine.",bad:1,fix:"Ayer fui al cine.",it:"Vuoi dire «Ieri sono andato al cinema».",e:"In Spagna, con {ayer}: {fui}."},
 {t:"err",s:"Llegé el lunes.",bad:0,fix:"Llegué el lunes.",it:"Vuoi dire «Sono arrivato lunedì».",e:"Per conservare il suono «gh»: {llegué}."},
 {t:"rep",ask:"¿Qué hiciste el fin de semana?",o:[["Fui a la playa con unos amigos.","Sono andato al mare con degli amici."],["Voy a la playa.","Vado al mare."],["Iré a la playa.","Andrò al mare."]],e:"Domanda al passato → risposta al passato."}
]);
XX("l17",[
 {t:"ord",q:"«Da piccola vivevo vicino al mare.»",w:["de","pequeña","vivía","cerca","del","mar"],x:["viví"],a:["De pequeña vivía cerca del mar."]},
 {t:"ord",ear:1,q:"«Giocavamo per strada.»",w:["jugábamos","en","la","calle"],x:["jugamos"],a:["Jugábamos en la calle."]},
 {t:"gap",s:"Cuando ＿ niño, iba a la playa.",o:["era","fui","estaba"],it:"Quando ero bambino, andavo al mare.",e:"Descrizione nel passato: {era}."},
 {t:"err",s:"En verano nadava mucho.",bad:2,fix:"En verano nadaba mucho.",it:"Vuoi dire «D'estate nuotavo molto».",e:"Imperfecto in {-aba}, con la {b}."},
 {t:"err",s:"Soy nacido en Bari.",bad:0,fix:"Nací en Bari.",it:"Vuoi dire «Sono nato a Bari».",e:"«sono nato» = {nací}."},
 {t:"rep",ask:"¿Dónde vivías de pequeño?",o:[["Vivía en un pueblo pequeño.","Vivevo in un paesino."],["Vivo en Roma.","Vivo a Roma."],["Viviré en Madrid.","Vivrò a Madrid."]],e:"Domanda all'imperfecto → risposta all'imperfecto."}
]);
XX("l18",[
 {t:"ord",q:"«Dormivo quando ha squillato il telefono.»",w:["dormía","cuando","sonó","el","teléfono"],x:["sonaba"],a:["Dormía cuando sonó el teléfono."]},
 {t:"ord",ear:1,q:"«All'improvviso è andata via la luce.»",w:["de","repente","se","apagó","la","luz"],x:["en"],a:["De repente, se apagó la luz."]},
 {t:"gap",s:"Estuvimos dos horas en el tren y ＿ muy cansados.",o:["llegamos","llegábamos","llegaremos"],it:"Siamo stati due ore in treno e siamo arrivati molto stanchi.",e:"Fatti in sequenza: {indefinido}."},
 {t:"err",s:"Estaba dos horas en el tren.",bad:0,fix:"Estuve dos horas en el tren.",it:"Vuoi dire «Sono stato due ore in treno».",e:"Durata chiusa: {estuve}."},
 {t:"err",s:"Hacía mucho caldo.",bad:2,fix:"Hacía mucho calor.",it:"Vuoi dire «Faceva molto caldo».",e:"«caldo» = {calor}; {caldo} in spagnolo è il brodo!"},
 {t:"rep",ask:"¿Qué te pasó ayer?",o:[["Perdí el autobús y llegué tarde.","Ho perso l'autobus e sono arrivato tardi."],["Pierdo el autobús.","Perdo l'autobus."],["Voy a perder el autobús.","Sto per perdere l'autobus."]],e:"Racconti un fatto: {indefinido}."}
]);
XX("l19",[
 {t:"ord",q:"«Madrid è più grande di Barcellona.»",w:["Madrid","es","más","grande","que","Barcelona"],x:["de"],a:["Madrid es más grande que Barcelona."]},
 {t:"ord",ear:1,q:"«Le regalo un libro.»",w:["le","regalo","un","libro"],x:["la"],a:["Le regalo un libro."]},
 {t:"gap",s:"Sevilla es ＿ bonita como Granada.",o:["tan","tanto","tanta"],it:"Siviglia è bella quanto Granada.",e:"Con un aggettivo: {tan… como}."},
 {t:"err",s:"Esta paella es más buena.",bad:4,fix:"Esta paella es mejor.",it:"Vuoi dire «Questa paella è migliore».",e:"{bueno} → {mejor}."},
 {t:"err",s:"El tren es más barato del avión.",bad:5,fix:"El tren es más barato que el avión.",it:"Vuoi dire «Il treno costa meno dell'aereo».",e:"«più… di» = {más… que}."},
 {t:"rep",ask:"¿Qué le regalas a tu madre?",o:[["Le regalo un bolso.","Le regalo una borsa."],["Me regalo un bolso.","Mi regalo una borsa."],["Te regalo un bolso.","Ti regalo una borsa."]],e:"«a lei» = {le}."}
]);
XX("l20",[
 {t:"ord",q:"«Posso provare questi pantaloni?»",w:["puedo","probarme","estos","pantalones"],x:["esto"],a:["¿Puedo probarme estos pantalones?"]},
 {t:"ord",ear:1,q:"«La giacca? La prendo.»",w:["la","chaqueta","me","la","llevo"],x:["le"],a:["¿La chaqueta? Me la llevo."]},
 {t:"gap",s:"¿El regalo? Ya ＿ he dado a Ana.",o:["se lo","le lo","lo le"],it:"Il regalo? L'ho già dato ad Ana.",e:"{le} + {lo} → {se lo}."},
 {t:"err",s:"Esto libro es muy caro.",bad:0,fix:"Este libro es muy caro.",it:"Vuoi dire «Questo libro è molto caro».",e:"Con un nome maschile: {este}."},
 {t:"err",s:"La falda me está grande.",bad:3,fix:"La falda me queda grande.",it:"Vuoi dire «La gonna mi sta grande».",e:"Per i vestiti: {quedar}."},
 {t:"rep",ask:"¿Qué talla tiene?",who:"la commessa",o:[["La 38.","La 38."],["Treinta y ocho euros.","Trentotto euro."],["Me queda bien.","Mi sta bene."]],e:"Ti chiede la taglia."}
]);
XX("l21",[
 {t:"ord",q:"«L'anno prossimo lavorerò in Messico.»",w:["el","año","que","viene","trabajaré","en","México"],x:["trabajeré"],a:["El año que viene trabajaré en México."]},
 {t:"ord",ear:1,q:"«Se avrò tempo, ti chiamerò.»",w:["si","tengo","tiempo","te","llamaré"],x:["tendré"],a:["Si tengo tiempo, te llamaré."]},
 {t:"gap",s:"Mañana no ＿ salir: tengo que trabajar.",o:["podré","poderé","puedré"],it:"Domani non potrò uscire: devo lavorare.",e:"Radice irregolare: {podr-}."},
 {t:"err",s:"Si tendré tiempo, iré.",bad:1,fix:"Si tengo tiempo, iré.",it:"Vuoi dire «Se avrò tempo, andrò».",e:"Dopo {si}: presente."},
 {t:"err",s:"Volveré entre dos años.",bad:1,fix:"Volveré dentro de dos años.",it:"Vuoi dire «Tornerò tra due anni».",e:"«tra» nel futuro = {dentro de}."},
 {t:"rep",ask:"¿Qué harás el verano que viene?",o:[["Viajaré a Argentina.","Viaggerò in Argentina."],["Viajé a Argentina.","Ho viaggiato in Argentina."],["Viajaba a Argentina.","Viaggiavo in Argentina."]],e:"Domanda al futuro → risposta al futuro."}
]);
XX("l22",[
 {t:"ord",q:"«Mi fa male la testa.»",w:["me","duele","la","cabeza"],x:["mi"],a:["Me duele la cabeza."]},
 {t:"ord",ear:1,q:"«Potrebbe darmi qualcosa per la febbre?»",w:["podría","darme","algo","para","la","fiebre"],x:["por"],a:["¿Podría darme algo para la fiebre?"]},
 {t:"gap",s:"Me duele la garganta desde ＿ tres días.",o:["hace","de","por"],it:"Mi fa male la gola da tre giorni.",e:"Con una durata: {desde hace}."},
 {t:"err",s:"Me duelen mi espalda.",bad:2,fix:"Me duele la espalda.",it:"Vuoi dire «Mi fa male la schiena».",e:"Con il corpo l'articolo, e al singolare {duele}."},
 {t:"err",s:"Necesito algo para la gola.",bad:4,fix:"Necesito algo para la garganta.",it:"Vuoi dire «Mi serve qualcosa per la gola».",e:"«gola» = {garganta}."},
 {t:"rep",ask:"Estoy muy cansado.",o:[["Deberías dormir más.","Dovresti dormire di più."],["Deberás dormir más.","Dovrai dormire di più."],["Debías dormir más.","Dovevi dormire di più."]],e:"Un consiglio: {deberías}."}
]);
XX("l23",[
 {t:"ord",q:"«Mi mancano i miei genitori.»",w:["echo","de","menos","a","mis","padres"],x:["me"],a:["Echo de menos a mis padres."]},
 {t:"ord",ear:1,q:"«Un giorno mi piacerebbe vivere in Spagna.»",w:["algún","día","me","gustaría","vivir","en","España"],x:["gustará"],a:["Algún día me gustaría vivir en España."]},
 {t:"gap",s:"Al principio ＿ difícil: no conocía a nadie.",o:["era","fui","es"],it:"All'inizio era difficile: non conoscevo nessuno.",e:"Descrizione: {imperfecto}."},
 {t:"err",s:"Llamo a mis padres: les llamo todos los domingos.",bad:4,fix:"Llamo a mis padres: los llamo todos los domingos.",it:"Vuoi dire «Li chiamo tutte le domeniche».",e:"{llamar} vuole il complemento diretto: {los llamo}."}
]);
XX("r3",[
 {t:"gap",s:"Ayer ＿ frío cuando salí de casa.",o:["hacía","hizo","hace"],it:"Ieri faceva freddo quando sono uscito di casa.",e:"Sfondo: {imperfecto}."},
 {t:"err",s:"Si lloverá, nos quedaremos en casa.",bad:1,fix:"Si llueve, nos quedaremos en casa.",it:"Vuoi dire «Se pioverà, resteremo a casa».",e:"Dopo {si}: presente."},
 {t:"ord",q:"«Mi piacerebbe vivere a Madrid.»",w:["me","gustaría","vivir","en","Madrid"],x:["a"],a:["Me gustaría vivir en Madrid."]}
]);
