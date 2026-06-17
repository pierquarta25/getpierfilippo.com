# 🚀 GT Fleet 365 - Configuratore Flotta Dinamico

Questo progetto è un'applicazione web "Single Page" sviluppata durante il tirocinio presso **MacNil** a Gravina in Puglia. L'obiettivo è digitalizzare il processo di configurazione flotta per i nuovi lead e i clienti esistenti, integrando i dati direttamente su **HubSpot**.

---

## 🛠️ Architettura Tecnica

Il progetto segue il pattern **Decoupled Frontend/Backend** per garantire velocità e manutenibilità:

### 🔹 Frontend (React + Vite)
- **Stack:** React 18 con Vite per un build time quasi istantaneo.
- **State Management:** Gestione granulare dello stato per un form multi-step fluido.
- **Persistence # Presto.it - Piattaforma di Compravendita Moderna

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
*Sviluppato da Pierfilippo Quartarella.*(LocalStorage):** Implementata logica di salvataggio automatico: se l'utente ricarica la pagina o perde la connessione, i dati inseriti non vanno perduti.
- **Validazione Avanzata:** 
    - Controllo in tempo reale dei campi obbligatori.
    - Validazione dell'email tramite espressioni regolari (Regex).
    - Feedback visivo immediato (bordi rossi e messaggi di errore) che sostituisce i vecchi alert, migliorando la fluidità.

### 🔹 Backend (Laravel 11)
- **HubSpot Integration:** Sviluppo di un `HubSpotService` dedicato per la creazione automatica di Lead e Deal tramite API REST.
- **Server-Side Validation:** Validazione robusta dei dati in ingresso per garantire la sicurezza del database e delle API esterne.
- **RESTful API:** Endpoint strutturati per la comunicazione asincrona con il frontend tramite Axios.

---

## 🎨 UI/UX & Design System

Il design è stato curato per riflettere l'identità di marca **GT Fleet 365**:

- **Layout Dinamico:** Header con logo posizionato a sinistra e stepper di avanzamento a destra per sfruttare tutto lo spazio orizzontale.
- **Tabella Mezzi Ottimizzata:**
    - Design pulito "Total White" con bordi definiti del colore istituzionale (`#0052BD`).
    - Immagini centrate e colonne a larghezza fissa per una lettura rapida.
    - Feedback di caricamento: Spinner animato sul pulsante di invio per evitare click multipli durante le chiamate API.
- **Responsività Totale (Mobile First):**
    - **Smartphone:** I campi del form si impilano verticalmente e le tabelle diventano scorrevoli orizzontalmente per evitare la rottura del layout.
    - **Tablet:** Griglie adattive che passano da 3 a 2 colonne per mantenere la leggibilità.

---

## 💡 Pillole per la Presentazione (Tips)
1.  **"Affidabilità del Dato":** "Ho implementato una doppia validazione (frontend e backend). Il frontend guida l'utente, il backend protegge il sistema."
2.  **"Resilienza dell'Interfaccia":** "Grazie al LocalStorage, mettiamo l'utente al centro: il suo lavoro è protetto anche in caso di refresh accidentale della pagina."
3.  **"Professionalità Visiva":** "Ho trasformato una tabella zebra standard in una griglia dal design moderno che richiama la navbar, curando ogni stato (hover, focus, caricamento)."

---

## 🚀 Setup e Installazione

1. **Clona il repo:** `git clone ...`
2. **Installazione dipendenze:** `composer install` e `npm install`
3. **Compilazione assets:** `npm run build`
4. **Avvio server:** `php artisan serve`

---
*Sviluppato da Pier @ Macnil, Gravina in Puglia.*
