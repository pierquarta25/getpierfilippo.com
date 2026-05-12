'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/LanguageContext';

interface ProjectLayoutProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  status?: string;
  children?: React.ReactNode;
}

export const ProjectLayout = ({ 
  title, 
  category, 
  description, 
  tags, 
  status,
  children 
}: ProjectLayoutProps) => {
  const { t } = useLanguage();
  const projectStatus = status || (t('language') === 'IT' ? 'In fase di sviluppo' : 'In development');

  return (
    <div className="w-full pb-20 px-8 md:px-24 max-w-7xl mx-auto relative z-10 text-black dark:text-white">
      {/* Back Button */}
      <Link 
        href="/work" 
        className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors mb-12 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        {t('project.back')}
      </Link>

      {/* Header */}
      <div className="border-b border-black/10 dark:border-white/10 pb-12 mb-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div>
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-4 block">
              {category}
            </span>
            <h1 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-tight md:leading-none text-black dark:text-white break-all md:break-normal">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Column: Description */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-black dark:text-white">Overview</h2>
          <p className="text-xl text-black/70 dark:text-white/70 leading-relaxed font-light">
            {description}
          </p>
          
          {/* Custom Content Slot */}
          <div className="pt-8">
            {children}
          </div>
        </div>

        {/* Right Column: Meta Info / Sidebar */}
        <div className="space-y-12">
          <div className="p-8 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm">
            <h3 className="text-sm font-mono uppercase tracking-widest mb-6 border-b border-black/10 dark:border-white/10 pb-4 text-black dark:text-white">Project Details</h3>
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono text-black/40 dark:text-white/40 uppercase block mb-1">Status</span>
                <span className="text-sm uppercase font-medium text-black dark:text-white">{projectStatus}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-black/40 dark:text-white/40 uppercase block mb-1">Role</span>
                <span className="text-sm uppercase font-medium text-black dark:text-white">Full Stack Developer</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-black/40 dark:text-white/40 uppercase block mb-1">Year</span>
                <span className="text-sm uppercase font-medium text-black dark:text-white">2026</span>
              </div>
            </div>

            <h3 className="text-sm font-mono uppercase tracking-widest mb-6 border-b border-black/10 dark:border-white/10 pb-4 mt-12 text-black dark:text-white">Stack tecnologico</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="rounded-none border-black/20 dark:border-white/20 uppercase font-mono text-[10px] tracking-widest px-3 py-1 text-black dark:text-white">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
