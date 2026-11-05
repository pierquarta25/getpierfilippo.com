import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Chi sono | Pierfilippo Quartarella, Full Stack Developer' },
  description: 'Full Stack Developer con focus su React e Laravel, laureato in Scienze dello Sport. Cinque applicazioni B2B consegnate in meno di 12 mesi.',
};

import { AboutSection } from '@/components/sharlee/AboutSection';

export default function AboutPage() {
  return (
    <div id="about">
      <AboutSection />
    </div>
  );
}
