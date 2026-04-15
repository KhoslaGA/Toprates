/**
 * TopRates.ca May–June 2026 launch content calendar — static data.
 *
 * These are the 20 articles from the launch plan. The seed script in
 * scripts/seed.ts reads this file and creates/updates corresponding
 * Sanity documents (categories + posts) with these titles, slugs,
 * keywords, word-count targets, priorities, and placeholder excerpts.
 *
 * Update here, re-run `npm run seed`, and Sanity stays in sync.
 */

import type { ArticleType, ContentPillar, Priority, RoutePrefix, SearchIntent } from '../src/types/blog';

export interface ContentPillarSeed {
  slug: string;
  title: string;
  pillar: ContentPillar;
  description: string;
  seoGoal: string;
  order: number;
}

export const PILLARS: ContentPillarSeed[] = [
  {
    slug: 'reform-explainers',
    title: 'Reform Explainers',
    pillar: 'reform-explainers',
    description:
      "Plain-language explainers on Ontario's 2026 auto insurance reform — what's changing, why, and how it affects you.",
    seoGoal: 'Rank for reform queries',
    order: 1,
  },
  {
    slug: 'coverage-guides',
    title: 'Coverage Guides',
    pillar: 'coverage-guides',
    description:
      'Deep dives on each optional benefit type so Ontarians can make informed coverage decisions.',
    seoGoal: 'Long-tail coverage terms',
    order: 2,
  },
  {
    slug: 'persona-guides',
    title: 'Persona Guides',
    pillar: 'persona-guides',
    description:
      'Tailored advice by life situation: new drivers, families, self-employed, seniors, pedestrians and cyclists.',
    seoGoal: 'High-intent persona queries',
    order: 3,
  },
  {
    slug: 'comparison-lists',
    title: 'Comparison & Lists',
    pillar: 'comparison-lists',
    description: 'Best carriers, cheapest rates, and head-to-head comparisons for Ontario drivers.',
    seoGoal: 'Transactional queries',
    order: 4,
  },
  {
    slug: 'tools-interactive',
    title: 'Tools & Interactive',
    pillar: 'tools-interactive',
    description: 'Calculators, quizzes, and checklists to help drivers decide on optional benefits.',
    seoGoal: 'Engagement + backlinks',
    order: 5,
  },
];

export interface ArticleSeed {
  week: number;
  publishDate: string; // ISO date
  title: string;
  slug: string;
  routePrefix: RoutePrefix;
  articleType: ArticleType;
  searchIntent: SearchIntent;
  priority: Priority;
  wordCountTarget: number;
  primaryKeyword: string;
  secondaryKeywords: string[];
  pillarSlug: string; // references PILLARS[].slug
  excerpt: string;
  featured?: boolean;
}

/**
 * 20 articles from the May–June 2026 launch calendar.
 */
