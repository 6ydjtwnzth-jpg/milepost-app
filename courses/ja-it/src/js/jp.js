/* ---------- testo giapponese ----------
   Formato dei dati: parole separate da spazi; lettura dei kanji tra parentesi quadre.
   Esempio: "わたし は 日本[にほん] に 行[い]きます 。"
   - la superficie (senza spazi e senza letture) è quello che si legge e si ascolta;
   - la lettura in kana serve per furigana, rōmaji e per controllare le risposte. */
var JRUN=/[぀-ヿ一-鿿々〆ー]/;
var FURI=/([一-鿿々〆ヶヵ]+)\[([^\]]+)\]/g;
function jtoks(s){return String(s).trim().split(/\s+/).filter(Boolean)}
function jsurf(t){return String(t).replace(FURI,"$1")}
function jread(t){return String(t).replace(FURI,"$2")}
function jplain(s){return jtoks(s).map(jsurf).join("")}
function jkana(s){return jtoks(s).map(jread).join("")}
function jruby(t){return esc(t).replace(FURI,'<ruby>$1<rt>$2</rt></ruby>')}
function kata2hira(s){return String(s).replace(/[ァ-ヶ]/g,function(c){return String.fromCharCode(c.charCodeAt(0)-0x60)})}
var JP_PUNCT=/^[。、！？「」『』（）・…〜～!?.,()\-]+$/;

/* rōmaji Hepburn (le vocali lunghe scritte in kana restano come sono: とうきょう → toukyou; ー → vocale con macron) */
var RO1={"あ":"a","い":"i","う":"u","え":"e","お":"o","か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko","さ":"sa","し":"shi","す":"su","せ":"se","そ":"so",
 "た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to","な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no","は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho",
 "ま":"ma","み":"mi","む":"mu","め":"me","も":"mo","や":"ya","ゆ":"yu","よ":"yo","ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro","わ":"wa","を":"o","ん":"n",
 "が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go","ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo","だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do",
 "ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo","ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po","ゔ":"vu",
 "ぁ":"a","ぃ":"i","ぅ":"u","ぇ":"e","ぉ":"o","ゃ":"ya","ゅ":"yu","ょ":"yo","ゎ":"wa"};
var RO2={"きゃ":"kya","きゅ":"kyu","きょ":"kyo","しゃ":"sha","しゅ":"shu","しょ":"sho","ちゃ":"cha","ちゅ":"chu","ちょ":"cho","にゃ":"nya","にゅ":"nyu","にょ":"nyo",
 "ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo","みゃ":"mya","みゅ":"myu","みょ":"myo","りゃ":"rya","りゅ":"ryu","りょ":"ryo","ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo",
 "じゃ":"ja","じゅ":"ju","じょ":"jo","びゃ":"bya","びゅ":"byu","びょ":"byo","ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo",
 "しぇ":"she","ちぇ":"che","じぇ":"je","てぃ":"ti","でぃ":"di","とぅ":"tu","どぅ":"du","ふぁ":"fa","ふぃ":"fi","ふぇ":"fe","ふぉ":"fo","うぃ":"wi","うぇ":"we","うぉ":"wo",
 "ゔぁ":"va","ゔぃ":"vi","ゔぇ":"ve","ゔぉ":"vo","つぁ":"tsa","てゅ":"tyu"};
var MAC={a:"ā",i:"ī",u:"ū",e:"ē",o:"ō"};
function toRomaji(kana){var s=kata2hira(kana),out="",i=0,gem=false;
  while(i<s.length){var c=s[i],two=s.substr(i,2),r;
    if(c==="っ"){gem=true;i++;continue}
    if(c==="ー"){var m=out.match(/[aeiou]$/);if(m)out=out.slice(0,-1)+MAC[m[0]];i++;continue}
    if(RO2[two]){r=RO2[two];i+=2}else if(RO1[c]!==undefined){r=RO1[c];i++}else{r=c;i++}
    if(gem){out+=(r.indexOf("ch")===0?"t":r.charAt(0));gem=false}
    if(c==="ん"&&/^[aeiouy]/.test((function(){var n2=s.substr(i,2),n1=s[i];return RO2[n2]||RO1[n1]||""})()))r="n'";
    out+=r}
  return out}
var RO_PART={"は":"wa","へ":"e","を":"o","では":"dewa","には":"niwa","とは":"towa","からは":"karawa","までは":"madewa","こんにちは":"konnichiwa","こんばんは":"konbanwa"};
function jtokRomaji(t){var r=kata2hira(jread(t));
  if(JP_PUNCT.test(r))return r.replace(/。/g,".").replace(/、/g,",").replace(/！/g,"!").replace(/？/g,"?").replace(/[「『]/g,"\u201c").replace(/[」』]/g,"\u201d").replace(/[（]/g,"(").replace(/[）]/g,")").replace(/・/g," ").replace(/[〜～]/g,"~");
  var lead=r.match(/^[「『（]+/),tail=r.match(/[。、！？」』）]+$/),core=r.replace(/^[「『（]+/,"").replace(/[。、！？」』）]+$/,"");
  var ro=RO_PART[core]!==undefined?RO_PART[core]:/[぀-ヿ]/.test(core)?toRomaji(core):core;
  return (lead?jtokRomaji(lead[0]):"")+ro+(tail?jtokRomaji(tail[0]):"")}
function jromaji(s){return jtoks(s).map(jtokRomaji).join(" ").replace(/ ([.,!?)\u201d~])/g,"$1").replace(/\u201c /g,"\u201c").replace(/ \u201d/g,"\u201d")}

/* controllo delle risposte: si accettano kanji, kana o rōmaji, con tolleranza sulle vocali lunghe e sulle varianti di trascrizione */
function canonRo(r){r=String(r).toLowerCase().normalize("NFD").replace(/([aeiou])̄/g,"$1$1").replace(/[̀-ͯ]/g,"").replace(/[^a-z]/g,"");
  r=r.replace(/sy/g,"sh").replace(/ty/g,"ch").replace(/zy|jy/g,"j").replace(/si/g,"shi").replace(/ti/g,"chi").replace(/tu/g,"tsu").replace(/(^|[^sc])hu/g,"$1fu").replace(/zi/g,"ji");
  r=r.replace(/wo/g,"o").replace(/ha/g,"wa").replace(/he/g,"e");
  r=r.replace(/ou/g,"o").replace(/oo/g,"o").replace(/uu/g,"u").replace(/aa/g,"a").replace(/ii/g,"i").replace(/ee/g,"e").replace(/ei/g,"e").replace(/nn/g,"n").replace(/m(?=[bmp])/g,"n");
  return r}
function stripJ(s){return String(s).replace(/[\s。、！？「」『』（）・…!?.,()〜～'"-]/g,"")}
function jAnswerOk(user,ans){var u=stripJ(user);if(!u)return false;
  if(u===stripJ(jplain(ans))||kata2hira(u)===kata2hira(stripJ(jkana(ans))))return true;
  if(/[一-鿿]/.test(u))return false;
  var ur=/[぀-ヿ]/.test(u)?toRomaji(u):u;return canonRo(ur)===canonRo(jromaji(ans))}
