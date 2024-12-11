import React from 'react';
import { TESTIMONIALS_CONTENT } from './TestimonialsTexts';

const Testimonials = () => {

  return (
    <section id="testimonials" className="py-20 bg-blue-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{TESTIMONIALS_CONTENT.subtitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_CONTENT.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                <h3 className="font-semibold text-xl">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

