'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSmoothScroll } from '@/hooks/useScrollAnimation';
import { scrollTo } from '@/lib/smoothScroll';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const closeMenu = () => setIsOpen(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-10 mr-4">
                <Image
                  src="/images/CocoBlim_logo_baru_-removebg-preview.png"
                  alt="CocoBlim Logo"
                  width={40}
                  height={40}
                  style={{ objectFit: 'contain' }}
                  className=""
                />
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">CocoBlim</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors py-2">
              {t('home')}
            </Link>
            
            <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors py-2">
              {t('about')}
            </Link>
            
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center transition-colors py-2">
                {t('product')}
                <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                <div className="py-2">
                  <Link href="/products" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium">All Products</Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <Link href="/products/charcoal/arang-briket-shisha" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Briket Shisha</Link>
                  <Link href="/products/charcoal/arang-kayu-keras" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Kayu Keras</Link>
                  <Link href="/products/charcoal/arang-tempurung-kelapa" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Tempurung Kelapa</Link>
                  <Link href="/products/charcoal/arang-sawdust-briquette" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">Sawdust Briquette</Link>
                </div>
              </div>
            </div>
            
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors py-2">
              {t('blog')}
            </Link>
            
            <Link href="/contact" className="bg-green-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all duration-200 hover:scale-105 shadow-sm">
              {t('getSample')}
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="hidden lg:flex items-center space-x-1 ml-6">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)}
                className={`flex items-center px-2 py-1 rounded text-xs transition-colors ${
                  language === lang.code 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="mr-1">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeMenu}>
                {t('home')}
              </Link>
              <Link href="/about" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeMenu}>
                {t('about')}
              </Link>
              <Link href="/products" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeMenu}>
                {t('product')}
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeMenu}>
                {t('blog')}
              </Link>
              <Link href="/contact" className="block mx-3 my-2 px-3 py-2 text-sm text-white bg-green-600 rounded text-center hover:bg-green-700" onClick={closeMenu}>
                {t('getSample')}
              </Link>
              
              {/* Mobile Language Switcher */}
              <div className="px-3 py-2">
                <div className="text-xs text-gray-500 mb-2">Language:</div>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className={`flex items-center justify-center px-2 py-1 rounded text-xs transition-colors ${
                        language === lang.code 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <span className="mr-1">{lang.flag}</span>
                      <span className="text-xs">{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
