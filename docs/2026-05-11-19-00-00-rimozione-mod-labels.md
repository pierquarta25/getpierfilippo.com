# Project Design: Rimozione Etichette MOD_XX (TopBar)

## Obiettivo
Rimuovere le etichette "MOD_01", "MOD_02", etc. dalla `TopBar` per semplificare l'interfaccia visiva.

## Contesto
La `TopBar` utilizza uno stile "Blueprint/CAD" dove ogni elemento di navigazione è preceduto da una stringa tecnica (es. `MOD_01`). L'utente ha richiesto la rimozione totale di queste scritte.

## Implementazione Scelta
**Rimozione Totale (Clean Style)**: Eliminazione completa del tag `<span>` che contiene `MOD_{item.id}`.

## Modifiche
1. **src/components/sharlee/TopBar.tsx**:
   - Rimozione delle linee 53-55.
   - Il testo del menu rimarrà centrato verticalmente grazie alla classe `justify-center` già presente nel contenitore.

## Risultato Finale
Le etichette "MOD_01", "MOD_02", etc. sono state rimosse con successo. Il menu ora presenta solo i nomi delle sezioni (HOME, WORK, etc.) mantenendo l'allineamento verticale centrato e lo stile tipografico monospaziato. L'effetto visivo è più pulito e focalizzato sui contenuti.
