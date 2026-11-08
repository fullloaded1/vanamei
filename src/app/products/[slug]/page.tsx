'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { activatedCarbonProducts } from '@/data/activatedCarbonProducts';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = use(params);
  const { language, t } = useLanguage();
  const product = activatedCarbonProducts.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const title =
    language === 'id' ? product.nameId : language === 'ar' ? product.nameAr : product.name;
  const desc =
    language === 'id'
      ? product.descriptionId
      : language === 'ar'
      ? product.descriptionAr
      : product.description;
  const rawMaterial = language === 'id' ? product.rawMaterialId : product.rawMaterial;
  const applications = language === 'id' ? product.applicationsId : product.applications;

  const waInquiryMessage = encodeURIComponent(
    `Hello CocoBlim, I am interested in purchasing ${product.name} (Slug: ${product.slug}). Please provide an official FOB quotation and technical specification sheet.`
  );

  const waSampleMessage = encodeURIComponent(
    `Hello CocoBlim, I would like to request a free laboratory sample for ${product.name} (Iodine: ${product.iodineRange}).`
  );

  const related = activatedCarbonProducts.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-bg text-ink pt-28 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Navigation Breadcrumb */}
        <div className="pt-8 pb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="hover:text-ink transition-colors duration-150">
            {t('home')}
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-ink transition-colors duration-150">
            {t('product')}
          </Link>
          <span>/</span>
          <span className="text-ink font-semibold">{product.category}</span>
        </div>

        {/* Title Block */}
        <div className="pb-12 ">
          <p className="text-sm font-semibold text-accent mb-2">
            ASTM D4607 Standard · {product.iodineRange}
          </p>
          <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-ink mb-4 leading-tight">
            {title}
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Main Product Layout */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Image & Direct Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="w-full aspect-[4/3] bg-surface relative overflow-hidden">
              <Image
                src={product.image}
                alt={title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 bg-surface text-sm">
              <div>
                <p className="text-muted text-xs uppercase font-semibold">Iodine Rating</p>
                <p className="font-bold text-ink text-base">{product.iodineRange}</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase font-semibold">Raw Material</p>
                <p className="font-bold text-ink text-base">{rawMaterial}</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase font-semibold">Sizing Mesh</p>
                <p className="font-bold text-ink text-base">{product.meshSizes.join(', ')}</p>
              </div>
              <div>
                <p className="text-muted text-xs uppercase font-semibold">Standard MOQ</p>
                <p className="font-bold text-ink text-base">15 MT (1x20ft Container)</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/6285771060462?text=${waInquiryMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-14 bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
              >
                Request FOB Quotation
              </a>
              <a
                href={`https://wa.me/6285771060462?text=${waSampleMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-14 bg-surface hover:bg-surface-alt text-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
              >
                Request Free Lab Sample
              </a>
            </div>
          </div>

          {/* Right Column: Applications & Technical Parameters */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="font-display text-2xl uppercase tracking-tight text-ink mb-4">
                Primary Industrial Applications
              </h2>
              <ul className="space-y-3">
                {applications.map((app, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-surface text-ink text-sm">
                    <span className="w-2 h-2 bg-accent mt-1.5 flex-shrink-0"></span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl uppercase tracking-tight text-ink mb-4">
                Technical Specifications (ASTM Standard)
              </h2>
              <div className="bg-surface overflow-hidden">
                <table className="w-full text-sm text-left">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-surface' : 'bg-surface-alt'}>
                        <td className="p-3 font-semibold text-muted">
                          {language === 'id' ? spec.labelId : spec.label}
                        </td>
                        <td className="p-3 font-bold text-ink">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl uppercase tracking-tight text-ink mb-3">
                Export Packaging Options
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {product.packaging.map((pack, idx) => (
                  <div key={idx} className="p-3 bg-surface text-ink">
                    <p className="font-bold text-accent mb-1">Standard Export</p>
                    <p>{pack}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="pt-16 ">
          <h2 className="font-display text-3xl uppercase tracking-tight text-ink mb-8">
            Related Product Grades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <div key={item.id} className="bg-surface p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="aspect-[4/3] bg-bg relative overflow-hidden mb-4">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <p className="text-sm text-accent font-semibold mb-1">{item.iodineRange}</p>
                  <h3 className="font-display text-xl uppercase tracking-tight text-ink">
                    {language === 'id' ? item.nameId : item.name}
                  </h3>
                </div>
                <Link
                  href={`/products/${item.slug}`}
                  className="w-full h-11 bg-surface-alt hover:bg-bg text-ink text-sm font-bold uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
                >
                  View Grade
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
