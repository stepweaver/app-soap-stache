export default function LearnMore() {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Learn more about the Soap Stache difference
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {/* Local Honey Story */}
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
            <div className='aspect-[4/3] overflow-hidden bg-amber-100'>
              <div className='w-full h-full flex items-center justify-center text-6xl'>
                🍯
              </div>
            </div>
            <div className='p-6 text-center'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                Local Honey
              </h3>
              <p className='text-gray-600 mb-6 leading-relaxed'>
                Discover the story behind our partnership with Michigan
                beekeepers and how their golden honey brings natural moisture
                and sweetness to every bar.
              </p>
              <button className='border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white font-bold py-3 px-6 rounded-md transition-all duration-200 cursor-pointer'>
                Learn More
              </button>
            </div>
          </div>

          {/* Lake Superior Sand Story */}
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
            <div className='aspect-[4/3] overflow-hidden bg-blue-100'>
              <div className='w-full h-full flex items-center justify-center text-6xl'>
                🏖️
              </div>
            </div>
            <div className='p-6 text-center'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                Lake Superior Sand
              </h3>
              <p className='text-gray-600 mb-6 leading-relaxed'>
                Learn how we responsibly source fine sand from the pristine
                shores of Lake Superior to create the perfect natural
                exfoliation experience.
              </p>
              <button className='border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white font-bold py-3 px-6 rounded-md transition-all duration-200 cursor-pointer'>
                Learn More
              </button>
            </div>
          </div>

          {/* Michigan Made Story */}
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
            <div className='aspect-[4/3] overflow-hidden bg-green-100'>
              <div className='w-full h-full flex items-center justify-center text-6xl'>
                🏠
              </div>
            </div>
            <div className='p-6 text-center'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                Made in Michigan
              </h3>
              <p className='text-gray-600 mb-6 leading-relaxed'>
                Discover what makes Soap Stache an authentic Michigan brand,
                from our Muskegon roots to our commitment to supporting local
                communities.
              </p>
              <button className='border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white font-bold py-3 px-6 rounded-md transition-all duration-200 cursor-pointer'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
