import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compare Canadian Mortgage Rates | TopRates.ca',
  description: 'Find and compare the best mortgage rates across Canada. Get instant quotes, use our mortgage calculators, and connect with trusted brokers.',
  keywords: 'mortgage rates Canada, best mortgage rates, mortgage comparison, mortgage calculator, home loan rates',
};

export default function MortgagesPage() {
  const sampleRates = [
    { term: '6 months', fixedRate: '4.84%', variableRate: '5.45%', lender: 'RBC' },
    { term: '1 year', fixedRate: '4.79%', variableRate: '5.45%', lender: 'TD' },
    { term: '2 year', fixedRate: '4.69%', variableRate: '5.45%', lender: 'Scotiabank' },
    { term: '3 year', fixedRate: '4.59%', variableRate: '5.20%', lender: 'BMO' },
    { term: '4 year', fixedRate: '4.54%', variableRate: '5.15%', lender: 'CIBC' },
    { term: '5 year', fixedRate: '4.49%', variableRate: '5.00%', lender: 'National Bank' },
  ];

  const calculators = [
    { name: 'Mortgage Payment', description: 'Calculate your monthly payment' },
    { name: 'Affordability', description: 'See how much you can borrow' },
    { name: 'CMHC Insurance', description: 'Estimate your insurance costs' },
    { name: 'Land Transfer Tax', description: 'Calculate provincial taxes' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Compare Canadian Mortgage Rates
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Compare mortgage rates from multiple Canadian lenders. Get multiple quotes and compare terms before you commit.
          </p>
          <button className="bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Get Your Quote
          </button>
        </div>
      </section>

      {/* Current Rates Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-[#1B2A4A]">Current Mortgage Rates</h2>
          <p className="text-gray-600 mb-8">Updated today. Rates are for insured mortgages in most provinces.</p>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1B2A4A] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Term</th>
                    <th className="px-6 py-4 text-left font-semibold">Fixed Rate</th>
                    <th className="px-6 py-4 text-left font-semibold">Variable Rate</th>
                    <th className="px-6 py-4 text-left font-semibold">Top Lender</th>
                    <th className="px-6 py-4 text-left font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleRates.map((rate, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-medium text-[#1B2A4A]">{rate.term}</td>
                      <td className="px-6 py-4 text-[#00B482] font-semibold">{rate.fixedRate}</td>
                      <td className="px-6 py-4 text-gray-700">{rate.variableRate}</td>
                      <td className="px-6 py-4 text-gray-700">{rate.lender}</td>
                      <td className="px-6 py-4">
                        <button className="text-[#00B482] hover:underline font-semibold">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">Rates subject to qualification and may vary based on location and down payment.</p>
        </div>
      </section>

      {/* Mortgage Calculators */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1B2A4A]">Mortgage Calculators</h2>
          <p className="text-gray-600 mb-12">Use our free tools to understand your mortgage better.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {calculators.map((calc, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-[#00B482] rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-[#1B2A4A] mb-2">{calc.name}</h3>
                <p className="text-gray-600 mb-4">{calc.description}</p>
                <Link
                  href="#"
                  className="inline-block bg-[#00B482] hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded transition"
                >
                  Try Calculator
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-r from-[#f59e0b]/10 to-[#00B482]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-[#1B2A4A]">How TopRates Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Tell Us Your Details', desc: 'Share your home price, down payment, and location.' },
              { step: '2', title: 'We Get Quotes', desc: 'We connect you with top Canadian lenders instantly.' },
              { step: '3', title: 'Compare Rates', desc: 'See side-by-side comparison of all available offers.' },
              { step: '4', title: 'Compare and Choose', desc: 'Compare rates from multiple lenders through your broker.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#00B482] text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-[#1B2A4A] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage Broker CTA */}
      <section className="py-16 bg-[#1B2A4A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to compare mortgage rates?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Connect with a licensed mortgage broker who&rsquo;ll guide you through the process and help you compare options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Connect with Broker
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-[#1B2A4A] transition">
              Learn More
            </button>
          </div>

          {/* MBLAA-compliant referral disclosure */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-8 text-sm text-gray-200 max-w-3xl mx-auto text-left">
            <strong className="text-white">Referral disclosure:</strong> TopRates.ca (operated by
            Webhub4u Inc.) is not a registered mortgage brokerage. Mortgage referrals on this site
            are made under Ontario&rsquo;s Mortgage Brokerages, Lenders and Administrators Act
            (MBLAA) referral arrangement exemption, to a registered mortgage brokerage partner.
            Webhub4u Inc. may receive a per-referral fee. We do not provide mortgage advice.
            Choice of mortgage broker and product is yours.
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-[#1B2A4A]">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is the difference between fixed and variable rates?',
                a: 'Fixed rates remain the same throughout your mortgage term, while variable rates fluctuate with the prime rate, potentially saving you money but with monthly payment uncertainty.',
              },
              {
                q: 'What down payment do I need?',
                a: 'Canada allows down payments as low as 5% for properties under $500,000. Higher down payments (20%+) avoid mortgage insurance costs.',
              },
              {
                q: 'How long does mortgage approval take?',
                a: 'Most mortgages are approved within 3-7 business days, though some lenders can provide approval in 24 hours.',
              },
              {
                q: 'Can I break my mortgage early?',
                a: 'Yes, but you may face a penalty. Penalties vary based on your contract terms and whether rates have changed.',
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
    </main>
  );
}
