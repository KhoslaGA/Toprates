import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import ContactForm from '@/components/contact/ContactForm';
import FaqAccordion from '@/components/shared/FaqAccordion';

export const metadata = {
  title: 'Life Insurance | Toprates.ca - Term, Whole & Universal Life Coverage',
  description: 'Compare life insurance options in Canada. Get coverage information for term life, whole life, and universal life insurance. Protect your family\'s financial future.',
  keywords: 'life insurance, term life, whole life, universal life, life coverage, beneficiary, Canada',
  openGraph: {
    title: 'Life Insurance | Toprates.ca',
    description: 'Compare life insurance rates across Canada',
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
  'Expert advisors help determine the right coverage amount for your family\'s needs',
  'Quick underwriting process - get approved faster than ever',
  'Access to rates from multiple Canadian life insurance providers',
  'Guidance on beneficiary designation and policy reviews',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protect Your Family's Financial Future
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Compare affordable life insurance options across Canada. Term, whole, and universal life coverage to meet your family's needs.
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
                Why Choose Toprates for Life Insurance?
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
                Coverage Comparison
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">Most Popular</p>
                  <p className="text-lg font-bold text-[#1a365d]">Term Life - 20 Years</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">Average Monthly Cost</p>
                  <p className="text-lg font-bold text-[#0d9488]">$30-$60 for $500K coverage (age 35, healthy)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Recommended Amount</p>
                  <p className="text-lg font-bold text-[#1a365d]">8-10x Annual Income</p>
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
              Get Life Insurance Protection Today
            </h2>
            <p className="text-lg text-gray-100 mb-10 text-center">
              Secure your family's future with affordable life insurance. Get personalized quotes from Canada\'s top providers.
            </p>
            <div className="bg-white rounded-lg p-8">
              <ContactForm defaultProduct="life-insurance" />
            </div>
          </div>
        </PageWrapper>
      </section>
    </main>
  );
}
