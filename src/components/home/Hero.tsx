'use client';

import { useState } from 'react';

type ProductCategory = 'car' | 'home' | 'mortgage' | 'credit' | 'life' | 'investing';

interface Category {
  id: ProductCategory;
  label: string;
}

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('car');
  const [postalCode, setPostalCode] = useState('');

  const categories: Category[] = [
    { id: 'car', label: 'Car Insurance' },
    { id: 'home', label: 'Home Insurance' },
    { id: 'mortgage', label: 'Mortgage Rates' },
    { id: 'credit', label: 'Credit Cards' },
    { id: 'life', label: 'Life Insurance' },
    { id: 'investing', label: 'Investing' },
  ];

  const stats = [
    { label: 'Providers compared', value: '50+', sub: 'across Canada' },
    { label: 'Average savings', value: '32%', sub: 'on insurance' },
    { label: 'Quotes generated', value: '10K+', sub: 'and counting' },
  ];

  const handleGetStarted = () => {
    if (postalCode.trim()) {
      window.location.href = `/quote?postalCode=${encodeURIComponent(postalCode)}&category=${selectedCategory}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleGetStarted();
    }
  };

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '64px 32px 72px',
        maxWidth: '1080px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Headline */}
          <h1
            style={{
              fontSize: '38px',
              fontWeight: 800,
              fontFamily: "'Outfit'",
              color: '#1B2A4A',
              lineHeight: '1.3',
              margin: 0,
              padding: 0,
            }}
          >
            Compare the best{' '}
            <span style={{ color: '#0A7E8C' }}>rates</span> in Canada
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '17px',
              fontFamily: "'DM Sans'",
              color: 'rgba(107, 123, 141, 0.9)',
              lineHeight: '1.6',
              margin: 0,
              padding: 0,
            }}
          >
            Get quotes for insurance, mortgages, credit cards, and investments from 50+ Canadian providers—free, fast, and in minutes.
          </p>

          {/* Category Pills */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '8px',
            }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0A7E8C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    selectedCategory === category.id ? '#0A7E8C' : '#e8ecf0';
                }}
                style={{
                  padding: '10px 18px',
                  fontFamily: "'DM Sans'",
                  fontSize: '14px',
                  fontWeight: 500,
                  color:
                    selectedCategory === category.id ? 'white' : '#6b7b8d',
                  backgroundColor:
                    selectedCategory === category.id
                      ? 'rgba(10, 126, 140, 0.1)'
                      : 'transparent',
                  border: `1.5px solid ${
                    selectedCategory === category.id ? '#0A7E8C' : '#e8ecf0'
                  }`,
                  borderRadius: '22px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Input & Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                backgroundColor: 'white',
                border: '1px solid #e8ecf0',
                borderRadius: '10px',
                padding: '12px',
              }}
            >
              <input
                type="text"
                placeholder="Postal code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                onKeyPress={handleKeyPress}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: "'DM Sans'",
                  outline: 'none',
                  backgroundColor: '#f8fafb',
                  color: '#1B2A4A',
                }}
              />
              <button
                onClick={handleGetStarted}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#065f6f';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A7E8C';
                }}
                style={{
                  padding: '12px 28px',
                  backgroundColor: '#0A7E8C',
                  color: 'white',
                  fontFamily: "'DM Sans'",
                  fontSize: '14px',
                  fontWeight: 700,
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  fontSize: '13px',
                  fontFamily: "'DM Sans'",
                  fontWeight: 500,
                  color: '#6b7b8d',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '48px',
                  fontFamily: "'Outfit'",
                  fontWeight: 900,
                  color: '#0A7E8C',
                  lineHeight: '1',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontFamily: "'DM Sans'",
                  color: '#6b7b8d',
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile responsiveness */}
      <style>{`
        @media (max-width: 900px) {
          section {
            padding: 48px 24px 56px !important;
          }
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
