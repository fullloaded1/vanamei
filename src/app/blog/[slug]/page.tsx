import { notFound } from 'next/navigation';
import { posts, Post } from '@/data/posts';
import BlogDetailClient from '@/components/BlogDetailClient';

interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post: Post | undefined = posts.find(p => p.slug === slug);

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
