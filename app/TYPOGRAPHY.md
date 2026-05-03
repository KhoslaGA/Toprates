# TopRates.ca — Typography Reference

Quick reference for font families and sizes used across the app.

Source of truth: [`src/styles/tokens.ts`](src/styles/tokens.ts) (the `fonts` constant).
Loaded via Google Fonts in [`src/app/layout.tsx`](src/app/layout.tsx).

---

## Font families

| Token | CSS stack | Used for |
|---|---|---|
| `fonts.heading` | `'Outfit', system-ui, sans-serif` | All headings + body copy across new homepage / nav / footer / disclaimers. **The default sans on the new design.** Weights 400–900. |
| `fonts.mono` | `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace` | Eyebrows ("EDUCATION TODAY · QUOTES SUMMER 2027"), labels, pill text, statistics, code-like UI bits. Weights 400 / 600 / 700. |
| `fonts.body` | `'DM Sans', system-ui, sans-serif` | Legacy — still used in some older pages (auto/home insurance forms, contact form, etc.). Will phase out as those pages are rebuilt. |
| `fonts.serif` | `'Newsreader', Georgia, serif` | Long-form editorial body on About page, Privacy/Terms paragraphs, article body. Weights 400 / 500 / 600. |

### Google Fonts URL (loaded once in `layout.tsx`)

```
https://fonts.googleapis.com/css2
  ?family=DM+Sans:wght@400;500;600;700
  &family=Outfit:wght@400;500;600;700;800;900
  &family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400
  &family=JetBrains+Mono:wght@400;600;700
  &display=swap
```

---

## Type scale (most-used sizes)

These are observed counts from the codebase (occurrences in inline styles). Treat the `Use for` column as the rule, not the exception.

| Size | Count | Use for |
|---|---|---|
| **8px** | 3 | Tiny mono labels (inside pills next to logos) |
| **9px** | 7 | Mono "BEST" / "REFORM" badge labels |
| **10px** | 20 | Eyebrow text in mono ("EDUCATION TODAY · QUOTES SUMMER 2027"), small status pills |
| **11px** | 39 | Mono section eyebrows, footer columns, footer disclaimer body, card subtitles |
| **12px** | 21 | Footer copyright row, fine print, "+18 MORE" carrier-row label, monogram pill |
| **13px** | 32 | Body text in cards (promise cards, articles index, footer column links), tab labels |
| **14px** | 48 | **Default body size.** Form inputs, body paragraphs in CTAs, nav item labels, button labels in mobile nav |
| **15px** | 34 | Slightly enlarged body — bullet-list items, FAQ answers, About page paragraphs, newsletter button labels |
| **16px** | 17 | Larger body — disclaimer block text, product-selector body copy, key paragraphs |
| **17px** | 15 | Hero subhead on landing/about pages, About-page editorial paragraphs |
| **18px** | 9 | Hero subhead on homepage, body of long-form sections |
| **19px** | — | Editorial Newsreader-serif paragraphs (About hero) |
| **20px** | 6 | Small section headings (`<h3>`) on About page differentiator cards |
| **22px** | 7 | Legacy h2 on stats/savings panels |
| **24px** | 4 | Section heading (`h2`) — "What we are", "The partnership" |
| **26px** | 13 | About-page section headings; bottom-CTA h2 on legacy pages |
| **28px** | 7 | "Why the wait" h2 on /whats-coming; legacy hero number |
| **30px** | 9 | Smaller homepage section h2 |
| **32px** | — | Mortgage page hero h2 (Final CTA section h2) |
| **34px** | — | Legacy About hero h1 (overridden by 44 in new About) |
| **36px** | 4 | "/whats-coming" roadmap heading; "/glossary" h2 |
| **44px** | 6 | "What are you shopping for today?" (ProductSelector h2); StatsBand numbers |
| **48px** | — | About-page hero h1; /learn hub hero h1; /whats-coming hero h1 (collapsed mobile) |
| **56px** | 4 | Hero h1 on `/whats-coming` and `/auto-insurance/[slug]` landing pages; v2 hero number column |
| **64px** | — | Homepage hero h1 desktop ("Insurance, in plain English."); SampleSavingsCard "$2,450" — defined in CSS class `.hero-h1-v2` in `globals.css` |

The big-ticket display sizes are gated by responsive CSS. See `src/styles/globals.css` for `.hero-h1-v2`, `.hero-grid-v2`, etc.

### Responsive breakpoints (from `globals.css`)

| Breakpoint | What changes |
|---|---|
| **≤ 1024px** | Hero grid stacks (`1.2fr 1fr` → `1fr`); hero H1 64 → 48px; StatsBand 4-col → 2×2; MegaNav switches to hamburger. |
| **≤ 640px** | Hero H1 48 → 36px; hero email form stacks vertically; StatsBand numbers 44 → 32px; CarrierRow marquee gap tightens, animation speeds up. |

---

## Weight conventions

- **900 (Black)** — Display headings: hero H1, section H2 with strong tracking (-1px to -2px).
- **800 (Extra Bold)** — Card titles, button labels, subtotal numbers.
- **700 (Bold)** — Sub-headings, mono eyebrow text, footer column headers.
- **600 (Semi Bold)** — Body emphasis, mono labels.
- **500 (Medium)** — Secondary body, inactive nav state.
- **400 (Regular)** — Default body, paragraph text.

Outfit is used at 700–900 for display work. JetBrains Mono is used at 700 for eyebrows, 600 for sub-labels, 400 for monospace data.

---

## Letter-spacing (tracking) cheat sheet

Used together with size to dial in the brand feel:

| Use case | Tracking |
|---|---|
| Hero h1 (Outfit Black 64px+) | `-2.2px` to `-2px` |
| Section h2 (Outfit Black 36–48px) | `-1.2px` to `-1.4px` |
| Card titles (Outfit 18–24px) | `-0.4px` to `-0.8px` |
| Mono eyebrow (10–11px) | `1.5px` to `2px` (positive) |
| Mono badge label (8–9px) | `1px` to `1.5px` (positive) |
| Body paragraphs | default (`0`) |

Negative tracking on display sizes is what gives the homepage its editorial feel; positive tracking on mono labels is what makes them read as utility text rather than body.

---

## How to import in your code

```tsx
import { fonts } from '@/styles/tokens';

// Inline style usage:
<h1 style={{ fontFamily: fonts.heading, fontSize: 64, fontWeight: 900, letterSpacing: '-2.2px' }}>
  Insurance, in plain English.
</h1>

<span style={{ fontFamily: fonts.mono, fontSize: 11, letterSpacing: 1.5, fontWeight: 700 }}>
  EDUCATION TODAY · QUOTES SUMMER 2027
</span>
```

If you're adding new components, **prefer `fonts.heading` (Outfit) and `fonts.mono` (JetBrains Mono)** over the legacy `fonts.body` / `fonts.serif`. Those will be phased out as older pages are rebuilt.
