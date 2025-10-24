'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CharcoalProduct } from '@/data/charcoalProducts';
import { useLanguage } from '@/contexts/LanguageContext';

interface CharcoalProductCardProps {
  product: CharcoalProduct;
}

export default function CharcoalProductCard({ product }: CharcoalProductCardProps) {
  const { t } = useLanguage();
  
  return (
    <div className="text-center group cursor-pointer">
      {/* Product Image - Enhanced with smooth animations */}
      <div className="relative w-full aspect-square mb-0 overflow-hidden transform transition-all duration-700 ease-out group-hover:scale-105">
        <Image
          src={product.image}
          alt={t(product.name)}
          fill
          style={{ objectFit: 'cover' }}
          className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Subtle overlay animation */}
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-10"></div>
        
        {/* Floating category badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 text-xs font-medium rounded-full opacity-0 transform translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          {product.category}
        </div>
      </div>

      {/* White label box - enhanced with smooth animations */}
      <div className="bg-white p-4 mx-3 -mt-12 relative z-10 shadow-lg h-64 flex flex-col transform transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-1">
        {/* Feature tags - staggered animation */}
        <div className="mb-3 h-16 flex flex-wrap items-start justify-center content-start">
          {product.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="inline-block bg-white border border-gray-300 text-gray-800 px-2 py-1 text-xs font-normal mb-1 mr-1 transform transition-all duration-300 ease-out hover:scale-105 hover:border-gray-400 hover:shadow-sm animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 100}ms`
              }}
            >
              {t(feature)}
            </span>
          ))}
        </div>

        {/* Product Title - smooth color transition */}
        <h3 className="text-lg font-bold text-black mb-3 uppercase tracking-wide leading-tight h-12 flex items-center justify-center transition-colors duration-300 ease-out group-hover:text-gray-700">
          {t(product.name)}
        </h3>
        
        {/* Description - fade animation */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1 overflow-hidden transition-colors duration-300 ease-out group-hover:text-gray-600">
          {t(product.description)}
        </p>

        {/* More Detail Button - enhanced hover effects */}
        <div className="mt-auto">
          <Link 
            href={`/products/charcoal/${product.slug}`}
            className="inline-block bg-gray-800 text-white px-4 py-2 text-xs font-medium uppercase tracking-wide transform transition-all duration-300 ease-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            More Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
