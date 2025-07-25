'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    addToCart(product, 'bar');

    // Reset the click state after animation
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-green-700 hover:bg-green-800 text-white px-4 sm:px-5 py-2 rounded-md font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap ${
        isClicked ? 'scale-95 bg-green-600' : ''
      }`}
    >
      Add to Cart ${product.price}
    </button>
  );
}
