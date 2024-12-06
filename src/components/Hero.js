import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-40 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Transform Your Body, Transform Your Life</h2>
          <p className="text-xl mb-8">Personalized training programs to help you achieve your fitness goals</p>
          <a href="#contact" className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block">
            Start Your Journey
          </a>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg?height=400&width=600" alt="Fitness Training" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

