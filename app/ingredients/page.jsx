import { Metadata } from 'next';

export const metadata = {
  title: 'Ingredients - Soap Stache',
  description:
    'Discover the natural, premium ingredients that make our grooming products exceptional.',
};

export default function IngredientsPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gray-900 text-white py-20'>
        <div className='container mx-auto px-6 max-w-4xl text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Our Ingredients
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            We believe in transparency. Every ingredient in our products is
            carefully selected for quality, safety, and effectiveness.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='py-16'>
        <div className='container mx-auto px-6 max-w-4xl'>
          {/* Philosophy Section */}
          <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
            <h2 className='text-3xl font-bold mb-6 text-gray-900'>
              Our Ingredient Philosophy
            </h2>
            <p className='text-gray-600 mb-6'>
              At Soap Stache, we're committed to using only the finest natural
              ingredients. We avoid harsh chemicals, synthetic fragrances, and
              artificial preservatives. Every ingredient serves a purpose and
              contributes to the quality of your grooming experience.
            </p>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>🌿</span>
                </div>
                <h3 className='font-semibold mb-2'>Natural</h3>
                <p className='text-sm text-gray-600'>
                  Sourced from nature, not synthesized in labs
                </p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>🧪</span>
                </div>
                <h3 className='font-semibold mb-2'>Safe</h3>
                <p className='text-sm text-gray-600'>
                  Rigorously tested for safety and effectiveness
                </p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl'>🌱</span>
                </div>
                <h3 className='font-semibold mb-2'>Sustainable</h3>
                <p className='text-sm text-gray-600'>
                  Ethically sourced and environmentally responsible
                </p>
              </div>
            </div>
          </div>

          {/* Key Ingredients */}
          <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
            <h2 className='text-3xl font-bold mb-6 text-gray-900'>
              Our Michigan-Sourced Ingredients
            </h2>
            <div className='space-y-8'>
              <div className='border-b border-gray-200 pb-6'>
                <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                  Michigan Honey
                </h3>
                <p className='text-gray-600 mb-3'>
                  Sourced directly from Michigan beekeepers, our local honey
                  provides natural moisture and antibacterial properties. It's a
                  key ingredient that connects us to our state's rich
                  agricultural heritage.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Michigan Sourced
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Natural Moisture
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Antibacterial
                  </span>
                </div>
              </div>

              <div className='border-b border-gray-200 pb-6'>
                <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                  Lake Superior Sand
                </h3>
                <p className='text-gray-600 mb-3'>
                  Fine sand from Lake Superior's pristine shores provides
                  gentle, natural exfoliation. This unique ingredient captures
                  the essence of Michigan's Great Lakes and their natural
                  beauty.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Lake Superior
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Natural Exfoliation
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Gentle
                  </span>
                </div>
              </div>

              <div className='border-b border-gray-200 pb-6'>
                <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                  Michigan-Inspired Essential Oils
                </h3>
                <p className='text-gray-600 mb-3'>
                  Our essential oils are carefully selected to evoke memories of
                  Michigan's pine forests and apple orchards. These natural
                  fragrances transport you to the heart of the Great Lakes
                  State.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Pine Forest Scents
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Apple Orchard Notes
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Pure & Natural
                  </span>
                </div>
              </div>

              <div className='border-b border-gray-200 pb-6'>
                <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                  Locally Sourced Oils & Butters
                </h3>
                <p className='text-gray-600 mb-3'>
                  We partner with Michigan farmers and suppliers to source the
                  finest oils and butters. This commitment to local sourcing
                  supports our community while ensuring the highest quality
                  ingredients.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Michigan Partners
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Community Support
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Premium Quality
                  </span>
                </div>
              </div>

              <div>
                <h3 className='text-xl font-semibold mb-3 text-gray-900'>
                  Michigan Botanicals
                </h3>
                <p className='text-gray-600 mb-3'>
                  From local herbs to native plants, we incorporate Michigan
                  botanicals that add both therapeutic benefits and a connection
                  to our state's natural landscape.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Native Plants
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Therapeutic
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                    Local Landscape
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* What We Don't Use */}
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-3xl font-bold mb-6 text-gray-900'>
              What We Don't Use
            </h2>
            <p className='text-gray-600 mb-6'>
              We're committed to avoiding harmful ingredients that can irritate
              skin or cause long-term health issues.
            </p>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                  Synthetic Fragrances
                </h3>
                <p className='text-gray-600 text-sm'>
                  We use only pure essential oils for natural, therapeutic
                  fragrances that won't irritate sensitive skin.
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                  Parabens
                </h3>
                <p className='text-gray-600 text-sm'>
                  These synthetic preservatives can disrupt hormone function. We
                  use natural preservatives instead.
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                  Sulfates
                </h3>
                <p className='text-gray-600 text-sm'>
                  Harsh detergents that strip natural oils. Our gentle
                  surfactants clean without irritation.
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-3 text-gray-900'>
                  Artificial Colors
                </h3>
                <p className='text-gray-600 text-sm'>
                  Synthetic dyes can cause skin irritation. We use only natural
                  colorants from plants and minerals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
