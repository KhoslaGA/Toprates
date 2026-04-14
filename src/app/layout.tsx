import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://toprates.ca'),
  title: 'Toprates.ca - Canadian Insurance Brokerage',
  description: 'Get competitive quotes on auto, home, health, and life insurance from Canada\'s trusted insurance broker. Fast, transparent, and personalized coverage for your needs.',
  keywords: 'insurance, auto insurance, home insurance, health insurance, life insurance, Canadian insurance broker, insurance quotes',
  authors: [{ name: 'Toprates.ca' }],
  creator: 'Toprates.ca',
  openGraph: {
    title: 'Toprates.ca - Canadian Insurance Brokerage',
    description: 'Get competitive insurance quotes tailored to your needs',
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
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
