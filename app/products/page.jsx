import { client } from '@/lib/sanity';
import ProductCard from '@/components/ProductCard';

export default async function Products() {
  const soaps = await client.fetch(`
    *[_type == "soap"] | order(_createdAt desc) {
      _id,
      title,
      description,
      blurb,
      price,
      photo,
      featured,
      grit,
      isNew,
      scent,
      slug,
      displayStatus,
      available
    }
  `);

  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            OUR PRODUCTS
          </h1>
          <div className='w-24 h-1 bg-green-800 mx-auto mb-6'></div>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Handcrafted soaps made with love and natural ingredients from
            Michigan
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8'>
          {soaps.map((soap) => (
            <ProductCard key={soap._id} soap={soap} />
          ))}
        </div>
      </div>
    </div>
  );
}
