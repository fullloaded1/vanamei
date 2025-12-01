'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { charcoalProducts } from '@/data/charcoalProducts';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { t } = useLanguage();
  const product = charcoalProducts.find(p => p.slug === params.slug);
  const headerAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();
  const specsAnimation = useScrollAnimation();

  if (!product) {
    notFound();
  }

  // Extended product information for detail page
  const productSpecs = {
    'arang-briket-shisha': {
      specifications: [
        { label: t('rawMaterial'), value: t('selectedCoconutShells') },
        { label: t('shape'), value: t('cubeShape') },
        { label: 'Ash Content', value: '≤ 2.5%' },
        { label: 'Fixed Carbon', value: '≥ 75%' },
        { label: 'Burning Time', value: '90–120 menit' },
        { label: 'Calorific Value', value: '≥ 7.000 kcal/kg' }
      ],
      applications: [
        t('premiumShishaHookah'),
        t('bbqGrilling'),
        t('restaurantsCafes'),
        t('exportQuality')
      ],
      packaging: [
        t('per10kgCarton'),
        t('per20kgCarton'),
        t('customPackaging')
      ]
    },
    'arang-kayu-keras': {
      specifications: [
        { label: t('rawMaterial'), value: t('selectedHardwood') },
        { label: t('size'), value: '3-20 cm' },
        { label: 'Ash Content', value: '3-5%' },
        { label: 'Fixed Carbon', value: '≥ 70%' },
        { label: t('volatileMatter'), value: '≤ 20%' },
        { label: 'Calorific Value', value: '6,500-7,500 kcal/kg' },
        { label: 'Burning Time', value: '2-4 hours' }
      ],
      applications: [
        t('bbqGrilling'),
        t('traditionalRestaurants'),
        t('foodIndustry'),
        t('exportMarket')
      ],
      packaging: [
        t('per5kgPack'),
        t('per10kgSack'),
        t('per15kgPack'),
        t('customPackaging')
      ]
    },
    'arang-tempurung-kelapa': {
      specifications: [
        { label: t('rawMaterial'), value: t('selectedCoconutShells') },
        { label: t('size'), value: '3-12 cm (customizable)' },
        { label: t('moisture'), value: 'Max 8%' },
        { label: 'Ash Content', value: '3-5%' },
        { label: 'Fixed Carbon', value: 'Min 70%' },
        { label: t('volatileMatter'), value: 'Max 15%' },
        { label: 'Calorific Value', value: '6,500-7,200 kcal/kg' },
        { label: 'Burning Time', value: 'Long-lasting, low smoke' },
        { label: 'Ash Color', value: 'Grey to white' }
      ],
      applications: [
        t('activatedCarbonRaw'),
        t('metallurgyIndustry'),
        t('waterTreatment'),
        t('industrialFuel')
      ],
      packaging: [
        t('per25kgSack'),
        t('per50kgSack'),
        t('jumbo1ton'),
        t('bulkShipment')
      ]
    },
    'arang-granula-meshed': {
      specifications: [
        { label: t('rawMaterial'), value: t('activatedCoconutShells') },
        { label: t('meshSize'), value: '4x8, 6x12, 8x16, 12x40' },
        { label: t('iodineNumber'), value: '> 1000 mg/g' },
        { label: 'Ash Content', value: '< 5%' },
        { label: t('moisture'), value: '< 5%' },
        { label: t('hardness'), value: '> 95%' }
      ],
      applications: [
        t('waterTreatment'),
        t('airPurification'),
        t('goldRecovery'),
        t('chemicalProcessing')
      ],
      packaging: [
        t('per25kgSack'),
        'Jumbo bag 500kg',
        t('jumbo1ton'),
        t('customPackaging')
      ]
    },
    'arang-sawdust-briquette': {
      specifications: [
        { label: 'Form', value: 'Lump/crushed (compressed sawdust carbonized)' },
        { label: t('size'), value: '3-12 cm (adjustable on request)' },
        { label: t('moisture'), value: 'Max 8%' },
        { label: 'Ash Content', value: '2-4%' },
        { label: 'Fixed Carbon', value: 'Min 75%' },
        { label: t('volatileMatter'), value: 'Max 15%' },
        { label: 'Calorific Value', value: '6,800-7,500 kcal/kg' },
        { label: 'Burning Time', value: 'Long, steady heat release' },
        { label: 'Ash Color', value: 'White to light grey' }
      ],
      applications: [
        t('bbqGrilling'),
        t('restaurantsCafes'),
        t('industrialFuel'),
        t('exportQuality')
      ],
      packaging: [
        t('per10kgCarton'),
        t('per20kgCarton'),
        t('bulkPackaging')
      ]
    },
    'arang-activated-carbon': {
      specifications: [
        { label: t('rawMaterial'), value: t('activatedCoconutShells') },
        { label: t('iodineNumber'), value: '> 1200 mg/g' },
        { label: 'Ash Content', value: '< 3%' },
        { label: t('moisture'), value: '< 5%' },
        { label: t('hardness'), value: '> 98%' },
        { label: 'Surface Area', value: '> 1100 m²/g' }
      ],
      applications: [
        t('waterPurification'),
        t('airPurification'),
        t('goldRecovery'),
        t('chemicalProcessing')
      ],
      packaging: [
        t('per25kgSack'),
        t('per50kgSack'),
        t('jumbo1ton'),
        t('bulkShipment')
      ]
    }
  };

  const currentSpecs = productSpecs[product.slug as keyof typeof productSpecs] || productSpecs['arang-briket-shisha'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={headerAnimation.ref}
            className={`transition-all duration-800 ease-out ${
              headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-gray-900">Home</Link>
                <span>/</span>
                <Link href="/#products" className="hover:text-gray-900">Products</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">{product.name}</span>
              </div>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full h-full"
                />
              </div>

              {/* Product Info */}
              <div>
                {/* Category Badge */}
                <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {product.category}
                </div>

                {/* Product Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 uppercase">
                  {t(product.name)}
                </h1>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('keyFeatures')}:</h3>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{t(feature)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {t(product.description)}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 text-center"
                  >
                    {t('getQuote')}
                  </Link>
                  <Link 
                    href="/contact"
                    className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full font-medium hover:border-gray-900 transition-colors duration-300 text-center"
                  >
                    {t('requestSample')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            ref={specsAnimation.ref}
            className={`transition-all duration-800 delay-200 ease-out ${
              specsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Technical Specifications */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('productSpecifications')}</h3>
                <div className="space-y-4">
                  {currentSpecs.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600 font-medium">{spec.label}</span>
                      <span className="text-gray-900 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('applications')}</h3>
                <div className="space-y-3">
                  {currentSpecs.applications.map((app, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging Options */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('packaging')}</h3>
                <div className="space-y-3">
                  {currentSpecs.packaging.map((pack, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{pack}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            ref={contentAnimation.ref}
            className={`transition-all duration-800 delay-400 ease-out ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in {t(product.name)}?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('contactForOrder')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                {t('getQuote')}
              </Link>
              <Link 
                href="/#products"
                className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                {t('backToProducts')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
