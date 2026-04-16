import { defineType, defineField } from 'sanity';

/**
 * Waitlist / newsletter subscription document.
 * Captures emails from the pre-launch CTA on every article:
 * "Join the TopRates.ca waitlist".
 *
 * Created via POST /api/waitlist (to be implemented in Phase 2).
 */
export default defineType({
  name: 'newsletterSubscription',
  title: 'Newsletter / Waitlist Subscription',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .email()
          .custom((val) => (typeof val === 'string' ? val.toLowerCase() === val : true))
          .error('Email must be lowercase.'),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Which page/CTA captured this email (e.g. /guides/ontario-auto-insurance-changes-2026).',
    }),
    defineField({
      name: 'campaign',
      title: 'Campaign',
      type: 'string',
      description: 'Optional campaign tag (e.g. "launch-waitlist-may-2026").',
      initialValue: 'launch-waitlist-may-2026',
    }),
    defineField({
      name: 'categories',
      title: 'Interest Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'subscribed',
      title: 'Subscribed',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'unsubscribeToken',
      title: 'Unsubscribe Token',
      type: 'string',
      description: 'Generated server-side; used in unsubscribe links.',
      readOnly: true,
    }),
    defineField({
      name: 'ipAddress',
      title: 'IP Address',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: { title: 'email', subtitle: 'source' },
  },
});
