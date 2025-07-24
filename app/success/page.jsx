'use client';

import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { FaCheckCircle, FaHome, FaShoppingBag } from 'react-icons/fa';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCart();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const cartClearedRef = useRef(false);

  useEffect(() => {
    console.log('Success page mounted, sessionId:', sessionId);
    console.log('Cart cleared ref:', cartClearedRef.current);

    // Clear cart on successful purchase (only once)
    if (!cartClearedRef.current) {
      console.log('Attempting to clear cart...');
      clearCart();
      // Also clear localStorage directly to ensure it's cleared
      localStorage.removeItem('soap-stache-cart');
      console.log('LocalStorage cleared');
      cartClearedRef.current = true;
      console.log('Cart cleared ref set to true');
    }

    // You can fetch order details here if needed
    if (sessionId) {
      // In a real app, you might want to fetch order details from your backend
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [sessionId, clearCart]);

  // Create a shorter, user-friendly order ID
  const getShortOrderId = (sessionId) => {
    if (!sessionId) return 'N/A';
    // Take the last 8 characters of the session ID for a shorter display
    return sessionId.slice(-8).toUpperCase();
  };

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-green-800'></div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4'>
      <div className='max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center'>
        {/* Success Icon */}
        <div className='mb-6'>
          <FaCheckCircle className='w-16 h-16 text-green-500 mx-auto' />
        </div>

        {/* Success Message */}
        <h1 className='text-3xl font-bold text-gray-900 mb-4'>Thank You!</h1>

        <p className='text-lg text-gray-600 mb-6'>
          Your order has been placed successfully. You'll receive a confirmation
          email shortly.
        </p>

        {/* Order Details */}
        {sessionId && (
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>
            <p className='text-sm text-gray-600'>
              Order ID:{' '}
              <span className='font-mono text-gray-900 font-bold'>
                {getShortOrderId(sessionId)}
              </span>
            </p>
          </div>
        )}

        {/* Next Steps */}
        <div className='space-y-4'>
          <div className='text-sm text-gray-600'>
            <p className='mb-2'>What happens next?</p>
            <ul className='text-left space-y-1'>
              <li>• You'll receive an order confirmation email</li>
              <li>• We'll process your order within 1-2 business days</li>
              <li>• Your soap will ship within 3-7 business days</li>
              <li>• You'll get tracking information via email</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-3 mt-8'>
          <Link
            href='/'
            className='flex-1 bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2'
          >
            <FaHome className='w-4 h-4' />
            Back to Home
          </Link>

          <Link
            href='/products'
            className='flex-1 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2'
          >
            <FaShoppingBag className='w-4 h-4' />
            Shop More
          </Link>
        </div>

        {/* Contact Info */}
        <div className='mt-8 pt-6 border-t border-gray-200'>
          <p className='text-sm text-gray-500'>
            Questions? Contact us at{' '}
            <a
              href='mailto:support@soapstache.com'
              className='text-green-600 hover:text-green-700'
            >
              support@soapstache.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
