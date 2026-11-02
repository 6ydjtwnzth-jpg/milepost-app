/* ---------- Ejercicios Milepost (italiano para hispanohablantes): ordenar, completar, encontrar el error, responder ----------
   Formats in shell/exercises.js. Sentences come from the lessons whenever possible (same audio);
   «err» uses mistakes that Spanish speakers really make. Checked by tools/drills_check.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"rep",ask:"Grazie!",who:"un amigo",o:[["Prego!","¡De nada!"],["Ciao!","¡Hola!"],["Scusa!","¡Perdona!"]],e:"A {Grazie} se responde {Prego}."},
 {t:"rep",ask:"Buonanotte!",who:"por la noche, en familia",o:[["Buonanotte!","¡Buenas noches!"],["Buongiorno!","¡Buenos días!"],["Prego!","¡De nada!"]],e:"Antes de dormir: {buonanotte}."},
 {t:"gap",s:"Un caffè, per ＿!",o:["favore","grazie","prego"],it:"Un café, por favor.",e:"{per favore} = por favor."},
 {t:"err",s:"Ciao, professore! Come sta?",bad:0,fix:"Buongiorno, professore! Come sta?",it:"Saludas a tu profesor por la mañana.",e:"Con un profesor: {buongiorno}, no {ciao}."},
 {t:"ord",ear:1,q:"«Buenos días, señora.»",w:["buongiorno","signora"],x:["ciao"],a:["Buongiorno, signora."]}
]);
XX("l2",[
 {t:"ord",q:"«Me llamo Marco.»",w:["mi","chiamo","Marco"],x:["è"],a:["Mi chiamo Marco."]},
 {t:"ord",ear:1,q:"«Soy italiano, de Roma.»",w:["io","sono","italiano","di","Roma"],x:["a"],a:["Io sono italiano, di Roma."]},
 {t:"gap",s:"Come ti ＿?",o:["chiami","chiamo","chiama"],it:"¿Cómo te llamas?",e:"{tu} → {ti chiami}."},
 {t:"gap",s:"Lucía ＿ spagnola.",o:["è","sono","ha"],it:"Lucía es española.",e:"{lei} → {è}."},
 {t:"err",s:"Sono di Spagna.",bad:2,fix:"Sono spagnola.",it:"Quieres decir «Soy española».",e:"Con los países se dice la nacionalidad ({sono spagnola}) o {vengo dalla Spagna}; {di} solo con las ciudades: {sono di Siviglia}."},
 {t:"rep",ask:"Di dove sei?",o:[["Sono di Madrid.","Soy de Madrid."],["Sono a Madrid.","Estoy en Madrid."],["Mi chiamo Madrid.","Me llamo Madrid."]],e:"{Di dove sei?} → {Sono di…}"}
]);
XX("l3",[
 {t:"ord",q:"«¿Usted es italiano?»",w:["Lei","è","italiano?"],x:["sei"],a:["Lei è italiano?"]},
 {t:"gap",s:"Scusi, Lei ＿ il signor Rossi?",o:["è","sei","sono"],it:"Perdone, ¿usted es el señor Rossi?",e:"{Lei} va con la tercera persona: {è}."},
 {t:"err",s:"Buongiorno, signora. Come stai?",bad:3,fix:"Buongiorno, signora. Come sta?",it:"Hablas con una señora que no conoces.",e:"Con {Lei}: {Come sta?}"},
 {t:"rep",ask:"Piacere!",who:"te presentan a alguien",o:[["Piacere mio!","¡El gusto es mío!"],["Prego!","¡De nada!"],["Mi piace!","¡Me gusta!"]],e:"{Piacere!} → {Piacere mio!} o {Piacere!}"},
 {t:"ord",ear:1,q:"«Encantado, me llamo Lucía.»",w:["piacere","mi","chiamo","Lucía"],x:["sono"],a:["Piacere, mi chiamo Lucía."]}
]);
XX("l4",[
 {t:"gap",s:"＿ zaino è nuovo.",o:["Lo","Il","La"],it:"La mochila es nueva.",e:"Delante de {z}: {lo}."},
 {t:"gap",s:"Nella camera ＿ due finestre.",o:["ci sono","c'è","hai"],it:"En la habitación hay dos ventanas.",e:"Plural: {ci sono}."},
 {t:"err",s:"Ci sono due libros.",bad:3,fix:"Ci sono due libri.",it:"Quieres decir «Hay dos libros».",e:"El plural italiano no lleva {s}: {libro} → {libri}."},
 {t:"err",s:"Il zaino è sul letto.",bad:0,fix:"Lo zaino è sul letto.",it:"Quieres decir «La mochila está en la cama».",e:"Delante de {z}: {lo}."},
 {t:"ord",q:"«En la habitación hay una cama.»",w:["nella","camera","c'è","un","letto"],x:["ci sono"],a:["Nella camera c'è un letto."]},
 {t:"rep",ask:"Che cos'è questo?",o:[["È uno zaino.","Es una mochila."],["È un zaino.","(error)"],["Sono uno zaino.","Soy una mochila."]],e:"{uno zaino}: delante de {z}, {uno}."}
]);
XX("l5",[
 {t:"ord",q:"«Tengo un hermano y una hermana.»",w:["ho","un","fratello","e","una","sorella"],x:["sono"],a:["Ho un fratello e una sorella."]},
 {t:"ord",ear:1,q:"«Mi madre se llama Carmen.»",w:["mia","madre","si","chiama","Carmen"],x:["la"],a:["Mia madre si chiama Carmen."]},
 {t:"gap",s:"Questi sono ＿ miei genitori.",o:["i","gli","le"],it:"Estos son mis padres.",e:"Familiares en plural: con artículo, {i miei}."},
 {t:"gap",s:"Mia sorella ＿ sedici anni.",o:["ha","è","hai"],it:"Mi hermana tiene dieciséis años.",e:"La edad con {avere}."},
 {t:"err",s:"Mia famiglia è grande.",bad:0,fix:"La mia famiglia è grande.",it:"Quieres decir «Mi familia es grande».",e:"El posesivo lleva artículo: {la mia famiglia}."},
 {t:"err",s:"La mia madre è medico.",bad:0,fix:"Mia madre è medico.",it:"Quieres decir «Mi madre es médica».",e:"Familiar en singular: sin artículo."},
 {t:"rep",ask:"Hai fratelli?",o:[["Sì, ho una sorella.","Sí, tengo una hermana."],["Sì, sono una sorella.","Sí, soy una hermana."],["No, ho vent'anni.","No, tengo veinte años."]],e:"Se responde con {avere}."}
]);
XX("l6",[
 {t:"gap",s:"Come ＿? — Bene, grazie.",o:["stai","sei","hai"],it:"¿Cómo estás? — Bien, gracias.",e:"La salud con {stare}."},
 {t:"gap",s:"Oggi ＿ molto stanca.",o:["sono","sto","ho"],it:"Hoy estoy muy cansada.",e:"«Estar» + adjetivo = {essere}."},
 {t:"err",s:"Sto stanco, ho molto lavoro.",bad:0,fix:"Sono stanco, ho molto lavoro.",it:"Quieres decir «Estoy cansado, tengo mucho trabajo».",e:"Con los adjetivos de estado: {sono stanco}."},
 {t:"err",s:"Roma sta in Italia.",bad:1,fix:"Roma è in Italia.",it:"Quieres decir «Roma está en Italia».",e:"Para el lugar: {essere}."},
 {t:"ord",ear:1,q:"«Yo también tengo hambre.»",w:["anch'io","ho","fame"],x:["sono"],a:["Anch'io ho fame."]},
 {t:"rep",ask:"Come stai?",o:[["Così così, sono stanca.","Así así, estoy cansada."],["Così così, sto stanca.","(error)"],["Ho bene.","(error)"]],e:"{Sono stanca}, con {essere}."}
]);
XX("l7",[
 {t:"gap",s:"Tu ＿ molto bene!",o:["parli","parlas","parla"],it:"¡Hablas muy bien!",e:"{tu} termina en {-i}."},
 {t:"gap",s:"Noi ＿ a Milano.",o:["abitiamo","abitamos","abitano"],it:"Vivimos en Milán.",e:"{noi} → {-iamo}."},
 {t:"err",s:"Vivo a Roma da due anni.",bad:0,fix:"Abito a Roma da due anni.",it:"Quieres decir «Vivo en Roma desde hace dos años».",e:"Para el lugar se prefiere {abitare}: {abito a Roma}."},
 {t:"err",s:"Tu parlas italiano?",bad:1,fix:"Tu parli italiano?",it:"Quieres decir «¿Hablas italiano?»",e:"{tu} → {parli}."},
 {t:"ord",q:"«Trabajo en un restaurante: soy cocinero.»",w:["lavoro","in","un","ristorante:","faccio","il","cuoco"],x:["sono"],a:["Lavoro in un ristorante: faccio il cuoco."]},
 {t:"rep",ask:"Che lavoro fai?",o:[["Sono studentessa.","Soy estudiante."],["Faccio bene.","Lo hago bien."],["Lavoro è bello.","El trabajo es bonito."]],e:"{Sono…} o {Faccio il…}"}
]);
XX("l8",[
 {t:"gap",s:"＿ un cappuccino, per favore.",o:["Vorrei","Voglio","Volo"],it:"Quisiera un capuchino, por favor.",e:"En el bar: {vorrei}."},
 {t:"gap",s:"Quanto ＿ due cornetti?",o:["costano","costa","costi"],it:"¿Cuánto cuestan dos cruasanes?",e:"Plural: {costano}."},
 {t:"err",s:"Sono tre euros e venti.",bad:2,fix:"Sono tre euro e venti.",it:"Quieres decir «Son tres euros con veinte».",e:"{euro} no cambia en plural."},
 {t:"err",s:"Parlo espagnolo e italiano.",bad:1,fix:"Parlo spagnolo e italiano.",it:"Quieres decir «Hablo español e italiano».",e:"{s} + consonante sin «e» delante: {spagnolo}."},
 {t:"ord",ear:1,q:"«La cuenta, por favor.»",w:["il","conto","per","favore"],x:["la"],a:["Il conto, per favore."]},
 {t:"rep",ask:"Altro?",who:"el camarero",o:[["No, grazie. Quant'è?","No, gracias. ¿Cuánto es?"],["Sì, altro.","Sí, otro."],["Prego, altro.","De nada, otro."]],e:"{Altro?} = ¿Algo más?"}
]);
XX("r1",[
 {t:"ord",q:"«Mis padres son altos.»",w:["i","miei","genitori","sono","alti"],x:["mie"],a:["I miei genitori sono alti."]},
 {t:"gap",s:"Mio padre ＿ medico.",o:["è","ha","sta"],it:"Mi padre es médico.",e:"La profesión con {essere}."},
 {t:"err",s:"Ho due fratellos.",bad:2,fix:"Ho due fratelli.",it:"Quieres decir «Tengo dos hermanos».",e:"Plural sin {s}: {fratelli}."},
 {t:"rep",ask:"Quanti anni hai?",o:[["Ho vent'anni.","Tengo veinte años."],["Sono vent'anni.","(error)"],["Ho venti.","Tengo veinte."]],e:"{Ho … anni}."}
]);

/* ---------- Segunda parte ---------- */
XX("l9",[
 {t:"gap",s:"＿ è quel ragazzo?",o:["Chi","Che","Come"],it:"¿Quién es ese chico?",e:"{chi} = quién."},
 {t:"gap",s:"＿ sorelle hai?",o:["Quante","Quanti","Quanto"],it:"¿Cuántas hermanas tienes?",e:"Femenino plural: {quante}."},
 {t:"err",s:"Porque sei in Italia?",bad:0,fix:"Perché sei in Italia?",it:"Quieres decir «¿Por qué estás en Italia?»",e:"«¿Por qué?» y «porque» = {perché}."},
 {t:"ord",ear:1,q:"«¿Dónde vives ahora?»",w:["dove","abiti","adesso?"],x:["sei"],a:["Dove abiti adesso?"]},
 {t:"ord",q:"«¿Con quién vives?»",w:["con","chi","abiti?"],x:["che"],a:["Con chi abiti?"]},
 {t:"rep",ask:"Perché studi italiano?",o:[["Perché vorrei vivere in Italia.","Porque quisiera vivir en Italia."],["Perché? Sì.","¿Por qué? Sí."],["In Italia.","En Italia."]],e:"{perché} sirve también para responder."}
]);
XX("l10",[
 {t:"gap",s:"Sono le otto e ＿.",o:["mezza","media","metà"],it:"Son las ocho y media.",e:"«y media» = {e mezza}."},
 {t:"gap",s:"Non faccio ＿ colazione.",o:["mai","nunca","niente"],it:"Nunca desayuno.",e:"{non} + verbo + {mai}."},
 {t:"err",s:"Mai bevo il caffè la sera.",bad:0,fix:"Non bevo mai il caffè la sera.",it:"Quieres decir «Nunca bebo café por la noche».",e:"En italiano: {non bevo mai}."},
 {t:"err",s:"Nos alziamo alle sette.",bad:0,fix:"Ci alziamo alle sette.",it:"Quieres decir «Nos levantamos a las siete».",e:"«nos» = {ci}."},
 {t:"ord",ear:1,q:"«Me levanto a las siete.»",w:["mi","alzo","alle","sette"],x:["sono"],a:["Mi alzo alle sette."]},
 {t:"rep",ask:"A che ora ti alzi?",o:[["Mi alzo alle sette.","Me levanto a las siete."],["Alzo alle sette.","(error)"],["Sono le sette.","Son las siete."]],e:"Reflexivo: {mi alzo}."}
]);
XX("l11",[
 {t:"gap",s:"Mi ＿ i film italiani.",o:["piacciono","piace","piaccio"],it:"Me gustan las películas italianas.",e:"Plural → {piacciono}."},
 {t:"gap",s:"Stasera ＿ con gli amici.",o:["esco","salgo","salisco"],it:"Esta noche salgo con los amigos.",e:"«salir» = {uscire} → {esco}."},
 {t:"err",s:"A me mi piace molto ballare.",bad:2,fix:"A me piace molto ballare.",it:"Quieres decir «A mí me gusta mucho bailar».",e:"No se repite: {a me piace} o {mi piace}."},
 {t:"err",s:"Vado in Roma con mia sorella.",bad:1,fix:"Vado a Roma con mia sorella.",it:"Quieres decir «Voy a Roma con mi hermana».",e:"Con las ciudades: {a}."},
 {t:"ord",ear:1,q:"«¡A mí también!»",w:["anche","a","me!"],x:["io"],a:["Anche a me!"]},
 {t:"rep",ask:"Vieni con noi al cinema?",o:[["Sì, volentieri!","¡Sí, con mucho gusto!"],["Sì, vado!","(no se dice así)"],["Mi piace cinema.","(error)"]],e:"Aceptar: {Volentieri!} o {Sì, vengo!}"}
]);
XX("l12",[
 {t:"gap",s:"Le chiavi sono ＿ tavolo.",o:["sul","su il","sobre il"],it:"Las llaves están sobre la mesa.",e:"{su} + {il} = {sul}."},
 {t:"gap",s:"Stasera vado ＿ Marco.",o:["da","a","di"],it:"Esta noche voy a casa de Marco.",e:"«a casa de» = {da}."},
 {t:"err",s:"La fermata è davanti a la banca.",bad:4,fix:"La fermata è davanti alla banca.",it:"Quieres decir «La parada está delante del banco».",e:"{a} + {la} = {alla}."},
 {t:"err",s:"Il latte è in il frigo.",bad:3,fix:"Il latte è nel frigo.",it:"Quieres decir «La leche está en la nevera».",e:"{in} + {il} = {nel}."},
 {t:"ord",q:"«Gire a la derecha, por favor.»",w:["giri","a","destra","per","favore"],x:["gira"],a:["Giri a destra, per favore."]},
 {t:"rep",ask:"Scusi, dov'è la stazione?",o:[["Vada sempre dritto.","Siga recto."],["Vaya sempre dritto.","(error)"],["È stazione.","Es estación."]],e:"{Lei}: {vada}."}
]);
XX("l13",[
 {t:"gap",s:"Stasera non ＿ venire: devo studiare.",o:["posso","voglio","devo"],it:"Esta noche no puedo venir: tengo que estudiar.",e:"{non posso} = no puedo."},
 {t:"gap",s:"＿ venire al cinema con me?",o:["Vuoi","Vuole","Volete"],it:"¿Quieres venir al cine conmigo?",e:"{tu} → {vuoi}."},
 {t:"err",s:"Ho che studiare per l'esame.",bad:0,fix:"Devo studiare per l'esame.",it:"Quieres decir «Tengo que estudiar para el examen».",e:"«tener que» = {dovere}."},
 {t:"err",s:"Devo di finire un lavoro.",bad:1,fix:"Devo finire un lavoro.",it:"Quieres decir «Tengo que terminar un trabajo».",e:"Modal + infinitivo, sin preposición."},
 {t:"ord",ear:1,q:"«Lo siento, no puedo.»",w:["mi","dispiace,","non","posso"],x:["sento"],a:["Mi dispiace, non posso."]},
 {t:"rep",ask:"Pronto?",o:[["Ciao, sono Lucía!","¡Hola, soy Lucía!"],["Pronto, sono pronto.","(no tiene sentido)"],["Grazie!","¡Gracias!"]],e:"Al teléfono: {Sono…}"}
]);
XX("l14",[
 {t:"gap",s:"Vorrei ＿ mele, per favore.",o:["delle","dei","della"],it:"Quisiera unas manzanas, por favor.",e:"{mele}, femenino plural → {delle}."},
 {t:"gap",s:"Quanti pomodori vuole? — ＿ vorrei un chilo.",o:["Ne","Li","Lo"],it:"¿Cuántos tomates quiere? — Quisiera un kilo.",e:"Con una cantidad: {ne}."},
 {t:"err",s:"Hai fratelli? Sì, ho due.",bad:3,fix:"Hai fratelli? Sì, ne ho due.",it:"Quieres decir «¿Tienes hermanos? Sí, tengo dos».",e:"Con una cantidad hace falta {ne}: {ne ho due}."},
 {t:"gap",s:"Vorrei un caffè e un bicchiere di ＿.",o:["latte","leche","lette"],it:"Quisiera un café y un vaso de leche.",e:"«leche» = {latte}."},
 {t:"ord",q:"«Para mí, de primero, espaguetis.»",w:["per","me,","come","primo,","gli","spaghetti"],x:["di"],a:["Per me, come primo, gli spaghetti."]},
 {t:"rep",ask:"Da bere?",who:"el camarero",o:[["Un'acqua naturale, per favore.","Un agua sin gas, por favor."],["Sì, bere.","Sí, beber."],["Il conto.","La cuenta."]],e:"{Da bere?} = ¿Para beber?"}
]);
XX("r2",[
 {t:"ord",q:"«Los sábados me levanto tarde.»",w:["il","sabato","mi","alzo","tardi"],x:["i"],a:["Il sabato mi alzo tardi."]},
 {t:"gap",s:"Non torno ＿ a casa prima di mezzanotte.",o:["mai","nunca","niente"],it:"Nunca vuelvo a casa antes de medianoche.",e:"{non … mai}."},
 {t:"err",s:"Stasera non posso salire con voi.",bad:4,fix:"Stasera non posso uscire con voi.",it:"Quieres decir «Esta noche no puedo salir con vosotros».",e:"{salire} = subir; «salir» = {uscire}."},
 {t:"rep",ask:"Ci vediamo alle otto davanti al bar?",o:[["Va bene, a dopo!","¡Vale, hasta luego!"],["Sì, vediamo.","Sí, veamos."],["Alle otto è bar.","(no tiene sentido)"]],e:"{Va bene} = vale."}
]);

