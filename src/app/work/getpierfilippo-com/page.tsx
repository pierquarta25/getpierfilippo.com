'use client';

import React from 'react';
import { ProjectLayout } from '@/components/sharlee/ProjectLayout';
import { useLanguage } from '@/lib/LanguageContext';

export default function GetPierfilippoPage() {
  const { language, t } = useLanguage();

  const content = {
    IT: {
      category: t('work.category.portfolio'),
      description: "Il mio portfolio personale costruito con le ultime tecnologie web. Questo progetto non è solo una vetrina dei miei lavori, ma un esperimento di design e performance, utilizzando un'estetica ispirata al CAD e al minimalismo tecnico.",
      challengesTitle: "Sfide Tecniche",
      challengesDesc: "Implementazione di un sistema di cambio lingua real-time e gestione del tema scuro con persistenza, il tutto mantenendo performance elevate grazie al rendering lato server di Next.js."
    },
    EN: {
      category: t('work.category.portfolio'),
      description: "My personal portfolio built with the latest web technologies. This project is not just a showcase of my work, but an experiment in design and performance, using an aesthetic inspired by CAD and technical minimalism.",
      challengesTitle: "Technical Challenges",
      challengesDesc: "Implementation of a real-time language switching system and dark theme management with persistence, all while maintaining high performance thanks to Next.js server-side rendering."
    }
  };

  const currentContent = content[language];

  return (
    <ProjectLayout
      title="getpierfilippo.com"
      category={currentContent.category}
      description={currentContent.description}
      tags={['Next.js 16', 'Tailwind CSS v4', 'TypeScript', 'shadcn/ui']}
    >
      <div className="space-y-6">
        <h3 className="text-xl font-bold uppercase tracking-tight text-black dark:text-white">{currentContent.challengesTitle}</h3>
        <p className="text-black/70 dark:text-white/70">
          {currentContent.challengesDesc}
        </p>
      </div>
    </ProjectLayout>
  );
}
