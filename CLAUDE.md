# Milepost — app di corsi di lingua

App mobile-first (oggi PWA statica, domani app iOS/Android dallo stesso codice) che riunisce i corsi di lingua.
Ogni corso è una coppia "lingua da imparare / lingua di chi studia" (es. `ja-it` = giapponese per italiani).

## Capisaldi non negoziabili
Leggi `PRINCIPI.md` prima di ogni modifica. In breve:
1. Ti porto all'esame, in modo concreto (simulazioni nel formato reale, punteggio onesto; mai "ufficiale").
2. Spiegato per chi studia (errori tipici della sua lingua madre, niente corsi generici tradotti).
3. Costa una frazione di una scuola.
4. Paghi una volta, resta tuo.
Design: bello e mai invadente (niente vite, cuori, lucchetti, ansia da streak). La cultura ha una scheda tutta sua: è un punto di forza, va sempre curata e messa in evidenza. Non promettere funzioni che non esistono ancora:
ciò che manca si mostra come "In arrivo".

## Struttura
- `shell/`: l'app. Vanilla JS, nessuna dipendenza.
  - `index.html` + `app.js`: ingresso (lingua → corso → 3 domande → piano), poi rimanda al corso attivo.
  - `course-app.js/.css`: l'interfaccia dentro ogni corso, con 5 schede (Oggi, Corso, Esame, Cultura, Strumenti)
    e la pagina lezione. Niente lucchetti né stelle: le lezioni sono consigliate, mai bloccate. Il build la inserisce
    nella stessa closure del motore del corso, così riusa tappe, quiz e audio.
  - `plan.js`: catalogo, progressi e piano onesto, condivisi da ingresso e corsi.
  - `courses.json`: metadati dei corsi (esami, ore tipiche, livelli di partenza). Le unità vengono da `courses/<id>/src/course.json`.
    `"hidden": true` nasconde dall'elenco un corso ancora in lavorazione (le sue pagine esistono, ma non si può scegliere).
  - `i18n.js`: testi dell'interfaccia (`it`, `es`, `zh`). L'interfaccia parla sempre la lingua di chi studia.
