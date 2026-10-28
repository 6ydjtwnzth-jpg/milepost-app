/* ---------- strumenti propri del cinese: tabelle del pinyin, ascolto dei toni, schede dei caratteri ---------- */
(function(){
/* iniziali e finali (lezione 1) */
var INI=[["Labiali"],["b","爸[bà]","come la «p» italiana, senza soffio"],["p","怕[pà]","«p» con un forte soffio d'aria"],["m","妈[mā]","come in italiano"],["f","飞[fēi]","come in italiano"],
["Alveolari"],["d","大[dà]","come la «t» italiana, senza soffio"],["t","他[tā]","«t» con soffio"],["n","你[nǐ]","come in italiano"],["l","六[liù]","come in italiano"],
["Velari"],["g","哥[gē]","come la «c» di «casa», senza soffio"],["k","看[kàn]","«c» di «casa» con soffio"],["h","好[hǎo]","fruscio in gola, come la «ch» tedesca di «Bach» ma più morbida"],
["Palatali (sempre seguite da i o ü)"],["j","鸡[jī]","come «ci» di «cielo», punta della lingua dietro i denti inferiori"],["q","七[qī]","come j, ma con soffio"],["x","西[xī]","a metà tra «s» e «sci», lingua in basso"],
["Retroflesse (punta della lingua all'indietro)"],["zh","中[zhōng]","«c» di «ciao» con la lingua arricciata, senza soffio"],["ch","吃[chī]","come zh, con soffio"],["sh","是[shì]","«sc» di «scena» con la lingua arricciata"],["r","人[rén]","simile alla «j» francese di «jour», lingua arricciata"],
["Dentali"],["z","在[zài]","«z» di «pizza» (ts), senza soffio"],["c","菜[cài]","«ts» con soffio"],["s","三[sān]","«s» di «sole»"]];
var FIN=[["a","八[bā]","«a» aperta, come in «casa»"],["o","我[wǒ]","«o» aperta, preceduta da una leggera «u»"],["e","喝[hē]","dite «o» senza arrotondare le labbra: suono gutturale"],["i","你[nǐ]","«i» di «vino»"],["u","五[wǔ]","«u» di «luna»"],["ü","女[nǚ]","dite «i» con le labbra arrotondate come per «u»"],
["ai","爱[ài]","come in «mai»"],["ei","给[gěi]","come in «lei»"],["ao","好[hǎo]","quasi «au»"],["ou","狗[gǒu]","«o» chiusa + «u»"],
["an","三[sān]","«an» con n chiara"],["en","很[hěn]","e indistinta + n"],["ang","忙[máng]","«a» + la n nasale di «panca»"],["eng","冷[lěng]","e indistinta + n di «panca»"],["ong","中[zhōng]","quasi «ung» con n di «panca»"],["ing","请[qǐng]","«i» + n di «panca»"],
["ian","天[tiān]","si legge «ien», non «ian»"],["ie","谢[xiè]","«ie» con e aperta"],["uo","多[duō]","«uo»"],["iu","六[liù]","abbreviazione di iou"],["ui","对[duì]","abbreviazione di uei, quasi «uei»"],["un","春[chūn]","abbreviazione di uen"],["üe","学[xué]","ü + e (dopo x si scrive u)"],["er","二[èr]","e indistinta con la lingua arricciata"],
["i dopo z c s","四[sì]","non è una i: si prolunga la «s» in un ronzio"],["i dopo zh ch sh r","是[shì]","lingua arricciata, ronzio prolungato"]];
function sndRow(r){return '<tr><td class="big">'+esc(r[0])+'</td><td class="zc"><span class="jl" lang="zh-CN">'+jpHTML(r[1])+'</span></td><td>'+esc(r[2])+'</td><td><button class="say sm" data-say="'+esc(r[1])+'" aria-label="Ascolta">'+SPK+'</button></td></tr>'}
var ti=$("#initials");if(ti)ti.innerHTML='<tr><th>Iniziale</th><th>Esempio</th><th>Come si pronuncia</th><th></th></tr>'+INI.map(function(r){return r.length===1?'<tr class="grp"><td colspan="4">'+esc(r[0])+'</td></tr>':sndRow(r)}).join("");
var tf=$("#finals");if(tf)tf.innerHTML='<tr><th>Finale</th><th>Esempio</th><th>Come si pronuncia</th><th></th></tr>'+FIN.map(sndRow).join("");

/* ascolto dei toni (lezione 2) */
var LS=[["妈[mā]",1],["麻[má]",2],["马[mǎ]",3],["骂[mà]",4],["汤[tāng]",1],["糖[táng]",2],["躺[tǎng]",3],["烫[tàng]",4],["衣[yī]",1],["姨[yí]",2],["椅[yǐ]",3],["意[yì]",4],["八[bā]",1],["拔[bá]",2],["把[bǎ]",3],["爸[bà]",4],
  ["飞[fēi]",1],["肥[féi]",2],["匪[fěi]",3],["费[fèi]",4],["通[tōng]",1],["同[tóng]",2],["桶[tǒng]",3],["痛[tòng]",4],["呼[hū]",1],["湖[hú]",2],["虎[hǔ]",3],["户[hù]",4]];
window.TONEDRILL=LS;
function toneGame(root){var nw=$("#lnew",root);if(!nw)return;var cur=null,lr=0,lt=0,btns=$$("#ltones .opt",root),again=$("#lagain",root),rev=$("#lreveal",root),sc=$("#lscore",root);
  nw.onclick=function(){var n;do{n=LS[Math.floor(Math.random()*LS.length)]}while(n===cur);cur=n;speak(cur[0]);again.disabled=false;rev.innerHTML="Quale tono hai sentito?";btns.forEach(function(b){b.disabled=false;b.classList.remove("right","wrong")})};
  again.onclick=function(){if(cur)speak(cur[0])};
  btns.forEach(function(b){b.onclick=function(){if(!cur)return;var t=+b.getAttribute("data-t");lt++;if(t===cur[1])lr++;
    btns.forEach(function(x){x.disabled=true;if(+x.getAttribute("data-t")===cur[1])x.classList.add("right")});if(t!==cur[1])b.classList.add("wrong");
    rev.innerHTML=(t===cur[1]?'<b class="ok">Giusto!</b> ':'<b class="no">Era il '+cur[1]+'° tono.</b> ')+'<span class="jl" lang="zh-CN">'+jpHTML(cur[0])+'</span> = '+esc(meaning(cur[0])||"");
    sc.textContent=lr+" / "+lt}})}
toneGame(document);window.toneGame=toneGame;

/* schede dei caratteri (scrittura, numeri) */
function cards(sel,arr){var el=$(sel);if(!el)return;el.classList.add("zcards");
  el.innerHTML=arr.map(function(c){var say=c[3]||c[0]+"["+c[1]+"]";return '<button class="zcard" type="button" data-say="'+esc(say)+'"><span class="tzg" lang="zh-CN">'+esc(c[0])+'</span><span class="zpy">'+pyHTML(c[1])+'</span><small>'+mixHTML(c[2])+'</small></button>'}).join("")}
cards("#strokes",[["㇐","héng","横[héng] orizzontale, da sinistra a destra: 一","横[héng]"],["㇑","shù","竖[shù] verticale, dall'alto: 十","竖[shù]"],["㇒","piě","撇[piě] obliquo verso sinistra: 人","撇[piě]"],["㇏","nà","捺[nà] obliquo verso destra, si allarga: 八","捺[nà]"],
  ["㇔","diǎn","点[diǎn] punto: 六","点[diǎn]"],["㇀","tí","提[tí] risalita verso destra: 冷","提[tí]"],["㇕","zhé","折[zhé] piegato, cambia direzione: 口","折[zhé]"],["㇚","gōu","钩[gōu] gancio finale: 小","钩[gōu]"]]);
cards("#picto",[["人","rén","persona: una figura che cammina"],["山","shān","montagna: tre cime"],["日","rì","sole, giorno"],["月","yuè","luna, mese"],["木","mù","albero, legno"],["口","kǒu","bocca"]]);
cards("#indic",[["上","shàng","sopra: segno sopra la linea"],["下","xià","sotto: segno sotto la linea"],["本","běn","origine: segno sulla radice dell'albero 木"]]);
cards("#compo",[["休","xiū","riposare: persona 亻 appoggiata a un albero 木"],["明","míng","luminoso: sole 日 + luna 月"],["好","hǎo","buono: donna 女 + bambino 子"],["森","sēn","foresta: tre alberi"]]);
cards("#nums",[["一","yī","1"],["二","èr","2"],["三","sān","3"],["四","sì","4"],["五","wǔ","5"],["六","liù","6"],["七","qī","7"],["八","bā","8"],["九","jiǔ","9"],["十","shí","10"]]);
var RAD=[["亻","persona","你[nǐ] 他[tā] 住[zhù]"],["氵","acqua","河[hé] 海[hǎi] 洗[xǐ]"],["口","bocca","吃[chī] 喝[hē] 叫[jiào]"],["女","donna","妈[mā] 姐[jiě] 好[hǎo]"],["木","albero, legno","树[shù] 林[lín] 桌[zhuō]"],["扌","mano","打[dǎ] 找[zhǎo] 拿[ná]"],
  ["讠","parola","说[shuō] 话[huà] 语[yǔ]"],["艹","erba, piante","茶[chá] 花[huā] 菜[cài]"],["忄","cuore, emozioni","忙[máng] 快[kuài] 情[qíng]"],["日","sole, tempo","明[míng] 时[shí] 晚[wǎn]"],["钅","metallo","钱[qián] 银[yín] 错[cuò]"],
  ["饣","cibo","饭[fàn] 饿[è] 饺[jiǎo]"],["辶","camminare, movimento","这[zhè] 进[jìn] 远[yuǎn]"],["宀","tetto","家[jiā] 安[ān] 字[zì]"],["纟","seta, fili","红[hóng] 给[gěi] 经[jīng]"]];
var rt=$("#radicals");if(rt)rt.innerHTML='<tr><th>Radicale</th><th>Significato</th><th>Si trova in</th></tr>'+RAD.map(function(r){return '<tr><td class="hz" lang="zh-CN">'+esc(r[0])+'</td><td>'+esc(r[1])+'</td><td><span class="jl" lang="zh-CN">'+jpHTML(r[2])+'</span></td></tr>'}).join("");
})();
