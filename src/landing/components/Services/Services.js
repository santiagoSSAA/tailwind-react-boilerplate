import React from 'react';
import { SERVICES_CONTENT } from './ServicesTexts';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{SERVICES_CONTENT.subtitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_CONTENT.services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
              <service.icon className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

