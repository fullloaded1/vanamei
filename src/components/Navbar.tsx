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
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-12 h-12 mr-3">
                <Image
                  src="/images/CocoBlim_logo_baru_-removebg-preview.png"
                  alt="CocoBlim Logo"
                  width={48}
                  height={48}
                  style={{ objectFit: 'contain' }}
                  className=""
                />
              </div>
              <span className="text-lg font-semibold text-gray-900">cocoblim.com</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm">
              {t('home')}
            </Link>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 text-sm flex items-center">
                {t('about')}
                <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-1 w-44 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
                <Link href="/about" className="block px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">Our Vision</Link>
                <Link href="/about" className="block px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">Our Values</Link>
                <Link href="/about" className="block px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">Our Achievement</Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 text-sm flex items-center">
                {t('product')}
                <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
                <Link href="/products" className="block px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">Coconut List</Link>
                <Link href="/products" className="block px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">Coconut Specification</Link>
                <Link href="/products/coconut-oil" className="block px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">Virgin Coconut Oil</Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 text-sm flex items-center">
                {t('media')}
                <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-1 w-36 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
                <Link href="/media" className="block px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">Team</Link>
                <Link href="/media" className="block px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">Legality</Link>
                <Link href="/media" className="block px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">Catalog</Link>
                <Link href="/media" className="block px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">Activity</Link>
                <Link href="/media" className="block px-3 py-2 text-xs text-gray-600 hover:bg-gray-50">Co-Factories</Link>
              </div>
            </div>
            
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 text-sm">
              {t('blog')}
            </Link>
            
            <Link href="/glossary" className="text-gray-700 hover:text-gray-900 text-sm">
              {t('glossary')}
            </Link>
            
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700 transition-colors">
              {t('getSample')}
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2">
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
              <Link href="/" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                {t('home')}
              </Link>
              <Link href="/about" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                {t('about')}
              </Link>
              <Link href="/products" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                {t('product')}
              </Link>
              <Link href="/media" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                {t('media')}
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                {t('blog')}
              </Link>
              <Link href="/glossary" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">
                {t('glossary')}
              </Link>
              <Link href="/contact" className="block mx-3 my-2 px-3 py-2 text-sm text-white bg-blue-600 rounded text-center hover:bg-blue-700">
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
