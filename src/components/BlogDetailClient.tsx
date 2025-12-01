'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Post, getPostContent } from '@/data/posts';
import Button from '@/components/Button';
import Link from 'next/link';

interface BlogDetailClientProps {
  post: Post;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  const { t, language } = useLanguage();
  const postContent = getPostContent(post, language);

  return (
    <>
      {/* Blog Post Detail */}
      <article className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog Button */}
            <div className="mb-8">
              <Link href="/blog">
                <Button variant="outline" size="sm">
                  ← {t('backToBlog')}
                </Button>
              </Link>
            </div>
            
            {/* Featured Image */}
            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg mb-8">
              <Image
                src={post.thumbnail}
                alt={postContent.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded">
                  {t(post.category.toLowerCase().replace(' ', ''))}
                </span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {postContent.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <span>{t('publishedOn')} {post.publishedDate}</span>
                <span>{post.views}</span>
                <span>{post.comments}</span>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {postContent.summary}
              </p>
            </div>
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-secondary">
              <div className="whitespace-pre-line leading-relaxed">
                {postContent.content}
              </div>
            </div>
            
            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Link href="/blog">
                  <Button variant="outline">
                    ← {t('backToBlog')}
                  </Button>
                </Link>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button variant="default">
                      {t('contactUs')}
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline">
                      {t('requestSample')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
