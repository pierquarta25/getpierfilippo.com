# Presto.it - Piattaforma di Compravendita Moderna

<p align="center">
    <strong>Semplice, Veloce, Presto.</strong>
</p>

## Introduzione
**Presto.it** è una piattaforma web di annunci di compravendita progettata per offrire un'esperienza utente fluida, sicura e multilingua. Il progetto nasce con l'obiettivo di coniugare un design minimalista e moderno con potenti funzionalità di backend, garantendo al contempo la massima sicurezza dei contenuti grazie all'integrazione di servizi avanzati di intelligenza artificiale.

---

## Caratteristiche Principali

### 1. Sistema di Revisione e AI (Google Vision)
La sicurezza è il cuore pulsante di Presto.it. Ogni immagine caricata viene processata asincronamente tramite **Google Vision API**:
*   **SafeSearch Detection**: Rilevamento automatico di contenuti inappropriati (adulti, violenza, satira, medico, piccante).
*   **Face Detection**: Identificazione dei volti nelle immagini con applicazione automatica di un watermark protettivo per garantire la privacy.
*   **Image Labeling**: Generazione automatica di tag descrittivi per migliorare la categorizzazione e la ricerca.

### 2. Motore di Ricerca Avanzato
Grazie all'integrazione con **Laravel Scout**, la piattaforma offre una ricerca full-text rapida e precisa, permettendo agli utenti di trovare esattamente ciò che desiderano in frazioni di secondo.

### 3. Esperienza Multilingua
Il sito supporta nativamente tre lingue (**Italiano, Inglese e Spagnolo**). Ogni elemento, dalla navbar ai messaggi di sistema, è localizzato per accogliere un pubblico internazionale.

### 4. UI/UX Design Minimalista
L'interfaccia è stata curata per essere pulita ed elegante:
*   **Menu Centrale Dinamico**: Un sistema di navigazione a comparsa che sfrutta effetti di sfocatura (blur) sul resto del sito per focalizzare l'attenzione dell'utente.
*   **Design Responsive**: Una resa perfetta su ogni dispositivo, dal desktop allo smartphone.
*   **Interattività**: Funzionalità moderne come la copia rapida del link negli appunti e l'apertura automatica del client email per il contatto diretto con i venditori.

---

## Stack Tecnologico
*   **Framework**: [Laravel 11](https://laravel.com)
*   **Frontend**: [Livewire](https://livewire.laravel.com) (per componenti reattivi)
*   **Styling**: [Bootstrap 5](https://getbootstrap.com) con personalizzazioni CSS3
*   **AI Integration**: [Google Cloud Vision](https://cloud.google.com/vision)
*   **Asset Management**: [Vite](https://vitejs.dev)
*   **Database Search**: Laravel Scout

---

## Architettura Tecnica (Highlights)
*   **Job & Queues**: L'elaborazione delle immagini (ridimensionamento, analisi AI, oscuramento volti) avviene in background tramite code, garantendo che il sito rimanga veloce e reattivo per l'utente finale.
*   **Model Observer**: Gestione pulita del ciclo di vita dei dati.
*   **Custom Middlewares**: Controllo granulare degli accessi (es. protezione dell'area revisore).
*   **Componenti Blade**: Codice modulare, manutenibile e scalabile.

---

## Installazione e Configurazione

1. **Clona il repository**:
   ```bash
   git clone <url-repository>
   ```
2. **Installa le dipendenze**:
   ```bash
   composer install
   npm install && npm run dev
   ```
3. **Configura l'ambiente**:
   * Copia `.env.example` in `.env`.
   * Configura il database e le chiavi Google Cloud Vision.
   * Carica il file `google_credential.json` nella root del progetto.
4. **Esegui le migrazioni e i seeder**:
   ```bash
   php artisan migrate --seed
   ```
5. **Avvia la gestione delle code**:
   ```bash
   php artisan queue:work
   ```

---

## Visione
Presto.it non è solo un portale di annunci, ma una dimostrazione di come la potenza di Laravel possa integrarsi con le moderne tecnologie di intelligenza artificiale per creare prodotti web professionali, sicuri e orientati all'utente.

---
*Sviluppato da Pierfilippo Quartarella.*