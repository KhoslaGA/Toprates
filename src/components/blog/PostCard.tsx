import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardImage, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PostCardData } from '@/types/blog';

interface PostCardProps {
  post: PostCardData;
}

/**
 * PostCard Component
 * Displays a blog post preview card with image, title, excerpt, metadata
 */
export default function PostCard({ post }: PostCardProps) {
  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer">
        <CardImage src={post.featuredImage.url} alt={post.title} />

        <CardHeader className="pb-2">
          {post.category && (
            <Badge variant="accent" className="w-fit mb-2">
              {post.category.name}
            </Badge>
          )}
          <CardTitle className="line-clamp-2 text-lg">
            {post.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pb-3">
          <CardDescription className="line-clamp-2">
            {post.excerpt}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {post.author.image && (
              <Image
                src={post.author.image.url}
                alt={post.author.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-700 truncate">
                {post.author.name}
              </p>
              <p className="text-xs text-gray-500">
                {publishDate}
              </p>
            </div>
          </div>
          <div className="text-xs text-gray-500 whitespace-nowrap">
            {post.readingTime} min read
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
