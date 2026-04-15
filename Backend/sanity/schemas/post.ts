import { defineType, defineField, defineArrayMember } from 'sanity';

/**
 * Blog Post / Article schema.
 *
 * Maps to the TopRates.ca May–June 2026 launch content calendar:
 * - 5 content pillars (Reform Explainers, Coverage Guides, Persona Guides,
 *   Comparison & Lists, Tools & Interactive)
 * - Article types (Pillar, Guide, Persona, Tool, List, News)
 * - SEO-first metadata (primary keyword, priority, word count target)
 * - E-E-A-T signals (author, last updated, source citations)
 * - FAQ schema support for People-Also-Ask capture
 * - routePrefix controls whether the URL is /blog/, /guides/, or /tools/
 */
export default defineType({
  name: 'post',
  title: 'Blog Post / Article',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'taxonomy', title: 'Taxonomy' },
    { name: 'seo', title: 'SEO' },
    { name: 'eeat', title: 'E-E-A-T & Sources' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'routePrefix',
      title: 'Route Prefix',
      type: 'string',
      group: 'content',
      description: 'Where this article lives in the URL tree.',
      options: {
        list: [
          { title: '/blog/ (news, launch posts)', value: 'blog' },
          { title: '/guides/ (explainers, coverage guides, persona guides, lists)', value: 'guides' },
          { title: '/tools/ (calculators, checklists, quizzes)', value: 'tools' },
        ],
        layout: 'radio',
      },
      initialValue: 'guides',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Used on listing cards and as meta description fallback.',
      validation: (Rule) => Rule.max(280),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'content',
    }),

    // --- Taxonomy -----------------------------------------------------------
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'taxonomy',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'taxonomy',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'category' }],
        }),
      ],
    }),
    defineField({
      name: 'articleType',
      title: 'Article Type',
      type: 'string',
      group: 'taxonomy',
      options: {
        list: [
          { title: 'Pillar', value: 'pillar' },
          { title: 'Guide', value: 'guide' },
          { title: 'Persona', value: 'persona' },
          { title: 'List / Comparison', value: 'list' },
          { title: 'Tool / Interactive', value: 'tool' },
          { title: 'News', value: 'news' },
        ],
      },
      initialValue: 'guide',
    }),
    defineField({
      name: 'searchIntent',
      title: 'Search Intent',
      type: 'string',
      group: 'taxonomy',
      options: {
        list: [
          { title: 'Informational', value: 'info' },
          { title: 'Transactional', value: 'trans' },
          { title: 'Navigational', value: 'nav' },
          { title: 'Commercial', value: 'commercial' },
        ],
      },
      initialValue: 'info',
    }),
    defineField({
      name: 'priority',
      title: 'Launch Priority',
      type: 'string',
      group: 'taxonomy',
      options: {
        list: [
          { title: 'P1 - must publish', value: 'P1' },
          { title: 'P2 - should publish', value: 'P2' },
          { title: 'P3 - nice to have', value: 'P3' },
        ],
      },
      initialValue: 'P2',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'taxonomy',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'wordCountTarget',
      title: 'Word Count Target',
      type: 'number',
      group: 'taxonomy',
      description: 'From the launch calendar (e.g. 2000, 2500, 3000).',
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      group: 'taxonomy',
      description: 'Leave empty to auto-calculate from body at build time.',
    }),

    // --- Scheduling ---------------------------------------------------------
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      group: 'content',
      description: 'Shown on page for freshness signals. Update when content changes materially.',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      group: 'content',
      initialValue: false,
    }),

    // --- SEO ----------------------------------------------------------------
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      group: 'seo',
      description:
        'Rendered into FAQ JSON-LD schema. Capture the "People Also Ask" questions for your primary keyword.',
      of: [defineArrayMember({ type: 'faqItem' })],
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts (internal links)',
      type: 'array',
      group: 'seo',
      description:
        'Plan requires 3-5 internal links per article. Pick related TopRates.ca articles here; used in RelatedPosts component and footer link block.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'post' }],
        }),
      ],
      validation: (Rule) =>
        Rule.unique().max(8).warning('Keep related posts focused (3-5 recommended).'),
    }),

    // --- E-E-A-T ------------------------------------------------------------
    defineField({
      name: 'sources',
      title: 'Sources Cited',
      type: 'array',
      group: 'eeat',
      description: 'Cite FSRA, RIBO, IBC, IBAO, or other authoritative sources.',
      of: [defineArrayMember({ type: 'sourceCitation' })],
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Reviewed By',
      type: 'reference',
      group: 'eeat',
      to: [{ type: 'author' }],
      description: 'Optional: expert reviewer for additional credibility.',
    }),
  ],

  orderings: [
    {
      title: 'Publish Date (newest)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Priority',
      name: 'priorityAsc',
      by: [
        { field: 'priority', direction: 'asc' },
        { field: 'publishedAt', direction: 'asc' },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      priority: 'priority',
      prefix: 'routePrefix',
    },
    prepare(selection: any) {
      const { author, title, priority, prefix } = selection;
      const tag = [prefix ? `/${prefix}/` : null, priority].filter(Boolean).join(' · ');
      return {
        title,
        subtitle: [tag, author && `by ${author}`].filter(Boolean).join(' — '),
        media: selection.media,
      };
    },
  },
});
