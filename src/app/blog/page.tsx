'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { posts, Post, getPostContent } from '@/data/posts';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogPage() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-bg text-ink pt-28 pb-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="pt-8 pb-12 ">
          <p className="text-sm font-semibold text-accent mb-2">
            Technical Research & Application Insights
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-ink mb-4 leading-tight">
            Activated Carbon Articles
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            Technical knowledge on rotary steam activation, gold extraction CIP/CIL metallurgy, municipal water filtration, and physical carbon morphology selection.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post: Post) => {
            const content = getPostContent(post, language);
            return (
              <div
                key={post.id}
                className="bg-surface flex flex-col justify-between p-6 sm:p-8 space-y-6"
              >
                <div>
                  <div className="w-full aspect-[16/9] bg-bg relative overflow-hidden mb-6">
                    <Image
                      src={post.thumbnail}
                      alt={content.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-sm text-accent font-semibold mb-2">
                    <span>{post.category}</span>
                    <span>·</span>
                    <span className="text-muted">{post.readTime}</span>
                  </div>

                  <h2 className="font-display text-2xl uppercase tracking-tight text-ink mb-3 leading-snug">
                    {content.title}
                  </h2>

                  <p className="text-ink text-base leading-relaxed">
                    {content.summary}
                  </p>
                </div>

                <div className="pt-4 -alt flex items-center justify-between">
                  <span className="text-sm text-muted">
                    Published: {post.publishedDate}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="h-10 px-5 bg-surface-alt hover:bg-bg text-ink font-bold text-sm font-semibold flex items-center justify-center transition-colors duration-150"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
