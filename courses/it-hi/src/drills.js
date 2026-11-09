/* Milepost exercises (generated from newc/board_it/drills.py): ord, gap, err, rep. Formats in shell/exercises.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"rep",ask:"Grazie!",who:"एक साथी",o:[["Prego!", "कोई बात नहीं!"], ["Ciao!", "हाय!"], ["Scusi!", "माफ़ कीजिए!"]],e:"{Grazie} का जवाब {Prego}।"},
 {t:"rep",ask:"Buongiorno! Benvenuto a bordo!",who:"जहाज़ पर एक अधिकारी",o:[["Buongiorno! Grazie!", "सुप्रभात! धन्यवाद!"], ["Buonanotte!", "शुभ रात्रि!"], ["Prego!", "कोई बात नहीं!"]],e:"अभिवादन का जवाब अभिवादन से।"},
 {t:"gap",s:"Il passaporto, per ＿.",o:["favore", "grazie", "prego"],it:"पासपोर्ट, कृपया।",e:"{per favore} = कृपया।"},
 {t:"err",s:"Ciao, comandante! Buongiorno!",bad:0,fix:"Buongiorno, comandante!",it:"आप सुबह कप्तान का अभिवादन करते हैं।",e:"अधिकारी से {buongiorno}, {ciao} नहीं।"},
 {t:"ord",ear:1,q:"«सुप्रभात, मैडम।»",w:["Buongiorno,", "signora."],x:["Ciao"],a:["Buongiorno, signora."]}
]);
XX("l2",[
 {t:"ord",q:"«मेरा नाम रवि है।»",w:["Mi", "chiamo", "Ravi."],x:["sono"],a:["Mi chiamo Ravi."]},
 {t:"gap",s:"Joy è ＿.",o:["filippina", "filippino", "filippine"],it:"जॉय फ़िलिपीनी है।",e:"महिला: {-a}।"},
 {t:"gap",s:"Noi ＿ colleghi.",o:["siamo", "sono", "è"],it:"हम साथी हैं।",e:"{noi siamo}।"},
 {t:"err",s:"Io indiano sono.",bad:2,fix:"Io sono indiano.",it:"रवि अपनी राष्ट्रीयता बताता है।",e:"क्रिया आख़िर में नहीं: {Io sono indiano}।"},
 {t:"rep",ask:"Come ti chiami?",who:"एक नया साथी",o:[["Mi chiamo Joy.", "मेरा नाम जॉय है।"], ["Sono di Cebu.", "मैं सेबू से हूँ।"], ["Sto bene.", "मैं ठीक हूँ।"]],e:"नाम: {Mi chiamo…}"}
]);
XX("l3",[
 {t:"rep",ask:"Scusi, come si chiama?",who:"एक यात्री",o:[["Mi chiamo Ravi, signora.", "मेरा नाम रवि है, मैडम।"], ["Ciao!", "हाय!"], ["Sono diciotto.", "मैं अठारह हूँ।"]],e:"नाम बताइए, {signora} के साथ।"},
 {t:"gap",s:"Signora, Lei ＿ di Genova?",o:["è", "sei", "sono"],it:"मैडम, क्या आप जेनोवा से हैं?",e:"{Lei} + {è}।"},
 {t:"err",s:"Signora, tu sei italiana?",bad:1,fix:"Signora, Lei è italiana?",it:"आप एक यात्री से पूछते हैं।",e:"यात्री से {Lei}।"},
 {t:"ord",ear:1,q:"«आप कहाँ से हैं?» (यात्री से)",w:["Di", "dov'è?"],x:["sei"],a:["Di dov'è?"]}
]);
XX("l4",[
 {t:"gap",s:"C'è ＿ specchio in bagno.",o:["uno", "un", "una"],it:"बाथरूम में एक शीशा है।",e:"{s}+व्यंजन: {uno}।"},
 {t:"gap",s:"Ci ＿ due letti.",o:["sono", "è", "ha"],it:"दो बिस्तर हैं।",e:"बहुवचन: {ci sono}।"},
 {t:"err",s:"Ecco asciugamani, signora.",bad:1,fix:"Ecco gli asciugamani, signora.",it:"आप यात्री को तौलिए देते हैं।",e:"आर्टिकल चाहिए: {gli asciugamani}।"},
 {t:"err",s:"Il specchio è piccolo.",bad:0,fix:"Lo specchio è piccolo.",it:"केबिन का शीशा।",e:"{s}+व्यंजन: {lo}।"},
 {t:"ord",q:"«केबिन में एक गोल खिड़की है।»",w:["C'è", "un", "oblò", "in", "cabina."],x:["sono"],a:["C'è un oblò in cabina."]}
]);
XX("l5",[
 {t:"gap",s:"Ho trentadue ＿.",o:["anni", "anno", "ani"],it:"मैं बत्तीस साल का हूँ।",e:"बहुवचन, दोहरे {nn} के साथ।"},
 {t:"err",s:"Sono ventinove anni.",bad:0,fix:"Ho ventinove anni.",it:"आप अपनी उम्र बताते हैं।",e:"उम्र: {avere}।"},
 {t:"err",s:"Il mio padre è a Kochi.",bad:0,fix:"Mio padre è a Kochi.",it:"रवि अपने पिता के बारे में।",e:"परिवार का एक व्यक्ति: बिना आर्टिकल।"},
 {t:"rep",ask:"Hai figli?",who:"जॉय",o:[["Sì, ho un figlio.", "हाँ, मेरा एक बेटा है।"], ["Sì, sono un figlio.", "हाँ, मैं एक बेटा हूँ।"], ["Ho trent'anni.", "मैं तीस साल का हूँ।"]],e:"{avere}: {ho un figlio}।"},
 {t:"ord",q:"«मेरी बहन बाईस साल की है।»",w:["Mia", "sorella", "ha", "ventidue", "anni."],x:["è"],a:["Mia sorella ha ventidue anni."]}
]);
XX("l6",[
 {t:"rep",ask:"Come stai?",who:"एक साथी",o:[["Non sto bene. Ho il mal di mare.", "मेरी तबीयत ठीक नहीं। सी-सिकनेस है।"], ["Ho trent'anni.", "मैं तीस साल का हूँ।"], ["Sono di Kochi.", "मैं कोच्चि से हूँ।"]],e:"{Come stai?} = हाल-चाल।"},
 {t:"gap",s:"Ho ＿: c'è un panino?",o:["fame", "sete", "sonno"],it:"मुझे भूख लगी है: कोई सैंडविच है?",e:"खाना → {fame}।"},
 {t:"err",s:"Sono fame.",bad:0,fix:"Ho fame.",it:"आप खाना चाहते हैं।",e:"भूख: {avere}।"},
 {t:"err",s:"Joy è stanco.",bad:2,fix:"Joy è stanca.",it:"जॉय थकी हुई है।",e:"महिला: {stanca}।"},
 {t:"ord",q:"«मैं थोड़ा थका हुआ हूँ।»",w:["Sono", "un", "po'", "stanco."],x:["ho"],a:["Sono un po' stanco."]}
]);
XX("l7",[
 {t:"err",s:"Ravi le cabine pulisce.",bad:1,fix:"Ravi pulisce le cabine.",it:"रवि का काम।",e:"क्रम: कर्ता + क्रिया + कर्म।"},
 {t:"err",s:"Io lavorare al ristorante.",bad:1,fix:"Io lavoro al ristorante.",it:"जॉय अपना काम बताती है।",e:"क्रिया का रूप बदलता है: {lavoro}।"},
 {t:"gap",s:"Ravi ＿ le cabine.",o:["pulisce", "pulia", "pulire"],it:"रवि केबिन साफ़ करता है।",e:"{pulire} → {pulisce}।"},
 {t:"rep",ask:"Che lavoro fai?",who:"जूलिया",o:[["Sono cameriera.", "मैं वेट्रेस हूँ।"], ["Sto bene.", "मैं ठीक हूँ।"], ["Ho fame.", "मुझे भूख लगी है।"]],e:"काम: {Sono…}"},
 {t:"ord",ear:1,q:"«हम जहाज़ पर इतालवी बोलते हैं।»",w:["Parliamo", "italiano", "a", "bordo."],x:["parlo"],a:["Parliamo italiano a bordo."]}
]);
XX("l8",[
 {t:"rep",ask:"Buonasera! Cosa desidera?",who:"बार में वेटर",o:[["Vorrei un caffè, per favore.", "मुझे एक कॉफ़ी चाहिए, कृपया।"], ["Voglio caffè!", "कॉफ़ी चाहिए!"], ["Ecco a Lei.", "यह लीजिए।"]],e:"विनम्र: {vorrei} + {per favore}।"},
 {t:"gap",s:"Quanto ＿ i panini?",o:["costano", "costa", "costi"],it:"सैंडविच कितने के हैं?",e:"बहुवचन: {costano}।"},
 {t:"err",s:"Sono sette euros.",bad:2,fix:"Sono sette euro.",it:"आप दाम बताते हैं।",e:"{euro} नहीं बदलता।"},
 {t:"err",s:"Due cappuccino, per favore.",bad:1,fix:"Due cappuccini, per favore.",it:"आप दो कैपुचीनो माँगते हैं।",e:"बहुवचन: {cappuccini}।"},
 {t:"ord",ear:1,q:"«कुल कितना हुआ?»",w:["Quant'è", "in", "tutto?"],x:["costa"],a:["Quant'è in tutto?"]}
]);
XX("l9",[
 {t:"err",s:"La mensa dove è?",bad:0,fix:"Dov'è la mensa?",it:"मार्क रास्ता पूछता है।",e:"सवाल-शब्द पहले।"},
 {t:"gap",s:"＿ è il tuo capo?",o:["Chi", "Che", "Dove"],it:"तुम्हारा बॉस कौन है?",e:"व्यक्ति: {chi}।"},
 {t:"gap",s:"＿ bottiglie vuole?",o:["Quante", "Quanti", "Quanto"],it:"आपको कितनी बोतलें चाहिए?",e:"{bottiglie}: स्त्रीलिंग बहुवचन।"},
 {t:"rep",ask:"Perché studi italiano?",who:"एक इतालवी अधिकारी",o:[["Perché lavoro su una nave italiana.", "क्योंकि मैं एक इतालवी जहाज़ पर काम करता हूँ।"], ["Al ponte due.", "डेक दो पर।"], ["Alle sei.", "छह बजे।"]],e:"{perché} = क्योंकि।"},
 {t:"ord",q:"«जॉय कहाँ काम करती है?»",w:["Dove", "lavora", "Joy?"],x:["è"],a:["Dove lavora Joy?"]}
]);
XX("l10",[
 {t:"gap",s:"Il turno comincia ＿ sei.",o:["alle", "le", "a"],it:"शिफ़्ट छह बजे शुरू होती है।",e:"«…बजे» = {alle}।"},
 {t:"err",s:"Sveglio alle cinque.",bad:0,fix:"Mi sveglio alle cinque.",it:"रवि अपनी सुबह बताता है।",e:"स्वयंवाचक: {mi sveglio}।"},
 {t:"err",s:"Sono le una.",bad:0,fix:"È l'una.",it:"एक बजे हैं।",e:"एक बजे: {È l'una}।"},
 {t:"rep",ask:"Che ore sono?",who:"जॉय",o:[["Sono le undici e mezza.", "साढ़े ग्यारह बजे हैं।"], ["Giovedì.", "गुरुवार।"], ["Al ponte tre.", "डेक तीन पर।"]],e:"समय: {Sono le…}"},
 {t:"ord",ear:1,q:"«मैं आठ से चार बजे तक काम करती हूँ।»",w:["Lavoro", "dalle", "otto", "alle", "quattro."],x:["le"],a:["Lavoro dalle otto alle quattro."]}
]);
XX("l11",[
 {t:"gap",s:"Mi ＿ i film d'azione.",o:["piacciono", "piace", "piaccio"],it:"मुझे एक्शन फ़िल्में पसंद हैं।",e:"बहुवचन: {piacciono}।"},
 {t:"err",s:"Io piaccio il calcio.",bad:1,fix:"Mi piace il calcio.",it:"आप अपनी पसंद बताते हैं।",e:"{mi piace} (मुझे पसंद है)।"},
 {t:"err",s:"Canto mai al karaoke.",bad:0,fix:"Non canto mai al karaoke.",it:"पाओलो कभी नहीं गाता।",e:"{non} … {mai}।"},
 {t:"rep",ask:"Andiamo al cinema stasera?",who:"जॉय",o:[["Sì, volentieri!", "हाँ, ज़रूर!"], ["Ho trent'anni.", "मैं तीस साल का हूँ।"], ["Due euro.", "दो यूरो।"]],e:"{volentieri} = ख़ुशी से।"},
 {t:"ord",q:"«मैं अक्सर घर फ़ोन करता हूँ।»",w:["Telefono", "spesso", "a", "casa."],x:["mai"],a:["Telefono spesso a casa."]}
]);
XX("l12",[
 {t:"gap",s:"La farmacia è vicino ＿ stazione.",o:["alla", "a la", "al"],it:"फ़ार्मेसी स्टेशन के पास है।",e:"{a} + {la} = {alla}।"},
 {t:"err",s:"Vado alla Genova.",bad:1,fix:"Vado a Genova.",it:"आप शहर जाते हैं।",e:"शहर: {a}, बिना आर्टिकल।"},
 {t:"err",s:"La banca è la stazione vicino.",bad:4,fix:"La banca è vicino alla stazione.",it:"आप रास्ता बताते हैं।",e:"{vicino a} संज्ञा से पहले।"},
 {t:"rep",ask:"Scusi, c'è una farmacia qui vicino?",who:"एक यात्री",o:[["Sì, in via Roma, a destra.", "हाँ, वाया रोमा में, दाईं ओर।"], ["Sì, sono le tre.", "हाँ, तीन बजे हैं।"], ["No, ho fame.", "नहीं, मुझे भूख लगी है।"]],e:"जगह और दिशा बताइए।"},
 {t:"ord",ear:1,q:"«सीधे जाइए और बाएँ मुड़िए।»",w:["Vada", "dritto", "e", "giri", "a", "sinistra."],x:["destra."],a:["Vada dritto e giri a sinistra."]}
]);
XX("l13",[
 {t:"gap",s:"Posso ＿ l'ascensore?",o:["prendere", "prendo", "preso"],it:"क्या मैं लिफ़्ट ले सकता हूँ?",e:"{posso} + मूल क्रिया।"},
 {t:"err",s:"Devo lavoro alle dieci.",bad:1,fix:"Devo lavorare alle dieci.",it:"मार्क अपनी शिफ़्ट बताता है।",e:"{devo} + मूल क्रिया।"},
 {t:"err",s:"Voglio un caffè.",bad:0,fix:"Vorrei un caffè.",it:"आप एक इतालवी बार में ऑर्डर करते हैं।",e:"विनम्र: {vorrei}।"},
 {t:"rep",ask:"Si può fumare in cabina?",who:"एक नया साथी",o:[["No, è vietato.", "नहीं, मना है।"], ["Sì, alle nove.", "हाँ, नौ बजे।"], ["Al ponte due.", "डेक दो पर।"]],e:"{vietato} = मना।"},
 {t:"ord",q:"«अलार्म बजे तो मस्टर स्टेशन जाना है।»",w:["Quando", "suona", "l'allarme,", "dobbiamo", "andare", "al", "punto", "di", "raccolta."],x:["posso"],a:["Quando suona l'allarme, dobbiamo andare al punto di raccolta."]}
]);
XX("l14",[
 {t:"gap",s:"Vorrei ＿ pane, per favore.",o:["del", "della", "dei"],it:"मुझे थोड़ी ब्रेड चाहिए, कृपया।",e:"{pane} पुल्लिंग: {del}।"},
 {t:"err",s:"Prendo due ne.",bad:2,fix:"Ne prendo due.",it:"आप दो सेब लेते हैं।",e:"{ne} क्रिया से पहले।"},
 {t:"err",s:"Signora, Lei è allergico?",bad:3,fix:"Signora, Lei è allergica?",it:"आप एक महिला यात्री से पूछते हैं।",e:"महिला: {allergica}।"},
 {t:"rep",ask:"Cosa prende come primo?",who:"वेट्रेस जॉय",o:[["Gli spaghetti al pomodoro.", "टमाटर वाली स्पैगेटी।"], ["Il pesce.", "मछली।"], ["Il tiramisù.", "तिरामिसु।"]],e:"{primo}: पास्ता, रिसोट्टो, सूप।"},
 {t:"ord",ear:1,q:"«क्या यह डिश बिना ग्लूटेन की है?»",w:["Questo", "piatto", "è", "senza", "glutine?"],x:["con"],a:["Questo piatto è senza glutine?"]}
]);
XX("r1",[
 {t:"rep",ask:"Di dove sei?",who:"एक नया साथी",o:[["Sono di Kochi, in India.", "मैं भारत के कोच्चि से हूँ।"], ["Sono cameriere.", "मैं वेटर हूँ।"], ["Ho ventinove anni.", "मैं उनतीस साल का हूँ।"]],e:"{Di dove sei?} = कहाँ से हो?"},
 {t:"gap",s:"La mia ＿ è piccola.",o:["cabina", "letto", "armadio"],it:"मेरा केबिन छोटा है।",e:"{piccola}: स्त्रीलिंग संज्ञा।"},
 {t:"err",s:"Ho un fratello e due sorella.",bad:5,fix:"Ho un fratello e due sorelle.",it:"आप परिवार बताते हैं।",e:"बहुवचन: {sorelle}।"}
]);
XX("r2",[
 {t:"rep",ask:"A che ora finisci il turno?",who:"एक साथी",o:[["Alle due.", "दो बजे।"], ["In mensa.", "मेस में।"], ["Con Joy.", "जॉय के साथ।"]],e:"समय: {alle…}"},
 {t:"gap",s:"Mi piace ＿ musica.",o:["la", "il", "lo"],it:"मुझे संगीत पसंद है।",e:"{musica} स्त्रीलिंग।"},
 {t:"err",s:"Vado in Genova domani.",bad:1,fix:"Vado a Genova domani.",it:"आप योजना बताते हैं।",e:"शहर: {a}।"}
]);
XX("l15",[
 {t:"gap",s:"Ieri ＿ visto un film.",o:["ho", "sono", "avevo"],it:"कल मैंने एक फ़िल्म देखी।",e:"{vedere} → {avere}।"},
 {t:"err",s:"Io mangiato la paella.",bad:1,fix:"Io ho mangiato la paella.",it:"रवि अपना दिन बताता है।",e:"{avere} भूलें नहीं।"},
 {t:"err",s:"Ho prenduto la chiave.",bad:1,fix:"Ho preso la chiave.",it:"आपने चाबी ली।",e:"{prendere} → {preso}।"},
 {t:"rep",ask:"Cosa hai fatto ieri?",who:"जॉय",o:[["Ho visitato Barcellona.", "मैं बार्सिलोना घूमा।"], ["Visito Barcellona domani.", "मैं कल बार्सिलोना घूमूँगा।"], ["Sono stanco.", "मैं थका हूँ।"]],e:"बीता हुआ: {passato prossimo}।"},
 {t:"ord",ear:1,q:"«मैंने बहुत सारी फ़ोटो खींचीं।»",w:["Ho", "fatto", "tante", "foto."],x:["sono"],a:["Ho fatto tante foto."]}
]);
XX("l16",[
 {t:"gap",s:"Joy è ＿ a Palma.",o:["andata", "andato", "andati"],it:"जॉय पाल्मा गई।",e:"{essere} + महिला: {andata}।"},
 {t:"err",s:"Ho andato a Napoli.",bad:0,fix:"Sono andato a Napoli.",it:"आप अपनी सैर बताते हैं।",e:"{andare} → {essere}।"},
 {t:"err",s:"Oggi è molto caldo.",bad:1,fix:"Oggi fa molto caldo.",it:"आप मौसम बताते हैं।",e:"मौसम: {fa caldo}।"},
 {t:"rep",ask:"Che tempo fa?",who:"एक यात्री",o:[["C'è il sole, ma c'è vento.", "धूप है, पर हवा चल रही है।"], ["Sono le tre.", "तीन बजे हैं।"], ["Il quindici maggio.", "पंद्रह मई।"]],e:"मौसम: {c'è il sole}…"},
 {t:"ord",q:"«हम छह बजे लौटे।»",w:["Siamo", "tornati", "alle", "sei."],x:["abbiamo"],a:["Siamo tornati alle sei."]}
]);
XX("l17",[
 {t:"gap",s:"Quando ＿ piccolo, abitavo a Kochi.",o:["ero", "sono stato", "sono"],it:"जब मैं छोटा था, कोच्चि में रहता था।",e:"वर्णन: {ero}।"},
 {t:"err",s:"Da piccolo ho giocato sempre in spiaggia.",bad:2,fix:"Da piccolo giocavo sempre in spiaggia.",it:"बचपन की आदत।",e:"आदत: {imperfetto}।"},
 {t:"rep",ask:"Cosa facevi da bambino?",who:"जॉय",o:[["Andavo a scuola e nuotavo.", "स्कूल जाता था और तैरता था।"], ["Andrò a scuola.", "मैं स्कूल जाऊँगा।"], ["Ho nuotato ieri.", "कल मैं तैरा।"]],e:"आदत → {imperfetto}।"},
 {t:"ord",ear:1,q:"«हम समुद्र के पास रहते थे।»",w:["Abitavamo", "vicino", "al", "mare."],x:["abitiamo"],a:["Abitavamo vicino al mare."]}
]);
XX("l18",[
 {t:"gap",s:"Dormivo quando ＿ l'allarme.",o:["è suonato", "suonava", "suona"],it:"मैं सो रहा था जब अलार्म बजा।",e:"घटना: {passato prossimo}।"},
 {t:"err",s:"È stata notte e ha piovuto forte.",bad:0,fix:"Era notte e pioveva forte.",it:"कहानी की पृष्ठभूमि।",e:"पृष्ठभूमि: {imperfetto}।"},
 {t:"rep",ask:"Hai mai visto una tempesta?",who:"मार्क",o:[["Sì, una volta, l'anno scorso.", "हाँ, एक बार, पिछले साल।"], ["Sì, domani.", "हाँ, कल।"], ["Ho paura.", "मुझे डर लगता है।"]],e:"{Hai mai…?} = क्या कभी…?"},
 {t:"ord",q:"«जब हम इंतज़ार कर रहे थे, हमने यात्रियों की मदद की।»",w:["Mentre", "aspettavamo,", "abbiamo", "aiutato", "i", "passeggeri."],x:["siamo"],a:["Mentre aspettavamo, abbiamo aiutato i passeggeri."]}
]);
XX("l19",[
 {t:"gap",s:"A mia sorella ＿ piacciono i profumi.",o:["le", "gli", "la"],it:"मेरी बहन को परफ़्यूम पसंद हैं।",e:"महिला: {le}।"},
 {t:"err",s:"A mia madre gli telefono ogni domenica.",bad:3,fix:"A mia madre telefono ogni domenica.",it:"आप अपनी माँ को फ़ोन करते हैं।",e:"{a mia madre} पहले से है: {gli} की ज़रूरत नहीं (और महिला के लिए {le})।"},
 {t:"err",s:"Genova è più grande che Palma.",bad:4,fix:"Genova è più grande di Palma.",it:"दो शहरों की तुलना।",e:"नाम से पहले {di}।"},
 {t:"ord",q:"«यह नीली वाली उस लाल वाली से ज़्यादा सुंदर है।»",w:["Questa", "blu", "è", "più", "bella", "di", "quella", "rossa."],x:["che"],a:["Questa blu è più bella di quella rossa."]}
]);
XX("l20",[
 {t:"gap",s:"La giacca? ＿ prendo!",o:["La", "Lo", "Le"],it:"जैकेट? मैं इसे लेती हूँ!",e:"{giacca} स्त्रीलिंग: {la}।"},
 {t:"err",s:"Sono lavorando, scusa.",bad:0,fix:"Sto lavorando, scusa.",it:"आप अभी काम कर रहे हैं।",e:"{stare} + {-ando}।"},
 {t:"rep",ask:"Paga con la carta o in contanti?",who:"दुकान में",o:[["Con la carta, grazie.", "कार्ड से, धन्यवाद।"], ["La taglia M.", "साइज़ M।"], ["Sto cercando una giacca.", "मैं एक जैकेट ढूँढ रही हूँ।"]],e:"भुगतान: {con la carta} / {in contanti}।"},
 {t:"ord",ear:1,q:"«मैंने इसे (जैकेट) नेपल्स में ख़रीदा।»",w:["L'ho", "comprata", "a", "Napoli."],x:["comprato"],a:["L'ho comprata a Napoli."]}
]);
XX("l21",[
 {t:"gap",s:"Domani la nave ＿ alle sei.",o:["partirà", "partiva", "è partita"],it:"कल जहाज़ छह बजे रवाना होगा।",e:"भविष्य: {partirà}।"},
 {t:"err",s:"Tornarò a casa a novembre.",bad:0,fix:"Tornerò a casa a novembre.",it:"रवि अपनी योजना बताता है।",e:"{-are} → {-erò}।"},
 {t:"err",s:"Due mesi fa tornerò a Kochi.",bad:2,fix:"Tra due mesi tornerò a Kochi.",it:"भविष्य की योजना।",e:"भविष्य: {tra}; {fa} = पहले।"},
 {t:"rep",ask:"Cosa farai a casa?",who:"जॉय",o:[["Starò con la mia famiglia.", "मैं अपने परिवार के साथ रहूँगा।"], ["Sono stato a casa.", "मैं घर पर था।"], ["Stavo a casa.", "मैं घर पर रहता था।"]],e:"भविष्य → {futuro}।"},
 {t:"ord",q:"«अगर कल बारिश होगी, तो मैं केबिन में रहूँगा।»",w:["Se", "domani", "piove,", "resto", "in", "cabina."],x:["allora"],a:["Se domani piove, resto in cabina."]}
]);
XX("l22",[
 {t:"gap",s:"Mi ＿ male i piedi.",o:["fanno", "fa", "ho"],it:"मेरे पैरों में दर्द है।",e:"बहुवचन: {fanno}।"},
 {t:"err",s:"Devi riposare un po', secondo me.",bad:0,fix:"Dovresti riposare un po', secondo me.",it:"आप साथी को सलाह देते हैं।",e:"सलाह: {dovresti}।"},
 {t:"rep",ask:"Ha la febbre?",who:"डॉक्टर",o:[["No, ma mi fa male la testa.", "नहीं, पर सिर में दर्द है।"], ["Sì, sono febbre.", "हाँ, मैं बुख़ार हूँ।"], ["Due volte al giorno.", "दिन में दो बार।"]],e:"{mi fa male} = दर्द है।"},
 {t:"ord",ear:1,q:"«क्या आप दोहरा सकते हैं, कृपया?»",w:["Potrebbe", "ripetere,", "per", "favore?"],x:["può"],a:["Potrebbe ripetere, per favore?"]}
]);
XX("l23",[
 {t:"gap",s:"Lavoro sulle navi ＿ cinque anni.",o:["da", "fa", "per"],it:"मैं पाँच साल से जहाज़ों पर काम कर रहा हूँ।",e:"अब भी चल रहा: {da}।"},
 {t:"err",s:"Ho lavorato qui da cinque anni.",bad:0,fix:"Lavoro qui da cinque anni.",it:"इंटरव्यू में।",e:"{da} + वर्तमान।"},
 {t:"err",s:"Le persone incontro sono simpatiche.",bad:2,fix:"Le persone che incontro sono simpatiche.",it:"आप अपने काम के बारे में बताते हैं।",e:"{che} से जोड़िए।"},
 {t:"rep",ask:"Da quanto tempo studia italiano?",who:"इंटरव्यू में",o:[["Da un anno.", "एक साल से।"], ["Un anno fa.", "एक साल पहले।"], ["Tra un anno.", "एक साल में।"]],e:"{da quanto tempo} → {da…}।"},
 {t:"ord",ear:1,q:"«मैं मैत्र बनना चाहूँगा।»",w:["Mi", "piacerebbe", "diventare", "maître."],x:["piace"],a:["Mi piacerebbe diventare maître."]}
]);
XX("r3",[
 {t:"rep",ask:"Mi parli un po' di Lei.",who:"इंटरव्यू में",o:[["Mi chiamo Joy e lavoro sulle navi da sei anni.", "मेरा नाम जॉय है और मैं छह साल से जहाज़ों पर काम कर रही हूँ।"], ["Lavoravo domani.", "मैं कल काम करती थी।"], ["Sì, grazie.", "हाँ, धन्यवाद।"]],e:"अपनी कहानी: {da} + वर्तमान।"},
 {t:"gap",s:"Se avrò i soldi, ＿ un ristorante.",o:["aprirò", "aprivo", "ho aperto"],it:"अगर मेरे पास पैसे होंगे, मैं एक रेस्टोरेंट खोलूँगी।",e:"{se} + भविष्य → भविष्य।"},
 {t:"err",s:"Ieri sono andato in città e ho comprato un regalo per la mia madre.",bad:11,fix:"Ieri sono andato in città e ho comprato un regalo per mia madre.",it:"आप अपना दिन बताते हैं।",e:"परिवार का एक व्यक्ति: बिना आर्टिकल।"}
]);
