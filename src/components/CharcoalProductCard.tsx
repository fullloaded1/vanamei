'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { activatedCarbonProducts, ActivatedCarbonProduct } from '@/data/activatedCarbonProducts';
import { WhatsAppIcon } from '@/components/Icons';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    description: string;
    features?: string[];
    image: string;
    category?: string;
  };
}

export default function CharcoalProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();

  // Find full activated carbon product details if available
  const fullProduct: ActivatedCarbonProduct | undefined = activatedCarbonProducts.find(
    p => p.slug === product.slug || p.id === product.id
  );

  const title = fullProduct
    ? (language === 'id' ? fullProduct.nameId : language === 'ar' ? fullProduct.nameAr : fullProduct.name)
    : product.name;

  const desc = fullProduct
    ? (language === 'id' ? fullProduct.shortDescId : language === 'ar' ? fullProduct.shortDescAr : fullProduct.shortDesc)
    : product.description;

  const rawMat = fullProduct
    ? (language === 'id' ? fullProduct.rawMaterialId : fullProduct.rawMaterial)
    : 'Coconut Shell';

  const iodine = fullProduct?.iodineRange || '900 - 1200 mg/g';
  const meshChips = fullProduct?.meshSizes.slice(0, 3) || ['8x30', '12x40', '325 mesh'];

  const waMessage = encodeURIComponent(
    `Hello CocoBlim, I would like to request a quotation and sample for ${fullProduct?.name || product.name}.`
  );

  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 hover:border-emerald-500/60 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1">
      {/* Top Media Container */}
      <div className="relative w-full aspect-[4/3] bg-zinc-950 overflow-hidden">
        <Image
          src={product.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-95 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"></div>

        {/* Category Pill Top Left */}
        <div className="absolute top-3.5 left-3.5 bg-zinc-950/80 backdrop-blur-md border border-zinc-700/60 text-zinc-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          {fullProduct?.category || 'Activated Carbon'}
        </div>

        {/* Iodine Rating Pill Top Right */}
        <div className="absolute top-3.5 right-3.5 bg-emerald-500 text-zinc-950 text-xs font-black px-3 py-1 rounded-full shadow-md">
          {iodine}
        </div>

        {/* Bottom Title on Image */}
        <div className="absolute bottom-3.5 left-4 right-4">
          <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">
            {rawMat}
          </span>
          <h3 className="text-xl font-black text-white leading-snug drop-shadow-sm">
            {title}
          </h3>
        </div>
      </div>

      {/* Body Details */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-zinc-900 text-zinc-100">
        <div>
          <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-5 line-clamp-3">
            {desc}
          </p>

          {/* Mesh Tags Chips */}
          <div className="mb-5">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
              {t('meshSizes')}:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {meshChips.map((mesh, idx) => (
                <span
                  key={idx}
                  className="bg-zinc-800/90 border border-zinc-750 text-zinc-200 text-xs px-2.5 py-1 rounded-lg font-mono font-medium"
                >
                  {mesh}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-zinc-800 flex items-center gap-2.5">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold py-3 px-4 rounded-xl text-center transition-colors shadow-xs"
          >
            {t('viewDetails')}
          </Link>
          <a
            href={`https://wa.me/6285771060462?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs py-3 px-3.5 rounded-xl text-center transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
            title="Chat via WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 text-zinc-950" />
            <span className="hidden sm:inline">Quote</span>
          </a>
        </div>
      </div>
    </div>
  );
}
