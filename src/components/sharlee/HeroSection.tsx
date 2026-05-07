import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-8 text-center py-12">
      <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold uppercase leading-[1.1] tracking-tighter max-w-5xl">
        SOLVING PROBLEMS <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground/60 to-foreground/40">THROUGH CODE</span>
      </h1>
      <p className="mt-8 text-lg md:text-xl text-foreground/60 max-w-2xl leading-relaxed font-medium">
        Appassionato di tecnologia e sfide complesse, sviluppo soluzioni web complete mettendo al centro la qualità e l&apos;esperienza utente.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-8 font-medium">
        <Link href="/work" className="flex items-center gap-2 hover:opacity-50 transition-opacity">
          <ArrowRight size={20} />
          see my projects
        </Link>
        <Link href="/about" className="flex items-center gap-2 hover:opacity-50 transition-opacity">
          <ArrowRight size={20} />
          more about me
        </Link>
      </div>
    </section>
  );
};

