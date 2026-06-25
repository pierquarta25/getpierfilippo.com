# Progetto: Risoluzione Errore di Accessibilità sul Logo del Portfolio (Google Search Console)

**Data:** 2026-06-25
**Stato:** Completato
**Autore:** Antigravity

## Obiettivo
Risolvere la segnalazione di Google Search Console nella sezione "Accessibilità per gli agenti": **"L'albero di accessibilità non è ben formato - Links must have discernible text"**. 
L'errore è causato dal link (`<a>`) che avvolge il logo del sito nella barra superiore (`TopBar.tsx`), che attualmente non ha alcun testo o etichetta accessibile (perché contiene solo un'icona SVG senza descrizione).

---

## Implementazione Effettuata

È stata scelta ed implementata l'**Opzione 1: Aggiunta di `aria-label="Home"` direttamente al link di navigazione**.

### Dettagli delle azioni svolte:
1. Modificato il tag `<Link>` in [TopBar.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/TopBar.tsx) aggiungendo l'attributo `aria-label="Home"`.
2. Eseguiti i test di linting e build.

---

## Dettaglio dell'errore
Nel file [TopBar.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/TopBar.tsx):
```tsx
<Link href="/" className="w-10 h-10 flex items-center justify-center hover:opacity-50 transition-opacity text-black dark:text-white">
  <Logo />
</Link>
```
Il componente `<Logo />` restituisce un elemento SVG puro senza attributi di accessibilità. Di conseguenza, i motori di ricerca, gli agenti AI e i lettori di schermo vedono un link vuoto, senza testo o etichette indicanti la destinazione.

---

## Triple Option Mandate (Tre Opzioni per l'Implementazione)

Proponiamo tre approcci distinti per risolvere il problema:

### Opzione 1: Aggiunta di `aria-label="Home"` direttamente al link di navigazione (Raccomandata)
* **Descrizione:** Aggiungere l'attributo `aria-label="Home"` o `aria-label="Pierfilippo Quartarella - Home"` direttamente sul tag `<Link>` in `TopBar.tsx`.
* **Pro:** 
  - Soluzione standard e raccomandata dalle linee guida WAI-ARIA per link che contengono solo icone/immagini.
  - Modifica circoscritta a una singola riga di codice in `TopBar.tsx`.
  - Non altera l'aspetto visivo né la struttura DOM.
* **Contro:**
  - Se il logo viene riutilizzato altrove come link a sé stante, l'attributo dovrà essere aggiunto manualmente anche lì.

### Opzione 2: Testo nascosto visivamente con classe `sr-only`
* **Descrizione:** Aggiungere un elemento di testo all'interno del link, nascosto visivamente per gli utenti vedenti ma rilevabile dagli screen reader ed agenti tramite la classe di utilità `sr-only` (Screen Reader Only) fornita da Tailwind.
* **Codice proposto:**
  ```tsx
  <Link href="/" className="w-10 h-10 flex items-center justify-center hover:opacity-50 transition-opacity text-black dark:text-white">
    <Logo />
    <span className="sr-only">Home</span>
  </Link>
  ```
* **Pro:**
  - Utilizza elementi HTML nativi con solo testo.
  - Semplice da implementare e pienamente compatibile con Tailwind CSS v4.
* **Contro:**
  - Aggiunge un nodo in più al DOM.

### Opzione 3: Rendere l'SVG del Logo auto-descrittivo e accessibile
* **Descrizione:** Modificare il componente [Logo.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/Logo.tsx) aggiungendo i tag di accessibilità (`role="img"`, `aria-label="Logo Pierfilippo Quartarella"` e un tag `<title>`).
* **Codice proposto** in `Logo.tsx`:
  ```tsx
  <svg 
    ...
    role="img"
    aria-label="Logo Pierfilippo Quartarella"
    ...
  >
    <title>Logo Pierfilippo Quartarella</title>
    ...
  </svg>
  ```
* **Pro:**
  - Il componente Logo diventa autonomo e accessibile ovunque venga inserito (ad esempio nel footer, nella navbar o in altre pagine).
* **Contro:**
  - Modifica due file se si vuole coordinare il tutto, oppure richiede la modifica esclusiva del file SVG. Alcuni lettori di schermo obsoleti potrebbero non associare perfettamente l'etichetta dell'SVG come testo descrittivo del link padre (anche se i moderni crawler/agenti di Google lo fanno).

---

## Modifiche Proposte (in attesa di scelta)

A seconda dell'opzione scelta:
- **Opzione 1:** Modifica a [TopBar.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/TopBar.tsx).
- **Opzione 2:** Modifica a [TopBar.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/TopBar.tsx).
- **Opzione 3:** Modifica a [Logo.tsx](file:///Users/pierfilippoquartarella/git_public/getpierfilippo.com/src/components/sharlee/Logo.tsx).

---

## Piano di Verifica
1. Verificare che l'HTML risultante contenga il testo o l'etichetta accessibile.
2. Eseguire la compilazione di produzione tramite `npm run build` per confermare l'assenza di errori.
3. Validare con uno strumento di analisi locale come Lighthouse (accessibilità) o ispezionando l'albero di accessibilità del browser.
