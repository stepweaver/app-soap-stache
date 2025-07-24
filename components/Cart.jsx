'use client';

import { useCart } from '@/contexts/CartContext';
import { urlFor } from '@/lib/sanity';
import Link from 'next/link';
import { useState } from 'react';
import { getStripe } from '@/lib/stripe';

export default function Cart() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemCount,
    clearCart,
  } = useCart();

  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;

    setIsProcessing(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems,
          customerEmail: '', // You can add email collection later
        }),
      });

      const { sessionId, error } = await response.json();

      if (error) {
        console.error('Checkout error:', error);
        alert('Failed to create checkout session. Please try again.');
        return;
      }

      // Redirect to Stripe Checkout
      const stripe = getStripe();
      if (stripe) {
        const { error: stripeError } = await stripe.redirectToCheckout({
          sessionId,
        });

        if (stripeError) {
          console.error('Stripe error:', stripeError);
          alert('Failed to redirect to checkout. Please try again.');
        }
      } else {
        alert(
          'Stripe is not configured. Please check your environment variables.'
        );
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className='fixed inset-0 bg-black/70 z-40'
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Slide-out */}
      <div className='fixed right-0 top-0 h-full w-96 max-w-[90vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col'>
        {/* Cart Header */}
        <div className='bg-green-800 text-white p-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className='text-lg font-bold'>
              Your Cart ({getCartItemCount()})
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className='text-white hover:text-gray-200 text-2xl font-bold cursor-pointer'
          >
            ×
          </button>
        </div>

        {/* Free Shipping Banner */}
        {getCartTotal() >= 54 ? (
          <div className='bg-green-700 text-white text-center py-2 text-sm font-medium'>
            🚚 FREE SHIPPING UNLOCKED!
          </div>
        ) : (
          <div className='bg-orange-500 text-white text-center py-2 text-sm font-medium'>
            ${(54 - getCartTotal()).toFixed(2)} away from FREE SHIPPING!
          </div>
        )}

        {/* Free Shipping Progress */}
        <div className='bg-green-600 p-3'>
          <div className='bg-white rounded-full h-2 overflow-hidden'>
            <div
              className='bg-green-500 h-2 rounded-full transition-all duration-500 ease-out'
              style={{
                width: `${Math.min(100, (getCartTotal() / 54) * 100)}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Cart Content */}
        <div className='flex-1 overflow-y-auto p-4'>
          {cartItems.length === 0 ? (
            <div className='text-center py-8'>
              <p className='text-gray-600 mb-4'>Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className='bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-md font-medium cursor-pointer'
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className='space-y-4 mb-6'>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className='flex items-center gap-3 bg-gray-50 p-3 rounded-lg'
                  >
                    {/* Product Image */}
                    <div className='w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0'>
                      {item.photo && (
                        <img
                          src={urlFor(item.photo)
                            .width(64)
                            .height(64)
                            .quality(80)
                            .url()}
                          alt={item.title}
                          className='w-full h-full object-cover'
                        />
                      )}
                    </div>

                    {/* Product Details */}
                    <div className='flex-1 min-w-0'>
                      <h4 className='font-medium text-sm text-gray-900 truncate'>
                        {item.title}
                      </h4>
                      <p className='text-xs text-gray-600 capitalize'>Bar</p>
                    </div>

                    {/* Price and Quantity */}
                    <div className='text-right'>
                      <div className='font-bold text-gray-900'>
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>

                      {/* Quantity Controls */}
                      <div className='flex items-center gap-1 mt-2'>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className='w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded text-sm font-bold text-gray-800 flex items-center justify-center cursor-pointer'
                        >
                          −
                        </button>
                        <span className='w-8 text-center text-sm font-medium text-gray-900'>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className='w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded text-sm font-bold text-gray-800 flex items-center justify-center cursor-pointer'
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className='ml-2 text-red-500 hover:text-red-700 text-lg cursor-pointer'
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* You may also like - Hidden for now */}
              {/* <div className='border-t pt-4 mb-6'>
                <h3 className='font-medium text-gray-900 mb-3'>You may also like</h3>
                <div className='text-gray-500 text-sm'>Check out our other products!</div>
              </div> */}
            </>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className='border-t bg-white p-4'>
            {/* Totals */}
            <div className='space-y-2 mb-4'>
              <div className='flex justify-between text-sm text-gray-900'>
                <span>Total</span>
                <span className='font-bold'>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className='flex justify-between text-sm text-gray-900'>
                <span>Shipping</span>
                <span
                  className={`font-bold ${
                    getCartTotal() >= 54 ? 'text-green-600' : 'text-gray-900'
                  }`}
                >
                  {getCartTotal() >= 54 ? 'FREE' : '$5.99'}
                </span>
              </div>
              {getCartTotal() >= 54 && (
                <div className='text-xs text-green-600 font-medium'>
                  🎉 You've unlocked free shipping!
                </div>
              )}
              <div className='text-xs text-gray-500'>
                {getCartTotal() >= 54
                  ? 'Orders will be shipped immediately'
                  : 'Add more items for free shipping'}
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className='w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-3 rounded-md text-lg transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed'
            >
              {isProcessing ? 'Processing...' : 'PROCEED TO CHECKOUT'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
