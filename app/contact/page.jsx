import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className='min-h-screen bg-gray-50 pt-16 lg:pt-20'>
      {/* Hero Section */}
      <section className='bg-green-800 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>GET IN TOUCH</h1>
          <p className='text-xl text-green-100 max-w-2xl mx-auto'>
            Have questions about our products? Want to place a custom order?
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className='py-16'>
        <div className='container mx-auto px-4 max-w-6xl'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Information */}
            <div className='space-y-8'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Contact Information
              </h2>

              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='bg-green-800 text-white p-3 rounded-lg'>
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Email</h3>
                    <a
                      href='mailto:hello@soapstache.com'
                      className='text-green-800 hover:text-green-700 transition-colors'
                    >
                      hello@soapstache.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='bg-green-800 text-white p-3 rounded-lg'>
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>Phone</h3>
                    <a
                      href='tel:+1234567890'
                      className='text-green-800 hover:text-green-700 transition-colors'
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='bg-green-800 text-white p-3 rounded-lg'>
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Location
                    </h3>
                    <p className='text-gray-600'>
                      Grand Rapids, Michigan
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='bg-green-800 text-white p-3 rounded-lg'>
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-1'>
                      Business Hours
                    </h3>
                    <p className='text-gray-600'>
                      Monday - Friday: 9AM - 5PM EST
                      <br />
                      Saturday: 10AM - 3PM EST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                Send us a Message
              </h2>

              <form className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent transition-colors'
                      placeholder='John'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='lastName'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent transition-colors'
                      placeholder='Doe'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent transition-colors'
                    placeholder='john@example.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Subject
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent transition-colors'
                  >
                    <option value=''>Select a subject</option>
                    <option value='general'>General Inquiry</option>
                    <option value='product'>Product Question</option>
                    <option value='order'>Order Status</option>
                    <option value='custom'>Custom Order</option>
                    <option value='wholesale'>Wholesale Inquiry</option>
                    <option value='other'>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent transition-colors resize-none'
                    placeholder='Tell us how we can help you...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full bg-green-800 hover:bg-green-900 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <h2 className='text-3xl font-bold text-gray-900 text-center mb-12'>
            Frequently Asked Questions
          </h2>

          <div className='space-y-6'>
            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                How long does shipping take?
              </h3>
              <p className='text-gray-600'>
                Standard shipping takes 3-5 business days. Free shipping is
                available on orders over $54.
              </p>
            </div>

            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Do you ship internationally?
              </h3>
              <p className='text-gray-600'>
                Currently, we only ship within the United States. We're working
                on expanding our shipping options.
              </p>
            </div>

            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                What's your return policy?
              </h3>
              <p className='text-gray-600'>
                We offer a 30-day return policy for unused products in their
                original packaging.
              </p>
            </div>

            <div className='bg-gray-50 rounded-lg p-6'>
              <h3 className='font-semibold text-gray-900 mb-2'>
                Are your products suitable for sensitive skin?
              </h3>
              <p className='text-gray-600'>
                Yes! Our soaps are made with natural ingredients and are
                suitable for most skin types. If you have specific concerns,
                please contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
