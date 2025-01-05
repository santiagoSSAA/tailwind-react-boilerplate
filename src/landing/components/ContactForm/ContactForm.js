import React from 'react';
import { CONTACT_FORM_CONTENT } from './ContactFormTexts';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-12">
        {CONTACT_FORM_CONTENT.title}
      </h2>
      <p className="text-xl text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        {CONTACT_FORM_CONTENT.subtitle}
      </p>
      <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-lg">
        <div className="flex flex-wrap justify-center gap-12">
          {CONTACT_FORM_CONTENT.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-110`}
              aria-label={`Conéctate con nosotros en ${social.name}`}
            >
              <div className={`p-6 rounded-full bg-${social.color}-100 group-hover:bg-${social.color}-200 transition-colors duration-300 shadow-md`}>
                <social.icon className={`w-12 h-12 text-${social.color}-500 group-hover:text-${social.color}-600`} />
              </div>
              <span className={`mt-3 text-lg font-medium text-${social.color}-500 group-hover:text-${social.color}-600`}>
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;

