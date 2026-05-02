import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'
import SiteHeader from '../components/layout/SiteHeader'
import Footer from '../components/layout/Footer'

const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
const PLAUSIBLE_SRC =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? 'https://plausible.io/js/script.js'

export const metadata: Metadata = {
  metadataBase: new URL('https://toprates.ca'),
  title: 'TopRates.ca — Insurance, in plain English',
  description:
    'Independent insurance education for Canadians. Plain-English guides on auto, home, life, business, and travel insurance. Education today. Quotes summer 2027. Operated by Webhub4u Inc.',
  keywords:
    'insurance, auto insurance, home insurance, life insurance, mortgage rates, credit cards, Canadian insurance broker, Ontario auto reform',
  authors: [{ name: 'TopRates.ca' }],
  creator: 'TopRates.ca',
  openGraph: {
    title: 'TopRates.ca — Insurance, in plain English',
    description: 'Independent insurance education for Canadians. Education today. Quotes summer 2027.',
    type: 'website',
  },
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  ...(GOOGLE_VERIFICATION && {
    verification: { google: GOOGLE_VERIFICATION },
  }),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" title="TopRates.ca RSS" href="/rss.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=JetBrains+Mono:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={PLAUSIBLE_DOMAIN}
            src={PLAUSIBLE_SRC}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
