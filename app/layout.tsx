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
    default:
      'Mahesh M. Thakur. AI ROI for Boards. C-Suite Coaching for Tech Leaders.',
    template: '%s | Mahesh M. Thakur',
  },
  description:
    'I help Boards turn AI spending into real returns. I help VPs in tech get to the C-Suite. Former Microsoft, Amazon, GoDaddy operator. Stanford GSB Certified Board Director.',
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
