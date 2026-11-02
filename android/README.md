# Milepost per Android

App leggera che apre Milepost (il sito su GitHub Pages) a schermo intero, senza barra del browser.
I contenuti arrivano dal sito: ogni aggiornamento del sito arriva anche nell'app, senza nuovo APK.
Dopo il primo avvio con internet funziona offline (service worker del sito).

## Scaricare l'APK (beta)
Lo costruisce GitHub Actions (`.github/workflows/android.yml`) a ogni modifica di `android/`. Si distribuisce solo la
variante **beta**: alla prima apertura chiede un codice invito personale, che vale su un solo telefono
(codici e istruzioni in `supabase/beta.sql` e `supabase/README.md`). La variante `open` (senza codice) resta nel codice.
Download: https://github.com/6ydjtwnzth-jpg/milepost-app/releases/download/android/milepost-beta.apk

Sul telefono: apri il link, scarica, tocca il file e consenti «Installa app sconosciute» per il browser.

## Limiti di questa versione di prova
- È firmata con una chiave di prova (`app/milepost-test.jks`, password nel codice): va bene per installarla a mano,
  **non** per il Play Store. Per il Play Store serve una chiave di caricamento segreta (secret del repository) e un
  `.aab` al posto dell'`.apk`.
- La sintesi vocale del browser non c'è nella WebView di Android: il corso di cinese usa la voce di riserva
  (file audio Kokoro), come sui dispositivi senza voce cinese.
