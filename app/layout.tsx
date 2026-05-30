import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://maheshmthakur.com'),
  title: {
    default: 'Mahesh M. Thakur | Executive Coach for Technology Leaders',
    template: '%s | Mahesh M. Thakur',
  },
  description:
    'Mahesh M. Thakur helps high-performing technology leaders build the presence, judgment, and influence required for bigger scope. Top 100 Coach. Former Microsoft, Amazon, GoDaddy operator.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maheshmthakur.com',
    siteName: 'Mahesh M. Thakur',
    images: [{ url: '/images/mahesh-hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/mahesh-hero.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} font-body bg-bg text-[#1A1A1A] antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Analytics: add later */}
      </body>
    </html>
  )
}
