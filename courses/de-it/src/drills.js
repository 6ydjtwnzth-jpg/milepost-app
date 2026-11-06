/* ---------- Milepost exercises (German for Italians): ord, gap, err, rep ----------
   Formats in shell/exercises.js. Sentences come from the lessons whenever possible (same audio);
   «err» uses mistakes that Italian speakers really make. Checked by tools/drills_check.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"rep",ask:"Danke schön!",who:"un'amica",o:[["Bitte schön!","Prego!"],["Hallo!","Ciao!"],["Tschüss!","Ciao! (andando via)"]],e:"A {danke} si risponde {bitte}."},
 {t:"rep",ask:"Guten Morgen!",who:"il barista, alle 8",o:[["Guten Morgen!","Buongiorno!"],["Gute Nacht!","Buonanotte!"],["Bis morgen!","A domani!"]],e:"Si risponde con lo stesso saluto."},
 {t:"gap",s:"Einen Kaffee, ＿ .",o:["bitte","danke","tschüss"],it:"Un caffè, per favore.",e:"{bitte} = per favore."},
 {t:"ord",q:"«Grazie mille, arrivederci!»",w:["danke","schön","auf","Wiedersehen"],x:["bitte"],a:["Danke schön, auf Wiedersehen!"]},
 {t:"err",s:"Ein kaffee, bitte.",bad:1,fix:"Ein Kaffee, bitte.",it:"Vuoi dire «Un caffè, per favore».",e:"I nomi hanno sempre la maiuscola: {Kaffee}."}
]);
XX("l2",[
 {t:"ord",q:"«Mi chiamo Luca.»",w:["ich","heiße","Luca"],x:["bin"],a:["Ich heiße Luca."]},
 {t:"ord",ear:1,q:"«Vengo dall'Italia, da Roma.»",w:["ich","komme","aus","Italien","aus","Rom"],x:["von"],a:["Ich komme aus Italien, aus Rom."]},
 {t:"gap",s:"Wir ＿ Studenten.",o:["sind","seid","ist"],it:"Siamo studenti.",e:"{sein}: {wir sind}."},
 {t:"err",s:"Bin Luca.",bad:0,fix:"Ich bin Luca.",it:"Vuoi dire «Sono Luca».",e:"In tedesco il soggetto è obbligatorio: {Ich bin Luca}."},
 {t:"err",s:"Ich bin ein Student.",bad:2,fix:"Ich bin Student.",it:"Vuoi dire «Sono studente».",e:"Con professioni e stato di studente niente articolo."},
 {t:"rep",ask:"Hallo! Ich bin Anna. Wie heißt du?",o:[["Ich heiße Luca.","Mi chiamo Luca."],["Ich komme aus Rom.","Vengo da Roma."],["Sehr gut, danke.","Molto bene, grazie."]],e:"Ti chiede il nome: {Ich heiße…}"}
]);
XX("l3",[
 {t:"ord",q:"«Come sta, signora Weber?»",w:["wie","geht","es","Ihnen","Frau","Weber"],x:["dir"],a:["Wie geht es Ihnen, Frau Weber?"]},
 {t:"ord",ear:1,q:"«Ho diciannove anni.»",w:["ich","bin","neunzehn"],x:["habe"],a:["Ich bin neunzehn."]},
 {t:"gap",s:"Wie alt ＿ du?",o:["bist","hast","bin"],it:"Quanti anni hai?",e:"L'età con {sein}."},
 {t:"err",s:"Ich habe zwanzig Jahre.",bad:1,fix:"Ich bin zwanzig Jahre alt.",it:"Vuoi dire «Ho vent'anni».",e:"L'età si dice con {sein}: {Ich bin zwanzig}."},
 {t:"err",s:"Er ist zwanzigeins.",bad:2,fix:"Er ist einundzwanzig.",it:"Vuoi dire «Ha ventun anni».",e:"Prima l'unità: {einundzwanzig}."},
 {t:"rep",ask:"Wie geht's dir?",who:"un collega, la mattina",o:[["Gut, danke. Und dir?","Bene, grazie. E tu?"],["Ich bin zwanzig.","Ho vent'anni."],["Ich heiße Tom.","Mi chiamo Tom."]],e:"Rispondi e ricambia la domanda."}
]);
XX("l4",[
 {t:"ord",q:"«Questo è il soggiorno.»",w:["das","ist","das","Wohnzimmer"],x:["der"],a:["Das ist das Wohnzimmer."]},
 {t:"gap",s:"Das ist ＿ Küche.",o:["die","der","das"],it:"Questa è la cucina.",e:"{Küche} è femminile: {die}."},
 {t:"gap",s:"Das ist ＿ Sofa, das ist ein Bett.",o:["kein","nicht","nein"],it:"Non è un divano, è un letto.",e:"Con un nome: {kein}."},
 {t:"err",s:"Die Mädchen heißt Lena.",bad:0,fix:"Das Mädchen heißt Lena.",it:"Vuoi dire «La ragazza si chiama Lena».",e:"{Mädchen} è neutro: {das Mädchen}."},
 {t:"err",s:"Hier sind zwei Tischs.",bad:3,fix:"Hier sind zwei Tische.",it:"Vuoi dire «Qui ci sono due tavoli».",e:"Il plurale di {Tisch} è {Tische}."},
 {t:"rep",ask:"Ist das ein Sofa?",o:[["Nein, das ist ein Bett.","No, è un letto."],["Nein, das ist nicht Sofa.","No, non è divano."],["Ja, das ist eine Sofa.","Sì, è una divano."]],e:"{das Sofa} → {ein Sofa}, {kein Sofa}."}
]);
XX("l5",[
 {t:"ord",q:"«Ho un fratello.»",w:["ich","habe","einen","Bruder"],x:["ein"],a:["Ich habe einen Bruder."]},
 {t:"ord",ear:1,q:"«Questi sono i miei genitori.»",w:["das","sind","meine","Eltern"],x:["mein"],a:["Das sind meine Eltern."]},
 {t:"gap",s:"Anna und ＿ Bruder wohnen in Köln.",o:["ihr","sein","ihre"],it:"Anna e suo fratello abitano a Colonia.",e:"Possessore donna: {ihr}; {Bruder} maschile: senza {-e}."},
 {t:"err",s:"Ich habe ein Hund.",bad:2,fix:"Ich habe einen Hund.",it:"Vuoi dire «Ho un cane».",e:"Maschile all'accusativo: {einen}."},
 {t:"err",s:"Paul und ihre Schwester.",bad:2,fix:"Paul und seine Schwester.",it:"Vuoi dire «Paul e sua sorella».",e:"Il possessore è un uomo: {sein}, {seine}."},
 {t:"rep",ask:"Hast du Kinder?",o:[["Ja, ich habe eine Tochter.","Sì, ho una figlia."],["Ja, ich bin eine Tochter.","Sì, sono una figlia."],["Ja, es gibt Kinder.","Sì, ci sono bambini."]],e:"Con {haben}: {Ja, ich habe…} / {Nein, ich habe keine Kinder}."}
]);
XX("l6",[
 {t:"ord",q:"«Sono le cinque e un quarto.»",w:["es","ist","Viertel","nach","fünf"],x:["vor"],a:["Es ist Viertel nach fünf."]},
 {t:"ord",ear:1,q:"«Il sabato la banca è chiusa.»",w:["am","Samstag","ist","die","Bank","zu"],x:["um"],a:["Am Samstag ist die Bank zu."]},
 {t:"gap",s:"Der Kurs beginnt ＿ acht Uhr.",o:["um","am","im"],it:"Il corso comincia alle otto.",e:"Con l'ora: {um}."},
 {t:"err",s:"Es ist halb drei: Es ist 3:30.",bad:4,fix:"Es ist halb drei: Es ist 2:30.",it:"Vuoi dire «Sono le due e mezza».",e:"{halb drei} = mezz'ora prima delle tre: 2:30."},
 {t:"err",s:"Wir kommen um Montag.",bad:2,fix:"Wir kommen am Montag.",it:"Vuoi dire «Veniamo lunedì».",e:"Con i giorni: {am}."},
 {t:"rep",ask:"Wie spät ist es?",o:[["Es ist halb zehn.","Sono le nove e mezza."],["Es ist Montag.","È lunedì."],["Um zehn Uhr.","Alle dieci."]],e:"La risposta comincia con {Es ist…}"}
]);
XX("l7",[
 {t:"ord",q:"«Nel fine settimana lavoro.»",w:["am","Wochenende","arbeite","ich"],x:["bin"],a:["Am Wochenende arbeite ich."]},
 {t:"ord",ear:1,q:"«A casa non cucino.»",w:["zu","Hause","koche","ich","nicht"],x:["kein"],a:["Zu Hause koche ich nicht."]},
 {t:"gap",s:"Er ＿ in Hamburg.",o:["arbeitet","arbeitt","arbeiten"],it:"Lavora ad Amburgo.",e:"Radice in {-t}: {arbeitet}."},
 {t:"err",s:"Heute ich arbeite nicht.",bad:1,fix:"Heute arbeite ich nicht.",it:"Vuoi dire «Oggi non lavoro».",e:"Il verbo al secondo posto: {Heute arbeite ich}."},
 {t:"err",s:"Ich habe nicht ein Auto.",bad:2,fix:"Ich habe kein Auto.",it:"Vuoi dire «Non ho una macchina».",e:"Un nome con {ein}: {kein}."},
 {t:"rep",ask:"Was machst du beruflich?",o:[["Ich bin Lehrerin.","Sono insegnante."],["Ich heiße Anna.","Mi chiamo Anna."],["Ich wohne in Rom.","Abito a Roma."]],e:"{Was machst du beruflich?} chiede il lavoro."}
]);
XX("l8",[
 {t:"ord",q:"«Vorrei un cappuccino.»",w:["ich","hätte","gern","einen","Cappuccino"],x:["ein"],a:["Ich hätte gern einen Cappuccino."]},
 {t:"ord",ear:1,q:"«Insieme o separati?»",w:["zusammen","oder","getrennt"],x:["und"],a:["Zusammen oder getrennt?"]},
 {t:"gap",s:"Ich nehme ＿ Apfelkuchen.",o:["den","der","dem"],it:"Prendo la torta di mele.",e:"Maschile all'accusativo: {den}."},
 {t:"err",s:"Ich möchte ein Kaffee.",bad:2,fix:"Ich möchte einen Kaffee.",it:"Vuoi dire «Vorrei un caffè».",e:"{Kaffee} è maschile: {einen}."},
 {t:"err",s:"Ich habe gern einen Tee.",bad:1,fix:"Ich hätte gern einen Tee.",it:"Vuoi dire «Vorrei un tè».",e:"«vorrei» = {ich hätte gern}."},
 {t:"rep",ask:"Was möchten Sie?",who:"la cameriera",o:[["Einen Tee, bitte.","Un tè, per favore."],["Das macht drei Euro.","Sono tre euro."],["Bitte schön.","Prego."]],e:"Ti chiede che cosa vuoi: ordina."}
]);
XX("r1",[
 {t:"gap",s:"Meine Schwester ist Ärztin und ＿ zwei Kinder.",o:["hat","ist","habt"],it:"Mia sorella è medico e ha due figli.",e:"{sie hat}."},
 {t:"err",s:"Ich bin dreizig.",bad:2,fix:"Ich bin dreißig.",it:"Vuoi dire «Ho trent'anni».",e:"30 = {dreißig}."},
 {t:"ord",q:"«Il lunedì non lavoro.»",w:["montags","arbeite","ich","nicht"],x:["kein"],a:["Montags arbeite ich nicht."]}
]);
XX("l9",[
 {t:"ord",q:"«Dove vai?» (con un mezzo)",w:["wohin","fährst","du"],x:["wo"],a:["Wohin fährst du?"]},
 {t:"ord",ear:1,q:"«Parli tedesco?»",w:["sprichst","du","Deutsch"],x:["sprechst"],a:["Sprichst du Deutsch?"]},
 {t:"gap",s:"Was ＿ du gern? (lesen)",o:["liest","lest","lesst"],it:"Che cosa ti piace leggere?",e:"e → ie: {du liest}."},
 {t:"err",s:"Wer wohnst du?",bad:0,fix:"Wo wohnst du?",it:"Vuoi dire «Dove abiti?».",e:"{wer} = chi; {wo} = dove."},
 {t:"err",s:"Er fahrt nach Wien.",bad:1,fix:"Er fährt nach Wien.",it:"Vuoi dire «Va a Vienna».",e:"a → ä: {er fährt}."},
 {t:"rep",ask:"Wie bitte?",o:[["Ich spreche langsamer.","Parlo più piano."],["Bitte schön.","Prego."],["Danke, gut.","Bene, grazie."]],e:"L'altro non ha capito: ripeti più piano."}
]);
XX("l10",[
 {t:"ord",q:"«Mi alzo alle sette.»",w:["ich","stehe","um","sieben","auf"],x:["aufstehe"],a:["Ich stehe um sieben auf."]},
 {t:"ord",ear:1,q:"«Telefono a mia madre.»",w:["ich","rufe","meine","Mutter","an"],x:["anrufe"],a:["Ich rufe meine Mutter an."]},
 {t:"gap",s:"Der Film fängt um acht ＿ .",o:["an","auf","ab"],it:"Il film comincia alle otto.",e:"{anfangen}: {fängt… an}."},
 {t:"err",s:"Ich aufstehe um sieben.",bad:1,fix:"Ich stehe um sieben auf.",it:"Vuoi dire «Mi alzo alle sette».",e:"Il prefisso separabile va in fondo."},
 {t:"err",s:"Gehst du nie aus? — Ja, manchmal!",bad:5,fix:"Gehst du nie aus? — Doch, manchmal!",it:"Vuoi dire «Non esci mai? — Sì, a volte!».",e:"Sì a una domanda negativa: {doch}."},
 {t:"rep",ask:"Wann stehst du auf?",o:[["Um halb sieben.","Alle sei e mezza."],["Ich stehe auf.","Mi alzo."],["Am Abend.","La sera."]],e:"Ti chiede l'ora."}
]);
XX("l11",[
 {t:"ord",q:"«Mi piace molto ballare.»",w:["ich","tanze","sehr","gern"],x:["mag"],a:["Ich tanze sehr gern."]},
 {t:"ord",ear:1,q:"«Sai suonare la chitarra?»",w:["kannst","du","Gitarre","spielen"],x:["die"],a:["Kannst du Gitarre spielen?"]},
 {t:"gap",s:"Ich höre ＿ Jazz als Pop.",o:["lieber","gerner","mehr gern"],it:"Preferisco il jazz al pop.",e:"{gern} → {lieber}."},
 {t:"err",s:"Ich gern lese.",bad:1,fix:"Ich lese gern.",it:"Vuoi dire «Mi piace leggere».",e:"{gern} va dopo il verbo coniugato."},
 {t:"err",s:"Ich kann spielen Gitarre.",bad:2,fix:"Ich kann Gitarre spielen.",it:"Vuoi dire «So suonare la chitarra».",e:"L'infinito va in fondo."},
 {t:"rep",ask:"Magst du Fußball?",o:[["Ja, ich spiele jeden Samstag.","Sì, gioco ogni sabato."],["Ja, ich bin Fußball.","Sì, sono calcio."],["Ja, es gefällt.","Sì, piace."]],e:"Rispondi con quello che fai."}
]);
XX("l12",[
 {t:"ord",q:"«Come arrivo alla stazione?»",w:["wie","komme","ich","zum","Bahnhof"],x:["zu"],a:["Wie komme ich zum Bahnhof?"]},
 {t:"ord",ear:1,q:"«La farmacia è accanto alla posta.»",w:["die","Apotheke","ist","neben","der","Post"],x:["dem"],a:["Die Apotheke ist neben der Post."]},
 {t:"gap",s:"Gibt es hier ＿ Supermarkt?",o:["einen","ein","einem"],it:"C'è un supermercato qui?",e:"{es gibt} + accusativo: {einen}."},
 {t:"err",s:"Ich fahre mit Bus.",bad:3,fix:"Ich fahre mit dem Bus.",it:"Vuoi dire «Vado in autobus».",e:"{mit dem Bus}: l'articolo ci vuole, al dativo."},
 {t:"err",s:"Der Geldautomat ist vor die Bank.",bad:4,fix:"Der Geldautomat ist vor der Bank.",it:"Vuoi dire «Il bancomat è davanti alla banca».",e:"Dove? Dativo: {der Bank}."},
 {t:"rep",ask:"Entschuldigung, gibt es hier eine Apotheke?",o:[["Ja, neben der Post.","Sì, accanto alla posta."],["Ja, ich bin Apotheke.","Sì, sono farmacia."],["Nein, danke.","No, grazie."]],e:"Indica dove: {neben der…}"}
]);
XX("l13",[
 {t:"ord",q:"«Stasera devo lavorare.»",w:["heute","Abend","muss","ich","arbeiten"],x:["habe"],a:["Heute Abend muss ich arbeiten."]},
 {t:"ord",ear:1,q:"«Puoi venire anche tu?»",w:["kannst","du","mitkommen"],x:["mit"],a:["Kannst du mitkommen?"]},
 {t:"gap",s:"Hier ＿ man nicht rauchen.",o:["darf","muss","will"],it:"Qui non si può fumare.",e:"Divieto: {nicht dürfen}."},
 {t:"err",s:"Ich muss arbeiten heute.",bad:3,fix:"Ich muss heute arbeiten.",it:"Vuoi dire «Oggi devo lavorare».",e:"L'infinito va in fondo."},
 {t:"err",s:"Er kannt gut schwimmen.",bad:1,fix:"Er kann gut schwimmen.",it:"Vuoi dire «Sa nuotare bene».",e:"Modali: {er kann}, senza {-t}."},
 {t:"rep",ask:"Hast du Lust auf ein Konzert?",o:[["Ja, gern! Wann?","Sì, volentieri! Quando?"],["Ja, ich habe Lust.","Sì, ho voglia. (e basta)"],["Nein, ich muss.","No, devo."]],e:"Accetti e chiedi i dettagli."}
]);
XX("l14",[
 {t:"ord",q:"«Il formaggio? Lo prendo.»",w:["der","Käse","ich","nehme","ihn"],x:["es"],a:["Der Käse? Ich nehme ihn."]},
 {t:"ord",ear:1,q:"«Vorrei un chilo di pomodori.»",w:["ich","hätte","gern","ein","Kilo","Tomaten"],x:["von"],a:["Ich hätte gern ein Kilo Tomaten."]},
 {t:"gap",s:"Das Brot? Ich nehme ＿ .",o:["es","ihn","sie"],it:"Il pane? Lo prendo.",e:"{das Brot} è neutro: {es}."},
 {t:"err",s:"Ein Kilo von Tomaten, bitte.",bad:2,fix:"Ein Kilo Tomaten, bitte.",it:"Vuoi dire «Un chilo di pomodori, per favore».",e:"Dopo una quantità niente «di»."},
 {t:"err",s:"Der Käse ist lecker. Ich nehme es.",bad:6,fix:"Der Käse ist lecker. Ich nehme ihn.",it:"Vuoi dire «Il formaggio è buonissimo. Lo prendo».",e:"{der Käse} è maschile: {ihn}."},
 {t:"rep",ask:"Schmeckt es Ihnen?",who:"il cameriere",o:[["Ja, sehr lecker!","Sì, buonissimo!"],["Ja, ich schmecke.","Sì, assaggio."],["Die Speisekarte, bitte.","Il menù, per favore."]],e:"Ti chiede se ti piace."}
]);
XX("r2",[
 {t:"gap",s:"Wann ＿ du morgen auf?",o:["stehst","aufstehst","steht"],it:"Quando ti alzi domani?",e:"Separabile: {stehst… auf}."},
 {t:"err",s:"Du musst nicht rauchen hier: es ist verboten.",bad:1,fix:"Du darfst hier nicht rauchen: es ist verboten.",it:"Vuoi dire «Qui non puoi fumare: è vietato».",e:"Divieto: {nicht dürfen}."},
 {t:"ord",q:"«Vado al lavoro in bici.»",w:["ich","fahre","mit","dem","Fahrrad","zur","Arbeit"],x:["zu"],a:["Ich fahre mit dem Fahrrad zur Arbeit."]}
]);
XX("l15",[
 {t:"ord",q:"«Ho visto un film.»",w:["ich","habe","einen","Film","gesehen"],x:["bin"],a:["Ich habe einen Film gesehen."]},
 {t:"ord",ear:1,q:"«Che cosa hai fatto nel fine settimana?»",w:["was","hast","du","am","Wochenende","gemacht"],x:["machen"],a:["Was hast du am Wochenende gemacht?"]},
 {t:"gap",s:"Am Sonntag habe ich die Wohnung ＿ .",o:["aufgeräumt","geaufräumt","aufräumt"],it:"Domenica ho messo in ordine l'appartamento.",e:"Separabile: {auf} + {ge} + {räumt}."},
 {t:"err",s:"Ich habe gemacht einen Kuchen.",bad:2,fix:"Ich habe einen Kuchen gemacht.",it:"Vuoi dire «Ho fatto una torta».",e:"Il participio va in fondo."},
 {t:"err",s:"Ich habe meine Oma gebesucht.",bad:4,fix:"Ich habe meine Oma besucht.",it:"Vuoi dire «Sono andato a trovare mia nonna».",e:"Con {be-} niente {ge-}."},
 {t:"rep",ask:"Was hast du gestern gemacht?",o:[["Ich habe gearbeitet.","Ho lavorato."],["Ich arbeite.","Lavoro."],["Ich werde arbeiten.","Lavorerò."]],e:"Domanda al passato → risposta al passato."}
]);
XX("l16",[
 {t:"ord",q:"«L'estate scorsa siamo andati a Vienna.»",w:["letzten","Sommer","sind","wir","nach","Wien","gefahren"],x:["haben"],a:["Letzten Sommer sind wir nach Wien gefahren."]},
 {t:"ord",ear:1,q:"«Siamo rimasti una settimana.»",w:["wir","sind","eine","Woche","geblieben"],x:["haben"],a:["Wir sind eine Woche geblieben."]},
 {t:"gap",s:"Wann ＿ ihr angekommen?",o:["seid","habt","sind"],it:"Quando siete arrivati?",e:"{ankommen} vuole {sein}: {ihr seid}."},
 {t:"err",s:"Ich habe nach Berlin geflogen.",bad:1,fix:"Ich bin nach Berlin geflogen.",it:"Vuoi dire «Sono andato a Berlino in aereo».",e:"Movimento: {sein}."},
 {t:"err",s:"Wir sind am dritte August losgefahren.",bad:3,fix:"Wir sind am dritten August losgefahren.",it:"Vuoi dire «Siamo partiti il 3 agosto».",e:"Dopo {am} l'ordinale finisce in {-en}."},
 {t:"rep",ask:"Wie war der Urlaub?",o:[["Super! Wir sind ans Meer gefahren.","Benissimo! Siamo andati al mare."],["Ich fahre ans Meer.","Vado al mare."],["Ich werde ans Meer fahren.","Andrò al mare."]],e:"Racconta al passato."}
]);
XX("l17",[
 {t:"ord",q:"«Da bambino ero timido.»",w:["als","Kind","war","ich","schüchtern"],x:["bin"],a:["Als Kind war ich schüchtern."]},
 {t:"ord",ear:1,q:"«Non avevamo la televisione.»",w:["wir","hatten","keinen","Fernseher"],x:["haben"],a:["Wir hatten keinen Fernseher."]},
 {t:"gap",s:"＿ ich klein war, habe ich in Bayern gewohnt.",o:["Als","Wenn","Wann"],it:"Quando ero piccolo abitavo in Baviera.",e:"Un periodo unico del passato: {als}."},
 {t:"err",s:"Als ich war klein, habe ich viel gespielt.",bad:2,fix:"Als ich klein war, habe ich viel gespielt.",it:"Vuoi dire «Quando ero piccolo giocavo molto».",e:"Dopo {als} il verbo va in fondo."},
 {t:"err",s:"Ich müsste jeden Tag helfen, als ich klein war.",bad:1,fix:"Ich musste jeden Tag helfen, als ich klein war.",it:"Vuoi dire «Dovevo aiutare ogni giorno quando ero piccolo».",e:"«dovevo» = {musste}; {müsste} = dovrei."},
 {t:"rep",ask:"Wo hast du als Kind gewohnt?",o:[["In einem kleinen Dorf.","In un paesino."],["Ich wohne in Rom.","Abito a Roma."],["Ich werde in Rom wohnen.","Abiterò a Roma."]],e:"Domanda sul passato."}
]);
XX("l18",[
 {t:"ord",q:"«All'improvviso è andata via la luce.»",w:["plötzlich","ist","das","Licht","ausgegangen"],x:["hat"],a:["Plötzlich ist das Licht ausgegangen."]},
 {t:"ord",ear:1,q:"«Ho freddo.»",w:["mir","ist","kalt"],x:["ich"],a:["Mir ist kalt."]},
 {t:"gap",s:"Es war einmal ein Mädchen. Eines Tages ＿ es in den Wald.",o:["ging","gehte","gang"],it:"C'era una volta una bambina. Un giorno andò nel bosco.",e:"Präteritum forte: {ging}."},
 {t:"err",s:"Plötzlich die U-Bahn ist stehen geblieben.",bad:1,fix:"Plötzlich ist die U-Bahn stehen geblieben.",it:"Vuoi dire «All'improvviso la metro si è fermata».",e:"Dopo {plötzlich} il verbo viene subito."},
 {t:"err",s:"Ich bin kalt. Mach bitte das Fenster zu!",bad:0,fix:"Mir ist kalt. Mach bitte das Fenster zu!",it:"Vuoi dire «Ho freddo. Chiudi la finestra, per favore!».",e:"«ho freddo» = {mir ist kalt}."},
 {t:"rep",ask:"Wie ist das Wetter?",o:[["Die Sonne scheint, aber es ist kalt.","C'è il sole, ma fa freddo."],["Es ist Sonne.","È sole."],["Ich bin warm.","Sono caldo."]],e:"{Die Sonne scheint}, {es ist kalt}."}
]);
XX("l19",[
 {t:"ord",q:"«Le regalo un libro.»",w:["ich","schenke","ihr","ein","Buch"],x:["sie"],a:["Ich schenke ihr ein Buch."]},
 {t:"ord",ear:1,q:"«La borsa mi piace molto.»",w:["die","Tasche","gefällt","mir","sehr"],x:["mich"],a:["Die Tasche gefällt mir sehr."]},
 {t:"gap",s:"Berlin ist größer ＿ München.",o:["als","wie","von"],it:"Berlino è più grande di Monaco.",e:"Il confronto con {als}."},
 {t:"err",s:"Kannst du mich helfen?",bad:2,fix:"Kannst du mir helfen?",it:"Vuoi dire «Mi puoi aiutare?».",e:"{helfen} + dativo: {mir}."},
 {t:"err",s:"Dieser Kaffee ist mehr gut.",bad:3,fix:"Dieser Kaffee ist besser.",it:"Vuoi dire «Questo caffè è migliore».",e:"{gut} → {besser}."},
 {t:"rep",ask:"Was schenkst du deiner Mutter?",o:[["Ich schenke ihr Blumen.","Le regalo dei fiori."],["Ich schenke sie Blumen.","La regalo fiori."],["Ich schenke mir Blumen.","Mi regalo fiori."]],e:"«a lei» = {ihr}."}
]);
XX("l20",[
 {t:"ord",q:"«Posso provare questa giacca?»",w:["kann","ich","diese","Jacke","anprobieren"],x:["probieren"],a:["Kann ich diese Jacke anprobieren?"]},
 {t:"ord",ear:1,q:"«Cerco un maglione caldo.»",w:["ich","suche","einen","warmen","Pullover"],x:["warme"],a:["Ich suche einen warmen Pullover."]},
 {t:"gap",s:"Das ist ein ＿ Kleid!",o:["schönes","schöne","schöner"],it:"È un bel vestito!",e:"Neutro dopo {ein}: {-es}."},
 {t:"err",s:"Ich nehme die rot Jacke.",bad:3,fix:"Ich nehme die rote Jacke.",it:"Vuoi dire «Prendo la giacca rossa».",e:"Davanti al nome l'aggettivo prende la terminazione: {rote}."},
 {t:"err",s:"Die Hose ist zu kleine.",bad:4,fix:"Die Hose ist zu klein.",it:"Vuoi dire «I pantaloni sono troppo piccoli».",e:"Dopo {sein} nessuna terminazione."},
 {t:"rep",ask:"Welche Größe haben Sie?",who:"la commessa",o:[["Größe 38.","La 38."],["Achtunddreißig Euro.","Trentotto euro."],["Sie passt mir gut.","Mi va bene."]],e:"Ti chiede la taglia."}
]);
XX("l21",[
 {t:"ord",q:"«Imparo il tedesco perché voglio lavorare a Vienna.»",w:["ich","lerne","Deutsch","weil","ich","in","Wien","arbeiten","will"],x:["möchte"],a:["Ich lerne Deutsch, weil ich in Wien arbeiten will."]},
 {t:"ord",ear:1,q:"«Se ho tempo, ti chiamo.»",w:["wenn","ich","Zeit","habe","rufe","ich","dich","an"],x:["werde"],a:["Wenn ich Zeit habe, rufe ich dich an."]},
 {t:"gap",s:"Ich glaube, ＿ das eine gute Idee ist.",o:["dass","das","weil"],it:"Credo che sia una buona idea.",e:"«che» congiunzione = {dass}, con due {s}."},
 {t:"err",s:"Ich bleibe zu Hause, weil ich bin krank.",bad:6,fix:"Ich bleibe zu Hause, weil ich krank bin.",it:"Vuoi dire «Resto a casa perché sono malato».",e:"Dopo {weil} il verbo va in fondo."},
 {t:"err",s:"Ich komme nach zwei Jahren zurück: das ist mein Plan.",bad:2,fix:"Ich komme in zwei Jahren zurück: das ist mein Plan.",it:"Vuoi dire «Torno tra due anni: è il mio piano».",e:"«tra» nel futuro = {in}."},
 {t:"rep",ask:"Was machst du nächstes Jahr?",o:[["Ich gehe nach Österreich.","Vado in Austria."],["Ich bin nach Österreich gegangen.","Sono andato in Austria."],["Ich war in Österreich.","Ero in Austria."]],e:"Domanda sul futuro: presente o {werden}."}
]);
XX("l22",[
 {t:"ord",q:"«Mi fa male la testa.»",w:["mir","tut","der","Kopf","weh"],x:["ich"],a:["Mir tut der Kopf weh."]},
 {t:"ord",ear:1,q:"«Potrebbe darmi qualcosa contro la febbre?»",w:["könnten","Sie","mir","etwas","gegen","das","Fieber","geben"],x:["mich"],a:["Könnten Sie mir etwas gegen das Fieber geben?"]},
 {t:"gap",s:"Ich habe seit drei ＿ Halsschmerzen.",o:["Tagen","Tage","Tag"],it:"Ho mal di gola da tre giorni.",e:"{seit} + dativo plurale: {Tagen}."},
 {t:"err",s:"Ich habe Kopf weh.",bad:2,fix:"Mir tut der Kopf weh.",it:"Vuoi dire «Mi fa male la testa».",e:"{Mir tut der Kopf weh} o {Ich habe Kopfschmerzen}."},
 {t:"err",s:"Du sollst mehr schlafen, das ist nur ein Rat.",bad:1,fix:"Du solltest mehr schlafen, das ist nur ein Rat.",it:"Vuoi dire «Dovresti dormire di più, è solo un consiglio».",e:"Consiglio: {solltest}."},
 {t:"rep",ask:"Ich bin so müde.",o:[["Du solltest mehr schlafen.","Dovresti dormire di più."],["Du solltest müde sein.","Dovresti essere stanco."],["Gute Besserung!","Buona guarigione!"]],e:"Un consiglio: {Du solltest…}"}
]);
XX("l23",[
 {t:"ord",q:"«Mi mancano i miei genitori.»",w:["ich","vermisse","meine","Eltern"],x:["mir"],a:["Ich vermisse meine Eltern."]},
 {t:"ord",ear:1,q:"«Un giorno mi piacerebbe vivere in Germania.»",w:["eines","Tages","würde","ich","gern","in","Deutschland","leben"],x:["werde"],a:["Eines Tages würde ich gern in Deutschland leben."]},
 {t:"gap",s:"Am Anfang ＿ es schwer: Ich kannte niemanden.",o:["war","ist","wurde"],it:"All'inizio era difficile: non conoscevo nessuno.",e:"Descrizione al passato: {war}."},
 {t:"err",s:"Meine Eltern vermissen mir.",bad:2,fix:"Meine Eltern fehlen mir.",it:"Vuoi dire «Mi mancano i miei genitori».",e:"{fehlen} + dativo, oppure {Ich vermisse meine Eltern}."}
]);
XX("r3",[
 {t:"gap",s:"Es ＿ kalt, als ich rausgegangen bin.",o:["war","hat","ist gewesen"],it:"Faceva freddo quando sono uscito.",e:"Descrizione: {war}."},
 {t:"err",s:"Wenn es regnen wird, bleiben wir zu Hause.",bad:3,fix:"Wenn es regnet, bleiben wir zu Hause.",it:"Vuoi dire «Se pioverà, resteremo a casa».",e:"Dopo {wenn}: presente."},
 {t:"ord",q:"«Mi piacerebbe vivere a Vienna.»",w:["ich","würde","gern","in","Wien","wohnen"],x:["werde"],a:["Ich würde gern in Wien wohnen."]}
]);
