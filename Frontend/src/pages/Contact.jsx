import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className='mt-16 pb-16'>
      <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>Contact Us</h1>
        <p className='text-gray-600 text-lg'>Get in touch with our team</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {/* Contact Information */}
        <div className='space-y-6'>
          <div>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Get in Touch</h2>
            <p className='text-gray-600 mb-6'>
              Have questions about our products or need help with your order? 
              We're here to help! Reach out to us through any of the channels below.
            </p>
          </div>

          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center'>
                <img src={assets.phone_icon || '📞'} alt="Phone" className='w-5 h-5' />
              </div>
              <div>
                <p className='font-medium text-gray-800'>Phone</p>
                <p className='text-gray-600'>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center'>
                <img src={assets.email_icon || '✉️'} alt="Email" className='w-5 h-5' />
              </div>
              <div>
                <p className='font-medium text-gray-800'>Email</p>
                <p className='text-gray-600'>support@greencart.com</p>
              </div>
            </div>

            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center'>
                <img src={assets.location_icon || '📍'} alt="Location" className='w-5 h-5' />
              </div>
              <div>
                <p className='font-medium text-gray-800'>Address</p>
                <p className='text-gray-600'>123 Green Street, Eco City, EC 12345</p>
              </div>
            </div>
          </div>

          <div className='pt-4'>
            <h3 className='text-lg font-semibold text-gray-800 mb-3'>Business Hours</h3>
            <div className='space-y-1 text-gray-600'>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='bg-gray-50 p-6 rounded-lg'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Send us a Message</h2>
          <form className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
              <input
                type='text'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                placeholder='Your full name'
              />
            </div>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
              <input
                type='email'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                placeholder='your.email@example.com'
              />
            </div>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Subject</label>
              <input
                type='text'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                placeholder='What is this about?'
              />
            </div>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
              <textarea
                rows={4}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                placeholder='Tell us how we can help you...'
              ></textarea>
            </div>
            
            <button
              type='submit'
              className='w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-dull transition-colors duration-200 font-medium'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='mt-16 max-w-4xl mx-auto'>
        <h2 className='text-2xl font-semibold text-gray-800 text-center mb-8'>Frequently Asked Questions</h2>
        <div className='space-y-4'>
          <div className='bg-white border border-gray-200 rounded-lg p-4'>
            <h3 className='font-medium text-gray-800 mb-2'>How do I place an order?</h3>
            <p className='text-gray-600'>Simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account and provide a delivery address.</p>
          </div>
          
          <div className='bg-white border border-gray-200 rounded-lg p-4'>
            <h3 className='font-medium text-gray-800 mb-2'>What are your delivery times?</h3>
            <p className='text-gray-600'>We offer same-day delivery for orders placed before 2 PM on weekdays. Weekend deliveries are available with 24-hour notice.</p>
          </div>
          
          <div className='bg-white border border-gray-200 rounded-lg p-4'>
            <h3 className='font-medium text-gray-800 mb-2'>Can I return or exchange products?</h3>
            <p className='text-gray-600'>Yes, we offer a 7-day return policy for fresh produce and a 30-day policy for packaged goods. Contact us for return instructions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
