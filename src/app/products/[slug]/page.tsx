import Button from '@/components/Button';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products, Product } from '@/data/products';

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const product: Product | undefined = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Product Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="relative h-96 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-primary mb-4">{product.name}</h1>
              <p className="text-lg text-secondary mb-6">{product.detailedDescription}</p>
              <div className="flex gap-4">
                <Button>Get a Sample</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
