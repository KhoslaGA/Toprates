'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function ProductCards() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const products: Product[] = [
    {
      id: 1,
      icon: '🚗',
      title: 'Car Insurance',
      description: 'Compare auto insurance rates from Canada\'s top providers.',
      href: '/auto-insurance',
    },
    {
      id: 2,
      icon: '🏠',
      title: 'Home Insurance',
      description: 'Find the best home insurance coverage at the right price.',
      href: '/home-insurance',
    },
    {
      id: 3,
      icon: '❤️',
      title: 'Life Insurance',
      description: 'Secure your family\'s future with affordable life insurance.',
      href: '/life-insurance',
    },
    {
      id: 4,
      icon: '🏦',
      title: 'Mortgage Rates',
      description: 'Compare mortgage rates and find your best financing option.',
      href: '/mortgages',
    },
    {
      id: 5,
      icon: '💳',
      title: 'Credit Cards',
      description: 'Find credit cards with rewards and benefits that match you.',
      href: '/credit-cards',
    },
    {
      id: 6,
      icon: '📈',
      title: 'Investing',
      description: 'Compare GICs, HISAs, and investment products for growth.',
      href: '/investing',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '64px 32px',
        maxWidth: '1080px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h2
          style={{
            fontSize: '26px',
            fontFamily: "'Outfit'",
            fontWeight: 800,
            color: '#1B2A4A',
            margin: 0,
            marginBottom: '16px',
            padding: 0,
          }}
        >
          What can you compare?
        </h2>
        <p
          style={{
            fontSize: '15px',
            fontFamily: "'DM Sans'",
            color: '#6b7b8d',
            margin: 0,
            padding: 0,
          }}
        >
          Insurance, mortgages, credit cards, and investments in one place
        </p>
      </div>

      {/* Cards Grid - 2x3 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '24px',
        }}
      >
        {products.map((product) => (
          <Link key={product.id} href={product.href}>
            <div
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                border: `1px solid ${
                  hoveredId === product.id ? '#0A7E8C' : '#e8ecf0'
                }`,
                borderRadius: 10,
                padding: '24px',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                }}
              >
                {product.icon}
              </div>
              <h3
                style={{
                  fontSize: '16px',
                  fontFamily: "'Outfit'",
                  fontWeight: 700,
                  color: '#1B2A4A',
                  margin: 0,
                  padding: 0,
                }}
              >
                {product.title}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  fontFamily: "'DM Sans'",
                  color: '#6b7b8d',
                  lineHeight: '1.5',
                  margin: 0,
                  padding: 0,
                }}
              >
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
