/**
 * MegaNav structure. Each top-level category has 3 columns of items
 * plus a promo card on the right.
 *
 * Status routing convention:
 *   - `live: true`  → href points to a real page that exists
 *   - `soon: true`  → href points to /coming-soon (waitlist sign-up)
 *   - neither       → links work but have no status pill
 */

export type NavTag = 'LIVE' | 'SOON';

export interface NavSubItem {
  name: string;
  desc: string;
  href: string;
  live?: boolean;
  soon?: boolean;
}

export interface NavSection {
  title: string;
  items: NavSubItem[];
}

export interface NavPromo {
  tag: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
  accent: 'gold' | 'green' | 'teal';
}

export interface NavCategory {
  id: string;
  label: string;
  tag?: NavTag;
  sections: NavSection[];
  promo: NavPromo;
}

const SOON = '/coming-soon';

export const NAV_DATA: NavCategory[] = [
  /* ──────────────────── Car Insurance ──────────────────── */
  {
    id: 'car',
    label: 'Car Insurance',

    sections: [
      {
        title: 'By Province',
        items: [
          { name: 'Ontario Car Insurance', desc: '50+ carriers compared', href: '/auto-insurance' },
          { name: 'Alberta Car Insurance', desc: 'Grid rate comparison', href: '/auto-insurance/alberta' },
          { name: 'Quebec Car Insurance', desc: 'Hybrid no-fault system', href: '/auto-insurance/quebec' },
          { name: 'Atlantic Canada', desc: 'NB, NS, PEI & NL', href: '/auto-insurance/atlantic' },
          { name: 'Compare All Provinces', desc: 'National rate map', href: '/auto-insurance/all-provinces' },
        ],
      },
      {
        title: 'By Ontario City',
        items: [
          { name: 'Brampton', desc: 'Avg $3,802/yr', href: '/auto-insurance/brampton' },
          { name: 'Mississauga', desc: 'Avg $2,489/yr', href: '/auto-insurance/mississauga' },
          { name: 'Scarborough & North York', desc: 'Toronto periphery', href: '/auto-insurance/scarborough' },
          { name: 'Vaughan & Markham', desc: 'High-premium 905', href: '/auto-insurance/vaughan' },
          { name: 'Eastern Ontario', desc: 'From $1,412/yr', href: '/auto-insurance/eastern-ontario' },
          { name: 'All Ontario Cities →', desc: 'Full city directory', href: '/auto-insurance/ontario-cities' },
        ],
      },
      {
        title: 'By Driver Type',
        items: [
          { name: 'New to Canada', desc: 'Build history from scratch', href: '/auto-insurance/new-canadian' },
          { name: 'New Drivers (G1/G2)', desc: 'Your first policy', href: '/auto-insurance/new-driver' },
          { name: 'Young Drivers Under 25', desc: 'Lower youth premiums', href: '/auto-insurance/young-drivers' },
          { name: 'Seniors 65+', desc: 'Mature driver discounts', href: '/auto-insurance/seniors' },
          { name: 'High-Risk Drivers', desc: 'After tickets or accidents', href: '/auto-insurance/high-risk' },
          { name: 'Rideshare Drivers', desc: 'Uber, Lyft coverage', href: '/auto-insurance/rideshare' },
        ],
      },
    ],
    promo: {
      tag: 'REFORM ALERT',
      title: 'Ontario Auto Reform 2026',
      desc: "Most accident benefits become optional July 1. Understand what's changing before your renewal.",
      cta: 'Read the guide →',
      href: '/blog',
      accent: 'gold',
    },
  },

  /* ──────────────────── Home Insurance ──────────────────── */
  {
    id: 'home',
    label: 'Home Insurance',

    sections: [
      {
        title: 'Property Type',
        items: [
          { name: 'Home Insurance', desc: 'Detached, semi & townhouse', href: '/home-insurance' },
          { name: 'Condo Insurance', desc: 'Unit owner protection', href: SOON },
          { name: 'Tenant Insurance', desc: 'Renters & roommates', href: SOON },
          { name: 'Landlord Insurance', desc: 'Rental property', href: SOON },
          { name: 'Cottage & Seasonal', desc: 'Secondary home', href: SOON },
        ],
      },
      {
        title: 'Coverage Add-Ons',
        items: [
          { name: 'Water Damage & Flood', desc: 'Overland & sewer backup', href: SOON },
          { name: 'Fire & Smoke Damage', desc: "What's covered", href: SOON },
          { name: 'Jewelry & Valuables', desc: 'Scheduled items', href: SOON },
          { name: 'Earthquake Coverage', desc: 'Optional add-on', href: SOON },
          { name: 'Pool & Liability', desc: 'Increased limits', href: SOON },
        ],
      },
      {
        title: 'Popular Guides',
        items: [
          { name: 'Home Insurance 101', desc: 'Complete Ontario guide', href: '/blog' },
          { name: 'Bundle & Save 20%', desc: 'Home + auto discount', href: '/blog' },
          { name: 'Filing a Claim', desc: 'Step-by-step process', href: '/blog' },
          { name: 'Lower Your Premium', desc: '15 practical tips', href: '/blog' },
          { name: 'Coverage Calculator', desc: 'Know your limits', href: SOON },
        ],
      },
    ],
    promo: {
      tag: 'AVG SAVINGS',
      title: 'Bundle home + auto',
      desc: 'Bundling home + auto with the same carrier typically reduces premiums. Editorial guide on what to know before you bundle.',
      cta: 'Learn how →',
      href: '/blog',
      accent: 'green',
    },
  },

  /* ──────────────────── Life Insurance ──────────────────── */
  {
    id: 'life',
    label: 'Life Insurance',
    sections: [
      {
        title: 'Life Insurance Types',
        items: [
          { name: 'Term Life Insurance', desc: '10, 20, 30-year coverage', href: '/life-insurance' },
          { name: 'Whole Life Insurance', desc: 'Permanent coverage', href: '/life-insurance' },
          { name: 'Universal Life', desc: 'Flexible premium + investment', href: SOON },
          { name: 'Final Expense', desc: 'Funeral & burial coverage', href: SOON },
          { name: 'No Medical Life', desc: 'Guaranteed issue, no exam', href: SOON },
          { name: 'Mortgage Life', desc: 'Pays off mortgage on death', href: SOON },
        ],
      },
      {
        title: 'Health & Protection',
        items: [
          { name: 'Critical Illness', desc: 'Lump-sum on diagnosis', href: SOON },
          { name: 'Disability Insurance', desc: 'Income protection', href: SOON },
          { name: 'Health & Dental', desc: 'Supplemental coverage', href: '/health-insurance' },
          { name: 'Long-Term Care', desc: 'Senior care planning', href: SOON },
          { name: 'Group Benefits', desc: 'Employer-sponsored plans', href: SOON },
          { name: 'Pet Insurance', desc: 'Cat, dog & exotic', href: SOON },
        ],
      },
      {
        title: 'Resources & Guides',
        items: [
          { name: 'Life Insurance 101', desc: 'Beginner-friendly guide', href: '/blog' },
          { name: 'How much do I need?', desc: 'Coverage calculator', href: SOON },
          { name: 'Term vs. Whole', desc: 'Which is right for you?', href: '/blog' },
          { name: 'Application Help', desc: 'What to expect', href: SOON },
          { name: 'Medical Exam Tips', desc: 'Pass the underwriting', href: SOON },
          { name: 'Glossary of Terms', desc: 'Demystify the jargon', href: SOON },
        ],
      },
    ],
    promo: {
      tag: 'PROTECT YOUR FAMILY',
      title: 'Term life from $14/month',
      desc: 'A healthy 30-year-old can lock in $500K of 20-year term coverage for the price of a Netflix subscription.',
      cta: 'Compare term life →',
      href: '/life-insurance',
      accent: 'teal',
    },
  },

  /* ──────────────────── Business Insurance ──────────────────── */
  {
    id: 'business',
    label: 'Business Insurance',

    sections: [
      {
        title: 'By Industry',
        items: [
          { name: 'Restaurants & Food', desc: 'Liability + property bundles', href: '/business-insurance' },
          { name: 'Construction & Trades', desc: 'Tools, liability, builders risk', href: '/business-insurance' },
          { name: 'Retail & E-Commerce', desc: 'In-store & online stores', href: '/business-insurance' },
          { name: 'Tech & IT Consulting', desc: 'Cyber + E&O coverage', href: '/business-insurance' },
          { name: 'Healthcare Practices', desc: 'Malpractice & clinic coverage', href: SOON },
          { name: 'Real Estate Agents', desc: 'E&O for realtors', href: SOON },
        ],
      },
      {
        title: 'By Coverage Type',
        items: [
          { name: 'General Liability (CGL)', desc: 'Slip-and-fall protection', href: '/business-insurance' },
          { name: 'Commercial Property', desc: 'Building, contents, equipment', href: '/business-insurance' },
          { name: 'Professional Liability (E&O)', desc: 'Errors & omissions', href: '/business-insurance' },
          { name: 'Cyber Liability', desc: 'Data breach + ransomware', href: SOON },
          { name: 'Workers Comp / WSIB', desc: 'Employee injury coverage', href: SOON },
          { name: 'Tools & Equipment', desc: 'Theft + damage on jobsites', href: SOON },
        ],
      },
      {
        title: 'Resources',
        items: [
          { name: 'Business Insurance 101', desc: 'What every owner should know', href: '/blog' },
          { name: 'Talk to us', desc: 'Get matched with a licensed advisor', href: '/contact' },
          { name: 'Renewal Checklist', desc: 'Audit before you re-sign', href: SOON },
          { name: 'Premium-Saving Tips', desc: '12 tactics for SMB owners', href: SOON },
          { name: 'Glossary of Terms', desc: 'CGL, BOP, E&O, decoded', href: SOON },
        ],
      },
    ],
    promo: {
      tag: 'BUNDLE SAVINGS',
      title: 'Bundle business coverage',
      desc: 'Combining general liability, commercial property, and cyber typically reduces premiums. Editorial guide on the trade-offs.',
      cta: 'Compare bundles →',
      href: '/business-insurance',
      accent: 'green',
    },
  },

  /* ──────────────────── Mortgage Rates ──────────────────── */
  {
    id: 'mortgage',
    label: 'Mortgage Rates',

    sections: [
      {
        title: 'Rate Types',
        items: [
          { name: '5-Year Fixed', desc: 'Most popular term in Canada', href: '/mortgages' },
          { name: '3-Year Fixed', desc: 'Mid-term flexibility', href: '/mortgages' },
          { name: '1-Year Fixed', desc: 'Short-term lock', href: '/mortgages' },
          { name: 'Variable Rate', desc: 'Floats with prime', href: '/mortgages' },
          { name: 'Adjustable Rate', desc: 'Payment moves with rate', href: SOON },
          { name: 'Open Mortgages', desc: 'Pay any time, no penalty', href: SOON },
        ],
      },
      {
        title: 'By Situation',
        items: [
          { name: 'First-Time Buyer', desc: 'Programs + insured rates', href: '/mortgages' },
          { name: 'Renewal', desc: 'Compare before re-signing', href: '/mortgages' },
          { name: 'Refinance', desc: 'Tap equity or lower payment', href: '/mortgages' },
          { name: 'Switch Lender', desc: 'Move at renewal — keep amortization', href: SOON },
          { name: 'Investment Property', desc: 'Rental & rental income rules', href: SOON },
          { name: 'HELOC', desc: 'Home equity line of credit', href: SOON },
        ],
      },
      {
        title: 'Tools & Calculators',
        items: [
          { name: 'Mortgage Calculator', desc: 'Monthly payment estimator', href: SOON },
          { name: 'Affordability Calculator', desc: 'How much can you borrow?', href: SOON },
          { name: 'Stress Test Calculator', desc: 'OSFI qualifying rate', href: SOON },
          { name: 'Penalty Estimator', desc: 'IRD vs 3-month interest', href: SOON },
          { name: 'Rate Alerts', desc: 'Get notified when rates drop', href: SOON },
          { name: 'BoC Rate Forecasts', desc: 'What economists expect', href: '/blog' },
        ],
      },
    ],
    promo: {
      tag: "TODAY'S BEST",
      title: '5-year fixed: 4.79%',
      desc: 'Lock in this week — rates ticked down 0.12%. Pre-approved in 24 hrs, no obligation.',
      cta: 'See all rates →',
      href: '/mortgages',
      accent: 'green',
    },
  },

  /* ──────────────────── Credit Cards ──────────────────── */
  {
    id: 'cards',
    label: 'Credit Cards',

    sections: [
      {
        title: 'By Reward Type',
        items: [
          { name: 'Cash Back Cards', desc: 'Earn on every purchase', href: '/credit-cards' },
          { name: 'Travel Rewards', desc: 'Points for flights & hotels', href: '/credit-cards' },
          { name: 'No-Fee Cards', desc: '$0 annual fee', href: '/credit-cards' },
          { name: 'Low Interest Cards', desc: 'Save on balances', href: '/credit-cards' },
          { name: 'Welcome Bonus Cards', desc: 'Best sign-up offers', href: '/credit-cards' },
          { name: 'Balance Transfer', desc: '0% promo rates', href: '/credit-cards' },
        ],
      },
      {
        title: 'By Who You Are',
        items: [
          { name: 'Student Cards', desc: 'No income required', href: '/credit-cards' },
          { name: 'New to Canada', desc: 'No credit history', href: '/credit-cards' },
          { name: 'Business Cards', desc: 'Corporate & small biz', href: '/credit-cards' },
          { name: 'Secured Cards', desc: 'Build credit from scratch', href: '/credit-cards' },
          { name: 'Premium & Luxury', desc: 'Status cards & perks', href: '/credit-cards' },
          { name: 'Family Cards', desc: 'Grocery & gas rewards', href: '/credit-cards' },
        ],
      },
      {
        title: 'By Issuer',
        items: [
          { name: 'RBC Credit Cards', desc: 'Avion & more', href: '/credit-cards' },
          { name: 'TD Credit Cards', desc: 'Aeroplan Visa Infinite', href: '/credit-cards' },
          { name: 'Scotiabank Cards', desc: 'Momentum & Passport', href: '/credit-cards' },
          { name: 'AMEX Canada', desc: 'Cobalt, Gold & Platinum', href: '/credit-cards' },
          { name: 'CIBC Cards', desc: 'Dividend & Aventura', href: '/credit-cards' },
          { name: 'All 12+ Issuers', desc: 'Compare all banks', href: '/credit-cards' },
        ],
      },
    ],
    promo: {
      tag: '2026 PICKS',
      title: 'Best credit cards of 2026',
      desc: 'We analyzed 50+ Canadian credit cards across 12 categories. See our top picks.',
      cta: 'See top picks →',
      href: '/credit-cards',
      accent: 'green',
    },
  },

  /* ──────────────────── More Options ──────────────────── */
  {
    id: 'more',
    label: 'More Options',
    sections: [
      {
        title: 'Travel Insurance',
        items: [
          { name: 'Travel Insurance', desc: 'Single & multi-trip coverage', href: '/travel-insurance' },
          { name: 'Visitors to Canada', desc: 'Medical coverage for visitors', href: SOON },
          { name: 'International Students', desc: 'Study abroad coverage', href: SOON },
          { name: 'Super Visa Insurance', desc: 'Parent / grandparent visa', href: SOON },
          { name: 'Snowbird Insurance', desc: 'Long-stay US travel', href: SOON },
        ],
      },
      {
        title: 'Other Products',
        items: [
          { name: 'Motorcycle Insurance', desc: 'Bike & scooter coverage', href: SOON },
          { name: 'RV & Trailer Insurance', desc: 'Recreational vehicles', href: SOON },
          { name: 'Boat Insurance', desc: 'Watercraft coverage', href: SOON },
          { name: 'ATV & Snowmobile', desc: 'Off-road vehicles', href: SOON },
          { name: 'Personal Loans', desc: 'Compare loan rates', href: SOON },
          { name: 'Lines of Credit', desc: 'Personal LOCs', href: SOON },
        ],
      },
      {
        title: 'Banking & Investing',
        items: [
          { name: 'Bank Accounts', desc: 'Compare top Canadian accounts', href: SOON },
          { name: 'Chequing Accounts', desc: 'Daily banking', href: SOON },
          { name: 'Savings Accounts', desc: 'High-interest savings', href: '/investing' },
          { name: 'TFSAs', desc: 'Tax-Free Savings Account', href: '/investing' },
          { name: 'GICs', desc: '1, 3, 5-year fixed rates', href: '/investing' },
          { name: 'RRSPs', desc: 'Retirement Savings Plan', href: '/investing' },
        ],
      },
    ],
    promo: {
      tag: 'FEATURED RATES',
      title: 'Top HISA & GIC rates',
      desc: 'Beat 5% on cash with the highest-paying high-interest accounts and GICs in Canada this month.',
      cta: 'Compare rates →',
      href: '/investing',
      accent: 'teal',
    },
  },

  /* ──────────────────── News and Resources ──────────────────── */
  {
    id: 'news',
    label: 'News and Resources',
    sections: [
      {
        title: 'Pillar Guides',
        items: [
          { name: '2026 Reform Guide', desc: "What's changing July 1", href: '/blog' },
          { name: 'Ontario Auto 101', desc: 'Complete beginner guide', href: '/blog' },
          { name: 'Home Insurance 101', desc: 'Coverage basics', href: '/blog' },
          { name: 'Credit Card 101', desc: 'Rewards & fees explained', href: '/blog' },
          { name: '15 Ways to Save', desc: 'Lower your premium', href: '/blog' },
          { name: 'Glossary of Terms', desc: 'Insurance jargon decoded', href: '/blog' },
        ],
      },
      {
        title: 'Interactive Tools',
        items: [
          { name: 'Snap Your Pink Slip', desc: 'Auto-reads your policy', href: SOON },
          { name: 'Snap Your Dec Page', desc: 'Auto-reads your policy', href: SOON },
          { name: 'Savings Calculator', desc: 'Estimate your savings', href: SOON },
          { name: 'Self-Assessment Quiz', desc: 'Which benefits you need', href: SOON },
          { name: 'Card Match Quiz', desc: '3 questions, best card', href: SOON },
          { name: 'Bundle Calculator', desc: 'Home + auto savings', href: SOON },
        ],
      },
      {
        title: 'News & Company',
        items: [
          { name: 'Latest Articles', desc: 'All guides & news', href: '/blog' },
          { name: 'Rate Index Reports', desc: 'Quarterly market data', href: SOON },
          { name: 'About TopRates.ca', desc: 'Our story & mission', href: '/about' },
          { name: 'For Brokers', desc: 'Partner with us', href: SOON },
          { name: 'Newsroom', desc: 'Press & media', href: SOON },
          { name: 'Contact Us', desc: 'Get in touch', href: '/contact' },
        ],
      },
    ],
    promo: {
      tag: 'START HERE',
      title: 'New to insurance?',
      desc: 'Beginner-friendly guides break down everything about Ontario auto, home, and life insurance.',
      cta: 'Start learning →',
      href: '/blog',
      accent: 'teal',
    },
  },
];
