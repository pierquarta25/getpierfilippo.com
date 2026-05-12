# Progetto: Pagine di Errore Custom (404 & 403)

## Descrizione
Implementazione di pagine di errore personalizzate per migliorare l'esperienza utente e mantenere la coerenza visiva del portfolio anche in caso di link non validi o accessi negati.

## Lavoro Svolto

1. **Internazionalizzazione:**
   - Aggiunte chiavi di traduzione in `src/lib/LanguageContext.tsx` per i titoli, sottotitoli e descrizioni delle pagine 404 e 403 (sia in Italiano che in Inglese).

2. **Struttura Pagine:**
   - Creata la cartella `src/app/errors/` con le sottocartelle `404` e `403`.
   - Implementata `src/app/errors/404/page.tsx`: Pagina dedicata all'errore "Not Found".
   - Implementata `src/app/errors/403/page.tsx`: Pagina dedicata all'errore "Forbidden".
   - Implementata `src/app/not-found.tsx`: Pagina di sistema Next.js che gestisce automaticamente tutti i link rotti nel sito, utilizzando lo stile custom 404.

3. **Design & Estetica:**
   - **Tipografia:** Numeri di errore giganti in background con opacità ridotta per un effetto "blueprint/CAD".
   - **Elementi Grafici:** Linee di costruzione (CAD lines) che si incrociano al centro della pagina.
   - **Navigazione:** Pulsante "Torna alla Home" con animazione hover e stile coerente con il resto dell'applicazione.
   - **Responsive:** Layout ottimizzato per dispositivi mobile e desktop.

## Risultato
Il sito ora gestisce in modo elegante gli errori di navigazione, guidando l'utente verso la Home e rinforzando l'identità visiva "premium" e tecnica del portfolio.
