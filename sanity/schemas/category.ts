import { defineType, defineField } from 'sanity';

/**
 * Category schema.
 *
 * Each category is tagged with a pillar matching the TopRates.ca launch plan:
 * 1. Reform Explainers
 * 2. Coverage Guides
 * 3. Persona Guides
 * 4. Comparison & Lists
 * 5. Tools & Interactive
 *
 * Category archive pages are rendered at /blog/category/[slug].
 */
export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pillar',
      title: 'Content Pillar',
      type: 'string',
      description: 'Which of the 5 launch-plan content pillars this category belongs to.',
      options: {
        list: [
          { title: 'Reform Explainers', value: 'reform-explainers' },
          { title: 'Coverage Guides', value: 'coverage-guides' },
          { title: 'Persona Guides', value: 'persona-guides' },
          { title: 'Comparison & Lists', value: 'comparison-lists' },
          { title: 'Tools & Interactive', value: 'tools-interactive' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the category (shown on archive page).',
    }),
    defineField({
      name: 'seoGoal',
      title: 'SEO Goal',
      type: 'string',
      description: 'Short note on the search intent this pillar targets (internal reporting).',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 10,
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      pillar: 'pillar',
      subtitle: 'description',
    },
    prepare(selection: any) {
      const { title, pillar, subtitle } = selection;
      return {
        title,
        subtitle: pillar ? `[${pillar}] ${subtitle || ''}` : subtitle,
      };
    },
  },
});
