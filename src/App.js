import {React, useEffect, useState} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { createClient } from "@supabase/supabase-js";

const apiKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const projectUrl = process.env.REACT_APP_SUPABASE_PROJECT_HOST;
const supabase = createClient(projectUrl,apiKey);

const App = () => {
  getCountries();
  
  async function getCountries(){
    const {data} = await supabase.from("countries").select();
    console.log(data); 
  }

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
    </div>
  );
};

export default App;

