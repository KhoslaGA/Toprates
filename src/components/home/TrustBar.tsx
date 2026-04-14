'use client';

export default function TrustBar() {
  const items = [
    {
      icon: '50+',
      label: 'Providers',
    },
    {
      icon: '✓',
      label: 'RIBO Licensed',
    },
    {
      icon: '$',
      label: '100% Free',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e8ecf0',
        borderBottom: '1px solid #e8ecf0',
        padding: '32px 32px',
        maxWidth: '1080px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px',
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                fontSize: '28px',
                fontFamily: "'Outfit'",
                fontWeight: 800,
                color: '#0A7E8C',
                lineHeight: '1',
                minWidth: '40px',
              }}
            >
              {item.icon}
            </div>
            <div
              style={{
                fontSize: '15px',
                fontFamily: "'DM Sans'",
                fontWeight: 600,
                color: '#1B2A4A',
                lineHeight: '1.3',
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
