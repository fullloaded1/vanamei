import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';
import { posts, Post } from '@/data/posts';

export default function Blog() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-6">Blog</h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Stay updated with the latest news and insights on coconut products and sustainable practices.
          </p>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-16">
        <SectionTitle 
          title="Latest Articles" 
          subtitle="Insights and updates from the world of coconut products." 
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post: Post) => (
              <Card key={post.id} className="flex flex-col md:flex-row overflow-hidden">
                <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden rounded-t-md md:rounded-t-none md:rounded-l-md">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4 flex flex-col md:w-2/3">
                  <h4 className="text-lg font-semibold text-primary mb-2">{post.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">Published on {post.publishedDate}</p>
                  <p className="text-secondary mb-4">{post.summary}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-auto">
                    <Button variant="outline" size="sm">Read More</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
