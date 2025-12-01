import { notFound } from 'next/navigation';
import { posts, Post } from '@/data/posts';
import BlogDetailClient from '@/components/BlogDetailClient';

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

  return <BlogDetailClient post={post} />;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
