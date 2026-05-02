import { NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity/writeClient';

export const runtime = 'nodejs';

const ALLOWED_SOURCES = new Set([
  'home_hero',
  'home_bottom_cta',
  'about',
  'whats_coming',
  'article_inline',
  'footer',
  'coming_soon',
  'other',
]);

const ALLOWED_SCOPES = new Set([
  'newsletter_only',
  'newsletter_plus_brokerage_launch',
]);

const CURRENT_CONSENT_TEXT =
  "I am subscribing to the TopRates.ca newsletter. Webhub4u Inc. (operator of TopRates.ca) will send me Canadian insurance education content roughly every other week, plus an announcement when KLC Group launches as a licensed brokerage in summer 2027. I can unsubscribe at any time using the link in any email.";

const RETENTION_MONTHS = 24;

function isValidEmail(email: string): boolean {
  if (typeof email !== 'string' || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function addMonths(d: Date, months: number): Date {
  const r = new Date(d);
  r.setMonth(r.getMonth() + months);
  return r;
}

export async function POST(request: Request) {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json(
      { ok: false, error: 'Newsletter storage not configured' },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { email, source, scope, consented } = (body ?? {}) as {
    email?: string;
    source?: string;
    scope?: string;
    consented?: boolean;
  };

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: 'Valid email required' },
      { status: 400 },
    );
  }

  if (!consented) {
    return NextResponse.json(
      { ok: false, error: 'Consent is required to subscribe' },
      { status: 400 },
    );
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedSource = ALLOWED_SOURCES.has(source ?? '') ? source : 'other';
  const normalizedScope = ALLOWED_SCOPES.has(scope ?? '')
    ? scope
    : 'newsletter_plus_brokerage_launch';

  const forwardedFor = request.headers.get('x-forwarded-for');
  const ipAddress = forwardedFor?.split(',')[0]?.trim() ?? 'unknown';

  const submittedAt = new Date();
  const retentionUntil = addMonths(submittedAt, RETENTION_MONTHS);

  try {
    await writeClient.create({
      _type: 'newsletterSubscriber',
      email: normalizedEmail,
      source: normalizedSource,
      consentText: CURRENT_CONSENT_TEXT,
      consentScope: normalizedScope,
      consentMethod: 'express_opt_in',
      ipAddress,
      userAgent: request.headers.get('user-agent') ?? undefined,
      referer: request.headers.get('referer') ?? undefined,
      submittedAt: submittedAt.toISOString(),
      retentionUntil: retentionUntil.toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Newsletter create failed', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to subscribe' },
      { status: 500 },
    );
  }
}
