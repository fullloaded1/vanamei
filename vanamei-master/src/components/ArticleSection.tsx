'use client';

import React from 'react';
import { Article } from '@/data/articlesData';
import ActionButtons from './ActionButtons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ArticleSectionProps {
  article: Article;
  index: number;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ article, index }) => {
  const articleAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();

  // Determine background color alternating pattern
  const bgColor = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
  
  return (
    <section className={`py-16 ${bgColor}`} id={article.id}>
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={articleAnimation.ref}
          className={`transition-all duration-1000 ease-out ${
            articleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          {/* Article Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium uppercase tracking-wide">
                Artikel Pilihan
              </span>
              <span className="text-xs text-gray-500">
                {article.publishDate} • {article.readTime} baca
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h2>
            
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {article.metaDescription}
            </p>
            
            {/* Keywords for SEO */}
            <div className="hidden">
              {article.keywords.join(', ')}
            </div>
          </header>

          {/* Article Content */}
          <div 
            ref={contentAnimation.ref}
            className={`transition-all duration-800 delay-300 ease-out ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <article className="prose prose-lg max-w-none">
              {article.sections.map((section, sectionIndex) => (
                <div 
                  key={sectionIndex}
                  className={`mb-12 transition-all duration-700 ease-out ${
                    contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ 
                    transitionDelay: `${500 + (sectionIndex * 200)}ms`
                  }}
                >
                  {/* Section Subtitle */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                      {sectionIndex + 1}
                    </span>
                    {section.subtitle}
                  </h3>
                  
                  {/* Section Content */}
                  <div className="ml-12">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </article>

            {/* Call to Action Section */}
            <div className={`mt-16 p-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-100 transition-all duration-700 delay-1000 ease-out ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className="text-center">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Tertarik dengan Produk CocoBlim?
                </h4>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Dapatkan sample gratis dan konsultasi langsung dengan tim ahli kami. 
                  Kami siap membantu kebutuhan arang kelapa berkualitas tinggi Anda.
                </p>
                
                {/* Custom CTA Buttons based on article */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {article.cta.primary === "Minta Sample Sekarang" && (
                    <>
                      <a 
                        href="mailto:info@cocoblim.com?subject=Permintaan%20Sample%20Arang%20Kelapa%20CocoBlim&body=Halo%20CocoBlim,%0A%0ASaya%20tertarik%20untuk%20mendapatkan%20sample%20produk%20arang%20kelapa%20Anda.%0A%0AInformasi%20yang%20saya%20butuhkan:%0A-%20Jenis%20produk%20dan%20spesifikasi%0A-%20Ukuran%20sample%20yang%20tersedia%0A-%20Biaya%20pengiriman%20sample%0A-%20Waktu%20pengiriman%0A-%20Minimum%20order%20quantity%20untuk%20pembelian%20bulk%0A%0ATerima%20kasih."
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        📧 {article.cta.primary}
                      </a>
                      <a 
                        href="https://wa.me/6285144920078?text=Halo%20CocoBlim,%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20produk%20arang%20kelapa%20Anda."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        💬 {article.cta.secondary}
                      </a>
                    </>
                  )}
                  
                  {article.cta.primary === "Jadi Mitra Ekspor" && (
                    <>
                      <a 
                        href="mailto:info@cocoblim.com?subject=Partnership%20Inquiry%20-%20CocoBlim%20Export&body=Dear%20CocoBlim%20Team,%0A%0AI%20am%20interested%20in%20becoming%20your%20export%20partner.%0A%0APlease%20provide%20information%20about:%0A-%20Partnership%20requirements%0A-%20Product%20specifications%20and%20pricing%0A-%20Minimum%20order%20quantities%0A-%20Export%20documentation%20and%20certifications%0A-%20Shipping%20terms%20and%20delivery%0A%0AThank%20you."
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        🤝 {article.cta.primary}
                      </a>
                      <a 
                        href="mailto:info@cocoblim.com?subject=International%20Sales%20Inquiry&body=Hello%20CocoBlim%20International%20Sales,%0A%0AI%20would%20like%20to%20discuss%20coconut%20charcoal%20export%20opportunities.%0A%0APlease%20contact%20me%20to%20discuss:%0A-%20Product%20catalog%20and%20specifications%0A-%20Export%20pricing%20and%20terms%0A-%20Shipping%20and%20logistics%0A-%20Quality%20certifications%0A%0AThank%20you."
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        🌍 {article.cta.secondary}
                      </a>
                    </>
                  )}
                  
                  {article.cta.secondary === "Unduh Spec Sheet" && (
                    <>
                      <a 
                        href="mailto:info@cocoblim.com?subject=Request%20Sample%20-%20CocoBlim%20Coconut%20Charcoal&body=Halo%20CocoBlim,%0A%0ASaya%20ingin%20meminta%20sample%20produk%20arang%20kelapa%20untuk%20evaluasi%20kualitas.%0A%0AInformasi%20yang%20dibutuhkan:%0A-%20Sample%20berbagai%20jenis%20produk%0A-%20Spesifikasi%20teknis%20lengkap%0A-%20Sertifikat%20kualitas%0A-%20Biaya%20dan%20waktu%20pengiriman%0A%0ATerima%20kasih."
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        📧 {article.cta.primary}
                      </a>
                      <a 
                        href="mailto:info@cocoblim.com?subject=Request%20Technical%20Specification%20Sheet&body=Dear%20CocoBlim,%0A%0APlease%20send%20me%20the%20complete%20technical%20specification%20sheet%20for%20your%20coconut%20charcoal%20products.%0A%0AI%20need%20information%20about:%0A-%20Product%20specifications%20(moisture,%20ash%20content,%20calorific%20value)%0A-%20Quality%20certificates%0A-%20Packaging%20options%0A-%20Pricing%20information%0A%0AThank%20you."
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        📄 {article.cta.secondary}
                      </a>
                    </>
                  )}
                </div>
                
                <p className="text-sm text-gray-500 mt-6">
                  ⚡ Respon rata-rata: 2-4 jam | 🌍 Melayani ekspor ke 15+ negara
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
