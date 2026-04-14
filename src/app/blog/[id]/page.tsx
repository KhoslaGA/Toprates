import React from 'react';
import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';
import PostBody from '@/components/blog/PostBody';
import AuthorBio from '@/components/blog/AuthorBio';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PostCardData } from '@/types/blog';

// Mock data for blog posts
const MOCK_POSTS = [
  {
    _id: '1',
    title: 'Understanding Canadian Auto Insurance: A Complete Guide',
    slug: 'understanding-canadian-auto-insurance',
    excerpt: 'Learn about the different types of auto insurance coverage available in Canada.',
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1581384694997-f6e6f517f5ef?w=800&h=500&fit=crop',
    },
    author: {
      _id: '1',
      _type: 'author' as const,
      _createdAt: '',
      _updatedAt: '',
      _rev: '',
      name: 'Sarah Johnson',
      slug: 'sarah-johnson',
      bio: 'Insurance expert with 10+ years of experience helping Canadians understand coverage options.',
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
    content: `
      <h2>Why Auto Insurance Matters</h2>
      <p>Auto insurance is one of the most important purchases you'll make as a driver in Canada. Not only is it legally required in most provinces, but it also provides financial protection for you and others on the road.</p>

      <h2>Types of Auto Insurance Coverage</h2>

      <h3>Liability Coverage</h3>
      <p>This is the most basic form of auto insurance required by law. It covers damages or injuries that you cause to other people or their property.</p>
      <ul>
        <li>Bodily injury liability</li>
        <li>Property damage liability</li>
      </ul>

      <h3>Collision Coverage</h3>
      <p>Collision insurance covers damage to your vehicle from collisions with other vehicles or objects, regardless of who is at fault.</p>

      <h3>Comprehensive Coverage</h3>
      <p>Comprehensive insurance covers non-collision damage to your vehicle such as theft, weather, vandalism, and animal collisions.</p>

      <h2>Finding the Best Rates</h2>
      <p>To get the best auto insurance rates in Canada, consider:</p>
      <ul>
        <li>Maintaining a clean driving record</li>
        <li>Bundling policies with the same insurer</li>
        <li>Taking approved driving courses</li>
        <li>Installing safety features in your vehicle</li>
        <li>Comparing quotes from multiple providers</li>
      </ul>

      <h2>Provincial Differences</h2>
      <p>Insurance regulations vary by province in Canada. Each province has minimum coverage requirements, so be sure to check your provincial requirements.</p>

      <blockquote>
        Understanding your insurance options is the first step to getting the coverage you need at a price you can afford.
      </blockquote>

      <h2>Conclusion</h2>
      <p>Auto insurance is a necessary expense for all drivers in Canada. By understanding the different types of coverage available and shopping around for the best rates, you can ensure you have the protection you need while keeping costs manageable.</p>
    `,
    featured: true,
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
      _id: '2',
      _type: 'author' as const,
      _createdAt: '',
      _updatedAt: '',
      _rev: '',
      name: 'Michael Chen',
      slug: 'michael-chen',
      bio: 'Home insurance specialist focused on helping homeowners protect their biggest investment.',
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
    content: `<p>Protecting your home is one of the most important decisions you can make.</p>`,
    featured: true,
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
      _id: '3',
      _type: 'author' as const,
      _createdAt: '',
      _updatedAt: '',
      _rev: '',
      name: 'Emma Williams',
      slug: 'emma-williams',
      bio: 'Life insurance advisor helping families plan for their financial future.',
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
    content: `<p>Life insurance is a crucial part of financial planning.</p>`,
    featured: false,
  },
];

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = MOCK_POSTS.find((p) => p.slug === params.id);

  if (!post) {
    return (
      <PageWrapper>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-[#1a365d] mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Sorry, the blog post you're looking for doesn't exist.
          </p>
          <Button href="/blog" variant="primary">
            Back to Blog
          </Button>
        </div>
      </PageWrapper>
    );
  }

  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Get related posts (excluding current)
  const relatedPosts = MOCK_POSTS.filter(
    (p) => p.slug !== params.id && p.category?.slug === post.category?.slug
  ).slice(0, 3);

  return (
    <PageWrapper maxWidth="2xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 text-sm">
        <Link href="/blog" className="text-[#0d9488] hover:text-[#0a7566]">
          Blog
        </Link>
        <span className="text-gray-400">/</span>
        <Link
          href={`/blog/category/${post.category?.slug}`}
          className="text-[#0d9488] hover:text-[#0a7566]"
        >
          {post.category?.name}
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600">{post.title}</span>
      </div>

      {/* Featured Image */}
      {post.featuredImage && (
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
        />
      )}

      {/* Post Header */}
      <header className="mb-8 text-center">
        <div className="inline-block mb-4">
          <Badge variant="accent">
            {post.category?.name}
          </Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600">
          <span>{publishDate}</span>
          <span className="text-gray-400">•</span>
          <span>{post.readingTime} min read</span>
          <span className="text-gray-400">•</span>
          <span>By {post.author.name}</span>
        </div>
      </header>

      {/* Post Content */}
      <div className="mb-12">
        <PostBody content={post.content} />
      </div>

      {/* Author Bio */}
      <div className="my-12">
        <AuthorBio author={post.author} />
      </div>

      {/* Share Buttons */}
      <div className="border-t border-gray-200 pt-8 mb-12">
        <h3 className="font-semibold text-[#1a365d] mb-4">Share This Article</h3>
        <div className="flex gap-3 flex-wrap">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://toprates.ca/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Share on Twitter
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://toprates.ca/blog/${post.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Share on Facebook
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://toprates.ca/blog/${post.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
          >
            Share on LinkedIn
          </a>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts as PostCardData[]} />
      )}

      {/* CTA */}
      <div className="mt-16 bg-gradient-to-r from-[#1a365d] to-[#0d9488] rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to get the best insurance rates?
        </h2>
        <p className="mb-6 text-lg">
          Let us help you find the perfect coverage for your needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/get-quotes" variant="accent">
            Get a Quote
          </Button>
          <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a365d]">
            Contact Us
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}

export async function generateStaticParams() {
  return MOCK_POSTS.map((post) => ({
    slug: post.slug,
  }));
}
