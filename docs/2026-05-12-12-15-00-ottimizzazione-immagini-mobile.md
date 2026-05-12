# Project Document: Ottimizzazione Visualizzazione Immagini e Mobile UI

## Obiettivo
Migliorare la fruizione dei contenuti nelle pagine di dettaglio progetto, garantendo che le immagini siano visibili interamente (senza tagli) e ottimizzando l'esperienza su dispositivi mobile.

## Problemi Rilevati
1.  **Immagini tagliate:** L'uso di `object-cover` e un `aspect-ratio` fisso taglia parti importanti degli screenshot dei progetti.
2.  **Responsività mobile:** I padding e le dimensioni dei caratteri possono risultare eccessivi su schermi piccoli, rendendo la navigazione meno fluida.

---

## Proposta di Soluzione (Triple Option Mandate)

### Opzione 1: "Glass Contain" (Equilibrata & Estetica)
*   **Immagini:** Passaggio a `object-contain` per mostrare l'immagine intera. Dietro l'immagine viene aggiunto un duplicato sfocato (`blur-2xl`) con opacità ridotta per riempire il frame senza lasciare barre vuote.
*   **Aspect Ratio:** Dinamico. `aspect-video` (16:9) su mobile per dare più respiro verticale, `aspect-[21/9]` su desktop.
*   **Mobile UI:** Riduzione padding laterali a `px-4` su mobile. Titoli rimpiccioliti per evitare overflow.

### Opzione 2: "Vertical Gallery" (Content-First)
*   **Immagini:** Su mobile, il carousel viene sostituito da una galleria verticale dove le immagini mantengono il loro aspect ratio naturale. Su desktop, carousel con `object-contain` e sfondo neutro.
*   **Mobile UI:** Spostamento della sidebar "Project Details" subito sotto l'overview in un formato card più compatto.
*   **Spaziatura:** Riduzione dei gap tra le sezioni su mobile per diminuire lo scroll necessario.

### Opzione 3: "Adaptive & Lightbox" (Interattiva)
*   **Immagini:** Carousel con altezza adattiva (l'altezza del contenitore si adatta alla foto più alta). Aggiunta di un'icona "Zoom" per aprire l'immagine a tutto schermo.
*   **Mobile UI:** Refactor completo del layout mobile: il titolo della pagina diventa sticky o più piccolo, migliorando la gerarchia visiva.
*   **Dettagli:** La card dei dettagli diventa un "drawer" o una sezione a comparsa per risparmiare spazio verticale.

---

## Piano d'Azione
1.  Ottenere feedback dall'utente sulla scelta dell'opzione.
2.  Modificare `src/components/sharlee/ProjectLayout.tsx` applicando i cambiamenti di stile e struttura.
3.  Testare la responsività su diversi breakpoint (sm, md, lg).
