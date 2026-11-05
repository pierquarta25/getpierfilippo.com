'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';
import ReactMarkdown from 'react-markdown';

export default function MacnilContactManagerPage() {
  const { language, t } = useLanguage();

  const seo = {
    IT: {
      title: "MacNil Contact Manager | Scanner biglietti da visita AI",
      description: "Web app mobile-first in Next.js e Supabase: fotografa un biglietto da visita, Gemini estrae i contatti e li sincronizza su HubSpot CRM."
    },
    EN: {
      title: "MacNil Contact Manager | AI Business Card Scanner",
      description: "Mobile-first Next.js and Supabase web app: photograph a business card, Gemini extracts the contact and syncs it to HubSpot CRM."
    }
  };

  const content = {
    IT: {
      category: t('work.category.mobile'),
      description: "Una web app serverless mobile-first che usa la fotocamera del telefono come scanner. Google Gemini legge il biglietto da visita, ne ricava i contatti in formato strutturato e li invia subito a HubSpot CRM.",
      role: "Full Stack Developer Intern · AI Integration",
      year: "2026",
      status: "Completato",
      markdown: `
## Obiettivi del Progetto
L'ho sviluppato durante lo stage in MacNil. Ai commerciali serviva un modo per digitalizzare subito, dallo smartphone, i contatti raccolti a eventi e fiere, senza data-entry manuale.

## Funzionalità & Architettura
- **Scansione Mobile-First:** Interfaccia pensata per scattare la foto direttamente dal browser del telefono.
- **Estrazione Dati con AI (Google Gemini):** Le API di Gemini fanno l'OCR dell'immagine e restituiscono un JSON validato con nome, cognome, azienda, ruolo, e-mail e telefono.
- **Architettura Serverless:** Backend su **Supabase**, con Row Level Security (RLS) per controllare in modo preciso chi accede a cosa.
- **Sincronizzazione HubSpot:** Connessione bidirezionale in tempo reale: i contatti finiscono direttamente nel CRM di vendita dell'azienda.
- **Dashboard Statistiche:** Una vista sempre aggiornata sullo stato dei lead: contatti caldi, totale scansionati, contatti in attesa di sincronizzazione.
      `
    },
    EN: {
      category: t('work.category.mobile'),
      description: "A serverless, mobile-first web app that uses the phone camera as a scanner. Google Gemini reads the business card, pulls out the contact details in a structured format, and sends them straight to HubSpot CRM.",
      role: "Full Stack Developer Intern · AI Integration",
      year: "2026",
      status: "Completed",
      markdown: `
## Project Goals
I built this during my internship at MacNil. Sales agents needed a way to digitize, right from their phones, the contacts they collected at events and trade shows, without manual data entry.

## Features & Architecture
- **Mobile-First Scanning:** An interface built for taking the photo straight from the phone's browser.
- **AI-Powered Extraction (Google Gemini):** The Gemini APIs run OCR on the card image and return validated JSON with name, surname, company, role, email, and phone.
- **Serverless Architecture:** Backend on **Supabase**, with Row Level Security (RLS) to control exactly who can access what.
- **HubSpot Synchronization:** Real-time two-way integration: contacts land directly in the company's sales CRM.
- **Analytics Dashboard:** An always-current view of lead status: hot leads, total scanned, contacts pending sync.
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
