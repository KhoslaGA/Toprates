'use client';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        'I saved $600 per year on auto insurance by comparing quotes on TopRates.ca. The process was straightforward and I found better coverage for less.',
      author: 'Sarah Mitchell',
      location: 'Toronto, ON',
    },
    {
      id: 2,
      quote:
        'Comparing mortgage rates was so much easier than calling banks individually. I locked in a great rate and saved thousands over the life of my mortgage.',
      author: 'James Chen',
      location: 'Vancouver, BC',
    },
    {
      id: 3,
      quote:
        'Found a credit card with 2% cashback on groceries in minutes. TopRates.ca made it easy to compare features and apply directly online.',
      author: 'Michelle Rodriguez',
      location: 'Montreal, QC',
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
      {/* Header with View All link */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '56px',
        }}
      >
        <h2
          style={{
            fontSize: '26px',
            fontFamily: "'Outfit'",
            fontWeight: 800,
            color: '#1B2A4A',
            margin: 0,
            padding: 0,
          }}
        >
          What Canadians are saying
        </h2>
        <a
          href="#"
          style={{
            fontSize: '14px',
            fontFamily: "'DM Sans'",
            fontWeight: 600,
            color: '#0A7E8C',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          View all →
        </a>
      </div>

      {/* Testimonials Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '24px',
        }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            style={{
              border: '1px solid #e8ecf0',
              borderRadius: 10,
              padding: '24px',
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* Quote */}
            <p
              style={{
                fontSize: '14px',
                fontFamily: "'DM Sans'",
                color: '#4a5568',
                lineHeight: '1.6',
                margin: 0,
                padding: 0,
                fontStyle: 'italic',
              }}
            >
              "{testimonial.quote}"
            </p>

            {/* Author info */}
            <div
              style={{
                borderTop: '1px solid #e8ecf0',
                paddingTop: '16px',
              }}
            >
              <p
                style={{
                  fontSize: '14px',
                  fontFamily: "'DM Sans'",
                  fontWeight: 700,
                  color: '#1B2A4A',
                  margin: 0,
                  marginBottom: '4px',
                  padding: 0,
                }}
              >
                {testimonial.author}
              </p>
              <p
                style={{
                  fontSize: '12px',
                  fontFamily: "'DM Sans'",
                  color: '#6b7b8d',
                  margin: 0,
                  padding: 0,
                }}
              >
                {testimonial.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="justifyContent"] {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
