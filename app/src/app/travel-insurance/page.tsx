import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import FaqAccordion from '@/components/shared/FaqAccordion';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';

export const metadata = {
  title: 'Travel Insurance — Emergency Medical & Trip Coverage | TopRates.ca',
  description: 'Plain-English Canadian travel insurance education — emergency medical, trip cancellation, baggage, and travel health. Independent Canadian insurance education. Operated by Webhub4u Inc.',
  keywords: 'travel insurance, travel medical insurance, trip cancellation, baggage insurance, emergency medical, Canada',
  openGraph: {
    title: 'Travel Insurance Education — TopRates.ca',
    description: 'Plain-English Canadian travel insurance education. Independent Canadian insurance education.',
  },
};

const coverageFeatures = [
  {
    title: 'Emergency Medical Coverage',
    description: 'Hospital stays, emergency medication, and medical evacuation when traveling outside Canada. Typically covers up to $500,000 in medical expenses.',
    icon: '🏥',
  },
  {
    title: 'Trip Cancellation Insurance',
    description: 'Reimburses non-refundable trip costs if you need to cancel before departure due to illness, death, or other covered reasons.',
    icon: '✈️',
  },
  {
    title: 'Baggage & Belongings',
    description: 'Covers lost, delayed, or damaged luggage and personal belongings. Reimburses emergency replacement items and accommodation.',
    icon: '🧳',
  },
  {
    title: 'Travel Health Protection',
    description: 'Includes coverage for emergency dental, prescription glasses replacement, and pre-existing condition waivers (with proper disclosure).',
    icon: '⚕️',
  },
];

const whyChooseToprates = [
  'Plain-English education on single-trip vs annual plans, medical caps, and pre-existing conditions',
  'Independent editorial — no commission-driven product pitches',
  'Updated as Canadian regulations and provincial OHIP-equivalent rules change',
  'Quote and advisory services planned, once KLC Group Canada Inc. completes RIBO registration',
];

const faqItems = [
  {
    question: 'Do Canadians need travel insurance?',
    answer: 'Travel insurance isn\'t legally required, but it\'s strongly recommended. Canadian provincial health plans only cover basic emergency care abroad and often have limited coverage. A single emergency hospital stay outside Canada can cost $50,000+ without insurance.',
  },
  {
    question: 'What\'s the difference between single-trip and annual coverage?',
    answer: 'Single-trip insurance covers one vacation - usually cheaper for occasional travelers. Annual coverage protects unlimited trips within a year - better value for frequent travelers. Choose based on how often you travel outside Canada.',
  },
  {
    question: 'Are pre-existing conditions covered?',
    answer: 'Most plans exclude pre-existing conditions unless you purchase coverage within 14 days of your initial trip deposit. Some insurers offer special coverage if you disclose conditions. Always check policy details and ask about waivers.',
  },
  {
    question: 'What countries does travel insurance cover?',
    answer: 'Most plans cover worldwide travel, but some exclude high-risk countries. USA coverage is standard. Always verify your destination is covered. Some plans offer different rates for various regions or exclude certain countries.',
  },
];

export default function TravelInsurancePage() {

  return (
    <main className="w-full">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#1a365d] to-[#0f1f3a] text-white py-16 md:py-24">
        <PageWrapper>
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.2em] text-amber-300 font-bold mb-3">
              INDEPENDENT CANADIAN INSURANCE EDUCATION
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Canadian Travel Insurance, in Plain English
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Plain-English education on emergency medical, trip cancellation, baggage, and
              travel health coverage. Educational content only — for personal advice on your
              specific situation, consult a licensed insurance advisor.
            </p>
            <Button variant="accent" size="lg" href="#read-more">
              Read the guide
            </Button>
          </div>
        </PageWrapper>
      </section>

      <PageWrapper>
        <DisclaimerBlock vertical="pc" />
      </PageWrapper>

      {/* Coverage Features */}
      <section className="py-16 md:py-20">
        <PageWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-12 text-center">
            Travel Insurance Coverage Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageFeatures.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageWrapper>
      </section>

      {/* Why Choose Toprates */}
      <section className="py-16 md:py-20 bg-gray-50">
        <PageWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-8">
                What this page is — and what it isn&rsquo;t
              </h2>
              <ul className="space-y-4">
                {whyChooseToprates.map((reason, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-[#0d9488] text-2xl font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-500">
              <div className="text-[11px] uppercase tracking-[0.2em] text-amber-700 font-bold mb-3">
                Regulatory note
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">
                Travel medical is FSRA / LLQP-licensed in Ontario
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Travel medical insurance falls under Ontario&rsquo;s accident &amp; sickness
                licensing framework, regulated by FSRA. The Life Licence Qualification Program
                (LLQP) is part of the licensing pathway.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                TopRates.ca is operated by Webhub4u Inc., a Canadian technology company that is
                not a licensed insurance broker. For personal advice on your specific situation,
                consult a licensed advisor.
              </p>
            </div>
          </div>
        </PageWrapper>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-20">
        <PageWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={faqItems} />
          </div>
        </PageWrapper>
      </section>

      {/* Educational CTA Section — no licensed advisory on this page in Phase 1 */}
      <section id="read-more" className="py-16 md:py-20 bg-gradient-to-r from-[#1a365d] to-[#0f1f3a] text-white">
        <PageWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Got a specific question?
            </h2>
            <p className="text-lg text-gray-100 mb-10">
              Educational content only on this page. For licensed advisory, our partner KLC
              Group Canada Inc. handles life insurance referrals — visit our life insurance
              page to get connected with a LLQP-licensed advisor.
            </p>
            <a href="/life-insurance" className="inline-block bg-white text-[#1a365d] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
              Go to life insurance →
            </a>
          </div>
        </PageWrapper>
      </section>
    </main>
  );
}
