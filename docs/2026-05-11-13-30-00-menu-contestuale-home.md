# Proposta Implementazione Menu Contestuale (Home Dinamica)

Data: 2026-05-11
Stato: Completato

## Obiettivo
Rendere il menu di navigazione (`OverlayMenu`) consapevole del contesto. Il link "Home" deve apparire solo quando l'utente si trova in una pagina diversa dalla Home Page (es. About, Work, Contact).

## Analisi Tecnica
- Utilizzo di `usePathname` da `next/navigation` per identificare la pagina corrente.
- Aggiornamento di `LanguageContext.tsx` per includere la traduzione di "Home".
- Modifica di `OverlayMenu.tsx` per gestire la lista dei link in modo dinamico.

## Opzioni Proposte

### Opzione 1: Logica Condizionale Semplice (Consigliata per semplicità) - SELEZIONATA
Modifica del componente `OverlayMenu` per aggiungere manualmente il link "Home" in cima alla lista solo se il percorso corrente non è `/`.
- **Pro:** Codice minimo, facile da leggere (junior-friendly).
- **Contro:** Leggermente meno scalabile se il numero di pagine cresce molto.

### Opzione 2: Filtraggio Lista Completa
Definizione di un array contenente tutti i link (inclusa la Home) e filtraggio dinamico basato su `item.href !== pathname`.
- **Pro:** Molto pulito e "ordinato". Gestisce automaticamente l'esclusione di qualsiasi pagina in cui ci si trova (non solo la Home).
- **Contro:** Potrebbe nascondere link che l'utente vorrebbe comunque vedere per "refreshare" la pagina (anche se in una SPA è meno comune).

### Opzione 3: Configurazione tramite LanguageContext
Spostamento della definizione dei link nel `LanguageContext` in modo che le etichette e i percorsi siano centralizzati con le traduzioni.
- **Pro:** Massima centralizzazione.
- **Contro:** Aggiunge complessità al Context che dovrebbe occuparsi solo di traduzioni.

## Lavoro Eseguito
1.  **Traduzioni:** Aggiunta la chiave `nav.home` in `src/lib/LanguageContext.tsx` per entrambe le lingue (IT/EN).
2.  **Componente OverlayMenu:**
    - Importato `usePathname` da `next/navigation`.
    - Implementata logica `unshift` per aggiungere il link "Home" solo quando `pathname !== '/'`.
    - Aggiunto `onClick={onClose}` ai link per chiudere il menu dopo il click.
3.  **Verifica:** Il menu ora mostra "Home" solo se l'utente naviga in `/work`, `/about` o `/contact`.

## Modifiche Effettive
- `src/lib/LanguageContext.tsx`
- `src/components/sharlee/OverlayMenu.tsx`
