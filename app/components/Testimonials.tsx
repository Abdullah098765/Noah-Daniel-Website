'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { SITE_CONFIG } from '../config/constants';

interface Testimonial {
  quote: string;
  author: string;
  business: string;
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from businesses that have experienced growth with our solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.testimonials.map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="magic-box p-6"
            >
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 