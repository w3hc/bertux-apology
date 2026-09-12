import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://bertux-apology.example'),

  title: 'Sorry, Bertux.',
  description: 'An overdue public apology to Bertux.',

  keywords: ['Bertux', 'Bertrand Juglas', 'apology', 'cryptogeek'],
  authors: [{ name: 'bertux-apology' }],

  openGraph: {
    title: 'Sorry, Bertux.',
    description: 'An overdue public apology to Bertux.',
    siteName: 'bertux-apology',
    images: [
      {
        url: '/huangshan.png',
        width: 1200,
        height: 630,
        alt: 'Sorry, Bertux.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sorry, Bertux.',
    description: 'An overdue public apology to Bertux.',
    images: ['/huangshan.png'],
    creator: '@julienbrg',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'your-google-site-verification',
  },
}