/* ---------- Tercera parte ---------- */
XX("l15",[
 {t:"gap",s:"Ieri ＿ visto un bel film.",o:["ho","sono","avevo"],it:"Ayer vi una película bonita.",e:"{vedere} con {avere}."},
 {t:"gap",s:"Che cosa hai ＿ nel fine settimana?",o:["fatto","fato","facciuto"],it:"¿Qué hiciste el fin de semana?",e:"{fare} → {fatto}."},
 {t:"err",s:"Ieri mangiai una pizza con Marco.",bad:1,fix:"Ieri ho mangiato una pizza con Marco.",it:"Quieres decir «Ayer comí una pizza con Marco».",e:"En la conversación: {passato prossimo}."},
 {t:"err",s:"Ho visto a Marco al bar.",bad:2,fix:"Ho visto Marco al bar.",it:"Quieres decir «Vi a Marco en el bar».",e:"Sin «a» delante de la persona."},
 {t:"ord",ear:1,q:"«Nunca he comido tiramisú.»",w:["non","ho","mai","mangiato","il","tiramisù"],x:["sono"],a:["Non ho mai mangiato il tiramisù."]},
 {t:"rep",ask:"Hai già mangiato?",o:[["No, non ancora.","No, todavía no."],["No, ancora non mangio.","(error)"],["Sì, mangio.","Sí, como."]],e:"«todavía no» = {non ancora}."}
]);
XX("l16",[
 {t:"gap",s:"Giulia ＿ partita venerdì.",o:["è","ha","era"],it:"Giulia salió el viernes.",e:"{partire} con {essere}."},
 {t:"gap",s:"Siamo ＿ a Murano in barca.",o:["andate","andato","andata"],it:"Fuimos a Murano en barco (dos mujeres).",e:"Concordancia: {andate}."},
 {t:"err",s:"Ho andato a Firenze a luglio.",bad:0,fix:"Sono andato a Firenze a luglio.",it:"Quieres decir «Fui a Florencia en julio».",e:"{andare} con {essere}."},
 {t:"err",s:"Lucía è tornato ieri sera.",bad:2,fix:"Lucía è tornata ieri sera.",it:"Quieres decir «Lucía volvió anoche».",e:"Con {essere} el participio concuerda: {tornata}."},
 {t:"ord",q:"«Nací el uno de mayo.»",w:["sono","nato","il","primo","maggio"],x:["ho"],a:["Sono nato il primo maggio."]},
 {t:"rep",ask:"Che tempo ha fatto a Venezia?",o:[["Il primo giorno è piovuto.","El primer día llovió."],["Ha fatto Venezia.","(no tiene sentido)"],["Fa piovere.","(error)"]],e:"El tiempo en el pasado."}
]);
XX("l17",[
 {t:"gap",s:"Da piccola ＿ con i nonni.",o:["abitavo","abitabo","ho abitato"],it:"De pequeña vivía con mis abuelos.",e:"Imperfetto con {-v-}: {abitavo}."},
 {t:"gap",s:"Davanti alla casa ＿ un giardino.",o:["c'era","aveva","era"],it:"Delante de la casa había un jardín.",e:"«había» = {c'era}."},
 {t:"err",s:"Quando ero piccolo, tenevo un cane.",bad:4,fix:"Quando ero piccolo, avevo un cane.",it:"Quieres decir «Cuando era pequeño, tenía un perro».",e:"«tener» = {avere}: {avevo}."},
 {t:"err",s:"Quando avevo dieci anni, abitabo a Siviglia.",bad:4,fix:"Quando avevo dieci anni, abitavo a Siviglia.",it:"Quieres decir «Cuando tenía diez años, vivía en Sevilla».",e:"Con {v}: {abitavo}."},
 {t:"ord",ear:1,q:"«Cada verano íbamos a la playa.»",w:["ogni","estate","andavamo","al","mare"],x:["siamo"],a:["Ogni estate andavamo al mare."]},
 {t:"rep",ask:"Com'eri da bambina?",o:[["Ero molto timida.","Era muy tímida."],["Sono stata timida.","(no es una descripción)"],["Avevo timida.","(error)"]],e:"Descripción: imperfetto."}
]);
XX("l18",[
 {t:"gap",s:"Mentre ＿, è arrivato Marco.",o:["cucinavo","ho cucinato","cucino"],it:"Mientras cocinaba, llegó Marco.",e:"Fondo: imperfetto."},
 {t:"gap",s:"Che cosa è ＿?",o:["successo","passato","successa"],it:"¿Qué pasó?",e:"«pasar» (ocurrir) = {succedere}."},
 {t:"err",s:"Quando sono scesa, vidi che non avevo il portafoglio.",bad:3,fix:"Quando sono scesa, ho visto che non avevo il portafoglio.",it:"Quieres decir «Cuando bajé, vi que no tenía la cartera».",e:"El hecho: {passato prossimo} ({ho visto})."},
 {t:"err",s:"Ha fatto freddo e leggevo un libro sull'autobus.",bad:1,fix:"Faceva freddo e leggevo un libro sull'autobus.",it:"Quieres decir «Hacía frío y leía un libro en el autobús».",e:"El tiempo como fondo: {faceva}."},
 {t:"ord",q:"«De repente se fue la luz.»",w:["all'improvviso","è","andata","via","la","luce"],x:["andava"],a:["All'improvviso è andata via la luce."]},
 {t:"rep",ask:"Ieri mi è successa una cosa strana.",o:[["Davvero? Che cosa è successo?","¿De verdad? ¿Qué pasó?"],["Che cosa è passato?","(error)"],["Strana è.","(no tiene sentido)"]],e:"{Che cosa è successo?}"}
]);
XX("l19",[
 {t:"gap",s:"A Marco? ＿ piace il calcio.",o:["Gli","Le","Lo"],it:"¿A Marco? Le gusta el fútbol.",e:"A él = {gli}."},
 {t:"gap",s:"Roma è più bella ＿ Milano.",o:["di","que","come"],it:"Roma es más bonita que Milán.",e:"{più … di}."},
 {t:"err",s:"A mio fratello gli piace il vino.",bad:3,fix:"A mio fratello piace il vino.",it:"Quieres decir «A mi hermano le gusta el vino».",e:"No se repite el pronombre."},
 {t:"err",s:"Marco? Le piacciono i gatti.",bad:1,fix:"Marco? Gli piacciono i gatti.",it:"Quieres decir «¿Marco? Le gustan los gatos».",e:"{le} es solo femenino; a él = {gli}."},
 {t:"ord",ear:1,q:"«A mí tampoco.»",w:["neanche","a","me"],x:["io"],a:["Neanche a me."]},
 {t:"rep",ask:"Non mi piace il tè.",o:[["Neanche a me.","A mí tampoco."],["Anche a me.","A mí también."],["Tampoco a me.","(error)"]],e:"«a mí tampoco» = {neanche a me}."}
]);
XX("l20",[
 {t:"gap",s:"I pantaloni? ＿ compro.",o:["Li","Los","Le"],it:"¿Los pantalones? Los compro.",e:"«los» = {li}."},
 {t:"gap",s:"Che cosa stai ＿?",o:["facendo","faciendo","fando"],it:"¿Qué estás haciendo?",e:"{fare} → {facendo}."},
 {t:"err",s:"Conosci Marco? Sì, gli conosco.",bad:4,fix:"Conosci Marco? Sì, lo conosco.",it:"Quieres decir «¿Conoces a Marco? Sí, lo conozco».",e:"Complemento directo: {lo}."},
 {t:"err",s:"Marco sta dormiendo.",bad:2,fix:"Marco sta dormendo.",it:"Quieres decir «Marco está durmiendo».",e:"Gerundio sin «i»: {dormendo}."},
 {t:"ord",q:"«¿Puedo probármela?»",w:["posso","provarla?"],x:["la"],a:["Posso provarla?"]},
 {t:"rep",ask:"Posso aiutarLa?",who:"la dependienta",o:[["Grazie, sto solo guardando.","Gracias, solo estoy mirando."],["Sì, la aiuto.","Sí, la ayudo."],["Non posso.","No puedo."]],e:"«Solo estoy mirando» = {sto solo guardando}."}
]);
XX("l21",[
 {t:"gap",s:"L'anno prossimo ＿ in Italia.",o:["andrò","anderò","andarò"],it:"El año que viene iré a Italia.",e:"{andare} → {andrò}."},
 {t:"gap",s:"Quando ＿ a Roma, ti chiamo.",o:["arrivo","arrivi","arrivassi"],it:"Cuando llegue a Roma, te llamo.",e:"Después de {quando}: presente o futuro, sin subjuntivo."},
 {t:"err",s:"Domani parlarò con il professore.",bad:1,fix:"Domani parlerò con il professore.",it:"Quieres decir «Mañana hablaré con el profesor».",e:"{-are} → {-er-}: {parlerò}."},
 {t:"err",s:"Se domani venirai, andiamo al mare.",bad:2,fix:"Se domani verrai, andiamo al mare.",it:"Quieres decir «Si mañana vienes, vamos a la playa».",e:"{venire} → {verrai}."},
 {t:"ord",ear:1,q:"«Si encuentro trabajo, me quedaré en Italia.»",w:["se","trovo","lavoro,","resterò","in","Italia"],x:["trovi"],a:["Se trovo lavoro, resterò in Italia."]},
 {t:"rep",ask:"In bocca al lupo per l'esame!",o:[["Crepi!","¡Crepi!"],["Grazie mille!","¡Muchas gracias!"],["Anche a te!","¡Igualmente!"]],e:"Siempre {Crepi!}"}
]);
XX("l22",[
 {t:"gap",s:"Mi ＿ male i piedi.",o:["fanno","fa","duole"],it:"Me duelen los pies.",e:"Plural: {fanno male}."},
 {t:"gap",s:"Tu ＿ andare dal medico.",o:["dovresti","doveresti","deberesti"],it:"Deberías ir al médico.",e:"{dovere} → {dovresti}."},
 {t:"err",s:"Sono costipato, ho la tosse e il naso chiuso.",bad:1,fix:"Ho il raffreddore, ho la tosse e il naso chiuso.",it:"Quieres decir «Estoy resfriado: tengo tos y la nariz tapada».",e:"{costipato} = estreñido; «resfriado» = {ho il raffreddore}."},
 {t:"err",s:"Mi piaceria vivere in Italia.",bad:1,fix:"Mi piacerebbe vivere in Italia.",it:"Quieres decir «Me gustaría vivir en Italia».",e:"Condicional en {-ebbe}: {piacerebbe}."},
 {t:"ord",q:"«¿Podría darme algo?»",w:["potrebbe","darmi","qualcosa?"],x:["può"],a:["Potrebbe darmi qualcosa?"]},
 {t:"rep",ask:"Che cosa si sente?",who:"el médico",o:[["Mi fa male la gola.","Me duele la garganta."],["Mi duole la gola.","(se entiende, pero suena literario)"],["Sono gola.","(no tiene sentido)"]],e:"«me duele» = {mi fa male}."}
]);
XX("l23",[
 {t:"ord",ear:1,q:"«El año pasado vine a Italia.»",w:["l'anno","scorso","sono","venuta","in","Italia"],x:["ho"],a:["L'anno scorso sono venuta in Italia."]},
 {t:"gap",s:"All'inizio ＿ quasi tutto.",o:["capivo","ho capito","capisco"],it:"Al principio entendía casi todo.",e:"Situación del principio: imperfetto."},
 {t:"err",s:"Una volta mi ho perso in centro.",bad:3,fix:"Una volta mi sono perso in centro.",it:"Quieres decir «Una vez me perdí en el centro».",e:"Reflexivos con {essere}."},
 {t:"rep",ask:"Che cosa farai l'anno prossimo?",o:[["Resterò in Italia e cercherò lavoro.","Me quedaré en Italia y buscaré trabajo."],["Sono restata in Italia.","Me quedé en Italia."],["Restavo in Italia.","Me quedaba en Italia."]],e:"Planes: futuro."}
]);
XX("r3",[
 {t:"gap",s:"Quando siamo ＿, pioveva molto.",o:["arrivate","arrivato","arrivata"],it:"Cuando llegamos (dos mujeres), llovía mucho.",e:"Concordancia: {arrivate}."},
 {t:"err",s:"Le chiavi? Los ho perse.",bad:2,fix:"Le chiavi? Le ho perse.",it:"Quieres decir «¿Las llaves? Las he perdido».",e:"«las» = {le}."},
 {t:"ord",q:"«Mientras leía, sonó el teléfono.»",w:["mentre","leggevo,","è","squillato","il","telefono"],x:["ho"],a:["Mentre leggevo, è squillato il telefono."]},
 {t:"rep",ask:"Ti piacerebbe venire con noi la prossima volta?",o:[["Sì, volentieri!","¡Sí, con mucho gusto!"],["Sì, mi piaceria.","(error)"],["Sì, vado.","Sí, voy."]],e:"Aceptar: {Volentieri!}"}
]);
