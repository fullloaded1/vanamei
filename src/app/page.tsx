'use client';

import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CharcoalProductCard from '@/components/CharcoalProductCard';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import { charcoalProducts } from '@/data/charcoalProducts';

export default function Home() {
  const { t } = useLanguage();
  const heroAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const productsAnimation = useScrollAnimation();
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center justify-center min-h-[80vh]">
          <div 
            ref={heroAnimation.ref}
            className={`transition-all duration-1000 ease-out text-center ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-center">
              Do you need charcoal?<br />
              <span className="text-white">Our charcoal quality is<br />always trusted.</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center font-semibold"
              >
                Get Quote Now
              </Link>
              <Link 
                href="/#products" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-center font-semibold"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced with Better Animations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          {/* Section Title */}
          <div 
            className={`text-center mb-20 transition-all duration-800 ease-out ${
              benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="heading-lg text-gray-900 mb-4">
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
          
          <div 
            className={`text-center mt-20 transition-all duration-600 delay-600 ease-out ${
              benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg">
              {t('getSample')}
            </Link>
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
            <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg">
              {t('getSample')}
            </Link>
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
              <Link href="/contact" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105">
                {t('getSample')}
              </Link>
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

          </div>
        </div>
      </section>

      {/* Blog Section - Natural & Engaging */}
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
            <article className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded font-medium">QUALITY GUIDE</span>
                <span className="ml-2 text-xs text-gray-500">Dec 15, 2023</span>
              </div>
              <Link href="/blog/choosing-quality-coconut-products" className="group-hover:text-blue-600 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How to Choose Premium Coconut Products: A Buyer's Guide
                </h3>
              </Link>
              <p className="text-gray-600 text-sm mb-4">
                From moisture content to packaging - learn what separates premium coconut products from the rest. 
                <span className="font-medium">5 min read</span>
              </p>
              <div className="text-xs text-gray-500">
                2.3k views • 12 comments
              </div>
            </article>

            <article className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded font-medium">SUSTAINABILITY</span>
                <span className="ml-2 text-xs text-gray-500">Dec 8, 2023</span>
              </div>
              <Link href="/blog/coconut-industry-sustainability" className="group-hover:text-blue-600 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  The Future is Coconut: Sustainable Manufacturing in 2024
                </h3>
              </Link>
              <p className="text-gray-600 text-sm mb-4">
                How Indonesian coconut farmers are leading the sustainability revolution. 
                <span className="font-medium">7 min read</span>
              </p>
              <div className="text-xs text-gray-500">
                1.8k views • 8 comments
              </div>
            </article>

            <article className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded font-medium">INDUSTRY NEWS</span>
                <span className="ml-2 text-xs text-gray-500">Nov 28, 2023</span>
              </div>
              <Link href="/blog/coconut-charcoal-export-trends" className="group-hover:text-blue-600 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Export Trends: Why Global Demand for Coconut Charcoal is Soaring
                </h3>
              </Link>
              <p className="text-gray-600 text-sm mb-4">
                Market analysis and predictions for the coconut charcoal industry. 
                <span className="font-medium">4 min read</span>
              </p>
              <div className="text-xs text-gray-500">
                3.1k views • 24 comments
              </div>
            </article>
          </div>
          <div className="mt-12 text-center">
            <Link href="/blog" className="inline-block bg-blue-600 text-white px-6 py-3 rounded text-sm font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105">
              Read All Articles
            </Link>
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
          
          {/* Enhanced Map Section */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">CocoBlim Head Office</h3>
                <p className="text-white/90 text-sm">📍 Jakarta Selatan, DKI Jakarta, Indonesia</p>
                <p className="text-white/80 text-xs mt-1">Premium Charcoal Manufacturing & Export</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="h-64 bg-gray-200 overflow-hidden relative group">
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
                
                {/* Company overlay - Clean without icons */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-gray-900">CocoBlim Head Office</h3>
                    <p className="text-xs text-gray-700 font-medium">Jakarta Selatan, Indonesia</p>
                    <p className="text-xs text-blue-600 font-medium">Charcoal Export Specialist</p>
                  </div>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <a 
                    href="https://maps.app.goo.gl/4NAQsTvDfusyuVnG9?g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    View on Google Maps
                  </a>
                  
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=Jakarta,Indonesia`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium text-sm"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                    </svg>
                    Get Directions
                  </a>
                </div>
                
                {/* Business info - Clean without icons */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-800">Business Hours</p>
                    <p className="text-xs text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM (GMT+7)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-800">Contact</p>
                    <p className="text-xs text-gray-600">+62 851 4492 0078 (WhatsApp Available)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-800">Services</p>
                    <p className="text-xs text-gray-600">Manufacturing & Export Office | International Shipping Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
