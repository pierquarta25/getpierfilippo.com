# Project Design: Fix Navigazione Back to Work

## Obiettivo
Correggere il link del pulsante "Back to Work" nelle pagine di dettaglio del progetto per assicurare che l'utente torni alla lista completa dei progetti.

## Contesto
Attualmente il pulsante utilizzava un'ancora (`/#work`) che in alcune configurazioni di routing portava alla Home senza scorrere alla sezione corretta. Poiché il progetto ha una pagina dedicata `/work`, è preferibile utilizzare quella.

## Implementazione Scelta
**Aggiornamento Link Statico**: Modifica del componente `ProjectLayout.tsx` per puntare direttamente alla rotta `/work`.

## Modifiche
1. **src/components/sharlee/ProjectLayout.tsx**:
   - Sostituzione di `href="/#work"` con `href="/work"`.

## Risultato Finale
Il pulsante "Back to Work" ora reindirizza correttamente alla pagina `/work`, migliorando la fluidità della navigazione tra i progetti.
