/* ---------- Esercizi Milepost: ricomponi, completa, trova l'errore, costruisci, rispondi ----------
   Formats in shell/exercises.js. Sentences come from the lessons whenever possible (same audio);
   «err» uses mistakes that Italian speakers really make. Checked by tools/drills_check.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"rep",ask:"おはよう ございます 。",who:"Una collega, al mattino",o:[["おはよう ございます 。","Buongiorno."],["こんばんは 。","Buonasera."],["さようなら 。","Arrivederci."]],e:"Al mattino si risponde con lo stesso saluto."},
 {t:"rep",ask:"これ 、 どうぞ 。",who:"Un'amica ti porge un regalo",o:[["ありがとう ございます ！","Grazie!"],["いいえ 。","Di niente."],["おはよう ございます 。","Buongiorno."]],e:"どうぞ = prego, tenga: si ringrazia."},
 {t:"gap",s:"ありがとう ＿ 。",o:["ございます","です","ください"],it:"Grazie (in modo cortese).",e:"ありがとう ございます è la forma cortese di «grazie»."}
]);
XX("l2",[
 {t:"ord",q:"«Piacere, sono Marco.»",w:["はじめまして","マルコ","です"],x:["さん"],a:["はじめまして 。 マルコ です 。"],e:"Di sé stessi non si dice さん."},
 {t:"ord",ear:1,q:"«Sono un'insegnante di giapponese.»",w:["わたし","は","日本語[にほんご]","の","先生[せんせい]","です"],x:["か"],a:["わたし は 日本語[にほんご] の 先生[せんせい] です 。"]},
 {t:"gap",s:"マルコ さん は 学生[がくせい] です ＿ 。",o:["か","は","の"],it:"Marco, sei uno studente?",e:"か in fondo trasforma la frase in una domanda."},
 {t:"gap",s:"日本語[にほんご] ＿ 先生[せんせい] です 。",o:["の","は","か"],it:"Sono un'insegnante di giapponese.",e:"の lega due nomi, con la specificazione prima: 日本語の先生 = insegnante di giapponese."},
 {t:"err",s:"わたし は マルコ さん です 。",bad:3,fix:"わたし は マルコ です 。",it:"Volevi dire «Sono Marco».",e:"さん è un segno di rispetto per gli altri: per sé stessi non si usa mai. A un italiano sembra parte del nome."},
 {t:"rep",ask:"はじめまして 。 たなか ゆき です 。",o:[["はじめまして 。 マルコ です 。","Piacere. Sono Marco."],["はい 、 学生[がくせい] です 。","Sì, sono studente."],["さようなら 。","Arrivederci."]],e:"A はじめまして si risponde allo stesso modo, con il proprio nome."}
]);
XX("l3",[
 {t:"ord",q:"«Questo è l'ombrello di Yuki.»",w:["これ","は","ゆき","さん","の","かさ","です"],x:["を"],a:["これ は ゆき さん の かさ です 。"],e:"Chi possiede viene prima: ゆき さん の かさ."},
 {t:"ord",ear:1,q:"«Anch'io sono studente.»",w:["わたし","も","学生[がくせい]","です"],x:["は"],a:["わたし も 学生[がくせい] です 。"]},
 {t:"gap",s:"いいえ 、 わたし の かさ ＿ ありません 。",o:["じゃ","は","も"],it:"No, non è il mio ombrello.",e:"じゃ ありません è la negazione di です."},
 {t:"gap",s:"けん さん ＿ 学生[がくせい] です か 。",o:["も","の","を"],it:"Anche tu sei studente, Ken?",e:"も = anche: prende il posto di は."},
 {t:"err",s:"けん さん も は 学生[がくせい] です か 。",bad:3,fix:"けん さん も 学生[がくせい] です か 。",it:"Volevi chiedere «Anche tu sei studente, Ken?».",e:"も prende il posto di は, non si aggiunge. «Anche» in giapponese è una particella, non una parola a sé."},
 {t:"rep",ask:"それ は けん さん の かさ です か 。",o:[["いいえ 、 ゆき さん の です 。","No, è di Yuki."],["はい 、 学生[がくせい] です 。","Sì, sono studente."],["たぶん 、 きょう です 。","Probabilmente oggi."]],e:"ゆき さん の = quello di Yuki: la cosa si sottintende."}
]);
XX("l4",[
 {t:"ord",q:"«Che cos'è questo?»",w:["これ","は","何[なん]","です","か"],x:["の"],a:["これ は 何[なん] です か 。"]},
 {t:"ord",ear:1,q:"«Quanto costa questo furoshiki?»",w:["この","ふろしき","は","いくら","です","か"],x:["これ"],a:["この ふろしき は いくら です か 。"]},
 {t:"gap",s:"＿ ふろしき は いくら です か 。",o:["この","これ","それ"],it:"Quanto costa questo furoshiki?",e:"Davanti a un nome si usa この; これ sta da solo."},
 {t:"gap",s:"じゃあ 、 これ ＿ ください 。",o:["を","は","の"],it:"Allora prendo questo.",e:"を segna la cosa che chiedi: これ を ください."},
 {t:"err",s:"これ ふろしき は 千[せん] えん です 。",bad:0,fix:"この ふろしき は 千[せん] えん です 。",it:"Volevi dire «Questo furoshiki costa mille yen».",e:"これ sta da solo («questo»); davanti a un nome serve この. In italiano «questo» va bene in tutti e due i casi."},
 {t:"rep",ask:"すみません 、 これ は 何[なん] です か 。",who:"Un cliente",o:[["それ は まくら です 。","Quello è un cuscino."],["千[せん] えん です 。","Mille yen."],["いらっしゃいませ 。","Benvenuto!"]],e:"Ti chiede che cos'è: si risponde con それ は … です."}
]);
XX("l5",[
 {t:"ord",q:"«Mio padre ha cinquant'anni.»",w:["父[ちち]","は","五十[ごじゅう]さい","です"],x:["を"],a:["父[ちち] は 五十[ごじゅう]さい です 。"]},
 {t:"ord",ear:1,q:"«Mia sorella maggiore ha 25 anni.»",w:["姉[あね]","は","二十五[にじゅうご]さい","です"],x:["を"],a:["姉[あね] は 二十五[にじゅうご]さい です 。"]},
 {t:"gap",s:"いぬ が ＿ 。",o:["います","あります","です"],it:"Ho un cane.",e:"Per persone e animali si usa います; per le cose あります."},
 {t:"gap",s:"ほん が ＿ 。",o:["あります","います","です"],it:"C'è un libro.",e:"Per le cose si usa あります."},
 {t:"err",s:"わたし の お母[かあ]さん は 先生[せんせい] です 。",bad:2,fix:"わたし の 母[はは] は 先生[せんせい] です 。",it:"Parli di tua madre con un collega: «Mia madre è insegnante».",e:"Per la propria famiglia, parlando con altri, si usa 母[はは]; お母[かあ]さん è per la madre degli altri, o per chiamare la mamma."},
 {t:"rep",ask:"何[なん]人[にん] かぞく です か 。",o:[["五人[ごにん] かぞく です 。","Siamo in cinque."],["二十五[にじゅうご]さい です 。","Ho 25 anni."],["いぬ が います 。","Ho un cane."]],e:"何人かぞく chiede quanti siete in famiglia."}
]);
XX("l6",[
 {t:"ord",q:"«A Tokyo fa un po' caldo.»",w:["とうきょう","は","ちょっと","あつい","です"],x:["な"],a:["とうきょう は ちょっと あつい です 。"]},
 {t:"ord",ear:1,q:"«Anche Milano è vivace.»",w:["ミラノ","も","にぎやか","です"],x:["な"],a:["ミラノ も にぎやか です 。"]},
 {t:"gap",s:"しずか ＿ まち です 。",o:["な","い","の"],it:"È una città tranquilla.",e:"Gli aggettivi in な (しずか, きれい, にぎやか) vogliono な davanti a un nome."},
 {t:"gap",s:"アパート は あまり 大[おお]きく ＿ です 。",o:["ない","な","じゃ"],it:"L'appartamento non è molto grande.",e:"Gli aggettivi in い fanno il negativo così: 大きい → 大きくない."},
 {t:"err",s:"これ は おいしい の ケーキ です 。",bad:3,fix:"これ は おいしい ケーキ です 。",it:"Volevi dire «Questa è una torta buona».",e:"Gli aggettivi in い vanno direttamente davanti al nome, senza の. Viene voglia di usare の come in «torta di…»."},
 {t:"rep",ask:"お元気[げんき] です か 。",o:[["はい 、 元気[げんき] です 。","Bene, grazie."],["はい 、 たかい です 。","Sì, è caro."],["ミラノ です 。","È Milano."]],e:"お元気ですか = come stai?"}
]);
XX("l7",[
 {t:"ord",q:"«Ogni mattina bevo un caffè.»",w:["毎朝[まいあさ]","コーヒー","を","飲[の]みます"],x:["が"],a:["毎朝[まいあさ] コーヒー を 飲[の]みます 。"],e:"Il verbo va sempre in fondo."},
 {t:"ord",ear:1,q:"«Il venerdì mangio con gli amici.»",w:["金曜日[きんようび]","は","ともだち","と","食[た]べます"],x:["を"],a:["金曜日[きんようび] は ともだち と 食[た]べます 。"]},
 {t:"gap",s:"大学[だいがく] ＿ 行[い]きます 。",o:["に","を","で"],it:"Vado all'università.",e:"La meta di un movimento vuole に (o へ)."},
 {t:"gap",s:"ぎんこう ＿ はたらいて います 。",o:["で","に","を"],it:"Lavoro in banca.",e:"Il luogo dove si fa un'azione vuole で."},
 {t:"err",s:"毎朝[まいあさ] コーヒー を 飲[の]みます です 。",bad:4,fix:"毎朝[まいあさ] コーヒー を 飲[の]みます 。",it:"Volevi dire «Ogni mattina bevo un caffè».",e:"I verbi in -ます sono già cortesi e completi: です non serve. Chi ha appena imparato です tende a metterlo ovunque."},
 {t:"rep",ask:"ばん ごはん は うち で 食[た]べます か 。",o:[["はい 。 でも 、 金曜日[きんようび] は ともだち と 食[た]べます 。","Sì, ma il venerdì con gli amici."],["日本語[にほんご] を 勉強[べんきょう]します 。","Studio giapponese."],["毎朝[まいあさ] です 。","Ogni mattina."]],e:"Ti chiede dove mangi la cena."}
]);
XX("l8",[
 {t:"ord",q:"«Due onigiri, per favore.»",w:["おにぎり","を","二[ふた]つ","ください"],x:["の"],a:["おにぎり を 二[ふた]つ ください 。"],e:"Il numero va dopo la cosa e la particella: おにぎりを 二つ."},
 {t:"ord",ear:1,q:"«Posso pagare con la carta?»",w:["カード","で","いい","です","か"],x:["を"],a:["カード で いい です か 。"]},
 {t:"gap",s:"ぜんぶ ＿ 四百五十[よんひゃくごじゅう] 円[えん] です 。",o:["で","に","を"],it:"In tutto sono 450 yen.",e:"ぜんぶで = in tutto."},
 {t:"gap",s:"ふくろ は ＿ か 。",o:["いります","います","あります"],it:"Le serve la busta?",e:"いります = serve, occorre."},
 {t:"err",s:"おにぎり を 二[に] ください 。",bad:2,fix:"おにぎり を 二[ふた]つ ください 。",it:"Volevi dire «Due onigiri, per favore».",e:"Per contare le cose si usano ひとつ, ふたつ, みっつ…: il numero da solo (に) non basta."},
 {t:"rep",ask:"ふくろ は いります か 。",who:"Il commesso",o:[["いいえ 、 だいじょうぶ です 。","No, va bene così."],["百五十[ひゃくごじゅう] 円[えん] です 。","150 yen."],["いらっしゃいませ 。","Benvenuto!"]],e:"だいじょうぶ です = va bene così, non serve."}
]);
XX("l9",[
 {t:"ord",q:"«Dov'è Yuki?»",w:["ゆき","さん","は","どこ","です","か"],x:["を"],a:["ゆき さん は どこ です か 。"]},
 {t:"ord",ear:1,q:"«Marco viene dall'Italia.»",w:["マルコ","さん","は","イタリア","から","来[き]ました"],x:["に"],a:["マルコ さん は イタリア から 来[き]ました 。"]},
 {t:"gap",s:"あの 人[ひと] は ＿ です か 。",o:["だれ","どこ","いつ"],it:"Chi è quella persona?",e:"だれ = chi; どこ = dove; いつ = quando."},
 {t:"gap",s:"日本[にほん] の アニメ ＿ 好[す]き です 。",o:["が","を","に"],it:"Mi piacciono gli anime giapponesi.",e:"Con 好き la cosa che piace vuole が."},
 {t:"err",s:"わたし は アニメ を 好[す]き です 。",bad:3,fix:"わたし は アニメ が 好[す]き です 。",it:"Volevi dire «Mi piacciono gli anime».",e:"好き non è un verbo ma un aggettivo: la cosa che piace vuole が. Pensando ad «amare qualcosa» viene da usare を."},
 {t:"rep",ask:"すみません 、 ゆき さん は どこ です か 。",o:[["今[いま] 、 としょかん です よ 。","Adesso è in biblioteca."],["イタリア から 来[き]ました 。","Viene dall'Italia."],["アニメ が 好[す]き です 。","Gli piacciono gli anime."]],e:"どこ chiede il luogo."},
 {t:"chr",c:"好",m:"piacere",w:"好[す]き",p:[["女","donna"],["子","bambino"]],d:[["人","persona"],["口","bocca"]],e:"Una donna con il suo bambino: ciò che si ama. 好[す]き = che piace."}
]);
XX("l10",[
 {t:"ord",q:"«Ieri ho visto un film con un'amica.»",w:["きのう","ともだち","と","えいが","を","見[み]ました"],x:["に"],a:["きのう ともだち と えいが を 見[み]ました 。"]},
 {t:"ord",ear:1,q:"«Ogni mattina mi alzo alle sette.»",w:["毎朝[まいあさ]","七時[しちじ]","に","起[お]きます"],x:["を"],a:["毎朝[まいあさ] 七時[しちじ] に 起[お]きます 。"]},
 {t:"gap",s:"じゅぎょう は 九時[くじ] ＿ です 。",o:["から","まで","に"],it:"Le lezioni cominciano alle nove.",e:"から = da, a partire da; まで = fino a."},
 {t:"gap",s:"テレビ は 見[み]ません ＿ 。",o:["でした","です","ました"],it:"Non ho guardato la TV.",e:"Il passato di -ません è -ません でした."},
 {t:"err",s:"きのう に えいが を 見[み]ました 。",bad:1,fix:"きのう えいが を 見[み]ました 。",it:"Volevi dire «Ieri ho visto un film».",e:"Con きのう, きょう, あした, 毎日 non si mette に; ci vuole invece con le ore: 七時に."},
 {t:"rep",ask:"毎朝[まいあさ] 何時[なんじ] に 起[お]きます か 。",o:[["七時[しちじ] に 起[お]きます 。","Mi alzo alle sette."],["ともだち と えいが を 見[み]ました 。","Ho visto un film con un'amica."],["十二時[じゅうにじ] ごろ ねました 。","Sono andata a letto verso mezzanotte."]],e:"何時に chiede a che ora."},
 {t:"chr",c:"休",m:"riposo",w:"休[やす]み",p:[["亻","persona"],["木","albero"]],d:[["女","donna"],["日","sole"]],e:"Una persona appoggiata a un albero: si riposa. 休[やす]み = giorno libero, vacanza."}
]);
XX("l11",[
 {t:"ord",q:"«Mi piace il calcio.»",w:["わたし","は","サッカー","が","好[す]き","です"],x:["を"],a:["わたし は サッカー が 好[す]き です 。"]},
 {t:"ord",ear:1,q:"«Non andiamo insieme a vedere una partita?»",w:["いっしょに","しあい","を","見[み]に","行[い]きません","か"],x:["が"],a:["いっしょに しあい を 見[み]に 行[い]きません か 。"]},
 {t:"gap",s:"いっしょに 行[い]き ＿ ！",o:["ましょう","ません","ました"],it:"Andiamo insieme!",e:"-ましょう = facciamo, andiamo: una proposta."},
 {t:"gap",s:"マルコ さん は りょうり が ＿ です 。",o:["上手[じょうず]","上手[じょうず]な","上手[じょうず]に"],it:"Marco è bravo a cucinare.",e:"Davanti a です l'aggettivo in な resta così: 上手です."},
 {t:"err",s:"しあい を 見[み]る に 行[い]きます 。",bad:2,fix:"しあい を 見[み]に 行[い]きます 。",it:"Volevi dire «Vado a vedere una partita».",e:"Prima di に si usa la radice della forma -ます: 見ます → 見に. L'italiano «andare a vedere» spinge a usare l'infinito."},
 {t:"rep",ask:"日曜日[にちようび] に いっしょに しあい を 見[み]に 行[い]きません か 。",o:[["いい です ね 。 行[い]きましょう ！","Bello! Andiamo!"],["サッカー と りょうり です 。","Il calcio e la cucina."],["三時[さんじ] から です 。","Dalle tre."]],e:"-ませんか è un invito: si accetta con 行きましょう."}
]);
XX("l12",[
 {t:"ord",q:"«L'ufficio postale è accanto alla banca.»",w:["ゆうびんきょく","は","ぎんこう","の","となり","に","あります"],x:["で"],a:["ゆうびんきょく は ぎんこう の となり に あります 。"],e:"«Accanto alla banca» = ぎんこう の となり: prima il punto di riferimento."},
 {t:"ord",ear:1,q:"«Vada dritto per questa strada.»",w:["この","道[みち]","を","まっすぐ","行[い]って","ください"],x:["に"],a:["この 道[みち] を まっすぐ 行[い]って ください 。"]},
 {t:"gap",s:"この ちかく ＿ ゆうびんきょく は あります か 。",o:["に","で","を"],it:"Qui vicino c'è un ufficio postale?",e:"Il luogo dove una cosa si trova vuole に."},
 {t:"gap",s:"二[ふた]つ目[め] の しんごう を ＿ に まがって ください 。",o:["左[ひだり]","上[うえ]","中[なか]"],it:"Al secondo semaforo giri a sinistra.",e:"左[ひだり] = sinistra, 右[みぎ] = destra."},
 {t:"err",s:"ゆうびんきょく は ぎんこう の となり で あります 。",bad:5,fix:"ゆうびんきょく は ぎんこう の となり に あります 。",it:"Volevi dire «L'ufficio postale è accanto alla banca».",e:"Con あります e います il luogo vuole に; で è per il luogo dove si fa un'azione. In italiano sono tutti e due «in» o «a»."},
 {t:"rep",ask:"すみません 、 えき は どこ です か 。",who:"Un turista",o:[["この 道[みち] を まっすぐ 行[い]って ください 。","Vada dritto per questa strada."],["気[き]を つけて 。","Faccia attenzione."],["ぎんこう に 行[い]きます 。","Vado in banca."]],e:"Ti chiede la strada: si risponde con le indicazioni."}
]);
XX("l13",[
 {t:"ord",q:"«Aspettami alla stazione.»",w:["えき","で","待[ま]って","ください"],x:["に"],a:["えき で 待[ま]って ください 。"]},
 {t:"ord",ear:1,q:"«Scrivilo qui, per favore.»",w:["ここ","に","書[か]いて","ください"],x:["を"],a:["ここ に 書[か]いて ください 。"]},
 {t:"gap",s:"飲[の]みもの を 買[か]って ＿ いい です か 。",o:["も","は","を"],it:"Posso comprare da bere?",e:"-て も いい です か = posso…?"},
 {t:"gap",s:"ここ で しゃしん を とって は ＿ 。",o:["いけません","いい です","ください"],it:"Qui non si possono fare foto.",e:"-て は いけません = non si può."},
 {t:"err",s:"えき で 待[ま]ちて ください 。",bad:2,fix:"えき で 待[ま]って ください 。",it:"Volevi dire «Aspetta alla stazione, per favore».",e:"I verbi in -つ fanno la forma -て con って: 待つ → 待って. Partire da 待ちます porta a dire 待ちて."},
 {t:"rep",ask:"コンビニ で 飲[の]みもの を 買[か]って も いい です か 。",o:[["いい です よ 。","Certo."],["もしもし 。","Pronto."],["すぐ 行[い]きます 。","Arrivo subito."]],e:"A «posso…?» si risponde いい です よ (sì) o すみません 、 ちょっと … (meglio di no)."},
 {t:"chr",c:"話",m:"parlare",w:"話[はな]す",p:[["言","dire, parola"],["舌","lingua (l'organo)"]],d:[["口","bocca"],["木","albero"]],e:"Parola 言 e lingua 舌: parlare."}
]);
XX("l14",[
 {t:"ord",q:"«Io prendo il menù di pesce.»",w:["わたし","は","魚[さかな]","の","ていしょく","に","します"],x:["を"],a:["わたし は 魚[さかな] の ていしょく に します 。"]},
 {t:"ord",ear:1,q:"«Due birre, per favore.»",w:["ビール","を","二本[にほん]","お願[ねが]いします"],x:["二枚[にまい]"],a:["ビール を 二本[にほん] お願[ねが]いします 。"]},
 {t:"gap",s:"コーヒー を 二[に] ＿ ください 。",o:["杯[はい]","本[ほん]","枚[まい]"],it:"Due caffè, per favore.",e:"Per tazze e bicchieri si usa 杯[はい]."},
 {t:"gap",s:"じゃあ 、 わたし は それ ＿ します 。",o:["に","を","が"],it:"Allora io prendo quello.",e:"〜に します = scelgo, prendo."},
 {t:"err",s:"ビール を 二枚[にまい] お願[ねが]いします 。",bad:2,fix:"ビール を 二本[にほん] お願[ねが]いします 。",it:"Volevi dire «Due birre (in bottiglia), per favore».",e:"Le bottiglie sono oggetti lunghi: si contano con 本[ほん]. 枚[まい] è per le cose piatte, come biglietti e magliette."},
 {t:"rep",ask:"ご注文[ちゅうもん] は ？",who:"Il cameriere",o:[["魚[さかな] の ていしょく を お願[ねが]いします 。","Il menù di pesce, per favore."],["二人[ふたり] です 。","Siamo in due."],["ごちそうさま でした 。","Era tutto buonissimo."]],e:"ご注文は chiede che cosa ordinate."}
]);
XX("l15",[
 {t:"ord",q:"«Il fine settimana è stato molto divertente.»",w:["週末[しゅうまつ]","は","とても","楽[たの]しかった","です"],x:["でした"],a:["週末[しゅうまつ] は とても 楽[たの]しかった です 。"]},
 {t:"ord",ear:1,q:"«Domenica era bel tempo.»",w:["日曜日[にちようび]","は","いい","天気[てんき]","でした"],x:["です"],a:["日曜日[にちようび] は いい 天気[てんき] でした 。"]},
 {t:"gap",s:"ホテル は あまり ＿ です 。",o:["よくなかった","いくなかった","いいなかった"],it:"L'hotel non era un granché.",e:"いい è irregolare: al passato negativo diventa よくなかった."},
 {t:"gap",s:"お寺[てら] は しずか ＿ 、 きれい でした 。",o:["で","くて","な"],it:"I templi erano tranquilli e belli.",e:"Per unire un aggettivo in な a un altro si usa で: しずか で."},
 {t:"err",s:"週末[しゅうまつ] は 楽[たの]しかった でした 。",bad:3,fix:"週末[しゅうまつ] は 楽[たの]しかった です 。",it:"Volevi dire «Il fine settimana è stato divertente».",e:"Gli aggettivi in い portano il passato su sé stessi (楽しかった) e です resta です. Con i nomi e gli aggettivi in な invece si dice でした."},
 {t:"rep",ask:"週末[しゅうまつ] は どう でした か 。",o:[["とても 楽[たの]しかった です 。","Mi sono divertito tantissimo."],["きょうと に 行[い]きます 。","Vado a Kyoto."],["はい 、 そう です 。","Sì, esatto."]],e:"どう でした か chiede com'è andata: si risponde al passato."}
]);
XX("l16",[
 {t:"ord",q:"«Vorrei andare in Hokkaido.»",w:["ほっかいどう","に","行[い]きたい","です"],x:["を"],a:["ほっかいどう に 行[い]きたい です 。"]},
 {t:"ord",ear:1,q:"«Da Tokyo ci vuole circa un'ora e mezza.»",w:["東京[とうきょう]","から","一時間[いちじかん]","半[はん]","ぐらい","かかります"],x:["まで"],a:["東京[とうきょう] から 一時間[いちじかん] 半[はん] ぐらい かかります 。"]},
 {t:"gap",s:"ひこうき ＿ 行[い]きます 。",o:["で","に","を"],it:"Ci vado in aereo.",e:"Il mezzo vuole で."},
 {t:"gap",s:"おいしい カニ を 食[た]べ ＿ です 。",o:["たい","ます","て"],it:"Voglio mangiare dei buoni granchi.",e:"Radice del verbo + たい = voglio…"},
 {t:"err",s:"ほっかいどう に 行[い]く たい です 。",bad:2,fix:"ほっかいどう に 行[い]きたい です 。",it:"Volevi dire «Vorrei andare in Hokkaido».",e:"たい si attacca alla radice della forma -ます: 行きます → 行きたい. L'italiano «voglio andare» spinge a usare l'infinito."},
 {t:"rep",ask:"何[なに] で 行[い]きます か 。",o:[["ひこうき で 行[い]きます 。","In aereo."],["八月[はちがつ] 十日[とおか] です 。","Il 10 agosto."],["ほっかいどう です 。","In Hokkaido."]],e:"何で chiede il mezzo."},
 {t:"chr",c:"時",m:"ora, tempo",w:"時間[じかん]",p:[["日","sole"],["寺","tempio: qui dà il suono «ji»"]],d:[["木","albero"],["口","bocca"]],e:"Il sole 日 misura il tempo; 寺 (tempio, じ) dà il suono."}
]);
XX("l17",[
 {t:"ord",q:"«Da bambino abitavo a Milano.»",w:["子[こ]ども","の","とき","ミラノ","に","住[す]んでた"],x:["で"],a:["子[こ]ども の とき 、 ミラノ に 住[す]んでた 。"]},
 {t:"ord",ear:1,q:"«Sei mai stato a Hiroshima?»",w:["ひろしま","に","行[い]った","こと","ある"],x:["を"],a:["ひろしま に 行[い]った こと ある ？"]},
 {t:"gap",s:"一度[いちど] 、 すし を 食[た]べた ＿ が あります 。",o:["こと","とき","もの"],it:"Ho mangiato il sushi una volta.",e:"-た こと が あります = ho già fatto (un'esperienza)."},
 {t:"gap",s:"子[こ]ども の ＿ 、 よく およいだ 。",o:["とき","こと","まえ"],it:"Da bambino nuotavo spesso.",e:"〜の とき = quando, al tempo di."},
 {t:"err",s:"まち は しずか だった です 。",bad:4,fix:"まち は しずか だった 。",it:"Volevi dire «La città era tranquilla» (tra amici).",e:"Con だった la frase è già al passato in forma informale: です non si aggiunge. In forma cortese si dice しずか でした."},
 {t:"rep",ask:"ひろしま に 行[い]った こと ある ？",who:"Ken, tra amici",o:[["ううん 、 まだ ない 。","No, non ancora."],["うん 、 毎日[まいにち] 見[み]た よ 。","Sì, li guardavo ogni giorno."],["ミラノ の ちかく 。","Vicino a Milano."]],e:"〜た こと ある ？ chiede un'esperienza: ある (sì) o まだ ない (non ancora)."},
 {t:"chr",c:"住",m:"abitare",w:"住[す]む",p:[["亻","persona"],["主","padrone: qui dà il suono «ju»"]],d:[["木","albero"],["口","bocca"]],e:"Una persona 亻 e il suono di 主[しゅ]: chi abita in un posto."}
]);
XX("l18",[
 {t:"ord",q:"«Adesso sto cucinando.»",w:["今[いま]","りょうり","を","して","います"],x:["が"],a:["今[いま] りょうり を して います 。"]},
 {t:"ord",ear:1,q:"«Mia madre abita a Osaka.»",w:["母[はは]","は","おおさか","に","住[す]んで","います"],x:["で"],a:["母[はは] は おおさか に 住[す]んで います 。"]},
 {t:"gap",s:"夜[よる] ごはん を 食[た]べて ＿ 、 来[き]ます 。",o:["から","まで","より"],it:"Viene dopo aver cenato.",e:"-て から = dopo aver…"},
 {t:"gap",s:"マルコ さん を 知[し]って ＿ か 。",o:["います","あります","します"],it:"Conosci Marco?",e:"«Conoscere» si dice 知って います: uno stato che dura."},
 {t:"err",s:"母[はは] は おおさか で 住[す]んで います 。",bad:3,fix:"母[はは] は おおさか に 住[す]んで います 。",it:"Volevi dire «Mia madre abita a Osaka».",e:"住む vuole に: è uno stare in un luogo, non un'azione che si fa lì. «Abitare a» porta gli italiani a usare で."},
 {t:"rep",ask:"今[いま] 、 何[なに] を して います か 。",who:"Al telefono",o:[["今[いま] 、 りょうり を して います 。","Sto cucinando."],["おおさか に 住[す]んで います 。","Abita a Osaka."],["二日[ふつか] とまります 。","Si ferma due giorni."]],e:"-て います qui è l'azione in corso."},
 {t:"chr",c:"知",m:"sapere, conoscere",w:"知[し]って います",p:[["矢","freccia"],["口","bocca"]],d:[["木","albero"],["日","sole"]],e:"Una freccia 矢 e una bocca 口: chi sa parla dritto al punto, come una freccia."}
]);
XX("l19",[
 {t:"ord",q:"«Preferisco la pasta.»",w:["パスタ","の","ほう","が","好[す]き","です"],x:["より"],a:["パスタ の ほう が 好[す]き です 。"]},
 {t:"ord",ear:1,q:"«Penso che sia più buono della pizza.»",w:["ピザ","より","おいしい","と","思[おも]います"],x:["ほど"],a:["ピザ より おいしい と 思[おも]います 。"]},
 {t:"gap",s:"日本[にほん] の 食[た]べもの の 中[なか] で 何[なに] が ＿ 好[す]き です か 。",o:["いちばん","より","ほど"],it:"Tra i cibi giapponesi, quale ti piace di più?",e:"いちばん = il più, tra tanti."},
 {t:"gap",s:"ラーメン と パスタ と 、 ＿ が 好[す]き です か 。",o:["どちら","どれ","だれ"],it:"Ti piace di più il ramen o la pasta?",e:"Tra due cose si chiede どちら; tra tante どれ."},
 {t:"err",s:"ピザ より おいしい だ と 思[おも]います 。",bad:3,fix:"ピザ より おいしい と 思[おも]います 。",it:"Volevi dire «Penso che sia più buono della pizza».",e:"Gli aggettivi in い non vogliono だ: おいしいと思います. だ va solo dopo i nomi e gli aggettivi in な (しずかだと思います)."},
 {t:"rep",ask:"けん さん は どう 思[おも]います か 。",o:[["わたし は どちら も 好[す]き です 。","A me piacciono tutti e due."],["いいえ 、 じょうだん です 。","No, scherzo."],["はい 、 ラーメン です 。","Sì, è ramen."]],e:"どう思いますか chiede un'opinione."},
 {t:"chr",c:"思",m:"pensare",w:"思[おも]います",p:[["田","campo (qui: la testa)"],["心","cuore"]],d:[["口","bocca"],["木","albero"]],e:"Sopra la testa, sotto il cuore 心: pensare."}
]);
XX("l20",[
 {t:"ord",q:"«Vorrei fare un regalo a mia madre.»",w:["母[はは]","に","プレゼント","を","あげたい","です"],x:["が"],a:["母[はは] に プレゼント を あげたい です 。"]},
 {t:"ord",ear:1,q:"«Me lo incarti come regalo, per favore.»",w:["プレゼント","用[よう]","に","つつんで","ください"],x:["を"],a:["プレゼント 用[よう] に つつんで ください 。"]},
 {t:"gap",s:"マルコ さん が チョコ を ＿ 。",o:["くれました","あげました","もらいました"],it:"Marco mi ha regalato del cioccolato.",e:"Quando qualcuno dà qualcosa a me si usa くれる; あげる è dare a un altro."},
 {t:"gap",s:"どうぞ 、 さわって ＿ ください 。",o:["みて","いて","あげて"],it:"Prego, provi a toccarla.",e:"-て みる = provare a fare."},
 {t:"err",s:"マルコ さん が わたし に チョコ を あげました 。",bad:7,fix:"マルコ さん が わたし に チョコ を くれました 。",it:"Volevi dire «Marco mi ha regalato del cioccolato».",e:"Se il regalo arriva a te si usa くれる, non あげる. In italiano «dare» va bene in tutte e due le direzioni."},
 {t:"rep",ask:"こちら の スカーフ は いかが です か 。",who:"La commessa",o:[["きれい です ね 。 これ に します 。","È bella. Prendo questa."],["いらっしゃいませ 。","Benvenuta."],["かしこまりました 。","Certamente."]],e:"いかが です か = che ne dice? (molto cortese)."}
]);
XX("l21",[
 {t:"ord",q:"«A marzo dovrei laurearmi.»",w:["三月[さんがつ]","に","そつぎょう","する","予定[よてい]","です"],x:["を"],a:["三月[さんがつ] に そつぎょう する 予定[よてい] です 。"]},
 {t:"ord",ear:1,q:"«Penso di lavorare in un'azienda giapponese.»",w:["日本[にほん]","の","会社[かいしゃ]","で","はたらこう","と","思[おも]って","います"],x:["に"],a:["日本[にほん] の 会社[かいしゃ] で はたらこう と 思[おも]って います 。"]},
 {t:"gap",s:"そつぎょう ＿ 、 イタリア に 帰[かえ]ります か 。",o:["したら","すると","して"],it:"Dopo la laurea torni in Italia?",e:"-たら = quando, una volta che."},
 {t:"gap",s:"来年[らいねん] 、 日本[にほん] に 留学[りゅうがく] する ＿ です 。",o:["つもり","こと","ほう"],it:"L'anno prossimo ho intenzione di studiare in Giappone.",e:"Forma del dizionario + つもり です = ho intenzione di."},
 {t:"err",s:"日本[にほん] で はたらきます つもり です 。",bad:2,fix:"日本[にほん] で はたらく つもり です 。",it:"Volevi dire «Ho intenzione di lavorare in Giappone».",e:"Davanti a つもり, 予定 e こと si usa la forma del dizionario (はたらく), non quella in -ます."},
 {t:"rep",ask:"来年[らいねん] は どう する つもり です か 。",o:[["日本[にほん] で はたらく つもり です 。","Ho intenzione di lavorare in Giappone."],["はい 、 ぜひ ！","Sì, volentieri!"],["三月[さんがつ] でした 。","Era marzo."]],e:"どう する つもり chiede i tuoi progetti."}
]);
XX("l22",[
 {t:"ord",q:"«Da ieri ho mal di testa.»",w:["きのう","から","あたま","が","いたい","です"],x:["を"],a:["きのう から あたま が いたい です 。"]},
 {t:"ord",ear:1,q:"«Prenda questa medicina tre volte al giorno.»",w:["この","くすり","を","一日[いちにち]","三回[さんかい]","飲[の]んで","ください"],x:["食[た]べて"],a:["この くすり を 一日[いちにち] 三回[さんかい] 飲[の]んで ください 。"]},
 {t:"gap",s:"二日[ふつか] ぐらい 休[やす]んだ ＿ が いい です 。",o:["ほう","こと","とき"],it:"È meglio che riposi un paio di giorni.",e:"-た ほう が いい = è meglio…"},
 {t:"gap",s:"この くすり を 飲[の]まなければ ＿ 。",o:["なりません","いけます","いい です"],it:"Devo prendere questa medicina.",e:"-なければ なりません = devo."},
 {t:"err",s:"ごはん の あと に くすり を 食[た]べます 。",bad:6,fix:"ごはん の あと に くすり を 飲[の]みます 。",it:"Volevi dire «Prendo la medicina dopo i pasti».",e:"In giapponese le medicine si «bevono»: くすりを 飲みます, anche le pastiglie. In italiano si «prendono», e viene da cercare un altro verbo."},
 {t:"rep",ask:"どう しました か 。",who:"Il medico",o:[["あたま が いたい ん です 。","È che ho mal di testa."],["お大事[だいじ] に 。","Si riguardi."],["ごはん の あと です 。","Dopo i pasti."]],e:"どう しました か = che cosa si sente?"},
 {t:"chr",c:"体",m:"corpo",w:"体[からだ]",p:[["亻","persona"],["本","radice, origine"]],d:[["木","albero"],["口","bocca"]],e:"Una persona 亻 e la sua radice 本: il corpo."}
]);
XX("l23",[
 {t:"ord",q:"«Tre anni fa sono venuto in Giappone.»",w:["三年[さんねん]","前[まえ]","に","日本[にほん]","に","来[き]ました"],x:["を"],a:["三年[さんねん] 前[まえ] に 日本[にほん] に 来[き]ました 。"]},
 {t:"ord",ear:1,q:"«Yuki mi ha insegnato tante cose.»",w:["ゆき","さん","が","いろいろ","教[おし]えて","くれました"],x:["あげました"],a:["ゆき さん が いろいろ 教[おし]えて くれました 。"]},
 {t:"gap",s:"日本語[にほんご] が 上手[じょうず] ＿ なりました 。",o:["に","く","が"],it:"Sono diventato bravo in giapponese.",e:"Con gli aggettivi in な: 上手に なる; con quelli in い: 大きく なる."},
 {t:"gap",s:"毎日[まいにち] 少[すこ]し ＿ 勉強[べんきょう]しました 。",o:["ずつ","ぐらい","から"],it:"Ho studiato ogni giorno un po' alla volta.",e:"ずつ = … alla volta."},
 {t:"err",s:"日本語[にほんご] が 上手[じょうず]く なりました 。",bad:2,fix:"日本語[にほんご] が 上手[じょうず] に なりました 。",it:"Volevi dire «Sono diventato bravo in giapponese».",e:"上手 è un aggettivo in な: si dice 上手に なる. La forma in く è solo per gli aggettivi in い (大きく なる)."},
 {t:"rep",ask:"どうして 日本[にほん] に 来[き]ました か 。",o:[["日本[にほん] の アニメ が 好[す]き でした から 。","Perché mi piacevano gli anime."],["三年[さんねん] 前[まえ] です 。","Tre anni fa."],["東京[とうきょう] に 住[す]んで います 。","Abito a Tokyo."]],e:"どうして chiede il perché: si risponde con 〜から."},
 {t:"chr",c:"明",m:"luminoso",w:"明日[あした]",p:[["日","sole"],["月","luna"]],d:[["木","albero"],["口","bocca"]],e:"Sole e luna insieme: luminoso. 明日[あした] è il giorno «luminoso» che viene."}
]);
