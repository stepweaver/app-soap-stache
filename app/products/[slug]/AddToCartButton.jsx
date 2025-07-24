'use client';

import { useCart } from '@/contexts/CartContext';

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product, 'bar')}
      className='bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer'
    >
      Add to Cart - ${product.price}
    </button>
  );
}
