'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';
import ReactMarkdown from 'react-markdown';

const stepsIT = [
  'Link personalizzato',
  'Configurazione',
  'Validazione',
  'PDF',
  'Email',
  'HubSpot'
];

const stepsEN = [
  'Personalized link',
  'Configuration',
  'Validation',
  'PDF',
  'Email',
  'HubSpot'
];

const StepTracker = ({ language }: { language: 'IT' | 'EN' }) => {
  const steps = language === 'IT' ? stepsIT : stepsEN;

  return (
    <div className="w-full border border-black/10 dark:border-white/10 p-6 md:p-8 bg-black/[0.01] dark:bg-white/[0.01] rounded-none">
      {/* Mobile view: vertical list */}
      <div className="flex flex-col items-center md:hidden gap-4 w-full">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="w-full text-center border border-black/10 dark:border-white/10 bg-white dark:bg-black px-4 py-4 font-mono text-xs uppercase tracking-wider font-bold text-black dark:text-white transition-colors hover:border-black dark:hover:border-white">
              {step}
            </div>
            {index < steps.length - 1 && (
              <span className="text-black/30 dark:text-white/30 text-lg font-bold font-mono">↓</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Desktop view: horizontal flow */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:gap-3 w-full">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 text-center border border-black/10 dark:border-white/10 bg-white dark:bg-black px-3 py-4 font-mono text-[11px] uppercase tracking-widest font-bold text-black dark:text-white transition-all hover:scale-[1.02] hover:border-black/40 dark:hover:border-white/40 duration-300">
              {step}
            </div>
            {index < steps.length - 1 && (
              <span className="text-black/30 dark:text-white/30 text-sm font-bold font-mono">➔</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

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
      role: "Full Stack Developer Intern · Frontend & API Integration",
      year: "2026",
      status: "Completato",
      markdown: `
## Digitalizzazione del Processo di Vendita
Il progetto è nato dall'esigenza di MacNil di automatizzare e rendere più affidabile la creazione di offerte commerciali per la gestione delle flotte. Ho sviluppato un'applicazione Single Page (SPA) che guida il venditore attraverso una configurazione multi-step.

## Funzionalità Chiave
- **Link personalizzato:** Generazione di un link univoco per ciascun commerciale per tracciare le performance.
- **Salvataggio Automatico:** Implementazione del LocalStorage per prevenire la perdita di dati durante la compilazione.
- **Validazione Dinamica:** Feedback immediato a livello di interfaccia basato su complesse regole di business aziendali.
- **Associazione della Pratica:** Associazione automatica del lead e della pratica al referente commerciale corretto.
- **PDF Riepilogativo:** Generazione istantanea di un PDF riepilogativo scaricabile dall'utente o dal commerciale.
- **Email di Riepilogo:** Invio automatico di una notifica email strutturata con tutti i dettagli della configurazione.
- **Sincronizzazione CRM:** Integrazione in tempo reale con HubSpot CRM per eliminare il data-entry manuale.
      `
    },
    EN: {
      category: "Enterprise Solution",
      description: "Digital transformation of sales processes for MacNil. This enterprise dashboard enables dynamic fleet configuration, integrating intelligent validations and real-time HubSpot synchronization to eliminate human error.",
      role: "Full Stack Developer Intern · Frontend & API Integration",
      year: "2026",
      status: "Completed",
      markdown: `
## Sales Process Digitization
The project was born from MacNil's need to automate and make more reliable the creation of commercial offers for fleet management. I developed a Single Page Application (SPA) that guides the salesperson through a multi-step configuration.

## Key Features
- **Personalized link:** Generation of a unique link for each salesperson to track sales performance.
- **Auto-save:** LocalStorage implementation to prevent data loss during multi-step configuration.
- **Dynamic Validation:** Immediate interface feedback based on complex business logic rules.
- **Application Association:** Automatic lead and file association to the correct commercial contact.
- **Summary PDF:** Instant generation of a downloadable summary PDF document.
- **Confirmation Email:** Automated delivery of a structured configuration recap email.
- **CRM Sync:** Real-time bi-directional integration with HubSpot CRM to eliminate manual data entry.
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
        isInternal={true}
        images={projectImages}
      >
        <ReactMarkdown>{currentContent.markdown}</ReactMarkdown>

        <div className="mt-16 md:mt-24 border-t border-black/10 dark:border-white/10 pt-12 md:pt-16">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8">
            {language === 'IT' ? 'Flusso operativo' : 'Operational Flow'}
          </h2>
          <StepTracker language={language} />
        </div>
      </ProjectLayout>
    </>
  );
}
