import { SanityImage, BlockContent, Document, SEO } from './index';

/**
 * Blog types for Insurimple content management
 */

/* Author */
export interface Author extends Document {
  _type: 'author';
  name: string;
  slug: string;
  bio?: string;
  image?: SanityImage;
  email?: string;
  url?: string;
  featured?: boolean;
}

/* Category */
export interface Category extends Document {
  _type: 'category';
  name: string;
  slug: string;
  description?: string;
  image?: SanityImage;
  featured?: boolean;
  order?: number;
}

/* Tag */
export interface Tag extends Document {
  _type: 'tag';
  name: string;
  slug: string;
  description?: string;
}

/* Blog Post */
export interface Post extends Document {
  _type: 'post';
  title: string;
  slug: string;
  excerpt: string;
  content: BlockContent[];
  featuredImage: SanityImage;
  author: {
    _ref: string;
    _type: 'reference';
  } | Author;
  categories: Array<{
    _ref: string;
    _type: 'reference';
  } | Category>;
  tags?: string[];
  publishedAt: string;
  featured?: boolean;
  readingTime?: number;
  seo?: SEO;
}

/* Expanded Post with resolved references */
export interface PostWithReferences extends Post {
  author: Author;
  categories: Category[];
}

/* Blog listing filters */
export interface BlogFilters {
  category?: string;
  author?: string;
  tag?: string;
  search?: string;
  featured?: boolean;
}

/* Blog query parameters */
export interface BlogQueryParams extends BlogFilters {
  page?: number;
  limit?: number;
  sort?: 'newest' | 'oldest' | 'popular' | 'relevance';
}

/* Related posts */
export interface RelatedPosts {
  posts: Post[];
  count: number;
}

/* Blog statistics */
export interface BlogStats {
  totalPosts: number;
  totalCategories: number;
  totalAuthors: number;
  totalTags: number;
  avgReadingTime: number;
}

/* Comment (if implementing comments) */
export interface Comment extends Document {
  _type: 'comment';
  post: {
    _ref: string;
    _type: 'reference';
  };
  author: string;
  email: string;
  content: string;
  approved: boolean;
  spam: boolean;
}

/* Newsletter subscription */
export interface NewsletterSubscription extends Document {
  _type: 'newsletterSubscription';
  email: string;
  categories: string[];
  subscribed: boolean;
  unsubscribeToken: string;
}

/* Aggregated post data for homepage/listing.
 * This is a VIEW shape — the result of a GROQ projection (e.g. `"url": asset->url`),
 * not the raw wire shape of a Sanity document. Wire types (SanityImage, Author)
 * live elsewhere in this file; this interface is what list views consume.
 */
export interface PostCardData {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: { url: string };
  author: {
    name: string;
    slug: string;
    image?: { url: string };
  };
  category: {
    name: string;
    slug: string;
  } | null;
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
}

/* Article schema for SEO */
export interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'BlogPosting' | 'Article';
  headline: string;
  description: string;
  image?: string | string[];
  datePublished: string;
  dateModified?: string;
  author?: {
    '@type': 'Person';
    name: string;
    url?: string;
  };
  publisher?: {
    '@type': 'Organization';
    name: string;
    logo?: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  articleBody?: string;
}
