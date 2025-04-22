'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { SITE_CONFIG } from '../config/constants';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="magic-box">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              {SITE_CONFIG.hero.title} {SITE_CONFIG.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {SITE_CONFIG.hero.subtitle}
            </p>
            <motion.a
              href="#contact-section"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {SITE_CONFIG.hero.cta}
              <FaArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8"
        >
          <TypeAnimation
            sequence={[
              "I always offer something before any payment",
              2000,
              "Free consultation to understand your needs",
              2000,
              "Customized solutions for your business",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ 
              fontSize: '1.25rem',
              display: 'inline-block',
              color: '#4B5563',
              fontWeight: '500'
            }}
            repeat={Infinity}
          />
        </motion.div>
      </div>

      <button 
        onClick={scrollToNextSection}
        className="scroll-button animate-text" 
        style={{ animationDelay: '1.5s' }}
        aria-label="Scroll to next section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
};

export default Hero; 