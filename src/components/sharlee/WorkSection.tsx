'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export const WorkSection = () => {
  const { t } = useLanguage();

  const projects = [
    { title: 'getpierfilippo.com', category: t('work.category.portfolio'), slug: 'getpierfilippo-com', thumbnail: '/work/getpierfilippo-com/media/work1.png' },
    { title: 'MacNil Contact Manager', category: t('work.category.mobile'), slug: 'macnil-contact-manager', thumbnail: null },
    { title: 'GtFleet365', category: t('work.category.fleet'), slug: 'gt-fleet365', thumbnail: '/work/gt-fleet365/media/work5.png' },
    { title: 'Iveco Scraper', category: t('work.category.scraper'), slug: 'iveco-scraper', thumbnail: null },
    { title: 'LeadGen', category: t('work.category.software'), slug: 'leadgen', thumbnail: '/work/leadgen/media/work8.png' },
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
                    // Blueprint grid placeholder for projects without screenshots
                    <div className="w-full h-full relative overflow-hidden">
                      <svg width="88" height="56" className="absolute inset-0 opacity-30 dark:opacity-20">
                        <defs>
                          <pattern id={`grid-${i}`} width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="88" height="56" fill={`url(#grid-${i})`}/>
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[7px] font-mono uppercase tracking-widest opacity-30 dark:opacity-20">
                        {project.title.slice(0, 3).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                <span className="text-2xl md:text-5xl font-medium tracking-tight group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors uppercase break-words">
                  {project.title}
                </span>
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
