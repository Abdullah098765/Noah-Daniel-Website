'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../config/constants';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('tN0m1_tBmPGEeCNYH');
    console.log('EmailJS initialized');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      console.log('Starting email send process');
      console.log('Form data:', formData);
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Noah'
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        'service_vt68ila',
        'template_un8z4oz',
        templateParams,
        'tN0m1_tBmPGEeCNYH'
      );

      console.log('Email sent successfully:', response);
      
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Thank you for your message! I will get back to you soon.'
      });

      // Show success alert
      console.log('Success alert shown');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Something went wrong. Please try again later.'
      });
      // Show error alert
      window.alert('Failed to send message. Please try again later.');
      console.log('Error alert shown');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section 
      id="contact-section" 
      data-section="contact"
      className="section-padding"
      style={{ 
        display: 'block',
        position: 'relative',
        zIndex: 1,
        background: 'transparent'
      }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
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
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-xl"
            style={{ background: 'transparent' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {SITE_CONFIG.contact.form.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={SITE_CONFIG.contact.form.name.placeholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={SITE_CONFIG.contact.form.name.required}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {SITE_CONFIG.contact.form.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={SITE_CONFIG.contact.form.email.placeholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={SITE_CONFIG.contact.form.email.required}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {SITE_CONFIG.contact.form.phone.label}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={SITE_CONFIG.contact.form.phone.placeholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={SITE_CONFIG.contact.form.phone.required}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {SITE_CONFIG.contact.form.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={SITE_CONFIG.contact.form.message.placeholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={SITE_CONFIG.contact.form.message.required}
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-md ${
                  status.error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full gradient-bg text-white py-3 rounded-md font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  status.submitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status.submitting ? 'Sending...' : SITE_CONFIG.contact.form.submit}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-full"
          >
            <div className="p-4 rounded-xl h-full" style={{ background: 'transparent' }}>
              <h3 className="text-xl font-semibold mb-4">{SITE_CONFIG.contact.map.title}</h3>
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <iframe
                  src={SITE_CONFIG.contact.map.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 