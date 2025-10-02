import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';
import { products, Product } from '@/data/products';

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

      {/* Products Grid */}
      <section className="py-16">
        <SectionTitle 
          title="Product Catalog" 
          subtitle="High-quality coconut derivatives for various industries." 
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
