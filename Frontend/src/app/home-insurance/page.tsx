import type { Metadata } from 'next';
import HomeInsuranceClient from './_client/HomeInsuranceClient';

export const metadata: Metadata = {
  title: 'Compare Home Insurance in Ontario — TopRates.ca',
  description:
    "Compare Ontario home insurance from top carriers. Homeowner, condo, or tenant — bundle with auto and save 15–20%. Water damage, liability, and replacement cost coverage explained.",
  keywords:
    'home insurance Ontario, condo insurance Ontario, tenant insurance Ontario, bundle home auto insurance, water damage coverage Ontario',
  openGraph: {
    title: 'Compare Home Insurance in Ontario — TopRates.ca',
    description:
      "Compare Ontario home insurance from top carriers. Bundle with auto and save 15–20%.",
    type: 'website',
  },
  alternates: { canonical: '/home-insurance' },
};

export default function HomeInsurancePage() {
  return <HomeInsuranceClient />;
}
