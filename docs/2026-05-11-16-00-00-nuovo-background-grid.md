# Project Design: Nuovo Background Tech Grid

## Obiettivo
Implementare il nuovo background "Tech Grid & Precision" (Opzione 1) per riflettere il rigore metodologico che unisce lo sviluppo software e le scienze motorie.

## Modifiche
- Modifica di `src/components/sharlee/Background.tsx`.
- Rimozione dei gradienti sfocati colorati.
- Inserimento di una griglia CSS (grid pattern) con linee sottili.
- Aggiunta di un overlay con "noise" (grana) per profondità.
- Inserimento di elementi decorativi minimali (coordinate o metriche) per un look "engineering".

## File Interessati
- `src/components/sharlee/Background.tsx`
- `src/app/globals.css` (per eventuali utility della griglia)

## Validazione
- Verifica della leggibilità del testo sopra la nuova griglia.
- Controllo del contrasto in modalità dark e light.
