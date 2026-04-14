'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TEAL = '#0A7E8C'
const NAVY = '#1B2A4A'

const navItems = [
  { label: 'Car Insurance', href: '/auto-insurance' },
  { label: 'Home Insurance', href: '/home-insurance' },
  { label: 'Mortgage Rates', href: '/mortgage-rates' },
  { label: 'Credit Cards', href: '/credit-cards' },
  { label: 'Investing', href: '/investing' },
  { label: 'Guides', href: '/guides' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)

  useEffect(() => {
    const active = navItems.find(item => item.href === pathname)
    setActiveLink(active?.href || null)
  }, [pathname])

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #e8ecf0',
        }}
      >
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <div
            style={{
              maxWidth: 1080,
              margin: '0 auto',
              padding: '0 32px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 56,
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: 'flex',
                gap: 0,
                textDecoration: 'none',
                minWidth: 'fit-content',
              }}
            >
              <span
                style={{
                  fontFamily: "'Outfit'",
                  fontWeight: 900,
                  fontSize: 21,
                  color: TEAL,
                }}
              >
                TopRates
              </span>
              <span
                style={{
                  fontFamily: "'Outfit'",
                  fontWeight: 900,
                  fontSize: 21,
                  color: NAVY,
                }}
              >
                .ca
              </span>
            </Link>

            {/* Nav Links */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 0,
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    padding: '0 16px',
                    color: NAVY,
                    fontWeight: 500,
                    fontSize: 13,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    height: 56,
                    borderBottom:
                      activeLink === item.href ? `2px solid ${TEAL}` : 'none',
                    paddingBottom:
                      activeLink === item.href ? 0 : 0,
                    transition: 'border-color 0.2s',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              href="/get-quotes"
              style={{
                background: TEAL,
                color: '#fff',
                borderRadius: 8,
                padding: '8px 18px',
                fontSize: 13,
                fontWeight: 700,
                fontFamily: "'DM Sans'",
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
              }}
            >
              Get Quotes
            </Link>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="mobile-nav">
          <div
            style={{
              padding: '0 16px',
              height: 56,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'flex',
                gap: 0,
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  fontFamily: "'Outfit'",
                  fontWeight: 900,
                  fontSize: 18,
                  color: TEAL,
                }}
              >
                TopRates
              </span>
              <span
                style={{
                  fontFamily: "'Outfit'",
                  fontWeight: 900,
                  fontSize: 18,
                  color: NAVY,
                }}
              >
                .ca
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                padding: '8px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: NAVY,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div
              style={{
                borderTop: '1px solid #e8ecf0',
                padding: '16px 0',
                backgroundColor: 'white',
                maxHeight: 'calc(100vh - 56px)',
                overflowY: 'auto',
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    color: NAVY,
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 13,
                    borderBottom:
                      activeLink === item.href ? `2px solid ${TEAL}` : 'none',
                  }}
                >
                  {item.label}
                </Link>
              ))}

              <div style={{ padding: '16px' }}>
                <Link
                  href="/get-quotes"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '8px 18px',
                    background: TEAL,
                    color: 'white',
                    fontWeight: 700,
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontSize: 13,
                    fontFamily: "'DM Sans'",
                  }}
                >
                  Get Quotes
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
