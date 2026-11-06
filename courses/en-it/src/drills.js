/* ---------- Milepost exercises (English for Italians): ord, gap, err, rep ----------
   Formats in shell/exercises.js. Sentences come from the lessons whenever possible (same audio);
   «err» uses mistakes that Italian speakers really make. Checked by tools/drills_check.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"rep",ask:"Thank you!",who:"un'amica",o:[["You're welcome!","Prego!"],["Hello!","Ciao!"],["Sorry!","Scusa!"]],e:"A {thank you} si risponde {you're welcome}."},
 {t:"rep",ask:"Good morning!",who:"il commesso, alle 9",o:[["Good morning!","Buongiorno!"],["Good night!","Buonanotte!"],["Goodbye!","Arrivederci!"]],e:"Si risponde con lo stesso saluto."},
 {t:"gap",s:"A coffee, ＿ !",o:["please","sorry","welcome"],it:"Un caffè, per favore!",e:"{please} = per favore."},
 {t:"ord",q:"«Grazie, arrivederci!»",w:["thank","you","goodbye"],x:["please"],a:["Thank you, goodbye!"]}
]);
XX("l2",[
 {t:"ord",q:"«Mi chiamo Marco.»",w:["my","name's","Marco"],x:["am"],a:["My name's Marco."]},
 {t:"ord",ear:1,q:"«Sono italiano, di Roma.»",w:["I'm","Italian","from","Rome"],x:["of"],a:["I'm Italian, from Rome."]},
 {t:"gap",s:"We ＿ students.",o:["are","is","am"],it:"Siamo studenti.",e:"{we are}, {you are}, {they are}."},
 {t:"err",s:"Is from Milan.",bad:0,fix:"She's from Milan.",it:"Vuoi dire «(Lei) è di Milano».",e:"In italiano il soggetto si può togliere; in inglese no: {She's from Milan}."},
 {t:"err",s:"I'm italian.",bad:1,fix:"I'm Italian.",it:"Vuoi dire «Sono italiano».",e:"Le nazionalità si scrivono con la maiuscola: {Italian}."},
 {t:"rep",ask:"Hi! I'm Emma. What's your name?",o:[["My name's Luca.","Mi chiamo Luca."],["I'm from London.","Sono di Londra."],["Nice to meet you too.","Piacere mio."]],e:"Ti chiede il nome: {My name's…}"}
]);
XX("l3",[
 {t:"ord",q:"«Sei uno studente?»",w:["are","you","a","student"],x:["do"],a:["Are you a student?"]},
 {t:"ord",ear:1,q:"«Bene, grazie. E tu?»",w:["fine","thanks","and","you"],x:["me"],a:["Fine, thanks. And you?"]},
 {t:"gap",s:"Is she Irish? — Yes, she ＿ .",o:["is","she's","does"],it:"È irlandese? — Sì.",e:"Risposta breve affermativa senza contrazione: {Yes, she is}."},
 {t:"err",s:"I have twenty years.",bad:1,fix:"I'm twenty.",it:"Vuoi dire «Ho vent'anni».",e:"L'età si dice con {be}: {I'm twenty} (o {I'm twenty years old})."},
 {t:"rep",ask:"How are you?",who:"una collega, la mattina",o:[["Fine, thanks. And you?","Bene, grazie. E tu?"],["I'm twenty.","Ho vent'anni."],["Yes, I am.","Sì."]],e:"Risposta breve e domanda ricambiata."}
]);
XX("l4",[
 {t:"ord",q:"«Nella mia stanza c'è un letto.»",w:["there's","a","bed","in","my","room"],x:["it's"],a:["There's a bed in my room.","In my room there's a bed."]},
 {t:"gap",s:"I've got ＿ umbrella.",o:["an","a","the a"],it:"Ho un ombrello.",e:"Davanti a un suono di vocale: {an}."},
 {t:"gap",s:"There ＿ two chairs.",o:["are","is","have"],it:"Ci sono due sedie.",e:"«ci sono» = {there are}."},
 {t:"err",s:"Two news books.",bad:1,fix:"Two new books.",it:"Vuoi dire «Due libri nuovi».",e:"Gli aggettivi non prendono la -s: {new books}."},
 {t:"err",s:"The people is nice.",bad:2,fix:"The people are nice.",it:"Vuoi dire «Le persone sono simpatiche».",e:"{people} è plurale: {people are}."},
 {t:"rep",ask:"Is there a TV in your room?",o:[["No, there isn't.","No, non c'è."],["No, it isn't.","No, non è."],["No, I'm not.","No, non sono."]],e:"Si risponde con {there}: {Yes, there is} / {No, there isn't}."}
]);
XX("l5",[
 {t:"ord",q:"«Ho due fratelli.»",w:["I've","got","two","brothers"],x:["have"],a:["I've got two brothers."]},
 {t:"ord",ear:1,q:"«Questa è la macchina di mia madre.»",w:["this","is","my","mother's","car"],x:["of"],a:["This is my mother's car."]},
 {t:"gap",s:"Anna and ＿ brother.",o:["her","his","she"],it:"Anna e suo fratello.",e:"Il possessore è Anna: {her}."},
 {t:"err",s:"Paul and her wife.",bad:2,fix:"Paul and his wife.",it:"Vuoi dire «Paul e sua moglie».",e:"Il possessore è un uomo: {his}, anche se la moglie è una donna."},
 {t:"err",s:"The sister of Marco is a teacher.",bad:2,fix:"Marco's sister is a teacher.",it:"Vuoi dire «La sorella di Marco è un'insegnante».",e:"Per il possesso: {Marco's sister}."},
 {t:"rep",ask:"Have you got any children?",o:[["Yes, I have. Two daughters.","Sì. Due figlie."],["Yes, I've got.","Sì, ho."],["Yes, I am.","Sì, sono."]],e:"Risposta breve: {Yes, I have} / {No, I haven't}."}
]);
XX("l6",[
 {t:"ord",q:"«Sono le sei e mezza.»",w:["it's","half","past","six"],x:["are"],a:["It's half past six."]},
 {t:"ord",ear:1,q:"«Ci vediamo venerdì alle otto!»",w:["see","you","on","Friday","at","eight"],x:["in"],a:["See you on Friday at eight!"]},
 {t:"gap",s:"The museum is closed ＿ Mondays.",o:["on","in","at"],it:"Il museo è chiuso il lunedì.",e:"Con i giorni: {on}."},
 {t:"err",s:"It's seven and half.",bad:2,fix:"It's half past seven.",it:"Vuoi dire «Sono le sette e mezza».",e:"In inglese: {half past seven}."},
 {t:"rep",ask:"Excuse me, what time is it?",o:[["It's quarter to ten.","Sono le dieci meno un quarto."],["It's Monday.","È lunedì."],["They are ten.","Sono dieci."]],e:"Per l'ora: {It's…}"}
]);
XX("l7",[
 {t:"ord",q:"«Lavora in un ospedale.» (lei)",w:["she","works","in","a","hospital"],x:["work"],a:["She works in a hospital."]},
 {t:"ord",ear:1,q:"«Non lavoro il sabato.»",w:["I","don't","work","on","Saturdays"],x:["doesn't"],a:["I don't work on Saturdays."]},
 {t:"gap",s:"He ＿ English at a school.",o:["teaches","teach","teachs"],it:"Insegna inglese in una scuola.",e:"Con {he}: {teaches}."},
 {t:"err",s:"She doesn't speaks French.",bad:2,fix:"She doesn't speak French.",it:"Vuoi dire «Non parla francese».",e:"Dopo {doesn't} il verbo è senza -s."},
 {t:"err",s:"I'm nurse.",bad:1,fix:"I'm a nurse.",it:"Vuoi dire «Sono infermiere».",e:"Con le professioni ci vuole {a} / {an}."},
 {t:"rep",ask:"What do you do?",o:[["I'm an engineer.","Sono ingegnere."],["I'm watching TV.","Sto guardando la TV."],["I do my homework.","Faccio i compiti."]],e:"{What do you do?} chiede il lavoro."}
]);
XX("l8",[
 {t:"ord",q:"«Posso avere un cappuccino, per favore?»",w:["can","I","have","a","cappuccino","please"],x:["want"],a:["Can I have a cappuccino, please?"]},
 {t:"ord",ear:1,q:"«Posso pagare con la carta?»",w:["can","I","pay","by","card"],x:["with"],a:["Can I pay by card?"]},
 {t:"gap",s:"How much ＿ it?",o:["is","costs","are"],it:"Quanto costa?",e:"{How much is it?} / {How much are they?}"},
 {t:"err",s:"I want a coffee.",bad:1,fix:"Can I have a coffee, please?",it:"Al bar, al cameriere.",e:"{I want} suona brusco: {Can I have…, please?}"},
 {t:"rep",ask:"Anything else?",who:"la barista",o:[["No, that's all, thanks.","No, è tutto, grazie."],["Yes, I'm fine.","Sì, sto bene."],["You're welcome.","Prego."]],e:"{That's all} = è tutto."}
]);
XX("r1",[
 {t:"err",s:"My brother have got a car.",bad:2,fix:"My brother has got a car.",it:"Vuoi dire «Mio fratello ha una macchina».",e:"Con {he}: {has got}."},
 {t:"gap",s:"There ＿ a sofa in the living room.",o:["'s","are","it's"],it:"In soggiorno c'è un divano.",e:"«c'è» = {there's}."}
]);
XX("l9",[
 {t:"ord",q:"«Dove abiti?»",w:["where","do","you","live"],x:["are"],a:["Where do you live?"]},
 {t:"ord",ear:1,q:"«Con chi abiti?»",w:["who","do","you","live","with"],x:["are"],a:["Who do you live with?"]},
 {t:"gap",s:"＿ your brother work in a bank?",o:["Does","Do","Is"],it:"Tuo fratello lavora in una banca?",e:"Con {he}: {Does…?}"},
 {t:"err",s:"Where you live?",bad:1,fix:"Where do you live?",it:"Vuoi dire «Dove abiti?».",e:"Ci vuole l'aiutante: {Where do you live?}"},
 {t:"err",s:"Does she likes music?",bad:2,fix:"Does she like music?",it:"Vuoi dire «Le piace la musica?».",e:"Dopo {does} il verbo è senza -s."},
 {t:"rep",ask:"Do you like tea?",o:[["Yes, I do.","Sì."],["Yes, I like.","Sì, mi piace."],["Yes, I am.","Sì, sono."]],e:"Si ripete l'aiutante: {Yes, I do}."}
]);
XX("l10",[
 {t:"ord",q:"«Di solito mi alzo alle sette.»",w:["I","usually","get","up","at","seven"],x:["in"],a:["I usually get up at seven."]},
 {t:"ord",ear:1,q:"«Non sono mai in ritardo.»",w:["I'm","never","late"],x:["don't"],a:["I'm never late."]},
 {t:"gap",s:"We have dinner ＿ eight o'clock.",o:["at","in","on"],it:"Ceniamo alle otto.",e:"Con le ore: {at}."},
 {t:"err",s:"I go always to work by bus.",bad:2,fix:"I always go to work by bus.",it:"Vuoi dire «Vado sempre al lavoro in autobus».",e:"L'avverbio va prima del verbo: {I always go}."},
 {t:"err",s:"I make breakfast at seven.",bad:1,fix:"I have breakfast at seven.",it:"Vuoi dire «Faccio colazione alle sette».",e:"«Fare colazione» = {have breakfast}."},
 {t:"rep",ask:"How often do you go to the gym?",o:[["Twice a week.","Due volte alla settimana."],["At seven o'clock.","Alle sette."],["By bus.","In autobus."]],e:"{How often?} chiede la frequenza."}
]);
XX("l11",[
 {t:"ord",q:"«Mi piace leggere.»",w:["I","like","reading"],x:["read"],a:["I like reading."]},
 {t:"ord",ear:1,q:"«So suonare la chitarra.»",w:["I","can","play","the","guitar"],x:["to"],a:["I can play the guitar."]},
 {t:"gap",s:"They go ＿ in the park.",o:["running","run","to run"],it:"Vanno a correre nel parco.",e:"{go} + attività in {-ing}."},
 {t:"err",s:"She cans swim.",bad:1,fix:"She can swim.",it:"Vuoi dire «Sa nuotare».",e:"{can} non prende la -s."},
 {t:"err",s:"I like swim in the sea.",bad:2,fix:"I like swimming in the sea.",it:"Vuoi dire «Mi piace nuotare nel mare».",e:"Dopo {like} la forma in {-ing}."},
 {t:"rep",ask:"Can you play tennis?",o:[["Yes, I can, but not very well.","Sì, ma non molto bene."],["Yes, I do.","Sì."],["Yes, I like.","Sì, mi piace."]],e:"Con {can}: {Yes, I can} / {No, I can't}."}
]);
XX("l12",[
 {t:"ord",q:"«Che cosa stai facendo?»",w:["what","are","you","doing"],x:["do"],a:["What are you doing?"]},
 {t:"ord",ear:1,q:"«Sto camminando nel parco.»",w:["I'm","walking","in","the","park"],x:["walk"],a:["I'm walking in the park."]},
 {t:"gap",s:"Look! It's ＿ .",o:["raining","rains","rain"],it:"Guarda! Piove.",e:"Adesso: {It's raining}."},
 {t:"err",s:"What do you do now?",bad:1,fix:"What are you doing now?",it:"Vuoi dire «Che cosa stai facendo adesso?».",e:"Per adesso: {present continuous}."},
 {t:"err",s:"I'm knowing the answer.",bad:1,fix:"I know the answer.",it:"Vuoi dire «So la risposta».",e:"{know} è un verbo di stato: niente {-ing}."},
 {t:"rep",ask:"What's the weather like?",o:[["It's sunny and warm.","C'è il sole e fa caldo."],["It's a coat.","È un cappotto."],["I like it.","Mi piace."]],e:"Il tempo con {it}: {It's sunny}."}
]);
XX("l13",[
 {t:"ord",q:"«Mi scusi, come arrivo alla stazione?»",w:["excuse","me","how","do","I","get","to","the","station"],x:["arrive"],a:["Excuse me, how do I get to the station?"]},
 {t:"ord",ear:1,q:"«Giri a sinistra al ponte.»",w:["turn","left","at","the","bridge"],x:["on"],a:["Turn left at the bridge."]},
 {t:"gap",s:"The bank is ＿ the café and the church.",o:["between","opposite","next"],it:"La banca è tra il bar e la chiesa.",e:"«tra» = {between}."},
 {t:"err",s:"The hotel is in front of the station, on the other side of the road.",bad:3,fix:"The hotel is opposite the station, on the other side of the road.",it:"Vuoi dire «L'albergo è di fronte alla stazione, dall'altra parte della strada».",e:"Dall'altra parte: {opposite}."},
 {t:"rep",ask:"Excuse me, is there a chemist's near here?",o:[["Yes, there's one next to the bank.","Sì, ce n'è una accanto alla banca."],["Yes, it's a chemist's.","Sì, è una farmacia."],["No, I'm not.","No, non sono."]],e:"{there's one} = ce n'è uno / una."}
]);
XX("l14",[
 {t:"ord",q:"«Ci servono dei pomodori.»",w:["we","need","some","tomatoes"],x:["any"],a:["We need some tomatoes."]},
 {t:"ord",ear:1,q:"«Potremmo avere il conto, per favore?»",w:["could","we","have","the","bill","please"],x:["account"],a:["Could we have the bill, please?"]},
 {t:"gap",s:"How ＿ apples do you want?",o:["many","much","more"],it:"Quante mele vuoi?",e:"Numerabili: {how many}."},
 {t:"err",s:"Can I have some informations?",bad:4,fix:"Can I have some information?",it:"Vuoi dire «Posso avere delle informazioni?».",e:"{information} non ha plurale."},
 {t:"err",s:"I don't want some dessert.",bad:3,fix:"I don't want any dessert.",it:"Vuoi dire «Non voglio il dolce».",e:"Nelle negazioni: {any}."},
 {t:"rep",ask:"Are you ready to order?",who:"il cameriere",o:[["Yes, I'll have the fish, please.","Sì, prendo il pesce, per favore."],["Yes, I'm ready to go.","Sì, sono pronto ad andare."],["No, I don't eat.","No, non mangio."]],e:"Per ordinare: {I'll have…}"}
]);
XX("r2",[
 {t:"err",s:"I usually walk, but today I take the bus.",bad:6,fix:"I usually walk, but today I'm taking the bus.",it:"Vuoi dire «Di solito vado a piedi, ma oggi prendo l'autobus».",e:"Oggi, adesso: {present continuous}."},
 {t:"gap",s:"How much ＿ do you take?",o:["sugar","sugars","apples"],it:"Quanto zucchero prendi?",e:"{How much} + non numerabile."}
]);
XX("l15",[
 {t:"ord",q:"«Com'è andato il fine settimana?»",w:["how","was","your","weekend"],x:["did"],a:["How was your weekend?"]},
 {t:"ord",ear:1,q:"«Abbiamo passeggiato sulla spiaggia.»",w:["we","walked","on","the","beach"],x:["walk"],a:["We walked on the beach."]},
 {t:"gap",s:"They ＿ tired.",o:["were","was","are been"],it:"Erano stanchi.",e:"{they were}."},
 {t:"err",s:"I visited London the last week.",bad:3,fix:"I visited London last week.",it:"Vuoi dire «Sono stato a Londra la settimana scorsa».",e:"{last week} senza articolo."},
 {t:"err",s:"We moved to Leeds ago two years.",bad:4,fix:"We moved to Leeds two years ago.",it:"Vuoi dire «Ci siamo trasferiti a Leeds due anni fa».",e:"{ago} va dopo il periodo."},
 {t:"rep",ask:"Where were you on Saturday?",o:[["I was at my sister's.","Ero da mia sorella."],["I'm at home.","Sono a casa."],["I go to the cinema.","Vado al cinema."]],e:"Al passato: {I was…}"}
]);
XX("l16",[
 {t:"ord",q:"«Hai fatto una bella vacanza?»",w:["did","you","have","a","good","holiday"],x:["had"],a:["Did you have a good holiday?"]},
 {t:"ord",ear:1,q:"«Non abbiamo noleggiato una macchina.»",w:["we","didn't","rent","a","car"],x:["rented"],a:["We didn't rent a car."]},
 {t:"gap",s:"We ＿ to Ireland in August.",o:["went","goed","gone"],it:"Ad agosto siamo andati in Irlanda.",e:"{go} → {went}."},
 {t:"err",s:"Did you saw the castle?",bad:2,fix:"Did you see the castle?",it:"Vuoi dire «Hai visto il castello?».",e:"Dopo {did} la forma base: {see}."},
 {t:"err",s:"My birthday is on the three of May.",bad:5,fix:"My birthday is on the third of May.",it:"Vuoi dire «Il mio compleanno è il 3 maggio».",e:"Le date vogliono l'ordinale: {third}."},
 {t:"rep",ask:"What did you see in Dublin?",o:[["We saw the castle and a lot of pubs.","Abbiamo visto il castello e tanti pub."],["We see the castle.","Vediamo il castello."],["Yes, we did.","Sì."]],e:"Si risponde al passato: {We saw…}"}
]);
XX("l17",[
 {t:"ord",q:"«Sono nato a Napoli.»",w:["I","was","born","in","Naples"],x:["am"],a:["I was born in Naples."]},
 {t:"ord",ear:1,q:"«Giocavamo per strada.»",w:["we","used","to","play","in","the","street"],x:["were"],a:["We used to play in the street."]},
 {t:"gap",s:"I ＿ read when I was four.",o:["could","can","used"],it:"Sapevo leggere a quattro anni.",e:"Passato di {can}: {could}."},
 {t:"err",s:"I'm born in 1990.",bad:0,fix:"I was born in 1990.",it:"Vuoi dire «Sono nato nel 1990».",e:"«nascere» è al passato: {I was born}."},
 {t:"err",s:"I use to get up at seven every day.",bad:1,fix:"I usually get up at seven every day.",it:"Parli di un'abitudine di oggi.",e:"{used to} è solo passato; per oggi {usually}."},
 {t:"rep",ask:"Did you use to play football?",o:[["Yes, I did. Every Sunday.","Sì. Ogni domenica."],["Yes, I use.","Sì, uso."],["Yes, I play now.","Sì, gioco adesso."]],e:"Risposta breve: {Yes, I did} / {No, I didn't}."}
]);
XX("l18",[
 {t:"ord",q:"«Pioveva.»",w:["it","was","raining"],x:["rained"],a:["It was raining."]},
 {t:"ord",ear:1,q:"«Stava leggendo quando sono arrivato.»",w:["she","was","reading","when","I","arrived"],x:["arriving"],a:["She was reading when I arrived."]},
 {t:"gap",s:"While we ＿ dinner, the phone rang.",o:["were having","had","have"],it:"Mentre cenavamo, ha squillato il telefono.",e:"L'azione lunga: {past continuous}."},
 {t:"err",s:"When I walked in the park, I was seeing an old friend.",bad:8,fix:"When I was walking in the park, I saw an old friend.",it:"Vuoi dire «Mentre camminavo nel parco, ho visto un vecchio amico».",e:"Sfondo al {past continuous}, fatto al {past simple}."},
 {t:"rep",ask:"What happened to your arm?",o:[["I fell off my bike.","Sono caduto dalla bici."],["I'm falling.","Sto cadendo."],["It happens.","Succede."]],e:"Un fatto finito: {past simple}."}
]);
XX("l19",[
 {t:"ord",q:"«Londra è più grande di Edimburgo.»",w:["London","is","bigger","than","Edinburgh"],x:["more"],a:["London is bigger than Edinburgh."]},
 {t:"ord",ear:1,q:"«È la città più bella della Gran Bretagna.»",w:["it's","the","most","beautiful","city","in","Britain"],x:["of"],a:["It's the most beautiful city in Britain."]},
 {t:"gap",s:"My English is ＿ than last year.",o:["better","gooder","more good"],it:"Il mio inglese è migliore dell'anno scorso.",e:"{good} → {better}."},
 {t:"err",s:"Rome is more hot than London.",bad:2,fix:"Rome is hotter than London.",it:"Vuoi dire «Roma è più calda di Londra».",e:"Aggettivo corto: {hotter}, non {more hot}."},
 {t:"err",s:"The train is cheaper that the plane.",bad:4,fix:"The train is cheaper than the plane.",it:"Vuoi dire «Il treno costa meno dell'aereo».",e:"«di» nei confronti = {than}."},
 {t:"rep",ask:"Is your flat as big as mine?",o:[["No, it isn't as big as yours.","No, non è grande come il tuo."],["Yes, it's the bigger.","Sì, è il più grande."],["No, it's more small.","No, è più piccolo."]],e:"{not as… as} = meno… di."}
]);
XX("l20",[
 {t:"ord",q:"«Sei mai stato in Scozia?»",w:["have","you","ever","been","to","Scotland"],x:["in"],a:["Have you ever been to Scotland?"]},
 {t:"ord",ear:1,q:"«Abito qui da cinque anni.»",w:["I've","lived","here","for","five","years"],x:["since"],a:["I've lived here for five years."]},
 {t:"gap",s:"She's worked here ＿ 2021.",o:["since","for","from"],it:"Lavora qui dal 2021.",e:"Punto di partenza: {since}."},
 {t:"err",s:"I have been in London last year.",bad:1,fix:"I went to London last year.",it:"Vuoi dire «Sono stato a Londra l'anno scorso».",e:"Con {last year} si usa il {past simple}."},
 {t:"err",s:"I live here since three years.",bad:1,fix:"I've lived here for three years.",it:"Vuoi dire «Abito qui da tre anni».",e:"Fino ad adesso: {present perfect} + {for}."},
 {t:"rep",ask:"Have you finished yet?",o:[["Not yet.","Non ancora."],["No, I didn't.","No, non l'ho fatto."],["Yes, yesterday.","Sì, ieri."]],e:"{yet} nelle domande; risposta {Not yet} o {Yes, I have}."}
]);
XX("l21",[
 {t:"ord",q:"«Che cosa farai quest'estate?»",w:["what","are","you","going","to","do","this","summer"],x:["will"],a:["What are you going to do this summer?"]},
 {t:"ord",ear:1,q:"«Se piove, restiamo a casa.»",w:["if","it","rains","we'll","stay","at","home"],x:["will"],a:["If it rains, we'll stay at home."]},
 {t:"gap",s:"The bags are heavy. — I ＿ help you!",o:["'ll","'m going","help"],it:"Le borse sono pesanti. — Ti aiuto io!",e:"Offerta sul momento: {I'll}."},
 {t:"err",s:"If it will rain, we'll stay at home.",bad:2,fix:"If it rains, we'll stay at home.",it:"Vuoi dire «Se piove, restiamo a casa».",e:"Dopo {if} il presente."},
 {t:"err",s:"Tomorrow I go to the dentist at ten.",bad:2,fix:"Tomorrow I'm going to the dentist at ten.",it:"Hai già l'appuntamento.",e:"Appuntamento fissato: {present continuous}."},
 {t:"rep",ask:"What are you doing tomorrow evening?",o:[["I'm meeting Tom at the cinema.","Vedo Tom al cinema."],["I meet Tom yesterday.","Ho visto Tom ieri."],["I'm liking films.","Mi piacciono i film."]],e:"Programma fissato: {I'm meeting…}"}
]);
XX("l22",[
 {t:"ord",q:"«Dovresti stare a letto.»",w:["you","should","stay","in","bed"],x:["to"],a:["You should stay in bed."]},
 {t:"ord",ear:1,q:"«Ho mal di gola.»",w:["I've","got","a","sore","throat"],x:["have"],a:["I've got a sore throat."]},
 {t:"gap",s:"You ＿ smoke here. It's forbidden.",o:["mustn't","don't have to","shouldn't to"],it:"Qui è vietato fumare.",e:"Divieto: {mustn't}."},
 {t:"err",s:"You don't have to smoke in the hospital.",bad:1,fix:"You mustn't smoke in the hospital.",it:"Vuoi dire «In ospedale è vietato fumare».",e:"Divieto: {mustn't}. {don't have to} = non è necessario."},
 {t:"err",s:"Yesterday I must go to the doctor.",bad:2,fix:"Yesterday I had to go to the doctor.",it:"Vuoi dire «Ieri sono dovuto andare dal medico».",e:"Al passato: {had to}."},
 {t:"rep",ask:"What's the matter?",who:"il medico",o:[["I've got a headache.","Ho mal di testa."],["It's a cold day.","È una giornata fredda."],["I'm a nurse.","Sono infermiere."]],e:"Si risponde con il disturbo: {I've got…}"}
]);
XX("l23",[
 {t:"ord",q:"«È l'amica che mi ha aiutato.»",w:["she's","the","friend","who","helped","me"],x:["which"],a:["She's the friend who helped me."]},
 {t:"ord",ear:1,q:"«Mi manca la mia famiglia.»",w:["I","miss","my","family"],x:["me"],a:["I miss my family."]},
 {t:"gap",s:"This is the town ＿ I was born.",o:["where","which","who"],it:"Questa è la città dove sono nato.",e:"Per i luoghi: {where}."},
 {t:"err",s:"A company who makes video games.",bad:2,fix:"A company that makes video games.",it:"Vuoi dire «Un'azienda che fa videogiochi».",e:"Per le cose: {that} o {which}, non {who}."},
 {t:"rep",ask:"Do you miss Italy?",o:[["Yes, I miss my family a lot.","Sì, mi manca molto la mia famiglia."],["Yes, Italy misses me.","Sì, l'Italia mi manca."],["No, I'm not missing.","No, non manco."]],e:"Chi sente la mancanza è il soggetto: {I miss…}"}
]);
XX("r3",[
 {t:"err",s:"I've seen that film yesterday.",bad:1,fix:"I saw that film yesterday.",it:"Vuoi dire «Ho visto quel film ieri».",e:"Con {yesterday}: {past simple}."},
 {t:"gap",s:"You don't ＿ to book. It's free.",o:["have","must","should"],it:"Non è necessario prenotare: è gratis.",e:"{don't have to} = non è necessario."}
]);
