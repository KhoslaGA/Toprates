import { groq } from 'next-sanity';

// Get all published posts with author and category data
export const getAllPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset -> {
        url,
        metadata {
          dimensions {
            height,
            width
          }
        }
      },
      alt
    },
    author -> {
      _id,
      name,
      slug,
      image {
        asset -> {
          url
        }
      }
    },
    categories[] -> {
      _id,
      title,
      slug
    }
  }
`;

// Get a single post by slug with full details
export const getPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    body,
    mainImage {
      asset -> {
        url,
        metadata {
          dimensions {
            height,
            width
          }
        }
      },
      alt
    },
    author -> {
      _id,
      name,
      slug,
      image {
        asset -> {
          url
        }
      },
      bio
    },
    categories[] -> {
      _id,
      title,
      slug,
      description
    }
  }
`;

// Get posts by category
export const getPostsByCategoryQuery = groq`
  *[_type == "post" && $slug in categories[] -> slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset -> {
        url,
        metadata {
          dimensions {
            height,
            width
          }
        }
      },
      alt
    },
    author -> {
      _id,
      name,
      slug,
      image {
        asset -> {
          url
        }
      }
    },
    categories[] -> {
      _id,
      title,
      slug
    }
  }
`;

// Get all categories
export const getCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;

// Get recent posts (limited)
export const getRecentPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0..5] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset -> {
        url,
        metadata {
          dimensions {
            height,
            width
          }
        }
      },
      alt
    },
    author -> {
      _id,
      name,
      slug
    },
    categories[] -> {
      _id,
      title,
      slug
    }
  }
`;

// Get author by slug
export const getAuthorBySlugQuery = groq`
  *[_type == "author" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    image {
      asset -> {
        url
      }
    },
    bio
  }
`;

// Get posts by author
export const getPostsByAuthorQuery = groq`
  *[_type == "post" && author -> slug.current == $authorSlug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage {
      asset -> {
        url,
        metadata {
          dimensions {
            height,
            width
          }
        }
      },
      alt
    },
    author -> {
      _id,
      name,
      slug
    },
    categories[] -> {
      _id,
      title,
      slug
    }
  }
`;

// Count total posts
export const countPostsQuery = groq`
  count(*[_type == "post" && defined(slug.current)])
`;
