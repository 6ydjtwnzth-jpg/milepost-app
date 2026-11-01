# Milepost per Android

App leggera che apre Milepost (il sito su GitHub Pages) a schermo intero, senza barra del browser.
I contenuti arrivano dal sito: ogni aggiornamento del sito arriva anche nell'app, senza nuovo APK.
Dopo il primo avvio con internet funziona offline (service worker del sito).

## Scaricare l'APK
Lo costruisce GitHub Actions (`.github/workflows/android.yml`) a ogni modifica di `android/`.
Download: https://github.com/6ydjtwnzth-jpg/milepost-app/releases/download/android/milepost.apk

Sul telefono: apri il link, scarica, tocca il file e consenti «Installa app sconosciute» per il browser.

## Limiti di questa versione di prova
- È firmata con una chiave di prova (`app/milepost-test.jks`, password nel codice): va bene per installarla a mano,
  **non** per il Play Store. Per il Play Store serve una chiave di caricamento segreta (secret del repository) e un
  `.aab` al posto dell'`.apk`.
- La sintesi vocale del browser non c'è nella WebView di Android: il corso di cinese usa la voce di riserva
  (file audio Kokoro), come sui dispositivi senza voce cinese.
