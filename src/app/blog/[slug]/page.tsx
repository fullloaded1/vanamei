import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts, Post } from '@/data/posts';

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const post: Post | undefined = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Blog Post Detail */}
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg mb-8">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">Published on {post.publishedDate}</p>
            <div className="prose prose-lg text-secondary">
              <p>{post.content}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
