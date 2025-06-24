'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement email signup
    console.log('Email signup:', email);
    setEmail('');
  };

  return (
    <footer className='bg-gray-900 text-white'>
      {/* Email Signup Section */}
      <div className='bg-gray-800 py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h3 className='text-2xl font-bold mb-4'>
            Don't miss out on exclusive deals!
          </h3>
          <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
            Get 20% off your first order, plus early access to new products and
            special offers.
          </p>

          <form
            onSubmit={handleEmailSubmit}
            className='max-w-md mx-auto flex gap-2'
          >
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800'
              required
            />
            <button
              type='submit'
              className='bg-green-800 hover:bg-green-900 text-white font-bold px-6 py-3 rounded-md transition-colors duration-200 cursor-pointer'
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className='py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Store Policies */}
            <div>
              <h4 className='text-lg font-bold mb-4'>Store Policies</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='/shipping-policy'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href='/return-policy'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href='/refund-policy'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className='text-lg font-bold mb-4'>Contact Us</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='/contact'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Contact Form
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:hello@soapstache.com'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    hello@soapstache.com
                  </a>
                </li>
                <li>
                  <a
                    href='tel:+1-555-SOAP-123'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    (555) SOAP-123
                  </a>
                </li>
                <li className='text-gray-300'>
                  <div>Grand Rapids, MI</div>
                  <div>Monday - Friday: 9AM - 5PM EST</div>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h4 className='text-lg font-bold mb-4'>Subscribe</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='/subscribe'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Subscription Plans
                  </a>
                </li>
                <li>
                  <a
                    href='/manage-subscription'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Manage Subscription
                  </a>
                </li>
                <li>
                  <a
                    href='/subscription-faq'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Subscription FAQ
                  </a>
                </li>
                <li>
                  <a
                    href='/skip-delivery'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Skip Delivery
                  </a>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className='text-lg font-bold mb-4'>Info</h4>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='/about'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href='/ingredients'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Ingredients
                  </a>
                </li>
                <li>
                  <a
                    href='/blog'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href='/reviews'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className='mt-12 pt-8 border-t border-gray-700'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              {/* Brand */}
              <div className='mb-6 md:mb-0'>
                <h3 className='text-2xl font-bold'>
                  SOAP STACHE
                </h3>
                <p className='text-gray-300 text-sm mt-1'>
                  Handcrafted in Michigan
                </p>
              </div>

              {/* Social Icons */}
              <div className='flex space-x-4'>
                <a
                  href='https://facebook.com/soapstache'
                  className='bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200'
                  aria-label='Facebook'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                  </svg>
                </a>

                <a
                  href='https://instagram.com/soapstache'
                  className='bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200'
                  aria-label='Instagram'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                </a>

                <a
                  href='https://twitter.com/soapstache'
                  className='bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200'
                  aria-label='Twitter'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                  </svg>
                </a>

                <a
                  href='https://youtube.com/soapstache'
                  className='bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200'
                  aria-label='YouTube'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className='mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
            <div className='mb-4 md:mb-0'>
              <div>© 2025 Soap Stache. All rights reserved.</div>
              <div className='mt-1'>
                Site built by{' '}
                <a
                  href='https://stepweaver.dev'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-green-500 hover:text-green-400 transition-colors duration-200 hover:underline'
                >
                  λstepweaver
                </a>
              </div>
            </div>
            <div className='flex space-x-6'>
              <a
                href='/terms-of-use'
                className='hover:text-white transition-colors duration-200'
              >
                Terms of Use
              </a>
              <a
                href='/privacy-policy'
                className='hover:text-white transition-colors duration-200'
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
