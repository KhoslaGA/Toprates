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
              company that publishes educational content about Canadian insurance, credit cards,
              mortgages, and investing. TopRates.ca also operates a contact form through which
              prospective customers may submit inquiries.
            </p>
            <p>
              Webhub4u Inc. is not a licensed insurance broker, mortgage broker, credit advisor,
              investment advisor, or financial advisor. Information published on TopRates.ca is
              provided for general educational purposes only and should not be treated as
              personalized financial, insurance, mortgage, credit, tax, legal, or investment
              advice.
            </p>

            <h2>Insurance Referral Partnership</h2>
            <p>
              Insurance inquiries submitted through TopRates.ca may be referred to{' '}
              <strong>KLC Group Canada Inc.</strong>, an independent insurance advisory firm.
            </p>
            <p>
              KLC Group Canada Inc. is licensed under Ontario&rsquo;s life insurance agent
              licensing framework administered by the Financial Services Regulatory Authority of
              Ontario (FSRA). Its advisors hold individual Life Licence Qualification Program
              (LLQP) licences where required.
            </p>
            <p>
              KLC Group Canada Inc. is independently owned and operated by Gautam Khosla.
              Webhub4u Inc. is owned by Tanvi Kapoor.
            </p>
            <p>
              The two companies maintain a documented commercial referral arrangement under which
              Webhub4u Inc. may receive a per-referral fee for inquiries referred to KLC Group
              Canada Inc.
            </p>
            <p>
              The principals of the two companies are spouses. This relationship is disclosed for
              transparency.
            </p>

            <h2>Editorial Content</h2>
            <p>
              Articles, reviews, guides, comparisons, and other informational content published on
              TopRates.ca are intended for general educational purposes only.
            </p>
            <p>
              TopRates.ca does not provide personalized recommendations and does not make
              suitability assessments for insurance, mortgage, credit card, investment, or
              financial products.
            </p>
            <p>
              Where TopRates.ca has a referral, advertising, or affiliate arrangement with a
              third-party provider, such as a credit card issuer, mortgage brokerage, insurance
              provider, or other financial services company, that relationship will be disclosed
              on the relevant page, article, or form where applicable.
            </p>

            <h2>Future Plans</h2>
            <p>
              TopRates.ca and KLC Group Canada Inc. plan to expand into property and casualty
              insurance comparison services, including auto, home, tenant, business, and related
              insurance categories, in 2027.
            </p>
            <p>
              This planned expansion is expected to occur alongside KLC Group Canada Inc.&rsquo;s
              future registration as a RIBO-licensed insurance brokerage in Ontario.
            </p>
            <p>
              Until the required registration is granted, TopRates.ca does not sell, quote, bind,
              broker, or advise on property and casualty insurance products.
            </p>

            <h2>Important Notice</h2>
            <p>
              Submitting a contact form through TopRates.ca does not create a broker-client,
              advisor-client, financial advisor-client, or fiduciary relationship with Webhub4u
              Inc.
            </p>
            <p>
              Any licensed insurance advice, where applicable, is provided only by appropriately
              licensed representatives of KLC Group Canada Inc.
            </p>
            <p>
              Webhub4u Inc. does not provide licensed insurance, mortgage, credit, investment,
              tax, legal, or financial advice.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy, data protection, general inquiries, or complaints about editorial
              content or website operations, please contact:{' '}
              <a href="mailto:toprates56@gmail.com">toprates56@gmail.com</a>.
            </p>

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
