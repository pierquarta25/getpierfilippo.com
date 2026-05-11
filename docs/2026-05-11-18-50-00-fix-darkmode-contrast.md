# Progetto: Fix Contrasto e Visibilità Dark Mode

**Data:** 2026-05-11
**Stato:** Completato
**Autore:** Gemini CLI

## Analisi Problema
L'utente ha segnalato che in modalità scura (Dark Mode) molti elementi (testi, bottoni, footer) diventano invisibili o hanno scarso contrasto. 
L'indagine ha rivelato che:
1. **Mancanza di Variabili Dark:** Il file `globals.css` definiva le variabili colore solo per il tema light.
2. **Incoerenza tra Tailwind e Variabili CSS:** Alcuni componenti usavano classi standard che non si adattavano al tema scuro.

## Soluzione Implementata
È stato eseguito un intervento a due livelli per garantire la massima leggibilità:
- **Livello Globale (globals.css):** Aggiunto il blocco `.dark` con variabili OKLCH calibrate per un contrasto elevato mantenendo l'estetica "CAD".
- **Livello Componente:** Applicate classi utility esplicite (`text-black dark:text-white`, `text-black/40 dark:text-white/40`) ai componenti critici:
    - **TopBar:** Sistemato il tasto lingua e i bordi.
    - **Footer:** Aumentata l'opacità dei testi e delle icone social.
    - **OverlayMenu:** Garantita visibilità totale dei link e del tasto [CLOSE].
    - **Work & Contact Section:** Uniformati i titoli e i separatori.
    - **ProjectLayout:** Revisionati i dettagli dei progetti per il tema scuro.

## Risultati
- Tutti gli elementi dell'interfaccia sono ora perfettamente visibili in Dark Mode.
- L'esperienza utente è coerente e accessibile in entrambi i temi.
- Il design mantiene il rigore tecnico richiesto.

---
*Documentazione chiusa il 2026-05-11.*
