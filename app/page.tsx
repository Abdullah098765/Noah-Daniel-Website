'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ContactForm from './components/ContactForm';

export default function Home() {
  useEffect(() => {
    // Check if we need to scroll to contact section
    const shouldScroll = sessionStorage.getItem('scrollToContact');
    if (shouldScroll) {
      // Clear the flag
      sessionStorage.removeItem('scrollToContact');
      // Wait for the page to be fully loaded
      setTimeout(() => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <ContactForm />
    </main>
  );
} 