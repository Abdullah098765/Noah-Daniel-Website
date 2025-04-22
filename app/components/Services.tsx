'use client';

import { motion } from 'framer-motion';
import { FaGlobe, FaRobot, FaPhone, FaChartLine, FaSearch, FaComments, FaShoppingCart, FaChartBar, FaCalendarAlt, FaThumbsUp } from 'react-icons/fa';
import { SITE_CONFIG } from '../config/constants';
import Link from 'next/link';

const serviceSlugs = {
  'Website Development': 'website-development',
  'AI Agents / AI Employees': 'ai-agents',
  'Missed Call Text-Back Automation': 'missed-call-text-back',
  'Lead Generation & Follow-Up': 'lead-generation',
  'Local SEO Optimization': 'local-seo',
  'Chatbots & Voice Assistants': 'chatbots',
  'E-commerce Integrations': 'ecommerce',
  'Analytics & Insights': 'analytics',
  'AI Appointment Scheduling': 'appointment-scheduling',
  'Reputation Management': 'reputation-management'
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to help your business grow and thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.services.map((service, index) => (
            <Link 
              key={index}
              href={`/services/${serviceSlugs[service.title as keyof typeof serviceSlugs]}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full border-2 border-transparent hover:border-blue-500"
              >
                <div className="mb-4 flex justify-center">
                  {service.icon === 'FaGlobe' && <FaGlobe className="w-12 h-12 text-blue-500" />}
                  {service.icon === 'FaRobot' && <FaRobot className="w-12 h-12 text-blue-500" />}
                  {service.icon === 'FaPhone' && <FaPhone className="w-12 h-12 text-blue-500" />}
                  {service.icon === 'FaChartLine' && <FaChartLine className="w-12 h-12 text-blue-500" />}
                  {service.icon === 'FaSearch' && <FaSearch className="w-12 h-12 text-blue-500" />}
                  {service.icon === 'FaComments' && <FaComments className="w-12 h-12 text-blue-500" />}
                  {service.icon === 'FaShoppingCart' && <FaShoppingCart className="w-12 h-12 text-blue-500" />}
                  {service.icon === 'FaChartBar' && <FaChartBar className="w-12 h-12 text-blue-500" />}
                  {service.icon === 'FaCalendarAlt' && <FaCalendarAlt className="w-12 h-12 text-blue-500" />}
                  {service.icon === 'FaThumbsUp' && <FaThumbsUp className="w-12 h-12 text-blue-500" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 