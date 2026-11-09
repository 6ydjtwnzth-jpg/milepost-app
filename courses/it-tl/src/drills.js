/* Milepost exercises (generated from newc/board_it/drills.py): ord, gap, err, rep. Formats in shell/exercises.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"rep",ask:"Grazie!",who:"isang kasamahan",o:[["Prego!", "Walang anuman!"], ["Ciao!", "Hi!"], ["Scusi!", "Paumanhin!"]],e:"Sagot sa {Grazie}: {Prego}."},
 {t:"rep",ask:"Buongiorno! Benvenuto a bordo!",who:"isang opisyal sa barko",o:[["Buongiorno! Grazie!", "Magandang umaga po! Salamat!"], ["Buonanotte!", "Magandang gabi (paalam)!"], ["Prego!", "Walang anuman!"]],e:"Bati ang sagot sa bati."},
 {t:"gap",s:"Il passaporto, per ＿.",o:["favore", "grazie", "prego"],it:"Ang pasaporte, pakiusap.",e:"{per favore} = pakiusap."},
 {t:"err",s:"Ciao, comandante! Buongiorno!",bad:0,fix:"Buongiorno, comandante!",it:"Binabati mo ang kapitan sa umaga.",e:"Sa opisyal: {buongiorno}, hindi {ciao}."},
 {t:"ord",ear:1,q:"«Magandang umaga po, ginang.»",w:["Buongiorno,", "signora."],x:["Ciao"],a:["Buongiorno, signora."]}
]);
XX("l2",[
 {t:"ord",q:"«Ako si Ravi.»",w:["Mi", "chiamo", "Ravi."],x:["sono"],a:["Mi chiamo Ravi."]},
 {t:"gap",s:"Joy è ＿.",o:["filippina", "filippino", "filippine"],it:"Pilipina si Joy.",e:"Babae: {-a}."},
 {t:"gap",s:"Noi ＿ colleghi.",o:["siamo", "sono", "è"],it:"Magkasamahan kami.",e:"{noi siamo}."},
 {t:"err",s:"Joy è cameriere.",bad:2,fix:"Joy è cameriera.",it:"Waitress si Joy.",e:"Babae: {cameriera}."},
 {t:"rep",ask:"Come ti chiami?",who:"isang bagong kasamahan",o:[["Mi chiamo Joy.", "Ako si Joy."], ["Sono di Cebu.", "Taga-Cebu ako."], ["Sto bene.", "Mabuti ako."]],e:"Pangalan: {Mi chiamo…}"}
]);
XX("l3",[
 {t:"rep",ask:"Scusi, come si chiama?",who:"isang pasahero",o:[["Mi chiamo Ravi, signora.", "Ako po si Ravi, ginang."], ["Ciao!", "Hi!"], ["Sono diciotto.", "Labing-walo ako."]],e:"Sabihin ang pangalan, kasama ang {signora}."},
 {t:"gap",s:"Signora, Lei ＿ di Genova?",o:["è", "sei", "sono"],it:"Ginang, taga-Genova po ba kayo?",e:"{Lei} + {è}."},
 {t:"err",s:"Signora, tu sei italiana?",bad:1,fix:"Signora, Lei è italiana?",it:"Nagtatanong ka sa pasahero.",e:"Sa pasahero: {Lei}."},
 {t:"err",s:"Sei di Cebu ba?",bad:3,fix:"Sei di Cebu?",it:"Nagtatanong ka sa kasamahan.",e:"Walang «ba» sa Italyano: tono lang."},
 {t:"ord",ear:1,q:"«Taga-saan po kayo?» (sa pasahero)",w:["Di", "dov'è?"],x:["sei"],a:["Di dov'è?"]}
]);
XX("l4",[
 {t:"gap",s:"C'è ＿ specchio in bagno.",o:["uno", "un", "una"],it:"May salamin sa banyo.",e:"{s}+katinig: {uno}."},
 {t:"gap",s:"Ci ＿ due letti.",o:["sono", "è", "ha"],it:"May dalawang kama.",e:"Maramihan: {ci sono}."},
 {t:"err",s:"Ci sono due bottiglia.",bad:3,fix:"Ci sono due bottiglie.",it:"May tubig sa ref.",e:"Maramihan: {bottiglie}, hindi lang «mga»."},
 {t:"err",s:"Il specchio è piccolo.",bad:0,fix:"Lo specchio è piccolo.",it:"Ang salamin sa kabina.",e:"{s}+katinig: {lo}."},
 {t:"ord",q:"«May bilog na bintana sa kabina.»",w:["C'è", "un", "oblò", "in", "cabina."],x:["sono"],a:["C'è un oblò in cabina."]}
]);
XX("l5",[
 {t:"gap",s:"Ho trentadue ＿.",o:["anni", "anno", "ani"],it:"Tatlumpu't dalawang taon ako.",e:"Maramihan, may dobleng {nn}."},
 {t:"err",s:"Sono ventinove anni.",bad:0,fix:"Ho ventinove anni.",it:"Sinasabi mo ang edad mo.",e:"Edad: {avere}."},
 {t:"err",s:"Il mio padre è a Kochi.",bad:0,fix:"Mio padre è a Kochi.",it:"Si Ravi, tungkol sa tatay niya.",e:"Isang kapamilya: walang artikulo."},
 {t:"rep",ask:"Hai figli?",who:"si Joy",o:[["Sì, ho un figlio.", "Oo, may anak akong lalaki."], ["Sì, sono un figlio.", "Oo, anak ako."], ["Ho trent'anni.", "Trenta anyos ako."]],e:"{avere}: {ho un figlio}."},
 {t:"ord",q:"«Dalawampu't dalawang taon ang kapatid kong babae.»",w:["Mia", "sorella", "ha", "ventidue", "anni."],x:["è"],a:["Mia sorella ha ventidue anni."]}
]);
XX("l6",[
 {t:"rep",ask:"Come stai?",who:"isang kasamahan",o:[["Non sto bene. Ho il mal di mare.", "Hindi maganda. Nahihilo ako sa dagat."], ["Ho trent'anni.", "Trenta anyos ako."], ["Sono di Kochi.", "Taga-Kochi ako."]],e:"{Come stai?} = kumusta."},
 {t:"gap",s:"Ho ＿: c'è un panino?",o:["fame", "sete", "sonno"],it:"Gutom ako: may sandwich ba?",e:"Pagkain → {fame}."},
 {t:"err",s:"Sono fame.",bad:0,fix:"Ho fame.",it:"Gusto mong kumain.",e:"Gutom: {avere}."},
 {t:"err",s:"Joy è stanco.",bad:2,fix:"Joy è stanca.",it:"Pagod si Joy.",e:"Babae: {stanca}."},
 {t:"ord",q:"«Medyo pagod ako.»",w:["Sono", "un", "po'", "stanco."],x:["ho"],a:["Sono un po' stanco."]}
]);
XX("l7",[
 {t:"err",s:"Io lavorare al ristorante.",bad:1,fix:"Io lavoro al ristorante.",it:"Sinasabi ni Joy ang trabaho niya.",e:"Binabanghay ang pandiwa: {lavoro}."},
 {t:"gap",s:"Ravi ＿ le cabine.",o:["pulisce", "pulia", "pulire"],it:"Naglilinis si Ravi ng mga kabina.",e:"{pulire} → {pulisce}."},
 {t:"rep",ask:"Che lavoro fai?",who:"si Giulia",o:[["Sono cameriera.", "Waitress ako."], ["Sto bene.", "Mabuti ako."], ["Ho fame.", "Gutom ako."]],e:"Trabaho: {Sono…}"},
 {t:"ord",ear:1,q:"«Nag-i-Italyano kami sa barko.»",w:["Parliamo", "italiano", "a", "bordo."],x:["parlo"],a:["Parliamo italiano a bordo."]}
]);
XX("l8",[
 {t:"rep",ask:"Buonasera! Cosa desidera?",who:"waiter sa bar",o:[["Vorrei un caffè, per favore.", "Isang kape, pakiusap."], ["Voglio caffè!", "Kape!"], ["Ecco a Lei.", "Heto po."]],e:"Magalang: {vorrei} + {per favore}."},
 {t:"gap",s:"Quanto ＿ i panini?",o:["costano", "costa", "costi"],it:"Magkano ang mga sandwich?",e:"Maramihan: {costano}."},
 {t:"err",s:"Sono sette euros.",bad:2,fix:"Sono sette euro.",it:"Sinasabi mo ang presyo.",e:"Hindi nagbabago ang {euro}."},
 {t:"err",s:"Due cappuccino, per favore.",bad:1,fix:"Due cappuccini, per favore.",it:"Umoorder ka ng dalawang cappuccino.",e:"Maramihan: {cappuccini}."},
 {t:"ord",ear:1,q:"«Magkano lahat?»",w:["Quant'è", "in", "tutto?"],x:["costa"],a:["Quant'è in tutto?"]}
]);
XX("l9",[
 {t:"err",s:"Come costa il caffè?",bad:0,fix:"Quanto costa il caffè?",it:"Nagtatanong ka ng presyo.",e:"Presyo: {quanto} («magkano»), hindi {come}."},
 {t:"gap",s:"＿ è il tuo capo?",o:["Chi", "Che", "Dove"],it:"Sino ang boss mo?",e:"Tao: {chi}."},
 {t:"gap",s:"＿ bottiglie vuole?",o:["Quante", "Quanti", "Quanto"],it:"Ilang bote ang gusto ninyo?",e:"{bottiglie}: pambabae, maramihan."},
 {t:"rep",ask:"Perché studi italiano?",who:"isang opisyal na Italyano",o:[["Perché lavoro su una nave italiana.", "Kasi nagtatrabaho ako sa barkong Italyano."], ["Al ponte due.", "Sa deck dos."], ["Alle sei.", "Alas-sais."]],e:"{perché} = kasi."},
 {t:"ord",q:"«Saan nagtatrabaho si Joy?»",w:["Dove", "lavora", "Joy?"],x:["è"],a:["Dove lavora Joy?"]}
]);
XX("l10",[
 {t:"gap",s:"Il turno comincia ＿ sei.",o:["alle", "le", "a"],it:"Nagsisimula ang shift nang alas-sais.",e:"«alas-…» = {alle}."},
 {t:"err",s:"Sveglio alle cinque.",bad:0,fix:"Mi sveglio alle cinque.",it:"Ikinukuwento ni Ravi ang umaga niya.",e:"Repleksibo: {mi sveglio}."},
 {t:"err",s:"Sono le una.",bad:0,fix:"È l'una.",it:"Ala-una na.",e:"Ala-una: {È l'una}."},
 {t:"rep",ask:"Che ore sono?",who:"si Joy",o:[["Sono le undici e mezza.", "Alas-onse y medya."], ["Giovedì.", "Huwebes."], ["Al ponte tre.", "Sa deck tres."]],e:"Oras: {Sono le…}"},
 {t:"ord",ear:1,q:"«Nagtatrabaho ako mula alas-otso hanggang alas-kuwatro.»",w:["Lavoro", "dalle", "otto", "alle", "quattro."],x:["le"],a:["Lavoro dalle otto alle quattro."]}
]);
XX("l11",[
 {t:"gap",s:"Mi ＿ i film d'azione.",o:["piacciono", "piace", "piaccio"],it:"Gusto ko ang mga action na pelikula.",e:"Maramihan: {piacciono}."},
 {t:"err",s:"Io piaccio il calcio.",bad:1,fix:"Mi piace il calcio.",it:"Sinasabi mo ang gusto mo.",e:"{mi piace}, hindi {io piaccio}."},
 {t:"err",s:"Canto mai al karaoke.",bad:0,fix:"Non canto mai al karaoke.",it:"Hindi kumakanta si Paolo.",e:"{non} … {mai}."},
 {t:"rep",ask:"Andiamo al cinema stasera?",who:"si Joy",o:[["Sì, volentieri!", "Oo, gusto ko!"], ["Ho trent'anni.", "Trenta anyos ako."], ["Due euro.", "Dalawang euro."]],e:"{volentieri} = gusto ko, sige."},
 {t:"ord",q:"«Madalas akong tumawag sa bahay.»",w:["Telefono", "spesso", "a", "casa."],x:["mai"],a:["Telefono spesso a casa."]}
]);
XX("l12",[
 {t:"gap",s:"La farmacia è vicino ＿ stazione.",o:["alla", "a la", "al"],it:"Malapit sa istasyon ang botika.",e:"{a} + {la} = {alla}."},
 {t:"err",s:"Vado alla Genova.",bad:1,fix:"Vado a Genova.",it:"Pupunta ka sa lungsod.",e:"Lungsod: {a}, walang artikulo."},
 {t:"rep",ask:"Scusi, c'è una farmacia qui vicino?",who:"isang pasahero",o:[["Sì, in via Roma, a destra.", "Oo, sa Via Roma, sa kanan."], ["Sì, sono le tre.", "Oo, alas-tres na."], ["No, ho fame.", "Hindi, gutom ako."]],e:"Sabihin ang lugar at direksyon."},
 {t:"ord",ear:1,q:"«Dumiretso kayo at lumiko sa kaliwa.»",w:["Vada", "dritto", "e", "giri", "a", "sinistra."],x:["destra."],a:["Vada dritto e giri a sinistra."]}
]);
XX("l13",[
 {t:"gap",s:"Posso ＿ l'ascensore?",o:["prendere", "prendo", "preso"],it:"Puwede ba akong sumakay sa elevator?",e:"{posso} + pawatas."},
 {t:"err",s:"Devo lavoro alle dieci.",bad:1,fix:"Devo lavorare alle dieci.",it:"Sinasabi ni Mark ang shift niya.",e:"{devo} + pawatas."},
 {t:"err",s:"Voglio un caffè.",bad:0,fix:"Vorrei un caffè.",it:"Umoorder ka sa bar na Italyano.",e:"Magalang: {vorrei}."},
 {t:"rep",ask:"Si può fumare in cabina?",who:"isang bagong kasamahan",o:[["No, è vietato.", "Hindi, bawal."], ["Sì, alle nove.", "Oo, alas-nuwebe."], ["Al ponte due.", "Sa deck dos."]],e:"{vietato} = bawal."},
 {t:"ord",q:"«Kapag tumunog ang alarma, kailangang pumunta sa muster station.»",w:["Quando", "suona", "l'allarme,", "dobbiamo", "andare", "al", "punto", "di", "raccolta."],x:["posso"],a:["Quando suona l'allarme, dobbiamo andare al punto di raccolta."]}
]);
XX("l14",[
 {t:"gap",s:"Vorrei ＿ pane, per favore.",o:["del", "della", "dei"],it:"Gusto ko ng tinapay, pakiusap.",e:"Panlalaki ang {pane}: {del}."},
 {t:"err",s:"Prendo due ne.",bad:2,fix:"Ne prendo due.",it:"Kukuha ka ng dalawang mansanas.",e:"{ne} bago ang pandiwa."},
 {t:"err",s:"Signora, Lei è allergico?",bad:3,fix:"Signora, Lei è allergica?",it:"Nagtatanong ka sa babaeng pasahero.",e:"Babae: {allergica}."},
 {t:"rep",ask:"Cosa prende come primo?",who:"si Joy, waitress",o:[["Gli spaghetti al pomodoro.", "Spaghetti na may kamatis."], ["Il pesce.", "Isda."], ["Il tiramisù.", "Tiramisù."]],e:"{primo}: pasta, risotto, sopas."},
 {t:"ord",ear:1,q:"«Wala bang gluten ang putaheng ito?»",w:["Questo", "piatto", "è", "senza", "glutine?"],x:["con"],a:["Questo piatto è senza glutine?"]}
]);
XX("r1",[
 {t:"rep",ask:"Di dove sei?",who:"isang bagong kasamahan",o:[["Sono di Kochi, in India.", "Taga-Kochi ako, sa India."], ["Sono cameriere.", "Waiter ako."], ["Ho ventinove anni.", "Dalawampu't siyam na taon ako."]],e:"{Di dove sei?} = taga-saan ka?"},
 {t:"gap",s:"La mia ＿ è piccola.",o:["cabina", "letto", "armadio"],it:"Maliit ang kabina ko.",e:"{piccola}: pambabae."},
 {t:"err",s:"Ho un fratello e due sorella.",bad:5,fix:"Ho un fratello e due sorelle.",it:"Ikinukuwento mo ang pamilya.",e:"Maramihan: {sorelle}."}
]);
XX("r2",[
 {t:"rep",ask:"A che ora finisci il turno?",who:"isang kasamahan",o:[["Alle due.", "Alas-dos."], ["In mensa.", "Sa mess."], ["Con Joy.", "Kasama si Joy."]],e:"Oras: {alle…}"},
 {t:"gap",s:"Mi piace ＿ musica.",o:["la", "il", "lo"],it:"Gusto ko ang musika.",e:"Pambabae ang {musica}."},
 {t:"err",s:"Vado in Genova domani.",bad:1,fix:"Vado a Genova domani.",it:"Sinasabi mo ang plano.",e:"Lungsod: {a}."}
]);
XX("l15",[
 {t:"gap",s:"Ieri ＿ visto un film.",o:["ho", "sono", "avevo"],it:"Nanood ako ng pelikula kahapon.",e:"{vedere} → {avere}."},
 {t:"err",s:"Io mangiato la paella.",bad:1,fix:"Io ho mangiato la paella.",it:"Ikinukuwento ni Ravi ang araw niya.",e:"Huwag kalimutan ang {avere}."},
 {t:"err",s:"Ho prenduto la chiave.",bad:1,fix:"Ho preso la chiave.",it:"Kinuha mo ang susi.",e:"{prendere} → {preso}."},
 {t:"rep",ask:"Cosa hai fatto ieri?",who:"si Joy",o:[["Ho visitato Barcellona.", "Namasyal ako sa Barcelona."], ["Visito Barcellona domani.", "Mamamasyal ako bukas."], ["Sono stanco.", "Pagod ako."]],e:"Nakaraan: {passato prossimo}."},
 {t:"ord",ear:1,q:"«Marami akong kinuhang litrato.»",w:["Ho", "fatto", "tante", "foto."],x:["sono"],a:["Ho fatto tante foto."]}
]);
XX("l16",[
 {t:"gap",s:"Joy è ＿ a Palma.",o:["andata", "andato", "andati"],it:"Pumunta si Joy sa Palma.",e:"{essere} + babae: {andata}."},
 {t:"err",s:"Ho andato a Napoli.",bad:0,fix:"Sono andato a Napoli.",it:"Ikinukuwento mo ang pasyal.",e:"{andare} → {essere}."},
 {t:"err",s:"Oggi è molto caldo.",bad:1,fix:"Oggi fa molto caldo.",it:"Inilalarawan mo ang panahon.",e:"Panahon: {fa caldo}."},
 {t:"rep",ask:"Che tempo fa?",who:"isang pasahero",o:[["C'è il sole, ma c'è vento.", "Maaraw, pero mahangin."], ["Sono le tre.", "Alas-tres na."], ["Il quindici maggio.", "Mayo 15."]],e:"Panahon: {c'è il sole}…"},
 {t:"ord",q:"«Bumalik kami nang alas-sais.»",w:["Siamo", "tornati", "alle", "sei."],x:["abbiamo"],a:["Siamo tornati alle sei."]}
]);
XX("l17",[
 {t:"gap",s:"Quando ＿ piccolo, abitavo a Kochi.",o:["ero", "sono stato", "sono"],it:"Noong bata ako, nakatira ako sa Kochi.",e:"Paglalarawan: {ero}."},
 {t:"err",s:"Da piccolo ho giocato sempre in spiaggia.",bad:2,fix:"Da piccolo giocavo sempre in spiaggia.",it:"Nakagawian noong bata.",e:"Nakagawian: {imperfetto}."},
 {t:"rep",ask:"Cosa facevi da bambino?",who:"si Joy",o:[["Andavo a scuola e nuotavo.", "Pumapasok ako sa paaralan at lumalangoy."], ["Andrò a scuola.", "Papasok ako sa paaralan."], ["Ho nuotato ieri.", "Lumangoy ako kahapon."]],e:"Nakagawian → {imperfetto}."},
 {t:"ord",ear:1,q:"«Nakatira kami malapit sa dagat.»",w:["Abitavamo", "vicino", "al", "mare."],x:["abitiamo"],a:["Abitavamo vicino al mare."]}
]);
XX("l18",[
 {t:"gap",s:"Dormivo quando ＿ l'allarme.",o:["è suonato", "suonava", "suona"],it:"Natutulog ako nang tumunog ang alarma.",e:"Pangyayari: {passato prossimo}."},
 {t:"err",s:"È stata notte e ha piovuto forte.",bad:0,fix:"Era notte e pioveva forte.",it:"Tagpo ng kuwento.",e:"Tagpo: {imperfetto}."},
 {t:"rep",ask:"Hai mai visto una tempesta?",who:"si Mark",o:[["Sì, una volta, l'anno scorso.", "Oo, minsan, noong isang taon."], ["Sì, domani.", "Oo, bukas."], ["Ho paura.", "Natatakot ako."]],e:"{Hai mai…?} = nakapag-… ka na ba?"},
 {t:"ord",q:"«Habang naghihintay kami, tinulungan namin ang mga pasahero.»",w:["Mentre", "aspettavamo,", "abbiamo", "aiutato", "i", "passeggeri."],x:["siamo"],a:["Mentre aspettavamo, abbiamo aiutato i passeggeri."]}
]);
XX("l19",[
 {t:"gap",s:"A mia sorella ＿ piacciono i profumi.",o:["le", "gli", "la"],it:"Gusto ng kapatid kong babae ang mga pabango.",e:"Babae: {le}."},
 {t:"err",s:"A mia madre gli telefono ogni domenica.",bad:3,fix:"A mia madre telefono ogni domenica.",it:"Tinatawagan mo ang nanay mo.",e:"May {a mia madre} na: hindi na kailangan ang {gli} (at {le} para sa babae)."},
 {t:"err",s:"Genova è più grande che Palma.",bad:4,fix:"Genova è più grande di Palma.",it:"Paghahambing ng dalawang lungsod.",e:"Bago ang pangalan: {di}."},
 {t:"ord",q:"«Mas maganda itong asul kaysa sa pula.»",w:["Questa", "blu", "è", "più", "bella", "di", "quella", "rossa."],x:["che"],a:["Questa blu è più bella di quella rossa."]}
]);
XX("l20",[
 {t:"gap",s:"La giacca? ＿ prendo!",o:["La", "Lo", "Le"],it:"Ang jacket? Kukunin ko!",e:"Pambabae ang {giacca}: {la}."},
 {t:"err",s:"Prendo la!",bad:1,fix:"La prendo!",it:"Bibilhin mo ang jacket.",e:"{la} bago ang pandiwa."},
 {t:"err",s:"Sono lavorando, scusa.",bad:0,fix:"Sto lavorando, scusa.",it:"Nagtatrabaho ka ngayon mismo.",e:"{stare} + {-ando}."},
 {t:"rep",ask:"Paga con la carta o in contanti?",who:"sa tindahan",o:[["Con la carta, grazie.", "Card po, salamat."], ["La taglia M.", "Size M."], ["Sto cercando una giacca.", "Naghahanap ako ng jacket."]],e:"Bayad: {con la carta} / {in contanti}."},
 {t:"ord",ear:1,q:"«Binili ko ito (jacket) sa Naples.»",w:["L'ho", "comprata", "a", "Napoli."],x:["comprato"],a:["L'ho comprata a Napoli."]}
]);
XX("l21",[
 {t:"gap",s:"Domani la nave ＿ alle sei.",o:["partirà", "partiva", "è partita"],it:"Bukas, aalis ang barko nang alas-sais.",e:"Hinaharap: {partirà}."},
 {t:"err",s:"Tornarò a casa a novembre.",bad:0,fix:"Tornerò a casa a novembre.",it:"Sinasabi ni Ravi ang plano niya.",e:"{-are} → {-erò}."},
 {t:"err",s:"Due mesi fa tornerò a Kochi.",bad:2,fix:"Tra due mesi tornerò a Kochi.",it:"Plano sa hinaharap.",e:"Hinaharap: {tra}; nakaraan ang {fa}."},
 {t:"rep",ask:"Cosa farai a casa?",who:"si Joy",o:[["Starò con la mia famiglia.", "Makakasama ko ang pamilya ko."], ["Sono stato a casa.", "Nasa bahay ako noon."], ["Stavo a casa.", "Nasa bahay ako dati."]],e:"Hinaharap → {futuro}."},
 {t:"ord",q:"«Kung uulan bukas, mananatili ako sa kabina.»",w:["Se", "domani", "piove,", "resto", "in", "cabina."],x:["allora"],a:["Se domani piove, resto in cabina."]}
]);
XX("l22",[
 {t:"gap",s:"Mi ＿ male i piedi.",o:["fanno", "fa", "ho"],it:"Masakit ang mga paa ko.",e:"Maramihan: {fanno}."},
 {t:"err",s:"Devi riposare un po', secondo me.",bad:0,fix:"Dovresti riposare un po', secondo me.",it:"Nagpapayo ka sa kasamahan.",e:"Payo: {dovresti}."},
 {t:"rep",ask:"Ha la febbre?",who:"ang doktora",o:[["No, ma mi fa male la testa.", "Wala, pero masakit ang ulo ko."], ["Sì, sono febbre.", "Oo, lagnat ako."], ["Due volte al giorno.", "Dalawang beses sa isang araw."]],e:"{mi fa male} = masakit."},
 {t:"ord",ear:1,q:"«Puwede po bang ulitin ninyo?»",w:["Potrebbe", "ripetere,", "per", "favore?"],x:["può"],a:["Potrebbe ripetere, per favore?"]}
]);
XX("l23",[
 {t:"gap",s:"Lavoro sulle navi ＿ cinque anni.",o:["da", "fa", "per"],it:"Limang taon na akong nagtatrabaho sa mga barko.",e:"Nagpapatuloy: {da}."},
 {t:"err",s:"Ho lavorato qui da cinque anni.",bad:0,fix:"Lavoro qui da cinque anni.",it:"Sa interview.",e:"{da} + kasalukuyan."},
 {t:"err",s:"Le persone incontro sono simpatiche.",bad:2,fix:"Le persone che incontro sono simpatiche.",it:"Ikinukuwento mo ang trabaho mo.",e:"Pagdugtungin gamit ang {che}."},
 {t:"rep",ask:"Da quanto tempo studia italiano?",who:"sa interview",o:[["Da un anno.", "Isang taon na."], ["Un anno fa.", "Isang taon na ang nakalipas."], ["Tra un anno.", "Pagkalipas ng isang taon."]],e:"{da quanto tempo} → {da…}."},
 {t:"ord",ear:1,q:"«Gusto kong maging maître.»",w:["Mi", "piacerebbe", "diventare", "maître."],x:["piace"],a:["Mi piacerebbe diventare maître."]}
]);
XX("r3",[
 {t:"rep",ask:"Mi parli un po' di Lei.",who:"sa interview",o:[["Mi chiamo Joy e lavoro sulle navi da sei anni.", "Ako si Joy at anim na taon na akong nagtatrabaho sa mga barko."], ["Lavoravo domani.", "Nagtatrabaho ako bukas noon."], ["Sì, grazie.", "Oo, salamat."]],e:"Ang kuwento mo: {da} + kasalukuyan."},
 {t:"gap",s:"Se avrò i soldi, ＿ un ristorante.",o:["aprirò", "aprivo", "ho aperto"],it:"Kung may pera ako, magbubukas ako ng restawran.",e:"{se} + hinaharap → hinaharap."},
 {t:"err",s:"Ieri sono andato in città e ho comprato un regalo per la mia madre.",bad:11,fix:"Ieri sono andato in città e ho comprato un regalo per mia madre.",it:"Ikinukuwento mo ang araw mo.",e:"Isang kapamilya: walang artikulo."}
]);
