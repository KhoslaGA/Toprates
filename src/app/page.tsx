import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import ValueProps from '@/components/home/ValueProps';
import ProductCards from '@/components/home/ProductCards';
import Testimonials from '@/components/home/Testimonials';

export const metadata = {
  title: 'TopRates.ca — Compare Insurance, Mortgage & Credit Card Rates in Canada',
  description: 'Compare insurance, mortgage rates, credit cards, and investment products from top Canadian providers. Find the best rates for auto, home, life, mortgages, credit cards, GICs, HISAs, and more.',
};

export default function Home() {
  return (
    <main
      style={{
        width: '100%',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=DM+Sans:wght@400;500;700&display=swap');
      `}</style>
      <Hero />
      <TrustBar />
      <ValueProps />
      <ProductCards />
      <Testimonials />
    </main>
  );
}
