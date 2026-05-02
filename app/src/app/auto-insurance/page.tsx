import type { Metadata } from 'next';
import AutoInsuranceClient from './_client/AutoInsuranceClient';

export const metadata: Metadata = {
  title: 'Compare Car Insurance in Ontario — TopRates.ca',
  description:
    'Compare Ontario auto insurance from 30+ carriers at launch (2027). Independent insurance education platform with educational content on the July 2026 Ontario auto reform.',
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
