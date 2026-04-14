import type { Metadata } from 'next';
import HomeClient from './_home/HomeClient';

export const metadata: Metadata = {
  title: 'TopRates.ca — Compare Insurance, Mortgage & Credit Card Rates in Canada',
  description:
    'Compare auto, home, life, and tenant insurance, mortgage rates, and credit cards from top Canadian providers. Snap your pink slip. Get quotes from 30+ carriers in under 2 minutes.',
};

export default function Page() {
  return <HomeClient />;
}
