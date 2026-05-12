'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-8">
      {/* Background CAD Lines Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black dark:bg-white" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black dark:bg-white" />
      </div>

      <div className="relative z-10 space-y-8 max-w-2xl">
        <h1 className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter text-black/5 dark:text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          404
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-black dark:text-white">
            {t('error.404.subtitle')}
          </h2>
          <p className="text-lg md:text-xl text-black/60 dark:text-white/60 font-medium leading-relaxed">
            {t('error.404.description')}
          </p>
        </div>

        <div className="pt-8">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-3 font-bold uppercase text-[10px] tracking-[0.2em] py-4 px-8 border border-black/10 dark:border-white/10 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            {t('error.back')}
          </Link>
        </div>
      </div>
    </div>
  );
}
