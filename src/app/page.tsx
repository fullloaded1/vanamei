'use client';

import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CharcoalProductCard from '@/components/CharcoalProductCard';
import PricingCard from '@/components/PricingCard';
import PriceListDownload from '@/components/PriceListDownload';
import PriceListImage from '@/components/PriceListImage';
import ActionButtons from '@/components/ActionButtons';
import NIBSection from '@/components/NIBSection';
import InteractiveMap from '@/components/InteractiveMap';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { charcoalProducts } from '@/data/charcoalProducts';
import { pricingProducts } from '@/data/pricingData';

export default function Home() {
  const { t } = useLanguage();
  const heroAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const productsAnimation = useScrollAnimation();
  const pricingAnimation = useScrollAnimation();
  const factoryAnimation = useScrollAnimation();

  return (
    <>
      {/* Hero Section - Clear Background Like Screenshot */}
      <section className="relative py-20 bg-black overflow-hidden min-h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero%20gambar.jpg"
            alt="CocoBlim coconut charcoal"
            fill
            style={{ objectFit: 'cover' }}
            className="brightness-90 contrast-120"
            priority
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center min-h-[80vh]">
          <div 
            ref={heroAnimation.ref}
            className={`w-full flex justify-end transition-all duration-1000 ease-out ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            {/* Text positioned on the right like screenshot */}
            <div className="max-w-2xl text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                {t('heroTitle')}
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight drop-shadow-2xl">
                {t('heroSubtitle')}
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section - Exact Cocologi Style */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {/* Section Title */}
          <div 
            className={`text-center mb-20 transition-all duration-800 ease-out ${
              benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whyUs')}
            </h2>
          </div>

          <div className="space-y-20">
            {/* Benefit 1 - Cepat dan tepat */}
            <div 
              ref={benefitsAnimation.ref}
              className={`transition-all duration-700 ease-out ${
                benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('benefit1Title')}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-4xl">
                {t('benefit1Text')}
              </p>
              <div className="text-base text-gray-600">
                Average response: <span className="font-semibold text-gray-800">2-4 hours</span>
              </div>
            </div>

            {/* Benefit 2 - Biaya rendah */}
            <div 
              className={`transition-all duration-700 delay-200 ease-out ${
                benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('benefit2Title')}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-4xl">
                {t('benefit2Text')}
              </p>
              <div className="text-base text-gray-600">
                Save up to <span className="font-semibold text-gray-800">25% on shipping</span>
              </div>
            </div>

            {/* Benefit 3 - Kualitas adalah prioritas */}
            <div 
              className={`transition-all duration-700 delay-400 ease-out ${
                benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('benefit3Title')}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-4xl">
                {t('benefit3Text')}
              </p>
              <div className="text-base text-gray-600">
                <span className="font-semibold text-gray-800">99.8% quality approval</span> rate
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Understanding Section - Cocologi Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              {t('understandingTitle')}
            </h2>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t('understandingText1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('understandingText2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Cocologi Style */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div 
            ref={storyAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-800 delay-200 ease-out ${
              storyAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('story')}</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {t('storyText')}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('vision')}</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {t('visionText')}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('mission')}</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {t('missionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NIB Certificate Section */}
      <NIBSection />

      {/* Charcoal Products Section - Enhanced with Professional Animations */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8">
          <div 
            ref={productsAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              productsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            {/* Section Header with Animation */}
            <div className={`text-center mb-12 transition-all duration-800 delay-200 ease-out ${
              productsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('ourProducts')}
              </h2>
              <div className="inline-block">
                <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-4 transform transition-all duration-700 ease-out scale-x-0 group-hover:scale-x-100" 
                     style={{ 
                       transformOrigin: 'center',
                       animation: productsAnimation.isVisible ? 'expandLine 1s ease-out 0.5s both' : 'none'
                     }}></div>
              </div>
            </div>

            {/* Products Grid - Enhanced with staggered animations - 2x2 grid for 4 products */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {charcoalProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`transition-all duration-700 ease-out transform ${
                    productsAnimation.isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-12 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: `${300 + (index * 150)}ms`,
                    willChange: 'transform, opacity'
                  }}
                >
                  <CharcoalProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Call to Action for Products */}
            <div className={`text-center mt-16 transition-all duration-700 delay-800 ease-out ${
              productsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <ActionButtons variant="horizontal" size="medium" className="mb-8" />
            </div>

            {/* Floating Background Elements for Visual Interest */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-gray-200/30 to-gray-300/20 rounded-full blur-xl transform transition-all duration-1000 ease-out"
                   style={{
                     animation: productsAnimation.isVisible ? 'float 6s ease-in-out infinite' : 'none'
                   }}></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-gray-300/20 to-gray-400/10 rounded-full blur-xl transform transition-all duration-1000 ease-out"
                   style={{
                     animation: productsAnimation.isVisible ? 'float 8s ease-in-out infinite reverse' : 'none',
                     animationDelay: '2s'
                   }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={pricingAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              pricingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('pricing') || 'FOB Pricing'}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                {t('pricingDescription') || 'Competitive FOB prices for premium Indonesian charcoal products. All prices are per metric ton with minimum order quantities.'}
              </p>
            </div>

            {/* Price List Image Display */}
            <div className="max-w-4xl mx-auto">
              <PriceListImage />
            </div>

            {/* Additional Info */}
            <div className={`text-center mt-16 transition-all duration-700 delay-800 ease-out ${
              pricingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('pricingNote') || 'Important Pricing Information'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
                  <div>
                    <strong className="text-emerald-700">FOB Terms:</strong> Free on Board - Tanjung Priok / Surabaya Port
                  </div>
                  <div>
                    <strong className="text-emerald-700">Payment:</strong> L/C, T/T, or negotiable terms
                  </div>
                  <div>
                    <strong className="text-emerald-700">Delivery:</strong> 2-3 weeks after order confirmation
                  </div>
                  <div>
                    <strong className="text-emerald-700">Packaging:</strong> Standard export packaging included
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Prices subject to change based on market conditions. Contact us for current rates and custom specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={factoryAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              factoryAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('ourFactory')}
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-700 mb-6">
                {t('factoryTitle')}
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('factoryDescription')}
              </p>
            </div>

            {/* Factory Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                '/images/factory/2.jpg',
                '/images/factory/2123.jpg',
                '/images/factory/Untitled.jpg',
                '/images/factory/WhatsApp Image 2025-10-02 at 18.07.51.jpeg',
                '/images/factory/WhatsApp Image 2025-10-02 at 18.07.52.jpeg',
                '/images/factory/WhatsApp Image 2025-10-02 at 18.07.53.jpeg'
              ].map((imageSrc, index) => (
                <div
                  key={index}
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                    factoryAnimation.isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${200 + (index * 150)}ms`,
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={`CocoBlim Factory - Production Facility ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Call to Action after Factory */}

          </div>
        </div>
      </section>

      {/* Latest Insights - CocoBlim Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Latest Insights
            </h2>
            <div className="text-sm text-gray-600">
              Updated weekly
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article 1 - Cara Memilih Arang Berkualitas */}
            <article className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded font-medium">QUALITY GUIDE</span>
                <span className="ml-2 text-xs text-gray-500">25 Jan 2024</span>
              </div>
              <a href="#cara-memilih-arang-berkualitas" className="group-hover:text-emerald-600 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Cara Memilih Arang Berkualitas: Panduan & Tips dari CocoBlim
                </h3>
              </a>
              <p className="text-gray-600 text-sm mb-4">
                Panduan lengkap memilih arang kelapa berkualitas tinggi. Tips dari ahli CocoBlim untuk mendapatkan arang terbaik untuk BBQ, hookah, dan keperluan industri.
                <span className="font-medium ml-1">7 menit baca</span>
              </p>
              <div className="text-xs text-gray-500">
                2.8k views • 15 comments
              </div>
            </article>

            {/* Article 2 - Arang Kelapa Pasar Global */}
            <article className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded font-medium">INDUSTRY NEWS</span>
                <span className="ml-2 text-xs text-gray-500">20 Jan 2024</span>
              </div>
              <a href="#arang-kelapa-pasar-global" className="group-hover:text-blue-600 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Mengapa Arang Kelapa (Coconut Charcoal) Semakin Diminati di Pasar Global
                </h3>
              </a>
              <p className="text-gray-600 text-sm mb-4">
                Pelajari mengapa permintaan arang kelapa Indonesia meningkat pesat di pasar global. Dari karakteristik unik hingga potensi ekspor yang menjanjikan.
                <span className="font-medium ml-1">6 menit baca</span>
              </p>
              <div className="text-xs text-gray-500">
                3.5k views • 28 comments
              </div>
            </article>

            {/* Article 3 - Keunggulan Arang CocoBlim */}
            <article className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded font-medium">COMPANY PROFILE</span>
                <span className="ml-2 text-xs text-gray-500">15 Jan 2024</span>
              </div>
              <a href="#keunggulan-arang-cocoblim" className="group-hover:text-green-600 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Keunggulan Arang CocoBlim: Dari Bahan Baku hingga Api yang Lebih Bersih
                </h3>
              </a>
              <p className="text-gray-600 text-sm mb-4">
                Temukan keunggulan arang kelapa CocoBlim dari bahan baku berkualitas, proses produksi modern, hingga pembakaran bersih untuk BBQ dan hookah terbaik.
                <span className="font-medium ml-1">5 menit baca</span>
              </p>
              <div className="text-xs text-gray-500">
                2.1k views • 11 comments
              </div>
            </article>
          </div>
          <div className="mt-12 text-center">
            <a href="#keunggulan-arang-cocoblim" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded text-sm font-medium hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
              Baca Semua Artikel
            </a>
          </div>
        </div>
      </section>


      {/* Contact Section - Creative & Engaging */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to start your coconut journey?
            </h2>
            <p className="text-gray-600 text-sm mb-8 max-w-2xl mx-auto">
              Whether you need samples, custom quotes, or just want to chat about coconut products - 
              we're here to help. <span className="font-medium">Average response time: 2-4 hours</span>
            </p>
            
            {/* Main Action Buttons */}
            <ActionButtons variant="horizontal" size="large" className="mb-8" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-4">Quick questions & instant quotes</p>
              <Link href="https://wa.me/6285144920078" className="inline-block bg-green-600 text-white px-4 py-2 rounded text-xs font-medium hover:bg-green-700 transition-colors">
                Chat Now
              </Link>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-4">Detailed inquiries & documentation</p>
              <Link href="mailto:info@cocoblim.com" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-xs font-medium hover:bg-blue-700 transition-colors">
                Send Email
              </Link>
            </div>
            
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gray-100 p-4 rounded-lg mr-4">
                <div className="text-2xl">QR</div>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900">Scan QR Code for Instant Contact</h3>
                <p className="text-sm text-gray-600">Add us to your contacts & get priority support</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Business Hours:</span> Mon-Fri 8AM-6PM (GMT+7) | 
              <span className="font-medium">Languages:</span> Indonesian, English
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <InteractiveMap />
    </>
  );
}
