# Project Design: Aggiornamento Bio Hero Section

**Date:** 2026-05-07
**Author:** Gemini CLI

## Goal
Personalizzare la Hero Section del sito portfolio sostituendo i testi segnaposto (Lorem Ipsum) con le informazioni reali di Pierfilippo Quartarella, basate sul profilo professionale fornito. L'obiettivo è comunicare in modo chiaro e accattivante l'identità di "Full Stack Junior Developer" con un forte orientamento al business.

## Source Information
- File di riferimento: `references/pierfilippo-bio.md`
- Key traits: Full Stack Development (React, TypeScript, Java), background sportivo (disciplina, resilienza), visione strategica/economica.

## Planned Implementation

### 1. Content Generation (Copywriting)
- Utilizzo dell'agente `copywriter` per generare una bio d'impatto in lingua italiana.
- Lunghezza target: 20-30 parole (coerente con il design originale).
- Focus: Unione tra rigore tecnico e valore aziendale.

### 2. SEO Optimization & Audit
- Utilizzo dell'agente `seo-specialist` per revisionare le proposte.
- Keyword principali: "Sviluppatore Full Stack Junior", "Soluzioni Digitali", "Valore Aziendale".
- Selezione della versione definitiva per massimizzare la leggibilità e l'indicizzazione.

### 3. Technical Update
- Modifica del componente `src/components/sharlee/HeroSection.tsx`.
- Aggiornamento dell'intestazione `<h1>`: "LOREM IPSUM" -> "PIERFILIPPO QUARTARELLA", "LOREM" -> "PIER".
- Sostituzione del paragrafo `<p>` con la bio ottimizzata.

## Implementation Details (Performed)
- **Bio Finale:** "Sviluppatore Full Stack Junior con visione business-oriented. Trasformo obiettivi strategici in soluzioni digitali scalabili, unendo rigore tecnico e precisione per generare valore aziendale."
- **File Modificati:** `src/components/sharlee/HeroSection.tsx`.

## Verification Results
- **Visual Integrity:** La nuova bio mantiene la spaziatura e il ritmo visivo della Hero Section originale.
- **Tone of Voice:** Professionale, determinato e orientato ai risultati.
- **Language:** Completamente in italiano come richiesto.
