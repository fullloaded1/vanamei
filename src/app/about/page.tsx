import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Learn more about our journey, values, and commitment to sustainable coconut products.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <SectionTitle 
          title="Our Story" 
          subtitle="From humble beginnings to a trusted name in coconut products." 
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-lg text-secondary leading-relaxed">
            <p className="mb-4">
              Founded in 2010, Coconut Co. started as a small family business in the heart of Indonesia's coconut region. Our passion for sustainable agriculture and high-quality products drove us to expand our reach globally.
            </p>
            <p>
              Today, we work with hundreds of local farmers to bring premium coconut derivatives to industries worldwide, maintaining our commitment to environmental responsibility and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-gray-50">
        <SectionTitle 
          title="Our Purpose" 
          subtitle="Guiding principles that shape our business and relationships." 
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Vision" description="To be the world's leading provider of sustainable coconut products, enhancing lives through natural solutions." />
            <Card title="Mission" description="We strive to deliver premium quality coconut derivatives while supporting local farmers and preserving the environment." />
            <Card title="Values" description="Sustainability, Integrity, Quality, and Community are at the core of everything we do." />
          </div>
        </div>
      </section>
    </>
  );
}
