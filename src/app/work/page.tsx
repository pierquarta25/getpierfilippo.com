import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Progetti | Pierfilippo Quartarella, Full Stack Developer' },
  description: 'Cinque progetti: configuratore flotte con HubSpot, scanner di biglietti da visita con Gemini AI, lead generation, scraper Python e questo sito.',
};

import { WorkSection } from '@/components/sharlee/WorkSection';

export default function WorkPage() {
  return (
    <div id="work">
      <WorkSection />
    </div>
  );
}
