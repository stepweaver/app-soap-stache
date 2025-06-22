import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <main>
        {/* Hero Section */}
        <section className='bg-white'>
          <div className='container mx-auto px-4 py-16 text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4'>
              Welcome to Soap Stache
            </h1>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Discover our collection of handcrafted, natural soaps made with
              the finest ingredients
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className='bg-gray-50'>
          <ProductGrid />
        </section>
      </main>
    </div>
  );
}
