/* ---------- Esercizi Milepost: ricomponi, completa, trova l'errore, costruisci, rispondi, toni ----------
   Formats in shell/exercises.js. Sentences come from the lessons whenever possible (same audio);
   «err» uses mistakes that Italian speakers really make. Checked by tools/drills_check.js. */
function XX(id,a){EX[id]=(EX[id]||[]).concat(a)}
XX("l1",[
 {t:"tone",s:"马[mǎ]",e:"马 = cavallo: terzo tono, scende e risale."},
 {t:"tone",s:"妈[mā]",e:"妈 = mamma: primo tono, alto e piatto."},
 {t:"tone",s:"骂[mà]",e:"骂 = sgridare: quarto tono, scende deciso."},
 {t:"tone",s:"麻[má]",e:"麻 = canapa: secondo tono, sale come una domanda."}
]);
XX("l2",[
 {t:"rep",ask:"谢谢[Xiè-xie] ！",who:"Un amico",o:[["不[Bú] 客气[kè-qi] 。","Prego."],["没[Méi] 关系[guān-xi] 。","Non importa."],["再见[Zài-jiàn] ！","Arrivederci!"]],e:"A 谢谢 si risponde 不客气[bú-kè-qi]; 没关系[méi-guān-xi] si dice a chi chiede scusa."},
 {t:"rep",ask:"对不起[Duì-bu-qǐ] ！",who:"Un passante",o:[["没[Méi] 关系[guān-xi] 。","Non importa."],["不[Bú] 客气[kè-qi] 。","Prego."],["你[Nǐ] 好[hǎo] ！","Ciao!"]],e:"A chi si scusa si risponde 没关系[méi-guān-xi]: «non importa»."},
 {t:"tone",s:"谢[xiè]",e:"Quarto tono: in 谢谢 il secondo 谢 diventa leggero."},
 {t:"tone",s:"你[nǐ]",e:"Terzo tono. In 你好 il primo dei due terzi toni si dice come un secondo."},
 {t:"tone",s:"没[méi]",e:"Secondo tono, sale."}
]);
XX("l3",[
 {t:"ord",q:"Componi: «Mi chiamo Marco.»",w:["我[wǒ]","叫[jiào]","马可[Mǎ-kě]"],x:["是[shì]"],a:["我[Wǒ] 叫[jiào] 马可[Mǎ-kě] 。"],e:"Per il nome si usa 叫[jiào]: «io chiamo Marco»."},
 {t:"ord",ear:1,q:"«Sei studente?»",w:["你[nǐ]","是[shì]","学生[xué-sheng]","吗[ma]"],x:["呢[ne]"],a:["你[Nǐ] 是[shì] 学生[xué-sheng] 吗[ma] ？"]},
 {t:"gap",s:"你[Nǐ] ＿ 什么[shén-me] 名字[míng-zi] ？",o:["叫[jiào]","是[shì]","有[yǒu]"],it:"Come ti chiami?",e:"叫[jiào] = chiamarsi: «tu chiami che nome?»."},
 {t:"gap",s:"我[Wǒ] 是[shì] 意大利人[Yì-dà-lì-rén] ， 你[nǐ] ＿ ？",o:["呢[ne]","吗[ma]","什么[shén-me]"],it:"Io sono italiano, e tu?",e:"呢[ne] rimanda la stessa domanda: «e tu?»."},
 {t:"err",s:"你[Nǐ] 叫[jiào] 什么[shén-me] 名字[míng-zi] 吗[ma] ？",bad:4,fix:"你[Nǐ] 叫[jiào] 什么[shén-me] 名字[míng-zi] ？",it:"Volevi chiedere «Come ti chiami?».",e:"Con 什么[shén-me] la frase è già una domanda: 吗[ma] serve solo per le domande sì/no. In italiano basta il tono, e viene voglia di metterlo sempre."},
 {t:"rep",ask:"你[Nǐ] 是[shì] 哪[nǎ] 国[guó] 人[rén] ？",o:[["我[Wǒ] 是[shì] 意大利人[Yì-dà-lì-rén] 。","Sono italiano."],["我[Wǒ] 叫[jiào] 马可[Mǎ-kě] 。","Mi chiamo Marco."],["我[Wǒ] 是[shì] 学生[xué-sheng] 。","Sono studente."]],e:"哪国人[nǎ-guó-rén] = di che paese."},
 {t:"chr",c:"好",m:"buono, bene",w:"好[hǎo]",p:[["女","donna"],["子","bambino"]],d:[["人","persona"],["口","bocca"]],e:"Una donna con il suo bambino: «buono, bene»."},
 {t:"tone",s:"叫[jiào]"},
 {t:"tone",s:"国[guó]"}
]);
XX("l4",[
 {t:"ord",q:"Componi: «Ho un fratello minore.»",w:["我[wǒ]","有[yǒu]","一[yí]","个[ge]","弟弟[dì-di]"],x:["是[shì]"],a:["我[Wǒ] 有[yǒu] 一[yí] 个[ge] 弟弟[dì-di] 。"]},
 {t:"ord",ear:1,q:"«Nella mia famiglia siamo in quattro.»",w:["我[wǒ]","家[jiā]","有[yǒu]","四[sì]","口[kǒu]","人[rén]"],x:["个[ge]"],a:["我[Wǒ] 家[jiā] 有[yǒu] 四[sì] 口[kǒu] 人[rén] 。"]},
 {t:"gap",s:"我[Wǒ] 有[yǒu] ＿ 个[ge] 姐姐[jiě-jie] 。",o:["两[liǎng]","二[èr]","二十[èr-shí]"],it:"Ho due sorelle maggiori.",e:"Davanti a un classificatore «due» si dice 两[liǎng], non 二[èr]."},
 {t:"gap",s:"你[Nǐ] 家[jiā] 有[yǒu] 几[jǐ] ＿ 人[rén] ？",o:["口[kǒu]","个[ge]","岁[suì]"],it:"Quanti siete in famiglia?",e:"Per i membri della famiglia si usa 口[kǒu], «bocca»: le bocche da sfamare."},
 {t:"err",s:"我[Wǒ] 有[yǒu] 二十[èr-shí] 岁[suì] 。",bad:1,fix:"我[Wǒ] 二十[èr-shí] 岁[suì] 。",it:"Volevi dire «Ho vent'anni».",e:"In cinese l'età non si «ha»: basta il numero con 岁[suì]. È l'errore tipico di chi pensa a «ho vent'anni»."},
 {t:"rep",ask:"你[Nǐ] 今年[jīn-nián] 多[duō] 大[dà] ？",o:[["我[Wǒ] 二十五[èr-shí-wǔ] 岁[suì] 。","Ho 25 anni."],["我[Wǒ] 家[jiā] 有[yǒu] 五[wǔ] 口[kǒu] 人[rén] 。","Siamo in cinque in famiglia."],["我[Wǒ] 有[yǒu] 一[yí] 个[ge] 哥哥[gē-ge] 。","Ho un fratello maggiore."]],e:"多大[duō-dà] chiede l'età."},
 {t:"chr",c:"妈",m:"mamma",w:"妈妈[mā-ma]",p:[["女","donna"],["马","cavallo: qui dà il suono «ma»"]],d:[["父","padre"],["子","bambino"]],e:"女 dice il significato, 马[mǎ] il suono: tanti caratteri sono fatti così."},
 {t:"tone",s:"四[sì]"},
 {t:"tone",s:"十[shí]",e:"十[shí] (dieci) sale, 四[sì] (quattro) scende: attenzione a non confonderli."}
]);
XX("l5",[
 {t:"ord",q:"Componi: «Oggi sono un po' stanco.»",w:["我[wǒ]","今天[jīn-tiān]","有点儿[yǒu-diǎnr]","累[lèi]"],x:["很[hěn]"],a:["我[Wǒ] 今天[jīn-tiān] 有点儿[yǒu-diǎnr] 累[lèi] 。","今天[Jīn-tiān] 我[wǒ] 有点儿[yǒu-diǎnr] 累[lèi] 。"],e:"Il «quando» viene presto, prima o subito dopo il soggetto."},
 {t:"ord",ear:1,q:"«Non bevo caffè.»",w:["我[wǒ]","不[bù]","喝[hē]","咖啡[kā-fēi]"],x:["没[méi]"],a:["我[Wǒ] 不[bù] 喝[hē] 咖啡[kā-fēi] 。"]},
 {t:"gap",s:"中文[Zhōng-wén] ＿ 难[nán] 。",o:["很[hěn]","是[shì]","有[yǒu]"],it:"Il cinese è difficile.",e:"Con gli aggettivi niente 是[shì]: si mette 很[hěn], che qui non vuol dire per forza «molto»."},
 {t:"gap",s:"哎呀[Āi-yā] ， 我[wǒ] 饿[è] ＿ ！",o:["了[le]","吗[ma]","呢[ne]"],it:"Ahi, mi è venuta fame!",e:"了[le] in fondo segna un cambiamento: prima no, adesso sì."},
 {t:"err",s:"我[Wǒ] 是[shì] 很[hěn] 累[lèi] 。",bad:1,fix:"我[Wǒ] 很[hěn] 累[lèi] 。",it:"Volevi dire «Sono molto stanco».",e:"Con gli aggettivi il cinese non usa 是[shì]: 我很累, «io molto stanco». È l'errore tipico di chi pensa a «sono stanco»."},
 {t:"rep",ask:"你[Nǐ] 忙[máng] 吗[ma] ？",o:[["不[Bú] 太[tài] 忙[máng] 。","Non molto."],["我[Wǒ] 喝[hē] 茶[chá] 。","Bevo tè."],["我[Wǒ] 是[shì] 学生[xué-sheng] 。","Sono studente."]],e:"Alla domanda «sei occupato?» si risponde con l'aggettivo: 不太忙[bú-tài-máng]."},
 {t:"chr",c:"休",m:"riposare",w:"休息[xiū-xi]",p:[["亻","persona"],["木","albero"]],d:[["女","donna"],["口","bocca"],["日","sole"]],e:"Una persona appoggiata a un albero: riposa."},
 {t:"tone",s:"累[lèi]"},
 {t:"tone",s:"茶[chá]"}
]);
XX("l6",[
 {t:"ord",q:"Componi: «Vorrei due caffè.»",w:["我[wǒ]","要[yào]","两[liǎng]","杯[bēi]","咖啡[kā-fēi]"],x:["个[ge]"],a:["我[Wǒ] 要[yào] 两[liǎng] 杯[bēi] 咖啡[kā-fēi] 。"],e:"Numero + classificatore + cosa: 两杯咖啡."},
 {t:"ord",ear:1,q:"«Questo è il libro del mio amico.»",w:["这[zhè]","是[shì]","我[wǒ]","朋友[péng-you]","的[de]","书[shū]"],x:["本[běn]"],a:["这[Zhè] 是[shì] 我[wǒ] 朋友[péng-you] 的[de] 书[shū] 。"]},
 {t:"gap",s:"我[Wǒ] 要[yào] 一[yì] ＿ 书[shū] 。",o:["本[běn]","杯[bēi]","张[zhāng]"],it:"Vorrei un libro.",e:"本[běn] è il classificatore dei libri; 杯[bēi] delle tazze, 张[zhāng] delle cose piatte."},
 {t:"gap",s:"这[Zhè] 是[shì] 谁[shéi] ＿ 咖啡[kā-fēi] ？",o:["的[de]","吗[ma]","了[le]"],it:"Di chi è questo caffè?",e:"的[de] indica il possesso: 谁的 = di chi."},
 {t:"err",s:"我[Wǒ] 要[yào] 两[liǎng] 杯[bēi] 的[de] 咖啡[kā-fēi] 。",bad:4,fix:"我[Wǒ] 要[yào] 两[liǎng] 杯[bēi] 咖啡[kā-fēi] 。",it:"Volevi dire «Vorrei due tazze di caffè».",e:"Tra classificatore e nome non serve niente: 两杯咖啡. Il «di» italiano fa venire voglia di aggiungere 的[de]."},
 {t:"rep",ask:"还[Hái] 要[yào] 别[bié] 的[de] 吗[ma] ？",who:"Il barista",o:[["再[Zài] 要[yào] 一[yì] 杯[bēi] 水[shuǐ] 。","Anche un bicchiere d'acqua."],["一共[Yí-gòng] 三十[sān-shí] 块[kuài] 。","In tutto 30 yuan."],["不[Bú] 客气[kè-qi] 。","Prego."]],e:"别的[bié-de] = altro: «vuole altro?»."},
 {t:"chr",c:"你",m:"tu",w:"你[nǐ]",p:[["亻","persona"],["尔","antico «tu»"]],d:[["女","donna"],["木","albero"]],e:"亻 dice che si parla di una persona; 尔 era il vecchio modo di dire «tu»."},
 {t:"tone",s:"杯[bēi]"},
 {t:"tone",s:"要[yào]"}
]);
XX("l7",[
 {t:"ord",q:"Componi: «Ti aspetto a casa.»",w:["我[wǒ]","在[zài]","家[jiā]","等[děng]","你[nǐ]"],x:["有[yǒu]"],a:["我[Wǒ] 在[zài] 家[jiā] 等[děng] 你[nǐ] 。"],e:"Il luogo (在家) viene prima dell'azione, al contrario dell'italiano."},
 {t:"ord",ear:1,q:"«Sul tavolo c'è tanto tè.»",w:["桌子[zhuō-zi]","上[shang]","有[yǒu]","很[hěn]","多[duō]","茶[chá]"],x:["在[zài]"],a:["桌子[Zhuō-zi] 上[shang] 有[yǒu] 很[hěn] 多[duō] 茶[chá] 。"]},
 {t:"gap",s:"你[Nǐ] ＿ 哪儿[nǎr] ？",o:["在[zài]","有[yǒu]","是[shì]"],it:"Dove sei?",e:"在[zài] = trovarsi in un luogo."},
 {t:"gap",s:"银行[Yín-háng] 里[li] ＿ 很[hěn] 多[duō] 人[rén] 。",o:["有[yǒu]","在[zài]","是[shì]"],it:"In banca c'è tanta gente.",e:"«In un luogo c'è qualcosa»: luogo + 有[yǒu] + cosa."},
 {t:"err",s:"我[Wǒ] 是[shì] 在[zài] 家[jiā] 。",bad:1,fix:"我[Wǒ] 在[zài] 家[jiā] 。",it:"Volevi dire «Sono a casa».",e:"在[zài] è già il verbo «trovarsi»: niente 是[shì]. Chi pensa a «sono a casa» lo aggiunge per abitudine."},
 {t:"rep",ask:"喂[Wéi] ， 你[nǐ] 在[zài] 哪儿[nǎr] ？",who:"Al telefono",o:[["我[Wǒ] 在[zài] 银行[yín-háng] 。","Sono in banca."],["我[Wǒ] 有[yǒu] 一[yì] 只[zhī] 猫[māo] 。","Ho un gatto."],["我[Wǒ] 是[shì] 老师[lǎo-shī] 。","Sono insegnante."]],e:"哪儿[nǎr] = dove."},
 {t:"chr",c:"们",m:"plurale delle persone",w:"我们[wǒ-men]",p:[["亻","persona"],["门","porta: qui dà il suono «men»"]],d:[["口","bocca"],["木","albero"]],e:"亻 per le persone, 门[mén] per il suono: 我们 = noi."},
 {t:"tone",s:"猫[māo]"},
 {t:"tone",s:"狗[gǒu]"}
]);
XX("l8",[
 {t:"ord",q:"«Domani mi alzo alle sette.»",w:["我[wǒ]","明天[míng-tiān]","七[qī]","点[diǎn]","起床[qǐ-chuáng]"],x:["在[zài]"],a:["我[Wǒ] 明天[míng-tiān] 七[qī] 点[diǎn] 起床[qǐ-chuáng] 。","明天[Míng-tiān] 我[wǒ] 七[qī] 点[diǎn] 起床[qǐ-chuáng] 。"],e:"L'ora viene prima del verbo: 七点起床, «alle sette alzarsi»."},
 {t:"ord",ear:1,q:"«Oggi è l'8 ottobre.»",w:["今天[jīn-tiān]","是[shì]","十[shí]","月[yuè]","八[bā]","号[hào]"],x:["点[diǎn]"],a:["今天[Jīn-tiān] 是[shì] 十[shí] 月[yuè] 八[bā] 号[hào] 。"]},
 {t:"gap",s:"现在[Xiàn-zài] 八[bā] 点[diǎn] ＿ 。",o:["半[bàn]","分[fēn]","号[hào]"],it:"Sono le otto e mezza.",e:"半[bàn] = mezza, subito dopo 点."},
 {t:"gap",s:"今天[Jīn-tiān] 星期[xīng-qī] ＿ ？",o:["几[jǐ]","什么[shén-me]","多少[duō-shao]"],it:"Che giorno è oggi?",e:"I giorni della settimana sono numeri: 星期几 = «settimana numero?»."},
 {t:"err",s:"我[Wǒ] 在[zài] 八[bā] 点[diǎn] 上课[shàng-kè] 。",bad:1,fix:"我[Wǒ] 八[bā] 点[diǎn] 上课[shàng-kè] 。",it:"Volevi dire «Ho lezione alle otto».",e:"Con l'ora non serve una preposizione: 八点上课. Il «alle» italiano fa venire voglia di metterci 在[zài], che è per i luoghi."},
 {t:"rep",ask:"现在[Xiàn-zài] 几[jǐ] 点[diǎn] 了[le] ？",o:[["差[Chà] 五[wǔ] 分[fēn] 八[bā] 点[diǎn] 。","Le otto meno cinque."],["今天[Jīn-tiān] 星期六[xīng-qī-liù] 。","Oggi è sabato."],["我[Wǒ] 回[huí] 家[jiā] 睡觉[shuì-jiào] 。","Torno a casa a dormire."]],e:"几点[jǐ-diǎn] chiede l'ora."},
 {t:"chr",c:"明",m:"luminoso",w:"明天[míng-tiān]",p:[["日","sole"],["月","luna"]],d:[["木","albero"],["口","bocca"]],e:"Il sole e la luna insieme: «luminoso». 明天 è il giorno «luminoso» che viene."},
 {t:"tone",s:"早[zǎo]"},
 {t:"tone",s:"号[hào]"}
]);
XX("l9",[
 {t:"ord",q:"«Sai usare le bacchette?»",w:["你[nǐ]","会[huì]","用[yòng]","筷子[kuài-zi]","吗[ma]"],x:["是[shì]"],a:["你[Nǐ] 会[huì] 用[yòng] 筷子[kuài-zi] 吗[ma] ？"]},
 {t:"ord",ear:1,q:"«Vorrei mangiare i ravioli.»",w:["我[wǒ]","想[xiǎng]","吃[chī]","饺子[jiǎo-zi]"],x:["吧[ba]"],a:["我[Wǒ] 想[xiǎng] 吃[chī] 饺子[jiǎo-zi] 。"]},
 {t:"gap",s:"我[Wǒ] ＿ 带[dài] 我[wǒ] 朋友[péng-you] 吗[ma] ？",o:["可以[kě-yǐ]","会[huì]","想[xiǎng]"],it:"Posso portare un mio amico?",e:"Per chiedere il permesso si usa 可以[kě-yǐ]; 会[huì] è «saper fare»."},
 {t:"gap",s:"我们[Wǒ-men] 去[qù] 吃[chī] 饺子[jiǎo-zi] ＿ ！",o:["吧[ba]","吗[ma]","了[le]"],it:"Andiamo a mangiare i ravioli!",e:"吧[ba] trasforma la frase in una proposta: «dai, andiamo»."},
 {t:"err",s:"我[Wǒ] 会[huì] 说[shuō] 一点儿[yì-diǎnr] 的[de] 中文[Zhōng-wén] 。",bad:4,fix:"我[Wǒ] 会[huì] 说[shuō] 一点儿[yì-diǎnr] 中文[Zhōng-wén] 。",it:"Volevi dire «So parlare un po' di cinese».",e:"一点儿 va subito davanti al nome, senza niente in mezzo: il «di» italiano non si traduce."},
 {t:"rep",ask:"你[Nǐ] 会[huì] 用[yòng] 筷子[kuài-zi] 吗[ma] ？",o:[["会[Huì] 一点儿[yì-diǎnr] 。","Un po'."],["当然[Dāng-rán] 可以[kě-yǐ] ！","Certo che puoi!"],["我[Wǒ] 饿[è] 了[le] 。","Ho fame."]],e:"Si risponde ripetendo il verbo: 会 (so), 不会 (non so). 可以 risponde a chi chiede un permesso."},
 {t:"chr",c:"想",m:"pensare; vorrei",w:"想[xiǎng]",p:[["相","suono «xiang»"],["心","cuore"]],d:[["口","bocca"],["木","albero"]],e:"Sotto c'è il cuore 心: i caratteri dei pensieri e dei sentimenti spesso lo hanno."}
]);
XX("l10",[
 {t:"ord",q:"«Ho comprato un vestito.»",w:["我[wǒ]","买[mǎi]","了[le]","一[yí]","件[jiàn]","衣服[yī-fu]"],x:["没[méi]"],a:["我[Wǒ] 买[mǎi] 了[le] 一[yí] 件[jiàn] 衣服[yī-fu] 。"]},
 {t:"ord",ear:1,q:"«Non ho ancora mangiato.»",w:["我[wǒ]","还[hái]","没[méi]","吃[chī]","饭[fàn]"],x:["了[le]"],a:["我[Wǒ] 还[hái] 没[méi] 吃[chī] 饭[fàn] 。"],e:"Con 没 il 了 sparisce."},
 {t:"gap",s:"你[Nǐ] 吃[chī] 饭[fàn] ＿ 吗[ma] ？",o:["了[le]","在[zài]","的[de]"],it:"Hai mangiato?",e:"了[le] dice che l'azione è compiuta."},
 {t:"gap",s:"我[Wǒ] 昨天[zuó-tiān] ＿ 去[qù] 商店[shāng-diàn] 。",o:["没[méi]","不[bù]","了[le]"],it:"Ieri non sono andato al negozio.",e:"Per dire che una cosa non è successa si usa 没[méi], non 不[bù]."},
 {t:"err",s:"我[Wǒ] 昨天[zuó-tiān] 没[méi] 去[qù] 了[le] 。",bad:4,fix:"我[Wǒ] 昨天[zuó-tiān] 没[méi] 去[qù] 。",it:"Volevi dire «Ieri non ci sono andato».",e:"Con 没 non si mette 了: 没 dice già che non è successo. Chi pensa al passato italiano tende ad aggiungerlo."},
 {t:"rep",ask:"你[Nǐ] 昨天[zuó-tiān] 做[zuò] 什么[shén-me] 了[le] ？",o:[["我[Wǒ] 在[zài] 家[jiā] 看[kàn] 了[le] 一[yí] 个[ge] 电影[diàn-yǐng] 。","Ho visto un film a casa."],["不[Bú] 贵[guì] ， 一百[yì-bǎi] 块[kuài] 。","Non caro, cento yuan."],["还[Hái] 没[méi] 呢[ne] 。","Non ancora."]],e:"做什么了 chiede che cosa hai fatto."},
 {t:"chr",c:"看",m:"guardare",w:"看[kàn]",p:[["手","mano"],["目","occhio"]],d:[["口","bocca"],["木","albero"]],e:"Una mano sopra gli occhi, come chi guarda lontano."}
]);
XX("l11",[
 {t:"ord",q:"«Oggi fa più freddo di ieri.»",w:["今天[jīn-tiān]","比[bǐ]","昨天[zuó-tiān]","冷[lěng]"],x:["很[hěn]"],a:["今天[Jīn-tiān] 比[bǐ] 昨天[zuó-tiān] 冷[lěng] 。"],e:"A 比 B + aggettivo, senza 很."},
 {t:"ord",ear:1,q:"«L'inverno di Pechino è il più freddo.»",w:["北京[Běi-jīng]","的[de]","冬天[dōng-tiān]","最[zuì]","冷[lěng]"],x:["比[bǐ]"],a:["北京[Běi-jīng] 的[de] 冬天[dōng-tiān] 最[zuì] 冷[lěng] 。"]},
 {t:"gap",s:"罗马[Luó-mǎ] 没有[méi-yǒu] 北京[Běi-jīng] ＿ 冷[lěng] 。",o:["那么[nà-me]","最[zuì]","比[bǐ]"],it:"Roma non è fredda come Pechino.",e:"A 没有 B 那么 + aggettivo = A non è così … come B."},
 {t:"gap",s:"我[Wǒ] 跟[gēn] 你[nǐ] ＿ 高[gāo] 。",o:["一样[yí-yàng]","比[bǐ]","更[gèng]"],it:"Sono alto quanto te.",e:"A 跟 B 一样 + aggettivo = A è come B."},
 {t:"err",s:"今天[Jīn-tiān] 比[bǐ] 昨天[zuó-tiān] 很[hěn] 冷[lěng] 。",bad:3,fix:"今天[Jīn-tiān] 比[bǐ] 昨天[zuó-tiān] 冷[lěng] 。",it:"Volevi dire «Oggi fa più freddo di ieri».",e:"Nei confronti con 比 non si mette 很. Per «molto più freddo» si aggiunge 多了 dopo l'aggettivo: 冷多了. Il «molto» italiano porta a usare 很."},
 {t:"rep",ask:"今天[Jīn-tiān] 天气[tiān-qì] 怎么样[zěn-me-yàng] ？",o:[["很[Hěn] 冷[lěng] ， 比[bǐ] 昨天[zuó-tiān] 还[hái] 冷[lěng] 。","Freddo, più di ieri."],["都[Dōu] 很[hěn] 好吃[hǎo-chī] ！","Sono tutti buoni!"],["我[Wǒ] 觉得[jué-de] 北京[Běi-jīng] 很[hěn] 大[dà] 。","Penso che Pechino sia grande."]],e:"天气怎么样 chiede che tempo fa."},
 {t:"chr",c:"冷",m:"freddo",w:"冷[lěng]",p:[["冫","ghiaccio"],["令","suono «ling»"]],d:[["日","sole"],["火","fuoco"]],e:"Le due gocce 冫 sono il ghiaccio: le trovi in caratteri freddi come 冷 e 冰 (ghiaccio)."}
]);
XX("l12",[
 {t:"ord",q:"«Sono stato due volte sulla Grande Muraglia.»",w:["我[wǒ]","去[qù]","过[guo]","两[liǎng]","次[cì]","长城[Cháng-chéng]"],x:["了[le]"],a:["我[Wǒ] 去[qù] 过[guo] 两[liǎng] 次[cì] 长城[Cháng-chéng] 。","我[Wǒ] 去[qù] 过[guo] 长城[Cháng-chéng] 两[liǎng] 次[cì] 。"]},
 {t:"ord",ear:1,q:"«Sono venuto in aereo.»",w:["我[wǒ]","是[shì]","坐[zuò]","飞机[fēi-jī]","来[lái]","的[de]"],x:["过[guo]"],a:["我[Wǒ] 是[shì] 坐[zuò] 飞机[fēi-jī] 来[lái] 的[de] 。"]},
 {t:"gap",s:"你[Nǐ] 吃[chī] ＿ 烤鸭[kǎo-yā] 吗[ma] ？",o:["过[guo]","着[zhe]","的[de]"],it:"Hai mai mangiato l'anatra laccata?",e:"过[guo] = esperienza: «ti è mai capitato di…»."},
 {t:"gap",s:"你[Nǐ] 是[shì] 什么[shén-me] 时候[shí-hou] 来[lái] ＿ ？",o:["的[de]","了[le]","过[guo]"],it:"Quando sei arrivato?",e:"是…的 mette a fuoco il quando, il come o il dove di una cosa già successa."},
 {t:"err",s:"我[Wǒ] 还[hái] 没[méi] 吃[chī] 过[guo] 了[le] 烤鸭[kǎo-yā] 。",bad:5,fix:"我[Wǒ] 还[hái] 没[méi] 吃[chī] 过[guo] 烤鸭[kǎo-yā] 。",it:"Volevi dire «Non ho mai mangiato l'anatra laccata».",e:"Con 没…过 non serve 了: 过 dice già «mai» o «qualche volta». L'italiano «ho mangiato» spinge ad aggiungerlo."},
 {t:"rep",ask:"你[Nǐ] 去[qù] 过[guo] 长城[Cháng-chéng] 吗[ma] ？",o:[["去[Qù] 过[guo] 两[liǎng] 次[cì] 。","Sì, due volte."],["我[Wǒ] 是[shì] 上[shàng] 个[ge] 月[yuè] 来[lái] 的[de] 。","Sono arrivato il mese scorso."],["很[Hěn] 好吃[hǎo-chī] 。","È buonissimo."]],e:"Si risponde ripetendo il verbo con 过: 去过 (ci sono stato)."},
 {t:"chr",c:"坐",m:"sedersi; prendere un mezzo",w:"坐[zuò]",p:[["人","persona"],["人","persona"],["土","terra"]],d:[["木","albero"],["口","bocca"]],e:"Due persone sedute per terra 土: ecco 坐."}
]);
XX("l13",[
 {t:"ord",q:"«Sto leggendo un libro.»",w:["我[wǒ]","在[zài]","看[kàn]","书[shū]","呢[ne]"],x:["着[zhe]"],a:["我[Wǒ] 在[zài] 看[kàn] 书[shū] 呢[ne] 。"]},
 {t:"ord",ear:1,q:"«Sta telefonando.»",w:["他[tā]","正在[zhèng-zài]","打[dǎ]","电话[diàn-huà]"],x:["着[zhe]"],a:["他[Tā] 正在[zhèng-zài] 打[dǎ] 电话[diàn-huà] 。"]},
 {t:"gap",s:"门[Mén] 开[kāi] ＿ 。",o:["着[zhe]","过[guo]","在[zài]"],it:"La porta è aperta.",e:"着[zhe] dice che uno stato dura: la porta resta aperta."},
 {t:"gap",s:"你[Nǐ] 在[zài] 做[zuò] 什么[shén-me] ＿ ？",o:["呢[ne]","了[le]","过[guo]"],it:"Che stai facendo?",e:"呢[ne] in fondo accompagna spesso un'azione in corso."},
 {t:"err",s:"我[Wǒ] 在[zài] 做[zuò] 了[le] 饭[fàn] 呢[ne] 。",bad:3,fix:"我[Wǒ] 在[zài] 做[zuò] 饭[fàn] 呢[ne] 。",it:"Volevi dire «Sto cucinando».",e:"Un'azione in corso non è compiuta: 在 + verbo, senza 了."},
 {t:"rep",ask:"喂[Wéi] ， 你[nǐ] 在[zài] 做[zuò] 什么[shén-me] 呢[ne] ？",who:"Al telefono",o:[["我[Wǒ] 正在[zhèng-zài] 做[zuò] 饭[fàn] 。","Sto cucinando."],["我[Wǒ] 吃[chī] 过[guo] 烤鸭[kǎo-yā] 。","Ho già mangiato l'anatra laccata."],["门[Mén] 开[kāi] 着[zhe] 。","La porta è aperta."]],e:"在做什么呢 chiede che cosa stai facendo adesso."},
 {t:"chr",c:"打",m:"colpire; fare (una telefonata)",w:"打电话[dǎ-diàn-huà]",p:[["扌","mano"],["丁","suono «ding»"]],d:[["口","bocca"],["日","sole"]],e:"扌 è la mano: la trovi nei verbi di gesti, come 打 e 找 (cercare)."}
]);
XX("l14",[
 {t:"ord",q:"«Ho studiato cinese per un anno.»",w:["我[wǒ]","学[xué]","了[le]","一[yì]","年[nián]","中文[Zhōng-wén]"],x:["次[cì]"],a:["我[Wǒ] 学[xué] 了[le] 一[yì] 年[nián] 中文[Zhōng-wén] 。"],e:"La durata va tra il verbo e l'oggetto: 学了一年中文."},
 {t:"ord",ear:1,q:"«Faccio lezione tre volte a settimana.»",w:["我[wǒ]","每[měi]","个[ge]","星期[xīng-qī]","上[shàng]","三[sān]","次[cì]","课[kè]"],x:["小时[xiǎo-shí]"],a:["我[Wǒ] 每[měi] 个[ge] 星期[xīng-qī] 上[shàng] 三[sān] 次[cì] 课[kè] 。"]},
 {t:"gap",s:"一[Yí] 次[cì] 课[kè] 多[duō] ＿ 时间[shí-jiān] ？",o:["长[cháng]","大[dà]","少[shǎo]"],it:"Quanto dura una lezione?",e:"多长时间[duō-cháng-shí-jiān] = quanto tempo (di durata)."},
 {t:"gap",s:"我[Wǒ] 在[zài] 中国[Zhōng-guó] 住[zhù] 了[le] 三[sān] ＿ 。",o:["年[nián]","次[cì]","点[diǎn]"],it:"Ho abitato in Cina per tre anni.",e:"La durata va dopo il verbo: 住了三年."},
 {t:"err",s:"我[Wǒ] 学[xué] 了[le] 一[yí] 个[ge] 年[nián] 中文[Zhōng-wén] 。",bad:4,fix:"我[Wǒ] 学[xué] 了[le] 一[yì] 年[nián] 中文[Zhōng-wén] 。",it:"Volevi dire «Ho studiato cinese per un anno».",e:"年 (anno) e 天 (giorno) non vogliono classificatore: 一年, 三天. 月 invece sì: 一个月."},
 {t:"rep",ask:"你[Nǐ] 学[xué] 中文[Zhōng-wén] 学[xué] 了[le] 多[duō] 长[cháng] 时间[shí-jiān] 了[le] ？",o:[["学[Xué] 了[le] 一[yì] 年[nián] 了[le] 。","Da un anno."],["三[Sān] 次[cì] 。","Tre volte."],["我[Wǒ] 在[zài] 北京[Běi-jīng] 学[xué] 。","Studio a Pechino."]],e:"多长时间 chiede la durata."},
 {t:"chr",c:"住",m:"abitare",w:"住[zhù]",p:[["亻","persona"],["主","suono «zhu»"]],d:[["木","albero"],["口","bocca"]],e:"Una persona 亻 e il suono di 主[zhǔ]: chi abita in un posto."}
]);
XX("l15",[
 {t:"ord",q:"«Hai finito i compiti?»",w:["作业[zuò-yè]","你[nǐ]","做完[zuò-wán]","了[le]","吗[ma]"],x:["过[guo]"],a:["作业[Zuò-yè] 你[nǐ] 做完[zuò-wán] 了[le] 吗[ma] ？","你[Nǐ] 做完[zuò-wán] 作业[zuò-yè] 了[le] 吗[ma] ？"]},
 {t:"ord",ear:1,q:"«Ho trovato il mio telefono.»",w:["我[wǒ]","找到[zhǎo-dào]","了[le]","我[wǒ]","的[de]","手机[shǒu-jī]"],x:["看[kàn]"],a:["我[Wǒ] 找到[zhǎo-dào] 了[le] 我[wǒ] 的[de] 手机[shǒu-jī] 。"]},
 {t:"gap",s:"老师[Lǎo-shī] 说[shuō] 得[de] 太[tài] 快[kuài] ， 我[wǒ] 没[méi] 听[tīng] ＿ 。",o:["懂[dǒng]","看[kàn]","完[wán]"],it:"L'insegnante parla troppo veloce, non ho capito.",e:"听懂 = ascoltare + capire: il secondo verbo dice il risultato."},
 {t:"gap",s:"你[Nǐ] 看[kàn] ＿ 我[wǒ] 的[de] 手机[shǒu-jī] 了[le] 吗[ma] ？",o:["见[jiàn]","懂[dǒng]","完[wán]"],it:"Hai visto il mio telefono?",e:"看见 = guardare e vedere davvero."},
 {t:"err",s:"我[Wǒ] 还[hái] 没[méi] 做完[zuò-wán] 了[le] 。",bad:4,fix:"我[Wǒ] 还[hái] 没[méi] 做完[zuò-wán] 呢[ne] 。",it:"Volevi dire «Non ho ancora finito».",e:"Con 没 non si usa 了; per «non ancora» la frase si chiude con 呢: 还没做完呢."},
 {t:"rep",ask:"老师[Lǎo-shī] 说[shuō] 的[de] 话[huà] ， 你[nǐ] 听懂[tīng-dǒng] 了[le] 吗[ma] ？",o:[["没[Méi] 听懂[tīng-dǒng] ， 太[tài] 快[kuài] 了[le] 。","No, era troppo veloce."],["找到[Zhǎo-dào] 了[le] ， 谢谢[xiè-xie] ！","Trovato, grazie!"],["在[Zài] 桌子[zhuō-zi] 上[shang] 。","È sul tavolo."]],e:"听懂了吗 chiede se hai capito."},
 {t:"chr",c:"听",m:"ascoltare",w:"听[tīng]",p:[["口","bocca"],["斤","suono «jin»"]],d:[["目","occhio"],["手","mano"]],e:"Nella forma semplificata c'è la bocca 口: si ascolta quello che la bocca dice."}
]);
XX("l16",[
 {t:"ord",q:"«Parli bene il cinese.»",w:["你[nǐ]","中文[Zhōng-wén]","说[shuō]","得[de]","很[hěn]","好[hǎo]"],x:["的[de]"],a:["你[Nǐ] 中文[Zhōng-wén] 说[shuō] 得[de] 很[hěn] 好[hǎo] 。"]},
 {t:"ord",ear:1,q:"«Scrivo i caratteri male.»",w:["我[wǒ]","汉字[Hàn-zì]","写[xiě]","得[de]","不[bù]","好看[hǎo-kàn]"],x:["没[méi]"],a:["我[Wǒ] 汉字[Hàn-zì] 写[xiě] 得[de] 不[bù] 好看[hǎo-kàn] 。"]},
 {t:"gap",s:"他[Tā] 跑[pǎo] ＿ 很[hěn] 快[kuài] 。",o:["得[de]","的[de]","了[le]"],it:"Corre molto veloce.",e:"Dopo il verbo, per dire come si fa una cosa, ci vuole 得[de]."},
 {t:"gap",s:"你[Nǐ] 说[shuō] 得[de] 很[hěn] ＿ 。",o:["清楚[qīng-chu]","汉字[Hàn-zì]","一起[yì-qǐ]"],it:"Parli in modo molto chiaro.",e:"Dopo 得 viene un aggettivo: com'è l'azione."},
 {t:"err",s:"我[Wǒ] 写[xiě] 汉字[Hàn-zì] 得[de] 不[bù] 好看[hǎo-kàn] 。",bad:3,fix:"我[Wǒ] 汉字[Hàn-zì] 写[xiě] 得[de] 不[bù] 好看[hǎo-kàn] 。",it:"Volevi dire «Scrivo i caratteri male». Una parola è fuori posto.",e:"得 deve stare subito dopo il verbo. Se c'è un oggetto, lo metti prima (汉字写得…) oppure ripeti il verbo (写汉字写得…)."},
 {t:"rep",ask:"你[Nǐ] 中文[Zhōng-wén] 说[shuō] 得[de] 真[zhēn] 好[hǎo] ！",o:[["哪里[Nǎ-li] 哪里[nǎ-li] ， 还[hái] 差[chà] 得[de] 远[yuǎn] 呢[ne] 。","Ma no, sono ancora lontano."],["对[Duì] ， 我[wǒ] 说[shuō] 得[de] 最[zuì] 好[hǎo] 。","Sì, lo parlo meglio di tutti."],["没[Méi] 关系[guān-xi] 。","Non importa."]],e:"Ai complimenti, in Cina si risponde con modestia: 哪里哪里."},
 {t:"chr",c:"汉",m:"cinese (dei caratteri)",w:"汉字[Hàn-zì]",p:[["氵","acqua"],["又","di nuovo"]],d:[["木","albero"],["日","sole"]],e:"氵 è l'acqua: 汉 era il nome di un fiume, poi di una dinastia e del popolo cinese."}
]);
XX("l17",[
 {t:"ord",q:"«La stazione è lontana da qui.»",w:["火车站[huǒ-chē-zhàn]","离[lí]","这儿[zhèr]","很[hěn]","远[yuǎn]"],x:["从[cóng]"],a:["火车站[Huǒ-chē-zhàn] 离[lí] 这儿[zhèr] 很[hěn] 远[yuǎn] 。"]},
 {t:"ord",ear:1,q:"«Vado a scuola in metropolitana.»",w:["我[wǒ]","坐[zuò]","地铁[dì-tiě]","去[qù]","学校[xué-xiào]"],x:["往[wǎng]"],a:["我[Wǒ] 坐[zuò] 地铁[dì-tiě] 去[qù] 学校[xué-xiào] 。"],e:"Il mezzo viene prima del verbo di movimento: 坐地铁去."},
 {t:"gap",s:"请问[Qǐng-wèn] ， 去[qù] 火车站[huǒ-chē-zhàn] ＿ 走[zǒu] ？",o:["怎么[zěn-me]","什么[shén-me]","哪儿[nǎr]"],it:"Scusi, come si arriva alla stazione?",e:"怎么走[zěn-me-zǒu] = come si va."},
 {t:"gap",s:"＿ 这儿[zhèr] 到[dào] 火车站[huǒ-chē-zhàn] ， 二十[èr-shí] 分钟[fēn-zhōng] 。",o:["从[Cóng]","离[Lí]","往[Wǎng]"],it:"Da qui alla stazione, venti minuti.",e:"从 … 到 … = da … a …."},
 {t:"err",s:"火车站[Huǒ-chē-zhàn] 从[cóng] 这儿[zhèr] 很[hěn] 远[yuǎn] 。",bad:1,fix:"火车站[Huǒ-chē-zhàn] 离[lí] 这儿[zhèr] 很[hěn] 远[yuǎn] 。",it:"Volevi dire «La stazione è lontana da qui».",e:"Per la distanza si usa 离[lí]: «lontano da». 从[cóng] è il «da» del movimento (从这儿到那儿). In italiano sono tutti e due «da»."},
 {t:"rep",ask:"请问[Qǐng-wèn] ， 地铁站[dì-tiě-zhàn] 在[zài] 哪儿[nǎr] ？",who:"Un turista",o:[["往[Wǎng] 前[qián] 走[zǒu] ， 然后[rán-hòu] 往[wǎng] 左[zuǒ] 拐[guǎi] 。","Vada avanti, poi giri a sinistra."],["二十[Èr-shí] 分钟[fēn-zhōng] 左右[zuǒ-yòu] 。","Una ventina di minuti."],["我[Wǒ] 坐[zuò] 地铁[dì-tiě] 上班[shàng-bān] 。","Vado al lavoro in metro."]],e:"在哪儿 chiede il luogo: si risponde con la strada da fare."},
 {t:"chr",c:"近",m:"vicino",w:"近[jìn]",p:[["辶","camminare"],["斤","suono «jin»"]],d:[["口","bocca"],["木","albero"]],e:"辶 è il «camminare»: lo trovi nelle parole di strada e movimento, come 近, 远 e 这."}
]);
XX("l18",[
 {t:"ord",q:"«Riesci a capire lo shanghaiese?»",w:["你[nǐ]","听[tīng]","得[de]","懂[dǒng]","上海话[Shàng-hǎi-huà]","吗[ma]"],x:["不[bu]"],a:["你[Nǐ] 听[tīng] 得[de] 懂[dǒng] 上海话[Shàng-hǎi-huà] 吗[ma] ？"]},
 {t:"ord",ear:1,q:"«Capisco solo il cinese standard.»",w:["我[wǒ]","只[zhǐ]","听[tīng]","得[de]","懂[dǒng]","普通话[pǔ-tōng-huà]"],x:["很[hěn]"],a:["我[Wǒ] 只[zhǐ] 听[tīng] 得[de] 懂[dǒng] 普通话[pǔ-tōng-huà] 。"]},
 {t:"gap",s:"太[Tài] 远[yuǎn] 了[le] ， 我[wǒ] 看[kàn] 不[bu] ＿ 。",o:["见[jiàn]","完[wán]","懂[dǒng]"],it:"È troppo lontano, non riesco a vedere.",e:"看不见 = non riuscire a vedere; 看不懂 = non riuscire a capire quello che si legge."},
 {t:"gap",s:"已经[Yǐ-jīng] 九[jiǔ] 点[diǎn] 了[le] ， 我[wǒ] 来[lái] 不[bu] ＿ 了[le] ！",o:["及[jí]","懂[dǒng]","见[jiàn]"],it:"Sono già le nove, non faccio in tempo!",e:"来不及 = non fare in tempo; 来得及 = fare in tempo."},
 {t:"err",s:"我[Wǒ] 不[bù] 能[néng] 听懂[tīng-dǒng] 上海话[Shàng-hǎi-huà] 。",bad:2,fix:"我[Wǒ] 听[tīng] 不[bu] 懂[dǒng] 上海话[Shàng-hǎi-huà] 。",it:"Volevi dire «Non riesco a capire lo shanghaiese».",e:"«Non riesco a capire» non usa 能: si mette 不 in mezzo al verbo, 听不懂. Gli italiani pensano a «non posso» e aggiungono 能."},
 {t:"rep",ask:"你[Nǐ] 什么[shén-me] 时候[shí-hou] 回[huí] 意大利[Yì-dà-lì] ？",o:[["下[Xià] 个[ge] 月[yuè] 。","Il mese prossimo."],["听[Tīng] 不[bu] 懂[dǒng] 。","Non capisco."],["你[Nǐ] 家[jiā] 真[zhēn] 大[dà] ！","Che casa grande!"]],e:"什么时候 chiede quando."},
 {t:"chr",c:"话",m:"parole, lingua parlata",w:"上海话[Shàng-hǎi-huà]",p:[["讠","parola"],["舌","lingua (l'organo)"]],d:[["口","bocca"],["目","occhio"]],e:"Parole 讠 e lingua 舌: 话 è la lingua parlata, come in 普通话."}
]);
XX("l19",[
 {t:"ord",q:"«Ho messo il portafoglio sul tavolo.»",w:["我[wǒ]","把[bǎ]","钱包[qián-bāo]","放[fàng]","在[zài]","桌子[zhuō-zi]","上[shang]","了[le]"],x:["被[bèi]"],a:["我[Wǒ] 把[bǎ] 钱包[qián-bāo] 放[fàng] 在[zài] 桌子[zhuō-zi] 上[shang] 了[le] 。"]},
 {t:"ord",ear:1,q:"«Mi hanno rubato il portafoglio.»",w:["我[wǒ]","的[de]","钱包[qián-bāo]","被[bèi]","偷[tōu]","了[le]"],x:["把[bǎ]"],a:["我[Wǒ] 的[de] 钱包[qián-bāo] 被[bèi] 偷[tōu] 了[le] 。"]},
 {t:"gap",s:"请[Qǐng] ＿ 门[mén] 关上[guān-shang] 。",o:["把[bǎ]","被[bèi]","给[gěi]"],it:"Per favore, chiudi la porta.",e:"把 porta l'oggetto prima del verbo: «prendi la porta e chiudila»."},
 {t:"gap",s:"我[Wǒ] 的[de] 蛋糕[dàn-gāo] ＿ 他[tā] 吃[chī] 了[le] ！",o:["被[bèi]","把[bǎ]","在[zài]"],it:"La mia torta l'ha mangiata lui!",e:"被 introduce chi fa l'azione: «la torta, da lui mangiata»."},
 {t:"err",s:"我[Wǒ] 把[bǎ] 钱包[qián-bāo] 放[fàng] 了[le] 在[zài] 桌子[zhuō-zi] 上[shang] 。",bad:4,fix:"我[Wǒ] 把[bǎ] 钱包[qián-bāo] 放[fàng] 在[zài] 桌子[zhuō-zi] 上[shang] 了[le] 。",it:"Volevi dire «Ho messo il portafoglio sul tavolo». Una parola è fuori posto.",e:"放在 restano attaccati e 了 va in fondo. L'italiano «ho messo» spinge a mettere 了 subito dopo il verbo."},
 {t:"rep",ask:"我[Wǒ] 的[de] 钱包[qián-bāo] 被[bèi] 偷[tōu] 了[le] ！",o:[["别[Bié] 着急[zháo-jí] 。 你[Nǐ] 放[fàng] 在[zài] 哪儿[nǎr] 了[le] ？","Calma. Dove l'avevi messo?"],["太[Tài] 好[hǎo] 了[le] ！","Che bello!"],["不[Bú] 客气[kè-qi] 。","Prego."]],e:"别着急 = non agitarti."},
 {t:"chr",c:"钱",m:"soldi",w:"钱[qián]",p:[["钅","metallo"],["戋","suono «jian»"]],d:[["木","albero"],["氵","acqua"]],e:"钅 è il metallo, le monete: lo trovi anche in 银行 (banca) e 钟 (orologio)."}
]);
XX("l20",[
 {t:"ord",q:"«Se non piove, andiamo al parco.»",w:["如果[rú-guǒ]","不[bú]","下[xià]","雨[yǔ]","我们[wǒ-men]","就[jiù]","去[qù]","公园[gōng-yuán]"],x:["所以[suǒ-yǐ]"],a:["如果[Rú-guǒ] 不[bú] 下[xià] 雨[yǔ] ， 我们[wǒ-men] 就[jiù] 去[qù] 公园[gōng-yuán] 。"]},
 {t:"ord",ear:1,q:"«Andiamo al parco o al cinema?»",w:["我们[wǒ-men]","去[qù]","公园[gōng-yuán]","还是[hái-shi]","去[qù]","看[kàn]","电影[diàn-yǐng]"],x:["或者[huò-zhě]"],a:["我们[Wǒ-men] 去[qù] 公园[gōng-yuán] 还是[hái-shi] 去[qù] 看[kàn] 电影[diàn-yǐng] ？"]},
 {t:"gap",s:"你[Nǐ] 喝[hē] 茶[chá] ＿ 喝[hē] 咖啡[kā-fēi] ？",o:["还是[hái-shi]","或者[huò-zhě]","但是[dàn-shì]"],it:"Bevi tè o caffè?",e:"Nelle domande «o» si dice 还是; nelle affermazioni 或者."},
 {t:"gap",s:"因为[Yīn-wèi] 我[wǒ] 很[hěn] 累[lèi] ， ＿ 我[wǒ] 想[xiǎng] 休息[xiū-xi] 。",o:["所以[suǒ-yǐ]","但是[dàn-shì]","如果[rú-guǒ]"],it:"Siccome sono stanco, voglio riposare.",e:"因为 … 所以 … = siccome …, quindi …: in cinese si usano spesso tutti e due."},
 {t:"err",s:"你[Nǐ] 想[xiǎng] 去[qù] 公园[gōng-yuán] 或者[huò-zhě] 看[kàn] 电影[diàn-yǐng] ？",bad:4,fix:"你[Nǐ] 想[xiǎng] 去[qù] 公园[gōng-yuán] 还是[hái-shi] 看[kàn] 电影[diàn-yǐng] ？",it:"Volevi chiedere «Vuoi andare al parco o al cinema?».",e:"Nelle domande di scelta «o» è 还是; 或者 è per le affermazioni. In italiano c'è un solo «o», e i due si confondono."},
 {t:"rep",ask:"明天[Míng-tiān] 我们[wǒ-men] 去[qù] 公园[gōng-yuán] 还是[hái-shi] 去[qù] 看[kàn] 电影[diàn-yǐng] ？",o:[["如果[Rú-guǒ] 不[bú] 下[xià] 雨[yǔ] ， 就[jiù] 去[qù] 公园[gōng-yuán] 。","Se non piove, al parco."],["因为[Yīn-wèi] 我[wǒ] 很[hěn] 累[lèi] 。","Perché sono stanco."],["对[Duì] ， 我[wǒ] 去[qù] 过[guo] 。","Sì, ci sono stato."]],e:"A una domanda con 还是 si risponde scegliendo."},
 {t:"chr",c:"因",m:"causa (因为 = perché)",w:"因为[yīn-wèi]",p:[["囗","recinto"],["大","grande"]],d:[["木","albero"],["日","sole"]],e:"Una persona grande 大 dentro un recinto 囗: la base, la «causa» su cui poggia tutto."}
]);
XX("l21",[
 {t:"ord",q:"«L'anno scorso sono andato a Shanghai.»",w:["我[wǒ]","去年[qù-nián]","去[qù]","了[le]","上海[Shàng-hǎi]"],x:["明年[míng-nián]"],a:["我[Wǒ] 去年[qù-nián] 去[qù] 了[le] 上海[Shàng-hǎi] 。","去年[Qù-nián] 我[wǒ] 去[qù] 了[le] 上海[Shàng-hǎi] 。"]},
 {t:"ord",ear:1,q:"«Ho prestato la bici a un amico.»",w:["我[wǒ]","把[bǎ]","自行车[zì-xíng-chē]","借给[jiè-gěi]","了[le]","朋友[péng-you]"],x:["被[bèi]"],a:["我[Wǒ] 把[bǎ] 自行车[zì-xíng-chē] 借给[jiè-gěi] 了[le] 朋友[péng-you] 。"]},
 {t:"gap",s:"我[Wǒ] ＿ 到[dào] 北京[Běi-jīng] ， 还[hái] 不[bú] 认识[rèn-shi] 很[hěn] 多[duō] 人[rén] 。",o:["刚[gāng]","明年[míng-nián]","每天[měi-tiān]"],it:"Sono appena arrivato a Pechino, non conosco ancora molte persone.",e:"刚[gāng] = appena."},
 {t:"gap",s:"我[Wǒ] ＿ 坐[zuò] 地铁[dì-tiě] 上班[shàng-bān] 。",o:["每天[měi-tiān]","明年[míng-nián]","刚[gāng]"],it:"Vado al lavoro in metro ogni giorno.",e:"每天[měi-tiān] = ogni giorno: va prima del verbo."},
 {t:"err",s:"明年[Míng-nián] 我[wǒ] 去[qù] 了[le] 上海[Shàng-hǎi] 。",bad:3,fix:"明年[Míng-nián] 我[wǒ] 去[qù] 上海[Shàng-hǎi] 。",it:"Volevi dire «L'anno prossimo vado a Shanghai».",e:"了 dice che un'azione è compiuta: con il futuro non ci sta. Non è il segno del passato, anche se spesso si traduce così."},
 {t:"rep",ask:"你[Nǐ] 的[de] 自行车[zì-xíng-chē] 呢[ne] ？",o:[["我[Wǒ] 把[bǎ] 它[tā] 借给[jiè-gěi] 朋友[péng-you] 了[le] 。","L'ho prestata a un amico."],["我[Wǒ] 明年[míng-nián] 去[qù] 上海[Shàng-hǎi] 。","L'anno prossimo vado a Shanghai."],["我[Wǒ] 刚[gāng] 吃[chī] 饭[fàn] 。","Ho appena mangiato."]],e:"X 呢？ senza altro chiede dov'è X."},
 {t:"chr",c:"借",m:"prestare, prendere in prestito",w:"借给[jiè-gěi]",p:[["亻","persona"],["昔","suono «xi»"]],d:[["木","albero"],["氵","acqua"]],e:"Tra persone 亻 ci si prestano le cose: 借."}
]);
