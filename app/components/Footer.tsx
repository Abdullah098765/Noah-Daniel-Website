'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { SITE_CONFIG } from '../config/constants';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="flex items-start space-x-3">
              <FaEnvelope className="w-5 h-5 mt-1" />
              <p className="text-gray-300">{SITE_CONFIG.email}</p>
            </div>
            <div className="flex items-start space-x-3">
              <FaPhone className="w-5 h-5 mt-1" />
              <p className="text-gray-300">{SITE_CONFIG.phone}</p>
            </div>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="w-5 h-5 mt-1" />
              <p className="text-gray-300">{SITE_CONFIG.location}</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact-section" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href={SITE_CONFIG.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href={SITE_CONFIG.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a 
                href={SITE_CONFIG.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center md:justify-end items-end"
          >
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
            >
              <span>Back to Top</span>
              <FaArrowUp className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
} 