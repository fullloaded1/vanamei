'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { WhatsAppIcon, BeakerIcon } from '@/components/Icons';
import QuickRfqModal from '@/components/QuickRfqModal';

export default function FloatingLeadBar() {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const defaultWaMessage = encodeURIComponent(
    'Halo CocoBlim, saya ingin konsultasi harga FOB Karbon Aktif dan meminta sampel uji laboratorium.'
  );

  return (
    <>
      <aside aria-label="Quick Quote and WhatsApp Support" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {isExpanded ? (
          <div className="bg-surface text-ink p-5 max-w-xs sm:max-w-sm w-full">
            {/* Top Indicator */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="flex items-center gap-2 text-accent font-bold text-sm">
                <span className="w-2 h-2 bg-accent inline-block"></span>
                {language === 'id' ? 'Sales Teknis Pabrik' : 'Factory Sales Direct'}
              </span>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="text-muted hover:text-ink text-sm px-2 py-1 bg-bg"
                title="Sembunyikan"
                aria-label="Tutup bar"
              >
                Close
              </button>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-4">
              {language === 'id'
                ? 'Konsultasi spesifikasi iodine 900–1200, ukuran mesh, sampel lab gratis, dan harga FOB Tanjung Priok.'
                : 'Direct inquiry for iodine 900–1200, mesh sizing, free lab evaluation sample, and container FOB pricing.'}
            </p>

            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm py-3 px-4 flex items-center justify-center gap-2 uppercase tracking-wide transition-colors duration-150"
              >
                <BeakerIcon className="w-4 h-4 text-accent-ink" />
                <span>{language === 'id' ? 'Minta Penawaran & Sampel' : 'Request FOB Quote & Sample'}</span>
              </button>

              <a
                href={`https://wa.me/6285771060462?text=${defaultWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-surface-alt hover:bg-bg text-ink font-semibold text-sm py-2.5 px-4 flex items-center justify-center gap-2 transition-colors duration-150"
              >
                <WhatsAppIcon className="w-4 h-4 text-accent" />
                <span>WhatsApp (+62 857-7106-0462)</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="bg-surface text-ink hover:text-accent text-sm font-bold py-3 px-5 flex items-center gap-2 uppercase tracking-wider"
            >
              <span className="w-2 h-2 bg-accent inline-block"></span>
              <span>{language === 'id' ? 'Minta Penawaran FOB' : 'Instant Quote'}</span>
            </button>
            <a
              href={`https://wa.me/6285771060462?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent hover:bg-accent-hover text-accent-ink flex items-center justify-center"
              title="Chat WhatsApp"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-6 h-6 text-accent-ink" />
            </a>
          </div>
        )}
      </aside>

      <QuickRfqModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
