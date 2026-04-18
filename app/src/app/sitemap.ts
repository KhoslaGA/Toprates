import type { MetadataRoute } from 'next';
import { sanityFetch } from '@/lib/sanity/client';
import { getAllPostsQuery, getCategoriesQuery } from '@/lib/sanity/queries';
import type { PostCard, Category } from '@/types/blog';
import { postUrl } from '@/lib/sanity/helpers';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toprates.ca';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch posts and categories in parallel
  const [posts, categories] = await Promise.all([
    sanityFetch<PostCard[]>({ query: getAllPostsQuery, tags: ['post'], revalidate: 3600 }),
    sanityFetch<Category[]>({ query: getCategoriesQuery, tags: ['category'], revalidate: 3600 }),
  ]);

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/auto-insurance`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/home-insurance`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/mortgages`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/credit-cards`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/investing`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];

  // Blog post pages
  const postPages: MetadataRoute.Sitemap = (posts ?? []).map((post) => ({
    url: `${SITE_URL}${postUrl(post)}`,
    lastModified: new Date(post.lastUpdated || post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: post.priority === 'P1' ? 0.9 : post.priority === 'P2' ? 0.8 : 0.7,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = (categories ?? []).map((cat) => ({
    url: `${SITE_URL}/blog/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...postPages, ...categoryPages];
}
