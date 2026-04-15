import React from 'react';
import { PostCardData } from '@/types/blog';
import PostCard from './PostCard';
import { cn } from '@/lib/utils';

interface RelatedPostsProps {
  posts: PostCardData[];
  className?: string;
}

/**
 * RelatedPosts Component
 * Displays grid of 3 related blog post cards
 */
export default function RelatedPosts({ posts, className }: RelatedPostsProps) {
  // Limit to 3 posts
  const displayPosts = posts.slice(0, 3);

  if (displayPosts.length === 0) {
    return null;
  }

  return (
    <section className={cn('mt-12', className)}>
      <h3 className="text-2xl font-bold text-[#1a365d] mb-8">
        Related Articles
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
