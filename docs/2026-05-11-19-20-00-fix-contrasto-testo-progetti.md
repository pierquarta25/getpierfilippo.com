# Project Design: Fix Contrasto Testo in Dark Mode (Project Page)

## Obiettivo
Garantire che tutto il testo nelle pagine di dettaglio del progetto sia perfettamente leggibile sia in modalità chiara che scura.

## Contesto
Dopo aver corretto lo stack tecnologico, l'utente segnala che anche altre parti testuali della pagina soffrono di scarso contrasto in Dark Mode.

## Implementazione Scelta
**Opzione 1: Testo Esplicito (Direct Fix)**
Forzatura del colore `text-black dark:text-white` su tutti gli elementi testuali principali (titoli e valori) per assicurare che non ereditino colori errati o rimangano scuri su sfondo scuro.

## Modifiche
1. **src/components/sharlee/ProjectLayout.tsx**:
   - Aggiunta di `text-black dark:text-white` a:
     - Titolo principale (`h1`)
     - Titoli delle sezioni (`h2`, `h3`)
     - Valori nel sidebar (Status, Role, Year)
     - Descrizione del progetto
2. **src/app/work/getpierfilippo-com/page.tsx**:
   - Aggiornamento dei titoli e paragrafi personalizzati con classi di contrasto esplicite.

## Risultato Finale
Tutti i testi della pagina progetto sono ora forzati ai colori corretti (bianco in dark mode, nero in light mode), eliminando ogni problema di contrasto segnalato.
