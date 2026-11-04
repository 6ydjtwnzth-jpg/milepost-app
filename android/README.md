# Milepost per Android

App leggera che apre Milepost (il sito su GitHub Pages) a schermo intero, senza barra del browser.
I contenuti arrivano dal sito: ogni aggiornamento del sito arriva anche nell'app, senza nuovo APK.
Dopo il primo avvio con internet funziona offline (service worker del sito).

## Scaricare l'APK (senza codice)
Variante `open` (`app.milepost`, nome «Milepost»): tutti i corsi, nessun codice di accesso. La costruisce lo stesso
workflow insieme alla beta. Download: https://github.com/6ydjtwnzth-jpg/milepost-app/releases/download/android-app/milepost.apk

## Scaricare l'APK (beta)
Lo costruisce GitHub Actions (`.github/workflows/android.yml`) a ogni modifica di `android/`. Si distribuisce anche la
variante **beta**: alla prima apertura chiede un codice invito personale, che vale su un solo telefono
(codici e istruzioni in `supabase/beta.sql` e `supabase/README.md`).
Download: https://github.com/6ydjtwnzth-jpg/milepost-app/releases/download/android/milepost-beta.apk

Sul telefono: apri il link, scarica, tocca il file e consenti «Installa app sconosciute» per il browser.

## App con il solo corso di francese (beta)
Variante `francese` (`app.milepost.francese`, nome «Milepost Francese»): un'app a parte, che si installa accanto alle altre,
con dentro **solo** il corso di francese per italiani. Lezioni, audio, font ed esami (DELF A2 e B1) sono nell'APK: non apre
il sito, non scarica niente e funziona senza connessione fin dal primo avvio. Niente account e niente codice invito.
- Il sito da mettere nell'app lo prepara `python3 tools/standalone.py fr-it android/app/src/francese/assets/site`
  partendo da `docs/` (prima `python3 build.py`): elenco corsi ridotto al francese (`CATALOG.only`), font da
  `standalone/fonts`, account e service worker spenti. La cartella generata non va nel repository.
- Nell'app le pagine si aprono all'indirizzo privato `https://appassets.androidplatform.net/`, servito dagli asset;
  ogni altro indirizzo è bloccato.
- La costruisce `.github/workflows/android-francese.yml` (a ogni modifica del corso di francese o dell'app).
  Download: https://github.com/6ydjtwnzth-jpg/milepost-app/releases/download/android-francese/milepost-francese-beta.apk
- Gli aggiornamenti dei contenuti arrivano solo con un nuovo APK.

## Limiti di questa versione di prova
- È firmata con una chiave di prova (`app/milepost-test.jks`, password nel codice): va bene per installarla a mano,
  **non** per il Play Store. Per il Play Store serve una chiave di caricamento segreta (secret del repository) e un
  `.aab` al posto dell'`.apk`.
- La sintesi vocale del browser non c'è nella WebView di Android: il corso di cinese usa la voce di riserva
  (file audio Kokoro), come sui dispositivi senza voce cinese.
