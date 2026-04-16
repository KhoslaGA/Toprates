# TopRates.ca backend — Phase 1

Branch: `backend`
Scope: Sanity schema upgrade + blog wired to live Sanity data + launch-content seed.

## What changed

### New Sanity schemas
- `sanity/schemas/seo.ts` — reusable SEO object (metaTitle, metaDescription, primaryKeyword, secondaryKeywords, ogImage, canonical, noindex)
- `sanity/schemas/faqItem.ts` — FAQ rows, rendered into FAQ JSON-LD
- `sanity/schemas/sourceCitation.ts` — FSRA / IBC / RIBO citations (E-E-A-T)
- `sanity/schemas/newsletterSubscription.ts` — waitlist storage doc

### Updated Sanity schemas
- `sanity/schemas/post.ts` — adds `routePrefix` (blog/guides/tools), `articleType`, `searchIntent`, `priority` (P1/P2/P3), `wordCountTarget`, `readingTime`, `lastUpdated`, `featured`, `seo`, `faqItems`, `relatedPosts`, `sources`, `reviewedBy`
- `sanity/schemas/category.ts` — adds `pillar` (5 content pillars from the plan), `seoGoal`, `order`
- `sanity/sanity.config.ts` — registers all new schemas

### Sanity wiring
- `src/lib/sanity/client.ts` — rewritten for Next.js 13+ App Router; drops the removed `createPreviewSubscriptionHook`; adds `sanityFetch()` with cache tags
- `src/lib/sanity/queries.ts` — new projections (`postCardProjection`, `postFullProjection`); draft filtering; paginated posts; category post-counts; blog stats; slugs for `generateStaticParams`
- `src/lib/sanity/helpers.ts` — `postUrl()` (resolves `/blog/`, `/guides/`, `/tools/` from `routePrefix`), `imageUrl()`, `resolveExcerpt()`, `estimateReadingTime()`

### Types
- `src/types/blog.ts` — full rewrite around the new Sanity shape: `RoutePrefix`, `ArticleType`, `ContentPillar`, `Priority`, `PostCard`, `Post`, `Category`, `FaqItem`, `SourceCitation`, `NewsletterSubscriptionInput`, etc. Legacy `PostCardData` preserved as alias.

### SEO
- `src/lib/seo/jsonLd.ts` — helpers that emit Article / NewsArticle, FAQPage, and BreadcrumbList JSON-LD

### Blog pages (now server components fetching from Sanity)
- `src/app/blog/page.tsx` — listing with featured hero, category filter, pagination
- `src/app/blog/[id]/page.tsx` — detail page with:
  - `generateMetadata()` driven by the SEO object
  - `generateStaticParams()` for ISR
  - Article + Breadcrumb + (conditional) FAQ JSON-LD
  - Portable Text body rendering
  - Hero image, breadcrumbs, author line, published + last-updated dates, reading time
  - Sources section (E-E-A-T)
  - FAQ accordion with `details`/`summary`
  - Pre-launch waitlist CTA (posts to `/api/waitlist` — to be built in Phase 2)
  - Related posts + author bio
- `src/app/blog/category/[id]/page.tsx` — category archive with `generateMetadata`

### Components
- `src/components/blog/PostCard.tsx` — uses `postUrl()` so cards correctly link to `/blog/*`, `/guides/*`, or `/tools/*`; resilient to missing images / avatars
- `src/components/blog/AuthorBio.tsx` — new `AuthorRef` shape; links to `/author/[slug]`

### Launch content (seed)
- `scripts/launchContent.ts` — the 5 pillars + the 20 articles from the May–June 2026 calendar, all typed
- `scripts/seed.ts` — idempotent Sanity seeder (creates / patches author, 5 categories, 20 posts)
- `package.json` — adds `npm run seed` + `npm run typecheck`; adds `@portabletext/react`, `tsx`, `dotenv` (dev)
- `.env.example` — `SANITY_WRITE_TOKEN` for seeding, `NEXT_PUBLIC_SANITY_API_VERSION`

### Config
- `tsconfig.json` — adds `"ignoreDeprecations": "6.0"` so TS 6 compiles

## How to run

```bash
# 1. install new deps
npm install

# 2. set env
cp .env.example .env.local
#    fill in NEXT_PUBLIC_SANITY_PROJECT_ID, dataset, and SANITY_WRITE_TOKEN
#    (get the write token from https://www.sanity.io/manage → API → Tokens → Editor)

# 3. deploy updated schema to Sanity Studio
#    (in whichever folder hosts the Studio — schemas live in ./sanity/schemas)
#    e.g. npx sanity deploy

# 4. seed the launch content
npm run seed
# → creates 5 categories, 1 author, 20 posts

# 5. run the site
npm run dev
#   visit /blog              → list of 20 posts
#   visit /blog/<slug>       → any post from the calendar
#   visit /blog/category/<slug> → e.g. /blog/category/reform-explainers
```

## Not yet done (Phase 2+)

1. `/guides/[slug]` and `/tools/[slug]` dynamic routes (currently all posts render under `/blog/[slug]`)
2. `POST /api/waitlist` route + unsubscribe flow
3. Reusable `<WaitlistForm />` client component (currently inline `<form>` on article page)
4. `sitemap.xml` + `robots.txt` + dynamic OG image route
5. Previously-mocked pre-existing files (`pages_old/*`, `components/*` legacy) — untouched per scope
6. Pre-existing TS errors in `investing/page.tsx`, `Pagination.tsx`, `CategoryBadge.tsx`, `image.ts` — untouched; fix in a cleanup pass

## Type-check

`npx tsc --noEmit` passes for every file I added or changed. Remaining project errors are pre-existing and outside this phase's scope (Sanity Studio package not installed, deprecated Pagination types, etc.).
