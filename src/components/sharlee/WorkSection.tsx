'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export const WorkSection = () => {
  const { t } = useLanguage();

  const projects = [
    { title: 'getpierfilippo.com', category: t('work.category.portfolio'), slug: 'getpierfilippo-com', stack: ['Next.js', 'TypeScript', 'Tailwind CSS'], thumbnail: '/work/getpierfilippo-com/media/work1.png' },
    { title: 'MacNil Contact Manager', category: t('work.category.mobile'), slug: 'macnil-contact-manager', stack: ['Next.js', 'Supabase', 'Gemini AI'], thumbnail: null },
    { title: 'GtFleet365', category: t('work.category.fleet'), slug: 'gt-fleet365', stack: ['React', 'Laravel', 'HubSpot API'], thumbnail: '/work/gt-fleet365/media/work5.png' },
    { title: 'Iveco Scraper', category: t('work.category.scraper'), slug: 'iveco-scraper', stack: ['Python', 'Pandas', 'API Reverse Engineering'], thumbnail: null },
    { title: 'LeadGen', category: t('work.category.software'), slug: 'leadgen', stack: ['Python', 'Laravel', 'Gemini AI'], thumbnail: '/work/leadgen/media/work8.png' },
  ];

  return (
    <section id="work" className="min-h-screen py-16 md:py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline border-b border-black/10 dark:border-white/10 pb-4 mb-8">
          <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-black dark:text-white">{t('work.title')}</h1>
          <span className="text-xl font-medium text-black/60 dark:text-white/60">{projects.length}</span>
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <a
              key={i}
              href={`/work/${project.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-start md:justify-between py-6 border-b border-black/10 dark:border-white/10 hover:px-4 transition-[padding,opacity] duration-300 gap-3 md:gap-0"
            >
              <div className="flex items-center gap-4 text-black dark:text-white">
                <ArrowRight className="hidden md:block opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-[opacity,transform] duration-300 flex-shrink-0" />

                {/* Thumbnail */}
                <div className="flex w-[64px] h-[40px] md:w-[88px] md:h-[56px] flex-shrink-0 overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} — ${project.category}`}
                      width={88}
                      height={56}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-300"
                    />
                  ) : (
                    // Blueprint placeholder for projects without screenshots
                    <div className="w-full h-full relative overflow-hidden text-black dark:text-white">
                      <svg viewBox="0 0 88 56" className="absolute inset-0 w-full h-full" aria-hidden="true">
                        <defs>
                          <pattern id={`grid-${i}`} width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.18"/>
                          </pattern>
                        </defs>
                        <rect width="88" height="56" fill={`url(#grid-${i})`}/>
                        <path d="M 4 12 V 4 H 12 M 76 4 H 84 V 12 M 84 44 V 52 H 76 M 12 52 H 4 V 44" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                        <path d="M 16 46 H 72 M 16 43 V 49 M 72 43 V 49" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.35"/>
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center pb-3 text-[13px] font-mono font-bold uppercase tracking-widest opacity-60">
                        {project.title.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-2xl md:text-5xl font-medium tracking-tight group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors uppercase break-words">
                    {project.title}
                  </span>
                  <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] text-black/60 dark:text-white/60">
                    {project.stack.join(' · ')}
                  </span>
                </div>
              </div>
              <span className="text-[10px] md:text-base font-medium text-black/60 dark:text-white/60 uppercase tracking-widest md:ml-4">
                {project.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
