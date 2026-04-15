/**
 * Seed Sanity with the launch content plan.
 *
 * Idempotent: re-running updates fields on existing documents and creates any
 * new ones from scripts/launchContent.ts. Safe to run repeatedly.
 *
 * Run with:
 *   SANITY_WRITE_TOKEN=<token> npx tsx scripts/seed.ts
 *
 * Required env:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET
 *   SANITY_WRITE_TOKEN   (token with Editor permissions, not the read token)
 *
 * Creates:
 *   - 5 pillar categories
 *   - 1 default author (TopRates Editorial)
 *   - 20 placeholder posts with title, slug, excerpt, keywords, SEO,
 *     priority, word-count target, article type, and publish date
 */

import { createClient } from '@sanity/client';
import 'dotenv/config';

import { PILLARS, ARTICLES } from './launchContent';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET');
}
if (!token) {
  throw new Error(
    'Missing SANITY_WRITE_TOKEN. Generate an Editor-permission token in Sanity manage dashboard.',
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
});

const DEFAULT_AUTHOR_ID = 'author.toprates-editorial';

async function seedAuthor() {
  const doc = {
    _id: DEFAULT_AUTHOR_ID,
    _type: 'author',
    name: 'TopRates Editorial',
    slug: { _type: 'slug', current: 'toprates-editorial' },
    bio: 'TopRates.ca editorial team covers Canadian insurance with plain-language explainers. Our writing is sourced from FSRA, IBC, RIBO, and provincial regulators, and reviewed by licensed insurance professionals.',
  };
  await client.createOrReplace(doc);
  console.log(`✓ Author seeded: ${DEFAULT_AUTHOR_ID}`);
}

async function seedCategories() {
  for (const p of PILLARS) {
    const id = `category.${p.slug}`;
    await client.createOrReplace({
      _id: id,
      _type: 'category',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      pillar: p.pillar,
      description: p.description,
      seoGoal: p.seoGoal,
      order: p.order,
    });
    console.log(`✓ Category seeded: ${p.slug}`);
  }
}

async function seedArticles() {
  for (const a of ARTICLES) {
    const id = `post.${a.slug}`;
    const pillarCategoryId = `category.${a.pillarSlug}`;

    // createIfNotExists then patch — preserves manually-edited body text
    await client.createIfNotExists({
      _id: id,
      _type: 'post',
      title: a.title,
      slug: { _type: 'slug', current: a.slug },
      routePrefix: a.routePrefix,
      excerpt: a.excerpt,
      publishedAt: `${a.publishDate}T13:00:00Z`,
      articleType: a.articleType,
      searchIntent: a.searchIntent,
      priority: a.priority,
      wordCountTarget: a.wordCountTarget,
      featured: a.featured ?? false,
      author: { _type: 'reference', _ref: DEFAULT_AUTHOR_ID },
      categories: [
        { _type: 'reference', _ref: pillarCategoryId, _key: a.pillarSlug },
      ],
      seo: {
        _type: 'seo',
        primaryKeyword: a.primaryKeyword,
        secondaryKeywords: a.secondaryKeywords,
        metaTitle: a.title.length <= 60 ? a.title : `${a.title.slice(0, 57)}...`,
        metaDescription:
          a.excerpt.length <= 155 ? a.excerpt : `${a.excerpt.slice(0, 152)}...`,
      },
    });

    // Patch non-destructive fields on every run so edits to launchContent.ts
    // flow through to Sanity (but we don't overwrite hand-edited body).
    await client
      .patch(id)
      .set({
        title: a.title,
        routePrefix: a.routePrefix,
        articleType: a.articleType,
        searchIntent: a.searchIntent,
        priority: a.priority,
        wordCountTarget: a.wordCountTarget,
        featured: a.featured ?? false,
        'seo.primaryKeyword': a.primaryKeyword,
        'seo.secondaryKeywords': a.secondaryKeywords,
      })
      .commit();

    console.log(`✓ Post seeded: ${a.slug}  [${a.priority} · ${a.articleType} · ${a.wordCountTarget}w]`);
  }
}

async function main() {
  console.log(`\nSeeding dataset "${dataset}" on project "${projectId}"\n`);
  await seedAuthor();
  await seedCategories();
  await seedArticles();
  console.log(`\nDone. ${PILLARS.length} categories, ${ARTICLES.length} posts seeded.\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
