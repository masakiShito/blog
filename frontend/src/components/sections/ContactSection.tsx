import React, { FormEvent } from 'react';
import { Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Mail className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">example@email.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Mail className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+123 456 7890</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 border rounded mb-4"
              required
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-2 border rounded mb-4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;