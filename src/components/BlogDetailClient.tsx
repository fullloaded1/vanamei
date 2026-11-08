'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Post, getPostContent } from '@/data/posts';
import Link from 'next/link';

interface BlogDetailClientProps {
  post: Post;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  const { t, language } = useLanguage();
  const postContent = getPostContent(post, language);

  return (
    <article className="bg-bg text-ink pt-28 pb-20">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
        {/* Back Link */}
        <div className="pt-8 pb-8">
          <Link
            href="/blog"
            className="text-sm font-bold uppercase tracking-wider text-muted hover:text-ink transition-colors duration-150"
          >
            ← Back to Articles
          </Link>
        </div>

        {/* Featured Image */}
        <div className="w-full aspect-[16/9] bg-surface relative overflow-hidden mb-8">
          <Image
            src={post.thumbnail}
            alt={postContent.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Header */}
        <div className="space-y-4 mb-10 pb-8 ">
          <div className="flex items-center gap-3 text-sm font-semibold text-accent">
            <span>{post.category}</span>
            <span>·</span>
            <span className="text-muted">{post.readTime}</span>
            <span>·</span>
            <span className="text-muted">{post.publishedDate}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-ink leading-tight">
            {postContent.title}
          </h1>

          <p className="font-sans text-lg md:text-xl text-muted leading-relaxed">
            {postContent.summary}
          </p>
        </div>

        {/* Article Body */}
        <div className="text-ink text-base md:text-lg leading-relaxed whitespace-pre-line space-y-4 font-sans">
          {postContent.content}
        </div>

        {/* Article Bottom Actions */}
        <div className="mt-16 pt-8  flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="/blog"
            className="h-12 px-6 bg-surface hover:bg-surface-alt text-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
          >
            ← Back to Articles
          </Link>

          <div className="flex gap-3">
            <Link
              href="/contact"
              className="h-12 px-6 bg-accent hover:bg-accent-hover text-accent-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
            >
              Contact Sales
            </Link>
            <a
              href="https://wa.me/6285771060462?text=Halo%20CocoBlim,%20saya%20ingin%20meminta%20sampel%20karbon%20aktif"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 bg-surface hover:bg-surface-alt text-ink font-bold text-sm uppercase tracking-wide flex items-center justify-center transition-colors duration-150"
            >
              Request Sample
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
