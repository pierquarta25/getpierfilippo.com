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
              <span className="text-black/60 dark:text-white/60 text-lg font-bold font-mono">↓</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Desktop view: horizontal flow */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:gap-3 w-full">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 text-center border border-black/10 dark:border-white/10 bg-white dark:bg-black px-3 py-4 font-mono text-[11px] uppercase tracking-widest font-bold text-black dark:text-white transition-[transform,border-color] hover:scale-[1.02] hover:border-black/40 dark:hover:border-white/40 duration-300">
              {step}
            </div>
            {index < steps.length - 1 && (
              <span className="text-black/60 dark:text-white/60 text-sm font-bold font-mono">➔</span>
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
      title: "GtFleet365 | Configuratore flotte React e Laravel",
      description: "SPA in React 19 e Laravel per configurare flotte aziendali: link per commerciale, validazione, PDF, email e sincronizzazione lead con HubSpot."
    },
    EN: {
      title: "GtFleet365 | Fleet Configurator with React and Laravel",
      description: "React 19 and Laravel SPA to configure company fleets: per-salesperson links, validation, PDF, email and lead sync to HubSpot."
    }
  };

  const content = {
    IT: {
      category: "Enterprise Solution",
      description: "Un configuratore di flotte aziendali per il team vendite di MacNil. Guida il venditore passo dopo passo, controlla i dati man mano che li inserisce e li sincronizza con HubSpot, così nessuno deve ricopiarli a mano.",
      role: "Full Stack Developer Intern · Frontend & API Integration",
      year: "2026",
      status: "Completato",
      markdown: `
## Digitalizzazione del Processo di Vendita
MacNil voleva creare le offerte per le flotte in modo più rapido e con meno errori. Ho sviluppato una Single Page Application (SPA) che accompagna il venditore in una configurazione a più passaggi.

## Funzionalità Chiave
- **Link personalizzato:** Ogni commerciale ha un link univoco, così si possono tracciare le sue vendite.
- **Salvataggio Automatico:** Uso il LocalStorage per non far perdere i dati se si chiude la pagina a metà compilazione.
- **Validazione Dinamica:** L'interfaccia segnala subito gli errori, in base alle regole di business dell'azienda.
- **Associazione della Pratica:** Il lead e la pratica vengono assegnati in automatico al commerciale giusto.
- **PDF Riepilogativo:** Un PDF di riepilogo, generato subito, che il cliente o il commerciale può scaricare.
- **Email di Riepilogo:** Parte in automatico un'email con tutti i dettagli della configurazione.
- **Sincronizzazione CRM:** Integrazione in tempo reale con HubSpot CRM, senza data-entry manuale.
      `
    },
    EN: {
      category: "Enterprise Solution",
      description: "A company fleet configurator for the MacNil sales team. It walks the salesperson through each step, checks the data as it is entered, and syncs it to HubSpot so nobody has to copy it by hand.",
      role: "Full Stack Developer Intern · Frontend & API Integration",
      year: "2026",
      status: "Completed",
      markdown: `
## Sales Process Digitization
MacNil wanted to build fleet offers faster and with fewer mistakes. I developed a Single Page Application (SPA) that takes the salesperson through a multi-step configuration.

## Key Features
- **Personalized link:** Each salesperson gets a unique link, so their sales can be tracked.
- **Auto-save:** LocalStorage keeps the data if someone closes the page halfway through.
- **Dynamic Validation:** The interface flags errors right away, based on the company's business rules.
- **Application Association:** Leads and files are assigned automatically to the right salesperson.
- **Summary PDF:** A summary PDF, generated instantly, ready to download.
- **Confirmation Email:** An email with the full configuration recap goes out automatically.
- **CRM Sync:** Real-time two-way integration with HubSpot CRM, no manual data entry.
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
