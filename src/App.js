import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { SpeedInsights } from '@vercel/speed-insights/react';
/* import { createClient } from "@supabase/supabase-js"; */

console.log(process.env);

const App = () => {
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

export default App;

