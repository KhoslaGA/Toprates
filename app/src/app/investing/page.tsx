import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Investment Rates in Canada | GIC, HISA, Robo-Advisors | TopRates',
  description: 'Compare the best investment rates in Canada. Find top GIC rates, high-interest savings accounts, and robo-advisor options to grow your wealth.',
  keywords: 'GIC rates Canada, HISA rates, robo-advisors, investment rates, high interest savings, guaranteed investment certificates',
};

export default function InvestingPage() {
  const gicRates = [
    { term: '6 months', rate: '4.50%', provider: 'EQ Bank' },
    { term: '1 year', rate: '4.45%', provider: 'Tangerine' },
    { term: '2 year', rate: '4.30%', provider: 'Scotiabank' },
    { term: '3 year', rate: '4.20%', provider: 'TD' },
    { term: '5 year', rate: '4.10%', provider: 'RBC' },
  ];

  const hisaRates = [
    { provider: 'EQ Bank', rate: '5.00%', minDeposit: '$0' },
    { provider: 'Tangerine', rate: '4.85%', minDeposit: '$0' },
    { provider: 'Ally Bank', rate: '4.75%', minDeposit: '$0' },
    { provider: 'CIBC', rate: '4.50%', minDeposit: '$0' },
  ];

  const roboAdvisors = [
    {
      name: 'Wealthsimple',
      fee: '0.40% - 0.70%',
      minInvestment: '$1',
      assets: '$15B+',
      features: ['Socially responsible options', 'Crypto portfolio', 'Tax-loss harvesting'],
    },
    {
      name: 'BMO SmartFolio',
      fee: '0.70%',
      minInvestment: '$500',
      assets: '$5B+',
      features: ['ETF-based portfolios', 'Rebalancing included', 'Low fees'],
    },
    {
      name: 'CI Direct Investing',
      fee: '0.35% - 0.70%',
      minInvestment: '$1,000',
      assets: '$2B+',
      features: ['Goal-based investing', 'Personalized advice', 'ETF portfolios'],
    },
  ];

  const calculators = [
    { name: 'Compound Interest', desc: 'See how your money grows over time' },
    { name: 'RRSP Calculator', desc: 'Maximize your retirement savings' },
    { name: 'TFSA Calculator', desc: 'Plan your tax-free growth' },
    { name: 'Investment Return', desc: 'Calculate potential returns' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Grow Your Money with the Best Investment Rates
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Find top GIC rates, high-interest savings accounts, and robo-advisor solutions to build wealth and reach your financial goals.
          </p>
          <button className="bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Compare Investments
          </button>
        </div>
      </section>

      {/* GIC Rates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-[#1B2A4A]">Guaranteed Investment Certificates (GICs)</h2>
          <p className="text-gray-600 mb-8">
            GICs offer guaranteed returns with no market risk. Lock in your money for a fixed term and watch it grow.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Rates Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#1B2A4A] text-white p-6">
                <h3 className="text-xl font-bold">Current GIC Rates</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-[#1B2A4A]">Term</th>
                      <th className="px-6 py-4 text-left font-semibold text-[#1B2A4A]">Featured Rate</th>
                      <th className="px-6 py-4 text-left font-semibold text-[#1B2A4A]">Provider</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gicRates.map((gic, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 font-medium text-[#1B2A4A]">{gic.term}</td>
                        <td className="px-6 py-4 text-[#00B482] font-bold text-lg">{gic.rate}</td>
                        <td className="px-6 py-4 text-gray-700">{gic.provider}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
                Interest is paid at maturity. CDIC insured up to $100,000.
              </div>
            </div>

            {/* GIC Info Box */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#00B482]/10 to-[#f59e0b]/10 rounded-lg p-6 border-l-4 border-[#00B482]">
                <h3 className="text-lg font-bold text-[#1B2A4A] mb-3">Why Choose a GIC?</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-[#00B482] font-bold">✓</span>
                    <span className="text-gray-700">Guaranteed return - no market risk</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00B482] font-bold">✓</span>
                    <span className="text-gray-700">CDIC protected up to $100,000</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00B482] font-bold">✓</span>
                    <span className="text-gray-700">Flexible terms (6 months to 5 years)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#00B482] font-bold">✓</span>
                    <span className="text-gray-700">Easy to understand</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition">
                View All GIC Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HISA Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-[#1B2A4A]">High-Interest Savings Accounts (HISA)</h2>
          <p className="text-gray-600 mb-8">
            Keep your money accessible while earning competitive interest rates. No term restrictions, withdraw anytime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {hisaRates.map((hisa, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border-l-4 border-[#f59e0b] p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#1B2A4A]">{hisa.provider}</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Current Rate</div>
                    <div className="text-3xl font-bold text-[#f59e0b]">{hisa.rate}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Minimum Deposit: {hisa.minDeposit}</p>
                <button className="w-full bg-[#f59e0b] hover:bg-amber-600 text-white font-semibold py-2 rounded transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#f59e0b]/10 to-[#00B482]/10 rounded-lg p-8">
            <h3 className="text-lg font-bold text-[#1B2A4A] mb-4">HISA vs. Regular Savings Account</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-[#00B482] mb-3">HISA Advantages</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 4.5%+ interest rates</li>
                  <li>• Anytime withdrawal</li>
                  <li>• CDIC protected</li>
                  <li>• No monthly fees</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#1B2A4A] mb-3">Regular Savings Account</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 0.05% - 0.10% interest</li>
                  <li>• Anytime withdrawal</li>
                  <li>• CDIC protected</li>
                  <li>• Monthly service fees</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Robo-Advisors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2 text-[#1B2A4A]">Robo-Advisor Platforms</h2>
          <p className="text-gray-600 mb-12">
            Automated investing with professional portfolio management. Perfect for hands-off investors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roboAdvisors.map((robo, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] text-white p-6">
                  <h3 className="text-2xl font-bold">{robo.name}</h3>
                </div>
                <div className="p-6">
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <div className="text-sm text-gray-600">Management Fee</div>
                      <p className="font-bold text-[#1B2A4A]">{robo.fee}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Min Investment</div>
                      <p className="font-bold text-[#1B2A4A]">{robo.minInvestment}</p>
                    </div>
                    <div className="col-span-2">
                      <div className="text-sm text-gray-600">Assets Under Management</div>
                      <p className="font-bold text-[#1B2A4A]">{robo.assets}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-[#1B2A4A] mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {robo.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <span className="text-[#00B482]">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-2 rounded transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">How Robo-Advisors Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Take Quiz', desc: 'Answer questions about your goals and risk tolerance' },
                { step: '2', title: 'Get Portfolio', desc: 'Receive a personalized ETF-based portfolio' },
                { step: '3', title: 'Automated Investing', desc: 'Your portfolio is automatically rebalanced' },
                { step: '4', title: 'Grow Wealth', desc: 'Monitor your progress and watch it grow' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-10 h-10 bg-[#00B482] rounded-full flex items-center justify-center font-bold mb-3 mx-auto">
                    {item.step}
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Calculators */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1B2A4A]">Free Investment Calculators</h2>
          <p className="text-gray-600 mb-12">Plan your investments with our powerful tools.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {calculators.map((calc, index) => (
              <div key={index} className="bg-gradient-to-br from-[#00B482]/5 to-[#f59e0b]/5 border border-gray-200 rounded-lg p-6 hover:border-[#00B482] transition">
                <h3 className="text-xl font-bold text-[#1B2A4A] mb-2">{calc.name}</h3>
                <p className="text-gray-600 mb-4">{calc.desc}</p>
                <Link
                  href="#"
                  className="inline-block bg-[#00B482] hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded transition"
                >
                  Open Calculator
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RRSP & TFSA Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-[#1B2A4A]">Canadian Tax-Advantaged Accounts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* RRSP */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B2A4A] mb-4">RRSP (Registered Retirement Savings Plan)</h3>
              <p className="text-gray-700 mb-6">
                Save for retirement with tax deductions. Your contributions are tax-deductible and growth is tax-free until withdrawal.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-[#00B482] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Contribution limit:</strong> 18% of previous year income (max $31,560 for 2024)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00B482] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Tax benefit:</strong> Immediate tax deduction</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00B482] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Growth:</strong> Tax-free compound growth</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#00B482] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Withdrawal:</strong> Taxed as income when withdrawn</span>
                </li>
              </ul>
              <button className="w-full bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-2 rounded transition">
                Find RRSP Options
              </button>
            </div>

            {/* TFSA */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B2A4A] mb-4">TFSA (Tax-Free Savings Account)</h3>
              <p className="text-gray-700 mb-6">
                Save for any goal without taxes. Contributions aren't deductible, but all growth is completely tax-free.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-[#f59e0b] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Contribution limit:</strong> $6,500/year (2023-2024)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#f59e0b] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Tax benefit:</strong> No tax on growth or withdrawals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#f59e0b] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Flexibility:</strong> Withdraw anytime penalty-free</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#f59e0b] font-bold">✓</span>
                  <span className="text-gray-700"><strong>Any goal:</strong> Down payment, vacation, emergencies</span>
                </li>
              </ul>
              <button className="w-full bg-[#f59e0b] hover:bg-amber-600 text-white font-bold py-2 rounded transition">
                Find TFSA Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-[#1B2A4A]">Investment Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'What\'s the best investment for beginners?',
                a: 'Start with a TFSA and a robo-advisor. They require minimal investment ($1-500), are fully automated, and charge low fees (0.3-0.7%). Perfect for learning while you build wealth.',
              },
              {
                q: 'Should I choose GIC, HISA, or stocks?',
                a: 'GICs offer guaranteed returns with no risk (best for short-term goals). HISAs are flexible with good rates (best for emergency funds). Stocks offer higher growth potential (best for long-term, 10+ years).',
              },
              {
                q: 'How much should I invest monthly?',
                a: 'Start with what you can afford—even $50/month compounds significantly over time. Increase as your income grows. Consistency matters more than amount.',
              },
              {
                q: 'Is it too late to start investing?',
                a: 'No. Whether you\'re 25 or 55, the best time to start is today. Even a few years of compound growth adds up significantly.',
              },
              {
                q: 'What\'s the difference between GIC and HISA interest rates?',
                a: 'GIC rates are typically 0.2-0.5% higher, but your money is locked in. HISA rates are slightly lower, but you can withdraw anytime. Choose based on your liquidity needs.',
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
      <section className="py-16 bg-gradient-to-r from-[#1B2A4A] to-[#2d3f5a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Your Wealth?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Compare rates, choose the right investment, and start your journey to financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#00B482] hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Compare All Options
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-[#1B2A4A] transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
