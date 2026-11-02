/* ---------- Milepost exercises (French for Italians): ord, gap, err, rep ----------
   Formats in shell/exercises.js. Sentences come from the lessons whenever possible (same audio);
   «err» uses mistakes that Italian speakers really make. Checked by tools/drills_check.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"rep",ask:"Merci !",who:"un'amica",o:[["De rien !","Prego!"],["Bonjour !","Buongiorno!"],["Pardon !","Scusa!"]],e:"A {merci} si risponde {de rien}."},
 {t:"rep",ask:"Bonjour, madame !",who:"il panettiere, alle 9",o:[["Bonjour, monsieur !","Buongiorno, signore!"],["Salut !","Ciao!"],["Bonne nuit !","Buonanotte!"]],e:"In negozio si risponde con lo stesso saluto: {bonjour}, e {monsieur}."},
 {t:"gap",s:"Un café, s'il vous ＿ !",o:["plaît","merci","pardon"],it:"Un caffè, per favore!",e:"{s'il vous plaît} = per favore."},
 {t:"ord",q:"«Grazie, arrivederci!»",w:["merci","au","revoir"],x:["bonjour"],a:["Merci, au revoir !"]}
]);
XX("l2",[
 {t:"ord",q:"«Mi chiamo Marco.»",w:["je","m'appelle","Marco"],x:["suis"],a:["Je m'appelle Marco."]},
 {t:"ord",ear:1,q:"«Sono italiano, di Roma.»",w:["je","suis","italien","de","Rome"],x:["à"],a:["Je suis italien, de Rome."]},
 {t:"gap",s:"Comment tu ＿ ?",o:["t'appelles","m'appelle","s'appelle"],it:"Come ti chiami?",e:"Con {tu}: {tu t'appelles}."},
 {t:"gap",s:"Nous ＿ étudiants.",o:["sommes","êtes","sont"],it:"Siamo studenti.",e:"{nous sommes}, {vous êtes}, {ils sont}."},
 {t:"err",s:"Suis italienne, de Milan.",bad:0,fix:"Je suis italienne, de Milan.",it:"Vuoi dire «Sono italiana, di Milano».",e:"In italiano il soggetto si può togliere; in francese no: {je suis}."},
 {t:"err",s:"Elle est Française.",bad:2,fix:"Elle est française.",it:"Vuoi dire «È francese».",e:"Come aggettivo la nazionalità si scrive con la minuscola: {française}."},
 {t:"rep",ask:"Bonjour ! Je m'appelle Claire. Et toi ?",o:[["Moi, je m'appelle Luca.","Io mi chiamo Luca."],["Je suis de Lyon.","Sono di Lione."],["Enchantée !","Piacere!"]],e:"Ti chiede il nome: {Moi, je m'appelle…}"}
]);
XX("l3",[
 {t:"ord",q:"«Buongiorno, signora. Come sta?»",w:["bonjour","madame","comment","allez-vous"],x:["vas-tu"],a:["Bonjour, madame. Comment allez-vous ?"]},
 {t:"ord",ear:1,q:"«Molto bene, grazie. E Lei?»",w:["très","bien","merci","et","vous"],x:["toi"],a:["Très bien, merci. Et vous ?"]},
 {t:"gap",s:"Salut, Paul ! ＿ va ?",o:["Ça","Comment","Vous"],it:"Ciao Paul! Come va?",e:"Tra amici: {Ça va ?}"},
 {t:"err",s:"Bonjour, monsieur Dupont. Je te présente ma femme.",bad:4,fix:"Bonjour, monsieur Dupont. Je vous présente ma femme.",it:"Parli con un signore anziano che conosci appena.",e:"Con un signore che conosci appena si usa {vous}: {je vous présente}."},
 {t:"rep",ask:"Bonsoir, madame ! Comment allez-vous ?",who:"un vicino, alle 19",o:[["Très bien, merci. Et vous ?","Molto bene, grazie. E Lei?"],["Ça va, et toi ?","Bene, e tu?"],["Bonne nuit !","Buonanotte!"]],e:"Ti ha dato del {vous}: rispondi con {et vous ?}"}
]);
XX("l4",[
 {t:"ord",q:"«Nella camera c'è un letto.»",w:["dans","la","chambre","il","y","a","un","lit"],x:["est"],a:["Dans la chambre, il y a un lit.","Il y a un lit dans la chambre."]},
 {t:"gap",s:"Il n'y a pas ＿ télé.",o:["de","une","la"],it:"Non c'è la tv.",e:"Al negativo {un}/{une}/{des} diventano {de}."},
 {t:"gap",s:"Il y a ＿ chaises.",o:["des","de","les"],it:"Ci sono delle sedie.",e:"Plurale indeterminativo: {des}."},
 {t:"err",s:"Il y a chaises dans le salon.",bad:3,fix:"Il y a des chaises dans le salon.",it:"Vuoi dire «Ci sono sedie in salotto».",e:"In italiano l'articolo si può togliere; in francese no: {des chaises}."},
 {t:"err",s:"J'aime le mer.",bad:2,fix:"J'aime la mer.",it:"Vuoi dire «Amo il mare».",e:"{mer} è femminile: {la mer}. Tanti generi sono diversi dall'italiano."}
]);
XX("l5",[
 {t:"ord",q:"«Ho un fratello e una sorella.»",w:["j'ai","un","frère","et","une","sœur"],x:["je suis"],a:["J'ai un frère et une sœur."]},
 {t:"ord",ear:1,q:"«Mia madre si chiama Anne.»",w:["ma","mère","s'appelle","Anne"],x:["mon"],a:["Ma mère s'appelle Anne."]},
 {t:"gap",s:"Ils ＿ deux enfants.",o:["ont","sont","avons"],it:"Hanno due figli.",e:"{ils ont} = hanno; {ils sont} = sono."},
 {t:"gap",s:"＿ amie Léa est française.",o:["Mon","Ma","Mes"],it:"La mia amica Léa è francese.",e:"Davanti a vocale si usa {mon} anche per un nome femminile."},
 {t:"err",s:"Le mon frère s'appelle Hugo.",bad:0,fix:"Mon frère s'appelle Hugo.",it:"Vuoi dire «Mio fratello si chiama Hugo».",e:"In francese il possessivo non vuole mai l'articolo."},
 {t:"rep",ask:"Tu as des frères et sœurs ?",o:[["Oui, j'ai une sœur.","Sì, ho una sorella."],["Oui, je suis une sœur.","Sì, sono una sorella."],["Non, j'ai vingt ans.","No, ho vent'anni."]],e:"Si risponde con {avoir}: {j'ai une sœur}."}
]);
XX("l6",[
 {t:"ord",q:"«Ho vent'anni.»",w:["j'ai","vingt","ans"],x:["je suis"],a:["J'ai vingt ans."]},
 {t:"ord",ear:1,q:"«Sono stanco e ho fame.»",w:["je","suis","fatigué","et","j'ai","faim"],x:["je fais"],a:["Je suis fatigué et j'ai faim."]},
 {t:"gap",s:"Comment ＿ ta mère ?",o:["va","vais","vont"],it:"Come sta tua madre?",e:"{ta mère} = lei: {elle va}."},
 {t:"err",s:"Je suis trente ans.",bad:1,fix:"J'ai trente ans.",it:"Vuoi dire «Ho trent'anni».",e:"L'età si dice con {avoir}, come in italiano: {j'ai trente ans}."},
 {t:"err",s:"Je suis faim.",bad:1,fix:"J'ai faim.",it:"Vuoi dire «Ho fame».",e:"Come in italiano: {avoir faim}."},
 {t:"rep",ask:"Tu as quel âge ?",o:[["J'ai vingt-cinq ans.","Ho venticinque anni."],["Je suis vingt-cinq.","Sono venticinque."],["Je vais bien.","Sto bene."]],e:"{J'ai … ans}."}
]);
XX("l7",[
 {t:"ord",q:"«Non lavoro il lunedì.»",w:["je","ne","travaille","pas","le","lundi"],x:["non"],a:["Je ne travaille pas le lundi."]},
 {t:"ord",ear:1,q:"«Lavora in un ospedale.»",w:["elle","travaille","dans","un","hôpital"],x:["à"],a:["Elle travaille dans un hôpital."]},
 {t:"gap",s:"Vous ＿ à Paris ?",o:["habitez","habitons","habitent"],it:"Abita a Parigi?",e:"{vous} → -ez."},
 {t:"gap",s:"Il est ＿.",o:["médecin","un médecin","le médecin"],it:"Fa il medico.",e:"Dopo {il est} la professione va senza articolo."},
 {t:"err",s:"Je ne parle anglais.",bad:3,fix:"Je ne parle pas anglais.",it:"Vuoi dire «Non parlo inglese».",e:"Servono due parole: {ne} … {pas}."},
 {t:"err",s:"Il est un professeur.",bad:2,fix:"Il est professeur.",it:"Vuoi dire «È professore».",e:"{il est professeur} oppure {c'est un professeur}."},
 {t:"rep",ask:"Qu'est-ce que tu fais dans la vie ?",o:[["Je suis infirmière.","Sono infermiera."],["Je fais du vélo.","Vado in bici."],["Je vais bien.","Sto bene."]],e:"Ti chiede il lavoro."}
]);
XX("l8",[
 {t:"ord",q:"«Vorrei un caffè, per favore.»",w:["je","voudrais","un","café","s'il","vous","plaît"],x:["veux"],a:["Je voudrais un café, s'il vous plaît."]},
 {t:"ord",ear:1,q:"«Posso pagare con la carta?»",w:["je","peux","payer","par","carte"],x:["avec"],a:["Je peux payer par carte ?"]},
 {t:"gap",s:"L'＿, s'il vous plaît.",o:["addition","adition","additione"],it:"Il conto, per favore.",e:"{l'addition} = il conto."},
 {t:"gap",s:"Ça fait ＿ euros.",o:["quatre-vingts","quatre-vingt","quatres-vingts"],it:"Fanno ottanta euro.",e:"80 = {quatre-vingts}, con la s; 81 = {quatre-vingt-un}, senza."},
 {t:"err",s:"Je veux un thé.",bad:1,fix:"Je voudrais un thé.",it:"Al bar, in modo gentile.",e:"{je veux} suona brusco; meglio {je voudrais}."},
 {t:"rep",ask:"Bonjour ! Vous désirez ?",who:"il cameriere",o:[["Un café crème, s'il vous plaît.","Un cappuccino, per favore."],["Ça fait combien ?","Quant'è?"],["De rien.","Prego."]],e:"Ti chiede che cosa vuoi ordinare."}
]);
XX("l9",[
 {t:"ord",q:"«Dove abiti?» (con est-ce que)",w:["où","est-ce","que","tu","habites"],x:["qu'est-ce"],a:["Où est-ce que tu habites ?"]},
 {t:"ord",ear:1,q:"«Perché studi il francese?»",w:["pourquoi","tu","apprends","le","français"],x:["parce que"],a:["Pourquoi tu apprends le français ?"]},
 {t:"gap",s:"＿ que j'aime voyager.",o:["Parce","Pourquoi","Pour"],it:"Perché mi piace viaggiare.",e:"Nella risposta: {parce que}."},
 {t:"gap",s:"Qu'est-ce ＿ tu fais ce soir ?",o:["que","qui","quoi"],it:"Che cosa fai stasera?",e:"«che cosa» = {qu'est-ce que}."},
 {t:"err",s:"Que cosa tu fais ?",bad:1,fix:"Qu'est-ce que tu fais ?",it:"Vuoi dire «Che cosa fai?»",e:"«cosa» non esiste in francese: {qu'est-ce que} o {quoi}."},
 {t:"rep",ask:"Pourquoi tu es en France ?",o:[["Parce que je travaille ici.","Perché lavoro qui."],["Pourquoi je travaille ici.","Perché lavoro qui (sbagliato)."],["Je suis en France.","Sono in Francia."]],e:"Alla domanda {pourquoi} si risponde con {parce que}."}
]);
XX("l10",[
 {t:"ord",q:"«Mi alzo alle sette.»",w:["je","me","lève","à","sept","heures"],x:["suis"],a:["Je me lève à sept heures."]},
 {t:"ord",ear:1,q:"«A che ora cominci?»",w:["à","quelle","heure","tu","commences"],x:["quel"],a:["À quelle heure tu commences ?"]},
 {t:"gap",s:"Il est huit heures et ＿.",o:["quart","quarte","quatre"],it:"Sono le otto e un quarto.",e:"«e un quarto» = {et quart}."},
 {t:"gap",s:"Le soir, je ＿ couche tard.",o:["me","se","te"],it:"La sera vado a letto tardi.",e:"Con {je}: {je me couche}."},
 {t:"err",s:"Il est sept.",bad:2,fix:"Il est sept heures.",it:"Vuoi dire «Sono le sette».",e:"Con l'ora la parola {heures} non si toglie mai."},
 {t:"rep",ask:"Tu te lèves à quelle heure ?",o:[["À six heures et demie.","Alle sei e mezza."],["Je me couche tard.","Vado a letto tardi."],["Il est six heures.","Sono le sei."]],e:"{à quelle heure} → {à…}"}
]);
XX("l11",[
 {t:"ord",q:"«Mi piace molto il cinema.»",w:["j'aime","beaucoup","le","cinéma"],x:["me"],a:["J'aime beaucoup le cinéma."]},
 {t:"ord",ear:1,q:"«Il sabato gioco a calcio.»",w:["le","samedi","je","joue","au","foot"],x:["à"],a:["Le samedi, je joue au foot."]},
 {t:"gap",s:"Elle joue ＿ piano.",o:["du","au","le"],it:"Suona il pianoforte.",e:"Strumenti: {jouer de} → {du piano}."},
 {t:"gap",s:"Je fais ＿ natation.",o:["de la","du","la"],it:"Faccio nuoto.",e:"{natation} è femminile: {de la natation}."},
 {t:"err",s:"J'aime musique.",bad:1,fix:"J'aime la musique.",it:"Vuoi dire «Mi piace la musica».",e:"Dopo {aimer}: articolo determinativo."},
 {t:"err",s:"Je joue le tennis.",bad:2,fix:"Je joue au tennis.",it:"Vuoi dire «Gioco a tennis».",e:"Giochi e sport: {jouer à} → {au tennis}."},
 {t:"rep",ask:"Tu aimes le sport ?",o:[["Oui, j'adore le foot.","Sì, adoro il calcio."],["Oui, j'adore foot.","Sì, adoro calcio (sbagliato)."],["Oui, je fais le sport.","Sì, faccio lo sport (sbagliato)."]],e:"{j'adore le foot}; e si dice {faire du sport}."}
]);
XX("l12",[
 {t:"ord",q:"«Vada sempre dritto, poi giri a sinistra.»",w:["allez","tout","droit","puis","tournez","à","gauche"],x:["droite"],a:["Allez tout droit, puis tournez à gauche."]},
 {t:"ord",ear:1,q:"«Vado al museo.»",w:["je","vais","au","musée"],x:["à le"],a:["Je vais au musée."]},
 {t:"gap",s:"J'habite ＿ Italie.",o:["en","à","au"],it:"Abito in Italia.",e:"Paesi femminili: {en}."},
 {t:"gap",s:"Ce soir, on dîne ＿ Paul.",o:["chez","à","de"],it:"Stasera ceniamo da Paul.",e:"«da» una persona = {chez}."},
 {t:"err",s:"Je vais à le cinéma.",bad:2,fix:"Je vais au cinéma.",it:"Vuoi dire «Vado al cinema».",e:"{à} + {le} = {au}."},
 {t:"rep",ask:"Pardon, la gare, s'il vous plaît ?",who:"un turista",o:[["C'est tout droit, à cinq minutes.","È sempre dritto, a cinque minuti."],["Je vais à la gare.","Vado alla stazione."],["Bonne visite !","Buona visita!"]],e:"Ti chiede la strada."}
]);
XX("l13",[
 {t:"ord",q:"«Vuoi venire al cinema?»",w:["tu","veux","venir","au","cinéma"],x:["peux"],a:["Tu veux venir au cinéma ?"]},
 {t:"ord",ear:1,q:"«Mi dispiace, non posso, devo lavorare.»",w:["désolé","je","ne","peux","pas","je","dois","travailler"],x:["veux"],a:["Désolé, je ne peux pas, je dois travailler."]},
 {t:"gap",s:"Ce soir, je ＿ regarder un film.",o:["vais","vas","va"],it:"Stasera guarderò un film.",e:"Futuro vicino: {je vais} + infinito."},
 {t:"gap",s:"Ils ＿ venir samedi.",o:["peuvent","pouvent","peut"],it:"Possono venire sabato.",e:"{ils peuvent}."},
 {t:"err",s:"Je dois de partir.",bad:2,fix:"Je dois partir.",it:"Vuoi dire «Devo partire».",e:"Dopo {devoir} l'infinito va diretto, senza {de}."},
 {t:"rep",ask:"On se retrouve à huit heures devant le cinéma ?",o:[["D'accord, à ce soir !","D'accordo, a stasera!"],["Je vais au cinéma.","Vado al cinema."],["Il est huit heures.","Sono le otto."]],e:"Accetti l'appuntamento: {d'accord}."}
]);
XX("l14",[
 {t:"ord",q:"«Vorrei un chilo di pomodori.»",w:["je","voudrais","un","kilo","de","tomates"],x:["des"],a:["Je voudrais un kilo de tomates."]},
 {t:"ord",ear:1,q:"«Non mangio carne.»",w:["je","ne","mange","pas","de","viande"],x:["la"],a:["Je ne mange pas de viande."]},
 {t:"gap",s:"Je voudrais ＿ pain.",o:["du","de la","des"],it:"Vorrei del pane.",e:"{pain} è maschile: {du pain}."},
 {t:"gap",s:"Des pommes ? J'＿ veux deux kilos.",o:["en","y","les"],it:"Mele? Ne voglio due chili.",e:"{en} = ne."},
 {t:"err",s:"Je bois eau.",bad:2,fix:"Je bois de l'eau.",it:"Vuoi dire «Bevo acqua».",e:"Davanti a una quantità indefinita serve il partitivo: {de l'eau}."},
 {t:"err",s:"Un kilo des pommes, s'il vous plaît.",bad:2,fix:"Un kilo de pommes, s'il vous plaît.",it:"Vuoi dire «Un chilo di mele».",e:"Dopo una quantità: solo {de}."},
 {t:"rep",ask:"Et avec ceci ?",who:"il fruttivendolo",o:[["C'est tout, merci.","È tutto, grazie."],["Avec plaisir !","Con piacere!"],["Bon appétit !","Buon appetito!"]],e:"{Et avec ceci ?} = E poi? Se hai finito: {c'est tout}."}
]);
XX("l15",[
 {t:"ord",q:"«Ieri ho visto un film.»",w:["hier","j'ai","vu","un","film"],x:["je suis"],a:["Hier, j'ai vu un film."]},
 {t:"ord",ear:1,q:"«Non ho preso la metro.»",w:["je","n'ai","pas","pris","le","métro"],x:["prendu"],a:["Je n'ai pas pris le métro."]},
 {t:"gap",s:"Nous avons ＿ une promenade.",o:["fait","faité","faire"],it:"Abbiamo fatto una passeggiata.",e:"Participio di {faire}: {fait}."},
 {t:"err",s:"Je suis bien dormi.",bad:1,fix:"J'ai bien dormi.",it:"Vuoi dire «Ho dormito bene».",e:"{dormir} vuole {avoir}."},
 {t:"err",s:"Je n'ai vu pas le film.",bad:3,fix:"Je n'ai pas vu le film.",it:"Vuoi dire «Non ho visto il film».",e:"{pas} va subito dopo l'ausiliare."},
 {t:"rep",ask:"Tu as passé un bon week-end ?",o:[["Oui, j'ai visité un musée.","Sì, ho visitato un museo."],["Oui, je visite un musée.","Sì, visito un museo."],["Oui, je vais visiter un musée.","Sì, visiterò un museo."]],e:"Domanda al passato: si risponde al {passé composé}."}
]);
XX("l16",[
 {t:"ord",q:"«Siamo andati a Marsiglia.»",w:["nous","sommes","allés","à","Marseille"],x:["avons"],a:["Nous sommes allés à Marseille."]},
 {t:"ord",ear:1,q:"«È arrivata sabato.»",w:["elle","est","arrivée","samedi"],x:["a"],a:["Elle est arrivée samedi."]},
 {t:"gap",s:"Il a fait très ＿.",o:["beau","bon","bien"],it:"Ha fatto bellissimo.",e:"Meteo: {il fait beau}."},
 {t:"gap",s:"Je suis né ＿ 12 mai.",o:["le","au","de"],it:"Sono nato il 12 maggio.",e:"Date: {le} + numero + mese."},
 {t:"err",s:"Je suis été à Paris.",bad:1,fix:"J'ai été à Paris.",it:"Vuoi dire «Sono stato a Parigi».",e:"{être} al passé composé vuole {avoir}: {j'ai été}."},
 {t:"err",s:"J'ai allé en Corse.",bad:0,fix:"Je suis allé en Corse.",it:"Vuoi dire «Sono andato in Corsica».",e:"{aller} vuole {être}, come in italiano."},
 {t:"rep",ask:"Vous êtes rentrés quand ?",o:[["Nous sommes rentrés hier soir.","Siamo tornati ieri sera."],["Nous avons rentré hier soir.","Abbiamo tornato ieri sera."],["Nous rentrons demain.","Torniamo domani."]],e:"{rentrer} vuole {être}."}
]);
XX("l17",[
 {t:"ord",q:"«Quando ero piccola, abitavo in campagna.»",w:["quand","j'étais","petite","j'habitais","à","la","campagne"],x:["j'ai habité"],a:["Quand j'étais petite, j'habitais à la campagne."]},
 {t:"ord",ear:1,q:"«Non c'era la tv.»",w:["il","n'y","avait","pas","de","télé"],x:["était"],a:["Il n'y avait pas de télé."]},
 {t:"gap",s:"Tous les étés, nous ＿ à la mer.",o:["allions","sommes allés","allons"],it:"Ogni estate andavamo al mare.",e:"Abitudine nel passato: imparfait."},
 {t:"gap",s:"La maison ＿ petite.",o:["était","a été","étais"],it:"La casa era piccola.",e:"Descrizione: imparfait, terza persona: {était}."},
 {t:"err",s:"Quand je suis petit, j'habitais à Naples.",bad:2,fix:"Quand j'étais petit, j'habitais à Naples.",it:"Vuoi dire «Quando ero piccolo…»",e:"Nel passato: {j'étais}."},
 {t:"rep",ask:"Qu'est-ce que tu faisais l'été, quand tu étais petit ?",o:[["J'allais chez mes grands-parents.","Andavo dai miei nonni."],["Je vais chez mes grands-parents.","Vado dai miei nonni."],["J'irai chez mes grands-parents.","Andrò dai miei nonni."]],e:"Abitudine nel passato: imparfait."}
]);
XX("l18",[
 {t:"ord",q:"«Pioveva quando sono arrivato.»",w:["il","pleuvait","quand","je","suis","arrivé"],x:["a plu"],a:["Il pleuvait quand je suis arrivé."]},
 {t:"ord",ear:1,q:"«All'improvviso ho visto un cane.»",w:["tout","à","coup","j'ai","vu","un","chien"],x:["voyais"],a:["Tout à coup, j'ai vu un chien."]},
 {t:"gap",s:"Je dormais quand le téléphone ＿.",o:["a sonné","sonnait","sonne"],it:"Dormivo quando ha squillato il telefono.",e:"L'evento che interrompe: passé composé."},
 {t:"gap",s:"Il ＿ froid et il avait peur.",o:["avait","a eu","aura"],it:"Aveva freddo e aveva paura.",e:"Uno stato: imparfait."},
 {t:"err",s:"Hier, il a fait beau et nous étions à la plage, puis nous rentrions.",bad:13,fix:"Hier, il a fait beau et nous étions à la plage, puis nous sommes rentrés.",it:"L'ultimo fatto chiude il racconto.",e:"Un fatto concluso nella sequenza: {nous sommes rentrés}."},
 {t:"rep",ask:"Qu'est-ce qui t'est arrivé ?",o:[["J'ai raté mon train.","Ho perso il treno."],["Je rate mon train.","Perdo il treno."],["Je raterai mon train.","Perderò il treno."]],e:"Ti chiede che cosa è successo: passé composé."}
]);
XX("l19",[
 {t:"ord",q:"«Le regalo un libro.» (a mia madre)",w:["je","lui","offre","un","livre"],x:["la"],a:["Je lui offre un livre."]},
 {t:"ord",ear:1,q:"«Parigi è più grande di Lione.»",w:["Paris","est","plus","grand","que","Lyon"],x:["de"],a:["Paris est plus grand que Lyon."]},
 {t:"gap",s:"Mes parents ? Je ＿ téléphone le dimanche.",o:["leur","les","leurs"],it:"I miei genitori? Gli telefono la domenica.",e:"{téléphoner à} + plurale: {leur}, senza s."},
 {t:"gap",s:"Ce gâteau est ＿ que l'autre.",o:["meilleur","plus bon","mieux"],it:"Questa torta è migliore dell'altra.",e:"{bon} → {meilleur}."},
 {t:"err",s:"Je la téléphone ce soir.",bad:1,fix:"Je lui téléphone ce soir.",it:"Vuoi dire «Le telefono stasera» (a Marie).",e:"{téléphoner à quelqu'un} → pronome indiretto {lui}."},
 {t:"rep",ask:"Tu préfères le train ou l'avion ?",o:[["Le train : il est moins cher.","Il treno: costa meno."],["Le train : il est moins cher de l'avion.","Il treno: costa meno dell'aereo (sbagliato)."],["Le train : il est plus bon.","Il treno: è più buono (sbagliato)."]],e:"Nel paragone si usa {que}; {bon} → {meilleur}."}
]);
XX("l20",[
 {t:"ord",q:"«La prendo!» (la giacca)",w:["je","la","prends"],x:["lui"],a:["Je la prends !"]},
 {t:"ord",ear:1,q:"«Posso provarlo?»",w:["je","peux","l'essayer"],x:["essayer le"],a:["Je peux l'essayer ?"]},
 {t:"gap",s:"Mes lunettes ? Je ne ＿ trouve pas !",o:["les","leur","la"],it:"I miei occhiali? Non li trovo!",e:"Complemento diretto plurale: {les}."},
 {t:"gap",s:"Je ne peux pas parler, je suis en train ＿ conduire.",o:["de","à","pour"],it:"Non posso parlare, sto guidando.",e:"{être en train de} + infinito."},
 {t:"err",s:"Je prends la.",bad:2,fix:"Je la prends.",it:"Vuoi dire «La prendo».",e:"Il pronome va prima del verbo."},
 {t:"rep",ask:"Vous faites quelle taille ?",who:"la commessa",o:[["Je fais du 38.","Porto la 38."],["Je fais du sport.","Faccio sport."],["Elle est en solde.","È in saldo."]],e:"Ti chiede la taglia: {je fais du…}"}
]);
XX("l21",[
 {t:"ord",q:"«L'anno prossimo andrò in Canada.»",w:["l'année","prochaine","j'irai","au","Canada"],x:["en"],a:["L'année prochaine, j'irai au Canada."]},
 {t:"ord",ear:1,q:"«Se avrò tempo, verrò.»",w:["si","j'ai","le","temps","je","viendrai"],x:["j'aurai"],a:["Si j'ai le temps, je viendrai."]},
 {t:"gap",s:"Nous ＿ à la maison ce soir.",o:["serons","serions","sommes été"],it:"Stasera saremo a casa.",e:"Futuro di {être}: {ser-}."},
 {t:"gap",s:"S'il fait beau, on ＿ à la plage.",o:["ira","irait","allera"],it:"Se farà bello, andremo in spiaggia.",e:"Futuro di {aller}: {ir-}."},
 {t:"err",s:"Si j'aurai le temps, je viendrai.",bad:1,fix:"Si j'ai le temps, je viendrai.",it:"Vuoi dire «Se avrò tempo, verrò».",e:"Dopo {si} niente futuro: {si j'ai}."},
 {t:"rep",ask:"Tu viendras me voir à Montréal ?",o:[["Oui, si j'ai assez d'argent !","Sì, se avrò abbastanza soldi!"],["Oui, si j'aurai assez d'argent !","Sì, se avrò abbastanza soldi! (sbagliato)"],["Oui, je suis venu.","Sì, sono venuto."]],e:"{si} + presente."}
]);
XX("l22",[
 {t:"ord",q:"«Potrebbe aiutarmi?»",w:["pourriez-vous","m'aider"],x:["pouvez"],a:["Pourriez-vous m'aider ?"]},
 {t:"ord",ear:1,q:"«Dovresti riposarti.»",w:["tu","devrais","te","reposer"],x:["dois"],a:["Tu devrais te reposer."]},
 {t:"gap",s:"Il ＿ prendre ce médicament trois fois par jour.",o:["faut","doit","fait"],it:"Bisogna prendere questa medicina tre volte al giorno.",e:"{il faut} + infinito."},
 {t:"gap",s:"J'ai de la fièvre ＿ trois jours.",o:["depuis","de","pendant"],it:"Ho la febbre da tre giorni.",e:"«da» + durata che continua = {depuis}."},
 {t:"err",s:"Je voudrai un rendez-vous, s'il vous plaît.",bad:1,fix:"Je voudrais un rendez-vous, s'il vous plaît.",it:"Una richiesta gentile.",e:"Il condizionale finisce in {-ais}: {je voudrais}."},
 {t:"rep",ask:"Qu'est-ce qui ne va pas ?",who:"il medico",o:[["J'ai mal à la gorge.","Ho mal di gola."],["Ça va bien, merci.","Va bene, grazie."],["Je vais chez le médecin.","Vado dal medico."]],e:"Ti chiede che cosa hai."}
]);
XX("l23",[
 {t:"ord",q:"«I miei genitori mi mancano.»",w:["mes","parents","me","manquent"],x:["je manque"],a:["Mes parents me manquent."]},
 {t:"ord",ear:1,q:"«Un giorno mi piacerebbe aprire un'agenzia.»",w:["un","jour","j'aimerais","ouvrir","une","agence"],x:["j'aimerai"],a:["Un jour, j'aimerais ouvrir une agence."]},
 {t:"gap",s:"Au début, c'＿ difficile.",o:["était","a été","est été"],it:"All'inizio era difficile.",e:"Descrizione nel passato: imparfait."},
 {t:"err",s:"Je manque mes parents.",bad:1,fix:"Mes parents me manquent.",it:"Vuoi dire «Mi mancano i miei genitori».",e:"Con {manquer} chi manca è il soggetto: {mes parents me manquent}."},
 {t:"rep",ask:"Tu es à Paris depuis quand ?",o:[["Depuis un an.","Da un anno."],["Il y a un an.","Un anno fa."],["Dans un an.","Fra un anno."]],e:"{depuis} = da (quanto tempo)."}
]);
