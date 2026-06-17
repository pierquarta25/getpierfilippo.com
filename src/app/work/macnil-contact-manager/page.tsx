'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';
import ReactMarkdown from 'react-markdown';

export default function MacnilContactManagerPage() {
  const { language, t } = useLanguage();

  const seo = {
    IT: {
      title: "MacNil Contact Manager | Digitalizzazione Biglietti da Visita con AI",
      description: "Web application mobile-first per scansionare biglietti da visita cartacei, estrarre contatti con Google Gemini AI e sincronizzarli su HubSpot."
    },
    EN: {
      title: "MacNil Contact Manager | AI-Powered Business Card Digitalization",
      description: "Mobile-first web application to scan paper business cards, extract contact details with Google Gemini AI, and sync them to HubSpot."
    }
  };

  const content = {
    IT: {
      category: t('work.category.mobile'),
      description: "Un'applicazione web serverless mobile-first che trasforma la fotocamera del telefono in uno scanner intelligente. Utilizza l'intelligenza artificiale di Google Gemini per analizzare i biglietti da visita, estrarne i contatti in formato strutturato e sincronizzarli all'istante su HubSpot CRM.",
      role: "Full Stack Developer Intern · AI Integration",
      year: "2026",
      status: "Completato",
      markdown: `
## Obiettivi del Progetto
Sviluppato durante lo stage presso MacNil, questo applicativo risolve la necessità dei commerciali di digitalizzare rapidamente i contatti raccolti durante eventi e fiere direttamente dallo smartphone, eliminando il data-entry manuale.

## Funzionalità & Architettura
- **Scansione Mobile-First:** Alignment dell'interfaccia e dei componenti per l'acquisizione fotografica istantanea tramite browser mobile.
- **Estrazione Dati con AI (Google Gemini):** Integrazione delle API di Gemini per il parsing OCR intelligente dell'immagine del biglietto da visita, restituendo un output JSON validato con nome, cognome, azienda, ruolo, e-mail e telefono.
- **Architettura Serverless:** Backend costruito su **Supabase** sfruttando Row Level Security (RLS) per un controllo granulare e sicuro degli accessi.
- **Sincronizzazione HubSpot:** Connessione bidirezionale in tempo reale che inserisce i contatti direttamente nel CRM di vendita aziendale.
- **Dashboard Statistiche:** Monitoraggio continuo dello stato dei lead (es. contatti caldi, totali scansionati, contatti in attesa di sincronizzazione).
      `
    },
    EN: {
      category: t('work.category.mobile'),
      description: "A serverless mobile-first web application that turns the smartphone camera into an intelligent scanner. It utilizes Google Gemini AI to analyze business cards, extract structured contact details, and immediately sync them to HubSpot CRM.",
      role: "Full Stack Developer Intern · AI Integration",
      year: "2026",
      status: "Completed",
      markdown: `
## Project Goals
Developed during the internship at MacNil, this application helps sales agents quickly digitalize contacts gathered at events and trade shows directly from their smartphones, avoiding manual data entry.

## Features & Architecture
- **Mobile-First Scanning:** Interface and components optimized for quick photo capture directly from mobile browsers.
- **AI-Powered Extraction (Google Gemini):** Integration of Gemini APIs for intelligent OCR parsing of card images, returning a structured JSON output with name, surname, company, role, email, and phone.
- **Serverless Architecture:** Backend built on **Supabase** utilizing Row Level Security (RLS) for secure, granular access control.
- **HubSpot Synchronization:** Real-time bi-directional integration that streams leads directly into the corporate sales CRM.
- **Analytics Dashboard:** Continuous monitoring of lead status (e.g. hot leads, total scanned, pending synchronization).
      `
    }
  };

  const currentContent = content[language];
  const currentSeo = seo[language];

  return (
    <>
      <title>{currentSeo.title}</title>
      <meta name="description" content={currentSeo.description} />
      
      <ProjectLayout
        title="MacNil Contact Manager"
        category={currentContent.category}
        description={currentContent.description}
        tags={['Next.js', 'Supabase', 'Gemini AI API', 'Tailwind CSS', 'HubSpot API', 'Serverless']}
        role={currentContent.role}
        year={currentContent.year}
        status={currentContent.status}
        isInternal={true}
        images={[]}
      >
        <ReactMarkdown>{currentContent.markdown}</ReactMarkdown>
      </ProjectLayout>
    </>
  );
}
