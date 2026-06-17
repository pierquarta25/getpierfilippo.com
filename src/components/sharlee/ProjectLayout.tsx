'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

interface ProjectLayoutProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  status?: string;
  images?: string[];
  role?: string;
  year?: string;
  isInternal?: boolean;
  children?: React.ReactNode;
}

export const ProjectLayout = ({ 
  title, 
  category, 
  description, 
  tags, 
  status,
  images = [],
  role,
  year,
  isInternal,
  children 
}: ProjectLayoutProps) => {
  const { t, language } = useLanguage();
  const projectStatus = status || (language === 'IT' ? 'In fase di sviluppo' : 'In development');
  const projectRole = role || 'Full Stack Developer';
  const projectYear = year || '2026';

  const plugin = React.useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: true }),
    []
  );

  return (
    <div className="w-full pb-20 px-4 md:px-24 max-w-7xl mx-auto relative z-10 text-black dark:text-white">
      {/* Back Button */}
      <Link 
        href="/work" 
        className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors mt-8 mb-12 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        {t('project.back')}
      </Link>

      {/* Header */}
      <div className="border-b border-black/10 dark:border-white/10 pb-8 md:pb-12 mb-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div className="max-w-full overflow-hidden">
            <span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-4 block">
              {category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9] text-black dark:text-white py-2 flex flex-wrap gap-x-2">
              {title.split('.').map((part, i, arr) => (
                <React.Fragment key={i}>
                  <span>{part}</span>
                  {i < arr.length - 1 && <span className="opacity-50">.</span>}
                </React.Fragment>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* Fully Adaptive Media Section */}
      {images.length > 0 && (
        <div className="mb-16 md:mb-32 w-full">
          <div className="border border-black/10 dark:border-white/10 p-1 md:p-2 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden group relative w-full">
            <Carousel 
              className="w-full" 
              opts={{ loop: true }}
              plugins={[plugin]}
              onMouseEnter={() => plugin.stop()}
              onMouseLeave={() => plugin.play()}
            >
              <CarouselContent className="-ml-0">
                {images.map((img, index) => (
                  <CarouselItem key={index} className="pl-0 flex justify-center items-center h-auto min-h-[300px] md:min-h-[400px]">
                    <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden">
                      <div 
                        className="absolute inset-0 z-0 scale-110 blur-2xl opacity-10"
                        style={{ 
                          backgroundImage: `url(${img})`, 
                          backgroundSize: 'cover', 
                          backgroundPosition: 'center' 
                        }}
                      />
                      <Image 
                        src={img} 
                        alt={`${title} - image ${index + 1}`} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        className="relative z-10 object-contain transition-transform duration-700 hover:scale-[1.01]" 
                        priority={index === 0}
                        loading={index === 0 ? undefined : "lazy"}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="hidden md:flex left-4 bg-black/20 hover:bg-black/40 dark:bg-white/10 dark:hover:bg-white/20 border-none backdrop-blur-md text-white" />
                  <CarouselNext className="hidden md:flex right-4 bg-black/20 hover:bg-black/40 dark:bg-white/10 dark:hover:bg-white/20 border-none backdrop-blur-md text-white" />
                  {/* Progress Indicator for Mobile */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 md:hidden">
                    {images.map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    ))}
                  </div>
                </>
              )}
            </Carousel>
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
        <div className="lg:col-span-2 space-y-12 md:space-y-20">
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-xs md:text-sm font-mono uppercase tracking-widest text-black/40 dark:text-white/40">Overview</h2>
            <p className="text-xl md:text-4xl text-black dark:text-white leading-relaxed font-light">
              {description}
            </p>
          </div>
          
          <div className="max-w-none 
            [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:font-bold 
            [&_h2]:mt-16 md:[&_h2]:mt-24 [&_h2]:mb-8 [&_h2]:text-2xl md:[&_h2]:text-3xl
            [&_h2:first-child]:mt-0
            [&_p]:text-black/70 dark:[&_p]:text-white/70 [&_p]:leading-relaxed md:[&_p]:leading-loose [&_p]:text-lg md:[&_p]:text-xl
            [&_p]:my-6 md:[&_p]:my-10
            [&_li]:text-black/70 dark:[&_li]:text-white/70 [&_li]:text-lg md:[&_li]:text-xl
            [&_li]:my-3 md:[&_li]:my-6
            [&_strong]:text-black dark:[&_strong]:text-white
            border-t border-black/10 dark:border-white/10 pt-12 md:pt-16">
            {children}
          </div>
        </div>

        <div className="space-y-12 order-first lg:order-last">
          <div className="p-6 md:p-8 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm lg:sticky lg:top-32">
            <h3 className="text-xs md:text-sm font-mono uppercase tracking-widest mb-6 border-b border-black/10 dark:border-white/10 pb-4 text-black dark:text-white">Project Details</h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
              <div>
                <span className="text-[10px] font-mono text-black/40 dark:text-white/40 uppercase block mb-1">Status</span>
                <span className="text-sm uppercase font-medium text-black dark:text-white">{projectStatus}</span>
                {isInternal && (
                  <span className="text-[10px] text-black/50 dark:text-white/50 tracking-wider mt-1.5 block font-medium leading-snug">
                    {language === 'IT' 
                      ? 'Progetto interno · Non accessibile pubblicamente' 
                      : 'Internal Project · Not Publicly Accessible'}
                  </span>
                )}
              </div>
              <div>
                <span className="text-[10px] font-mono text-black/40 dark:text-white/40 uppercase block mb-1">Role</span>
                <span className="text-sm uppercase font-medium text-black dark:text-white">{projectRole}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-black/40 dark:text-white/40 uppercase block mb-1">Year</span>
                <span className="text-sm uppercase font-medium text-black dark:text-white">{projectYear}</span>
              </div>
            </div>

            <h3 className="text-xs md:text-sm font-mono uppercase tracking-widest mb-6 border-b border-black/10 dark:border-white/10 pb-4 mt-8 md:mt-12 text-black dark:text-white">Stack tecnologico</h3>
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
