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
                      <p className="text-secondary">Depok, Jawa Barat, Indonesia</p>
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
                        <a href="https://wa.me/6285144920078" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block mb-1">
                          WhatsApp: +62 851 4492 0078
                        </a>
                        <a href="https://wa.me/6285771060462" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          WhatsApp: +62 857 7106 0462
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-8 mt-6 h-64">
                  <SectionTitle title="Our Location" />
                  <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center">
                    <p className="text-secondary">Google Maps Placeholder</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
