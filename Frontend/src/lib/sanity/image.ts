import imageUrlBuilder, { type SanityImageSource } from '@sanity/image-url';
import { client } from './client';

// Lazy builder: client() throws if Sanity env is unset. We only construct the
// builder on first use so the module is build-safe pre-Studio-setup.
let _builder: ReturnType<typeof imageUrlBuilder> | null = null;
function builder() {
  if (!_builder) _builder = imageUrlBuilder(client());
  return _builder;
}

/**
 * Generate optimized Sanity image URL with dimensions
 * @param source - Sanity image reference or asset object
 * @returns Image URL builder object
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Get optimized image URL for Next.js Image component
 * @param source - Sanity image reference
 * @param width - Image width
 * @returns Optimized image URL
 */
export function getImageUrl(source: SanityImageSource, width: number = 800) {
  return urlFor(source).width(width).fit('max').auto('format').url();
}

/**
 * Get responsive image URLs for srcSet
 * @param source - Sanity image reference
 * @returns Object with breakpoint URLs
 */
export function getResponsiveImageUrls(source: SanityImageSource) {
  return {
    sm: urlFor(source).width(480).fit('max').auto('format').url(),
    md: urlFor(source).width(768).fit('max').auto('format').url(),
    lg: urlFor(source).width(1024).fit('max').auto('format').url(),
    xl: urlFor(source).width(1280).fit('max').auto('format').url(),
  };
}

/**
 * Get image dimensions from Sanity asset
 * @param source - Sanity image reference with metadata
 * @returns Object with width and height, or null if not available
 */
export function getImageDimensions(source: any) {
  try {
    if (source?.asset?.metadata?.dimensions) {
      return {
        width: source.asset.metadata.dimensions.width,
        height: source.asset.metadata.dimensions.height,
      };
    }
  } catch (error) {
    console.error('Error getting image dimensions:', error);
  }
  return null;
}

/**
 * Get optimized image with auto-format and quality settings
 * @param source - Sanity image reference
 * @param options - Customization options
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(
  source: SanityImageSource,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png' | 'auto';
  }
) {
  let builder = urlFor(source);

  if (options?.width) {
    builder = builder.width(options.width);
  }

  if (options?.height) {
    builder = builder.height(options.height);
  }

  if (options?.quality) {
    builder = builder.quality(options.quality);
  }

  // Auto format for best browser support
  builder = builder.auto('format');

  return builder.url();
}
