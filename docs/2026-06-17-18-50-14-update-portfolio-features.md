# Project Design: Aggiornamento Funzionalità Portfolio

**Data:** 17 Giugno 2026  
**Ora:** 18:50:14  
**Autore:** Antigravity (AI Coding Assistant)  
**File di Documento:** `docs/2026-06-17-18-50-14-update-portfolio-features.md`

Questo documento definisce la pianificazione tecnica e le scelte di design per implementare gli aggiornamenti del portfolio di Pierfilippo Quartarella.

---

## 1. Dettagli di Implementazione per ciascuna modifica

### 1.1 Aggiornamento GT Fleet 365 (Flusso Reale)
Aggiungeremo una sezione intitolata "Flusso operativo" (Operational Flow in inglese) all'interno del dettaglio del progetto.

**Riga Visiva Proposta (Opzione A):**
Utilizzeremo un blocco monospazio tech-minimalist con bordi discreti e sfondo semitrasparente per visualizzare gli step in modo ordinato e responsive:
```
[ Link personalizzato ] ➔ [ Configurazione ] ➔ [ Validazione ] ➔ [ PDF ] ➔ [ Email ] ➔ [ HubSpot ]
```
In inglese:
```
[ Personalized link ] ➔ [ Configuration ] ➔ [ Validation ] ➔ [ PDF ] ➔ [ Email ] ➔ [ HubSpot ]
```

**Nuove Funzionalità in IT:**
- **Link personalizzato:** link univoco per ogni commerciale.
- **Associazione automatica:** associazione automatica della pratica al referente.
- **Notifica diretta:** email inviata al referente corretto con il riepilogo.
- **Documento scaricabile:** PDF riepilogativo scaricabile istantaneamente.
- **Sincronizzazione automatica:** salvataggio e allineamento in tempo reale sul CRM HubSpot.

**Nuove Funzionalità in EN:**
- **Personalized link:** unique link for each salesperson.
- **Automatic association:** automatic application association to the contact person.
- **Direct notification:** email sent to the correct contact person.
- **Downloadable document:** downloadable summary PDF.
- **CRM synchronization:** real-time HubSpot CRM synchronization.

---

### 1.2 Indicatore Progetto Interno
Aggiungeremo la dicitura `Progetto interno · Non accessibile pubblicamente` (in italiano) e `Internal Project · Not Publicly Accessible` (in inglese) per tutti e 4 i progetti MacNil.

**Implementazione:**
Modificheremo `ProjectLayout.tsx` per supportare la prop facoltativa `isInternal?: boolean`. Se impostata su `true`, sotto il valore dello `Status` corrente verrà renderizzato un piccolo blocco di testo secondario:
```tsx
{isInternal && (
  <span className="text-[10px] uppercase font-mono tracking-wider text-black/50 dark:text-white/50 block mt-1">
    {language === 'IT' ? 'Progetto interno · Non accessibile' : 'Internal Project · Not Publicly Accessible'}
  </span>
)}
```
*(Nota: L'indicazione "Non accessibile pubblicamente" in italiano verrà abbreviata se necessario o lasciata estesa a seconda dello spazio disponibile per la leggibilità).*

---

### 1.3 Aggiornamento Ruoli (Coerenza IT/EN)
I ruoli verranno allineati esattamente come richiesto sia per la versione italiana che inglese:
- **MacNil Contact Manager:** `Full Stack Developer Intern · AI Integration`
- **GT Fleet 365:** `Full Stack Developer Intern · Frontend & API Integration`
- **Iveco Scraper:** `Full Stack Developer Intern · Data Automation`
- **LeadGen Tool:** `Full Stack Developer Intern · AI & Business Intelligence`

---

### 1.4 Hero Concretezza (Nuovo Titolo e Claim Secondario)
La hero della home page presenterà:
- **H1 Titolo Principale:** `COSTRUISCO APPLICAZIONI WEB` (IT) / `I BUILD WEB APPLICATIONS` (EN)
- **H1 Span:** `PER PROBLEMI REALI` (IT) / `FOR REAL-WORLD PROBLEMS` (EN)
- **Sottotitolo (Description):** `Sviluppo soluzioni full stack con React, Next.js, Laravel, Python e AI, collegando interfacce, dati e processi aziendali.` (IT) / `I develop full stack solutions with React, Next.js, Laravel, Python, and AI, connecting interfaces, data, and business processes.` (EN)
- **Claim Secondario (vecchia frase):** `Ottimizzo la performance attraverso il codice` (IT) / `Optimizing performance through code` (EN). Sarà posizionato elegantemente come *overline* sopra il titolo principale:
```tsx
<span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-4 block">
  {t('hero.claim')}
</span>
```

---

### 1.5 CTA Hero Potenziate
I link "I miei progetti" e "Scopri di più" verranno sostituiti con due pulsanti solidi, geometrici, a spigoli vivi (`rounded-none`):
- **CTA 1 (Progetti - Link a `/work`):** `Esplora i progetti` (IT) / `Explore projects` (EN). Sfondo pieno (`bg-black dark:bg-white text-white dark:text-black hover:opacity-90 px-8 py-4`).
- **CTA 2 (Contatto - Link a `/contact`):** `Contattami` (IT) / `Contact me` (EN). Bordo vuoto (`border border-black/20 dark:border-white/20 hover:bg-black/[0.05] dark:hover:bg-white/[0.05] text-black dark:text-white px-8 py-4`).
Questi pulsanti avranno un'area cliccabile ampia e aumenteranno il tasso di conversione visiva del sito.

---

### 1.6 Semplificazione "Chi sono" e SEO
- Sostituiremo il testo dell'About Me con i 3 paragrafi specificati dall'utente.
- Integreremo `<ReactMarkdown>` per preservare i grassetti e gestire i paragrafi in modo nativo.
- Imposteremo nell'head di `AboutSection.tsx` i seguenti metadati in base alla lingua:
  - **Titolo SEO (IT):** `Chi sono | Pierfilippo Quartarella – Full Stack Developer`
  - **Meta Description (IT):** `Scopri il profilo di Pierfilippo Quartarella, Full Stack Developer specializzato in React, Next.js, Laravel, TypeScript, Python, Supabase, AI e sviluppo di applicazioni web B2B.`
  - **Titolo SEO (EN):** `About Me | Pierfilippo Quartarella – Full Stack Developer`
  - **Meta Description (EN):** `Discover the profile of Pierfilippo Quartarella, Full Stack Developer specializing in React, Next.js, Laravel, TypeScript, Python, Supabase, AI, and B2B web application development.`

---

### 1.7 Miglioramento Pagina Contatti
Sotto il titolo `CONTATTI` e prima dei link, aggiungeremo:
- **Frase:** `Hai un progetto, un’opportunità o vuoi confrontarti sullo sviluppo web? Scrivimi.` (IT) / `Have a project, an opportunity, or want to discuss web development? Write to me.` (EN)
- **Pulsante:** `Invia un’email` (IT) / `Send an email` (EN) che punta a `mailto:info@getpierfilippo.com` in stile geometrico pieno.

---

## 2. Piani di Test e Validazione

- **Build locale:** Eseguiremo `npm run build` o `npm run lint` per verificare che non vi siano errori TypeScript o di formattazione.
- **Responsive Test:** Controlleremo che i nuovi elementi (flusso in GT Fleet, pulsanti della hero, layout contatti) si adattino bene ai dispositivi mobile.
- **Multilingua:** Controlleremo che il passaggio IT/EN funzioni correttamente su tutte le nuove traduzioni.
