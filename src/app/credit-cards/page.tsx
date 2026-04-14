import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Find the Best Credit Card for You | TopRates Canada',
  description: 'Compare the best credit cards in Canada. Find cash back, travel rewards, no annual fee, and low interest cards that match your lifestyle.',
  keywords: 'best credit cards Canada, credit card comparison, cash back cards, travel rewards cards, no annual fee',
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

  const featuredCards = [
    {
      name: 'TopRates Cash Back Plus',
      issuer: 'Major Canadian Bank',
      benefit: 'Up to 4% cash back',
      annualFee: 'Free',
      bestFor: 'Everyday spending',
      highlights: ['4% groceries', '3% gas', '1.5% other purchases'],
    },
    {
      name: 'Maple Rewards Elite',
      issuer: 'Major Canadian Bank',
      benefit: '2x points on travel',
      annualFee: '$120',
      bestFor: 'Frequent travelers',
      highlights: ['Double points on flights', 'Travel insurance', 'Airport lounge access'],
    },
    {
      name: 'SimpleLiving Card',
      issuer: 'Canadian Fintech',
      benefit: 'No fees, no catch',
      annualFee: 'Free',
      bestFor: 'Budget-conscious',
      highlights: ['No annual fee', 'No foreign fees', 'Simple rewards'],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find the Best Credit Card for You
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Compare hundreds of Canadian credit cards by rewards, fees, and benefits. Find the card that matches your lifestyle and maximizes your value.
          </p>
          <button className="bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Compare Cards
          </button>
        </div>
      </section>

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

      {/* Featured Cards Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1B2A4A]">Top Featured Cards</h2>
          <p className="text-gray-600 mb-12">Our top picks based on Canadian consumer preferences.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCards.map((card, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] text-white p-6">
                  <h3 className="text-xl font-bold mb-1">{card.name}</h3>
                  <p className="text-sm text-gray-300">{card.issuer}</p>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Main Benefit */}
                  <div className="mb-6">
                    <div className="text-[#00B482] font-bold text-lg mb-1">Main Benefit</div>
                    <p className="text-2xl font-bold text-[#1B2A4A]">{card.benefit}</p>
                  </div>

                  {/* Annual Fee */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <div className="text-sm text-gray-600">Annual Fee</div>
                    <p className="text-xl font-bold text-[#00B482]">{card.annualFee}</p>
                  </div>

                  {/* Best For */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Best For</div>
                    <p className="text-gray-700">{card.bestFor}</p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-700 mb-3">Key Features</div>
                    <ul className="space-y-2">
                      {card.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-[#00B482] font-bold mt-0.5">✓</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
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
