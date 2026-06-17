'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';
import ReactMarkdown from 'react-markdown';

export default function LeadGenPage() {
  const { language } = useLanguage();

  const seo = {
    IT: {
      title: "LeadGen Tool | Ricerca Lead Intelligente con Gemini AI e Python",
      description: "Strumento avanzato di lead generation che utilizza Gemini AI e scraper Python per automatizzare la ricerca di aziende e competitor su HubSpot."
    },
    EN: {
      title: "LeadGen Tool | Intelligent Lead Research with Gemini AI & Python",
      description: "Advanced lead generation tool using Gemini AI and Python scrapers to automate company and competitor research for HubSpot."
    }
  };

  const content = {
    IT: {
      category: "AI & Business Intelligence",
      description: "Un potente motore di Business Intelligence potenziato da Gemini AI. Automatizza la scoperta di nuove opportunità commerciali scansionando il web e qualificando i lead in base al settore, incrementando drasticamente l'efficienza del reparto commerciale.",
      role: "Full Stack Developer Intern · AI & Business Intelligence",
      year: "2026",
      status: "Completato",
      markdown: `
## Ricerca Lead Intelligente
LeadGen risolve il problema della frammentazione dei dati nei CRM aziendali. Attraverso un sistema di alias semantici e l'integrazione con l'intelligenza artificiale, il tool è in grado di mappare interi settori merceologici con una precisione senza precedenti.

## Motore di Ricerca Ibrido
- **Database Interno:** Analisi ultra-rapida di oltre 2.500 record aziendali tramite cache ottimizzata.
- **Web Scraping (Python):** Bot intelligenti che scansionano i motori di ricerca per trovare aziende non ancora presenti nel database.
- **Gemini AI:** Utilizzo di modelli linguistici avanzati per dedurre il settore merceologico partendo dal sito web e trovare competitor diretti.

## Risultati Ottenuti
L'implementazione del sistema ha portato a un incremento del **197%** delle aziende trovate per il settore trasporti e ha ridotto i tempi di ricerca manuale da minuti a frazioni di secondo, triplicando le opportunità commerciali identificate per ogni sessione di ricerca.
      `
    },
    EN: {
      category: "AI & Business Intelligence",
      description: "A powerful Business Intelligence engine powered by Gemini AI. It automates the discovery of new commercial opportunities by scanning the web and qualifying leads by industry, drastically increasing sales department efficiency.",
      role: "Full Stack Developer Intern · AI & Business Intelligence",
      year: "2026",
      status: "Completed",
      markdown: `
## Intelligent Lead Research
LeadGen solves the problem of data fragmentation in company CRMs. Through a system of semantic aliases and AI integration, the tool is able to map entire industry sectors with unprecedented precision.

## Hybrid Search Engine
- **Internal Database:** Ultra-fast analysis of over 2,500 company records via optimized caching.
- **Web Scraping (Python):** Intelligent bots that scan search engines to find companies not yet in the database.
- **Gemini AI:** Use of advanced language models to deduce the industry sector from a website and find direct competitors.

## Achieved Results
The implementation of the system led to a **197%** increase in companies found for the transport sector and reduced manual search times from minutes to fractions of a second, tripling the commercial opportunities identified per search session.
      `
    }
  };

  const currentContent = content[language];
  const currentSeo = seo[language];

  const projectImages = [
    '/work/leadgen/media/work8.png',
    '/work/leadgen/media/work9.png',
  ];

  return (
    <>
      <title>{currentSeo.title}</title>
      <meta name="description" content={currentSeo.description} />
      
      <ProjectLayout
        title="LeadGen Tool"
        category={currentContent.category}
        description={currentContent.description}
        tags={['Python', 'Gemini AI', 'Laravel', 'Livewire', 'Scraping']}
        role={currentContent.role}
        year={currentContent.year}
        status={currentContent.status}
        isInternal={true}
        images={projectImages}
      >
        <ReactMarkdown>{currentContent.markdown}</ReactMarkdown>
      </ProjectLayout>
    </>
  );
}
