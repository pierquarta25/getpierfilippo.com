'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, CodeXml, Dumbbell } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen py-16 md:py-32 px-8 md:px-24 bg-white dark:bg-black relative overflow-hidden flex items-center">
      
      {/* Mobile Background - Stile Riccardo (Limited to top area) */}
      <div className="absolute inset-x-0 top-0 h-[70%] lg:hidden pointer-events-none overflow-hidden">
        <Image 
          src="/media/pierfilippo-portrait.jpg"
          alt="Pierfilippo Quartarella Background"
          fill
          className="object-cover grayscale opacity-60 dark:opacity-20 transition-opacity duration-1000"
          priority
        />
        {/* Overlay gradiente radiale e lineare per far finire l'immagine in modo naturale */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,white_80%)] dark:bg-[radial-gradient(circle_at_50%_40%,transparent_0%,black_80%)]" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white dark:from-black to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full relative z-10">
        
        {/* Image Content - Desktop Only */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-center order-last lg:-translate-y-8">
          <div className="relative w-full aspect-[4/5] bg-black/5 dark:bg-white/5 rounded-[40px] overflow-hidden group shadow-2xl border border-black/5 dark:border-white/5">
            <Image 
              src="/media/pierfilippo-portrait.jpg"
              alt="Pierfilippo Quartarella"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none group-hover:opacity-0 transition-opacity" />
          </div>
        </div>

        {/* Text Content - 7 Columns */}
        <div className="lg:col-span-7 flex flex-col gap-12 text-left text-black dark:text-white">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none">
              {t('about.title')}
            </h2>
          </div>

          <p className="text-xl md:text-2xl font-medium text-black/60 dark:text-white/60 leading-relaxed max-w-2xl">
            {t('about.bio')}
          </p>

          {/* Dual Column Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-black/10 dark:border-white/10 relative">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-black dark:text-white">
                <div className="p-2 bg-black/5 dark:bg-white/5 rounded-lg">
                  <CodeXml size={20} />
                </div>
                <span className="font-bold uppercase text-xs tracking-widest">{t('about.logic')}</span>
              </div>
              <ul className="text-[10px] font-mono space-y-2 opacity-50 uppercase tracking-tight">
                <li>{`> React.js Spec / Aulab`}</li>
                <li>{`> Clean Architecture`}</li>
                <li>{`> Full Stack Systems`}</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-black dark:text-white">
                <div className="p-2 bg-black/5 dark:bg-white/5 rounded-lg">
                  <Dumbbell size={20} />
                </div>
                <span className="font-bold uppercase text-xs tracking-widest">{t('about.performance')}</span>
              </div>
              <ul className="text-[10px] font-mono space-y-2 opacity-50 uppercase tracking-tight">
                <li>{`> Sports Science Degree`}</li>
                <li>{`> Discipline & Mindset`}</li>
                <li>{`> Biomechanics Analysis`}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 items-center">
            <a 
              href="/CV_Pierfilippo_Quartarella_2026.pdf" 
              download 
              className="group flex items-center gap-3 font-bold hover:opacity-50 transition-all uppercase text-[10px] tracking-[0.2em] py-4 px-8 border border-black/10 dark:border-white/10 rounded-full w-fit"
            >
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" /> 
              {t('about.resume')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
