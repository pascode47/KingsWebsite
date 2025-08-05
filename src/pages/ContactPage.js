import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Contact Information">
          <p className="text-gray-700 mb-4">
            Reach out to us for any inquiries. We are happy to assist you.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold">Address:</h4>
            <p>123 School Lane, Goba, Dar es Salaam</p>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Email:</h4>
            <p>info@kingsmodernacademy.ac.tz</p>
          </div>
          <div>
            <h4 className="font-semibold">Phone:</h4>
            <p>+255 123 456 789</p>
          </div>
        </Card>

        <Card title="Send Us a Message">
          {/* Contact Form */}
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="your.email@example.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Your message here..."></textarea>
            </div>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 w-full">Send Message</Button>
          </form>
        </Card>
      </section>

      <section className="text-center mt-8">
        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          {/* Social Media Icons - Placeholder */}
          <a href="/contact" className="text-gray-700 hover:text-blue-600"><i className="fab fa-facebook-f fa-2x"></i></a>
          <a href="/contact" className="text-gray-700 hover:text-blue-400"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="/contact" className="text-gray-700 hover:text-purple-600"><i className="fab fa-instagram fa-2x"></i></a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
