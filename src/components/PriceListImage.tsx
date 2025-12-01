'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const PriceListImage: React.FC = () => {
  const { language, t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = '/images/PRICELIST.jpg';
    link.download = `CocoBlim-Price-List-${new Date().toISOString().split('T')[0]}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const printImage = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>CocoBlim Price List</title>
          <style>
            body { margin: 0; padding: 20px; text-align: center; }
            img { max-width: 100%; height: auto; }
            @media print {
              body { padding: 0; }
              img { width: 100%; }
            }
          </style>
        </head>
        <body>
          <img src="/images/PRICELIST.jpg" alt="CocoBlim Price List" />
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  return (
    <div className="w-full">
      {/* Price List Image Display */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="relative">
          <Image
            src="/images/PRICELIST.jpg"
            alt="CocoBlim Price List"
            width={800}
            height={600}
            className="w-full h-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setIsModalOpen(true)}
            priority
          />
          
          {/* Overlay with zoom hint */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-gray-800">
              {language === 'id' ? 'Klik untuk memperbesar' : language === 'ar' ? 'انقر للتكبير' : 'Click to enlarge'}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={downloadImage}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {language === 'id' ? 'Unduh Gambar Harga' : language === 'ar' ? 'تحميل صورة الأسعار' : 'Download Price Image'}
        </button>
        
        <button
          onClick={printImage}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          {language === 'id' ? 'Cetak Gambar Harga' : language === 'ar' ? 'طباعة صورة الأسعار' : 'Print Price Image'}
        </button>

        <button
          onClick={() => {
            const message = language === 'id' 
              ? `Halo CocoBlim, saya tertarik dengan daftar harga produk arang Anda. Bisakah Anda memberikan informasi lebih lanjut?`
              : language === 'ar'
              ? `مرحباً كوكوبليم، أنا مهتم بقائمة أسعار منتجات الفحم الخاصة بكم. هل يمكنكم تقديم المزيد من المعلومات؟`
              : `Hello CocoBlim, I'm interested in your charcoal product price list. Can you provide more information?`;
            
            window.open(`https://wa.me/6285771060462?text=${encodeURIComponent(message)}`, '_blank');
          }}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.594z"/>
          </svg>
          {language === 'id' ? 'Tanya via WhatsApp' : language === 'ar' ? 'استفسر عبر واتساب' : 'Ask via WhatsApp'}
        </button>
      </div>

      {/* Modal for enlarged view */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">
                {language === 'id' ? 'Daftar Harga CocoBlim' : language === 'ar' ? 'قائمة أسعار كوكوبليم' : 'CocoBlim Price List'}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-4">
              <div className="relative w-full h-[70vh]">
                <Image
                  src="/images/PRICELIST.jpg"
                  alt="CocoBlim Price List"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </div>
              
              {/* Modal Action Buttons */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={downloadImage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {language === 'id' ? 'Unduh' : language === 'ar' ? 'تحميل' : 'Download'}
                </button>
                <button
                  onClick={printImage}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {language === 'id' ? 'Cetak' : language === 'ar' ? 'طباعة' : 'Print'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceListImage;
