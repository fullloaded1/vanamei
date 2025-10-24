'use client';

import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';
import { posts, Post, getPostContent } from '@/data/posts';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Blog() {
  const { t, language } = useLanguage();
  
  return (
    <>
      {/* Page Header */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-6">{t('blogTitle')}</h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            {t('blogSubtitle')}
          </p>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-16">
        <SectionTitle 
          title={t('latestArticles')} 
          subtitle={t('articlesSubtitle')} 
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post: Post) => {
              const postContent = getPostContent(post, language);
              return (
                <Card key={post.id} className="flex flex-col md:flex-row overflow-hidden">
                  <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden rounded-t-md md:rounded-t-none md:rounded-l-md">
                    <Image
                      src={post.thumbnail}
                      alt={postContent.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4 flex flex-col md:w-2/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded">
                        {t(post.category.toLowerCase().replace(' ', ''))}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2">{postContent.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{t('publishedOn')} {post.publishedDate}</p>
                    <p className="text-secondary mb-4">{postContent.summary}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{post.views}</span>
                        <span>{post.comments}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" size="sm">{t('readMore')}</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
