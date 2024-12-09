import React from 'react';
import Lottie from "lottie-react";

import FitRunning from "./running.json";
import { HERO_CONTENT } from './HeroTexts';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-40 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{HERO_CONTENT.title}</h2>
          <p className="text-xl mb-8">{HERO_CONTENT.subtitle}</p>
          <a href="#contact" className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block">
            {HERO_CONTENT.button_text}
          </a>
        </div>
        <div className="md:w-1/2">
          <Lottie animationData={FitRunning}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;

