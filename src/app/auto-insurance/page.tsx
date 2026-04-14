import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import ContactForm from '@/components/shared/ContactForm';
import FaqAccordion from '@/components/shared/FaqAccordion';

export const metadata = {
  title: 'Auto Insurance | Toprates.ca - Compare Car Insurance Rates',
  description: 'Find affordable auto insurance in Canada. Compare liability, collision, and comprehensive coverage. Get quotes for Ontario, Alberta, BC and more.',
  keywords: 'auto insurance, car insurance, vehicle insurance, liability coverage, collision coverage, comprehensive coverage, Canada',
  openGraph: {
    title: 'Auto Insurance | Toprates.ca',
    description: 'Compare auto insurance rates across Canada',
  },
};

const coverageFeatures = [
  {
    title: 'Liability Coverage',
    description: 'Protection against third-party bodily injury and property damage claims. Required by law in all provinces.',
    icon: '⚖️',
  },
  {
    title: 'Collision Coverage',
    description: 'Covers damage to your vehicle from accidents with other vehicles or objects, minus your deductible.',
    icon: '🚗',
  },
  {
    title: 'Comprehensive Coverage',
    description: 'Protection against theft, vandalism, weather damage, and other non-collision incidents.',
    icon: '🛡️',
  },
  {
    title: 'Additional Options',
    description: 'Optional add-ons like uninsured motorist protection, rental car reimbursement, and roadside assistance.',
    icon: '⚙️',
  },
];

const whyChooseToprates = [
  'Get quotes from multiple insurers in minutes - save time and money',
  'Licensed brokers provide expert guidance tailored to your driving profile',
  'Competitive rates across Canada - Ontario, Alberta, BC, and beyond',
  'Understanding of provincial insurance regulations ensures compliance',
];

const faqItems = [
  {
    question: 'What factors affect my auto insurance rates in Canada?',
    answer: 'Your rates are determined by driving history, age, vehicle type, coverage limits, annual mileage, and location. In Ontario, insurers also consider previous claims and accidents. Alberta and BC have different rate structures but also assess risk similarly.',
  },
  {
    question: 'What\'s the difference between liability, collision, and comprehensive coverage?',
    answer: 'Liability (required) covers damage you cause to others. Collision covers damage to your vehicle from accidents. Comprehensive covers theft, vandalism, weather, and animal collisions. Most provinces require liability; collision and comprehensive are optional but recommended for financed vehicles.',
  },
  {
    question: 'How can I lower my auto insurance costs?',
    answer: 'Maintain a clean driving record, bundle home and auto policies, increase your deductible, take approved driving courses, and review coverage annually. Some insurers offer discounts for low mileage, vehicle safety features, or loyalty.',
  },
  {
    question: 'Is auto insurance mandatory across Canada?',
    answer: 'Yes, minimum liability insurance is legally required in all provinces. Amounts vary by province - Ontario typically requires $200,000 in third-party liability. If your vehicle is financed, your lender will require comprehensive and collision coverage.',
  },
];

export default function AutoInsurancePage() {

  return (
    <main className="w-full">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#1a365d] to-[#0f1f3a] text-white py-16 md:py-24">
        <PageWrapper>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Affordable Auto Insurance Across Canada
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Get the right coverage at the best rates. Compare quotes from top insurers and protect your vehicle today.
            </p>
            <Button variant="accent" size="lg" href="#get-quote">
              Get Your Free Quote
            </Button>
          </div>
        </PageWrapper>
      </section>

      {/* Coverage Features */}
      <section className="py-16 md:py-20">
        <PageWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-12 text-center">
            Coverage Types & Features
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
                Why Choose Toprates for Auto Insurance?
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
                Coverage Summary
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">Minimum Required</p>
                  <p className="text-lg font-bold text-[#1a365d]">Liability Coverage</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">Recommended</p>
                  <p className="text-lg font-bold text-[#1a365d]">Collision + Comprehensive</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Average Deductible Range</p>
                  <p className="text-lg font-bold text-[#0d9488]">$300 - $1,000</p>
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
              Ready to Save on Auto Insurance?
            </h2>
            <p className="text-lg text-gray-100 mb-10 text-center">
              Get personalized quotes from multiple insurers. It only takes minutes and costs nothing.
            </p>
            <ContactForm className="bg-white rounded-lg p-8" />
          </div>
        </PageWrapper>
      </section>
    </main>
  );
}
