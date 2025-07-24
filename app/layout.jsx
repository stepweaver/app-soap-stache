import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/contexts/CartContext';
import Cart from '@/components/Cart';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://soapstache.com'),
  title: {
    default: 'Soap Stache - Handcrafted Artisan Soaps',
    template: '%s | Soap Stache',
  },
  description:
    'Discover our premium handcrafted artisan soaps made with natural ingredients and Michigan pride. Free shipping on orders over $54. Shop our collection of luxury soaps today.',
  keywords: [
    'artisan soap',
    'handcrafted soap',
    'natural soap',
    'Michigan soap',
    'premium soap',
    'luxury soap',
    'organic soap',
    'handmade soap',
    'gourmet soap',
    'bath and body',
    'skincare',
    'natural skincare',
  ],
  authors: [{ name: 'Soap Stache' }],
  creator: 'Soap Stache',
  publisher: 'Soap Stache',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://soapstache.com',
    siteName: 'Soap Stache',
    title: 'Soap Stache - Handcrafted Artisan Soaps',
    description:
      'Discover our premium handcrafted artisan soaps made with natural ingredients and Michigan pride. Free shipping on orders over $54.',
    images: [
      {
        url: '/images/site_preview.png',
        width: 1200,
        height: 630,
        alt: 'Soap Stache - Premium Artisan Soaps',
        type: 'image/png',
      },
      {
        url: '/images/mustache.png',
        width: 1200,
        height: 630,
        alt: 'Soap Stache - Premium Artisan Soaps',
        type: 'image/png',
      },
      {
        url: '/images/michigan_summer.png',
        width: 1200,
        height: 630,
        alt: 'Michigan Summer Collection - Soap Stache',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@soapstache',
    creator: '@soapstache',
    title: 'Soap Stache - Handcrafted Artisan Soaps',
    description:
      'Discover our premium handcrafted artisan soaps made with natural ingredients and Michigan pride.',
    images: ['/images/site_preview.png'],
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://soapstache.com',
  },
  category: 'shopping',
  classification: 'business',
  other: {
    'msapplication-TileColor': '#166534',
    'theme-color': '#166534',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Soap Stache',
    'application-name': 'Soap Stache',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <Script src='https://js.stripe.com/v3/' strategy='beforeInteractive' />

        {/* Favicon and App Icons */}
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />

        {/* Preconnect to external domains for performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://js.stripe.com' />

        {/* Structured Data for Business */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Soap Stache',
              url: 'https://soapstache.com',
              logo: 'https://soapstache.com/images/mustache.png',
              description:
                'Handcrafted artisan soaps made with natural ingredients and Michigan pride',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
                addressRegion: 'MI',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'hello@soapstache.com',
              },
              sameAs: [
                'https://www.facebook.com/soapstache',
                'https://www.instagram.com/soapstache',
                'https://www.tiktok.com/@soapstache',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
