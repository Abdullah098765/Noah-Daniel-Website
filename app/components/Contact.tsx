'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { SITE_CONFIG } from '../config/constants';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact-section" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{SITE_CONFIG.contact.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {SITE_CONFIG.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="space-y-8 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            style={{ backgroundColor: 'white' }}
          >
            <div className="flex items-start space-x-4">
              <div className="gradient-text">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">{SITE_CONFIG.email}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="gradient-text">
                <FaPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">{SITE_CONFIG.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="gradient-text">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">{SITE_CONFIG.location}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a href={SITE_CONFIG.social.linkedin} className="text-gray-600 hover:text-blue-500 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href={SITE_CONFIG.social.twitter} className="text-gray-600 hover:text-blue-500 transition-colors">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href={SITE_CONFIG.social.facebook} className="text-gray-600 hover:text-blue-500 transition-colors">
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
} 