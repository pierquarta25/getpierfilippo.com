# Project Design: Fix Contrasto Badge (Stack Tecnologico) in Dark Mode

## Obiettivo
Rendere visibile lo stack tecnologico (i badge) nella pagina di dettaglio del progetto quando è attivo il tema scuro (Dark Mode).

## Contesto
Attualmente i badge utilizzano la variante `outline` che dovrebbe seguire il colore del testo (`text-foreground`). Tuttavia, l'utente segnala che in Dark Mode il testo dei badge diventa nero, rendendoli invisibili sullo sfondo scuro.

## Implementazione Scelta
**Opzione 1: Colori Espliciti nel Layout (Direct Fix)**
Modificare `src/components/sharlee/ProjectLayout.tsx` per passare classi di colore esplicite ai badge.

## Modifiche
1. **src/components/sharlee/ProjectLayout.tsx**:
   - Aggiunta di `text-black dark:text-white` alla `className` del componente `Badge`.

## Risultato Finale
Il problema di contrasto è stato risolto forzando il colore del testo dei badge: nero in modalità chiara e bianco in modalità scura. Lo stack tecnologico è ora perfettamente leggibile in ogni condizione di tema.
