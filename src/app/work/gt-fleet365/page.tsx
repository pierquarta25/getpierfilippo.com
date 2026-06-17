'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';
import ReactMarkdown from 'react-markdown';

export default function GtFleetPage() {
  const { language } = useLanguage();

  const seo = {
    IT: {
      title: "GT Fleet 365 | Configuratore Flotta con Integrazione HubSpot",
      description: "Sviluppo di una Single Page Application (SPA) per la configurazione interattiva e digitale dei veicoli aziendali, con sincronizzazione automatica dei lead su CRM HubSpot. Frontend in React 19 e backend in Laravel 13 per MacNil S.r.l."
    },
    EN: {
      title: "GT Fleet 365 | Fleet Configurator with HubSpot Integration",
      description: "Development of a Single Page Application (SPA) for the interactive and digital configuration of company fleets, with automatic lead synchronization to HubSpot CRM. Built with React 19 frontend and Laravel 13 backend for MacNil S.r.l."
    }
  };

  const content = {
    IT: {
      category: "Enterprise Solution",
      description: "Trasformazione digitale dei processi di vendita per MacNil. Questa dashboard enterprise permette la configurazione dinamica di flotte aziendali, integrando validazioni intelligenti e sincronizzazione real-time con HubSpot per eliminare gli errori umani.",
      role: "Full-Stack Developer (Intern)",
      year: "2026",
      status: "Completato",
      markdown: `
## Digitalizzazione del Processo di Vendita
Il progetto è nato dall'esigenza di MacNil di automatizzare e rendere più affidabile la creazione di offerte commerciali per la gestione delle flotte. Ho sviluppato un'applicazione Single Page (SPA) che guida il venditore attraverso una configurazione multi-step.

## Funzionalità Chiave
- **Salvataggio Automatico:** Implementazione del LocalStorage per evitare la perdita di dati durante la compilazione.
- **Validazione Dinamica:** Feedback visivi immediati basati su logiche di business complesse.
- **Interfaccia Mobile-First:** Ottimizzazione completa per tablet e smartphone, permettendo ai venditori di operare direttamente sul campo.
      `
    },
    EN: {
      category: "Enterprise Solution",
      description: "Digital transformation of sales processes for MacNil. This enterprise dashboard enables dynamic fleet configuration, integrating intelligent validations and real-time HubSpot synchronization to eliminate human error.",
      role: "Full-Stack Developer (Intern)",
      year: "2026",
      status: "Completed",
      markdown: `
## Sales Process Digitization
The project was born from MacNil's need to automate and make more reliable the creation of commercial offers for fleet management. I developed a Single Page Application (SPA) that guides the salesperson through a multi-step configuration.

## Key Features
- **Auto-save:** LocalStorage implementation to prevent data loss during compilation.
- **Dynamic Validation:** Immediate visual feedback based on complex business logic.
- **Mobile-First Interface:** Full optimization for tablets and smartphones, allowing salespeople to operate directly in the field.
      `
    }
  };

  const currentContent = content[language];
  const currentSeo = seo[language];

  const projectImages = [
    '/work/gt-fleet365/media/work5.png',
    '/work/gt-fleet365/media/work6_0.png',
    '/work/gt-fleet365/media/work6_1.png',
    '/work/gt-fleet365/media/work6_2.png',
    '/work/gt-fleet365/media/work7.png',
  ];

  return (
    <>
      <title>{currentSeo.title}</title>
      <meta name="description" content={currentSeo.description} />
      
      <ProjectLayout
        title="GT Fleet 365"
        category={currentContent.category}
        description={currentContent.description}
        tags={['React 19', 'Laravel 13', 'HubSpot API', 'Tailwind CSS v4', 'Vite', 'Bootstrap 5']}
        role={currentContent.role}
        year={currentContent.year}
        status={currentContent.status}
        images={projectImages}
      >
        <ReactMarkdown>{currentContent.markdown}</ReactMarkdown>
      </ProjectLayout>
    </>
  );
}
