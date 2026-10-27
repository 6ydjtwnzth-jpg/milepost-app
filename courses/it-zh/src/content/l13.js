DLG.l13=[["A","Stasera che cosa fai?","你今晚干什么？"],["B","Niente di speciale. Perché?","没什么特别的。怎么了？"],["A","Vuoi venire al cinema con me?","你想跟我去看电影吗？"],["B","Sì, volentieri! A che ora?","好啊，很乐意！几点？"],["A","Alle otto. Puoi venire alle sette e mezza davanti al cinema?","八点。你七点半能到电影院门口吗？"],["B","Va bene. Prima devo finire un lavoro, ma vengo!","好的。我得先做完一件事，不过我会来的！"]];
DLG.l13b=[["A","Pronto?","喂？"],["B","Ciao Marco, sono Li Wei. Dove sei?","你好马可，我是李薇。你在哪儿？"],["A","Sono al supermercato. Perché?","我在超市。怎么了？"],["B","Mi dispiace, stasera non posso venire al cinema: devo studiare.","抱歉，今晚我不能去看电影了：我得学习。"],["A","Che peccato! Possiamo andare sabato?","真可惜！我们星期六去可以吗？"],["B","Sì, sabato va benissimo. Ci sentiamo!","可以，星期六很好。再联系！"],["A","A sabato!","星期六见！"]];
EX.l13=[
 {q:"听，选择意思：",au:"Vuoi venire al cinema?",o:["你想去看电影吗？","你去过电影院吗？","电影院在哪儿？"],e:"vuoi + 原形 = 你想……"},
 {q:"听，选择意思：",au:"Mi dispiace, non posso.",o:["抱歉，我去不了。","我不喜欢。","我不知道。"],e:"non posso = 我不能。"},
 {q:"听，选择意思：",au:"Devo lavorare domani.",o:["我明天得工作。","我明天想工作。","我明天不工作。"],e:"devo = 我必须。"},
 {q:"请求许可：「我可以进来吗？」",o:["Posso entrare?","Voglio entrare?","Devo entrare?"],e:"posso = 我可以。"},
 {q:"朋友邀请你，你接受：",au:"Vieni con noi?",o:["Sì, vengo!","Sì, vado!","Sì, puoi!"],e:"朝说话人的方向用 venire：vengo。"},
 {q:"「你们必须学习。」",o:["Dovete studiare.","Devete studiare.","Dovete studiate."],e:"dovere 的 voi 形式 dovete + 原形。"},
 {q:"接电话时说：",o:["Pronto?","Ciao?","Prego?"],e:"Pronto? = 喂？"},
 {t:"type",q:"填空：___ aiutarmi?（potere，你）",a:["puoi"],full:"Puoi aiutarmi?"},
 {t:"type",q:"填空：Loro ___ andare al mare.（volere）",a:["vogliono"],full:"Loro vogliono andare al mare."},
 {t:"dict",au:"Mi dispiace, non posso."},
 {t:"dict",au:"Va bene alle otto?"},
 {t:"say",zh:"邀请朋友：「你想星期六跟我去吃比萨吗？」",it:"Vuoi venire a mangiare una pizza con me sabato?"},
 {t:"say",zh:"礼貌地拒绝，并说一个理由。",it:"Mi dispiace, non posso: domani ho un esame.",e:"意大利人拒绝时通常会说理由。"}
];
VOC.l13=[
 ["volere","想要",""],["potere","能、可以",""],["dovere","必须",""],["invitare","邀请",""],["entrare","进入",""],["aiutare","帮助",""],["finire","完成、结束",""],
 ["mi dispiace","对不起、很遗憾",""],["volentieri","很乐意",""],["va bene","好的",""],["peccato","可惜","m"],["niente","什么也没有",""],["speciale","特别的",""],
 ["pronto","喂（电话）；准备好的",""],["chiamare","打电话；叫",""],["messaggio","消息","m"],["esame","考试","m"],["più tardi","晚一点",""],["ci sentiamo","再联系",""],
 ["domani","明天",""],["oggi","今天",""],["prima","先、之前",""],["insieme","一起",""],["festa","聚会、节日","f"]
];
