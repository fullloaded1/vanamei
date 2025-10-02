'use client';

import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CharcoalProductCard from '@/components/CharcoalProductCard';
import Image from 'next/image';
import Link from 'next/link';
import { products, Product } from '@/data/products';
import { charcoalProducts } from '@/data/charcoalProducts';

export default function Products() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-6">Our Products</h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Explore our wide range of premium coconut products and derivatives.
          </p>
        </div>
      </section>

      {/* Charcoal Products Section */}
      <section className="py-16 bg-white">
        <SectionTitle 
          title="Premium Charcoal Products" 
          subtitle="High-quality charcoal products for various applications." 
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {charcoalProducts.map((product) => (
              <CharcoalProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Products Grid */}
      <section className="py-16 bg-gray-50">
        <SectionTitle 
          title="Other Coconut Products" 
          subtitle="Complete range of coconut derivatives for various industries." 
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product: Product) => (
              <Card key={product.id} className="flex flex-col">
                <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{product.name}</h4>
                <p className="text-secondary mb-4">{product.description}</p>
                <Link href={`/products/${product.slug}`} className="mt-auto">
                  <Button variant="outline" size="sm">View Details</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
