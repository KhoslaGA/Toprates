import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import ContactForm from '@/components/contact/ContactForm';
import FaqAccordion from '@/components/shared/FaqAccordion';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';

export const metadata = {
  title: 'Travel Insurance | Toprates.ca - Emergency & Trip Coverage',
  description: 'Comprehensive travel insurance for Canadians traveling abroad. Emergency medical, trip cancellation, baggage coverage, and travel health protection. Get quotes instantly.',
  keywords: 'travel insurance, travel medical insurance, trip cancellation, baggage insurance, emergency medical, Canada',
  openGraph: {
    title: 'Travel Insurance | Toprates.ca',
    description: 'Compare travel insurance rates for Canadian travelers',
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
  'Coverage available for single trips or annual multi-trip plans',
  'Quick quote process - purchase online instantly before departure',
  ' 24/7 emergency assistance hotline wherever you travel',
  'Pre-existing condition coverage available with proper underwriting',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Travel with Confidence - Complete Coverage for Your Journey
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Emergency medical, trip cancellation, and baggage protection. Travel insurance from Canada's top providers.
            </p>
            <Button variant="accent" size="lg" href="#get-quote">
              Get Your Free Quote
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
                Why Choose Toprates for Travel Insurance?
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
              <h3 className="text-2xl font-bold text-[#1a365d] mb-6">
                Coverage Levels
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">Medical Coverage</p>
                  <p className="text-lg font-bold text-[#1a365d]">Up to $500,000</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">Trip Cancellation</p>
                  <p className="text-lg font-bold text-[#1a365d]">Up to 100% of costs</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Typical Cost</p>
                  <p className="text-lg font-bold text-[#0d9488]">$50-$150 per trip</p>
                </div>
              </div>
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

      {/* CTA Section */}
      <section id="get-quote" className="py-16 md:py-20 bg-gradient-to-r from-[#1a365d] to-[#0f1f3a] text-white">
        <PageWrapper>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Get Travel Insurance Before Your Next Trip
            </h2>
            <p className="text-lg text-gray-100 mb-10 text-center">
              Instant quotes and online purchase. Protect your health and investment with comprehensive travel coverage.
            </p>
            <div className="bg-white rounded-lg p-8">
              <ContactForm defaultProduct="travel-insurance" />
            </div>
          </div>
        </PageWrapper>
      </section>
    </main>
  );
}
