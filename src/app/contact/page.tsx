'use client';

import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    setFormStatus(t('thankYouMessage'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
        {/* Page Header */}
        <section className="py-16 bg-gray-50 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-primary mb-6">{t('contactUs')}</h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <SectionTitle title="Send Us a Message" />
                {formStatus && <p className="text-green-600 mb-4">{formStatus}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </Card>
              <div>
                <Card className="p-8 h-full">
                  <SectionTitle title="Contact Information" />
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary">Address</h4>
                      <p className="text-secondary">Jakarta, Indonesia</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Email</h4>
                      <p className="text-secondary">info@cocoblim.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Phone / WhatsApp</h4>
                      <p className="text-secondary">
                        <a href="tel:+6285144920078" className="hover:text-primary transition-colors">+62 851 4492 0078</a>
                      </p>
                      <p className="text-secondary mt-1">
                        <a href="https://wa.me/6285144920078" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          WhatsApp: +62 851 4492 0078
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>
                {/* Enhanced Map Section */}
                <div className="mt-6">
                  <Card className="p-0 overflow-hidden shadow-xl">
                    <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{t('ourLocation')}</h3>
                      <p className="text-white/90 text-sm">📍 Jakarta Selatan, DKI Jakarta, Indonesia</p>
                      <p className="text-white/80 text-xs mt-1">CocoBlim Head Office & Manufacturing</p>
                    </div>
                    
                    <div className="relative">
                      <div className="h-80 bg-gray-200 overflow-hidden relative group">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.26476693163!2d106.6894!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1696234567890!5m2!1sen!2sid"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="CocoBlim Location - Jakarta, Indonesia"
                          className="transition-all duration-300 group-hover:scale-105"
                        ></iframe>
                        
                        {/* Overlay with company info - Clean */}
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                          <div className="space-y-1">
                            <h3 className="text-sm font-bold text-gray-900">CocoBlim Head Office</h3>
                            <p className="text-xs text-gray-700 font-medium">Jakarta Selatan, Indonesia</p>
                            <p className="text-xs text-blue-600 font-medium">Premium Charcoal Supplier</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="p-6 bg-gray-50">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a 
                            href="https://maps.app.goo.gl/4NAQsTvDfusyuVnG9?g_st=iw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
                          >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {t('viewOnGoogleMaps') || 'View on Google Maps'}
                          </a>
                          
                          <a 
                            href={`https://www.google.com/maps/dir/?api=1&destination=Jakarta,Indonesia`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                            </svg>
                            {t('getDirections') || 'Get Directions'}
                          </a>
                        </div>
                        
                        {/* Additional info */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              <span>{t('businessHours') || 'Business Hours'}: 9:00 - 17:00</span>
                            </div>
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                              </svg>
                              <span>+62 851 4492 0078</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
