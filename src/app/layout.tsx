import type { Metadata } from 'next'
import { Outfit, DM_Sans, Newsreader } from 'next/font/google'
import '../styles/globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://toprates.ca'),
  title: 'TopRates.ca — Canadian Insurance & Rate Comparison',
  description:
    'Compare Canadian auto, home, life, and tenant insurance, mortgages, credit cards, and investing. Powered by Insurimple, a RIBO-licensed brokerage.',
  keywords:
    'insurance, auto insurance, home insurance, life insurance, mortgage rates, credit cards, Canadian insurance broker, Ontario auto reform',
  authors: [{ name: 'TopRates.ca' }],
  creator: 'TopRates.ca',
  openGraph: {
    title: 'TopRates.ca — Canadian Insurance & Rate Comparison',
    description: 'Compare rates on insurance, mortgages, and cards across Canada.',
    type: 'website',
  },
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} ${newsreader.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
