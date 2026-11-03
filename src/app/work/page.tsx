import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Progetti | Pierfilippo Quartarella' },
  description: 'Progetti selezionati: portfolio, GtFleet365, LeadGen, MacNil Contact Manager e Iveco Scraper.',
};

import { WorkSection } from '@/components/sharlee/WorkSection';

export default function WorkPage() {
  return (
    <div id="work">
      <WorkSection />
    </div>
  );
}
