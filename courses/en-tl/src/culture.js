/* Culture cards (Filipino UI): s = illustration, t = title, i = target-language title, p = paragraphs, it / es = Italy|UK / Philippines, w = key words, q = question (first option right). Source: newc/board_it|en/culture.py */
CULT.l1=[
 {s:"ship",t:"Ang wika ng dagat",i:"English, the language of the sea",
  p:["Maaaring may animnapung bansa sa isang barko, pero iisa ang wika ng trabaho: Ingles. Kinikilala ng International Maritime Organization (IMO) ang Ingles bilang karaniwang wika ng dagat, at sa maraming barko, ito ang tuntunin: Ingles lang habang naka-duty.", "Kaya nagbubukas ng pag-asenso ang mahusay na Ingles: opisyal, head waiter, reception."],
  it:"Opisyal na wika ang Ingles sa Pilipinas, kasama ng Filipino.",x:"Sa Britanya, katutubong wika ang Ingles; iba-iba ang punto ayon sa rehiyon.",lb:["Sa dagat", "At sea"],
  w:[["working language", "wika ng trabaho"], ["on duty", "naka-duty"], ["IMO", "International Maritime Organization"]],
  q:{q:"Ano ang karaniwang wika habang naka-duty sa barko?",o:["Ingles", "wika ng kapitan", "kahit ano"],e:"Ingles, ang karaniwang wika ng dagat."}},
 {s:"hand",t:"Ang «sorry» na hindi paumanhin",i:"Sorry, please and thank you",
  p:["Madalas sabihin ng mga British ang {sorry}: kapag nagkabanggaan, humihingi ng daan, o hindi naintindihan ({Sorry?} = «Ano po ulit?»). Kung walang {please} at {thank you}, bastos ang dating ng pakiusap.", "Sa pasahero, malaki ang epekto ng isang {please} at isang ngiti."],
  it:"«po» at «opo» ang nagpapakita ng paggalang; sa Ingles, {sir}, {madam} at {please}.",x:"{please}, {thank you}, {sorry}: dose-dosenang beses araw-araw.",
  w:[["sorry?", "ano po ulit?"], ["excuse me", "excuse me"], ["please", "pakiusap"]],
  q:{q:"Sinasabi ng British ang «{Sorry?}» kapag…",o:["hindi niya narinig o naintindihan", "galit siya", "paalis na siya"],e:"{Sorry?} = «Ano po ulit?»"}}
];
CULT.l2=[
 {s:"names",t:"Mr, Mrs, Miss, Ms",i:"Mr, Mrs, Miss and Ms",
  p:["{Mr} sa lalaki; {Mrs} sa babaeng may asawa; {Miss} sa dalaga; {Ms} sa kahit sinong babae, pinakaligtas ngayon. Kasama ng apelyido: {Mrs Taylor}, {Mr Harris}, hindi ng unang pangalan ({Mr Ravi} ✗).", "Sa barko, unang pangalan ang tawag sa kasamahan, pero {Captain} o {Sir} sa kapitan."],
  it:"«Sir» at «Ma'am» kahit sa unang pangalan («Sir Mark») — sa Ingles, mas karaniwan ang {Mr Reyes}.",x:"Apelyido sa opisyal at pasahero: {Mr Harris}.",
  w:[["Mr", "G."], ["Mrs", "Gng."], ["Ms", "Ms (kahit sinong babae)"]],
  q:{q:"Alice Taylor ang pasahero. Tamang pagbati:",o:["{Good morning, Mrs Taylor.}", "{Good morning, Mrs Alice.}", "{Good morning, Taylor.}"],e:"{Mrs} + apelyido."}}
];
CULT.l3=[
 {s:"rain",t:"Usapang panahon: sining ng British",i:"Talking about the weather",
  p:["Sa Britanya, panahon ang pinakakaraniwang pambungad sa hindi kakilala: {Lovely day, isn't it?} o {Terrible weather!}. Hindi ito opinyon, kundi paraan ng pagiging magiliw.", "Sa pasaherong British, panahon ang pinakaligtas na paksa ng {small talk}. Iwasan ang relihiyon, pulitika at pera."],
  it:"Karaniwang tanong agad ang «Kumain ka na?» o tungkol sa pamilya.",x:"{small talk}: panahon, biyahe, pagkain.",
  w:[["small talk", "maikling kuwentuhan"], ["lovely", "napakaganda"], ["isn't it?", "di ba?"]],
  q:{q:"Pinakaligtas na paksa sa pasaherong British:",o:["panahon", "sahod", "pulitika"],e:"Panahon!"}}
];
CULT.l4=[
 {s:"bunk",t:"Dalawang tao, isang kabina",i:"Sharing a cabin",
  p:["Madalas magkasama sa kabina ang crew, at iba-iba ang oras ng tulog nila. Ilang hindi nakasulat na tuntunin: kumatok bago pumasok, hinaan ang ilaw kapag natutulog ang kasama, at sa labas ng kabina tumawag sa telepono.", "Sa Ingles: {Do you mind if I turn on the light?}"],
  it:"Sa bahay, karaniwan ang pagsasalo sa kuwarto; pero sa Ingles, «open/close the light» ✗ → {turn on/off the light}.",x:"Napakahalaga ng privacy.",
  w:[["turn on the light", "buksan ang ilaw"], ["turn off", "patayin"], ["do you mind if…?", "okay lang ba kung…?"]],
  q:{q:"«Buksan ang ilaw» sa Ingles:",o:["{turn on the light}", "{open the light}", "{start the light}"],e:"{turn on / turn off}."}}
];
CULT.l5=[
 {s:"phone",t:"Pamilya sa screen",i:"Family on the screen",
  p:["Para sa mga marinong malayo sa bahay nang ilang buwan, ang video call sa pamilya ang pinakamahalagang sandali ng araw. May Wi-Fi na para sa crew sa maraming barko, pero kapaki-pakinabang pa rin ang SIM card sa daungan.", "Karaniwang maliit ang pamilyang British at maagang umaalis ng bahay ang mga anak."],
  it:"Malalaking pamilya; lolo, lola, tito at tita na tumutulong mag-alaga sa mga anak ng OFW.",x:"Maliit na pamilya; umaalis ng bahay sa edad 20–25.",
  w:[["video call", "video call"], ["miss", "ma-miss"], ["I miss you", "miss na kita"]],
  q:{q:"«Miss na kita» sa Ingles:",o:["{I miss you.}", "{I lose you.}", "{I remember of you.}"],e:"{I miss you.}"}}
];
CULT.l6=[
 {s:"clock",t:"Oras ng barko",i:"Ship's time",
  p:["Kapag naglalayag ang barko pasilangan o pakanluran, nagbabago ang orasan: madalas, isang oras pasulong o paurong sa gabi. Ito ang {ship's time}, at maaaring iba ito sa lokal na oras.", "Sa daungan, laging itanong: {Is that ship's time or local time?}"],
  it:"Iisa ang oras sa buong Pilipinas (PST, UTC+8), walang pagbabago.",x:"Sa Britanya, isang oras pasulong ang orasan tuwing tag-init (BST).",lb:["Sa dagat", "At sea"],
  w:[["ship's time", "oras ng barko"], ["local time", "lokal na oras"], ["clocks go forward", "iniuusad ang orasan"]],
  q:{q:"Kapag iniusad ang orasan nang isang oras sa gabi, ang tulog mo ay…",o:["mababawasan ng isang oras", "madadagdagan ng isang oras", "walang pagbabago"],e:"Pasulong = isang oras na mas maikli."}}
];
CULT.l7=[
 {s:"ship",t:"Mga ranggo sa barko",i:"Ranks on board",
  p:["May malinaw na hanay sa barko: {captain} (master), {chief officer}, mga opisyal, {bosun}, rating; sa makina, {chief engineer}. Sa hotel department, {hotel director}, {maître d'}, {head waiter}.", "Maikli at malinaw ang sagot sa utos: {Yes, sir.} / {Understood.}"],
  it:"Sa Pilipinas, ang MARINA ang naglalabas ng sertipiko ng mga marino.",x:"Makikita pa rin sa mga internasyonal na barko ang mga tradisyon ng British merchant navy.",lb:["Sa dagat", "At sea"],
  w:[["rank", "ranggo"], ["master", "kapitan (master)"], ["understood", "naintindihan"]],
  q:{q:"Pinakamataas na ranggo sa barko:",o:["{captain}", "{bosun}", "{chief officer}"],e:"{captain} = {master}."}}
];
CULT.l8=[
 {s:"tea",t:"Tsaa: ang ugnayan ng Britanya at India",i:"A cup of tea",
  p:["Daan-daang milyong tasa ng tsaa ang iniinom ng mga British araw-araw, madalas may gatas. Paraan ng pagiging magiliw ang {Would you like a cup of tea?}. Maraming tsaa ang galing sa India (Assam, Darjeeling).", "Sa bar, itanong sa pasahero: {Milk and sugar?}"],
  it:"Kape ang mas karaniwan; at salabat kapag may sakit.",x:"Itim na tsaa na may gatas; {builder's tea} = matapang, may gatas at asukal.",
  w:[["a cup of tea", "isang tasang tsaa"], ["milk and sugar?", "may gatas at asukal?"], ["strong", "matapang"]],
  q:{q:"Karaniwang iniinom ng British ang tsaa…",o:["na may gatas", "na may kalamansi at asin", "malamig lang"],e:"Itim na tsaa na may gatas."}}
];
CULT.l9=[
 {s:"talk",t:"{Could you…?}: ang magalang na pagtatanong",i:"Could you…?",
  p:["Bastos ang dating ng diretsong utos sa Ingles ({Give me the menu}). Ang British ay nagtatanong para humiling: {Could you give me the menu?} {Would you mind…?}. Kahit ang mga opisyal ay madalas magsabi ng {Could you…?}, pero utos pa rin iyon!", "Sagot: {Of course!} o {Sure!}, hindi lang {Yes}."],
  it:"Sa Filipino, ang «paki-» at «po» ang gumagawa nito: «Pakiabot po».",x:"Paggalang = hindi tuwirang tanong.",
  w:[["could you…?", "puwede po bang…?"], ["would you mind…?", "okay lang po ba kung…?"], ["sure", "sige"]],
  q:{q:"Sabi ng opisyal, «{Could you clean deck five?}». Ang tunay na ibig sabihin:",o:["linisin mo ang deck singko (utos)", "marunong ka bang maglinis?", "baka balang araw"],e:"Magalang na anyo, pero utos."}}
];
CULT.l10=[
 {s:"sleep",t:"Apat na oras na trabaho, walong oras na pahinga",i:"The watch system",
  p:["Madalas na «watch» ang trabaho ng deck at engine crew: apat na oras na duty, walong oras na pahinga, dalawang beses sa isang araw. Halimbawa, {00–04} at {12–16}. Ang watch mula hatinggabi hanggang alas-kuwatro ay biro na tinatawag na {graveyard watch}.", "Mahahaba at hati-hati ang shift ng hotel crew, at kadalasang walang lingguhang day off."],
  it:"Madalas 6 hanggang 9 na buwan ang kontrata ng mga marinong Pilipino.",x:"Sa lupa, karaniwang 9 hanggang 5.",lb:["Sa dagat", "At sea"],
  w:[["watch", "watch (oras ng duty)"], ["graveyard watch", "graveyard watch"], ["day off", "day off"]],
  q:{q:"Karaniwang watch system:",o:["4 oras duty, 8 oras pahinga", "12 oras duty, 12 pahinga", "8 oras duty, 4 pahinga"],e:"4 on, 8 off."}}
];
CULT.l11=[
 {s:"football",t:"Football, cricket at basketball",i:"Football, cricket and basketball",
  p:["Ang England ang gumawa ng modernong tuntunin ng football at cricket. Ngayon, sa Pilipinas, basketball ang pinakasikat, pero sa barko, nanonood ng football ang lahat.", "Mga parirala: {Who's winning?} {What's the score?}"],
  it:"Basketball, at boxing tuwing laban ni Pacquiao noon.",x:"Football (Premier League) at cricket.",
  w:[["who's winning?", "sino ang nananalo?"], ["what's the score?", "ano ang iskor?"], ["match", "laro, laban"]],
  q:{q:"«Ano ang iskor?» sa Ingles:",o:["{What's the score?}", "{How much is the score?}", "{Which is the score?}"],e:"{What's the score?}"}}
];
CULT.l12=[
 {s:"phone",t:"Pagsasalita sa radyo",i:"Speaking on the radio",
  p:["Mahigpit ang tuntunin sa radyo ng barko: maiikling pangungusap, malinaw na bigkas, at pag-uulit ng mahalagang mensahe para kumpirmahin ({read back}). Isa-isang digit ang numero: {two zero four seven}.", "{over} = «tapos na ako, ikaw naman»; {out} = «tapos na ang usapan»."],
  it:"Nakikinig din sa channel 16 ang Philippine Coast Guard.",x:"VHF channel 16: internasyonal na channel ng emergency at pagtawag.",lb:["Sa dagat", "At sea"],
  w:[["over", "over (ikaw naman)"], ["out", "out (tapos na)"], ["read back", "ulitin para kumpirmahin"]],
  q:{q:"Ang ibig sabihin ng {over} sa radyo:",o:["tapos na ako, ikaw naman", "tapos na ang usapan", "panganib"],e:"{over}."}}
];
CULT.l13=[
 {s:"port",t:"Bakit port at starboard?",i:"Why port and starboard?",
  p:["Sa mga sinaunang barko, nasa kanan ang timon: {steerboard} («gilid ng pagmamaneho»), na naging {starboard}. Kaya sa kaliwang gilid dumadaong ang barko sa daungan ({port}).", "Sa gabi: pulang ilaw sa {port}, berde sa {starboard}."],
  it:"Paraan para matandaan: parehong apat na titik ang {port} at {left}.",x:"Pareho ang mga salitang ito sa lahat ng hukbong-dagat na nagsasalita ng Ingles.",lb:["Sa dagat", "At sea"],
  w:[["port", "kaliwa (ng barko)"], ["starboard", "kanan (ng barko)"], ["red light", "pulang ilaw"]],
  q:{q:"Kulay ng ilaw sa {starboard} sa gabi:",o:["berde", "pula", "puti"],e:"Kanan = berde, kaliwa = pula."}}
];
CULT.l14=[
 {s:"breakfast",t:"Isang menu ng maraming bansa",i:"A menu for the world",
  p:["Sa crew mess, kailangang pakainin ng mga kusinero ang tao mula sa maraming bansa: kanin, curry, adobo, pasta. Mahalagang igalang ang mga panuntunan sa pagkain: {halal}, {vegetarian}, {no pork}, {no beef}.", "Paborito ng pasaherong British: {full English breakfast} (itlog, bacon, sausage, beans, tinapay)."],
  it:"Kanin sa bawat kain, kahit sa almusal!",x:"{full English breakfast} at tsaa.",
  w:[["halal", "halal"], ["vegetarian", "vegetarian"], ["full English breakfast", "full English breakfast"]],
  q:{q:"Ano ang karaniwang nasa {full English breakfast}?",o:["itlog, bacon at beans", "kanin at dal", "sopas"],e:"Itlog, bacon, sausage, beans, tinapay."}}
];
CULT.l15=[
 {s:"ticket",t:"{All aboard!}: huwag maiwan ng barko",i:"All aboard!",
  p:["May {all aboard time} sa bawat daungan: ang oras na dapat nasa barko na ang lahat. Hindi naghihintay ang barko! Kapag naiwan ka, maaaring ikaw ang gagastos para makarating sa susunod na daungan.", "Sa shore leave, laging dalhin ang crew card mo at ang numero ng ship's agent."],
  it:"Kailangan ng visa ng maraming marinong Pilipino para sa shore leave sa ilang bansa.",x:"{all aboard} = «Lahat sa barko na!»",lb:["Sa dagat", "At sea"],
  w:[["all aboard", "lahat sumakay"], ["miss the ship", "maiwan ng barko"], ["crew card", "crew card"]],
  q:{q:"Ano ang {all aboard time}?",o:["huling oras ng pagbalik sa barko", "oras ng almusal", "oras ng drill"],e:"Hindi na naghihintay ang barko pagkatapos noon."}}
];
CULT.l16=[
 {s:"wind",t:"Ang Beaufort scale",i:"The Beaufort scale",
  p:["Sinusukat ng mga marino ang hangin sa Beaufort scale, mula 0 (kalmado) hanggang 12 (hurricane). {Force 8} = {gale}: matataas na alon, at nahihilo ang maraming pasahero.", "Pakinggan ang anunsiyo ng kapitan: {We expect rough seas this afternoon.}"],
  it:"Taun-taon, maraming bagyo ang pumapasok sa Pilipinas, lalo na mula Hunyo hanggang Nobyembre.",x:"Sa Britanya, ilang dekada nang isinasahimpapawid ang {Shipping Forecast} sa radyo.",lb:["Sa dagat", "At sea"],
  w:[["gale", "unos (force 8)"], ["force", "lakas (ng hangin)"], ["forecast", "taya ng panahon"]],
  q:{q:"Ang 0 sa Beaufort scale:",o:["kalmado", "bagyo", "hamog"],e:"0 = {calm}, 12 = {hurricane}."}}
];
CULT.l17=[
 {s:"school",t:"Ingles sa paaralan",i:"English at school",
  p:["Sa Pilipinas, Ingles ang wika ng maraming asignatura sa paaralan, at may sariling salita ang Philippine English: {CR}, {open the light}, {for a while}. Naiintindihan ang mga ito sa Pilipinas, pero madalas hindi ng mga dayuhang kasamahan sa barko.", "Matalinong gawin: ipagmalaki ang Ingles mo, pero sa barko, gamitin ang internasyonal na salita."],
  it:"{CR}, {open the light}, {for a while}.",x:"{toilet}, {turn on the light}, {wait a moment}.",
  w:[["bring forward", "iusad nang mas maaga"], ["toilet", "banyo, CR"], ["wait a moment", "sandali lang"]],
  q:{q:"Sa internasyonal na Ingles, ang «For a while» (maghintay) ay:",o:["{Wait a moment}", "{For some time}", "{Long time}"],e:"{Wait a moment} / {Hold on}."}}
];
CULT.l18=[
 {s:"buoy",t:"Hunyo 25: Araw ng Marino",i:"The Day of the Seafarer",
  p:["Mula 2011, ipinagdiriwang ng IMO ang {Day of the Seafarer} tuwing Hunyo 25: halos 90% ng kalakal sa mundo ay dumadaan sa dagat, salamat sa mga marino.", "Sa araw na ito, nagpapasalamat sa mga marino ang maraming barko at daungan."],
  it:"Sa Pilipinas, may sariling Araw ng Marino tuwing huling Linggo ng Setyembre.",x:"Maraming charity at mission para sa mga marino sa Britanya.",lb:["Sa dagat", "At sea"],
  w:[["seafarer", "marino"], ["Day of the Seafarer", "Araw ng Marino"], ["goods", "kalakal"]],
  q:{q:"Kailan ang {Day of the Seafarer}?",o:["Hunyo 25", "Mayo 1", "Disyembre 25"],e:"Hunyo 25, mula 2011."}}
];
CULT.l19=[
 {s:"ship",t:"Southampton at ang Titanic",i:"Southampton and the Titanic",
  p:["Ang Southampton ang pinakamalaking cruise port ng England. Dito umalis ang Titanic noong Abril 10, 1912, sa una at huling biyahe nito.", "Pagkatapos ng Titanic, nabuo ang unang kasunduang SOLAS noong 1914: may lugar sa lifeboat para sa bawat tao, at may drill."],
  it:"Malalaking daungan sa Pilipinas: Maynila, Cebu, Batangas, Davao.",x:"Malalaking daungan sa Britanya: Southampton, Liverpool, Dover.",
  w:[["cruise port", "cruise port"], ["voyage", "paglalayag"], ["lifeboat", "lifeboat"]],
  q:{q:"Saang daungan umalis ang Titanic?",o:["{Southampton}", "{Liverpool}", "{Genoa}"],e:"Southampton, 1912."}}
];
CULT.l20=[
 {s:"documents",t:"Ang CV ng marino",i:"A seafarer's CV",
  p:["Para sa bagong trabaho, kailangan sa {CV} mo: mga dating barko, ranggo, petsa ng kontrata, at mga sertipiko, gaya ng basic safety training ng {STCW}. Ang karanasan, sa {present perfect}: {I have worked as a waitress for six years.}", "Ang {STCW} (1978) ay internasyonal na kasunduan sa training at sertipiko ng mga marino."],
  it:"Sa Pilipinas, ang Seaman's Book (SIRB) ay dokumento ng pagkakakilanlan ng marino.",x:"Maikli at malinaw na {CV}: hanggang dalawang pahina.",lb:["Sa dagat", "At sea"],
  w:[["CV", "CV, resume"], ["certificate", "sertipiko"], ["training", "training"]],
  q:{q:"Tungkol saan ang {STCW}?",o:["training at sertipiko ng marino", "pagkain", "panahon"],e:"{STCW}."}}
];
CULT.l21=[
 {s:"gift",t:"Ang pag-uwi",i:"Going home",
  p:["Sa katapusan ng kontrata, pagkatapos mag-{sign off}, umuuwi ang mga marino, madalas na may bag na puno ng pasalubong. Marami ang nakapagpadala na ng malaking bahagi ng sahod nila.", "Isa ang Pilipinas sa mga bansang tumatanggap ng pinakamaraming padala sa mundo; «bagong bayani» ang tawag sa mga OFW."],
  it:"Pasalubong para sa buong pamilya at kapitbahay!",x:"Madalas na mas maikli ang «rotation» ng mga marinong British.",lb:["Sa dagat", "At sea"],
  w:[["sign off", "mag-sign off"], ["send money home", "magpadala ng pera"], ["souvenir", "pasalubong, souvenir"]],
  q:{q:"Ang ibig sabihin ng {send money home}:",o:["magpadala ng pera sa bahay", "mag-ipon sa bahay", "mangutang"],e:"{send money home}."}}
];
CULT.l22=[
 {s:"ambulance",t:"SMCP: iisang parirala para sa lahat",i:"Standard Marine Communication Phrases",
  p:["Noong 2001, pinagtibay ng IMO ang {SMCP}: simple at nakapirming pariralang Ingles para walang hindi pagkakaintindihan sa emergency. Halimbawa: nagsisimula ang tanong sa {Question:}, at ang sagot sa {Answer:}.", "Sa radyo, hindi kailanman {What?}: {Say again}. Kapag nagkamali: {Mistake}."],
  it:"Kasama ang SMCP sa training ng mga marinong Pilipino.",x:"Pamantayang parirala = mas kaunting kalituhan, mas ligtas.",lb:["Sa dagat", "At sea"],
  w:[["SMCP", "Standard Marine Communication Phrases"], ["mistake", "mali"], ["question", "tanong"]],
  q:{q:"Kapag may hindi naintindihan sa radyo, ayon sa SMCP:",o:["{Say again.}", "{What?}", "{Repeat me please.}"],e:"{Say again.}"}}
];
CULT.l23=[
 {s:"hand",t:"Sa interview",i:"At the interview",
  p:["Sa interview na British o Europeo: matatag na pakikipagkamay, pagtingin sa mata, at maiikli pero kongkretong halimbawa. Sa halip na {I don't know}: {I'm not sure, but I can learn quickly.}", "Sa dulo, pasasalamat: {Thank you for your time.}"],
  it:"Ang hindi pagtingin sa mata ay tanda ng paggalang sa nakatatanda, pero sa interview na Europeo, tumingin sa mata.",x:"Pagtingin sa mata = katapatan at tiwala.",
  w:[["handshake", "pakikipagkamay"], ["eye contact", "pagtingin sa mata"], ["learn quickly", "mabilis matuto"]],
  q:{q:"Itinuturing na maganda sa interview na Europeo:",o:["tumingin sa mata habang nagsasalita", "laging tumingin sa baba", "magsalita nang napakahina"],e:"{eye contact} = tiwala."}}
];
