'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-200 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-black">CocoBlim</h3>
            <p className="text-sm text-gray-600 mb-6">Premium Indonesian Coconut Products</p>
            
            <div>
              <h4 className="text-base font-semibold mb-3 text-black">Newsletter</h4>
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Enter your Email" 
                  className="px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                />
                <button className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-black">{t('quickLinks') || 'Quick Links'}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-black transition-colors">{t('home')}</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-black transition-colors">{t('about')}</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-black transition-colors">{t('ourProducts')}</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-black transition-colors">{t('ourFactory')}</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-black transition-colors">{t('contact') || 'Contact'}</Link></li>
            </ul>
          </div>

          {/* Charcoal Products */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-black">{t('ourProducts')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/charcoal/arang-briket-shisha" className="text-gray-600 hover:text-black transition-colors">{t('charcoalBriketShisha')}</Link></li>
              <li><Link href="/products/charcoal/arang-kayu-keras" className="text-gray-600 hover:text-black transition-colors">{t('charcoalKayuKeras')}</Link></li>
              <li><Link href="/products/charcoal/arang-tempurung-kelapa" className="text-gray-600 hover:text-black transition-colors">{t('charcoalTempurungKelapa')}</Link></li>
              <li><Link href="/products/charcoal/arang-sawdust-briquette" className="text-gray-600 hover:text-black transition-colors">{t('charcoalSawdustBriquette')}</Link></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-black">{t('about')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-black transition-colors">{t('story')}</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-black transition-colors">{t('vision')}</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-black transition-colors">{t('mission')}</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-black transition-colors">{t('ourFactory')}</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-black">{t('contactUs')}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <span className="text-gray-600">📞</span>
                <span className="ml-2 text-gray-600">+62 851 4492 0078</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600">✉️</span>
                <span className="ml-2 text-gray-600">info@cocoblim.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600">📍</span>
                <span className="ml-2 text-gray-600">Jakarta, Indonesia</span>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3 mt-4">
                <a href="https://wa.me/6285144920078" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  <span className="text-xs">WA</span>
                </a>
                <a href="tel:+6285144920078" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  <span className="text-xs">📞</span>
                </a>
                <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  <span className="text-xs">IG</span>
                </a>
                <a href="mailto:info@cocoblim.com" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  <span className="text-xs">@</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>2025 © CocoBlim | All Right reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/faq" className="hover:text-black transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
