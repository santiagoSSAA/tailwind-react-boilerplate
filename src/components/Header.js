import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">FitWithMe</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['Home', 'Services', 'Testimonials', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden text-gray-600 hover:text-blue-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

