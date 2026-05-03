import type { Metadata } from 'next';
import AutoInsuranceClient from './_client/AutoInsuranceClient';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';

export const metadata: Metadata = {
  title: 'Auto Insurance Education — TopRates.ca',
  description:
    'Plain-English Ontario auto insurance education. Educational content on the July 2026 Ontario reform. Education today. Quotes summer 2027. Operated by Webhub4u Inc.',
  keywords:
    'car insurance Ontario, auto insurance Ontario, Ontario auto reform 2026, pink slip',
  openGraph: {
    title: 'Auto Insurance Education — TopRates.ca',
    description:
      'Plain-English Ontario auto insurance education. Education today. Quotes summer 2027.',
    type: 'website',
  },
  alternates: { canonical: '/auto-insurance' },
};

export default function AutoInsurancePage() {
  return (
    <>
      <DisclaimerBlock vertical="pc" />
      <AutoInsuranceClient />
    </>
  );
}
