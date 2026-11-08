'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { iodinePricingList } from '@/data/pricingData';
import { faqList } from '@/data/faqData';
import { ChevronDownIcon, WhatsAppIcon, DownloadIcon } from '@/components/Icons';

export default function FobPricingAndFaq() {
  const { language, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<string | null>('faq-price');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="pricing" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            FOB Port Indonesia
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            {t('pricingTitle')}
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            {t('pricingNote')}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {iodinePricingList.map((item, idx) => {
            const isPopular = item.iodine === 1000 || item.iodine === 1200;
            return (
              <div
                key={item.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-md ${isPopular
                    ? 'bg-gradient-to-b from-slate-900 to-slate-900/90 border-2 border-emerald-500/80 shadow-2xl shadow-emerald-950/50 hover:scale-[1.02]'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                  }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                    {item.iodine === 1200 ? 'Highest Adsorption' : 'Most Popular'}
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                    {language === 'id' ? item.rawMaterialId : item.rawMaterialEn}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.grade}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span suppressHydrationWarning className="text-3xl md:text-4xl font-extrabold text-white">
                      ${item.priceFormatted || item.priceUSD}
                    </span>
                    <span className="text-xs text-gray-400 uppercase font-semibold">USD / MT</span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed pb-4 border-b border-slate-800 mb-4 min-h-[48px]">
                    <strong className="text-gray-200">
                      {language === 'id' ? 'Rekomendasi Aplikasi: ' : 'Best For: '}
                    </strong>
                    {language === 'id' ? item.bestForId : item.bestForEn}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs text-gray-400 flex items-center justify-between">
                    <span>MOQ:</span>
                    <span className="text-white font-semibold">15 MT (1x20ft)</span>
                  </div>
                  <div className="text-xs text-gray-400 flex items-center justify-between">
                    <span>Incoterms:</span>
                    <span className="text-white font-semibold">FOB Indonesia</span>
                  </div>
                  <a
                    href={`https://wa.me/6285771060462?text=${encodeURIComponent(
                      `Hello CocoBlim, I want to inquire about ${item.grade} at $${item.priceUSD}/MT.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold transition-all duration-200 ${isPopular
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                  >
                    {language === 'id' ? 'Minta Penawaran' : language === 'ar' ? 'طلب عرض سعر' : 'Get Quote'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOQ & Sample Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-6 md:p-8 mb-20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {t('freeSampleOffer')}
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white">
              {language === 'id'
                ? 'Butuh Sampel Untuk Pengujian Laboratorium Anda?'
                : language === 'ar'
                  ? 'هل تحتاج إلى عينة لاختبارها في معملك؟'
                  : 'Need Samples for Your Laboratory Verification?'}
            </h4>
            <p className="text-gray-300 text-sm max-w-2xl">
              {t('freeSampleDesc')}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/6285771060462?text=Hello%20CocoBlim,%20I%20would%20like%20to%20request%20a%20free%20activated%20carbon%20sample%20for%20testing."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/20 text-center"
            >
              {t('requestSampleWhatsApp')}
            </a>
            <a
              href="/catalog/ACTIVATED_CARBON_CATALOG.pdf"
              download="COCOBLIM_ACTIVATED_CARBON_CATALOG.pdf"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white text-xs font-bold py-3 px-6 rounded-xl transition-all text-center flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t('downloadCatalog')}
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
              {language === 'id' ? 'Pertanyaan yang Sering Diajukan (FAQ)' : language === 'ar' ? 'الأسئلة الشائعة (FAQ)' : 'Frequently Asked Questions (FAQ)'}
            </h3>
            <p className="text-gray-400 text-sm">
              {language === 'id'
                ? 'Semua hal yang perlu Anda ketahui mengenai spesifikasi, MOQ, sampel, dan ketentuan pengiriman.'
                : 'Everything you need to know regarding specifications, MOQ, sampling, and shipping.'}
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((item) => {
              const isOpen = openFaq === item.id;
              const question = language === 'id' ? item.questionId : language === 'ar' ? item.questionAr : item.questionEn;
              const answer = language === 'id' ? item.answerId : language === 'ar' ? item.answerAr : item.answerEn;

              return (
                <div
                  key={item.id}
                  className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="font-semibold text-sm md:text-base text-gray-100">
                      {question}
                    </span>
                    <span className={`text-emerald-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDownIcon className="w-5 h-5" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-gray-300 text-sm leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

