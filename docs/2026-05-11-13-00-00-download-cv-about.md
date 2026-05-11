# Progetto: Download CV e Aggiornamento Sezione About

**Data:** 2026-05-11
**Stato:** Completato
**Autore:** Gemini CLI

## Obiettivo
Collegare il pulsante "resume" nella `AboutSection` al file PDF del CV situato in `public/CV_Pierfilippo_Quartarella_2026.pdf` e aggiornare i testi della sezione.

## Implementazione Effettuata

### 1. Download CV
- **Scelta:** Opzione A (Download Diretto).
- **Azione:** Aggiunto l'attributo `download` al link del CV in `AboutSection.tsx`.

### 2. Aggiornamento Testi (i18n)
- **Azione:** La sezione About ora utilizza `LanguageContext`.
- **Contenuto:** Ho inserito la biografia reale di Pierfilippo Quartarella basata sulle informazioni estratte dal CV (diploma SIA, specializzazione React.js, stage presso MacNil).
- **Lingue:** Supporto completo sia per IT che per EN.

## Dettagli Tecnici
- File aggiornati: `src/lib/LanguageContext.tsx`, `src/components/sharlee/AboutSection.tsx`.
- Il link ora punta correttamente a `/CV_Pierfilippo_Quartarella_2026.pdf`.
