import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

import { SpeedInsights } from '@vercel/speed-insights/react';
/* import { createClient } from "@supabase/supabase-js"; */

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <Services />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default Landing;
