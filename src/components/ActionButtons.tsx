'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface ActionButtonsProps {
  variant?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
  showAll?: boolean;
  className?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  variant = 'horizontal', 
  size = 'medium',
  showAll = true,
  className = ''
}) => {
  const { t, language } = useLanguage();

  // WhatsApp messages in different languages
  const whatsappMessages = {
    en: "Hello CocoBlim, I would like to request a sample of your charcoal products. Please provide more information about available samples and shipping details. Thank you!",
    id: "Halo CocoBlim, saya ingin meminta sampel produk arang Anda. Mohon berikan informasi lebih lanjut tentang sampel yang tersedia dan detail pengiriman. Terima kasih!",
    ar: "مرحباً كوكوبليم، أود طلب عينة من منتجات الفحم الخاصة بكم. يرجى تقديم المزيد من المعلومات حول العينات المتاحة وتفاصيل الشحن. شكراً لكم!"
  };

  // Email subjects and bodies for quotes
  const emailSubjects = {
    en: "Quote Request - CocoBlim Charcoal Products",
    id: "Permintaan Penawaran - Produk Arang CocoBlim", 
    ar: "طلب عرض سعر - منتجات الفحم كوكوبليم"
  };

  const emailBodies = {
    en: "Dear CocoBlim Team,\n\nI am interested in getting a quote for your charcoal products. Please provide detailed pricing information including:\n\n- Product specifications\n- Minimum order quantities\n- Pricing per unit/bulk\n- Shipping costs and delivery time\n- Payment terms\n\nThank you for your time and I look forward to your response.\n\nBest regards,",
    id: "Tim CocoBlim yang terhormat,\n\nSaya tertarik untuk mendapatkan penawaran harga produk arang Anda. Mohon berikan informasi harga detail termasuk:\n\n- Spesifikasi produk\n- Minimum order quantity\n- Harga per unit/bulk\n- Biaya pengiriman dan waktu delivery\n- Syarat pembayaran\n\nTerima kasih atas waktu Anda dan saya menunggu respon Anda.\n\nSalam hormat,",
    ar: "فريق كوكوبليم المحترم،\n\nأنا مهتم بالحصول على عرض سعر لمنتجات الفحم الخاصة بكم. يرجى تقديم معلومات تفصيلية عن الأسعار تشمل:\n\n- مواصفات المنتج\n- الحد الأدنى لكمية الطلب\n- السعر لكل وحدة/بالجملة\n- تكاليف الشحن ووقت التسليم\n- شروط الدفع\n\nشكراً لوقتكم وأتطلع لردكم.\n\nمع أطيب التحيات،"
  };

  // Email subjects and bodies for sample requests
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

  const whatsappMessage = encodeURIComponent(whatsappMessages[language] || whatsappMessages.en);
  const emailSubject = encodeURIComponent(emailSubjects[language] || emailSubjects.en);
  const emailBody = encodeURIComponent(emailBodies[language] || emailBodies.en);
  const sampleEmailSubject = encodeURIComponent(sampleEmailSubjects[language] || sampleEmailSubjects.en);
  const sampleEmailBody = encodeURIComponent(sampleEmailBodies[language] || sampleEmailBodies.en);

  const sizeClasses = {
    small: 'px-3 py-1.5 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base'
  };

  const containerClasses = variant === 'horizontal' 
    ? 'flex flex-col sm:flex-row gap-2 justify-center items-center'
    : 'flex flex-col gap-2 items-center';

  const buttonBaseClasses = `${sizeClasses[size]} font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-center inline-block`;

  return (
    <div className={`${containerClasses} ${className}`}>
      {/* Get Quote Button - Primary - Direct to Email */}
      <Link 
        href={`mailto:info@cocoblim.com?subject=${emailSubject}&body=${emailBody}`}
        className={`${buttonBaseClasses} bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 border-2 border-transparent hover:shadow-xl`}
      >
        {t('getQuoteBtn')}
      </Link>

      {/* Request Sample Buttons - Two Options */}
      <div className="flex flex-col sm:flex-row gap-1.5">
        {/* Sample Request via Email */}
        <Link 
          href={`mailto:info@cocoblim.com?subject=${sampleEmailSubject}&body=${sampleEmailBody}`}
          className={`${buttonBaseClasses} bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 border-2 border-transparent hover:shadow-xl flex items-center justify-center`}
        >
          <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          {t('requestSampleEmail')}
        </Link>
        
        {/* Sample Request via WhatsApp */}
        <Link 
          href={`https://wa.me/6285771060462?text=${whatsappMessage}`}
          target="_blank"
          className={`${buttonBaseClasses} bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 border-2 border-transparent hover:shadow-xl flex items-center justify-center`}
        >
          <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
          </svg>
          {t('requestSampleWhatsApp')}
        </Link>
      </div>

      {/* Download Catalog Button - Tertiary */}
      {showAll && (
        <Link 
          href="/catalog.pdf" 
          target="_blank"
          className={`${buttonBaseClasses} bg-white text-gray-800 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 hover:shadow-xl`}
        >
          {t('downloadCatalog')}
        </Link>
      )}

    </div>
  );
};

export default ActionButtons;
