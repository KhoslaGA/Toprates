import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal & Disclosures — TopRates.ca',
  description:
    'Legal information, partnerships, and disclosures for TopRates.ca, operated by Webhub4u Inc.',
  alternates: { canonical: '/legal' },
};

const LAST_UPDATED = 'May 2026';

export default function LegalPage() {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#1B2A4A] mb-4">Legal &amp; Disclosures</h1>
          <p className="text-gray-600 mb-12">Last updated: {LAST_UPDATED}</p>

          <div className="prose prose-lg max-w-none">
            <h2>About TopRates.ca</h2>
            <p>
              TopRates.ca is operated by <strong>Webhub4u Inc.</strong>, a Canadian technology
              company. Webhub4u Inc. publishes editorial content about Canadian insurance, credit
              cards, mortgages, and investing, and operates the TopRates.ca contact form for
              inquiries from prospective customers.
            </p>
            <p>
              <strong>
                Webhub4u Inc. is not a licensed insurance broker, mortgage broker, credit advisor,
                or investment advisor.
              </strong>
            </p>

            <h2>Insurance partnership</h2>
            <p>
              Insurance inquiries received through TopRates.ca are referred to{' '}
              <strong>KLC Group Canada Inc.</strong>, an independent insurance advisory firm. KLC
              Group Canada Inc. is licensed under Ontario&rsquo;s life insurance agent licensing
              framework administered by the Financial Services Regulatory Authority of Ontario
              (FSRA), and its advisors hold individual Life Licence Qualification Program (LLQP)
              licences.
            </p>
            <p>
              KLC Group Canada Inc. is independently owned and operated by Gautam Khosla. Webhub4u
              Inc. is owned by Tanvi Kapoor. The two companies have a documented commercial
              referral arrangement under which Webhub4u Inc. receives a per-referral fee for
              inquiries it sends to KLC Group Canada Inc. The two principals are spouses; this
              relationship is disclosed for transparency.
            </p>

            <h2>Editorial content</h2>
            <p>
              Articles, reviews, guides, and informational content on TopRates.ca are produced
              for general educational purposes. They are not personalized recommendations and do
              not constitute financial, insurance, mortgage, or investment advice. Where
              TopRates.ca has a referral or affiliate arrangement with a third-party provider
              (for example, credit card issuers or mortgage brokerages), this is disclosed on the
              relevant page or article.
            </p>

            <h2>Future plans</h2>
            <p>
              TopRates.ca and KLC Group Canada Inc. plan to expand into property and casualty
              insurance comparison (auto, home, business, tenant) in 2027, alongside KLC Group
              Canada Inc.&rsquo;s registration as a RIBO-licensed insurance brokerage in Ontario.
              Until that registration is granted, no property and casualty insurance is sold or
              quoted on TopRates.ca.
            </p>

            <h2>Contact</h2>
            <ul>
              <li>
                For privacy or data protection inquiries:{' '}
                <a href="mailto:privacy@toprates.ca">privacy@toprates.ca</a>
              </li>
              <li>
                For general inquiries:{' '}
                <a href="mailto:contact@toprates.ca">contact@toprates.ca</a>
              </li>
              <li>
                For complaints about content or operations:{' '}
                <a href="mailto:editorial@toprates.ca">editorial@toprates.ca</a>
              </li>
            </ul>

            <p className="mt-12 text-sm text-gray-600">
              See also: <Link href="/privacy">Privacy Policy</Link> ·{' '}
              <Link href="/terms">Terms of Service</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
