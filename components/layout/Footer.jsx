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
            Sign up for our newsletter and get up to 20% off your first order,
            plus early access to new products and Michigan-exclusive offers.
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
              className='flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400'
              required
            />
            <button
              type='submit'
              className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full transition-colors duration-200 cursor-pointer'
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
                <h3 className='text-2xl font-bold text-yellow-400'>
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
                    <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.533l1.714-1.714c.39.39.927.633 1.491.633c1.161 0 2.096-.935 2.096-2.096s-.935-2.096-2.096-2.096c-.564 0-1.101.243-1.491.633L5.244 9.101c.757-.937 1.908-1.533 3.205-1.533c2.321 0 4.199 1.878 4.199 4.199s-1.878 4.221-4.199 4.221z' />
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
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
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
              © 2024 Soap Stache. All rights reserved.
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
