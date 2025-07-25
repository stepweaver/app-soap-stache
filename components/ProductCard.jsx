'use client';

import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

export default function ProductCard({ soap }) {
  const { addToCart } = useCart();
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsClicked(true);
    addToCart(soap, 'bar');

    // Reset the click state after animation
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <Link
      href={`/products/${soap.slug?.current}`}
      className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 cursor-pointer transform hover:-translate-y-1 flex flex-col'
    >
      {/* Product Image */}
      <div className='relative aspect-[3/2] overflow-hidden bg-gray-50'>
        {soap.photo && (
          <img
            src={urlFor(soap.photo).width(400).height(267).quality(85).url()}
            alt={soap.title}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
          />
        )}

        {/* NEW Badge */}
        {soap.isNew && (
          <div className='absolute top-3 left-3'>
            <span className='bg-green-800 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide shadow-lg'>
              NEW
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className='p-3'>
        {/* Title */}
        <div className='h-12 mb-1'>
          <h3 className='font-bold text-lg text-gray-900 group-hover:text-gray-700 transition-colors duration-200 leading-tight'>
            {soap.title}
          </h3>
        </div>

        {/* Description */}
        <div className='h-10 mb-2'>
          <p className='text-gray-600 text-sm leading-relaxed line-clamp-2'>
            {soap.blurb || soap.description}
          </p>
        </div>

        {/* Price and Grit */}
        <div className='h-8 flex items-center gap-3 mb-2'>
          <span className='text-xl font-bold text-gray-900'>${soap.price}</span>
          <div className='text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full'>
            Grit {soap.grit}/5
          </div>
        </div>

        {/* Purchase Options */}
        <div className='space-y-2'>
          {/* Only allow Add to Cart if available, otherwise show Sold Out */}
          {soap.available !== false ? (
            <button
              onClick={handleAddToCart}
              className={`w-full bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-md transition-all duration-200 transform group-hover:scale-105 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap ${
                isClicked ? 'scale-95 bg-green-700' : ''
              }`}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className='w-full bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded-md cursor-not-allowed opacity-75'
              disabled
            >
              Sold Out
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
