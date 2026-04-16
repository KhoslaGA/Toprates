import { defineType, defineField } from 'sanity';

/**
 * Source citation for E-E-A-T signals.
 * Plan calls for citing FSRA, RIBO, IBC, IBAO.
 */
export default defineType({
  name: 'sourceCitation',
  title: 'Source Citation',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Source Label',
      type: 'string',
      description: 'e.g. FSRA, IBC, Ontario Ministry of Finance',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Source URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedDate',
      title: 'Source Published Date',
      type: 'date',
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'url' },
  },
});
