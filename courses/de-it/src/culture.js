/* Culture cards: 2 per lesson.
   s = illustration (#sc-…), t = title, i = German title (you can listen to it), p = paragraphs (Italian, German in {braces}),
   it / x = Italy / Germany compared (lb = [Italian, German] label when the comparison is with Austria or Switzerland),
   w = key words [German, Italian], q = question (the first option is right). */

/* ---------- Parte prima ---------- */
CULT.l1=[
 {s:"hand",t:"Moin, Grüß Gott, Servus",i:"Grüß Gott!",
  p:["{Guten Tag} va bene ovunque, ma ogni regione ha il suo saluto. Nel nord si dice {Moin} (anche {Moin Moin}), a qualsiasi ora del giorno. In Baviera e in Austria si sente {Grüß Gott} e, tra amici, {Servus}, che vale sia per «ciao» arrivando sia andando via.","In Svizzera si saluta con {Grüezi} (o {Grüessech} a Berna). Tra conoscenti ci si stringe la mano; i baci sulle guance sono meno diffusi che in Italia e si danno solo tra amici stretti."],
  it:"Ciao, buongiorno, buonasera: quasi uguali in tutta Italia, con baci tra amici e parenti.",x:"Saluti regionali diversi; la stretta di mano è il gesto più comune, anche tra colleghi ogni mattina.",
  w:[["Moin","ciao (nel nord)"],["Grüß Gott","buongiorno (Baviera, Austria)"],["Servus","ciao (sud, Austria)"],["Hand geben","dare la mano"]],
  q:{q:"Sei ad Amburgo alle sei di sera. Che saluto senti spesso?",o:["{Moin}","{Grüß Gott}","{Gute Nacht}"],e:"Nel nord {Moin} si dice a qualsiasi ora."}},
 {s:"abc",t:"Tutti i nomi con la maiuscola",i:"Die Großschreibung",
  p:["Il tedesco è l'unica grande lingua europea che scrive con la maiuscola tutti i nomi comuni, non solo i nomi propri: {der Hund}, {die Liebe}, {das Essen}. L'abitudine si è diffusa tra il Cinquecento e il Seicento, e le riforme dell'ortografia l'hanno sempre mantenuta.","Il vantaggio per chi impara: leggendo si riconoscono subito i nomi. Anche il «Lei» di cortesia ha la maiuscola: {Sie}. Il pronome {ich} invece si scrive con la minuscola."],
  it:"La maiuscola solo per i nomi propri e all'inizio della frase.",x:"La maiuscola per tutti i nomi comuni, per {Sie} (Lei) e per i verbi e gli aggettivi usati come nomi ({das Essen}).",
  w:[["groß","grande; maiuscolo"],["klein","piccolo; minuscolo"],["Buchstabe","lettera (dell'alfabeto)"],["Wort","parola"]],
  q:{q:"Come si scrive correttamente «il cane è qui»?",o:["{Der Hund ist hier.}","{Der hund ist hier.}","{der Hund ist Hier.}"],e:"I nomi con la maiuscola: {Hund}."}}
];
CULT.l2=[
 {s:"de",t:"Il tedesco nel mondo",i:"Die deutsche Sprache",
  p:["Il tedesco è la lingua madre più parlata dell'Unione Europea: circa 95 milioni di persone. È lingua ufficiale in Germania, Austria, Svizzera, Liechtenstein, Lussemburgo e nella parte orientale del Belgio.","E anche in Italia: in Alto Adige (Südtirol) il tedesco è lingua ufficiale accanto all'italiano, e circa due terzi degli abitanti lo parlano come lingua madre."],
  it:"In Alto Adige cartelli, documenti e scuole sono in tedesco e in italiano.",x:"Il tedesco standard ({Hochdeutsch}) si capisce ovunque, ma ogni paese ha le sue parole e il suo accento.",
  w:[["Sprache","lingua"],["Muttersprache","lingua madre"],["Südtirol","Alto Adige"],["Hochdeutsch","tedesco standard"]],
  q:{q:"In quale regione italiana il tedesco è lingua ufficiale?",o:["Alto Adige","Friuli Venezia Giulia","Valle d'Aosta"],e:"In Alto Adige, accanto all'italiano."}},
 {s:"names",t:"Müller, Schmidt, Schneider",i:"Die häufigsten Nachnamen",
  p:["I cognomi tedeschi più diffusi vengono quasi tutti dai mestieri del Medioevo: {Müller} (mugnaio), {Schmidt} (fabbro), {Schneider} (sarto), {Fischer} (pescatore), {Weber} (tessitore), {Meyer} (amministratore di una fattoria).","Con le persone che non conosci si usa il cognome con {Herr} o {Frau}: {Guten Tag, Frau Müller}. {Frau} si usa per tutte le donne adulte, sposate o no: la parola «Fräulein» non si usa più."],
  it:"I cognomi più comuni (Rossi, Russo, Ferrari) vengono spesso da soprannomi e mestieri.",x:"{Müller} e {Schmidt} sono in testa da secoli. {Frau} vale per tutte le donne, senza distinzione.",
  w:[["Nachname","cognome"],["Vorname","nome"],["Müller","mugnaio (e cognome)"],["Schmidt","fabbro (e cognome)"]],
  q:{q:"Come ti rivolgi a una signora di cui conosci il cognome, Becker?",o:["{Guten Tag, Frau Becker!}","{Guten Tag, Fräulein Becker!}","{Hallo, Becker!}"],e:"{Frau} + cognome, per tutte le donne."}}
];
CULT.l3=[
 {s:"talk",t:"Du o Sie?",i:"Duzen oder Siezen?",
  p:["In Germania con gli adulti che non conosci si usa {Sie}: nei negozi, negli uffici, con i vicini anziani e spesso anche con i colleghi. Tra giovani, studenti, amici e in famiglia si usa {du}, e in molte aziende moderne si danno del tu fin dal primo giorno.","Passare dal {Sie} al {du} è un piccolo rito: lo propone di solito la persona più anziana o con un ruolo più alto ({Wollen wir uns duzen?}). Dare del {du} senza permesso a un adulto sconosciuto può sembrare scortese."],
  it:"Il «Lei» con gli sconosciuti, ma si passa al «tu» con facilità.",x:"Il {Sie} resta più a lungo, anche tra colleghi; il {du} si «offre» con una domanda.",
  w:[["duzen","dare del tu"],["siezen","dare del Lei"],["Wollen wir uns duzen?","ci diamo del tu?"],["höflich","cortese"]],
  q:{q:"Chi propone di solito di passare al {du}?",o:["la persona più anziana","la persona più giovane","nessuno: si passa da soli"],e:"Di solito la persona più anziana o con un ruolo più alto."}},
 {s:"diploma",t:"Frau Doktor: i titoli",i:"Die Titel",
  p:["In Germania il titolo di dottore di ricerca ({Dr.}) si mette davanti al nome, sui documenti, sul campanello e a volte anche nel saluto: {Guten Tag, Frau Dr. Weber}. Un medico si chiama spesso {Herr Doktor} o {Frau Doktor}.","In Austria i titoli contano ancora di più: si usano {Magister}, {Ingenieur}, {Diplom-Ingenieur}, e perfino i titoli onorifici. Un italiano laureato, in Germania, non è «Doktor»: lo è solo chi ha fatto il dottorato."],
  it:"«Dottore» si dice a tutti i laureati e spesso anche a chi non lo è.",x:"{Doktor} solo per chi ha il dottorato (e per i medici nel parlato). In Austria i titoli si usano moltissimo.",
  w:[["Titel","titolo"],["Doktor","dottore"],["Studium","studi universitari"],["Abschluss","diploma, titolo di studio"]],
  q:{q:"Un italiano con la laurea magistrale è «Doktor» in Germania?",o:["no, solo chi ha il dottorato","sì, come in Italia","sì, ma solo in Austria"],e:"In Germania {Dr.} è il titolo del dottorato di ricerca."}}
];
CULT.l4=[
 {s:"house",t:"Un paese di inquilini",i:"Zur Miete wohnen",
  p:["La Germania è uno dei paesi d'Europa dove meno persone sono proprietarie della casa in cui vivono: circa la metà abita in affitto ({zur Miete}). Gli inquilini sono ben protetti dalla legge e molti restano nella stessa casa per decenni.","Una sorpresa per gli italiani: gli appartamenti si affittano spesso senza cucina, e chi trasloca se la porta via. Negli annunci {Kaltmiete} è l'affitto senza spese, {Warmmiete} con riscaldamento e spese."],
  it:"Circa tre famiglie su quattro sono proprietarie della casa in cui vivono.",x:"Circa metà delle famiglie vive in affitto; la cucina spesso non è compresa.",
  w:[["Miete","affitto"],["Mieter","inquilino"],["Kaltmiete","affitto senza spese"],["Warmmiete","affitto con spese"]],
  q:{q:"Che cos'è la {Warmmiete}?",o:["l'affitto con riscaldamento e spese","l'affitto d'estate","la caparra"],e:"{warm} = con le spese comprese; {kalt} = senza."}},
 {s:"pfand",t:"Il «Pfand»: le bottiglie valgono soldi",i:"Das Pfand",
  p:["Su quasi tutte le bottiglie di plastica e le lattine si paga una cauzione, il {Pfand}: 25 centesimi per quelle usa e getta, meno per quelle riutilizzabili di vetro. Lo vedi sullo scontrino.","Quando riporti il vuoto al supermercato, una macchina lo ritira e ti dà uno scontrino da scalare dalla spesa. Per questo in Germania si trovano pochissime bottiglie per terra, e c'è chi raccoglie quelle abbandonate."],
  it:"La plastica e le lattine vanno nella raccolta differenziata, senza cauzione.",x:"25 centesimi di {Pfand} per bottiglia o lattina, restituiti quando la riporti.",
  w:[["Pfand","cauzione sul vuoto"],["Flasche","bottiglia"],["Dose","lattina"],["Automat","macchina automatica"]],
  q:{q:"Quanto vale il {Pfand} di una lattina?",o:["25 centesimi","1 euro","niente"],e:"25 centesimi per bottiglie e lattine usa e getta."}}
];
CULT.l5=[
 {s:"family",t:"Mamma e papà a casa con il bambino",i:"Elternzeit",
  p:["Dopo la nascita di un figlio, in Germania ogni genitore ha diritto all'{Elternzeit}, un congedo fino a tre anni, e lo Stato paga per circa un anno l'{Elterngeld}, una parte dello stipendio. Sempre più padri ne prendono almeno due mesi.","I nonni aiutano meno che in Italia, anche perché spesso abitano lontano: molti bambini vanno all'asilo nido ({Kita}) già da piccoli."],
  it:"I nonni sono spesso il primo aiuto per i genitori che lavorano.",x:"Congedo lungo per mamma e papà, e asilo nido ({Kita}) per molti bambini dal primo anno.",
  w:[["Elternzeit","congedo parentale"],["Kita","asilo nido"],["Baby","neonato"],["Großeltern","nonni"]],
  q:{q:"Che cos'è la {Kita}?",o:["l'asilo nido","la cucina","la scuola elementare"],e:"{Kita} = Kindertagesstätte, asilo nido."}},
 {s:"house",t:"Il cane paga le tasse",i:"Die Hundesteuer",
  p:["In Germania chi ha un cane paga ogni anno una tassa al comune, la {Hundesteuer}: di solito tra 50 e 150 euro, di più per i cani considerati pericolosi. Per i gatti invece non si paga niente.","I cani sono benvenuti quasi ovunque: sui mezzi pubblici, in molti ristoranti e uffici. Ma devono essere educati: nei parchi c'è spesso l'obbligo di guinzaglio ({Leinenpflicht})."],
  it:"Non c'è una tassa sul cane; serve il microchip e l'iscrizione all'anagrafe canina.",x:"Tassa annuale sul cane, decisa da ogni comune; i cani entrano in molti locali.",
  w:[["Hund","cane"],["Steuer","tassa"],["Leine","guinzaglio"],["Haustier","animale domestico"]],
  q:{q:"Che cos'è la {Hundesteuer}?",o:["una tassa sul cane","un negozio per cani","un parco per cani"],e:"{Steuer} = tassa: la paga chi ha un cane."}}
];
CULT.l6=[
 {s:"clock",t:"Puntuali, davvero",i:"Pünktlichkeit",
  p:["In Germania la puntualità è una forma di rispetto. A un appuntamento di lavoro o dal medico si arriva qualche minuto prima; anche tra amici un ritardo di un quarto d'ora va annunciato con un messaggio.","Per le feste private, invece, si può arrivare un po' dopo l'orario dell'invito. E se ti invitano a cena alle sette, arriva alle sette, non alle otto e mezza."],
  it:"Tra amici dieci, quindici minuti di ritardo sono normali.",x:"Anche cinque minuti di ritardo si annunciano: {Ich komme fünf Minuten später}.",
  w:[["pünktlich","puntuale"],["Verspätung","ritardo"],["später","più tardi"],["Termin","appuntamento"]],
  q:{q:"Hai un appuntamento di lavoro alle 9. Quando arrivi?",o:["qualche minuto prima delle 9","alle 9 e un quarto","quando posso"],e:"Puntuali o in leggero anticipo."}},
 {s:"shop",t:"La domenica i negozi sono chiusi",i:"Der Sonntag",
  p:["In Germania la domenica e i giorni festivi quasi tutti i negozi sono chiusi per legge: si fa la spesa entro il sabato sera. Restano aperti solo le stazioni, gli aeroporti, i distributori di benzina e qualche panetteria la mattina.","La domenica è anche giorno di riposo ({Ruhetag}): niente lavatrici rumorose, trapani o tagliaerba. Molti condomini hanno regole precise sugli orari di silenzio ({Ruhezeiten})."],
  it:"In molte città i negozi e i centri commerciali sono aperti anche la domenica.",x:"Negozi chiusi la domenica e orari di silenzio rispettati da tutti.",
  w:[["geschlossen","chiuso"],["Ruhetag","giorno di riposo, chiusura settimanale"],["Ladenschluss","orario di chiusura dei negozi"],["laut","rumoroso"]],
  q:{q:"Dove puoi fare la spesa di domenica in Germania?",o:["in stazione","in un supermercato del centro","in qualsiasi negozio"],e:"La domenica sono aperti solo pochi negozi, per esempio in stazione."}}
];
CULT.l7=[
 {s:"factory",t:"L'«Ausbildung»: imparare un mestiere",i:"Die Ausbildung",
  p:["Circa metà dei giovani tedeschi, dopo la scuola, non va all'università ma fa un'{Ausbildung}: due o tre anni di formazione divisi tra un'azienda, dove si lavora con uno stipendio, e una scuola professionale. È il «sistema duale».","Così si diventa meccanico, infermiere, cuoco, impiegato di banca o commesso. È un percorso stimato, che porta spesso a un lavoro fisso nella stessa azienda."],
  it:"La formazione professionale è soprattutto a scuola; l'apprendistato esiste ma è meno diffuso.",x:"Il {duales System}: studio e lavoro insieme, con un contratto e uno stipendio.",
  w:[["Ausbildung","formazione professionale"],["Azubi","apprendista"],["Beruf","professione"],["Betrieb","azienda"]],
  q:{q:"Che cos'è un {Azubi}?",o:["un apprendista","un autobus","un ufficio"],e:"{Azubi} = Auszubildender: chi fa l'{Ausbildung}."}},
 {s:"cup",t:"Feierabend!",i:"Feierabend",
  p:["{Feierabend} è la fine della giornata di lavoro, e la parola dice tutto: la sera è per sé. Molti tedeschi cominciano a lavorare presto, verso le 8, e finiscono verso le 16-17. Dopo, il lavoro resta fuori: niente mail o telefonate.","La pausa pranzo è spesso breve, mezz'ora in mensa ({Kantine}). Ci si augura {Schönen Feierabend!}, buona serata dopo il lavoro."],
  it:"Si comincia più tardi e si finisce più tardi; la pausa pranzo può essere lunga.",x:"Giornata che comincia presto e finisce presto; il {Feierabend} è sacro.",
  w:[["Feierabend","fine della giornata di lavoro"],["Kantine","mensa aziendale"],["Mittagspause","pausa pranzo"],["Schönen Feierabend!","buona serata (dopo il lavoro)!"]],
  q:{q:"Che cosa vuol dire {Schönen Feierabend!}?",o:["buona serata dopo il lavoro","buon compleanno","buona festa"],e:"Lo si dice ai colleghi andando via."}}
];
CULT.l8=[
 {s:"cake",t:"Kaffee und Kuchen",i:"Kaffee und Kuchen",
  p:["Nel pomeriggio, soprattutto la domenica verso le tre o le quattro, molte famiglie tedesche si siedono per {Kaffee und Kuchen}: caffè filtrato e una fetta di torta, spesso fatta in casa.","Le torte più amate sono il {Käsekuchen} (al formaggio fresco), l'{Apfelkuchen} e la {Schwarzwälder Kirschtorte} (Foresta Nera, con panna, ciliegie e cioccolato). Si invitano anche i vicini o i nonni."],
  it:"La merenda è soprattutto per i bambini; il dolce si mangia a fine pasto.",x:"{Kaffee und Kuchen} è un rito del pomeriggio, anche tra adulti e con ospiti.",
  w:[["Kuchen","torta, dolce"],["Torte","torta (a strati, con crema)"],["Sahne","panna"],["Kirsche","ciliegia"]],
  q:{q:"Quando si fa di solito {Kaffee und Kuchen}?",o:["il pomeriggio, verso le 15-16","a colazione","dopo cena"],e:"Il pomeriggio, soprattutto la domenica."}},
 {s:"menu",t:"Il conto: insieme o separati",i:"Zusammen oder getrennt?",
  p:["Al momento di pagare il cameriere chiede {Zusammen oder getrennt?}: in Germania è normale che ognuno paghi solo quello che ha preso, anche tra amici e in coppia. Il cameriere fa i conti al tavolo, con il portafoglio in mano.","La mancia non si lascia sul tavolo: si dice la cifra arrotondata mentre si paga ({Zwölf, bitte}), circa il 5-10%. Ancora oggi molti locali preferiscono i contanti: chiedi prima se si può pagare con la carta."],
  it:"Si paga spesso un conto solo e si divide in parti uguali; la mancia non è obbligatoria.",x:"Conti separati al tavolo e mancia detta a voce al momento di pagare.",
  w:[["getrennt","separati"],["zusammen","insieme"],["Trinkgeld","mancia"],["bar","in contanti"]],
  q:{q:"Come si lascia la mancia in Germania?",o:["dicendo la cifra arrotondata mentre si paga","lasciandola sul tavolo","non si lascia mai"],e:"Per esempio: «Zwölf, bitte»."}}
];

