'use client';

import { useState } from 'react';

export default function SubscribeSection() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement email signup
    console.log('Email signup:', email);
    setEmail('');
  };

  return (
    <section className='bg-gray-800 py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-2xl mx-auto'>
          <h3 className='text-2xl font-bold mb-4'>
            Stay Fresh with Soap Stache
          </h3>
          <p className='text-gray-300 mb-6'>
            Get exclusive offers, new product alerts, and grooming tips
            delivered to your inbox.
          </p>
          <form
            onSubmit={handleEmailSubmit}
            className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'
          >
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-green-500'
              required
            />
            <button
              type='submit'
              className='px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
