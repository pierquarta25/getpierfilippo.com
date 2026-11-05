'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';
import ReactMarkdown from 'react-markdown';

export default function LeadGenPage() {
  const { language } = useLanguage();

  const seo = {
    IT: {
      title: "LeadGen | Ricerca aziende con Gemini AI, Python, Laravel",
      description: "Piattaforma B2B che cerca aziende sul web e le qualifica con Google Gemini. Scraper Python, Laravel e Livewire."
    },
    EN: {
      title: "LeadGen | Company Research with Gemini AI, Python, Laravel",
      description: "B2B platform that finds companies on the web and qualifies them with Google Gemini. Python scraper, Laravel and Livewire."
    }
  };

  const content = {
    IT: {
      category: "AI & Business Intelligence",
      description: "Un motore di ricerca lead che usa Gemini AI. Cerca aziende sul web e le classifica per settore, così il reparto commerciale trova nuove opportunità in molto meno tempo.",
      role: "Full Stack Developer Intern · AI & Business Intelligence",
      year: "2026",
      status: "Completato",
      markdown: `
## Ricerca Lead Intelligente
Nei CRM aziendali i dati sono sparsi e incoerenti. LeadGen usa un sistema di alias semantici e l'AI per mappare interi settori merceologici e trovare più aziende di quelle che una ricerca per parola chiave restituiva.

## Motore di Ricerca Ibrido
- **Database Interno:** Ricerca su oltre 2.500 record aziendali, resa veloce da una cache.
- **Web Scraping (Python):** Bot che scansionano i motori di ricerca per trovare aziende che non sono ancora nel database.
- **Gemini AI:** Un modello linguistico legge il sito di un'azienda, ne deduce il settore e trova i competitor diretti.

## Risultati Ottenuti
Per il settore trasporti le aziende trovate sono aumentate del **197%**. La ricerca manuale, che richiedeva minuti, ora richiede frazioni di secondo, e ogni sessione di ricerca fa emergere il triplo delle opportunità commerciali.
      `
    },
    EN: {
      category: "AI & Business Intelligence",
      description: "A lead search engine that uses Gemini AI. It looks for companies on the web and sorts them by industry, so the sales team finds new opportunities in much less time.",
      role: "Full Stack Developer Intern · AI & Business Intelligence",
      year: "2026",
      status: "Completed",
      markdown: `
## Intelligent Lead Research
Company CRMs hold scattered, inconsistent data. LeadGen uses semantic aliases and AI to map whole industry sectors and find more companies than a plain keyword search did.

## Hybrid Search Engine
- **Internal Database:** Search across 2,500+ company records, kept fast by a cache.
- **Web Scraping (Python):** Bots that scan search engines to find companies that are not in the database yet.
- **Gemini AI:** A language model reads a company's website, works out its industry, and finds direct competitors.

## Achieved Results
For the transport sector, the companies found went up by **197%**. A manual search that took minutes now takes a fraction of a second, and each search session surfaces three times the commercial opportunities.
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
