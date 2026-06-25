'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="min-h-screen py-16 md:py-32 px-8 md:px-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter border-b border-black/10 dark:border-white/10 pb-8 mb-12 text-black dark:text-white">
          {t('contact.title')}
        </h1>

        <div className="mb-10 max-w-2xl border-b border-black/10 dark:border-white/10 pb-8">
          <p className="text-xl md:text-2xl text-black/60 dark:text-white/60 font-light leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">{t('contact.mail')}</span>
            <a href="mailto:info@getpierfilippo.com" className="text-2xl md:text-4xl font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors flex items-center gap-4">
              <ArrowUpRight size={24} className="text-black/40 dark:text-white/40" />
              info@getpierfilippo.com
            </a>
          </div>
          
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 dark:text-white/40">{t('contact.social')}</span>
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/pier-quartarella-software-developer/" className="text-2xl md:text-4xl font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors flex items-center gap-4">
                <ArrowUpRight size={24} className="text-black/40 dark:text-white/40" />
                LinkedIn
              </a>
              <a href="https://www.instagram.com/_pier.q_?igsh=MTkxNmF1dHRwOG9ndQ%3D%3D&utm_source=qr" className="text-2xl md:text-4xl font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors flex items-center gap-4">
                <ArrowUpRight size={24} className="text-black/40 dark:text-white/40" />
                Instagram
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
