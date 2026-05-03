import type { Metadata } from 'next';
import HomeInsuranceClient from './_client/HomeInsuranceClient';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';

export const metadata: Metadata = {
  title: 'Home Insurance Education — TopRates.ca',
  description:
    'Plain-English Ontario home insurance education. Homeowner, condo, tenant — what is covered, what is not, what to ask. Education today. Quotes summer 2027.',
  keywords:
    'home insurance Ontario, condo insurance Ontario, tenant insurance Ontario, water damage coverage Ontario',
  openGraph: {
    title: 'Home Insurance Education — TopRates.ca',
    description:
      'Plain-English Ontario home insurance education. Education today. Quotes summer 2027.',
    type: 'website',
  },
  alternates: { canonical: '/home-insurance' },
};

export default function HomeInsurancePage() {
  return (
    <>
      <DisclaimerBlock vertical="pc" />
      <HomeInsuranceClient />
    </>
  );
}
