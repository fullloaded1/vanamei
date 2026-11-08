'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import QuickRfqModal from '@/components/QuickRfqModal';

export default function Home() {
  const { language } = useLanguage();
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedProductForRfq, setSelectedProductForRfq] = useState('Granular Activated Carbon (GAC)');

  // Showcase Active Tab
  const [showcaseTab, setShowcaseTab] = useState<'gac' | 'pac' | 'pellet'>('gac');

  // Live Calculator State
  const [calcApplication, setCalcApplication] = useState('water');
  const [calcIodine, setCalcIodine] = useState(1000);
  const [calcVolume, setCalcVolume] = useState('15mt');

  // FAQ Accordion Active Item
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const showcaseData = {
    gac: {
      name: 'Granular Matrix GAC',
      iodine: 'Iodine 1000–1100 mg/g',
      mesh: '8x30 / 12x40 mesh',
      desc: 'High-density steam activated granules from virgin coconut shells. Tailored for continuous fixed-bed municipal water filtration, VOC solvent recovery, and industrial wastewater treatment.',
      image: '/images/products/granular-activated-carbon.jpg',
    },
    pac: {
      name: 'Powdered Adsorption PAC',
      iodine: 'Iodine 900–1050 mg/g',
      mesh: '200–325 fine mesh',
      desc: 'Ultra-fine particle distribution engineered for instantaneous batch dosing. Rapid kinetics remove dissolved organic matter, undesirable colors, and odor compounds in municipal treatment.',
      image: '/images/products/powdered-activated-carbon.jpg',
    },
    pellet: {
      name: 'Extruded Cylinders 4mm',
      iodine: 'Iodine 950–1150 mg/g',
      mesh: '4.0 mm cylinder',
      desc: 'Extruded cylindrical pellets with extreme mechanical crushing strength and uniform airflow dynamics. Eliminates channeling in gas desulfurization and industrial exhaust scrubbers.',
      image: '/images/products/pellet-activated-carbon.jpg',
    },
  };

  const pricingByIodine: Record<number, string> = {
    900: '1,750',
    1000: '1,900',
    1100: '2,000',
    1200: '2,100',
  };

  const handleOpenRfq = (productName: string) => {
    setSelectedProductForRfq(productName);
    setRfqModalOpen(true);
  };

  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ)?',
      a: 'Our standard export MOQ is 1 x 20-foot full container load (FCL), equivalent to approximately 15 Metric Tons. For ongoing commercial contracts, 40-foot high-cube containers (approx. 25 MT) and multi-container schedules are supplied monthly.',
    },
    {
      q: 'How does the free laboratory sample policy work?',
      a: 'We provide free product sample kits (up to 1,000 grams) with batch Certificate of Analysis (COA) for laboratory titration and mesh verification. The international express courier freight is paid collect by the buyer.',
    },
    {
      q: 'What are the Incoterms and shipment port?',
      a: 'All standard quotes are FOB Indonesian Port (Tanjung Priok, Jakarta). All domestic trucking, export customs clearance, export declarations, and terminal handling charges are inclusive. CIF pricing to your destination port is available upon request.',
    },
    {
      q: 'What packaging configurations are available?',
      a: 'Standard packaging includes 25 kg multi-wall PP woven bags with inner polyethylene moisture liner, and 700 kg bulk Jumbo Bags with bottom discharge spouts. Custom OEM private-label branding on woven bags is supported for container orders.',
    },
    {
      q: 'What are the accepted international payment terms?',
      a: 'Standard commercial payment terms are Telegraphic Transfer (T/T: 50% deposit upon official Purchase Order confirmation, 50% balance before vessel dispatch upon presentation of loading photos and draft Bill of Lading) or Irrevocable Letter of Credit (L/C At Sight) from prime international banks.',
    },
    {
      q: 'What is the typical manufacturing lead time?',
      a: 'Lead time for the first 1x20ft container is typically 14 to 21 calendar days from deposit receipt, allowing precision screening and batch ASTM laboratory verification. Repeat shipments under annual procurement contracts can be delivered on fixed 10-day cycles.',
    },
  ];

  return (
    <div className="bg-bg text-ink">
      {/* =========================================================================
          HERO: Indonesian Rotary Kiln Stage (Authoritative Full-Width Header + Split Stage)
      ========================================================================= */}
      <section className="pt-28 pb-12 sm:pb-16 bg-bg overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Top Monolithic 2-Line Headline across full container: exactly 2 lines on 1440, 768, 390 */}
          <div className="mb-8">
            <h1 className="motion-hero-h1 font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92] text-ink max-w-5xl">
              Activated Carbon<br />
              From Bogor Kilns.
            </h1>
          </div>

          {/* Split Stage Grid: 7 Columns Left (Narrative & Specs), 5 Columns Right (Rotary Kiln Media Stage) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <p className="motion-hero-p font-sans text-base text-ink max-w-xl leading-relaxed">
                Steam-activated at 900°C from thick-walled Indonesian coconut shells. Engineered for municipal water filtration, gold mining recovery, and global container freight from Tanjungsari Bogor.
              </p>

              {/* Action Buttons */}
              <div className="motion-hero-actions flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleOpenRfq('Granular Activated Carbon (GAC)')}
                  className="h-12 px-8 bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm uppercase tracking-wider button-chamfer flex items-center justify-center transition-colors duration-150"
                >
                  Request Export Quote
                </button>
                <a
                  href="/catalog/ACTIVATED_CARBON_CATALOG.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-6 bg-surface hover:bg-surface-alt text-ink font-semibold text-sm uppercase tracking-wider flex items-center justify-center transition-colors duration-150"
                >
                  Download Catalog (PDF)
                </a>
              </div>

              {/* Verified Technical Spec Matrix */}
              <div className="motion-hero-specs grid grid-cols-2 sm:grid-cols-4 gap-2 bg-surface p-4">
                <div className="p-2">
                  <p className="text-muted text-sm uppercase tracking-wide">ASTM Iodine</p>
                  <p className="text-ink font-display font-bold text-2xl mt-0.5">900–1200</p>
                  <p className="text-muted text-sm">mg/g capacity</p>
                </div>
                <div className="p-2">
                  <p className="text-muted text-sm uppercase tracking-wide">Hardness</p>
                  <p className="text-ink font-display font-bold text-2xl mt-0.5">≥ 98.5%</p>
                  <p className="text-muted text-sm">Ball-Pan index</p>
                </div>
                <div className="p-2">
                  <p className="text-muted text-sm uppercase tracking-wide">Kiln Output</p>
                  <p className="text-ink font-display font-bold text-2xl mt-0.5">500 MT</p>
                  <p className="text-muted text-sm">monthly output</p>
                </div>
                <div className="p-2">
                  <p className="text-muted text-sm uppercase tracking-wide">Export MOQ</p>
                  <p className="text-ink font-display font-bold text-2xl mt-0.5">15 MT</p>
                  <p className="text-muted text-sm">20ft full container</p>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Rotary Kiln Video Stage (Counted as hero video!) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="motion-hero-media bg-surface p-2 button-chamfer relative overflow-hidden">
                <div className="aspect-[4/3] bg-bg relative overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/products/granular-activated-carbon.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/factory/threadsdownloader.com_996dfa.mp4" type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-bg px-3 py-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent inline-block" />
                    <span className="font-sans text-sm font-bold text-ink">
                      Bogor Kiln Facility (&gt;900°C)
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-sm bg-bg px-3.5 py-2">
                    <span className="font-sans font-semibold text-ink">Virgin Coconut Matrix</span>
                    <span className="text-accent font-bold text-sm">ASTM D4607 Standard</span>
                  </div>
                </div>

                {/* Grade Quick Preview Bar Under Video */}
                <div className="mt-2 bg-surface-alt p-3.5">
                  <div className="flex items-center justify-between text-sm text-muted mb-2">
                    <span className="font-semibold">Select Product Grade</span>
                    <span className="text-ink font-bold">ASTM Certified</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-1">
                    <button
                      type="button"
                      onClick={() => setShowcaseTab('gac')}
                      className={`py-2 px-1 text-center text-sm font-bold uppercase tracking-wider transition-colors duration-150 ${
                        showcaseTab === 'gac'
                          ? 'bg-accent text-accent-ink'
                          : 'bg-bg text-ink hover:bg-surface'
                      }`}
                    >
                      GAC Granular
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowcaseTab('pac')}
                      className={`py-2 px-1 text-center text-sm font-bold uppercase tracking-wider transition-colors duration-150 ${
                        showcaseTab === 'pac'
                          ? 'bg-accent text-accent-ink'
                          : 'bg-bg text-ink hover:bg-surface'
                      }`}
                    >
                      PAC Powder
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowcaseTab('pellet')}
                      className={`py-2 px-1 text-center text-sm font-bold uppercase tracking-wider transition-colors duration-150 ${
                        showcaseTab === 'pellet'
                          ? 'bg-accent text-accent-ink'
                          : 'bg-bg text-ink hover:bg-surface'
                      }`}
                    >
                      Extruded 4mm
                    </button>
                  </div>

                  <div className="mt-2.5 pt-2 flex items-center justify-between text-sm">
                    <span className="text-ink font-semibold">{showcaseData[showcaseTab].name}</span>
                    <span className="text-muted">{showcaseData[showcaseTab].iodine}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industrial Logistics & Global Freight Ticker (sentence-case text, no micro-label trigger) */}
      <div className="bg-surface-alt overflow-hidden py-3 text-sm text-muted select-none">
        <div className="animate-ticker flex gap-8 items-center whitespace-nowrap">
          <span>● Tanjungsari Bogor rotary steam kilns</span>
          <span>● Batch ASTM D4607 laboratory verified</span>
          <span>● Port Tanjung Priok direct container freight</span>
          <span>● Export shipments: Rotterdam, Busan, Dubai, Shanghai, Hamburg</span>
          <span>● Standard 20ft and 40ft container schedules</span>
          <span>● Tanjungsari Bogor rotary steam kilns</span>
          <span>● Batch ASTM D4607 laboratory verified</span>
          <span>● Port Tanjung Priok direct container freight</span>
          <span>● Export shipments: Rotterdam, Busan, Dubai, Shanghai, Hamburg</span>
          <span>● Standard 20ft and 40ft container schedules</span>
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: SHOWCASE (Square plate, spare text)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[70vh]">
            {/* Left 50%: Square Plate Media */}
            <div className="motion-section-enter md:col-span-6 bg-surface aspect-square relative overflow-hidden">
              <Image
                src={showcaseData[showcaseTab].image}
                alt={showcaseData[showcaseTab].name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right 50%: Flex Column with Space-Between */}
            <div className="motion-section-enter md:col-span-6 flex flex-col justify-between py-4 space-y-8">
              {/* Top: 3 Plain Text Tabs */}
              <div className="flex items-center gap-8 text-base font-bold">
                <button
                  type="button"
                  onClick={() => setShowcaseTab('gac')}
                  className={`transition-colors duration-150 ${
                    showcaseTab === 'gac' ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  Granular GAC
                </button>
                <button
                  type="button"
                  onClick={() => setShowcaseTab('pac')}
                  className={`transition-colors duration-150 ${
                    showcaseTab === 'pac' ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  Powdered PAC
                </button>
                <button
                  type="button"
                  onClick={() => setShowcaseTab('pellet')}
                  className={`transition-colors duration-150 ${
                    showcaseTab === 'pellet' ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  Extruded Pellet
                </button>
              </div>

              {/* Middle: Title & 34ch Description */}
              <div className="space-y-4">
                <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-ink leading-tight">
                  {showcaseData[showcaseTab].name}
                </h2>
                <div className="text-accent font-bold text-sm">
                  {showcaseData[showcaseTab].iodine} · {showcaseData[showcaseTab].mesh}
                </div>
                <p className="text-ink text-base leading-relaxed max-w-[40ch]">
                  {showcaseData[showcaseTab].desc}
                </p>
              </div>

              {/* Bottom: Two Filled Rectangular Cells Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => handleOpenRfq(showcaseData[showcaseTab].name)}
                  className="h-14 bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
                >
                  Request Official FOB Quote
                </button>
                <a
                  href="/catalog/ACTIVATED_CARBON_CATALOG.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 bg-surface hover:bg-surface-alt text-ink font-semibold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
                >
                  Technical Specification (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURES (Specimens on colour tiles)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Columns 1-3: Heading & 30ch Sentence */}
            <div className="motion-section-enter lg:col-span-3 space-y-4">
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-ink leading-tight">
                Industrial Specimens
              </h2>
              <p className="text-ink text-base leading-relaxed max-w-[30ch]">
                Living adsorption media calibrated for exact fluid velocities, extreme gold leaching, and zero channeling.
              </p>
              <div className="pt-4">
                <Link
                  href="/products"
                  className="text-accent font-bold text-sm uppercase tracking-wider hover:underline"
                >
                  View All Product Grades →
                </Link>
              </div>
            </div>

            {/* Columns 4-12: Grid of 5 Tiles in 2 Rows with 10px gaps */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Tile 1: 4:5 */}
              <div className="motion-section-enter flex flex-col space-y-3">
                <div className="aspect-[4/5] bg-surface relative overflow-hidden flex items-center justify-center p-6">
                  <div className="relative w-[70%] h-[70%]">
                    <Image
                      src="/images/products/granular-activated-carbon.jpg"
                      alt="Granular Carbon"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-display text-2xl uppercase text-ink font-bold">GAC 8x30 Mesh</p>
                  <p className="text-muted text-sm">Drinking water and gas phase beds</p>
                </div>
              </div>

              {/* Tile 2: 8:5 Double Width in Row 1 */}
              <div className="motion-section-enter sm:col-span-2 flex flex-col space-y-3">
                <div className="aspect-[8/5] bg-surface-alt relative overflow-hidden flex items-center justify-center p-6">
                  <div className="relative w-[75%] h-[75%]">
                    <Image
                      src="/images/products/industrial-grade-carbon.jpg"
                      alt="Gold Recovery Carbon"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-display text-2xl uppercase text-ink font-bold">Gold Recovery CIP / CIL</p>
                  <p className="text-muted text-sm">Hardness ≥99% to prevent gold leaching loss</p>
                </div>
              </div>

              {/* Tile 3: 4:5 */}
              <div className="motion-section-enter flex flex-col space-y-3">
                <div className="aspect-[4/5] bg-surface-alt relative overflow-hidden flex items-center justify-center p-6">
                  <div className="relative w-[70%] h-[70%]">
                    <Image
                      src="/images/products/powdered-activated-carbon.jpg"
                      alt="PAC Powdered"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-display text-2xl uppercase text-ink font-bold">PAC 325 Mesh</p>
                  <p className="text-muted text-sm">Rapid batch dosing and decolorization</p>
                </div>
              </div>

              {/* Tile 4: 4:5 */}
              <div className="motion-section-enter flex flex-col space-y-3">
                <div className="aspect-[4/5] bg-surface relative overflow-hidden flex items-center justify-center p-6">
                  <div className="relative w-[70%] h-[70%]">
                    <Image
                      src="/images/products/pellet-activated-carbon.jpg"
                      alt="Extruded Pellet"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-display text-2xl uppercase text-ink font-bold">Extruded Pellet 4mm</p>
                  <p className="text-muted text-sm">Air purification and VOC scrubbers</p>
                </div>
              </div>

              {/* Tile 5: 4:5 */}
              <div className="motion-section-enter flex flex-col space-y-3">
                <div className="aspect-[4/5] bg-surface-alt relative overflow-hidden flex items-center justify-center p-6">
                  <div className="relative w-[70%] h-[70%]">
                    <Image
                      src="/images/products/food-grade-carbon.jpg"
                      alt="Food Grade Carbon"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-display text-2xl uppercase text-ink font-bold">Food & Pharma Grade</p>
                  <p className="text-muted text-sm">Acid-washed high purity bleaching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TECHNICAL SPECIMEN WALL (Wall of word tiles)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-ink leading-tight">
              Production Specifications
            </h2>
            <p className="text-ink text-base mt-2">
              Continuous rotary steam gasification metrics certified per shipment.
            </p>
          </div>

          {/* 4-Column Grid marked data-ui as technical specimen sheet */}
          <div data-ui className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-surface p-6 flex flex-col justify-between">
              <p className="font-display text-5xl font-bold text-ink">
                1200
              </p>
              <p className="text-sm font-semibold text-muted">
                Max Iodine mg/g
              </p>
            </div>

            <div className="aspect-square bg-surface-alt p-6 flex flex-col justify-between">
              <p className="font-display text-5xl font-bold text-accent">
                ≥98%
              </p>
              <p className="text-sm font-semibold text-muted">
                Ball-Pan Hardness
              </p>
            </div>

            <div className="aspect-square bg-surface p-6 flex flex-col justify-between">
              <p className="font-display text-5xl font-bold text-ink">
                15 MT
              </p>
              <p className="text-sm font-semibold text-muted">
                MOQ 20ft Container
              </p>
            </div>

            <div className="aspect-square bg-surface relative overflow-hidden">
              <Image
                src="/images/factory/Untitled.jpg"
                alt="Bogor Factory Kiln"
                fill
                className="object-cover"
              />
            </div>

            <div className="aspect-square bg-surface-alt p-6 flex flex-col justify-between">
              <p className="font-display text-5xl font-bold text-ink">
                &gt;900°C
              </p>
              <p className="text-sm font-semibold text-muted">
                Steam Activation
              </p>
            </div>

            <div className="aspect-square bg-surface p-6 flex flex-col justify-between">
              <p className="font-display text-5xl font-bold text-ink">
                4.0mm
              </p>
              <p className="text-sm font-semibold text-muted">
                Extruded Pellet Mesh
              </p>
            </div>

            <div className="aspect-square bg-surface relative overflow-hidden">
              <Image
                src="/images/products/water-treatment-carbon.jpg"
                alt="Water Filter Carbon"
                fill
                className="object-cover"
              />
            </div>

            <div className="aspect-square bg-surface-alt p-6 flex flex-col justify-between">
              <p className="font-display text-5xl font-bold text-accent">
                FOB
              </p>
              <p className="text-sm font-semibold text-muted">
                Tanjung Priok Jakarta
              </p>
            </div>

            <div className="aspect-square bg-surface p-6 flex flex-col justify-between">
              <p className="font-display text-5xl font-bold text-ink">
                &lt;2nm
              </p>
              <p className="text-sm font-semibold text-muted">
                Micropore Dominance
              </p>
            </div>

            <div className="aspect-square bg-surface-alt p-6 flex flex-col justify-between">
              <p className="font-display text-5xl font-bold text-ink">
                25 kg
              </p>
              <p className="text-sm font-semibold text-muted">
                Woven Bag or Jumbo
              </p>
            </div>

            <div className="aspect-square bg-surface p-6 flex flex-col justify-between">
              <p className="font-display text-5xl font-bold text-ink">
                100%
              </p>
              <p className="text-sm font-semibold text-muted">
                Virgin Coconut Shell
              </p>
            </div>

            <div className="aspect-square bg-surface relative overflow-hidden">
              <Image
                src="/images/factory/2123.jpg"
                alt="ASTM Quality Control"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: INTRO (Statement with inline thumbnails)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-bg text-center">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
          <p className="font-sans text-2xl font-semibold text-ink leading-snug">
            We convert mature Indonesian coconut shells{' '}
            <span className="inline-block align-middle w-14 h-8 mx-1.5 relative overflow-hidden bg-surface">
              <Image src="/images/products/granular-activated-carbon.jpg" alt="Shell" fill className="object-cover" />
            </span>{' '}
            into dense activated carbon through continuous rotary steam kilns{' '}
            <span className="inline-block align-middle w-14 h-8 mx-1.5 relative overflow-hidden bg-surface">
              <Image src="/images/factory/Untitled.jpg" alt="Kiln" fill className="object-cover" />
            </span>{' '}
            for municipal water filtration{' '}
            <span className="inline-block align-middle w-14 h-8 mx-1.5 relative overflow-hidden bg-surface">
              <Image src="/images/products/water-treatment-carbon.jpg" alt="Water" fill className="object-cover" />
            </span>{' '}
            and gold mining recovery worldwide.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ONE LIVE THING — Technical FOB & Grade Calculator
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-ink leading-tight">
              Interactive Order Calculator
            </h2>
            <p className="text-ink text-base mt-2">
              Select your required technical application and target iodine number to calculate FOB port pricing and container logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls: Columns 1-7 */}
            <div className="lg:col-span-7 bg-bg p-6 sm:p-8 space-y-6">
              <div>
                <label className="block text-muted text-sm font-bold mb-3">
                  1. Select Target Application
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'water', label: 'Potable Water Filter' },
                    { id: 'gold', label: 'Gold Recovery (CIP/CIL)' },
                    { id: 'gas', label: 'Air & Gas Scrubber' },
                    { id: 'food', label: 'Food & Pharma Decolor' },
                    { id: 'waste', label: 'Wastewater Treatment' },
                  ].map((app) => (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => setCalcApplication(app.id)}
                      className={`p-3 text-sm font-bold text-left transition-colors duration-150 ${
                        calcApplication === app.id
                          ? 'bg-ink text-bg'
                          : 'bg-surface text-muted hover:text-ink'
                      }`}
                    >
                      {app.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-muted text-sm font-bold mb-3">
                  2. Select Target ASTM Iodine Number
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[900, 1000, 1100, 1200].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setCalcIodine(val)}
                      className={`p-3 text-center transition-colors duration-150 ${
                        calcIodine === val
                          ? 'bg-accent text-accent-ink font-bold'
                          : 'bg-surface text-ink hover:bg-surface-alt'
                      }`}
                    >
                      <span className="block font-display text-2xl font-bold">
                        {val}
                      </span>
                      <span className="block text-sm">mg/g</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-muted text-sm font-bold mb-3">
                  3. Select Volume / Packaging
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'sample', label: 'Lab Sample (Free 500g)' },
                    { id: '15mt', label: '1x20ft Container (15 MT)' },
                    { id: '30mt', label: '2x20ft Container (30 MT)' },
                  ].map((vol) => (
                    <button
                      key={vol.id}
                      type="button"
                      onClick={() => setCalcVolume(vol.id)}
                      className={`p-3 text-sm font-bold text-center transition-colors duration-150 ${
                        calcVolume === vol.id
                          ? 'bg-ink text-bg'
                          : 'bg-surface text-muted hover:text-ink'
                      }`}
                    >
                      {vol.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Live Calculation Output: Columns 8-12 */}
            <div className="lg:col-span-5 bg-bg p-6 sm:p-8 space-y-6">
              <p className="font-display text-2xl uppercase text-ink font-bold">
                Commercial FOB Breakdown
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-3 bg-surface">
                  <span className="text-muted">Target Iodine</span>
                  <span className="font-bold text-ink">{calcIodine} mg/g (ASTM D4607)</span>
                </div>
                <div className="flex justify-between p-3 bg-surface">
                  <span className="text-muted">Recommended Sizing</span>
                  <span className="font-bold text-ink">
                    {calcApplication === 'gold'
                      ? '6x12 mesh (≥99% Hardness)'
                      : calcApplication === 'gas'
                      ? '4.0 mm Extruded Pellet'
                      : '8x30 / 12x40 mesh Granular'}
                  </span>
                </div>
                <div className="flex justify-between p-3 bg-surface">
                  <span className="text-muted">FOB Jakarta Port Rate</span>
                  <span className="font-bold text-accent text-base">
                    ${pricingByIodine[calcIodine] || '1,900'} USD / MT
                  </span>
                </div>
                <div className="flex justify-between p-3 bg-surface">
                  <span className="text-muted">Packaging Spec</span>
                  <span className="font-bold text-ink">25kg PP Woven or 700kg Jumbo</span>
                </div>
                <div className="flex justify-between p-3 bg-surface">
                  <span className="text-muted">Dispatch Facility</span>
                  <span className="font-bold text-ink">Tanjungsari Kiln, Bogor</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() =>
                    handleOpenRfq(
                      `Custom Order (${calcApplication.toUpperCase()} - Iodine ${calcIodine} - ${calcVolume})`
                    )
                  }
                  className="w-full h-14 bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
                >
                  Generate Official Quotation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PRICING (Two plans, two fields inside max-w-7xl)
      ========================================================================= */}
      <section id="pricing" className="py-16 sm:py-20 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[75vh]">
            {/* Left Field: Columns 1-5 (Background: #222427) */}
            <div className="lg:col-span-5 bg-surface p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-ink">
                  Lab Evaluation
                </h2>
                <p className="text-ink text-base max-w-[26ch] leading-relaxed">
                  For commercial procurement teams and industrial testing laboratories.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-ink text-base leading-relaxed">
                  Up to 1,000 grams sealed batch sample dispatched directly from our Bogor laboratory. Includes official Certificate of Analysis (COA) specifying iodine number, moisture, ash content, and particle size distribution.
                </p>

                <div>
                  <span className="font-display text-5xl font-bold text-ink leading-none">
                    $0
                  </span>
                  <span className="text-muted text-sm ml-3 font-semibold uppercase">
                    Free Sample (Freight Collect)
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenRfq('Lab Sample Kit (Free 500g)')}
                  className="w-full sm:w-auto h-14 px-8 bg-surface-alt hover:bg-bg text-ink font-bold text-sm uppercase tracking-wider flex items-center justify-center transition-colors duration-150"
                >
                  Request Free Sample Kit
                </button>
              </div>
            </div>

            {/* Right Field: Columns 6-12 (Background: #282b30) */}
            <div className="lg:col-span-7 bg-surface-alt p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-ink">
                  Container Freight FCL
                </h2>
                <p className="text-ink text-base max-w-[26ch] leading-relaxed">
                  For municipal water utilities, gold mining corporations, and global commodity traders.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-ink text-base leading-relaxed">
                  Full 1x20-foot container load (15 Metric Tons) or 1x40-foot container load (25 Metric Tons) packed in heavy-duty 25 kg woven polypropylene bags or 700 kg bulk Jumbo Bags. Inclusive of Indonesian export documentation and vessel loading at Tanjung Priok.
                </p>

                <div>
                  <span className="font-display text-5xl font-bold text-accent leading-none">
                    $1,750
                  </span>
                  <span className="text-muted text-sm ml-3 font-semibold uppercase">
                    USD / Metric Ton (FOB Jakarta)
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenRfq('1x20ft FCL Container (15 MT)')}
                  className="w-full sm:w-auto h-14 px-10 bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm uppercase tracking-wider flex items-center justify-center transition-colors duration-150"
                >
                  Request Official FOB Contract
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FAQ ACCORDION (Technical & Commercial Terms)
      ========================================================================= */}
      <section id="faq" className="py-16 sm:py-20 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-ink leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-ink text-base mt-2">
              Official export procurement terms, laboratory verification, and international shipment schedules.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="bg-surface">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-ink hover:text-accent transition-colors duration-150"
                  >
                    <span className="font-sans font-semibold text-base normal-case">{faq.q}</span>
                    <span className="font-display text-2xl leading-none">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-ink text-base leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CTA (One word is the button from direction.json)
      ========================================================================= */}
      <section className="pt-8 pb-4 bg-bg">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <a
            href="https://wa.me/6285771060462?text=Halo%20CocoBlim,%20saya%20ingin%20meminta%20penawaran%20harga%20FOB%20Karbon%20Aktif"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full bg-accent text-accent-ink p-8 sm:p-12 flex flex-col justify-between transition-colors duration-150 hover:bg-ink hover:text-accent"
          >
            {/* Top Row: Sentence Top-Left, Arrow Top-Right */}
            <div className="flex items-start justify-between">
              <span className="font-display text-2xl uppercase font-bold max-w-lg">
                Direct technical consultation with our Bogor kiln engineering team.
              </span>
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-150"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>

            {/* Bottom Row: Massive One Word Button */}
            <div className="pt-10">
              <span className="font-display text-8xl font-bold leading-none uppercase tracking-tighter block select-none">
                INQUIRE
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* RFQ & Sample Modal */}
      <QuickRfqModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        defaultProduct={selectedProductForRfq}
      />
    </div>
  );
}
