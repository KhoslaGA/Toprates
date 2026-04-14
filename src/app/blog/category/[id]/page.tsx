'use client';

import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';
import PostCard from '@/components/blog/PostCard';
import Pagination from '@/components/blog/Pagination';
import { Button } from '@/components/ui/Button';
import { PostCardData, Category } from '@/types/blog';

// Mock data
const MOCK_POSTS: PostCardData[] = [
  {
    _id: '1',
    title: 'Understanding Canadian Auto Insurance: A Complete Guide',
    slug: 'understanding-canadian-auto-insurance',
    excerpt: 'Learn about the different types of auto insurance coverage available in Canada.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1581384694997-f6e6f517f5ef?w=800&h=500&fit=crop',
    },
    author: {
      name: 'Sarah Johnson',
      slug: 'sarah-johnson',
      image: {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
    },
    category: {
      name: 'Auto Insurance',
      slug: 'auto-insurance',
    },
    publishedAt: '2024-03-15T00:00:00Z',
    readingTime: 8,
  },
  {
    _id: '2',
    title: 'Home Insurance in Canada: What You Need to Know',
    slug: 'home-insurance-canada-guide',
    excerpt: 'Protect your home and belongings with comprehensive home insurance.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
    },
    author: {
      name: 'Michael Chen',
      slug: 'michael-chen',
      image: {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      },
    },
    category: {
      name: 'Home Insurance',
      slug: 'home-insurance',
    },
    publishedAt: '2024-03-10T00:00:00Z',
    readingTime: 6,
  },
  {
    _id: '3',
    title: 'Life Insurance Basics: Term vs Whole Life',
    slug: 'life-insurance-term-vs-whole-life',
    excerpt: 'Comparing term and whole life insurance options.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    },
    author: {
      name: 'Emma Williams',
      slug: 'emma-williams',
      image: {
        url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      },
    },
    category: {
      name: 'Life Insurance',
      slug: 'life-insurance',
    },
    publishedAt: '2024-03-05T00:00:00Z',
    readingTime: 7,
  },
  {
    _id: '4',
    title: 'Business Insurance: Protecting Your Canadian Business',
    slug: 'business-insurance-canadian-small-business',
    excerpt: 'Essential coverage for small business owners in Canada.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    },
    author: {
      name: 'James Rodriguez',
      slug: 'james-rodriguez',
      image: {
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      },
    },
    category: {
      name: 'Business Insurance',
      slug: 'business-insurance',
    },
    publishedAt: '2024-02-28T00:00:00Z',
    readingTime: 9,
  },
];

const MOCK_CATEGORIES: Category[] = [
  { _id: '1', _type: 'category', _createdAt: '', _updatedAt: '', _rev: '', name: 'Auto Insurance', slug: 'auto-insurance' },
  { _id: '2', _type: 'category', _createdAt: '', _updatedAt: '', _rev: '', name: 'Home Insurance', slug: 'home-insurance' },
  { _id: '3', _type: 'category', _createdAt: '', _updatedAt: '', _rev: '', name: 'Life Insurance', slug: 'life-insurance' },
  { _id: '4', _type: 'category', _createdAt: '', _updatedAt: '', _rev: '', name: 'Business Insurance', slug: 'business-insurance' },
];

const POSTS_PER_PAGE = 6;

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? Math.max(1, parseInt(pageParam)) : 1;

  const category = MOCK_CATEGORIES.find((c) => c.slug === params.id);

  // Filter posts by category
  const categoryPosts = useMemo(() => {
    return MOCK_POSTS.filter((post) => post.category?.slug === params.id);
  }, []);

  // Paginate posts
  const totalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = categoryPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  if (!category) {
    return (
      <PageWrapper>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-[#1a365d] mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Sorry, the category you're looking for doesn't exist.
          </p>
          <Button href="/blog" variant="primary">
            Back to Blog
          </Button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-sm">
        <Link href="/blog" className="text-[#0d9488] hover:text-[#0a7566]">
          Blog
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">{category.name}</span>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
          {category.name}
        </h1>
        {category.description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {category.description}
          </p>
        )}
        <div className="mt-4 text-sm text-gray-500">
          Showing {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Posts Grid */}
      {paginatedPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paginatedPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            baseUrl={`/blog/category/${params.id}`}
          />
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-6">
            No articles found in this category yet.
          </p>
          <Button href="/blog" variant="outline">
            Back to All Articles
          </Button>
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 bg-gradient-to-r from-[#1a365d] to-[#0d9488] rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Have questions about {category.name}?
        </h2>
        <p className="mb-6 text-lg">
          Our insurance experts are here to help you find the right coverage.
        </p>
        <Button href="/contact" variant="accent">
          Contact Us
        </Button>
      </div>
    </PageWrapper>
  );
}
