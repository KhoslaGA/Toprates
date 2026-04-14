'use client';

import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PageWrapper from '@/components/layout/PageWrapper';
import PostCard from '@/components/blog/PostCard';
import Pagination from '@/components/blog/Pagination';
import { Button } from '@/components/ui/Button';
import { PostCardData, Category } from '@/types/blog';

// Mock data for blog posts
const MOCK_POSTS: PostCardData[] = [
  {
    _id: '1',
    title: 'Understanding Canadian Auto Insurance: A Complete Guide',
    slug: 'understanding-canadian-auto-insurance',
    excerpt:
      'Learn about the different types of auto insurance coverage available in Canada and what each one covers. This guide will help you make informed decisions about your policy.',
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
    featured: true,
  },
  {
    _id: '2',
    title: 'Home Insurance in Canada: What You Need to Know',
    slug: 'home-insurance-canada-guide',
    excerpt:
      'Protect your home and belongings with comprehensive home insurance. Discover coverage options, deductibles, and how to get the best rates in Canada.',
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
    featured: true,
  },
  {
    _id: '3',
    title: 'Life Insurance Basics: Term vs Whole Life',
    slug: 'life-insurance-term-vs-whole-life',
    excerpt:
      'Comparing term and whole life insurance options. Understand the differences and benefits of each to choose the right coverage for your family.',
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
    excerpt:
      'Essential coverage for small business owners in Canada. Learn about liability, property, and other critical insurance for your business success.',
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
  {
    _id: '5',
    title: 'Travel Insurance for Canadian Travelers',
    slug: 'travel-insurance-canadian-travelers',
    excerpt:
      'Plan your next adventure with confidence. Discover what travel insurance covers and how to choose the best plan for your trip.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    },
    author: {
      name: 'Sarah Johnson',
      slug: 'sarah-johnson',
      image: {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
    },
    category: {
      name: 'Travel Insurance',
      slug: 'travel-insurance',
    },
    publishedAt: '2024-02-20T00:00:00Z',
    readingTime: 5,
  },
  {
    _id: '6',
    title: 'How to Get the Best Insurance Rates in Canada',
    slug: 'best-insurance-rates-canada',
    excerpt:
      'Practical tips and strategies to lower your insurance premiums. Learn what factors affect your rates and how to negotiate better deals.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=500&fit=crop',
    },
    author: {
      name: 'Michael Chen',
      slug: 'michael-chen',
      image: {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      },
    },
    category: {
      name: 'Tips & Advice',
      slug: 'tips-advice',
    },
    publishedAt: '2024-02-15T00:00:00Z',
    readingTime: 6,
  },
];

const MOCK_CATEGORIES: Category[] = [
  { _id: '1', _type: 'category', _createdAt: '', _updatedAt: '', _rev: '', name: 'Auto Insurance', slug: 'auto-insurance' },
  { _id: '2', _type: 'category', _createdAt: '', _updatedAt: '', _rev: '', name: 'Home Insurance', slug: 'home-insurance' },
  { _id: '3', _type: 'category', _createdAt: '', _updatedAt: '', _rev: '', name: 'Life Insurance', slug: 'life-insurance' },
  { _id: '4', _type: 'category', _createdAt: '', _updatedAt: '', _rev: '', name: 'Business Insurance', slug: 'business-insurance' },
  { _id: '5', _type: 'category', _createdAt: '', _updatedAt: '', _rev: '', name: 'Travel Insurance', slug: 'travel-insurance' },
  { _id: '6', _type: 'category', _createdAt: '', _updatedAt: '', _rev: '', name: 'Tips & Advice', slug: 'tips-advice' },
];

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? Math.max(1, parseInt(pageParam)) : 1;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categorySlug);

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) {
      return MOCK_POSTS;
    }
    return MOCK_POSTS.filter((post) => post.category?.slug === selectedCategory);
  }, [selectedCategory]);

  // Paginate posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  // Get featured post (first one)
  const featuredPost = MOCK_POSTS.find((p) => p.featured);

  const handleCategoryClick = (categorySlug: string) => {
    setSelectedCategory(categorySlug === selectedCategory ? null : categorySlug);
  };

  return (
    <PageWrapper>
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
          Insurance Insights & Resources
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay informed with our expert guides, tips, and latest updates on Canadian insurance coverage options.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        {/* Featured Post - Takes up left side */}
        {featuredPost && (
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full">
              <img
                src={featuredPost.featuredImage.url}
                alt={featuredPost.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <div className="text-white">
                  <div className="inline-block bg-[#f59e0b] text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {featuredPost.category?.name}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-100 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-200">
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-CA')}
                    </span>
                    <span className="text-gray-200">
                      {featuredPost.readingTime} min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sidebar */}
        <div className="lg:col-span-2">
          {/* Category Filter */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold text-[#1a365d] mb-4">
              Filter by Category
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  !selectedCategory
                    ? 'bg-[#1a365d] text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                All Posts
              </button>
              {MOCK_CATEGORIES.map((cat) => (
                <button
                  key={cat._id}
                  onClick={() => handleCategoryClick(cat.slug)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === cat.slug
                      ? 'bg-[#1a365d] text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-[#1a365d] mb-4">
              Blog Statistics
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-semibold">{MOCK_POSTS.length}</span> Total Articles
              </p>
              <p>
                <span className="font-semibold">{MOCK_CATEGORIES.length}</span> Categories
              </p>
              <p>
                <span className="font-semibold">{Math.round(MOCK_POSTS.reduce((acc, p) => acc + p.readingTime, 0) / MOCK_POSTS.length)}</span> Avg Reading Time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <section>
        <h2 className="text-2xl font-bold text-[#1a365d] mb-8">
          {selectedCategory
            ? `${MOCK_CATEGORIES.find((c) => c.slug === selectedCategory)?.name || 'Posts'}`
            : 'Latest Articles'}
        </h2>

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
              baseUrl="/blog"
            />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              No articles found in this category yet.
            </p>
            <Button
              variant="outline"
              onClick={() => setSelectedCategory(null)}
            >
              View All Articles
            </Button>
          </div>
        )}
      </section>
    </PageWrapper>
  );
}
