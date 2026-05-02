import { defineField, defineType } from 'sanity';

/**
 * Newsletter subscriber. Replaces the older waitlistEntry schema.
 *
 * The shape stays largely the same (consent text, scope, method, IP,
 * retention) so existing waitlistEntry records can be migrated 1:1 by
 * rewriting `_type`. Source list expanded to cover every page that has
 * a subscribe form per the strategy doc.
 */
export default defineType({
  name: 'newsletterSubscriber',
  title: 'Newsletter Subscriber',
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
      description: 'Which form on the site captured this subscriber',
      options: {
        list: [
          { title: 'Homepage hero', value: 'home_hero' },
          { title: 'Homepage bottom CTA', value: 'home_bottom_cta' },
          { title: 'About page', value: 'about' },
          { title: "What's coming page", value: 'whats_coming' },
          { title: 'Article inline', value: 'article_inline' },
          { title: 'Footer', value: 'footer' },
          { title: 'Coming-soon page', value: 'coming_soon' },
          { title: 'Other', value: 'other' },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: 'consentText',
      title: 'Consent text shown to subscriber',
      type: 'text',
      description:
        'The exact text the user agreed to at signup. Required for CASL compliance — must be retrievable to demonstrate consent.',
      readOnly: true,
    }),
    defineField({
      name: 'consentScope',
      title: 'Consent scope',
      type: 'string',
      options: {
        list: [
          { title: 'Newsletter only', value: 'newsletter_only' },
          {
            title: 'Newsletter + brokerage launch',
            value: 'newsletter_plus_brokerage_launch',
          },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: 'consentMethod',
      title: 'Consent method',
      type: 'string',
      options: {
        list: [
          { title: 'Express opt-in (checkbox)', value: 'express_opt_in' },
          { title: 'Implied (form submission)', value: 'implied' },
        ],
      },
      readOnly: true,
    }),
    defineField({
      name: 'withdrawnAt',
      title: 'Consent withdrawn at',
      type: 'datetime',
      description:
        'Set when subscriber unsubscribes. Do not delete the record — mark as withdrawn (CASL audit retention).',
    }),
    defineField({
      name: 'withdrawnReason',
      title: 'Withdrawal reason',
      type: 'string',
    }),
    defineField({
      name: 'ipAddress',
      title: 'IP at signup',
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
      name: 'referer',
      title: 'Referer',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'retentionUntil',
      title: 'Retain until',
      type: 'datetime',
      description:
        'PIPEDA principle 5 — limiting retention. Default = submittedAt + 24 months. Withdrawn records are NOT auto-purged.',
      readOnly: true,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted at',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: { title: 'email', subtitle: 'source' },
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
