'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { PricingProduct } from '@/data/pricingData';

interface PricingCardProps {
  product: PricingProduct;
}

const PricingCard: React.FC<PricingCardProps> = ({ product }) => {
  const { language } = useLanguage();

  const getProductName = () => {
    switch (language) {
      case 'id':
        return product.nameId;
      case 'ar':
        return product.nameAr;
      default:
        return product.name;
    }
  };

  const getProductDescription = () => {
    switch (language) {
      case 'id':
        return product.descriptionId;
      case 'ar':
        return product.descriptionAr;
      default:
        return product.description;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={getProductName()}
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-emerald-600/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        {/* Grade Badge (if available) */}
        {product.grade && (
          <div className="absolute top-3 right-3">
            <span className="bg-yellow-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              {product.grade}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {getProductName()}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {getProductDescription()}
        </p>

        {/* Pricing Information */}
        <div className="space-y-3">
          {/* FOB Price */}
          <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
            <span className="text-sm font-medium text-emerald-800">FOB PRICE</span>
            <span className="text-lg font-bold text-emerald-900">
              {product.currency} {product.fobPrice.toLocaleString()} / {product.unit}
            </span>
          </div>

          {/* MOQ */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-700">MOQ</span>
            <span className="text-sm font-semibold text-gray-900">
              {product.moq} {product.moqUnit}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button 
            onClick={() => {
              const message = language === 'id' 
                ? `Halo CocoBlim, saya tertarik dengan ${getProductName()}. Bisakah Anda memberikan informasi lebih lanjut tentang produk ini?`
                : language === 'ar'
                ? `مرحباً كوكوبليم، أنا مهتم بـ ${getProductName()}. هل يمكنكم تقديم المزيد من المعلومات حول هذا المنتج؟`
                : `Hello CocoBlim, I'm interested in ${getProductName()}. Can you provide more information about this product?`;
              
              window.open(`https://wa.me/6285144920078?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 px-4 rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {language === 'id' ? 'Tanya Harga' : language === 'ar' ? 'استفسر عن السعر' : 'Inquire Price'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
