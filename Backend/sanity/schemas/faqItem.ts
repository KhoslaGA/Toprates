import { defineType, defineField } from 'sanity';

/**
 * FAQ item reused on explainer articles.
 * Rendered into FAQ JSON-LD schema for "People Also Ask" capture.
 */
export default defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'question' },
  },
});
