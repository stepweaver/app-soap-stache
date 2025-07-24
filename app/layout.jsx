import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
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
  title: 'Soap Stache - Handcrafted Artisan Soaps',
  description:
    'Discover our premium handcrafted artisan soaps. Made with natural ingredients and Michigan pride. Free shipping on orders over $54.',
  keywords:
    'artisan soap, handcrafted soap, natural soap, Michigan soap, premium soap',
  openGraph: {
    title: 'Soap Stache - Handcrafted Artisan Soaps',
    description:
      'Discover our premium handcrafted artisan soaps. Made with natural ingredients and Michigan pride.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <Script src='https://js.stripe.com/v3/' strategy='beforeInteractive' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {children}
          <Footer />
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
