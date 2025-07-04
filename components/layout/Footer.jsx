'use client';

import { useState } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

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
      {/* Main Footer Content */}
      <div className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
            {/* Company Info */}
            <div className='lg:col-span-1'>
              <div className='mb-6'>
                <h3 className='text-2xl font-bold mb-2'>SOAP STACHE</h3>
                <p className='text-gray-300 text-sm'>
                  Handcrafted in Michigan with love and care. Premium grooming
                  products for the modern gentleman.
                </p>
              </div>
              <div className='space-y-2 text-sm text-gray-300 mb-6'>
                <div>Grand Rapids, MI</div>
                <div>Monday - Friday: 9AM - 5PM EST</div>
                <div>
                  <a
                    href='mailto:hello@soapstache.com'
                    className='hover:text-white transition-colors duration-200'
                  >
                    hello@soapstache.com
                  </a>
                </div>
                <div>
                  <a
                    href='tel:+1-555-SOAP-123'
                    className='hover:text-white transition-colors duration-200'
                  >
                    (555) SOAP-123
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className='flex space-x-4'>
                <a
                  href='https://facebook.com/soapstache'
                  className='bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200'
                  aria-label='Facebook'
                >
                  <FaFacebook className='w-5 h-5' />
                </a>
                <a
                  href='https://instagram.com/soapstache'
                  className='bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200'
                  aria-label='Instagram'
                >
                  <FaInstagram className='w-5 h-5' />
                </a>
                <a
                  href='https://twitter.com/soapstache'
                  className='bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200'
                  aria-label='X (Twitter)'
                >
                  <FaXTwitter className='w-5 h-5' />
                </a>
                <a
                  href='https://youtube.com/soapstache'
                  className='bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200'
                  aria-label='YouTube'
                >
                  <FaYoutube className='w-5 h-5' />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className='text-lg font-bold mb-6'>Quick Links</h4>
              <ul className='space-y-3'>
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
                    href='/products'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Shop All
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

            {/* Customer Service */}
            <div>
              <h4 className='text-lg font-bold mb-6'>Customer Service</h4>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='/contact'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Contact Us
                  </a>
                </li>
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
                <li>
                  <a
                    href='/faq'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscription */}
            <div>
              <h4 className='text-lg font-bold mb-6'>Subscription</h4>
              <ul className='space-y-3'>
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
                <li>
                  <a
                    href='/gift-subscription'
                    className='text-gray-300 hover:text-white transition-colors duration-200'
                  >
                    Gift Subscription
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='border-t border-gray-700'>
        <div className='container mx-auto px-4 py-8'>
          <div className='flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0'>
            {/* Copyright */}
            <div className='text-center lg:text-left'>
              <div className='text-sm text-gray-400'>
                © 2025 Soap Stache. All rights reserved.
              </div>
              <div className='text-sm text-gray-400 mt-1'>
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

            {/* Legal Links */}
            <div className='flex space-x-6 text-sm'>
              <a
                href='/terms-of-use'
                className='text-gray-400 hover:text-white transition-colors duration-200'
              >
                Terms of Use
              </a>
              <a
                href='/privacy-policy'
                className='text-gray-400 hover:text-white transition-colors duration-200'
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
