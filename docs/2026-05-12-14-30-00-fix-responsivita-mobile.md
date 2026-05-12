# Project Document: Fix Responsività Mobile - Titolo e Carousel

## Obiettivo
Risolvere i problemi di visualizzazione su dispositivi mobile nelle pagine di dettaglio progetto:
1.  **Titolo:** Evitare che il titolo "getpierfilippo.com" si spezzi in modo errato (es. "om" a capo).
2.  **Carousel:** Garantire che il carosello sia visibile, funzionale e intuitivo su mobile.

## Problemi Analizzati
-   **Titolo:** L'utilizzo di `break-all` forza l'andata a capo in qualsiasi punto, rompendo le parole in modo non semantico. La dimensione del font su mobile (`3xl`) potrebbe essere ancora troppo grande per alcuni schermi.
-   **Carousel:** Su mobile, le frecce di navigazione sono nascoste (`hidden md:flex`). Senza indicatori visivi (dots), l'utente potrebbe non percepire la presenza di un carosello. Inoltre, la gestione delle altezze (`min-h-[300px]` e `max-h-[80vh]`) potrebbe creare spazi vuoti eccessivi o problemi di caricamento.

---

## Soluzione Implementata (Opzione 3)

### 1. Ottimizzazione Titolo (Smart Wrap)
-   **Logica:** Sostituito `break-all` con un sistema di `split('.')` che separa il nome dal dominio.
-   **Layout:** Utilizzato `flex flex-wrap gap-x-2` per il titolo. Questo permette al titolo di andare a capo in modo intelligente: se non c'è spazio, l'intero blocco ".com" si sposta sulla riga successiva, mantenendo la leggibilità.
-   **Estetica:** Il punto del dominio ha ora un'opacità ridotta (`opacity-50`) per un tocco di design CAD/Blueprint.

### 2. Gallery Verticale su Mobile
-   **Struttura:** Su mobile, il carosello è stato sostituito da una `flex-col` gallery. Ogni immagine è racchiusa in un contenitore con lo stesso stile (border, backdrop-blur) del desktop.
-   **Caricamento:** Implementato `loading="eager"` per la prima immagine e `lazy` per le successive, ottimizzando la velocità di caricamento percepita (LCP).
-   **Carousel Desktop:** Il carosello rimane attivo per i dispositivi desktop (`md:block`), con un'altezza minima aumentata a `400px` per una migliore visibilità.

---

## Stato Finale
- [x] Titolo "getpierfilippo.com" non si spezza più a metà parola.
- [x] Immagini carosello visibili su mobile come galleria verticale.
- [x] Prestazioni ottimizzate tramite lazy loading intelligente.
- [x] Design coerente tra mobile e desktop.
