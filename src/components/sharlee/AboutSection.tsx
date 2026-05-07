import React from 'react';
import { ArrowDown } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-8">
          <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter border-b border-foreground/10 pb-4">
            ABOUT
          </h2>
          <p className="text-xl md:text-2xl font-medium text-foreground/60 leading-relaxed max-w-xl">
            Hey, my name is Lorem Ipsum and I use Lorem as my nickname across social medias. 
            I&apos;m a lorem ipsum designer, lorem/ipsum designer &amp; lorem-ipsum lorem developer from Lorem. 
            I&apos;m also passionate about lorem ipsum and make lorem ipsum and universes around what I listen to and I&apos;m always curious to learn more when it comes to new technologies and creative coding.
          </p>
          <a href="#" className="flex items-center gap-2 font-bold hover:opacity-50 transition-opacity uppercase text-sm tracking-widest mt-4">
            <ArrowDown size={18} /> resume
          </a>
        </div>
        
        <div className="relative aspect-[4/5] bg-foreground/5 rounded-[40px] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-foreground/10 to-transparent" />
          {/* Placeholder for portrait */}
          <div className="w-full h-full flex items-center justify-center text-foreground/20 font-bold text-4xl uppercase tracking-widest">
            PORTRAIT
          </div>
        </div>
      </div>
    </section>
  );
};
