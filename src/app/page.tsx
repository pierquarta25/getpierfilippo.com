import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Pierfilippo Quartarella | Full Stack Developer' },
  description: 'Portfolio di Pierfilippo Quartarella: web app React, Next.js e Laravel, automazioni Python e strumenti AI. Disponibile full time.',
};

import { HeroSection } from '@/components/sharlee/HeroSection';

export default function Home() {
  return (
    <div id="hero">
      <HeroSection />
    </div>
  );
}
