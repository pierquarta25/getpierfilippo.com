import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WorkSection = () => {
  const projects = [
    { title: 'lorem', category: 'Branding' },
    { title: 'lorem ipsum', category: 'Web Development' },
    { title: 'lorem lorem', category: 'Portrait' },
    { title: 'loremipsum', category: 'UX/UI Design' },
    { title: 'les indécis', category: 'Branding' },
  ];

  return (
    <section id="work" className="min-h-screen py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline border-b border-foreground/10 pb-4 mb-8">
          <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">WORK</h2>
          <span className="text-xl font-medium text-foreground/40">{projects.length}</span>
        </div>
        
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <a 
              key={i}
              href="#"
              className="group flex justify-between items-center py-8 border-b border-foreground/10 hover:px-4 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                <span className="text-3xl md:text-5xl font-medium tracking-tight group-hover:text-foreground/60 transition-colors uppercase">
                  {project.title}
                </span>
              </div>
              <span className="text-sm md:text-base font-medium text-foreground/40 uppercase tracking-widest">
                {project.category}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
