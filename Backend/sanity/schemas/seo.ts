import { defineType, defineField } from 'sanity';

/**
 * Reusable SEO object embedded on posts/guides/tools.
 * Mirrors the On-Page SEO Checklist from the TopRates.ca launch plan:
 * title tag, meta description, primary keyword, OG image, noindex.
 */
export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Primary keyword + year + brand. Max 60 characters.',
      validation: (Rule) =>
        Rule.max(60).warning('Title tags over 60 characters may be truncated in SERPs.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Benefit-driven, includes primary keyword, ends with CTA. Max 155 characters.',
      validation: (Rule) =>
        Rule.max(155).warning('Meta descriptions over 155 characters may be truncated.'),
    }),
    defineField({
      name: 'primaryKeyword',
      title: 'Primary Keyword',
      type: 'string',
      description: 'Main keyword this article targets (used for internal reporting and keyword tracking).',
    }),
    defineField({
      name: 'secondaryKeywords',
      title: 'Secondary Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Defaults to main image if empty. Recommended: 1200x630.',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Leave empty to default to the post URL.',
    }),
    defineField({
      name: 'noindex',
      title: 'No-index this page',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});
