'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const headerAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();
  const teamAnimation = useScrollAnimation();

  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div 
            ref={headerAnimation.ref}
            className={`text-center transition-all duration-1000 ease-out ${
              headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About CocoBlim</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A fresh perspective on premium coconut charcoal manufacturing, built on quality, innovation, and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div 
            ref={storyAnimation.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
              storyAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Beginning</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  CocoBlim was established in 2024 with a clear vision: to become Indonesia's premier manufacturer of high-quality coconut charcoal products. Located in Jakarta Selatan, our modern facility combines traditional Indonesian craftsmanship with cutting-edge production technology.
                </p>
                <p>
                  As a new company, we're building our reputation on three core principles: uncompromising quality, sustainable sourcing, and exceptional customer service. Every product that leaves our facility meets international standards and reflects our commitment to excellence.
                </p>
                <p>
                  We work directly with local coconut farmers and suppliers, ensuring both quality raw materials and fair partnerships that benefit our community. Our focus is on creating long-term relationships built on trust and mutual success.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">2024</div>
                  <div className="text-sm text-gray-600">Company Founded</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">4+</div>
                  <div className="text-sm text-gray-600">Product Lines</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/factory/2.jpg"
                  alt="CocoBlim Factory"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div 
            ref={valuesAnimation.ref}
            className={`text-center mb-16 transition-all duration-800 ease-out ${
              valuesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our operations and shape our future growth.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ease-out ${
            valuesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To establish CocoBlim as a trusted name in premium coconut charcoal manufacturing, known for consistent quality and reliable service across domestic and international markets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To produce superior coconut charcoal products through innovative manufacturing processes, sustainable sourcing practices, and unwavering commitment to customer satisfaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Values</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Quality excellence, environmental responsibility, fair partnerships, continuous improvement, and transparent business practices form the core of our company culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div 
            ref={teamAnimation.ref}
            className={`transition-all duration-1000 ease-out ${
              teamAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose CocoBlim?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                As a new company, we bring fresh energy and modern approaches to traditional coconut charcoal manufacturing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-sm text-gray-600">
                  Every batch meets strict quality standards with comprehensive testing and quality control.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-sm text-gray-600">
                  Quick turnaround times and responsive customer service for all your inquiries.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Facility</h3>
                <p className="text-sm text-gray-600">
                  State-of-the-art equipment and processes ensure consistent, high-quality production.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Service</h3>
                <p className="text-sm text-gray-600">
                  Direct communication with our team for personalized solutions and support.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
