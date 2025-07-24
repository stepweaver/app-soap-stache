'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Footer() {
  const [email, setEmail] = useState('');

  // Demo mode detection
  const isDemoMode =
    process.env.NODE_ENV === 'development' ||
    process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement email signup
    console.log('Email signup:', email);
    setEmail('');
  };

  return (
    <footer className='bg-gray-900 text-white'>
      {/* Footer Header */}
      <div className='bg-gray-950 border-b border-gray-800'>
        <div className='container mx-auto px-6 py-12 max-w-6xl'>
          <div className='text-center'>
            <div className='flex justify-center items-center mb-6'>
              <div className='relative w-36 h-22 mr-4'>
                <Image
                  src='/images/mustache.png'
                  alt='Soap Stache Logo'
                  fill
                  sizes='(max-width: 768px) 144px, 144px'
                  className='object-contain filter brightness-0 invert'
                />
              </div>
              <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
                SOAP STACHE
              </h2>
            </div>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
              Premium grooming products handcrafted in Michigan. Experience the
              difference that quality ingredients and care make.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className='py-16'>
        <div className='container mx-auto px-6 max-w-6xl'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16'>
            {/* Contact & Social Section */}
            <div className='lg:col-span-1 space-y-6 text-center lg:text-left'>
              <div className='space-y-2 text-sm text-gray-300'>
                <div>Grand Rapids, MI</div>
                <div>Monday - Friday: 9AM - 5PM EST</div>
                <a
                  href='mailto:hello@soapstache.com'
                  className='block hover:text-white transition-colors'
                >
                  hello@soapstache.com
                </a>
              </div>

              {/* Social Links */}
              <div className='flex space-x-4 pt-2 justify-center lg:justify-start'>
                <a
                  href='https://facebook.com/soapstache'
                  className='p-2 text-gray-400 hover:text-white transition-colors'
                  aria-label='Facebook'
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href='https://instagram.com/soapstache'
                  className='p-2 text-gray-400 hover:text-white transition-colors'
                  aria-label='Instagram'
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href='https://twitter.com/soapstache'
                  className='p-2 text-gray-400 hover:text-white transition-colors'
                  aria-label='Twitter'
                >
                  <FaXTwitter size={20} />
                </a>
                <a
                  href='https://youtube.com/soapstache'
                  className='p-2 text-gray-400 hover:text-white transition-colors'
                  aria-label='YouTube'
                >
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className='grid grid-cols-2 gap-8 text-center lg:text-left'>
              <div>
                <h4 className='font-semibold text-white mb-4'>Shop</h4>
                <ul className='space-y-3 text-sm'>
                  <li>
                    <a
                      href='/products'
                      className='text-gray-300 hover:text-white transition-colors'
                    >
                      All Products
                    </a>
                  </li>
                  <li>
                    <a
                      href='/subscribe'
                      className='text-gray-300 hover:text-white transition-colors'
                    >
                      Subscription
                    </a>
                  </li>
                  <li>
                    <a
                      href='/ingredients'
                      className='text-gray-300 hover:text-white transition-colors'
                    >
                      Ingredients
                    </a>
                  </li>
                  <li>
                    <a
                      href='/about'
                      className='text-gray-300 hover:text-white transition-colors'
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className='font-semibold text-white mb-4'>Support</h4>
                <ul className='space-y-3 text-sm'>
                  <li>
                    <a
                      href='/contact'
                      className='text-gray-300 hover:text-white transition-colors'
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='/faq'
                      className='text-gray-300 hover:text-white transition-colors'
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href='/shipping-policy'
                      className='text-gray-300 hover:text-white transition-colors'
                    >
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a
                      href='/return-policy'
                      className='text-gray-300 hover:text-white transition-colors'
                    >
                      Returns
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className='text-center lg:text-left'>
              <h4 className='font-semibold text-white mb-4'>Stay Updated</h4>
              <p className='text-sm text-gray-300 mb-4'>
                Get grooming tips and exclusive offers delivered to your inbox.
              </p>

              <form onSubmit={handleEmailSubmit} className='space-y-3'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-gray-800 text-white placeholder-gray-400'
                  required
                />
                <button
                  type='submit'
                  className='w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-800 bg-gray-950'>
        <div className='container mx-auto px-6 py-6 max-w-6xl'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-sm text-gray-400 text-center md:text-left'>
              © 2025 Soap Stache. All rights reserved.
              {isDemoMode && (
                <div className='text-yellow-400 mt-1'>
                  🚫 This is a demo site. No real orders will be processed.
                </div>
              )}
            </div>

            <div className='flex items-center space-x-6 text-sm'>
              <a
                href='/privacy-policy'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Privacy
              </a>
              <a
                href='/terms-of-use'
                className='text-gray-400 hover:text-white transition-colors'
              >
                Terms
              </a>
              <div className='text-gray-400'>
                Built by{' '}
                <a
                  href='https://stepweaver.dev'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-green-500 hover:text-green-400 transition-colors'
                >
                  λstepweaver
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
