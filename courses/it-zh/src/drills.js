/* ---------- Esercizi Milepost (italiano per chi parla cinese): 组句、选词填空、找错误、回答 ----------
   Formats in shell/exercises.js. Sentences come from the lessons whenever possible (same audio);
   «err» uses mistakes that Chinese speakers really make. Checked by tools/drills_check.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"rep",ask:"Grazie!",who:"一位朋友",o:[["Prego!","不客气！"],["Ciao!","你好！"],["Scusa!","对不起！"]],e:"别人说 Grazie，就回答 Prego。"},
 {t:"rep",ask:"Buonanotte!",who:"晚上，家人",o:[["Buonanotte!","晚安！"],["Buongiorno!","早上好！"],["Prego!","不客气！"]],e:"睡觉前说 buonanotte，对方也用 buonanotte 回答。"},
 {t:"gap",s:"Un caffè, per ＿!",o:["favore","grazie","prego"],it:"请来一杯咖啡。",e:"per favore = 请。"}
]);
XX("l2",[
 {t:"ord",q:"«我叫马可。»",w:["mi","chiamo","Marco"],x:["è"],a:["Mi chiamo Marco."]},
 {t:"ord",ear:1,q:"«我是意大利人，罗马人。»",w:["io","sono","italiano","di","Roma"],x:["a"],a:["Io sono italiano, di Roma."]},
 {t:"gap",s:"Come ti ＿?",o:["chiami","chiamo","chiama"],it:"你叫什么名字？",e:"「你」用 ti chiami，「我」用 mi chiamo。"},
 {t:"gap",s:"Io ＿ studente.",o:["sono","è","sei"],it:"我是学生。",e:"essere 的变位：io sono, tu sei, lui/lei è。"},
 {t:"err",s:"Io è cinese.",bad:1,fix:"Io sono cinese.",it:"你想说「我是中国人」。",e:"意大利语的动词要跟着人称变：io sono, tu sei, lui è。中文的「是」不变，所以很容易一直用同一个形式。"},
 {t:"rep",ask:"Ciao! Mi chiamo Marco. Come ti chiami?",o:[["Mi chiamo Li Wei.","我叫李薇。"],["Sono di Pechino.","我是北京人。"],["Piacere mio!","我也很高兴！"]],e:"Come ti chiami? 问的是名字。"}
]);
XX("l3",[
 {t:"ord",q:"«早上好！您好吗？»",w:["buongiorno","come","sta"],x:["stai"],a:["Buongiorno! Come sta?"],e:"对长辈和陌生人用 Lei 的形式：come sta?"},
 {t:"ord",ear:1,q:"«您是新来的老师吗？»",w:["Lei","è","il","nuovo","insegnante"],x:["un"],a:["Lei è il nuovo insegnante?"]},
 {t:"gap",s:"Bene, grazie. E ＿?",o:["Lei","io","lui"],it:"很好，谢谢。您呢？",e:"对陌生人或长辈用 Lei（您），写的时候大写 L。"},
 {t:"gap",s:"Arrivederci, buona ＿!",o:["giornata","giorno","giornate"],it:"再见，祝您一天愉快！",e:"giornata 是阴性单数，所以是 buona giornata。"},
 {t:"err",s:"Buongiorno, professore! Come stai?",bad:3,fix:"Buongiorno, professore! Come sta?",it:"你在跟老师说话。",e:"对老师、陌生人要用 Lei 的形式：come sta?。come stai? 只对朋友和家人说。"},
 {t:"rep",ask:"Buongiorno! Come sta?",who:"一位女士",o:[["Bene, grazie. E Lei?","很好，谢谢。您呢？"],["Sono Paolo Rossi.","我是保罗·罗西。"],["Buona giornata!","祝您一天愉快！"]],e:"别人问 come sta，回答以后也问回去：E Lei?"}
]);
XX("l4",[
 {t:"ord",q:"«房间里有一张床。»",w:["nella","camera","c'è","un","letto"],x:["sono"],a:["Nella camera c'è un letto.","C'è un letto nella camera."]},
 {t:"ord",ear:1,q:"«有两扇窗户。»",w:["ci","sono","due","finestre"],x:["c'è"],a:["Ci sono due finestre."]},
 {t:"gap",s:"Questo è ＿ zaino.",o:["uno","un","una"],it:"这是一个背包。",e:"z 或 s+辅音开头的阳性名词用 uno：uno zaino, uno studente。"},
 {t:"gap",s:"Ci sono due ＿.",o:["finestre","finestra","finestri"],it:"有两扇窗户。",e:"-a 结尾的阴性名词，复数变成 -e：finestra → finestre。"},
 {t:"err",s:"C'è due finestre.",bad:0,fix:"Ci sono due finestre.",it:"你想说「有两扇窗户」。",e:"一个东西用 c'è，几个东西用 ci sono。中文的「有」不分单复数。"},
 {t:"rep",ask:"E che cos'è questo?",o:[["È uno zaino.","这是一个背包。"],["Sì, c'è.","有。"],["Che bella!","真漂亮！"]],e:"Che cos'è? 问「这是什么」。"}
]);
XX("l5",[
 {t:"ord",q:"«我有一个妹妹。»",w:["ho","una","sorella"],x:["sono"],a:["Ho una sorella."]},
 {t:"ord",ear:1,q:"«我妹妹十六岁。»",w:["mia","sorella","ha","sedici","anni"],x:["è"],a:["Mia sorella ha sedici anni."]},
 {t:"gap",s:"Ho venti ＿.",o:["anni","anno","età"],it:"我二十岁。",e:"说年龄：avere + 数字 + anni。"},
 {t:"gap",s:"Questi sono ＿ genitori.",o:["i miei","mio","miei"],it:"这是我的父母。",e:"复数的家人前面要加冠词：i miei genitori；单数不加：mio padre。"},
 {t:"err",s:"Io sono venti anni.",bad:1,fix:"Io ho venti anni.",it:"你想说「我二十岁」。",e:"意大利语说年龄用 avere（有）：ho venti anni，「我有二十年」。中文直接说「我二十岁」，所以容易用 sono。"},
 {t:"rep",ask:"E tu, hai fratelli?",o:[["Sì, ho due sorelle e un fratello.","有，我有两个姐妹和一个兄弟。"],["Ha sedici anni.","她十六岁。"],["È molto alta!","她很高！"]],e:"hai fratelli? = 你有兄弟姐妹吗？"}
]);
XX("l6",[
 {t:"ord",q:"«我很好，可是我饿了。»",w:["sto","bene","ma","ho","fame"],x:["sono"],a:["Sto bene, ma ho fame."]},
 {t:"ord",ear:1,q:"«我也饿了。»",w:["anch'io","ho","fame"],x:["sono"],a:["Anch'io ho fame."]},
 {t:"gap",s:"Come ＿?",o:["stai","sei","hai"],it:"你好吗？",e:"问身体和心情用 stare：come stai?"},
 {t:"gap",s:"Sono ＿ perché ho molto lavoro.",o:["stanca","stanco","stanche"],it:"我（女）很累，因为工作很多。",e:"说话的人是女生，形容词也用阴性：stanca。"},
 {t:"err",s:"Io sono bene, grazie.",bad:1,fix:"Io sto bene, grazie.",it:"你想说「我很好，谢谢」。",e:"「好不好」用 stare：sto bene。essere 后面接形容词（sono stanco），而 bene 是副词。"},
 {t:"rep",ask:"Ciao, come stai?",o:[["Così così. Sono stanca.","一般般。我很累。"],["Mi chiamo Li Wei.","我叫李薇。"],["Ho venti anni.","我二十岁。"]],e:"come stai? 问你好不好。"}
]);
XX("l7",[
 {t:"ord",q:"«我在一家餐厅工作。»",w:["lavoro","in","un","ristorante"],x:["a"],a:["Lavoro in un ristorante."]},
 {t:"ord",ear:1,q:"«我在大学学意大利语。»",w:["studio","italiano","all'università"],x:["in"],a:["Studio italiano all'università."]},
 {t:"gap",s:"Tu ＿ molto bene!",o:["parli","parla","parlo"],it:"你说得很好！",e:"-are 动词：io parlo, tu parli, lui parla。"},
 {t:"gap",s:"Le persone ＿ veloce.",o:["parlano","parla","parliamo"],it:"人们说得很快。",e:"loro（他们）的形式：parlano。"},
 {t:"err",s:"Io lavora in un ristorante.",bad:1,fix:"Io lavoro in un ristorante.",it:"你想说「我在一家餐厅工作」。",e:"io 的动词以 -o 结尾：io lavoro。lavora 是 lui/lei 的形式。"},
 {t:"rep",ask:"Che lavoro fai?",o:[["Faccio il cuoco.","我是厨师。"],["Studio molto.","我学得很多。"],["È normale.","这很正常。"]],e:"Che lavoro fai? 问你做什么工作。"}
]);
XX("l8",[
 {t:"ord",q:"«我想要一杯卡布奇诺。»",w:["vorrei","un","cappuccino"],x:["voglio"],a:["Vorrei un cappuccino."],e:"点东西用 vorrei，比 voglio 礼貌得多。"},
 {t:"ord",ear:1,q:"«再要一杯水，谢谢。»",w:["anche","un","bicchiere","d'acqua","per","favore"],x:["di"],a:["Anche un bicchiere d'acqua, per favore."]},
 {t:"gap",s:"Quanto ＿ un cornetto?",o:["costa","costano","è"],it:"一个羊角面包多少钱？",e:"一个东西用 costa，几个东西用 costano。"},
 {t:"gap",s:"Vorrei ＿ spremuta.",o:["una","un","uno"],it:"我想要一杯鲜榨果汁。",e:"spremuta 是阴性：una spremuta。"},
 {t:"err",s:"Vorrei uno cappuccino, per favore.",bad:1,fix:"Vorrei un cappuccino, per favore.",it:"你想说「我想要一杯卡布奇诺」。",e:"uno 只用在 z、s+辅音、gn、ps 开头的词前面：uno zaino。cappuccino 用 un。"},
 {t:"rep",ask:"Buongiorno, dica!",who:"咖啡馆的服务员",o:[["Vorrei un cappuccino, per favore.","我想要一杯卡布奇诺。"],["Grazie, altrettanto!","谢谢，您也是！"],["Tre euro e venti.","三欧二十。"]],e:"dica = 请说：服务员在问你要什么。"}
]);
XX("l9",[
 {t:"ord",q:"«你现在住在哪儿？»",w:["dove","abiti","adesso"],x:["sei"],a:["Dove abiti adesso?","Adesso dove abiti?"]},
 {t:"ord",ear:1,q:"«我住在米兰，大教堂附近。»",w:["abito","a","Milano","vicino","al","Duomo"],x:["in"],a:["Abito a Milano, vicino al Duomo."]},
 {t:"gap",s:"Con ＿ abiti?",o:["chi","che","dove"],it:"你和谁住？",e:"chi = 谁。"},
 {t:"gap",s:"Abito ＿ Milano.",o:["a","in","di"],it:"我住在米兰。",e:"城市前面用 a：a Milano；国家前面用 in：in Italia。"},
 {t:"err",s:"Abito in Milano da un anno.",bad:1,fix:"Abito a Milano da un anno.",it:"你想说「我在米兰住了一年了」。",e:"城市用 a，国家用 in：a Milano, in Italia。中文都是「在」，所以容易混。"},
 {t:"rep",ask:"Perché sei in Italia?",o:[["Perché studio musica.","因为我学音乐。"],["Con due ragazze italiane.","和两个意大利女孩。"],["Sono di Shanghai.","我是上海人。"]],e:"perché? 问原因，回答也用 perché（因为）。"}
]);
XX("l10",[
 {t:"ord",q:"«我七点起床。»",w:["mi","alzo","alle","sette"],x:["a"],a:["Mi alzo alle sette."]},
 {t:"ord",ear:1,q:"«星期六我睡到十点。»",w:["il","sabato","dormo","fino","alle","dieci"],x:["a"],a:["Il sabato dormo fino alle dieci."]},
 {t:"gap",s:"A che ora ti ＿ la mattina?",o:["alzi","alza","alzo"],it:"你早上几点起床？",e:"反身动词：io mi alzo, tu ti alzi。"},
 {t:"gap",s:"Non faccio ＿ colazione.",o:["mai","sempre","spesso"],it:"我从来不吃早饭。",e:"non … mai = 从来不。"},
 {t:"err",s:"Mi alzo a sette e mezza.",bad:2,fix:"Mi alzo alle sette e mezza.",it:"你想说「我七点半起床」。",e:"说钟点要用 alle（a + le）：alle sette。因为原来是 le ore sette，所以要加冠词。"},
 {t:"rep",ask:"A che ora ti alzi la mattina?",o:[["Mi alzo alle sette.","我七点起床。"],["Sì, sempre.","是的，总是。"],["Il sabato.","星期六。"]],e:"A che ora? 问几点。"}
]);
XX("l11",[
 {t:"ord",q:"«我喜欢听音乐。»",w:["mi","piace","ascoltare","musica"],x:["piacciono"],a:["Mi piace ascoltare musica."]},
 {t:"ord",ear:1,q:"«我一个星期去三次健身房。»",w:["vado","in","palestra","tre","volte","alla","settimana"],x:["a"],a:["Vado in palestra tre volte alla settimana."]},
 {t:"gap",s:"Mi ＿ i film.",o:["piacciono","piace","piaccio"],it:"我喜欢看电影。",e:"喜欢的东西是复数，就用 piacciono：mi piacciono i film。"},
 {t:"gap",s:"Stasera andiamo ＿ cinema.",o:["al","a","in"],it:"今晚我们去看电影。",e:"al cinema = a + il cinema。"},
 {t:"err",s:"Io piace leggere.",bad:0,fix:"Mi piace leggere.",it:"你想说「我喜欢看书」。",e:"意大利语的「喜欢」是「让……喜欢」：mi piace = 让我喜欢。主语不是「我」，所以不说 io piace。"},
 {t:"rep",ask:"Che cosa fai nel tempo libero?",o:[["Mi piace leggere e ascoltare musica.","我喜欢看书和听音乐。"],["Vengo anch'io!","我也来！"],["Certo!","当然！"]],e:"tempo libero = 空闲时间。"}
]);
XX("l12",[
 {t:"ord",q:"«请一直往前走。»（对陌生人）",w:["vada","sempre","dritto"],x:["vai"],a:["Vada sempre dritto."],e:"对陌生人用 Lei 的命令式：vada；对朋友用 vai。"},
 {t:"ord",ear:1,q:"«车站在银行前面。»",w:["la","fermata","è","davanti","alla","banca"],x:["dietro"],a:["La fermata è davanti alla banca."]},
 {t:"gap",s:"In piazza giri a ＿.",o:["destra","dritto","davanti"],it:"到了广场右转。",e:"a destra = 向右，a sinistra = 向左。"},
 {t:"gap",s:"Scusi, ＿ la stazione?",o:["dov'è","dove sono","che cos'è"],it:"请问，火车站在哪儿？",e:"dov'è = dove è。"},
 {t:"err",s:"La fermata è davanti a la banca.",bad:4,fix:"La fermata è davanti alla banca.",it:"你想说「车站在银行前面」。",e:"a 和 la 要合成一个词：alla。a + il = al，a + la = alla，di + il = del……"},
 {t:"rep",ask:"Scusi, c'è un autobus per la stazione?",who:"一位游客",o:[["Sì, il sessantaquattro.","有，64 路。"],["Prego, buona giornata!","不客气，祝您愉快！"],["In piazza giri a destra.","到了广场右转。"]],e:"c'è un autobus? 问有没有公交车。"}
]);
XX("l13",[
 {t:"ord",q:"«你想跟我去看电影吗？»",w:["vuoi","venire","al","cinema","con","me"],x:["io"],a:["Vuoi venire al cinema con me?"]},
 {t:"ord",ear:1,q:"«我得先做完一件事。»",w:["prima","devo","finire","un","lavoro"],x:["finisco"],a:["Prima devo finire un lavoro."]},
 {t:"gap",s:"Puoi ＿ alle sette e mezza?",o:["venire","vieni","vengo"],it:"你七点半能来吗？",e:"potere、volere、dovere 后面的动词用原形：puoi venire。"},
 {t:"gap",s:"Mi ＿, stasera non posso.",o:["dispiace","piace","piacciono"],it:"对不起，今晚我不行。",e:"mi dispiace = 对不起、很遗憾。"},
 {t:"err",s:"Stasera voglio vado al cinema.",bad:2,fix:"Stasera voglio andare al cinema.",it:"你想说「今晚我想去看电影」。",e:"volere、potere、dovere 后面的动词不变位，要用原形：voglio andare。中文的「想去」两个动词都不变。"},
 {t:"rep",ask:"Vuoi venire al cinema con me?",o:[["Sì, volentieri! A che ora?","好啊，很乐意！几点？"],["Niente di speciale.","没什么特别的。"],["Alle otto.","八点。"]],e:"这是邀请：接受就说 volentieri，不能去就说 mi dispiace。"}
]);
XX("l14",[
 {t:"ord",q:"«我想要一些西红柿。»",w:["vorrei","dei","pomodori"],x:["un"],a:["Vorrei dei pomodori."]},
 {t:"ord",ear:1,q:"«我拿六个。»",w:["ne","prendo","sei"],x:["li"],a:["Ne prendo sei."]},
 {t:"gap",s:"Vorrei ＿ mele.",o:["delle","dei","degli"],it:"我想要一些苹果。",e:"部分冠词：阴性复数 delle，阳性复数 dei 或 degli。"},
 {t:"gap",s:"Quanti ＿ vuole?",o:["ne","li","lo"],it:"您要多少？",e:"ne 代替「（其中的）一些」：quanti ne vuole? = 您要几个？"},
 {t:"err",s:"Vorrei dei mele.",bad:1,fix:"Vorrei delle mele.",it:"你想说「我想要一些苹果」。",e:"mela 是阴性，所以是 delle mele。名词的性别决定冠词。"},
 {t:"rep",ask:"Buongiorno, signora! Cosa Le do?",who:"市场的摊主",o:[["Vorrei dei pomodori, per favore.","我想要一些西红柿。"],["Quattro euro e cinquanta.","四欧五十。"],["Queste sono buonissime.","这些特别好吃。"]],e:"Cosa Le do? = 给您拿点什么？"}
]);
XX("l15",[
 {t:"ord",q:"«星期六我工作了一整天。»",w:["sabato","ho","lavorato","tutto","il","giorno"],x:["sono"],a:["Sabato ho lavorato tutto il giorno."]},
 {t:"ord",ear:1,q:"«我看了一部电影，读了一会儿书。»",w:["ho","visto","un","film","e","ho","letto","un","po'"],x:["vedo"],a:["Ho visto un film e ho letto un po'."]},
 {t:"gap",s:"Che cosa hai ＿ nel fine settimana?",o:["fatto","fare","fai"],it:"你周末做了什么？",e:"近过去时：avere + 过去分词。fare → fatto。"},
 {t:"gap",s:"Hai ＿ mangiato i ravioli cinesi?",o:["mai","ancora","sempre"],it:"你吃过饺子吗？",e:"Hai mai …? = 你……过吗？"},
 {t:"err",s:"Ieri ho mangiare la pizza.",bad:2,fix:"Ieri ho mangiato la pizza.",it:"你想说「昨天我吃了比萨」。",e:"近过去时：ho + 过去分词（mangiato），不是原形。中文加个「了」就行，动词不变。"},
 {t:"rep",ask:"Che cosa hai fatto nel fine settimana?",o:[["Ho visto un film e ho letto un po'.","我看了一部电影，读了一会儿书。"],["La prossima volta voglio assaggiare!","下次我想尝尝！"],["No, mai!","没有，从来没有！"]],e:"问的是周末做了什么：用近过去时回答。"}
]);
XX("l16",[
 {t:"ord",q:"«我星期五出发了。»",w:["sono","partito","venerdì"],x:["ho"],a:["Sono partito venerdì.","Venerdì sono partito."]},
 {t:"ord",ear:1,q:"«我们（女）坐船去了穆拉诺岛。»",w:["siamo","andate","a","Murano","in","barca"],x:["abbiamo"],a:["Siamo andate a Murano in barca."]},
 {t:"gap",s:"Il primo giorno è ＿.",o:["piovuto","piove","piovere"],it:"第一天下雨了。",e:"piovere 的过去分词是 piovuto。"},
 {t:"gap",s:"Giulia è ＿ ieri sera.",o:["tornata","tornato","tornati"],it:"茱莉亚昨天晚上回来了。",e:"用 essere 的时候，过去分词要跟主语一致：Giulia è tornata。"},
 {t:"err",s:"Ieri ho andato a Venezia.",bad:1,fix:"Ieri sono andato a Venezia.",it:"你想说「昨天我去了威尼斯」。",e:"表示移动的动词（andare, venire, partire, tornare）用 essere：sono andato。"},
 {t:"rep",ask:"Com'è andato il viaggio a Venezia?",o:[["Benissimo!","非常好！"],["Sono rimasto a casa.","我待在家里。"],["Il sessantaquattro.","64 路。"]],e:"Com'è andato? = 怎么样？"}
]);
XX("l17",[
 {t:"ord",q:"«我小时候很害羞。»",w:["da","bambina","ero","molto","timida"],x:["sono"],a:["Da bambina ero molto timida.","Ero molto timida da bambina."]},
 {t:"ord",ear:1,q:"«每天早上我走路去上学。»",w:["ogni","mattina","andavo","a","scuola","a","piedi"],x:["sono"],a:["Ogni mattina andavo a scuola a piedi."]},
 {t:"gap",s:"Il pomeriggio ＿ con il mio cane.",o:["giocavo","ho giocato","gioco"],it:"（小时候）下午我常和我的狗一起玩。",e:"过去经常做的事用未完成过去时：giocavo。"},
 {t:"gap",s:"Il mio cane ＿ piccolo e nero.",o:["era","è stato","sono"],it:"我的狗又小又黑。",e:"描述过去的样子用未完成过去时：era。"},
 {t:"err",s:"Da piccola sono molto timida.",bad:2,fix:"Da piccola ero molto timida.",it:"你想说「我小时候很害羞」。",e:"说小时候的样子要用未完成过去时：ero。中文有「小时候」就够了，动词不用变，所以容易用现在时。"},
 {t:"rep",ask:"Avevi un cane?",o:[["Sì, si chiamava Lucky.","是啊，它叫 Lucky。"],["Ero molto timida.","我很害羞。"],["Andavo a scuola a piedi.","我走路去上学。"]],e:"Avevi …? = 你以前有……吗？"}
]);
XX("l18",[
 {t:"ord",q:"«我在公交车上看书。»",w:["ero","sull'autobus","e","leggevo","un","libro"],x:["sono"],a:["Ero sull'autobus e leggevo un libro."]},
 {t:"ord",ear:1,q:"«我正在说话的时候，一位先生给我打了电话。»",w:["mentre","parlavo","mi","ha","telefonato","un","signore"],x:["parlato"],a:["Mentre parlavo, mi ha telefonato un signore."]},
 {t:"gap",s:"Quando sono scesa, ho visto che non ＿ più il portafoglio.",o:["avevo","ho avuto","ho"],it:"我下车的时候，发现钱包不见了。",e:"描述当时的状态用未完成过去时：non avevo più。"},
 {t:"gap",s:"Ieri mi è ＿ una cosa strana.",o:["successa","successo","succede"],it:"昨天我遇到一件怪事。",e:"succedere 用 essere，过去分词跟 una cosa（阴性）一致：successa。"},
 {t:"err",s:"Ieri c'è tantissima gente sull'autobus.",bad:1,fix:"Ieri c'era tantissima gente sull'autobus.",it:"你想说「昨天公交车上人特别多」。",e:"说过去的背景（人多不多、天气、时间）用未完成过去时：c'era。"},
 {t:"rep",ask:"Che cosa è successo?",o:[["Ero sull'autobus e non avevo più il portafoglio!","我在公交车上，钱包不见了！"],["Che fortuna!","运气真好！"],["Leggo un libro ogni sera.","我每天晚上看书。"]],e:"Che cosa è successo? = 发生了什么？"}
]);
XX("l19",[
 {t:"ord",q:"«我觉得罗马更美。»",w:["secondo","me","Roma","è","più","bella"],x:["di"],a:["Secondo me Roma è più bella."]},
 {t:"ord",ear:1,q:"«你喜欢培根蛋酱意大利面吗？»",w:["ti","piacciono","gli","spaghetti","alla","carbonara"],x:["piace"],a:["Ti piacciono gli spaghetti alla carbonara?"]},
 {t:"gap",s:"Milano è più moderna ＿ Roma.",o:["di","che","come"],it:"米兰比罗马更现代。",e:"比较两个名字或名词：più … di。"},
 {t:"gap",s:"Alla mia ragazza non ＿ gli spaghetti.",o:["piacciono","piace","piaccio"],it:"我女朋友不喜欢意大利面。",e:"gli spaghetti 是复数：piacciono。"},
 {t:"err",s:"Roma è più bella che Milano.",bad:4,fix:"Roma è più bella di Milano.",it:"你想说「罗马比米兰美」。",e:"比较两个名字或名词用 di：più bella di Milano。che 用在比较两个形容词或动词的时候。中文只有一个「比」。"},
 {t:"rep",ask:"Ti piace Milano?",o:[["Sì, mi piace molto.","喜欢，很喜欢。"],["Li adoro!","我超爱！"],["Preferisce il pesce.","她更喜欢吃鱼。"]],e:"Ti piace …? = 你喜欢……吗？"}
]);
XX("l20",[
 {t:"ord",q:"«谢谢，我只是看看。»",w:["grazie","sto","solo","guardando"],x:["guardo"],a:["Grazie, sto solo guardando."]},
 {t:"ord",ear:1,q:"«这件夹克有黑色的吗？»",w:["avete","questa","giacca","in","nero"],x:["di"],a:["Avete questa giacca in nero?"]},
 {t:"gap",s:"Questa giacca mi piace: ＿ prendo.",o:["la","lo","le"],it:"我喜欢这件夹克：我要了。",e:"giacca 是阴性单数，代词用 la。"},
 {t:"gap",s:"Sto ＿ un regalo per mia madre.",o:["cercando","cerco","cercato"],it:"我正在给我妈妈找礼物。",e:"stare + 动名词（-ando, -endo）= 正在。"},
 {t:"err",s:"Mi piace questa giacca. Prendo la.",bad:5,fix:"Mi piace questa giacca. La prendo.",it:"你想说「我喜欢这件夹克，我要了」。",e:"代词 la 要放在动词前面：la prendo。中文「我要它」的「它」在后面，所以容易放错。"},
 {t:"rep",ask:"Buongiorno, posso aiutarLa?",who:"服装店的店员",o:[["Grazie, sto solo guardando.","谢谢，我只是看看。"],["La quarantadue.","42 号。"],["Ottanta euro.","八十欧。"]],e:"posso aiutarLa? = 需要帮忙吗？"}
]);
XX("l21",[
 {t:"ord",q:"«如果找到工作，我就留在意大利。»",w:["se","trovo","lavoro","resterò","in","Italia"],x:["a"],a:["Se trovo lavoro, resterò in Italia."]},
 {t:"ord",ear:1,q:"«之前我会去西西里旅行。»",w:["prima","farò","un","viaggio","in","Sicilia"],x:["a"],a:["Prima farò un viaggio in Sicilia."]},
 {t:"gap",s:"Che cosa ＿ dopo la laurea?",o:["farai","facevi","hai fatto"],it:"毕业以后你要做什么？",e:"说将来的事用将来时：farai。"},
 {t:"gap",s:"Quando ＿ gli esami, partirò.",o:["finiscono","finito","finire"],it:"考试结束的时候，我就出发。",e:"quando 后面也要变位：gli esami finiscono。"},
 {t:"err",s:"Dopo la laurea tornerò a Cina.",bad:4,fix:"Dopo la laurea tornerò in Cina.",it:"你想说「毕业以后我会回中国」。",e:"国家前面用 in：in Cina, in Italia；城市才用 a：a Pechino。"},
 {t:"rep",ask:"In bocca al lupo per gli esami!",o:[["Crepi!","谢谢！（固定回答）"],["Grazie, altrettanto!","谢谢，你也是！"],["Prego!","不客气！"]],e:"In bocca al lupo 的固定回答是 Crepi!，一般不说 grazie。"}
]);
XX("l22",[
 {t:"ord",q:"«我嗓子疼。»",w:["ho","mal","di","gola"],x:["sono"],a:["Ho mal di gola."]},
 {t:"ord",ear:1,q:"«您能给我点治咳嗽的东西吗？»",w:["potrebbe","darmi","qualcosa","per","la","tosse"],x:["di"],a:["Potrebbe darmi qualcosa per la tosse?"]},
 {t:"gap",s:"＿ andare dal medico?",o:["Dovrei","Dovevo","Dovrò"],it:"我是不是应该去看医生？",e:"条件式 dovrei = 我应该（客气地问建议）。"},
 {t:"gap",s:"Ne prenda un cucchiaio tre volte ＿ giorno.",o:["al","il","per"],it:"一天三次，每次一勺。",e:"三次一天：tre volte al giorno。"},
 {t:"err",s:"Sono mal di testa da ieri.",bad:0,fix:"Ho mal di testa da ieri.",it:"你想说「我从昨天开始头疼」。",e:"疼、发烧都用 avere：ho mal di testa, ho la febbre。中文说「我头疼」，没有动词，所以容易用 sono。"},
 {t:"rep",ask:"Buongiorno, mi dica.",who:"药剂师",o:[["Ho mal di gola e un po' di febbre.","我嗓子疼，还有点发烧。"],["Va bene, grazie mille.","好的，非常感谢。"],["Tre volte al giorno.","一天三次。"]],e:"mi dica = 请说：问你需要什么。"}
]);
XX("l23",[
 {t:"ord",q:"«我两年前来到意大利。»",w:["sono","arrivata","in","Italia","due","anni","fa"],x:["ho"],a:["Sono arrivata in Italia due anni fa.","Due anni fa sono arrivata in Italia."]},
 {t:"ord",ear:1,q:"«一开始我什么都听不懂。»",w:["all'inizio","non","capivo","niente"],x:["capito"],a:["All'inizio non capivo niente."]},
 {t:"gap",s:"Adesso parlo italiano molto ＿.",o:["meglio","migliore","bello"],it:"现在我的意大利语说得好多了。",e:"bene 的比较级是 meglio，不说 più bene。"},
 {t:"gap",s:"Vivo in Italia ＿ due anni.",o:["da","per","fa"],it:"我在意大利住了两年了（现在还住）。",e:"从过去一直到现在：da + 时间，动词用现在时。"},
 {t:"err",s:"Vivo a Roma per due anni.",bad:3,fix:"Vivo a Roma da due anni.",it:"你想说「我在罗马住了两年了」（现在还住）。",e:"事情还在继续，就用 da：vivo a Roma da due anni。per 是已经结束的一段时间。"},
 {t:"rep",ask:"Perché sei venuta in Italia?",o:[["Per studiare musica.","为了学音乐。"],["Due anni fa.","两年前。"],["A Roma.","在罗马。"]],e:"perché? 问原因：per + 原形 = 为了……"}
]);
