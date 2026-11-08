'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { WhatsAppIcon, MailIcon } from '@/components/Icons';

interface QuickRfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function QuickRfqModal({
  isOpen,
  onClose,
  defaultProduct = 'Granular Activated Carbon (GAC)',
}: QuickRfqModalProps) {
  const { language } = useLanguage();

  const [product, setProduct] = useState(defaultProduct);
  const [iodine, setIodine] = useState('1000 mg/g');
  const [meshSize, setMeshSize] = useState('8x30 mesh');
  const [quantity, setQuantity] = useState('1x20ft Container (15 MT)');
  const [destination, setDestination] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');

  if (!isOpen) return null;

  const productOptions = [
    'Granular Activated Carbon (GAC)',
    'Powdered Activated Carbon (PAC)',
    'Pelletized / Extruded Carbon (Pellet)',
    'Water & Gas Treatment Carbon',
    'Food & Pharmaceutical Grade Carbon',
    'Gold Recovery Carbon (CIP/CIL - High Hardness)',
  ];

  const iodineOptions = [
    '900 mg/g (Standard Water Treatment)',
    '1000 mg/g (High Efficiency / Municipal Water)',
    '1100 mg/g (Industrial & Air Purification)',
    '1200 mg/g (Maximum Adsorption / Gold Mining)',
  ];

  const meshOptions = [
    '8x30 mesh (Granular Water Filter)',
    '12x40 mesh (Granular Air/Water Filter)',
    '200 mesh (Powder)',
    '325 mesh (Ultra-fine Powder)',
    '4.0 mm Extruded Pellet (Air / Gas)',
    '6x12 mesh (Gold CIP/CIL Platelets)',
  ];

  const quantityOptions = [
    'Lab Sample Kit (Free 500g)',
    '1x20ft FCL Container (15 Metric Tons)',
    '1x40ft HC Container (25 Metric Tons)',
    'Multi-Container Contract (>= 50 MT/month)',
    'LCL Trial Order (1 - 5 MT)',
  ];

  const generateWhatsAppMessage = () => {
    return (
      `*PERMINTAAN PENAWARAN HARGA (RFQ) & SAMPEL - COCOBLIM*\n\n` +
      `*Nama / Perusahaan:* ${contactName || 'Buyer'} (${companyName || 'Perusahaan'})\n` +
      `*Produk:* ${product}\n` +
      `*Target Iodin:* ${iodine}\n` +
      `*Ukuran Mesh:* ${meshSize}\n` +
      `*Volume Pesanan:* ${quantity}\n` +
      `*Tujuan Pengiriman / Port:* ${destination || 'Tanjung Priok / CIF Target'}\n\n` +
      `Mohon kirimkan lembar penawaran harga FOB terbaru dan COA (Certificate of Analysis). Terima kasih.`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/6285771060462?text=${msg}`, '_blank');
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`RFQ & Sample Request: ${product} - ${companyName || 'Industrial Inquiry'}`);
    const body = encodeURIComponent(generateWhatsAppMessage().replace(/\*/g, ''));
    window.location.href = `mailto:blim00coco@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/90"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-surface text-ink p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6 pb-4 bg-surface-alt p-4">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
              Request Official Quotation & Sample
            </h2>
            <p className="text-sm text-muted mt-1">
              FOB Tanjung Priok, Jakarta · Tanjung Sari, Bogor Production Facility
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-muted hover:text-ink text-sm uppercase font-bold px-2 py-1 bg-surface-alt"
          >
            Close
          </button>
        </div>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-muted text-xs uppercase font-semibold mb-1">
                Product Grade
              </label>
              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full h-11 px-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {productOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-surface text-ink">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-muted text-xs uppercase font-semibold mb-1">
                Target Iodine Number
              </label>
              <select
                value={iodine}
                onChange={(e) => setIodine(e.target.value)}
                className="w-full h-11 px-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {iodineOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-surface text-ink">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-muted text-xs uppercase font-semibold mb-1">
                Particle / Mesh Size
              </label>
              <select
                value={meshSize}
                onChange={(e) => setMeshSize(e.target.value)}
                className="w-full h-11 px-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {meshOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-surface text-ink">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-muted text-xs uppercase font-semibold mb-1">
                Order Volume / Sample
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full h-11 px-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {quantityOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-surface text-ink">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-muted text-xs uppercase font-semibold mb-1">
                Contact Name
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Michael Chen"
                className="w-full h-11 px-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              >
              </input>
            </div>
            <div>
              <label className="block text-muted text-xs uppercase font-semibold mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. PT Water Pure"
                className="w-full h-11 px-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              >
              </input>
            </div>
            <div>
              <label className="block text-muted text-xs uppercase font-semibold mb-1">
                Destination Port
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Jebel Ali / Busan"
                className="w-full h-11 px-3 bg-surface-alt text-ink border-0 focus:outline-none focus:ring-2 focus:ring-accent"
              >
              </input>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 h-12 bg-accent hover:bg-accent-hover text-accent-ink font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-colors duration-150"
            >
              <WhatsAppIcon className="w-5 h-5 text-accent-ink" />
              <span>Send via WhatsApp (+62 857-7106-0462)</span>
            </button>
            <button
              type="button"
              onClick={handleEmailSubmit}
              className="h-12 px-6 bg-surface-alt hover:bg-bg text-ink font-semibold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-colors duration-150"
            >
              <MailIcon className="w-4 h-4 text-ink" />
              <span>Send via Email</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
