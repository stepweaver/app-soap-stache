'use client';
import { useState } from 'react';

export default function EmailSubscribe() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement email signup
    console.log('Email signup:', email);
    setEmail('');
  };

  return (
    <section className='bg-gray-800 py-12'>
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
    </section>
  );
}
