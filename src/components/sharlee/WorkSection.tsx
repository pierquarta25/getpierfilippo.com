'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export const WorkSection = () => {
  const { t } = useLanguage();

  const projects = [
    { title: 'getpierfilippo.com', category: t('work.category.portfolio'), slug: 'getpierfilippo-com' },
    { title: 'MacNil Contact Manager', category: t('work.category.mobile'), slug: 'macnil-contact-manager' },
    { title: 'GtFleet365', category: t('work.category.fleet'), slug: 'gt-fleet365' },
    { title: 'Iveco Scraper', category: t('work.category.scraper'), slug: 'iveco-scraper' },
    { title: 'LeadGen', category: t('work.category.software'), slug: 'leadgen' },
  ];

  return (
    <section id="work" className="min-h-screen py-16 md:py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline border-b border-black/10 dark:border-white/10 pb-4 mb-8">
          <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-black dark:text-white">{t('work.title')}</h2>
          <span className="text-xl font-medium text-black/40 dark:text-white/40">{projects.length}</span>
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <a
              key={i}
              href={`/work/${project.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-start md:justify-between py-8 border-b border-black/10 dark:border-white/10 hover:px-4 transition-all duration-300 gap-2 md:gap-0"
            >
              <div className="flex items-center gap-4 text-black dark:text-white">
                <ArrowRight className="hidden md:block opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                <span className="text-2xl md:text-5xl font-medium tracking-tight group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors uppercase break-words">
                  {project.title}
                </span>
              </div>
              <span className="text-[10px] md:text-base font-medium text-black/40 dark:text-white/40 uppercase tracking-widest md:ml-4">
                {project.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
