'use client'

import Link from 'next/link'

const TEAL = '#0A7E8C'
const NAVY = '#1B2A4A'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#f8fafb',
        borderTop: '1px solid #e8ecf0',
        padding: '36px 32px 24px'
      }}
    >
      {/* Main footer content */}
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Logo + description + 4 columns */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginBottom: 24
          }}
        >
          {/* Column 1: Logo + Description */}
          <div style={{ flex: '1 1 28%' }}>
            <div
              style={{
                fontFamily: 'Outfit',
                fontWeight: 900,
                fontSize: 18,
                marginBottom: 8
              }}
            >
              <span style={{ color: TEAL }}>TopRates</span>
              <span style={{ color: NAVY }}>.ca</span>
            </div>
            <p
              style={{
                fontSize: 12,
                color: '#98a2b3',
                margin: 0
              }}
            >
              AI-powered insurance comparison. Powered by Insurimple (RIBO Licensed).
            </p>
          </div>

          {/* Column 2: Insurance */}
          <div style={{ flex: '1 1 17%' }}>
            <h3
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: '#b0b8c4',
                letterSpacing: 1.2,
                textTransform: 'uppercase',
                marginBottom: 8,
                margin: '0 0 8px 0'
              }}
            >
              Insurance
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/car-insurance"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Car Insurance
                </Link>
              </li>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/home-insurance"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Home Insurance
                </Link>
              </li>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/business-insurance"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Business
                </Link>
              </li>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/travel-insurance"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Financial */}
          <div style={{ flex: '1 1 17%' }}>
            <h3
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: '#b0b8c4',
                letterSpacing: 1.2,
                textTransform: 'uppercase',
                marginBottom: 8,
                margin: '0 0 8px 0'
              }}
            >
              Financial
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/mortgage-rates"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Mortgage Rates
                </Link>
              </li>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/credit-cards"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Credit Cards
                </Link>
              </li>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/investing"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Investing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div style={{ flex: '1 1 17%' }}>
            <h3
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: '#b0b8c4',
                letterSpacing: 1.2,
                textTransform: 'uppercase',
                marginBottom: 8,
                margin: '0 0 8px 0'
              }}
            >
              Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/guides"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Guides
                </Link>
              </li>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/blog"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Blog
                </Link>
              </li>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/about"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div style={{ flex: '1 1 17%' }}>
            <h3
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: '#b0b8c4',
                letterSpacing: 1.2,
                textTransform: 'uppercase',
                marginBottom: 8,
                margin: '0 0 8px 0'
              }}
            >
              Legal
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/privacy"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Privacy
                </Link>
              </li>
              <li style={{ marginBottom: 5 }}>
                <Link
                  href="/terms"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Terms
                </Link>
              </li>
              <li style={{ marginBottom: 5 }}>
                <a
                  href="/ribo-disclosure"
                  style={{
                    fontSize: 12,
                    color: '#98a2b3',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  RIBO Disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #e8ecf0',
            paddingTop: 14,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <p
            style={{
              fontSize: 11,
              color: '#b0b8c4',
              margin: 0
            }}
          >
            2026 TopRates.ca. Powered by Insurimple (RIBO Licensed).
          </p>
          <p
            style={{
              fontSize: 11,
              color: '#d0d5db',
              margin: 0
            }}
          >
            Made in Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
