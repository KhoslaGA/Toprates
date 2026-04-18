import type { Metadata } from 'next';
import AutoInsuranceClient from './_client/AutoInsuranceClient';

export const metadata: Metadata = {
  title: 'Compare Car Insurance in Ontario — TopRates.ca',
  description:
    'Compare Ontario car insurance from 30+ carriers in under 2 minutes. AI-powered comparison finds you the best rate and the right coverage. Ontario auto insurance reform starts July 1, 2026.',
  keywords:
    'car insurance Ontario, auto insurance Ontario, compare car insurance, Ontario auto reform 2026, pink slip, cheapest car insurance Ontario',
  openGraph: {
    title: 'Compare Car Insurance in Ontario — TopRates.ca',
    description:
      'Compare 30+ Ontario auto insurance carriers in under 2 minutes. Built for the July 2026 reform.',
    type: 'website',
  },
  alternates: { canonical: '/auto-insurance' },
};

export default function AutoInsurancePage() {
  return <AutoInsuranceClient />;
}
