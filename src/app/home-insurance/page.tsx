import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import ContactForm from '@/components/shared/ContactForm';
import FaqAccordion from '@/components/shared/FaqAccordion';

export const metadata = {
  title: 'Home Insurance | Toprates.ca - Compare Property Insurance Rates',
  description: 'Protect your home with comprehensive insurance. Compare dwelling, contents, and liability coverage across Canada. Get affordable home insurance quotes today.',
  keywords: 'home insurance, homeowners insurance, property insurance, dwelling coverage, contents coverage, liability, Canada',
  openGraph: {
    title: 'Home Insurance | Toprates.ca',
    description: 'Compare home insurance rates across Canada',
  },
};

const coverageFeatures = [
  {
    title: 'Dwelling Coverage',
    description: 'Protects the structure of your home including walls, roof, windows, and built-in appliances against fire, theft, storms, and other covered perils.',
    icon: '🏠',
  },
  {
    title: 'Contents Coverage',
    description: 'Covers your personal belongings like furniture, clothing, electronics, and valuables if they\'re damaged, stolen, or destroyed.',
    icon: '📦',
  },
  {
    title: 'Liability Protection',
    description: 'Covers legal liability if someone is injured on your property or you accidentally damage someone else\'s property.',
    icon: '⚖️',
  },
  {
    title: 'Additional Living Expenses',
    description: 'Reimburses temporary housing and living costs if your home becomes uninhabitable due to a covered loss.',
    icon: '🏨',
  },
];

const whyChooseToprates = [
  'Expert advisors help identify gaps in coverage specific to your home',
  'Fast quotes from leading Canadian insurers - compare rates instantly',
  'Special rates for newly constructed homes, renovated properties, and older houses',
  'Bundling options available when combining with auto insurance',
];

const faqItems = [
  {
    question: 'What does home insurance typically cover?',
    answer: 'Standard home insurance covers the structure (dwelling), your belongings (contents), and liability protection. Most policies cover fire, theft, vandalism, wind, hail, and lightning. Each policy has exclusions - floods and earthquakes typically require separate coverage.',
  },
  {
    question: 'What\'s the difference between actual cash value and replacement cost?',
    answer: 'Actual cash value pays based on the item\'s age and condition (depreciated value). Replacement cost covers the full cost to replace items at current prices. Replacement cost is generally more expensive but offers better protection.',
  },
  {
    question: 'Do I need flood insurance?',
    answer: 'Standard home insurance doesn\'t cover flooding. If your property is in a flood-prone area, you can purchase separate overland flood insurance. This is especially important for basements and properties near rivers or in low-lying areas.',
  },
  {
    question: 'How much coverage do I need?',
    answer: 'Dwelling coverage should match the replacement cost of your home (not just the land value). Contents coverage should reflect your personal belongings. Liability coverage of $2-3 million is typically recommended. Our advisors can help calculate appropriate amounts.',
  },
];

export default function HomeInsurancePage() {

  return (
    <main className="w-full">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#1a365d] to-[#0f1f3a] text-white py-16 md:py-24">
        <PageWrapper>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protect Your Home With Comprehensive Coverage
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              From coast to coast, find the right home insurance policy at the best price. Coverage for dwelling, contents, and liability.
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
            Coverage Options Available
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
                Why Toprates for Home Insurance?
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
                Quick Coverage Guide
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">Essential</p>
                  <p className="text-lg font-bold text-[#1a365d]">Dwelling + Liability</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">Recommended</p>
                  <p className="text-lg font-bold text-[#1a365d]">Add Contents Coverage</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Optional</p>
                  <p className="text-lg font-bold text-[#0d9488]">Flood + Earthquake Insurance</p>
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
              Secure Your Home Today
            </h2>
            <p className="text-lg text-gray-100 mb-10 text-center">
              Get personalized home insurance quotes from Canada\'s leading providers in minutes.
            </p>
            <ContactForm className="bg-white rounded-lg p-8" />
          </div>
        </PageWrapper>
      </section>
    </main>
  );
}
