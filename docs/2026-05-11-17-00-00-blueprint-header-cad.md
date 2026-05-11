# Project Design: Blueprint Header (CAD Style)

## Obiettivo
Implementare il nuovo sistema di navigazione "The Blueprint Header" (Opzione A), trasformando l'interfaccia in un progetto tecnico interattivo coerente con il background Tech Grid.

## Architettura Visiva
- **Header "Cartiglio":** Un header fisso in alto, estremamente sottile, che richiama le legende dei disegni architettonici.
- **Nomenclatura Tecnica:** I link saranno etichettati con prefissi modulari (es. `MOD_01 // HOME`, `MOD_02 // WORK`).
- **Linee di Costruzione:** Implementazione di linee SVG animate che "disegnano" i collegamenti tra gli elementi della UI.
- **Tipografia:** Uso esclusivo di `Geist Mono` per tutti gli elementi di navigazione e i metadati tecnici.

## Modifiche
1.  **Rimozione `CommandBar.tsx`:** Il menu flottante viene eliminato a favore del nuovo header integrato.
2.  **Rifacimento `TopBar.tsx`:** Trasformazione nel "Blueprint Header" con layout a cartiglio.
3.  **Aggiornamento `MainLayout.tsx`:** Pulizia dei componenti rimossi.

## Validazione
- Verifica della leggibilità dei font monospaziati a diverse risoluzioni.
- Controllo delle animazioni SVG per garantire fluidità senza impattare sulle performance.
