import { Metadata } from 'next';
import Link from 'next/link';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';

export const metadata: Metadata = {
  title: 'Compare Credit Cards in Canada | TopRates.ca',
  description: 'Compare Canadian credit cards by category — cash back, travel rewards, no annual fee, low interest. Educational content; full card comparison launching summer 2027.',
  keywords: 'credit cards Canada, credit card comparison, cash back cards, travel rewards cards, no annual fee',
};

export default function CreditCardsPage() {
  const categories = [
    { name: 'Cash Back', icon: '💰', description: 'Earn rewards on every purchase' },
    { name: 'Travel Rewards', icon: '✈️', description: 'Points for flights and hotels' },
    { name: 'No Annual Fee', icon: '💳', description: 'Zero yearly cost cards' },
    { name: 'Low Interest', icon: '📉', description: 'Lower interest rates' },
    { name: 'Student Cards', icon: '🎓', description: 'Built for students' },
    { name: 'Business Cards', icon: '💼', description: 'For your business' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Compare credit cards in Canada
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Browse Canadian credit cards by category — cash back, travel rewards, no annual fee, low interest. Educational content; full comparison and applications launching summer 2027.
          </p>
          <Link
            href="/coming-soon"
            className="inline-block bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Join the waitlist
          </Link>
        </div>
      </section>

      {/* AFFILIATE DISCLOSURE — strategy-doc DisclaimerBlock, full-bleed amber */}
      <DisclaimerBlock vertical="cards" />

      {/* Category Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1B2A4A]">Find Your Perfect Card</h2>
          <p className="text-gray-600 mb-12">Browse by category to find cards tailored to your needs.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={`/credit-cards/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition hover:border-[#00B482] border-2 border-transparent cursor-pointer group"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-bold text-[#1B2A4A] mb-2 group-hover:text-[#00B482]">
                  {cat.name}
                </h3>
                <p className="text-gray-600">{cat.description}</p>
                <div className="text-[#00B482] font-semibold mt-4">Browse Cards →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cards — current placeholder */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#1B2A4A]">Featured cards coming at launch</h2>
          <p className="text-gray-600 mb-8">
            We&rsquo;re working with Canadian credit-card issuers (banks and fintechs) to bring you a
            transparent, methodology-driven comparison at launch in summer 2027. We won&rsquo;t show
            placeholder card names or made-up offers in the meantime — when real cards appear here,
            they will be real cards with real terms, properly disclosed under our methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/coming-soon"
              className="inline-block bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Join the waitlist
            </Link>
            <Link
              href="/credit-cards/methodology"
              className="inline-block bg-white border-2 border-[#1B2A4A] hover:bg-gray-50 text-[#1B2A4A] font-bold py-3 px-8 rounded-lg transition"
            >
              How we&rsquo;ll evaluate cards
            </Link>
          </div>
        </div>
      </section>

      {/* Rewards Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-[#1B2A4A]">How Rewards Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cash Back Cards',
                desc: 'Get real cash back on purchases',
                example: 'Spend $1,000 = $30-40 cash back',
                color: 'emerald',
              },
              {
                title: 'Points Cards',
                desc: 'Accumulate points for travel & merchandise',
                example: 'Spend $1,000 = 1,000-2,000 points',
                color: 'blue',
              },
              {
                title: 'Travel Cards',
                desc: 'Earn airline miles & travel credits',
                example: 'Spend $1,000 = 2,000-3,000 miles',
                color: 'amber',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-[#1B2A4A] mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.desc}</p>
                <div className={`bg-${item.color}-50 border-l-4 border-${item.color}-400 p-4`}>
                  <p className="font-semibold text-gray-800">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1B2A4A]">Compare All Cards</h2>
          <p className="text-gray-600 mb-8">
            Use our advanced comparison tool to see side-by-side features, fees, and rewards.
          </p>

          <div className="bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] rounded-lg shadow-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Find Your Ideal Card?</h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Answer a few quick questions about your spending habits and we'll recommend the perfect credit cards for you.
            </p>
            <button className="bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Start Comparison Quiz
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-[#1B2A4A]">Credit Card Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'How do I choose the right credit card?',
                a: 'Consider your spending habits. If you spend more on groceries, a cash back card is best. If you travel frequently, look for travel rewards. Our quiz helps you find the perfect match.',
              },
              {
                q: 'Do I need excellent credit to get approved?',
                a: 'No. We have cards for all credit levels—excellent, good, fair, and even building credit. Check the requirements for each card.',
              },
              {
                q: 'What\'s the difference between points and cash back?',
                a: 'Cash back is real money back (usually 1-4%). Points vary in value and are often best used for travel (1-2 cents per point).',
              },
              {
                q: 'Can I have multiple credit cards?',
                a: 'Yes! Many Canadians carry multiple cards to maximize rewards across different categories. Just manage them responsibly.',
              },
              {
                q: 'Is there a fee to apply?',
                a: 'No, it\'s always free to apply for a credit card. Annual fees are listed on each card—many offer no annual fee options.',
              },
            ].map((item, index) => (
              <details key={index} className="bg-white rounded-lg shadow-sm p-6 cursor-pointer">
                <summary className="font-bold text-[#1B2A4A] text-lg hover:text-[#00B482]">
                  {item.q}
                </summary>
                <p className="text-gray-600 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-[#1B2A4A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Compare, Apply, and Get Rewards
          </h2>
          <p className="text-gray-300 mb-6">
            TopRates makes it easy to find and apply for the best credit cards in Canada.
          </p>
          <button className="bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition">
            View All Cards
          </button>
        </div>
      </section>
    </main>
  );
}
