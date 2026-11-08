'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { WhatsAppIcon, MailIcon, MapPinIcon } from '@/components/Icons';

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    product: 'Granular Activated Carbon (GAC)',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo CocoBlim, saya ${formData.name} dari ${formData.company || 'Perusahaan'}.\n` +
      `Email: ${formData.email}\n` +
      `Produk: ${formData.product}\n` +
      `Pesan: ${formData.message}`
    );
    window.open(`https://wa.me/6285771060462?text=${msg}`, '_blank');
    setFormStatus('Redirecting to WhatsApp sales desk...');
  };

  return (
    <div className="bg-bg text-ink pt-28 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="pt-8 pb-12 ">
          <p className="text-sm font-semibold text-accent mb-2">
            Direct Kiln Factory Consultation · Bogor, Indonesia
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-ink mb-4 leading-tight">
            Contact CocoBlim
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Get an official FOB quotation, schedule a factory audit in Tanjungsari Bogor, or request free laboratory testing samples.
          </p>
        </div>

        {/* Contact Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-surface p-8 sm:p-12 space-y-6">
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
              Request Technical Quotation
            </h2>

            {formStatus && (
              <p className="p-3 bg-surface-alt text-accent font-semibold text-sm">
                {formStatus}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-muted text-xs uppercase font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. David Williams"
                    className="w-full h-12 px-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-muted text-xs uppercase font-semibold mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Pure Water Global"
                    className="w-full h-12 px-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-muted text-xs uppercase font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. procurement@company.com"
                    className="w-full h-12 px-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-muted text-xs uppercase font-semibold mb-1">
                    Target Grade
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full h-12 px-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="Granular Activated Carbon (GAC)">Granular Activated Carbon (GAC)</option>
                    <option value="Powdered Activated Carbon (PAC)">Powdered Activated Carbon (PAC)</option>
                    <option value="Pelletized Activated Carbon">Pelletized 4.0mm Carbon</option>
                    <option value="Gold Recovery CIP/CIL">Gold Recovery CIP/CIL Carbon</option>
                    <option value="Water & Gas Treatment">Water & Gas Treatment Carbon</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-muted text-xs uppercase font-semibold mb-1">
                  Technical Specifications / Inquiries
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detail your target iodine rating (e.g. 1000 mg/g), mesh distribution, volume (e.g. 15 MT container), and destination port."
                  className="w-full p-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm uppercase tracking-wider flex items-center justify-center transition-colors duration-150"
              >
                Send Request via WhatsApp
              </button>
            </form>
          </div>

          {/* Right Column: Factory & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-surface space-y-6">
              <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
                Factory & Logistics
              </h2>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-ink">Tanjungsari Kiln Facility</p>
                  <p className="text-muted leading-relaxed mt-1">
                    C552+685, Tanjungrasa, Kec. Tanjungsari, Kabupaten Bogor, Jawa Barat 16840, Indonesia
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-ink">Export Shipping Port</p>
                  <p className="text-muted leading-relaxed mt-1">
                    Port of Tanjung Priok, Jakarta, Indonesia (IDTPP)
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-ink">Official Commercial Email</p>
                  <p className="text-accent font-bold mt-1">
                    blim00coco@gmail.com
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-ink">Direct WhatsApp Procurement</p>
                  <p className="text-accent font-bold mt-1">
                    +62 857-7106-0462
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-ink">Commercial Office Hours</p>
                  <p className="text-muted mt-1">
                    Monday – Friday: 08:00 – 17:00 WIB (GMT+7)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-surface space-y-4">
              <h3 className="font-display text-xl uppercase tracking-tight text-ink">
                Quick Download
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Download our official technical catalog (PDF) with full ASTM datasheets and packaging diagrams.
              </p>
              <a
                href="/catalog/ACTIVATED_CARBON_CATALOG.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 bg-surface-alt hover:bg-bg text-ink text-sm font-bold uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
              >
                Download Catalog (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
