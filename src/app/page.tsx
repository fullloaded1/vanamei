'use client';

import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const heroAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const productsAnimation = useScrollAnimation();

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
            className={`w-full flex justify-end transition-all duration-1000 ${
              heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Text positioned on the right like screenshot */}
            <div className="max-w-2xl text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                Anda membutuhkan arang?
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight drop-shadow-2xl">
                Kualitas arang kami selalu dapat dipercaya.
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section - Exact Cocologi Style */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              Supplier arang Indonesia yang dapat dipercaya
            </h2>
          </div>

          <div className="space-y-12">
            {/* Benefit 1 */}
            <div 
              ref={benefitsAnimation.ref}
              className={`max-w-4xl transition-all duration-1000 ${
                benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">{t('benefit1Title')}</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {t('benefit1Text')}
              </p>
              <div className="text-sm text-gray-600">
                Average response: <span className="font-medium">2-4 hours</span>
              </div>
            </div>

            {/* Benefit 2 */}
            <div 
              className={`max-w-4xl transition-all duration-1000 delay-300 ${
                benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">{t('benefit2Title')}</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {t('benefit2Text')}
              </p>
              <div className="text-sm text-gray-600">
                Save up to <span className="font-medium">25% on shipping</span>
              </div>
            </div>

            {/* Benefit 3 */}
            <div 
              className={`max-w-4xl transition-all duration-1000 delay-500 ${
                benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">{t('benefit3Title')}</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {t('benefit3Text')}
              </p>
              <div className="text-sm text-gray-600">
                <span className="font-medium">99.8% quality approval</span> rate
              </div>
            </div>
          </div>
          
          <div 
            className={`text-center mt-16 transition-all duration-1000 delay-700 ${
              benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              {t('getSample')}
            </Link>
          </div>
        </div>
      </section>

      {/* Understanding Section - Natural & Engaging */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              We understand your coconut needs
            </h2>
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Indonesia isn't just the world's largest coconut producer - it's where coconut craftsmanship meets modern innovation. 
                <span className="font-medium text-gray-700">Our 6+ years of experience</span> has taught us that every client has unique requirements.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether you need <em>virgin coconut oil for premium cosmetics</em>, activated charcoal for water filtration, 
                or coir fiber for sustainable packaging - we've got the expertise and network to deliver exactly what you need.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <div className="text-sm text-gray-600">
                Exported to 23+ countries
              </div>
              <div className="text-sm text-gray-600">
                500+ satisfied clients
              </div>
              <div className="text-sm text-gray-600">
                ISO 22000 certified
              </div>
            </div>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section - Creative & Personal */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div 
            ref={storyAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
              storyAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                CocoBlim started in 2018 by a group of agricultural engineers who saw the untapped potential 
                in Indonesia's coconut waste. What began as a sustainability project has grown into 
                a trusted supply chain serving global markets.
              </p>
              <div className="mt-3 text-xs text-blue-600 font-medium">
                From waste to wonder
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                To become Southeast Asia's most innovative coconut products supplier, 
                bridging traditional Indonesian craftsmanship with modern global standards.
              </p>
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded text-xs font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                Partner with us
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rapid response to client needs while continuously innovating our processes. 
                We're not just suppliers - we're your coconut product development partners.
              </p>
              <div className="mt-3 text-xs text-orange-600 font-medium">
                Innovation never stops
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Creative & Detailed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div 
            ref={productsAnimation.ref}
            className={`transition-all duration-1000 delay-400 ${
              productsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Product Range
              </h2>
              <div className="text-sm text-gray-600">
                Available worldwide
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Premium Coconut Charcoal */}
              <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    PREMIUM GRADE
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Coconut Shell Charcoal
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Premium cube-shaped briquettes made from coconut shells. Perfect for shisha, BBQ, and industrial heating. 
                  <span className="font-medium">Burn time: 2-3 hours</span> | Low ash content.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/coconut-charcoal" className="text-blue-600 text-xs font-medium hover:underline">
                    Technical specs →
                  </Link>
                  <div className="text-xs text-gray-500">
                    MOQ: 1 ton
                  </div>
                </div>
              </div>

              {/* Virgin Coconut Oil */}
              <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    COLD-PRESSED
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Virgin Coconut Oil (VCO)
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Unrefined, cold-pressed oil from fresh coconut meat. Rich in lauric acid & vitamin E. 
                  <span className="font-medium">Food grade & cosmetic grade</span> available.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/coconut-oil" className="text-blue-600 text-xs font-medium hover:underline">
                    Certificates & specs →
                  </Link>
                  <div className="text-xs text-gray-500">
                    MOQ: 500L
                  </div>
                </div>
              </div>

              {/* Coir Fiber */}
              <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    ECO-FRIENDLY
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Coir Fiber & Pith
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Natural fiber from coconut husks. Perfect for erosion control, growing media, and packaging. 
                  <span className="font-medium">100% biodegradable</span> & sustainable.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/coconut-fiber" className="text-blue-600 text-xs font-medium hover:underline">
                    Applications guide →
                  </Link>
                  <div className="text-xs text-gray-500">
                    MOQ: 5 tons
                  </div>
                </div>
              </div>

              {/* Coconut Shell Products */}
              <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    VERSATILE
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Coconut Shell Products
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Bowls, cups, handicrafts from Sulawesi & Sumatra artisans. 
                  <span className="font-medium">Custom designs available</span> for retail & hospitality.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/coconut-shell" className="text-blue-600 text-xs font-medium hover:underline">
                    Design catalog →
                  </Link>
                  <div className="text-xs text-gray-500">
                    MOQ: 100 pcs
                  </div>
                </div>
              </div>

              {/* Sawdust Briquettes */}
              <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    LONG BURNING
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Sawdust Briquettes
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Compressed sawdust briquettes for heating & cooking. 
                  <span className="font-medium">4-5 hour burn time</span> | Low smoke emission.
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/sawdust-briquette" className="text-blue-600 text-xs font-medium hover:underline">
                    Burn test results →
                  </Link>
                  <div className="text-xs text-gray-500">
                    MOQ: 2 tons
                  </div>
                </div>
              </div>

              {/* Activated Carbon */}
              <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    INDUSTRIAL GRADE
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Activated Carbon (GAC)
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                  Granular activated carbon for water treatment, air purification & medical applications. 
                  <span className="font-medium">High iodine number</span> (&gt;1000).
                </p>
                <div className="flex items-center justify-between">
                  <Link href="/products/activated-carbon" className="text-blue-600 text-xs font-medium hover:underline">
                    Lab test reports →
                  </Link>
                  <div className="text-xs text-gray-500">
                    MOQ: 1 ton
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-lg">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Need custom specifications?</h3>
                <p className="text-sm text-gray-600">We work with your exact requirements - from moisture content to packaging.</p>
              </div>
              <div className="mt-4 sm:mt-0 space-x-3">
                <Link href="/products" className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded text-xs font-medium hover:bg-gray-300 transition-colors">
                  Full Catalog
                </Link>
                <Link href="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-xs font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                  Custom Quote
                </Link>
              </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-4">Quick questions & instant quotes</p>
              <Link href="https://wa.me/6281234567890" className="inline-block bg-green-600 text-white px-4 py-2 rounded text-xs font-medium hover:bg-green-700 transition-colors">
                Chat Now
              </Link>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-4">Detailed inquiries & documentation</p>
              <Link href="mailto:info@coconutatelier.com" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-xs font-medium hover:bg-blue-700 transition-colors">
                Send Email
              </Link>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-gray-900 mb-2">Video Call</h3>
              <p className="text-sm text-gray-600 mb-4">Factory tours & product demos</p>
              <Link href="/contact" className="inline-block bg-purple-600 text-white px-4 py-2 rounded text-xs font-medium hover:bg-purple-700 transition-colors">
                Schedule Call
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
    </>
  );
}