- `courses/<id>/`: sorgenti di ogni corso (contenuti, motore, `build.py`).
  - `courses/<id>/src/exam/*.json`: simulazioni d'esame nel formato reale (JLPT N5 per ja-it, HSK 1 per zh-it, CILS A2 per
    it-zh e it-es, DELF A2 per fr-it). Ogni file porta le sue regole in `scheme`: gruppi di punteggio con massimo e minimo, soglia, lingua del foglio,
    quante volte si ascolta ogni registrazione, etichette di parti e opzioni, immagini (`img`, `oi`, `pics`: icone dello
    sprite del corso), esercizi di scritto/orale non valutati (`practice`). Senza `scheme` valgono le regole del JLPT.
    Le opzioni non vengono mescolate dall'app: la risposta giusta va distribuita tra le posizioni già nel file.
    Nella revisione le trascrizioni non sono parole toccabili (come sul foglio d'esame).
    L'audio d'ascolto è in `docs/c/<id>/audio/exam/<esame>-<parte>-<n>.mp3` (voci Kokoro: F, M, narratore; ogni frase
    verificata con il riconoscimento vocale). Punteggio stimato: 120 × giuste/totale (lingua+lettura), 60 × (ascolto).
  - `courses/zh-it/`: cinese per italiani. Il cinese nei dati è scritto a parole con il pinyin tra parentesi quadre,
    una sillaba per carattere separata da trattini: `我[wǒ] 是[shì] 意大利人[Yì-dà-lì-rén] 。` (`src/js/zh.js` ne ricava rubino
    colorato per tono, pinyin e controllo delle risposte). Voce: quella cinese del dispositivo (sintesi vocale del browser,
    velocità 0,85, persona B dei dialoghi con tono più acuto; mai le voci «Eloquence»/giocattolo di iOS come Eddy o Flo: si preferiscono le voci Premium/Ottimizzate, altrimenti la voce cinese di sistema; l'utente può sceglierla in Impostazioni), come nel vecchio «Primo libro di cinese»: è una scelta
    dell'utente, non cambiarla. I file in `docs/c/zh-it/audio/` sono solo la riserva per i dispositivi senza voce cinese:
    una sola voce femminile (Kokoro v1.1-zh, zf_002), generata dal pinyin del corso con il cambio di tono 3-3 e
    verificata con il riconoscimento vocale (SenseVoice) e la curva d'intonazione.
  - `courses/fr-it/`: francese per italiani. Motore preso da it-zh (lingua in alfabeto latino): `data-it`, `.it`, `.it-l`
    indicano la lingua che si studia (qui il francese), `data-zh` la lingua di chi studia (qui l'italiano). Nei testi misti
    (domande, spiegazioni, cultura, pagine delle lezioni) il francese va tra parentesi graffe: «Si dice {je suis}.»; il build
    lo rende toccabile. Nelle opzioni degli esercizi classici un'opzione in francese è tutta tra graffe: `"{Je suis}"`.
    Coniugatore in `src/js/app.js` (présent, passé composé, imparfait, futur, conditionnel). Voce: Kokoro `ff_siwis`
    (l'unica voce francese di Kokoro); nella simulazione DELF la voce maschile è la stessa abbassata di tono.
    `window.FRSAYS()` elenca tutto ciò che il corso può pronunciare, per generare e controllare l'audio.
  - `courses/it-es/`: italiano per ispanofoni (interfaccia in spagnolo). Stesso motore di fr-it: `data-it` è l'italiano,
    `data-zh` lo spagnolo; nei testi misti l'italiano va tra graffe. Spiegazioni centrate sugli errori tipici di chi parla
    spagnolo (doppie, `essere`/`stare`, articoli con i possessivi, `gli`/`le`, falsi amici). Le frasi italiane riprendono
    quando possibile quelle di it-zh, così l'audio (Sara, Kokoro `if_sara`) si riusa: i file hanno lo stesso nome.
- Racconti (scheda Cultura): `courses/<id>/src/reads.js` (`READS`: titolo, lezione consigliata `after`, frasi [testo, traduzione],
  parole nuove `gloss`, domande con risposta `a`). Solo fiabe tradizionali o testi nostri (niente opere protette).
  `node tools/reads_check.js <id>` elenca le parole non ancora viste nel corso fino a `after` e senza nota: deve restare vuoto.
  Prima di pubblicarli per un cliente, ogni racconto va riletto da un madrelingua.
- Esercizi Milepost (`shell/exercises.js`, uguali in tutti i corsi): ricomponi la frase (`ord`, con tessere-trappola `x` e la variante
  «ascolta e ricomponi» `ear`), completa scegliendo (`gap`), trova l'errore tipico di chi parla la lingua di partenza (`err`),
  costruisci il carattere (`chr`, cinese e giapponese), rispondi nel dialogo (`rep`), riconosci il tono (`tone`, cinese).
  Contenuti per lezione in `courses/<id>/src/drills.js`; `node tools/drills_check.js <id>` controlla forma, tessere e (cinese)
  i cambi di tono di 不 e 一. Nelle spiegazioni il giapponese va scritto a parole separate da spazi, come nel resto del corso.
- Account e salvataggio dei progressi: `shell/sync.js` (nessuna libreria: parla con Supabase via REST), configurazione in
  `shell/sync-config.js` (vuota = niente account in app), schema e regole in `supabase/schema.sql`, guida in `supabase/README.md`.
  Accesso con codice di 6 cifre via email. Si sincronizzano le chiavi `milepost-…` e quelle dei corsi (storageKey…), tranne
  ciò che vale solo sul dispositivo (`…-offline`, sessione). In caso di conflitto i progressi si uniscono, non si perdono.
  Una chiave nuova di localStorage va chiamata con uno di questi prefissi, altrimenti non viaggia tra i dispositivi.
- Apertura: `shell/splash.css` + `shell/splash.html` (animazione «Germoglio» del logo), inserite dal build nella shell e in ogni
  corso. Parte una volta per avvio (sessionStorage), poi le pagine mostrano il logo fermo finché non hanno disegnato
  (`mpSplashReady()`). Su iPhone/iPad l'avvio da Home mostra le immagini `docs/icons/launch/` (color carta, chiaro e scuro),
  generate dal build dai token `--paper`.
- `docs/`: sito generato (GitHub Pages, cartella `/docs`). L'audio dei corsi vive direttamente in `docs/c/<id>/audio/`.
- Offline: `shell/sw.js` (il build ci scrive versione ed elenco dei corsi) salva all'installazione la shell e tutte le pagine dei
  corsi; l'audio si salva all'ascolto o tutto insieme da Impostazioni → Senza connessione (elenco in `docs/c/<id>/audio/index.json`).
  Il service worker si registra sia dalla shell sia dalle pagine dei corsi.

## Comandi
- `python3 build.py` — costruisce tutto in `docs/` (`python3 build.py ja-it` solo un corso, `python3 build.py none` solo la shell).
- Anteprima: `cd docs && python3 -m http.server 8765`.

## Regole
- Ogni nuova lingua (o coppia di lingue) arriva con la sua simulazione d'esame nel formato reale dell'esame più adatto
  (JLPT, HSK, CILS/CELI, DELE, DELF…), insieme al corso: non si pubblica un corso senza la sua prova d'esame.
- Ogni parola cliccabile deve avere un significato (tocco e passaggio del mouse). Verifica: apri un corso con `?audit=1`
  e chiama `MPAUDIT()` in console (deve restituire `miss: []`). Significati aggiunti: `courses/<id>/src/js/dict2.js`.
- La pagina lezione mostra sempre: introduzione, "alla fine saprai", tappe, regole leggibili sul posto, parole.
- Il piano è onesto: ore tipiche di studio per livello/esame (ripasso incluso), mai solo il tempo delle lezioni.
- Progressi: li possiede la pagina del corso (`<storageKey>-path` in localStorage); la shell li legge e scrive solo `skip` e `goal`.
- Storage sempre dietro try/catch. Animazioni rispettano `prefers-reduced-motion`. Target di tocco ≥ 44 px. Tema chiaro e scuro.
- Colori e misure dai token in `shell/app.css` (`:root`). Stile "Vivace": colori pieni, forme morbide, Bricolage Grotesque.
- Ogni modifica visiva: screenshot 390×844, chiaro e scuro, interfaccia italiana e cinese.
- Testi e documenti in italiano; codice, commenti e commit in inglese.