/* ---------- Parte seconda ---------- */
CULT.l9=[
 {s:"italy",t:"Il tedesco in Alto Adige",i:"Deutsch in Südtirol",
  p:["In Alto Adige circa due terzi degli abitanti hanno il tedesco come lingua madre. A Bolzano e a Merano i cartelli, i giornali e le scuole sono in tedesco e in italiano, e nelle valli si parla anche il ladino.","Il tedesco dell'Alto Adige è vicino a quello austriaco: si dice {Grüß Gott}, {Servus}, e qualche parola è diversa da quella della Germania. Per un italiano è un ottimo posto per esercitarsi senza andare all'estero."],
  it:"Lingue ufficiali in Alto Adige: italiano e tedesco, con il ladino nelle valli ladine.",x:"In Germania il tedesco è l'unica lingua ufficiale a livello nazionale.",
  w:[["Bozen","Bolzano"],["Meran","Merano"],["zweisprachig","bilingue"],["Ladinisch","ladino"]],
  q:{q:"Come si dice Bolzano in tedesco?",o:["{Bozen}","{Bolzen}","{Meran}"],e:"{Bozen}; {Meran} è Merano."}},
 {s:"map",t:"I dialetti: anche i tedeschi non si capiscono",i:"Die Dialekte",
  p:["Accanto al tedesco standard ({Hochdeutsch}) ci sono tantissimi dialetti: il bavarese, lo svevo, il sassone, il basso tedesco del nord. Lo svizzero tedesco ({Schweizerdeutsch}) è così diverso che in tv i tedeschi lo vedono spesso con i sottotitoli.","Con gli stranieri quasi tutti passano al tedesco standard. Se non capisci, chiedi pure: {Können Sie bitte Hochdeutsch sprechen?}"],
  it:"Anche i dialetti italiani sono molto diversi tra loro, ma l'italiano standard si usa ovunque.",x:"In Svizzera il dialetto si parla in quasi tutte le situazioni, il tedesco standard soprattutto si scrive.",
  w:[["Dialekt","dialetto"],["Hochdeutsch","tedesco standard"],["Bayerisch","bavarese"],["Schweizerdeutsch","svizzero tedesco"]],
  q:{q:"Che cos'è lo {Schweizerdeutsch}?",o:["il dialetto tedesco della Svizzera","un formaggio","una festa"],e:"I dialetti tedeschi parlati in Svizzera."}}
];
CULT.l10=[
 {s:"brezel",t:"Il paese del pane",i:"Brot und Brötchen",
  p:["In Germania ci sono più di 3.000 tipi di pane registrati, e la cultura del pane tedesco è iscritta nell'elenco nazionale del patrimonio culturale immateriale. Pane di segale, integrale, ai semi: scuro, compatto e saporito.","La mattina si comprano i {Brötchen} (panini) freschi dal fornaio; in Baviera è tipica la {Brezel}, il pane a forma di nodo con il sale grosso."],
  it:"Pane bianco e croccante, comprato ogni giorno; tanti pani regionali.",x:"Pane scuro e integrale, {Brötchen} la mattina e la {Brezel} al sud.",
  w:[["Brot","pane"],["Brötchen","panino"],["Brezel","pretzel, ciambella salata"],["Bäckerei","panetteria"]],
  q:{q:"Che cos'è una {Brezel}?",o:["un pane a forma di nodo","un dolce al cioccolato","una birra"],e:"Il pane a nodo con il sale grosso, tipico del sud."}},
 {s:"table",t:"La cena fredda: l'Abendbrot",i:"Das Abendbrot",
  p:["In molte famiglie tedesche il pasto caldo si mangia a mezzogiorno, e la sera si fa l'{Abendbrot}: pane, burro, formaggi, salumi, verdure crude e un tè. Si cena presto, spesso verso le 18-19.","Oggi chi lavora tutto il giorno cena spesso caldo, ma l'{Abendbrot} resta un'abitudine molto diffusa, soprattutto nel nord e con i bambini."],
  it:"La cena è spesso il pasto principale, caldo, verso le 20.",x:"Pasto caldo a pranzo, cena fredda e presto con pane e affettati.",
  w:[["Abendbrot","cena fredda (con pane)"],["Aufschnitt","affettati"],["Butter","burro"],["warm essen","mangiare caldo"]],
  q:{q:"Che cos'è l'{Abendbrot}?",o:["una cena fredda con pane e affettati","un pane per la sera","una festa di sera"],e:"La cena a base di pane, burro, formaggi e salumi."}}
];
CULT.l11=[
 {s:"football",t:"Il paese dei «Vereine»",i:"Der Verein",
  p:["In Germania ci sono circa 600.000 associazioni registrate, i {Vereine}: sportive, musicali, di giardinaggio, di volontariato. Circa un tedesco su due ne fa parte. Il calcio, la ginnastica, il tennis si praticano soprattutto nei club, non in palestre private.","Si dice scherzando che quando tre tedeschi si incontrano fondano un {Verein}. Iscriversi è il modo migliore per conoscere gente e allenare il tedesco."],
  it:"Si fa sport spesso in palestre e circoli privati; le associazioni esistono ma sono meno centrali.",x:"Il {Verein} è al centro della vita sociale, soprattutto nei paesi.",
  w:[["Verein","associazione, club"],["Mitglied","socio"],["Sportverein","società sportiva"],["Ehrenamt","volontariato"]],
  q:{q:"Che cos'è un {Verein}?",o:["un'associazione, un club","un parco","una scuola guida"],e:"{Verein} = associazione."}},
 {s:"sun",t:"L'orto in città: lo Schrebergarten",i:"Der Schrebergarten",
  p:["Ai margini delle città tedesche si vedono file di piccoli giardini con una casetta: sono i {Schrebergärten} o {Kleingärten}, orti in affitto per chi abita in appartamento. In Germania sono quasi un milione.","Ci si coltivano verdure e fiori, si fanno grigliate con gli amici nel fine settimana. Le regole sono precise: una parte del terreno deve servire per l'orto."],
  it:"Gli orti urbani esistono, ma sono meno diffusi e più recenti.",x:"Quasi un milione di piccoli giardini in affitto, una tradizione dell'Ottocento.",
  w:[["Garten","giardino"],["Kleingarten","orto in affitto"],["grillen","fare la grigliata"],["Gemüse","verdura"]],
  q:{q:"Che cos'è uno {Schrebergarten}?",o:["un piccolo giardino in affitto","una scuola","un tipo di birra"],e:"Un orto con casetta, per chi vive in città."}}
];
CULT.l12=[
 {s:"ticket",t:"Un biglietto per tutta la Germania",i:"Das Deutschlandticket",
  p:["Dal 2023 esiste il {Deutschlandticket}: un abbonamento mensile unico per tutti gli autobus, i tram, le metropolitane e i treni regionali di tutta la Germania. Si compra online o con un'app e si può disdire ogni mese.","Sui mezzi pubblici di solito non ci sono tornelli: i controllori passano a campione e chi viaggia senza biglietto valido paga una multa di 60 euro."],
  it:"Ogni città ha i suoi biglietti e abbonamenti; i treni regionali hanno tariffe a parte.",x:"Un solo abbonamento per i trasporti locali di tutto il paese; niente tornelli, ma controlli.",
  w:[["Fahrkarte","biglietto"],["Abo","abbonamento"],["Kontrolleur","controllore"],["Strafe","multa"]],
  q:{q:"Che cosa copre il {Deutschlandticket}?",o:["i trasporti locali e i treni regionali di tutta la Germania","solo la metropolitana di Berlino","i treni ad alta velocità"],e:"Autobus, tram, metro e treni regionali, non i treni veloci."}},
 {s:"piazza",t:"Il pedone aspetta il verde",i:"Rote Ampel",
  p:["In Germania i pedoni aspettano il verde anche quando non passa nessuna macchina, soprattutto se ci sono bambini: attraversare con il rosso costa una multa e viene considerato un cattivo esempio.","In bicicletta si usano le piste ciclabili ({Radwege}): non bisogna camminarci sopra, i ciclisti suonano il campanello e vanno veloci!"],
  it:"Si attraversa spesso con il rosso se la strada è libera.",x:"Si aspetta il verde; le piste ciclabili sono solo per le biciclette.",
  w:[["Ampel","semaforo"],["rot","rosso"],["grün","verde"],["Radweg","pista ciclabile"]],
  q:{q:"Che cos'è un {Radweg}?",o:["una pista ciclabile","un marciapiede","una strada per auto"],e:"Una pista per le biciclette: non ci si cammina sopra."}}
];
CULT.l13=[
 {s:"calendar",t:"Gli appuntamenti si fissano prima",i:"Verabredungen",
  p:["I tedeschi organizzano molto anche il tempo libero: una cena tra amici si fissa spesso con una o due settimane di anticipo, e chi accetta poi viene davvero. L'invito «improvvisato» per la stessa sera è meno comune che in Italia.","Per questo un {Vielleicht} (forse) suona quasi come un no. Se non puoi, dillo chiaramente: {Leider kann ich nicht}."],
  it:"Gli inviti dell'ultimo minuto sono normali; «vediamo» è una risposta accettata.",x:"Si fissa in anticipo e si conferma; un sì è un sì.",
  w:[["Termin","appuntamento"],["Verabredung","appuntamento (tra amici)"],["Kalender","calendario, agenda"],["absagen","disdire"]],
  q:{q:"Un collega ti invita a cena tra due settimane e tu dici {Ja, gern!}. Che cosa si aspetta?",o:["che tu venga davvero","che tu richiami il giorno prima","niente di preciso"],e:"Un sì è un impegno."}},
 {s:"spritz",t:"Il Biergarten",i:"Der Biergarten",
  p:["D'estate, in Baviera, la vita si sposta nei {Biergärten}: grandi giardini all'ombra dei castagni, con lunghe tavole di legno dove tutti si siedono insieme, anche tra sconosciuti.","Nei {Biergärten} tradizionali è permesso portarsi il cibo da casa: si compra solo da bere. La birra si serve spesso nel boccale da un litro, la {Maß}."],
  it:"L'aperitivo al bar o all'aperto, seduti con il proprio gruppo.",x:"Tavoli condivisi, cibo portato da casa e birra nel boccale da un litro.",
  w:[["Biergarten","giardino della birra"],["Maß","boccale da un litro"],["Prost!","salute! (brindando)"],["Brotzeit","merenda, spuntino (Baviera)"]],
  q:{q:"Che cosa si può fare in un {Biergarten} tradizionale?",o:["portare il proprio cibo","portare la propria birra","prenotare un tavolo privato"],e:"Il cibo si può portare da casa; da bere si compra lì."}}
];
CULT.l14=[
 {s:"market",t:"Aldi e Lidl: i discount nati in Germania",i:"Der Discounter",
  p:["Aldi e Lidl, i supermercati discount presenti anche in Italia, sono nati in Germania: Aldi a Essen, dove nel dopoguerra i fratelli Albrecht trasformarono il negozio di famiglia in un discount; Lidl a Neckarsulm, nel sud-ovest. Pochi prodotti, prezzi bassi, nessun fronzolo.","Alla cassa si va veloci: la cassiera passa i prodotti in fretta e tu devi metterli subito nel carrello o nella borsa. Le buste di plastica si pagano: meglio portare la propria."],
  it:"Alla cassa si imbusta con calma; il cassiere spesso aiuta.",x:"Cassa velocissima: si rimette tutto nel carrello e si sistema dopo, al banco vicino all'uscita.",
  w:[["Kasse","cassa"],["Einkaufswagen","carrello"],["Tüte","busta, sacchetto"],["Angebot","offerta"]],
  q:{q:"In quale paese è nato Aldi?",o:["in Germania","in Austria","in Svizzera"],e:"A Essen, in Germania."}},
 {s:"menu",t:"Mille salsicce",i:"Die Wurst",
  p:["In Germania esistono centinaia di tipi di salsiccia ({Wurst}): la {Bratwurst} alla griglia, la {Weißwurst} bianca bavarese (da mangiare prima di mezzogiorno), le {Wiener} sottili.","A Berlino il simbolo è la {Currywurst}: salsiccia a fette con salsa al ketchup e curry, inventata nel 1949 da Herta Heuwer in un chiosco. Si mangia in piedi, con le patatine."],
  it:"I salumi più amati sono crudi o cotti a fette: prosciutto, salame, mortadella.",x:"La {Wurst} è anche cibo di strada: alla griglia, bollita, con il curry.",
  w:[["Wurst","salsiccia, salume"],["Bratwurst","salsiccia alla griglia"],["Senf","senape"],["Pommes","patatine fritte"]],
  q:{q:"Quale città è famosa per la {Currywurst}?",o:["Berlino","Monaco","Vienna"],e:"A Berlino, dal 1949."}}
];

