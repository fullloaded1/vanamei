'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSmoothScroll } from '@/hooks/useScrollAnimation';
import { scrollTo } from '@/lib/smoothScroll';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sampleDropdownOpen, setSampleDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const closeMenu = () => setIsOpen(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  // Sample request email templates
  const sampleEmailSubjects = {
    en: "Sample Request - CocoBlim Charcoal Products",
    id: "Permintaan Sampel - Produk Arang CocoBlim",
    ar: "طلب عينة - منتجات الفحم كوكوبليم"
  };

  const sampleEmailBodies = {
    en: "Dear CocoBlim Team,\n\nI would like to request samples of your charcoal products for evaluation purposes. Please provide information about:\n\n- Available sample types and sizes\n- Sample shipping costs and delivery time\n- Product specifications and certificates\n- Minimum order quantities for bulk orders\n- Any sample fees or requirements\n\nI am particularly interested in:\n[ ] Coconut Briquette Shisha\n[ ] Hardwood Charcoal\n[ ] Coconut Shell Charcoal\n[ ] Granulated/Meshed Charcoal\n\nThank you for your assistance.\n\nBest regards,",
    id: "Tim CocoBlim yang terhormat,\n\nSaya ingin meminta sampel produk arang Anda untuk keperluan evaluasi. Mohon berikan informasi tentang:\n\n- Jenis dan ukuran sampel yang tersedia\n- Biaya pengiriman sampel dan waktu delivery\n- Spesifikasi produk dan sertifikat\n- Minimum order quantity untuk pemesanan bulk\n- Biaya sampel atau persyaratan lainnya\n\nSaya tertarik khususnya pada:\n[ ] Arang Briket Shisha\n[ ] Arang Kayu Keras\n[ ] Arang Tempurung Kelapa\n[ ] Arang Granula/Meshed\n\nTerima kasih atas bantuan Anda.\n\nSalam hormat,",
    ar: "فريق كوكوبليم المحترم،\n\nأود طلب عينات من منتجات الفحم الخاصة بكم لأغراض التقييم. يرجى تقديم معلومات حول:\n\n- أنواع وأحجام العينات المتاحة\n- تكاليف شحن العينات ووقت التسليم\n- مواصفات المنتج والشهادات\n- الحد الأدنى لكمية الطلب للطلبات بالجملة\n- أي رسوم عينات أو متطلبات\n\nأنا مهتم بشكل خاص بـ:\n[ ] فحم جوز الهند للشيشة\n[ ] فحم الخشب الصلب\n[ ] فحم قشر جوز الهند\n[ ] فحم محبب/مشبك\n\nشكراً لمساعدتكم.\n\nمع أطيب التحيات،"
  };

  const whatsappMessages = {
    en: "Hello CocoBlim, I would like to request a sample of your charcoal products. Please provide more information about available samples and shipping details. Thank you!",
    id: "Halo CocoBlim, saya ingin meminta sampel produk arang Anda. Mohon berikan informasi lebih lanjut tentang sampel yang tersedia dan detail pengiriman. Terima kasih!",
    ar: "مرحباً كوكوبليم، أود طلب عينة من منتجات الفحم الخاصة بكم. يرجى تقديم المزيد من المعلومات حول العينات المتاحة وتفاصيل الشحن. شكراً لكم!"
  };

  const sampleEmailSubject = encodeURIComponent(sampleEmailSubjects[language] || sampleEmailSubjects.en);
  const sampleEmailBody = encodeURIComponent(sampleEmailBodies[language] || sampleEmailBodies.en);
  const whatsappMessage = encodeURIComponent(whatsappMessages[language] || whatsappMessages.en);

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
            
            {/* Get Sample Dropdown */}
            <div className="relative group">
              <button 
                className="bg-green-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all duration-200 hover:scale-105 shadow-sm flex items-center"
                onMouseEnter={() => setSampleDropdownOpen(true)}
                onMouseLeave={() => setSampleDropdownOpen(false)}
              >
                {t('getSample')}
                <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50 transition-all duration-300 ${
                  sampleDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setSampleDropdownOpen(true)}
                onMouseLeave={() => setSampleDropdownOpen(false)}
              >
                <div className="py-2">
                  <Link 
                    href={`mailto:info@cocoblim.com?subject=${sampleEmailSubject}&body=${sampleEmailBody}`}
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {t('requestSampleEmail')}
                  </Link>
                  <Link 
                    href={`https://wa.me/6285771060462?text=${whatsappMessage}`}
                    target="_blank"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
                    </svg>
                    {t('requestSampleWhatsApp')}
                  </Link>
                </div>
              </div>
            </div>
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
              
              {/* Mobile Get Sample Options */}
              <div className="mx-3 my-2">
                <div className="text-xs text-gray-500 mb-2 px-3">{t('getSample')}:</div>
                <div className="space-y-2">
                  <Link 
                    href={`mailto:info@cocoblim.com?subject=${sampleEmailSubject}&body=${sampleEmailBody}`}
                    className="flex items-center px-3 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-700 transition-colors"
                    onClick={closeMenu}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {t('requestSampleEmail')}
                  </Link>
                  <Link 
                    href={`https://wa.me/6285771060462?text=${whatsappMessage}`}
                    target="_blank"
                    className="flex items-center px-3 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600 transition-colors"
                    onClick={closeMenu}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
                    </svg>
                    {t('requestSampleWhatsApp')}
                  </Link>
                </div>
              </div>
              
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
