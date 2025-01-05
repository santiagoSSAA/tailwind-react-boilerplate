import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FOOTER_CONTENT } from './FooterText';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">{FOOTER_CONTENT.footerTitle}</h2>
            <p className="mt-2">{FOOTER_CONTENT.footerSubtitle}</p>
          </div>
          <div className="flex space-x-6">
            <a href={FOOTER_CONTENT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FaWhatsapp size={24} />
            </a>
            <a href={FOOTER_CONTENT.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href={FOOTER_CONTENT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {FOOTER_CONTENT.footerRights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

