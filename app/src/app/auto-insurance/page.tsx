import type { Metadata } from 'next';
import AutoInsuranceClient from './_client/AutoInsuranceClient';
import ContactForm from '@/components/contact/ContactForm';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';

export const metadata: Metadata = {
  title: 'Auto Insurance Education — TopRates.ca',
  description:
    'Plain-English Ontario auto insurance education. Educational content on the July 2026 Ontario reform. Independent Canadian insurance education. Operated by Webhub4u Inc.',
  keywords:
    'car insurance Ontario, auto insurance Ontario, Ontario auto reform 2026, pink slip',
  openGraph: {
    title: 'Auto Insurance Education — TopRates.ca',
    description:
      'Plain-English Ontario auto insurance education. Independent Canadian insurance education.',
    type: 'website',
  },
  alternates: { canonical: '/auto-insurance' },
};

export default function AutoInsurancePage() {
  return (
    <>
      <AutoInsuranceClient />
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
        <DisclaimerBlock vertical="pc" />
      </div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1B2A4A] mb-2">Get in touch</h2>
          <p className="text-gray-700 mb-8">
            Auto insurance comparison is planned for 2027 alongside KLC Group Canada Inc.&rsquo;s
            RIBO registration. Send us a note and we&rsquo;ll add you to our list — we&rsquo;ll
            reach out when quotes are live.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <ContactForm defaultProduct="auto-insurance" />
          </div>
        </div>
      </section>
    </>
  );
}
