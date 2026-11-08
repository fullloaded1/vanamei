'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'id', name: 'ID' },
    { code: 'ar', name: 'AR' },
  ];

  const whatsappMessage = encodeURIComponent(
    'Hello CocoBlim, I would like to inquire about your Activated Carbon products and request an official FOB price quote. Thank you!'
  );

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        isScrolled ? 'bg-surface' : 'bg-bg'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="/images/CocoBlim_logo_baru_-removebg-preview.png"
              alt="CocoBlim"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display text-2xl tracking-tight text-ink uppercase">
            CocoBlim
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted">
          <Link href="/" className="text-ink hover:text-accent transition-colors duration-150">
            {t('home')}
          </Link>
          <Link href="/products" className="hover:text-ink transition-colors duration-150">
            {t('product')}
          </Link>
          <a href="/#pricing" className="hover:text-ink transition-colors duration-150">
            {t('pricing')}
          </a>
          <Link href="/about" className="hover:text-ink transition-colors duration-150">
            {t('about')}
          </Link>
          <Link href="/blog" className="hover:text-ink transition-colors duration-150">
            {t('blog')}
          </Link>
          <a href="/#faq" className="hover:text-ink transition-colors duration-150">
            {t('faq')}
          </a>
          <Link href="/contact" className="hover:text-ink transition-colors duration-150">
            {t('contactUs')}
          </Link>
        </nav>

        {/* Right Action & Language Switcher */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code as 'en' | 'id' | 'ar')}
                className={`px-2 py-1 transition-colors duration-150 ${
                  language === lang.code
                    ? 'bg-ink text-bg font-bold'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>

          {/* Primary Action Button */}
          <a
            href={`https://wa.me/6285771060462?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 px-5 bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm tracking-wide uppercase transition-colors duration-150"
          >
            Request Quote
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-ink"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-bg px-6 py-8 md:hidden flex flex-col justify-between">
          <div className="space-y-6 text-2xl font-display uppercase tracking-tight">
            <Link href="/" onClick={closeMenu} className="block text-ink hover:text-accent">
              {t('home')}
            </Link>
            <Link href="/products" onClick={closeMenu} className="block text-ink hover:text-accent">
              {t('product')}
            </Link>
            <a href="/#pricing" onClick={closeMenu} className="block text-ink hover:text-accent">
              {t('pricing')}
            </a>
            <Link href="/about" onClick={closeMenu} className="block text-ink hover:text-accent">
              {t('about')}
            </Link>
            <Link href="/blog" onClick={closeMenu} className="block text-ink hover:text-accent">
              {t('blog')}
            </Link>
            <a href="/#faq" onClick={closeMenu} className="block text-ink hover:text-accent">
              {t('faq')}
            </a>
            <Link href="/contact" onClick={closeMenu} className="block text-ink hover:text-accent">
              {t('contactUs')}
            </Link>
          </div>

          <div className="space-y-6 pt-6">
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code as 'en' | 'id' | 'ar')}
                  className={`flex-1 py-2 text-sm font-bold ${
                    language === lang.code ? 'bg-ink text-bg' : 'bg-surface text-muted'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            <a
              href={`https://wa.me/6285771060462?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-accent text-accent-ink text-center font-bold text-sm uppercase tracking-wider"
            >
              WhatsApp Consultation (+62 857-7106-0462)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
