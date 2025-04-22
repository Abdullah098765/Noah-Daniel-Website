'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { SITE_CONFIG } from '../config/constants';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (mounted) {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 80; // Navbar height
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsOpen(false);
      }
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link 
            href="#services" 
            onClick={(e) => handleScroll(e, 'services')}
            className="hover:text-blue-500 transition-colors"
          >
            Services
          </Link>
          <Link 
            href="#about" 
            onClick={(e) => handleScroll(e, 'about')}
            className="hover:text-blue-500 transition-colors"
          >
            About
          </Link>
          <Link 
            href="#testimonials" 
            onClick={(e) => handleScroll(e, 'testimonials')}
            className="hover:text-blue-500 transition-colors"
          >
            Testimonials
          </Link>
          <Link 
            href="#contact-section" 
            onClick={(e) => handleScroll(e, 'contact-section')}
            className="hover:text-blue-500 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-sm"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              <Link 
                href="#services" 
                onClick={(e) => handleScroll(e, 'services')}
                className="hover:text-blue-500 transition-colors py-2"
              >
                Services
              </Link>
              <Link 
                href="#about" 
                onClick={(e) => handleScroll(e, 'about')}
                className="hover:text-blue-500 transition-colors py-2"
              >
                About
              </Link>
              <Link 
                href="#testimonials" 
                onClick={(e) => handleScroll(e, 'testimonials')}
                className="hover:text-blue-500 transition-colors py-2"
              >
                Testimonials
              </Link>
              <Link 
                href="#contact-section" 
                onClick={(e) => handleScroll(e, 'contact-section')}
                className="hover:text-blue-500 transition-colors py-2"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 