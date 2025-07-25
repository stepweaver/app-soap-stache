import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { generateContactMetadata } from '@/lib/metadata';
import ContactForm from './ContactForm';

// Generate metadata for the page
export async function generateMetadata() {
  return await generateContactMetadata();
}

export default function Contact() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'hello@soapstache.com',
      link: 'mailto:hello@soapstache.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '(123) 456-7890',
      link: 'tel:+1234567890',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'Muskegon, Michigan',
      link: null,
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-5PM EST',
      link: null,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      {/* Header */}
      <div className='pt-24 pb-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-5xl md:text-6xl font-light text-gray-900 mb-6'>
            Get in Touch
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Have questions about our products or want to place a custom order?
            We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 pb-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24'>
          {/* Contact Form */}
          <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 order-1 lg:order-2'>
            <h2 className='text-3xl font-light text-gray-900 mb-8'>
              Send us a Message
            </h2>

            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className='space-y-12 order-2 lg:order-1'>
            <div>
              <h2 className='text-3xl font-light text-gray-900 mb-8'>
                Contact Information
              </h2>
              <div className='space-y-8'>
                {contactInfo.map((item, index) => (
                  <div key={index} className='flex items-start space-x-4 group'>
                    <div className='flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center group-hover:shadow-md transition-all duration-300'>
                      <item.icon className='text-gray-600 text-lg' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h3 className='text-lg font-medium text-gray-900 mb-1'>
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className='text-gray-600 hover:text-gray-900 transition-colors duration-200'
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className='text-gray-600'>{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-200'>
              <h3 className='text-xl font-medium text-gray-900 mb-4'>
                Business Hours
              </h3>
              <div className='space-y-2 text-gray-600'>
                <p>Monday - Friday: 9AM - 5PM EST</p>
                <p>Saturday: 10AM - 3PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='bg-white border-t border-gray-200 py-20'>
        <div className='max-w-4xl mx-auto px-4'>
          <h2 className='text-3xl font-light text-gray-900 text-center mb-12'>
            Frequently Asked Questions
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <div className='bg-gray-50 rounded-xl p-6'>
                <h3 className='font-medium text-gray-900 mb-2'>
                  How long does shipping take?
                </h3>
                <p className='text-gray-600 text-sm'>
                  Standard shipping takes 3-5 business days. Free shipping is
                  available on orders over $54.
                </p>
              </div>

              <div className='bg-gray-50 rounded-xl p-6'>
                <h3 className='font-medium text-gray-900 mb-2'>
                  Do you ship internationally?
                </h3>
                <p className='text-gray-600 text-sm'>
                  Currently, we only ship within the United States. We're
                  working on expanding our shipping options.
                </p>
              </div>
            </div>

            <div className='space-y-6'>
              <div className='bg-gray-50 rounded-xl p-6'>
                <h3 className='font-medium text-gray-900 mb-2'>
                  What's your return policy?
                </h3>
                <p className='text-gray-600 text-sm'>
                  We offer a 30-day return policy for unused products in their
                  original packaging.
                </p>
              </div>

              <div className='bg-gray-50 rounded-xl p-6'>
                <h3 className='font-medium text-gray-900 mb-2'>
                  Are your products suitable for sensitive skin?
                </h3>
                <p className='text-gray-600 text-sm'>
                  Yes! Our soaps are made with natural ingredients and are
                  suitable for most skin types.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
