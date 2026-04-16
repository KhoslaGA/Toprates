import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import type { AuthorRef } from '@/types/blog';
import { cn } from '@/lib/utils';

interface AuthorBioProps {
  author: AuthorRef & { url?: string };
  className?: string;
}

/**
 * AuthorBio Component
 * Displays author information with photo and biography for E-E-A-T signals.
 */
export default function AuthorBio({ author, className }: AuthorBioProps) {
  const avatar =
    author.image?.asset?.url ||
    (author.image as unknown as { url?: string })?.url;

  return (
    <Card className={cn('bg-gradient-to-br from-blue-50 to-teal-50', className)}>
      <CardHeader>
        <CardTitle className="text-lg">About the Author</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col sm:flex-row gap-4">
        {avatar && (
          <div className="flex-shrink-0">
            <Image
              src={avatar}
              alt={author.name}
              width={100}
              height={100}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        )}

        <div className="flex-grow">
          <h4 className="text-lg font-bold text-[#1a365d] mb-1">{author.name}</h4>

          {author.bio && (
            <p className="text-sm text-gray-700 leading-relaxed mb-3">{author.bio}</p>
          )}

          {author.slug && (
            <Link
              href={`/author/${author.slug}`}
              className="text-sm text-[#0d9488] hover:text-[#0a7566] font-medium inline-block"
            >
              View all articles by {author.name} →
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
