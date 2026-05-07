import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-32 px-8 md:px-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter border-b border-foreground/10 pb-8 mb-16">
          CONTACT
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">MAIL</span>
            <a href="mailto:pier.quarta25@icloud.com" className="text-2xl md:text-4xl font-medium hover:text-foreground/60 transition-colors flex items-center gap-4">
              <ArrowUpRight size={24} className="text-foreground/40" />
              pier.quarta25@icloud.com
            </a>
          </div>
          
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">SOCIAL MEDIAS</span>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/_pier.q_?igsh=MTkxNmF1dHRwOG9ndQ%3D%3D&utm_source=qr" className="text-2xl md:text-4xl font-medium hover:text-foreground/60 transition-colors flex items-center gap-4">
                <ArrowUpRight size={24} className="text-foreground/40" />
                instagram
              </a>
              <a href="https://www.linkedin.com/in/pier-quartarella/" className="text-2xl md:text-4xl font-medium hover:text-foreground/60 transition-colors flex items-center gap-4">
                <ArrowUpRight size={24} className="text-foreground/40" />
                linkedin
              </a>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
