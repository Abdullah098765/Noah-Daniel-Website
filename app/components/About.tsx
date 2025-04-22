'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SITE_CONFIG } from '../config/constants';

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{SITE_CONFIG.about.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {SITE_CONFIG.about.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative w-64 h-64 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={SITE_CONFIG.profileImage}
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm {SITE_CONFIG.name}</h3>
            {SITE_CONFIG.about.description.map((paragraph: string, index: number) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="text-blue-500 font-semibold">Location:</span>
                <span className="ml-2 text-gray-600">{SITE_CONFIG.location}</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 font-semibold">Email:</span>
                <span className="ml-2 text-gray-600">{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-500 font-semibold">Phone:</span>
                <span className="ml-2 text-gray-600">{SITE_CONFIG.phone}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 