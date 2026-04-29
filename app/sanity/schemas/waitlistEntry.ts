import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'waitlistEntry',
  title: 'Waitlist Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      readOnly: true,
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Which form on the site captured this entry',
      options: {
        list: [
          { title: 'Homepage hero', value: 'home_hero' },
          { title: 'Homepage bottom CTA', value: 'home_bottom_cta' },
          { title: 'Other', value: 'other' },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'referer',
      title: 'Referer',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: { title: 'email', subtitle: 'source', media: 'submittedAt' },
    prepare({ title, subtitle }) {
      return { title: title || '(no email)', subtitle: subtitle || 'unknown' };
    },
  },
  orderings: [
    {
      title: 'Newest first',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
});
