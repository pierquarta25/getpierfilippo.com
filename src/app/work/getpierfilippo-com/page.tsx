'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';
import ReactMarkdown from 'react-markdown';

export default function GetPierfilippoPage() {
  const { language, t } = useLanguage();

  const seo = {
    IT: {
      title: "Pierfilippo Quartarella | Sviluppo Web con Next.js 16 e Tailwind CSS",
      description: "Scopri come ho realizzato il mio portfolio professionale usando Next.js 16, TypeScript e Tailwind CSS v4. Un esempio di design moderno e performance estreme."
    },
    EN: {
      title: "Pierfilippo Quartarella | Web Development with Next.js 16 & Tailwind CSS",
      description: "Explore how I built my professional portfolio using Next.js 16, TypeScript, and Tailwind CSS v4. A showcase of modern design and top-tier performance."
    }
  };

  const content = {
    IT: {
      category: t('work.category.portfolio'),
      description: "Un ecosistema digitale all'avanguardia progettato per riflettere la mia identità professionale. Costruito con Next.js 16 e Tailwind CSS v4, questo spazio non è solo una vetrina, ma un esempio tangibile del mio impegno verso performance estreme e design pulito.",
      role: "Lead Developer & Designer",
      year: "2026",
      status: "Attivo",
      markdown: `
## Obiettivi del Progetto
L'obiettivo principale era creare una piattaforma che non solo mostrasse i miei lavori, ma che fungesse da benchmark tecnico. Ho voluto esplorare i confini di Next.js 16 e della nuova versione di Tailwind CSS per ottenere tempi di caricamento istantanei.

## Sfide Tecniche
Implementazione di un sistema di internazionalizzazione (i18n) fluido e di una modalità scura che rispetti le preferenze di sistema dell'utente senza flash di contenuti non stilizzati.
      `
    },
    EN: {
      category: t('work.category.portfolio'),
      description: "A cutting-edge digital ecosystem designed to reflect my professional identity. Built with Next.js 16 and Tailwind CSS v4, this space is not just a showcase, but a tangible example of my commitment to extreme performance and clean design.",
      role: "Lead Developer & Designer",
      year: "2026",
      status: "Active",
      markdown: `
## Project Goals
The main objective was to create a platform that not only showcased my work but also served as a technical benchmark. I wanted to explore the boundaries of Next.js 16 and the new version of Tailwind CSS to achieve instantaneous loading times.

## Technical Challenges
Implementation of a fluid internationalization (i18n) system and a dark mode that respects user system preferences without unstyled content flashes.
      `
    }
  };

  const currentContent = content[language];
  const currentSeo = seo[language];

  const projectImages = [
    '/work/getpierfilippo-com/media/work1.png',
    '/work/getpierfilippo-com/media/work2.png',
    '/work/getpierfilippo-com/media/work3.png',
    '/work/getpierfilippo-com/media/work4.png',
  ];

  return (
    <>
      <title>{currentSeo.title}</title>
      <meta name="description" content={currentSeo.description} />
      
      <ProjectLayout
        title="getpierfilippo.com"
        category={currentContent.category}
        description={currentContent.description}
        tags={['Next.js 16', 'Tailwind CSS v4', 'TypeScript', 'shadcn/ui']}
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
