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

  // Email subjects and bodies in different languages
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

  const whatsappMessage = encodeURIComponent(whatsappMessages[language] || whatsappMessages.en);
  const emailSubject = encodeURIComponent(emailSubjects[language] || emailSubjects.en);
  const emailBody = encodeURIComponent(emailBodies[language] || emailBodies.en);

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const containerClasses = variant === 'horizontal' 
    ? 'flex flex-col sm:flex-row gap-4 justify-center items-center'
    : 'flex flex-col gap-4 items-center';

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

      {/* Request Sample Button - Secondary - Direct to WhatsApp */}
      <Link 
        href={`https://wa.me/6285144920078?text=${whatsappMessage}`}
        target="_blank"
        className={`${buttonBaseClasses} bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 border-2 border-transparent hover:shadow-xl`}
      >
        {t('requestSampleBtn')}
      </Link>

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

      {/* Download NIB Certificate Button - Tertiary */}
      {showAll && (
        <Link 
          href="/file/NIB.pdf" 
          target="_blank"
          className={`${buttonBaseClasses} bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 border-2 border-transparent hover:shadow-xl`}
        >
          {t('downloadNIB')}
        </Link>
      )}
    </div>
  );
};

export default ActionButtons;
