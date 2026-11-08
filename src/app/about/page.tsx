'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { language, t } = useLanguage();

  return (
    <div className="bg-bg text-ink pt-28 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="pt-8 pb-12 ">
          <p className="text-sm font-semibold text-accent mb-2">
            Tanjungsari Facility · Bogor, West Java, Indonesia
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-ink mb-4 leading-tight">
            About CocoBlim
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted max-w-3xl leading-relaxed">
            {t('aboutUsText')}
          </p>
        </div>

        {/* Manufacturing Story */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-ink leading-tight">
              Manufacturing Excellence
            </h2>
            <div className="space-y-4 text-ink text-base leading-relaxed">
              <p>
                CocoBlim operates specialized thermal steam activation kilns in Tanjungsari, Bogor Regency, West Java. We source mature, thick-walled Indonesian coconut shells from established regional harvesters.
              </p>
              <p>
                Our high-temperature rotary activation chambers exceed 900°C, reacting steam with carbonized char to gasify internal volatile compounds and create high-density micropore networks (&lt;2 nm).
              </p>
              <p>
                Each production lot is classified through multi-deck vibratory screens for granular (8x30, 12x40 mesh), ultra-fine powder (325 mesh), and extruded cylindrical pellets (4.0mm) before direct container dispatch to Tanjung Priok Port, Jakarta.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="p-4 bg-surface text-center">
                <p className="font-display text-3xl font-bold text-accent">900°C+</p>
                <p className="text-xs text-muted uppercase mt-1">Steam Kiln Temp</p>
              </div>
              <div className="p-4 bg-surface text-center">
                <p className="font-display text-3xl font-bold text-ink">1200</p>
                <p className="text-xs text-muted uppercase mt-1">Max Iodine mg/g</p>
              </div>
              <div className="p-4 bg-surface text-center">
                <p className="font-display text-3xl font-bold text-accent">15 MT</p>
                <p className="text-xs text-muted uppercase mt-1">Container MOQ</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full aspect-[4/3] bg-surface relative overflow-hidden">
              <Image
                src="/images/factory/Untitled.jpg"
                alt="CocoBlim Bogor Kiln"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="p-8 bg-surface space-y-4">
            <h3 className="font-display text-3xl uppercase tracking-tight text-ink">
              Our Vision
            </h3>
            <p className="text-ink text-base leading-relaxed">
              {t('visionText')}
            </p>
          </div>

          <div className="p-8 bg-surface space-y-4">
            <h3 className="font-display text-3xl uppercase tracking-tight text-ink">
              Our Mission
            </h3>
            <ul className="space-y-3 text-ink text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                <span>{t('missionPoint1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                <span>{t('missionPoint2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></span>
                <span>{t('missionPoint3')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Direct Action Banner */}
        <div className="mt-8 p-8 sm:p-12 bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-ink mb-2">
              Visit Our Production Facility
            </h3>
            <p className="text-muted text-base">
              Jl. Tanjungsari, Kabupaten Bogor, Jawa Barat, Indonesia. Direct technical factory audits welcomed.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/contact"
              className="h-14 px-8 bg-surface-alt hover:bg-bg text-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/6285771060462?text=Halo%20CocoBlim,%20saya%20ingin%20berkonsultasi%20mengenai%20karbon%20aktif"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-8 bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
