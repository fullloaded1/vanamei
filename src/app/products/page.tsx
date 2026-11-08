'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { activatedCarbonProducts } from '@/data/activatedCarbonProducts';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProductsPage() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Granular', 'Powder', 'Pellet', 'Specialty'];

  const filteredProducts =
    selectedCategory === 'All'
      ? activatedCarbonProducts
      : activatedCarbonProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-bg text-ink pt-28 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="pt-8 pb-12 ">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-tight text-ink mb-4">
            Carbon Grades Catalog
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            High-purity steam activated coconut shell and palm shell carbon manufactured to international ASTM specifications for water filtration, gold recovery CIP/CIL, and gas scrubbers.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2 pt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`h-11 px-5 text-sm font-bold uppercase transition-colors duration-150 ${
                  selectedCategory === cat
                    ? 'bg-accent text-accent-ink'
                    : 'bg-surface text-muted hover:text-ink'
                }`}
              >
                {cat === 'All' ? (language === 'id' ? 'All Products' : cat) : `${cat} Carbon`}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const title =
              language === 'id'
                ? product.nameId
                : language === 'ar'
                ? product.nameAr
                : product.name;
            const desc =
              language === 'id'
                ? product.shortDescId
                : language === 'ar'
                ? product.shortDescAr
                : product.shortDesc;

            return (
              <div key={product.id} className="bg-surface flex flex-col justify-between p-6 space-y-6">
                <div>
                  <div className="w-full aspect-[4/3] bg-bg relative overflow-hidden mb-6">
                    <Image
                      src={product.image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <p className="text-sm font-semibold text-accent mb-2">
                    {product.iodineRange} · {product.rawMaterial}
                  </p>

                  <h2 className="font-display text-2xl uppercase tracking-tight text-ink mb-3 leading-snug">
                    {title}
                  </h2>

                  <p className="text-ink text-base leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 -alt">
                  <div className="text-sm text-muted">
                    <span className="font-semibold text-ink">Mesh sizes: </span>
                    {product.meshSizes.join(', ')}
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 h-12 bg-surface-alt hover:bg-bg text-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
                    >
                      Specifications
                    </Link>
                    <a
                      href={`https://wa.me/6285771060462?text=${encodeURIComponent(
                        `Halo CocoBlim, saya ingin meminta penawaran FOB untuk ${product.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 px-5 bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
                    >
                      RFQ
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Catalog Download Banner */}
        <div className="p-8 sm:p-12 bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-ink mb-2">
              Official Technical Datasheet (PDF)
            </h3>
            <p className="text-muted text-base leading-relaxed">
              Download complete ASTM testing parameters, particle mesh classification charts, and international export packing specifications.
            </p>
          </div>

          <a
            href="/catalog/ACTIVATED_CARBON_CATALOG.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-8 bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150 flex-shrink-0"
          >
            Download Catalog
          </a>
        </div>
      </div>
    </div>
  );
}
