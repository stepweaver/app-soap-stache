'use client';

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success alert
    alert("Thank you for your message! We'll get back to you soon.");

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-500 text-gray-900'
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
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-500 text-gray-900'
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
          value={formData.email}
          onChange={handleInputChange}
          required
          className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-500 text-gray-900'
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
          value={formData.subject}
          onChange={handleInputChange}
          required
          className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-gray-900'
        >
          <option value='' className='text-gray-500'>
            Select a subject
          </option>
          <option value='general' className='text-gray-900'>
            General Inquiry
          </option>
          <option value='product' className='text-gray-900'>
            Product Question
          </option>
          <option value='order' className='text-gray-900'>
            Order Status
          </option>
          <option value='custom' className='text-gray-900'>
            Custom Order
          </option>
          <option value='wholesale' className='text-gray-900'>
            Wholesale Inquiry
          </option>
          <option value='other' className='text-gray-900'>
            Other
          </option>
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
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none placeholder-gray-500 text-gray-900'
          placeholder='Tell us how we can help you...'
        />
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none flex items-center justify-center space-x-2 shadow-sm hover:shadow-md'
      >
        {isSubmitting ? (
          <>
            <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <FaPaperPlane className='text-sm' />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
