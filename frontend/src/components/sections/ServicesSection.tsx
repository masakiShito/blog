import React from 'react';
import { Service } from '../../types';

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    { title: 'Web Design', icon: '🎨', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Web Development', icon: '💻', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Mobile Development', icon: '📱', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'UI/UX Design', icon: '✏️', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;