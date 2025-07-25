'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { getCartItemCount, setIsCartOpen, cartBounce, lastAddedItem } =
    useCart();

  const navLinks = [
    { href: '/products', label: 'SHOP' },
    { href: '/about', label: 'OUR STORY' },
    { href: '/contact', label: 'CONTACT' },
  ];

  // Show notification when item is added
  useEffect(() => {
    if (lastAddedItem) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem]);

  return (
    <>
      {/* Navbar */}
      <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-green-800/95 shadow-lg border-b border-green-700'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center h-16 lg:h-20'>
            {/* Logo */}
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='relative w-16 h-16 lg:w-20 lg:h-20'>
                <Image
                  src='/images/mustache.png'
                  alt='Soap Stache Logo'
                  fill
                  sizes='(max-width: 1024px) 64px, 80px'
                  className='object-contain filter brightness-0 invert transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              <span className='font-bold text-xl lg:text-2xl tracking-tight text-white drop-shadow-lg transition-colors duration-300'>
                SOAP STACHE
              </span>
            </Link>

            {/* Desktop Navigation - Positioned to the right of logo */}
            <div className='hidden lg:flex items-center space-x-8 ml-12'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='font-medium text-white hover:text-green-200 drop-shadow-md transition-all duration-300 hover:scale-105 relative group'
                >
                  {link.label}
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-green-200 transition-all duration-300 group-hover:w-full'></span>
                </Link>
              ))}
            </div>

            {/* Right Side Icons - Pushed to the far right */}
            <div className='flex items-center space-x-4 ml-auto'>
              {/* Cart Icon */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 rounded-full text-white hover:text-green-200 hover:bg-green-700/50 transition-all duration-300 hover:scale-110 cursor-pointer group ${
                  cartBounce ? 'animate-bounce' : ''
                }`}
                aria-label='Shopping Cart'
              >
                <FaShoppingCart size={18} />
                {getCartItemCount() > 0 && (
                  <span className='absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'>
                    {getCartItemCount()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='lg:hidden p-2 rounded-full text-white hover:text-green-200 hover:bg-green-700/50 transition-all duration-300 hover:scale-110'
                aria-label='Toggle menu'
              >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden border-t border-green-700 shadow-lg transition-all duration-300 bg-green-800/95`}
          >
            <div className='container mx-auto px-4 py-4'>
              <div className='flex flex-col space-y-4'>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className='text-white hover:text-green-200 font-medium py-2 transition-all duration-300 hover:translate-x-2 relative group'
                  >
                    {link.label}
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-green-200 transition-all duration-300 group-hover:w-full'></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Success Notification */}
      {showNotification && lastAddedItem && (
        <div className='fixed top-20 right-4 z-50 bg-green-600 text-white px-4 py-3 rounded-md shadow-lg transform transition-all duration-300 ease-in-out'>
          <div className='flex items-center space-x-2'>
            <span className='text-green-200 text-lg'>✓</span>
            <span className='text-sm font-medium'>
              Added {lastAddedItem.title} to cart!
            </span>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className='h-16 lg:h-20'></div>
    </>
  );
}