/* ---------- Parte terza ---------- */
CULT.l15=[
 {s:"sun",t:"Il «Spaziergang» della domenica",i:"Der Sonntagsspaziergang",
  p:["La domenica pomeriggio molte famiglie fanno il {Spaziergang}: una lunga passeggiata nel bosco, in un parco o lungo il fiume, con qualsiasi tempo. Poi, a casa o in un caffè, {Kaffee und Kuchen}.","Anche le escursioni in montagna ({wandern}) sono amatissime: ci sono sentieri segnati ovunque e moltissimi tedeschi hanno scarponi e giacca impermeabile."],
  it:"La passeggiata della domenica è spesso in centro, tra le vie e le piazze.",x:"Si cammina nella natura, anche con la pioggia.",
  w:[["Spaziergang","passeggiata"],["wandern","fare escursioni a piedi"],["Wald","bosco"],["Regenjacke","giacca impermeabile"]],
  q:{q:"Che cosa vuol dire {wandern}?",o:["fare escursioni a piedi","nuotare","guardare le vetrine"],e:"Camminare a lungo nella natura."}},
 {s:"gift",t:"Il mercatino delle pulci",i:"Der Flohmarkt",
  p:["Il sabato e la domenica in molte città si fanno i {Flohmärkte}, i mercatini delle pulci: si vendono vestiti, libri, dischi, mobili usati. Quello del Mauerpark a Berlino attira ogni domenica migliaia di persone.","Comprare usato è molto comune in Germania, anche online. E si contratta, con gentilezza: {Was kostet das? — Zehn Euro. — Geht auch acht?}"],
  it:"I mercatini dell'usato e dell'antiquariato sono diffusi, soprattutto la domenica.",x:"Mercatini delle pulci ogni fine settimana, anche nei cortili delle scuole e dei condomini.",
  w:[["Flohmarkt","mercatino delle pulci"],["gebraucht","usato"],["verkaufen","vendere"],["handeln","contrattare"]],
  q:{q:"Che cosa si compra a un {Flohmarkt}?",o:["oggetti usati","solo cibo","solo vestiti nuovi"],e:"Il mercatino delle pulci vende cose usate."}}
];
CULT.l16=[
 {s:"map",t:"Autostrade senza limite di velocità",i:"Die Autobahn",
  p:["La Germania è l'unico grande paese d'Europa in cui su molti tratti di autostrada ({Autobahn}) non c'è un limite di velocità generale: c'è solo una velocità consigliata di 130 km/h. Dove ci sono cartelli, però, i limiti vanno rispettati.","Le autostrade tedesche per le auto sono gratuite. In Austria e in Svizzera invece serve la {Vignette}, il bollino da attaccare al parabrezza o da comprare online."],
  it:"Limite di 130 km/h e pedaggio al casello.",x:"Molti tratti senza limite e nessun pedaggio per le auto; in Austria e Svizzera serve la {Vignette}.",
  w:[["Autobahn","autostrada"],["Tempolimit","limite di velocità"],["Stau","coda, ingorgo"],["Vignette","bollino autostradale"]],
  q:{q:"Quanto si paga sulle autostrade tedesche in macchina?",o:["niente","un pedaggio al casello","una vignetta annuale"],e:"Per le auto sono gratuite."}},
 {s:"train",t:"La Deutsche Bahn e i ritardi",i:"Die Deutsche Bahn",
  p:["I treni veloci della Deutsche Bahn, gli {ICE}, collegano le grandi città a più di 250 km/h. Ma negli ultimi anni i treni a lunga percorrenza sono spesso in ritardo: i tedeschi ci scherzano sopra, ma si lamentano molto.","Con un ritardo di almeno un'ora si ha diritto a un rimborso di una parte del biglietto: si chiede online o con l'app. Utile la frase: {Der Zug hat Verspätung}."],
  it:"Le Frecce e Italo sono in genere puntuali sulle linee veloci.",x:"Rete fittissima, ma ritardi frequenti sulle lunghe distanze.",
  w:[["Zug","treno"],["Verspätung","ritardo"],["Gleis","binario"],["umsteigen","cambiare (treno)"]],
  q:{q:"Che cosa vuol dire {Der Zug hat Verspätung}?",o:["il treno è in ritardo","il treno è pieno","il treno è partito"],e:"{Verspätung} = ritardo."}}
];
CULT.l17=[
 {s:"school",t:"Il primo giorno di scuola: la Schultüte",i:"Die Schultüte",
  p:["Il primo giorno della scuola elementare i bambini tedeschi ricevono la {Schultüte}: un grande cono di cartone colorato pieno di dolci, matite e piccoli regali, per rendere dolce l'inizio della scuola.","La scuola elementare ({Grundschule}) dura di solito quattro anni. Poi, già a dieci anni, si sceglie tra scuole diverse, tra cui il {Gymnasium}, che porta alla maturità ({Abitur})."],
  it:"Elementari di cinque anni; la scelta della scuola superiore arriva a 14 anni.",x:"{Grundschule} di quattro anni; la scelta del tipo di scuola arriva a 10 anni.",
  w:[["Schultüte","cono di dolci del primo giorno di scuola"],["Grundschule","scuola elementare"],["Gymnasium","liceo"],["Abitur","maturità"]],
  q:{q:"Che cosa ricevono i bambini il primo giorno di scuola?",o:["un cono pieno di dolci","un libro di fiabe","una bicicletta"],e:"La {Schultüte}."}},
 {s:"befana",t:"San Nicola e i mercatini di Natale",i:"Nikolaus und Weihnachtsmarkt",
  p:["La sera del 5 dicembre i bambini mettono gli stivali davanti alla porta e la mattina del 6 li trovano pieni di dolci: li ha portati San Nicola ({Nikolaus}). I regali veri arrivano la sera della Vigilia, il 24.","A dicembre in quasi ogni città c'è il {Weihnachtsmarkt}, il mercatino di Natale, con il vin brulè ({Glühwein}) e i biscotti speziati. Tra i più antichi c'è lo {Striezelmarkt} di Dresda, del 1434."],
  it:"I regali si aprono il 25 (o la sera del 24); la Befana porta i dolci il 6 gennaio.",x:"Dolci di San Nicola il 6 dicembre, regali la sera del 24, e i mercatini per tutto l'Avvento.",
  w:[["Nikolaus","San Nicola"],["Weihnachten","Natale"],["Glühwein","vin brulè"],["Heiligabend","la Vigilia di Natale"]],
  q:{q:"Quando si scambiano i regali di Natale in Germania?",o:["la sera del 24 dicembre","la mattina del 25","il 6 gennaio"],e:"A {Heiligabend}, la sera della Vigilia."}}
];
CULT.l18=[
 {s:"wolf",t:"Le fiabe dei fratelli Grimm",i:"Grimms Märchen",
  p:["Cappuccetto Rosso ({Rotkäppchen}), Hänsel e Gretel, Biancaneve ({Schneewittchen}), Cenerentola ({Aschenputtel}): molte fiabe che conosciamo le hanno raccolte e pubblicate i fratelli Jacob e Wilhelm Grimm, a partire dal 1812.","Cominciano tutte con {Es war einmal…} e finiscono con {Und wenn sie nicht gestorben sind, dann leben sie noch heute} (e se non sono morti, vivono ancora oggi). Sono scritte al {Präteritum}, il tempo dei racconti."],
  it:"Le fiabe italiane le ha raccolte Italo Calvino nel 1956.",x:"Le fiabe dei Grimm sono nel registro UNESCO «Memoria del mondo».",
  w:[["Märchen","fiaba"],["Rotkäppchen","Cappuccetto Rosso"],["Wolf","lupo"],["Es war einmal","c'era una volta"]],
  q:{q:"Come comincia una fiaba tedesca?",o:["{Es war einmal…}","{Eines Abends…}","{Hallo, Kinder!}"],e:"{Es war einmal…} = c'era una volta."}},
 {s:"sun",t:"Non esiste il brutto tempo",i:"Das Wetter",
  p:["Un proverbio tedesco dice: {Es gibt kein schlechtes Wetter, nur schlechte Kleidung} (non esiste il brutto tempo, solo i vestiti sbagliati). Infatti si esce anche con la pioggia e il freddo, con la giacca giusta.","Il tempo cambia in fretta, soprattutto in primavera: si parla di {Aprilwetter}. Gli inverni sono più freddi e bui che in Italia, e d'estate fa caldo ma raramente come da noi."],
  it:"Con la pioggia molti restano a casa o rinunciano alla passeggiata.",x:"Si esce con qualsiasi tempo; l'{Aprilwetter} cambia di ora in ora.",
  w:[["Wetter","tempo (meteo)"],["Regen","pioggia"],["Kleidung","vestiti"],["Aprilwetter","tempo variabile (di aprile)"]],
  q:{q:"Che cos'è l'{Aprilwetter}?",o:["un tempo che cambia di continuo","una festa di aprile","il primo caldo"],e:"Sole, pioggia e vento nello stesso giorno."}}
];
CULT.l19=[
 {s:"gift",t:"Mai fare gli auguri in anticipo",i:"Geburtstag",
  p:["In Germania porta sfortuna fare gli auguri di compleanno prima del giorno giusto: nessuno ti dirà {Alles Gute zum Geburtstag!} il giorno prima. Si festeggia spesso «entrando» nel compleanno a mezzanotte ({reinfeiern}).","Al lavoro è il festeggiato a portare la torta o i dolci per i colleghi. Tra amici i regali si aprono subito, davanti a chi li ha fatti."],
  it:"Gli auguri in anticipo non sono un problema; al lavoro spesso offre il festeggiato.",x:"Mai gli auguri prima del giorno; il festeggiato porta la torta in ufficio.",
  w:[["Alles Gute zum Geburtstag!","buon compleanno!"],["feiern","festeggiare"],["Geschenk","regalo"],["Torte","torta"]],
  q:{q:"Quando si fanno gli auguri di compleanno in Germania?",o:["solo il giorno stesso (o dopo)","il giorno prima","una settimana prima"],e:"In anticipo porta sfortuna."}},
 {s:"de",t:"Berlino, Amburgo, Monaco",i:"Die größten Städte",
  p:["Berlino è la capitale e la città più grande: circa 3,8 milioni di abitanti. Seguono Amburgo (1,9 milioni), il più grande porto del paese, e Monaco di Baviera (1,5 milioni), la città con gli affitti più cari.","Ma la Germania è un paese di città medie: molte regioni hanno una propria capitale e non c'è una sola città che domina, come Parigi in Francia. Anche Colonia supera il milione di abitanti, e Francoforte, la città delle banche, è vicina agli 800.000."],
  it:"Roma e Milano sono le città più grandi; il paese ha molti centri medi.",x:"Berlino è la più grande, ma la Germania è federale: ogni regione ({Bundesland}) ha la sua capitale.",
  w:[["Hauptstadt","capitale"],["Einwohner","abitante"],["Bundesland","regione, stato federale"],["größer als","più grande di"]],
  q:{q:"Qual è la città più grande della Germania?",o:["Berlino","Amburgo","Monaco"],e:"Berlino, con circa 3,8 milioni di abitanti."}}
];
CULT.l20=[
 {s:"fashion",t:"Le taglie tedesche",i:"Die Kleidergrößen",
  p:["Le taglie tedesche dei vestiti non sono quelle italiane. Per le donne una 36 tedesca corrisponde più o meno a una 42 italiana: si tolgono circa sei numeri. Per gli uomini le taglie sono simili alle nostre.","Le scarpe invece hanno numeri quasi uguali ai nostri. In molti negozi trovi anche le taglie internazionali: {S}, {M}, {L}."],
  it:"Taglie da donna: 40, 42, 44…",x:"Taglie da donna circa sei numeri sotto le italiane: la 42 italiana è una 36 tedesca.",
  w:[["Größe","taglia"],["anprobieren","provare (un vestito)"],["Umkleidekabine","camerino"],["zu klein","troppo piccolo"]],
  q:{q:"Porti la 44 italiana. Che taglia chiedi in Germania, più o meno?",o:["la 38","la 44","la 48"],e:"Circa sei numeri in meno: 44 → 38."}},
 {s:"sale",t:"I saldi senza date fisse",i:"Der Schlussverkauf",
  p:["In Germania i saldi di fine stagione si chiamavano {Winterschlussverkauf} e {Sommerschlussverkauf} e avevano date fissate per legge. Dal 2004 le date sono libere: ogni negozio fa gli sconti quando vuole.","Restano però i periodi tradizionali, a fine gennaio e a fine luglio. Sui cartelli trovi {Sale}, {Reduziert} (scontato) e {Rabatt} (sconto)."],
  it:"Le date dei saldi le fissano le regioni, all'inizio di gennaio e di luglio.",x:"Date libere dal 2004; gli sconti più forti a fine gennaio e a fine luglio.",
  w:[["Rabatt","sconto"],["reduziert","scontato"],["Schlussverkauf","saldi di fine stagione"],["günstig","conveniente"]],
  q:{q:"Che cosa vuol dire {reduziert} su un cartellino?",o:["scontato","esaurito","nuovo"],e:"{reduziert} = ridotto, scontato."}}
];
CULT.l21=[
 {s:"study",t:"Università quasi gratis",i:"Studieren in Deutschland",
  p:["Nelle università pubbliche tedesche non si pagano tasse di iscrizione per i corsi di laurea: si paga solo un contributo semestrale di qualche centinaio di euro, che spesso comprende anche l'abbonamento ai mezzi pubblici.","Per questo molti studenti italiani scelgono la Germania per la laurea magistrale o il dottorato. Per i corsi in tedesco si chiede di solito il livello C1."],
  it:"Le tasse universitarie dipendono dal reddito della famiglia.",x:"Niente tasse universitarie, solo un contributo semestrale; molti corsi anche in inglese.",
  w:[["Universität","università"],["Semester","semestre"],["Studiengebühren","tasse universitarie"],["Stipendium","borsa di studio"]],
  q:{q:"Che cosa vuol dire {Stipendium}?",o:["borsa di studio","stipendio","studio"],e:"Falso amico: lo stipendio è {das Gehalt}."}},
 {s:"alps",lb:["Austria e Svizzera","Österreich und die Schweiz"],t:"Stessa lingua, parole diverse",i:"Österreich und die Schweiz",
  p:["In Austria il tedesco ha parole sue: gennaio è {Jänner}, il pomodoro {Paradeiser}, la patata {Erdapfel}, il panino {Semmel}. In Svizzera la bicicletta è il {Velo} e non si usa la {ß}: si scrive {Strasse}.","Tutti capiscono il tedesco standard, e tutte le forme sono corrette nel loro paese. Agli esami del Goethe-Institut le varianti austriache e svizzere sono accettate."],
  it:"L'italiano ha parole regionali diverse, ma una sola norma.",x:"Tre norme nazionali: tedesca, austriaca e svizzera, tutte corrette.",
  w:[["Jänner","gennaio (in Austria)"],["Paradeiser","pomodoro (in Austria)"],["Velo","bicicletta (in Svizzera)"],["Semmel","panino (sud, Austria)"]],
  q:{q:"Come si dice «gennaio» in Austria?",o:["{Jänner}","{Januar}","{Jenner}"],e:"In Austria {Jänner}, in Germania {Januar}."}}
];
CULT.l22=[
 {s:"pharmacy",t:"Le medicine solo in farmacia",i:"Die Apotheke",
  p:["In Germania anche le medicine più semplici, come l'aspirina, si comprano solo in farmacia ({Apotheke}), riconoscibile dalla grande {A} rossa. Le {Drogerien} (come dm o Rossmann) vendono cosmetici e prodotti per la casa, ma non medicinali.","Di notte e nei festivi c'è sempre una farmacia di turno ({Notdienst}): l'indirizzo è scritto sulla porta di tutte le farmacie."],
  it:"Farmaci da banco anche nelle parafarmacie e in alcuni supermercati; croce verde.",x:"Medicine solo in {Apotheke}, con la {A} rossa; la {Drogerie} non vende farmaci.",
  w:[["Apotheke","farmacia"],["Notdienst","servizio di turno"],["Drogerie","negozio di cosmetici e prodotti per la casa"],["Rezept","ricetta"]],
  q:{q:"Dove compri l'aspirina in Germania?",o:["in {Apotheke}","in {Drogerie}","al supermercato"],e:"Solo in farmacia."}},
 {s:"ambulance",t:"Il 112 e il certificato di malattia",i:"Notruf 112",
  p:["Il numero di emergenza in Germania è il {112} (ambulanza e vigili del fuoco); la polizia ha il {110}. Con la tessera sanitaria italiana, che vale anche come tessera europea (TEAM), ci si può far curare dal medico pubblico.","Chi lavora e si ammala deve avvisare subito il datore di lavoro; dal quarto giorno di malattia (a volte già dal primo) serve il certificato del medico, la {Krankschreibung}, che oggi arriva al datore di lavoro in forma elettronica."],
  it:"Il 112 è il numero unico di emergenza in sempre più regioni.",x:"{112} per ambulanza e pompieri, {110} per la polizia.",
  w:[["Notruf","chiamata d'emergenza"],["Krankenwagen","ambulanza"],["Polizei","polizia"],["Krankschreibung","certificato di malattia"]],
  q:{q:"Quale numero chiami in Germania per la polizia?",o:["il {110}","il {113}","il {911}"],e:"{110} per la polizia, {112} per l'ambulanza."}}
];
CULT.l23=[
 {s:"italy",t:"Italiani in Germania",i:"Italiener in Deutschland",
  p:["Nel 1955 l'Italia e la Germania firmarono il primo accordo per i «lavoratori ospiti» ({Gastarbeiter}): centinaia di migliaia di italiani partirono per lavorare nelle fabbriche tedesche. Molti sono rimasti, e i loro figli e nipoti sono tedeschi e italiani insieme.","Oggi in Germania vivono circa 650.000 italiani, una delle comunità straniere più numerose. La pizzeria e la gelateria italiana sono diventate parte del paesaggio tedesco."],
  it:"In Germania vive una delle comunità italiane più numerose all'estero.",x:"La storia dei {Gastarbeiter} ha reso l'Italia molto vicina alla Germania, a tavola e non solo.",
  w:[["Gastarbeiter","lavoratore ospite, emigrato"],["Eisdiele","gelateria"],["auswandern","emigrare"],["Heimat","patria, casa"]],
  q:{q:"In che anno l'Italia e la Germania firmarono l'accordo sui {Gastarbeiter}?",o:["1955","1945","1975"],e:"Nel 1955, il primo accordo di questo tipo."}},
 {s:"diploma",t:"Il Goethe-Zertifikat",i:"Das Goethe-Zertifikat",
  p:["Il Goethe-Zertifikat è il diploma di tedesco del Goethe-Institut, riconosciuto in tutto il mondo e senza scadenza. I livelli vanno dall'A1 al C2; l'A2 ha quattro prove: {Lesen} (lettura), {Hören} (ascolto), {Schreiben} (scrittura) e {Sprechen} (orale).","In Italia si può sostenere nelle sedi del Goethe-Institut, per esempio a Roma, Milano, Napoli e Palermo, e nei centri d'esame autorizzati. Dal livello B1 si possono fare anche solo alcuni moduli."],
  it:"Per l'italiano esistono certificazioni come CILS e CELI, anch'esse senza scadenza.",x:"Il Goethe-Zertifikat B1 è spesso richiesto per lavorare o per il permesso di soggiorno.",
  w:[["Prüfung","esame"],["Zertifikat","certificato"],["bestehen","superare (un esame)"],["Niveau","livello"]],
  q:{q:"Quali sono le quattro prove del Goethe-Zertifikat A2?",o:["lettura, ascolto, scrittura, orale","grammatica, lessico, lettura, traduzione","solo scritto e orale"],e:"{Lesen}, {Hören}, {Schreiben}, {Sprechen}."}}
];
