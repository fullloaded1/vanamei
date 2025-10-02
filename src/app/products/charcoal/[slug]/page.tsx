'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { charcoalProducts } from '@/data/charcoalProducts';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
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
        { label: 'Bahan Baku', value: 'Kayu Asam Jawa, Kayu Keras Pilihan' },
        { label: 'Bentuk', value: 'Kubus 25x25x25mm' },
        { label: 'Waktu Bakar', value: '2-3 jam' },
        { label: 'Kadar Abu', value: '< 3%' },
        { label: 'Kadar Air', value: '< 8%' },
        { label: 'Kalori', value: '7000-7500 kcal/kg' }
      ],
      applications: [
        'Shisha dan Hookah Premium',
        'BBQ dan Grilling',
        'Restoran dan Cafe',
        'Export Quality'
      ],
      packaging: [
        '10kg per karton',
        '20kg per karton',
        'Custom packaging tersedia'
      ]
    },
    'arang-kayu-keras': {
      specifications: [
        { label: 'Bahan Baku', value: 'Kayu Keras Pilihan (Asam Jawa, Sono)' },
        { label: 'Bentuk', value: 'Potongan Natural' },
        { label: 'Ukuran', value: '3-8 cm' },
        { label: 'Kadar Abu', value: '< 2%' },
        { label: 'Kadar Air', value: '< 6%' },
        { label: 'Fixed Carbon', value: '> 80%' }
      ],
      applications: [
        'BBQ dan Grilling Premium',
        'Restoran Tradisional',
        'Industri Makanan',
        'Export Market'
      ],
      packaging: [
        '5kg per karung',
        '10kg per karung',
        '20kg per karung',
        'Bulk packaging'
      ]
    },
    'arang-tempurung-kelapa': {
      specifications: [
        { label: 'Bahan Baku', value: 'Tempurung Kelapa Pilihan' },
        { label: 'Bentuk', value: 'Potongan Kecil' },
        { label: 'Ukuran', value: '1-3 cm' },
        { label: 'Kadar Abu', value: '< 4%' },
        { label: 'Kadar Air', value: '< 10%' },
        { label: 'Volatile Matter', value: '15-20%' }
      ],
      applications: [
        'Bahan Baku Activated Carbon',
        'Industri Metalurgi',
        'Water Treatment',
        'Fuel Industrial'
      ],
      packaging: [
        '25kg per karung',
        '50kg per karung',
        'Jumbo bag 1 ton',
        'Bulk shipment'
      ]
    },
    'arang-granula-meshed': {
      specifications: [
        { label: 'Bahan Baku', value: 'Tempurung Kelapa Activated' },
        { label: 'Mesh Size', value: '4x8, 6x12, 8x16, 12x40' },
        { label: 'Iodine Number', value: '> 1000 mg/g' },
        { label: 'Ash Content', value: '< 5%' },
        { label: 'Moisture', value: '< 5%' },
        { label: 'Hardness', value: '> 95%' }
      ],
      applications: [
        'Water Treatment Plant',
        'Air Purification',
        'Gold Mining',
        'Chemical Industry'
      ],
      packaging: [
        '25kg per karung',
        'Jumbo bag 500kg',
        'Jumbo bag 1000kg',
        'Custom packaging'
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
                  {product.name}
                </h1>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 text-center"
                  >
                    Request Quote
                  </Link>
                  <Link 
                    href="/contact"
                    className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full font-medium hover:border-gray-900 transition-colors duration-300 text-center"
                  >
                    Request Sample
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Packaging Options</h3>
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
              Interested in {product.name}?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get detailed specifications, pricing, and samples. Our team is ready to help you 
              find the perfect charcoal solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Sales Team
              </Link>
              <Link 
                href="/#products"
                className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                View Other Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
