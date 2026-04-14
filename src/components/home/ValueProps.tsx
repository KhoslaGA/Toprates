export default function ValueProps() {
  const props = [
    {
      id: 1,
      icon: '1.',
      title: 'Tell us what you need',
      description: 'Choose a product category and enter your postal code to get started.',
    },
    {
      id: 2,
      icon: '2.',
      title: 'Compare real quotes',
      description: 'See side-by-side quotes from the top Canadian providers in your area.',
    },
    {
      id: 3,
      icon: '3.',
      title: 'Save & get covered',
      description: 'Pick the best option and apply directly with your preferred provider.',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#f8fafb',
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
          How TopRates.ca works
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
          Three simple steps to find the best rates in Canada
        </p>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '24px',
        }}
      >
        {props.map((prop) => (
          <div
            key={prop.id}
            style={{
              border: '1px solid #e8ecf0',
              borderRadius: 10,
              padding: '22px 24px',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <div
              style={{
                fontSize: '24px',
                fontFamily: "'Outfit'",
                fontWeight: 700,
                color: '#0A7E8C',
              }}
            >
              {prop.icon}
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
              {prop.title}
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
              {prop.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
