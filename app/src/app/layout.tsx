import type { Metadata } from 'next'
import Script from 'next/script'
import { Source_Serif_4, Inter, Newsreader } from 'next/font/google'
import '../styles/globals.css'
import MegaNav from '../components/layout/MegaNav'
import Footer from '../components/layout/Footer'

// Editorial body + headings. Source Serif 4 is screen-optimized variable
// serif by Adobe — closest free analog to NYT Imperial / Tiempos Text.
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

// UI / eyebrows / metadata / commerce body. Inter has tabular-figure
// support (`tnum`) for rate tables and currency rendering.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

// Optional display face for flagship hero moments. Same family as
// Source Serif 4, optical-size optimized for large display sizes.
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
const PLAUSIBLE_SRC =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? 'https://plausible.io/js/script.js'

export const metadata: Metadata = {
  metadataBase: new URL('https://toprates.ca'),
  title: 'TopRates.ca — Insurance, in plain English',
  description:
    'Independent Canadian insurance education. Plain-English guides on auto, home, life, business, and travel insurance. Talk to a LLQP-licensed advisor at KLC Group Canada Inc. for life insurance. Operated by Webhub4u Inc.',
  keywords:
    'insurance, auto insurance, home insurance, life insurance, mortgage rates, credit cards, Canadian insurance broker, Ontario auto reform',
  authors: [{ name: 'TopRates.ca' }],
  creator: 'TopRates.ca',
  openGraph: {
    title: 'TopRates.ca — Insurance, in plain English',
    description: 'Independent Canadian insurance education. Talk to a LLQP-licensed advisor at KLC Group Canada Inc.',
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
    <html
      lang="en"
      className={`${sourceSerif.variable} ${inter.variable} ${newsreader.variable}`}
    >
      <head>
        <link rel="alternate" type="application/rss+xml" title="TopRates.ca RSS" href="/rss.xml" />
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
        <MegaNav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
