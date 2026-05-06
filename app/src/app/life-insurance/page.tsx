import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import FaqAccordion from '@/components/shared/FaqAccordion';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';
import { LifeLeadForm } from '@/components/life/LifeLeadForm';

export const metadata = {
  title: 'Life Insurance — Term, Whole & Universal Coverage | TopRates.ca',
  description: 'Plain-English Canadian life insurance education — term, whole, and universal life. Reviewed by LLQP-licensed advisors at KLC Group Canada Inc. Talk to a licensed advisor today. Operated by Webhub4u Inc.',
  keywords: 'life insurance, term life, whole life, universal life, life coverage, beneficiary, Canada, LLQP',
  openGraph: {
    title: 'Life Insurance Education — TopRates.ca',
    description: 'Plain-English Canadian life insurance education. Reviewed by LLQP-licensed advisors at KLC Group Canada Inc.',
  },
};

const coverageFeatures = [
  {
    title: 'Term Life Insurance',
    description: 'Coverage for a fixed period (10, 20, or 30 years). Most affordable option with pure death benefit protection. Best for young families and income replacement.',
    icon: '📅',
  },
  {
    title: 'Whole Life Insurance',
    description: 'Permanent coverage for your entire lifetime with a cash surrender value component. Includes both death benefit and investment growth.',
    icon: '🛡️',
  },
  {
    title: 'Universal Life Insurance',
    description: 'Flexible permanent coverage that combines protection with investment opportunity. Premiums and death benefits are adjustable based on your needs.',
    icon: '⚙️',
  },
  {
    title: 'Coverage Amounts',
    description: 'Typical coverage ranges from $100,000 to $1,000,000+. We help calculate needs based on income, debts, mortgage, and family responsibilities.',
    icon: '💰',
  },
];

const whyChooseToprates = [
  'Plain-English education on every life insurance product type',
  'Reviewed by LLQP-licensed advisors at KLC Group Canada Inc.',
  'Talk to a licensed advisor about coverage amount, term length, and beneficiary structure',
  'Independent editorial — no commission-driven product pitches',
];

const faqItems = [
  {
    question: 'What\'s the difference between term life and whole life insurance?',
    answer: 'Term life is temporary (10-30 years) and much more affordable - you pay for pure protection. Whole life is permanent with a cash value component that builds over time, but costs much more. Most Canadians choose term life for their primary coverage.',
  },
  {
    question: 'How much life insurance do I need?',
    answer: 'A common rule is 8-10 times your annual income, but it depends on debts, mortgage, family size, and income replacement needs. Use our calculator or speak with our advisors. Most families need $500,000-$1,000,000 in coverage.',
  },
  {
    question: 'What is a beneficiary?',
    answer: 'A beneficiary is the person or entity who receives the death benefit when you pass away. You can name multiple beneficiaries and specify percentages. You can change beneficiaries anytime without notifying the insurance company.',
  },
  {
    question: 'How fast can I get approved for life insurance?',
    answer: 'Term life insurance can be approved in 1-3 days for healthy individuals with minimal underwriting. Some insurers offer instant approval for smaller amounts. Whole and universal life may take longer due to additional health requirements.',
  },
];

export default function LifeInsurancePage() {

  return (
    <main className="w-full">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#1a365d] to-[#0f1f3a] text-white py-16 md:py-24">
        <PageWrapper>
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.2em] text-amber-300 font-bold mb-3">
              LLQP-licensed referral · Available now
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Canadian Life Insurance, in Plain English
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Plain-English education on term, whole, and universal life insurance. Content
              reviewed by LLQP-licensed advisors at KLC Group Canada Inc., an independent
              insurance advisory firm. When you&rsquo;re ready, send a note and we&rsquo;ll
              connect you with a licensed advisor.
            </p>
            <Button variant="accent" size="lg" href="#get-quote">
              Talk to a licensed advisor
            </Button>
          </div>
        </PageWrapper>
      </section>

      <PageWrapper>
        <DisclaimerBlock vertical="life" />
      </PageWrapper>

      {/* Coverage Features */}
      <section className="py-16 md:py-20">
        <PageWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-12 text-center">
            Types of Life Insurance
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
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#0d9488]">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#0d9488] font-bold mb-3">
                Regulatory note
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">
                Life insurance is FSRA / LLQP-licensed in Ontario
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In Ontario, life and accident &amp; sickness insurance agents must be licensed
                through FSRA, and the Life Licence Qualification Program (LLQP) is part of the
                licensing pathway.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                KLC Group Canada Inc. holds licensing under this framework. Content on this page
                is reviewed by LLQP-licensed advisors at KLC. Personalized advice is provided
                only by KLC&rsquo;s licensed representatives, not by Webhub4u Inc.
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

      {/* CTA Section — LifeLeadForm with full CASL consent + KLC handoff */}
      <section id="get-quote" className="py-16 md:py-20 bg-gradient-to-r from-[#1a365d] to-[#0f1f3a] text-white">
        <PageWrapper>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Talk to a licensed advisor
            </h2>
            <p className="text-lg text-gray-100 mb-10 text-center">
              Send us a note and a LLQP-licensed advisor at KLC Group Canada Inc. will reach out
              shortly. KLC handles the regulated parts: needs analysis, illustrative quotes,
              underwriting coordination, policy placement.
            </p>
            <LifeLeadForm subPillar="general" source="life_insurance_bottom_cta" variant="card" />
          </div>
        </PageWrapper>
      </section>
    </main>
  );
}