export const ARTICLES: ArticleSeed[] = [
  // Week 1
  {
    week: 1,
    publishDate: '2026-05-04',
    title: 'Ontario Auto Insurance Changes 2026: Everything You Need to Know',
    slug: 'ontario-auto-insurance-changes-2026',
    routePrefix: 'guides',
    articleType: 'pillar',
    searchIntent: 'info',
    priority: 'P1',
    wordCountTarget: 3000,
    primaryKeyword: 'ontario auto insurance changes 2026',
    secondaryKeywords: ['ontario insurance reform', 'SABS changes 2026'],
    pillarSlug: 'reform-explainers',
    excerpt:
      "On July 1, 2026, Ontario's auto insurance system undergoes its biggest overhaul in a decade. Here's what every driver needs to know about the reform, which benefits become optional, and how to decide what coverage to keep.",
    featured: true,
  },
  {
    week: 1,
    publishDate: '2026-05-06',
    title: 'What Are Statutory Accident Benefits (SABS)? A Plain-Language Guide',
    slug: 'what-are-statutory-accident-benefits-sabs',
    routePrefix: 'guides',
    articleType: 'guide',
    searchIntent: 'info',
    priority: 'P1',
    wordCountTarget: 2000,
    primaryKeyword: 'statutory accident benefits ontario',
    secondaryKeywords: ['SABS explained', 'what is SABS'],
    pillarSlug: 'coverage-guides',
    excerpt:
      'Statutory Accident Benefits (SABS) are the no-fault benefits every Ontario auto policy pays after an accident. This guide explains each category in plain English, so you know exactly what your policy covers.',
  },
  {
    week: 1,
    publishDate: '2026-05-08',
    title: 'Which Ontario Auto Insurance Benefits Become Optional in July 2026?',
    slug: 'optional-auto-insurance-benefits-ontario-2026',
    routePrefix: 'guides',
    articleType: 'pillar',
    searchIntent: 'info',
    priority: 'P1',
    wordCountTarget: 2500,
    primaryKeyword: 'optional auto insurance benefits ontario',
    secondaryKeywords: ['mandatory vs optional benefits'],
    pillarSlug: 'reform-explainers',
    excerpt:
      'Starting July 1, 2026, several Ontario accident benefits move from mandatory to optional. See exactly which ones change, who they cover, and how to decide whether to keep them.',
  },

  // Week 2
  {
    week: 2,
    publishDate: '2026-05-11',
    title: 'Income Replacement Benefits Ontario: Do You Need Them?',
    slug: 'income-replacement-benefits-ontario',
    routePrefix: 'guides',
    articleType: 'guide',
    searchIntent: 'info',
    priority: 'P1',
    wordCountTarget: 2000,
    primaryKeyword: 'income replacement benefit auto insurance',
    secondaryKeywords: ['IRB ontario', 'income replacement car insurance'],
    pillarSlug: 'coverage-guides',
    excerpt:
      "Income replacement benefits (IRB) become optional in July 2026. We walk through how IRB is calculated, who actually needs it, and when it's safe to opt out.",
  },
  {
    week: 2,
    publishDate: '2026-05-13',
    title: 'Non-Earner Benefits Explained: Students, Retirees & Stay-at-Home Parents',
    slug: 'non-earner-benefits-ontario-auto-insurance',
    routePrefix: 'guides',
    articleType: 'guide',
    searchIntent: 'info',
    priority: 'P1',
    wordCountTarget: 1800,
    primaryKeyword: 'non-earner benefits ontario',
    secondaryKeywords: ['student auto insurance benefits', 'retiree car insurance coverage'],
    pillarSlug: 'coverage-guides',
    excerpt:
      'Non-earner benefits help people who can no longer carry on a normal life after an accident but had no income to replace. Here is how they work and why students, retirees, and stay-at-home parents should think twice before dropping them.',
  },
  {
    week: 2,
    publishDate: '2026-05-15',
    title: "Ontario Auto Insurance Reform: What It Means If You're a New Driver",
    slug: 'ontario-auto-reform-new-drivers',
    routePrefix: 'guides',
    articleType: 'persona',
    searchIntent: 'info',
    priority: 'P2',
    wordCountTarget: 1500,
    primaryKeyword: 'new driver insurance ontario 2026',
    secondaryKeywords: ['first time car insurance ontario changes'],
    pillarSlug: 'persona-guides',
    excerpt:
      "New drivers are hit hardest by Ontario's reform because they often don't know what they'd be giving up. Here is a first-time-buyer checklist for choosing coverage after July 2026.",
  },

  // Week 3
  {
    week: 3,
    publishDate: '2026-05-18',
    title: 'Death & Funeral Benefits in Ontario Auto Insurance: Should You Keep Them?',
    slug: 'death-funeral-benefits-ontario-auto',
    routePrefix: 'guides',
    articleType: 'guide',
    searchIntent: 'info',
    priority: 'P2',
    wordCountTarget: 1500,
    primaryKeyword: 'death benefits auto insurance ontario',
    secondaryKeywords: ['funeral benefits car insurance'],
    pillarSlug: 'coverage-guides',
    excerpt:
      "Death and funeral benefits become optional in July 2026. The savings are small. The case for keeping them is surprisingly strong — here's why.",
  },
  {
    week: 3,
    publishDate: '2026-05-20',
    title: 'Caregiver & Housekeeping Benefits: Who Needs Them Most?',
    slug: 'caregiver-housekeeping-benefits-auto-insurance',
    routePrefix: 'guides',
    articleType: 'guide',
    searchIntent: 'info',
    priority: 'P2',
    wordCountTarget: 1500,
    primaryKeyword: 'caregiver benefit auto insurance',
    secondaryKeywords: ['housekeeping benefit ontario'],
    pillarSlug: 'coverage-guides',
    excerpt:
      'Caregiver and housekeeping benefits pay for help around the house and with dependants after an accident. We rank who needs them most and how much they typically cost.',
  },
  {
    week: 3,
    publishDate: '2026-05-22',
    title: 'Self-Assessment Checklist: Which Optional Benefits Do You Need?',
    slug: 'optional-benefits-self-assessment-checklist',
    routePrefix: 'tools',
    articleType: 'tool',
    searchIntent: 'trans',
    priority: 'P1',
    wordCountTarget: 1200,
    primaryKeyword: 'do I need optional benefits auto insurance',
    secondaryKeywords: ['auto insurance checklist ontario'],
    pillarSlug: 'tools-interactive',
    excerpt:
      'A 10-question self-assessment that tells you which optional benefits to keep based on your income, dependants, health coverage, and lifestyle.',
  },

  // Week 4
  {
    week: 4,
    publishDate: '2026-05-25',
    title: 'Ontario Auto Insurance for Families: How the 2026 Changes Affect You',
    slug: 'auto-insurance-families-ontario-2026',
    routePrefix: 'guides',
    articleType: 'persona',
    searchIntent: 'info',
    priority: 'P2',
    wordCountTarget: 2000,
    primaryKeyword: 'family car insurance ontario',
    secondaryKeywords: ['auto insurance changes families 2026'],
    pillarSlug: 'persona-guides',
    excerpt:
      'For families, the 2026 reform is a decision about who you are protecting and at what cost. We break down the trade-offs parents should think through before renewal.',
  },
  {
    week: 4,
    publishDate: '2026-05-27',
    title: 'Self-Employed & Gig Workers: Why Income Replacement Coverage Matters More Than Ever',
    slug: 'self-employed-gig-worker-auto-insurance-ontario',
    routePrefix: 'guides',
    articleType: 'persona',
    searchIntent: 'info',
    priority: 'P2',
    wordCountTarget: 1800,
    primaryKeyword: 'self employed car insurance ontario',
    secondaryKeywords: ['gig worker auto insurance', 'uber driver insurance ontario'],
    pillarSlug: 'persona-guides',
    excerpt:
      'Without an employer disability plan, self-employed and gig workers face the biggest income risk from an accident. Why opting out of IRB after July 2026 is likely a mistake.',
  },

  // Week 5
  {
    week: 5,
    publishDate: '2026-06-01',
    title: 'Auto Insurance First Payer Rule 2026: How It Changes Your Health Benefits',
    slug: 'auto-insurance-first-payer-rule-ontario-2026',
    routePrefix: 'guides',
    articleType: 'pillar',
    searchIntent: 'info',
    priority: 'P1',
    wordCountTarget: 2500,
    primaryKeyword: 'auto insurance first payer ontario',
    secondaryKeywords: ['car insurance vs health benefits 2026'],
    pillarSlug: 'reform-explainers',
    excerpt:
      'After July 1, 2026, auto insurers are the first payer for medical claims after an accident — not your workplace health plan. Here is what that flip means for your coverage.',
  },
  {
    week: 5,
    publishDate: '2026-06-03',
    title: "How Much Could You Save With Ontario's New Optional Benefits?",
    slug: 'ontario-auto-insurance-savings-calculator-2026',
    routePrefix: 'tools',
    articleType: 'tool',
    searchIntent: 'trans',
    priority: 'P1',
    wordCountTarget: 1500,
    primaryKeyword: 'save money auto insurance ontario 2026',
    secondaryKeywords: ['optional benefits savings calculator'],
    pillarSlug: 'tools-interactive',
    excerpt:
      'Enter your driver profile and see a personalised estimate of how much you could save — and what you give up — by dropping each optional benefit.',
  },
  {
    week: 5,
    publishDate: '2026-06-05',
    title: 'Cheapest Car Insurance in Ontario 2026: Complete Guide',
    slug: 'cheapest-car-insurance-ontario-2026',
    routePrefix: 'guides',
    articleType: 'list',
    searchIntent: 'trans',
    priority: 'P1',
    wordCountTarget: 2500,
    primaryKeyword: 'cheapest car insurance ontario',
    secondaryKeywords: ['best car insurance rates ontario 2026'],
    pillarSlug: 'comparison-lists',
    excerpt:
      'The real drivers of auto insurance cost in Ontario, the carriers offering the best rates post-reform, and five specific tactics to lower your premium without cutting the coverage you actually need.',
  },

  // Week 6
  {
    week: 6,
    publishDate: '2026-06-08',
    title: 'Best Car Insurance Companies in Ontario 2026: Ranked',
    slug: 'best-car-insurance-companies-ontario-2026',
    routePrefix: 'guides',
    articleType: 'list',
    searchIntent: 'trans',
    priority: 'P1',
    wordCountTarget: 2500,
    primaryKeyword: 'best car insurance ontario',
    secondaryKeywords: ['top auto insurance companies ontario'],
    pillarSlug: 'comparison-lists',
    excerpt:
      'A 2026 ranking of the leading Ontario auto insurers based on claims service, price competitiveness, digital experience, and readiness for the July reform.',
  },
  {
    week: 6,
    publishDate: '2026-06-10',
    title: 'Ontario Seniors & Retirees: Auto Insurance Changes You Must Know',
    slug: 'seniors-retirees-auto-insurance-ontario-2026',
    routePrefix: 'guides',
    articleType: 'persona',
    searchIntent: 'info',
    priority: 'P2',
    wordCountTarget: 1800,
    primaryKeyword: 'senior auto insurance ontario',
    secondaryKeywords: ['retiree car insurance changes 2026'],
    pillarSlug: 'persona-guides',
    excerpt:
      "The reform changes the math for retirees — especially around non-earner and housekeeping benefits. A coverage checklist built for Ontario's 65+ drivers.",
  },

  // Week 7
  {
    week: 7,
    publishDate: '2026-06-15',
    title: 'Pedestrians, Cyclists & Passengers: How the 2026 Reform Affects You',
    slug: 'pedestrians-cyclists-auto-insurance-ontario-2026',
    routePrefix: 'guides',
    articleType: 'pillar',
    searchIntent: 'info',
    priority: 'P1',
    wordCountTarget: 2000,
    primaryKeyword: 'pedestrian insurance ontario',
    secondaryKeywords: ['cyclist accident benefits 2026'],
    pillarSlug: 'reform-explainers',
    excerpt:
      "One of the biggest changes in the 2026 reform: optional benefits will only cover the named insured, spouse, dependants and listed drivers. If you're a pedestrian or cyclist, that's a coverage gap you need to know about.",
  },
  {
    week: 7,
    publishDate: '2026-06-17',
    title: 'Bundle Home & Auto Insurance Ontario: Is It Still Worth It in 2026?',
    slug: 'bundle-home-auto-insurance-ontario-2026',
    routePrefix: 'guides',
    articleType: 'list',
    searchIntent: 'trans',
    priority: 'P2',
    wordCountTarget: 1800,
    primaryKeyword: 'bundle home auto insurance ontario',
    secondaryKeywords: ['home auto insurance discount 2026'],
    pillarSlug: 'comparison-lists',
    excerpt:
      'With auto premiums in flux post-reform, is bundling home and auto still the cheapest path? A fresh look at the actual discounts carriers are offering in 2026.',
  },

  // Week 8
  {
    week: 8,
    publishDate: '2026-06-22',
    title: "What Happens If You're in an Accident After July 1, 2026?",
    slug: 'accident-after-july-2026-ontario-auto-insurance',
    routePrefix: 'guides',
    articleType: 'pillar',
    searchIntent: 'info',
    priority: 'P1',
    wordCountTarget: 2000,
    primaryKeyword: 'accident after july 2026 ontario',
    secondaryKeywords: ['what happens car accident new rules'],
    pillarSlug: 'reform-explainers',
    excerpt:
      'A step-by-step walkthrough of what happens after a post-reform collision — who pays first, what benefits you can claim, and how the new rules change the claims process.',
  },
  {
    week: 8,
    publishDate: '2026-06-25',
    title: 'TopRates.ca Launch: Compare Ontario Auto Insurance in Under 2 Minutes',
    slug: 'toprates-launch-compare-auto-insurance-ontario',
    routePrefix: 'blog',
    articleType: 'news',
    searchIntent: 'trans',
    priority: 'P3',
    wordCountTarget: 1200,
    primaryKeyword: 'compare auto insurance ontario',
    secondaryKeywords: ['auto insurance comparison ontario'],
    pillarSlug: 'comparison-lists',
    excerpt:
      'TopRates.ca is here. Compare rates from 30+ Ontario auto insurance carriers in under two minutes, with the 2026 reform already baked into every quote.',
  },
];
