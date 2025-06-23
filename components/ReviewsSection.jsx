'use client';

import { useState } from 'react';

const reviews = [
  {
    id: 1,
    rating: 5,
    title: 'Life-changing soap experience!',
    text: "This soap completely transformed my morning routine. The lather is incredible and the scent lasts all day. I've never felt cleaner!",
    author: 'Marcus T.',
  },
  {
    id: 2,
    rating: 5,
    title: "Best soap I've ever used",
    text: 'The quality is outstanding and the natural ingredients make my skin feel amazing. Worth every penny and then some!',
    author: 'Sarah M.',
  },
  {
    id: 3,
    rating: 5,
    title: 'Amazing scents and quality',
    text: 'Each bar smells incredible and lasts forever. My whole bathroom smells like a luxury spa now. Highly recommend!',
    author: 'Jake R.',
  },
  {
    id: 4,
    rating: 5,
    title: 'Perfect for sensitive skin',
    text: "Finally found a soap that doesn't irritate my skin. The natural ingredients are gentle yet effective. Love it!",
    author: 'Emily K.',
  },
  {
    id: 5,
    rating: 5,
    title: 'Exceeded all expectations',
    text: 'The craftsmanship is evident in every bar. These soaps are works of art that happen to clean incredibly well too.',
    author: 'David L.',
  },
  {
    id: 6,
    rating: 5,
    title: 'Subscription is worth it',
    text: 'Never running out of amazing soap again! The variety keeps things interesting and the quality is consistently excellent.',
    author: 'Rachel P.',
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  const nextReviews = () => {
    setCurrentIndex((prev) => (prev + reviewsPerPage) % reviews.length);
  };

  const prevReviews = () => {
    setCurrentIndex(
      (prev) => (prev - reviewsPerPage + reviews.length) % reviews.length
    );
  };

  const getCurrentReviews = () => {
    const current = [];
    for (let i = 0; i < reviewsPerPage; i++) {
      current.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return current;
  };

  const currentReviews = getCurrentReviews();

  return (
    <div className='bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Reviews From Our Customers
          </h2>
        </div>

        {/* Review Display */}
        <div className='max-w-7xl mx-auto relative'>
          {/* Navigation Arrows */}
          <button
            onClick={prevReviews}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-md transition-all duration-200 hover:shadow-lg z-10 cursor-pointer'
            aria-label='Previous reviews'
          >
            <svg
              className='w-5 h-5 text-orange-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>

          <button
            onClick={nextReviews}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-md transition-all duration-200 hover:shadow-lg z-10 cursor-pointer'
            aria-label='Next reviews'
          >
            <svg
              className='w-5 h-5 text-orange-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>

          {/* Reviews Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {currentReviews.map((review) => (
              <div
                key={review.id}
                className='bg-white rounded-2xl shadow-lg p-6 text-center'
              >
                {/* Stars */}
                <div className='flex justify-center mb-3'>
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-5 h-5 text-yellow-400 fill-current'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
                    </svg>
                  ))}
                </div>

                {/* Review Title */}
                <h3 className='text-lg font-bold text-gray-900 mb-3'>
                  {review.title}
                </h3>

                {/* Review Text */}
                <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                  {review.text}
                </p>

                {/* Author */}
                <p className='text-gray-500 font-medium text-sm'>
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
