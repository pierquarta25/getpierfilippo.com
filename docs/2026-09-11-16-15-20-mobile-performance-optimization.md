# Ottimizzazione Performance Mobile

## Analisi del Problema
Dai risultati di Lighthouse allegati, le prestazioni su mobile mostrano un calo dovuto principalmente a due metriche:
- **LCP (Largest Contentful Paint)**: 2.6s
- **Speed Index**: 3.6s

Questi valori indicano che il rendering dell'elemento più grande visibile (l'intestazione `<h1>` della HeroSection) impiega troppo tempo per stabilizzarsi, e il rendering visivo complessivo è ritardato. I colpevoli più probabili sono l'importazione dinamica dei componenti, il blocco del thread principale per script di animazione, e il re-render causato dall'idratazione dello stato della lingua (da `EN` di default del server a `IT` o viceversa sul client tramite `localStorage`).

---

## Tripla Opzione (Scegliere una o più soluzioni)

### Opzione 1: Ottimizzazione del rendering condizionale (JavaScript Chunking)
Attualmente in `TopBar.tsx`, il componente `OverlayMenu` viene importato dinamicamente (con `next/dynamic`) ma è renderizzato in modo incondizionato nel JSX. Questo forza il download e l'analisi del chunk JS durante il caricamento iniziale. 
**Proposta**: Renderizzare `<OverlayMenu />` solo quando la variabile di stato `isMenuOpen` è `true`.
- *Vantaggi*: Semplice, rimuove immediatamente peso dal JavaScript iniziale per i dispositivi mobili.

### Opzione 2: Ritardare l'animazione di Typing (Alleggerimento Main Thread)
Il componente `TypingText.tsx` utilizza un loop `setTimeout` per modificare il DOM ogni 50ms subito dopo l'inizio del caricamento (500ms). Su un processore mobile questo ruba risorse al rendering della pagina iniziale.
**Proposta**: Ritardare l'avvio dell'animazione (es. 2000ms) affinché la pagina completi l'LCP senza interruzioni dal thread principale.
- *Vantaggi*: Assicura che la metrica Speed Index migliori lasciando "respirare" il dispositivo durante il primo render.

### Opzione 3: Evitare il Re-render LCP da Idratazione (La più raccomandata)
In `LanguageContext.tsx`, l'applicazione effettua il boot in `EN` e poi usa un `useEffect` per leggere il `localStorage` e impostare la lingua. Questo causa un cambio del nodo testuale dell'`<h1>` a caricamento iniziato, che Lighthouse considera come un nuovo LCP tardivo.
**Proposta**: Modificare la logica di inizializzazione affinché non venga chiamato un `setLanguage` se la lingua del server e del client coincidono (evitando render a vuoto) e mostrare preventivamente un testo unificato o ritardare il render finché il font non è stabile.
- *Vantaggi*: Affronta direttamente il problema architetturale del React Context che causa re-render indesiderati post-idratazione.

---

## Prossimi Passaggi
In attesa di conferma da parte dell'utente per implementare una o più delle opzioni proposte.
