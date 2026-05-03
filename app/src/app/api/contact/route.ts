import { NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity/writeClient';

export const runtime = 'nodejs';

const ALLOWED_PRODUCTS = new Set([
  'life-insurance',
  'critical-illness',
  'disability',
  'travel-insurance',
  'auto-insurance',
  'home-insurance',
  'business-insurance',
  'mortgages',
  'credit-cards',
  'investing',
  'general',
]);

const KLC_LIVE_PRODUCTS = new Set([
  'life-insurance',
  'critical-illness',
  'disability',
  'travel-insurance',
]);

const FUTURE_PC_PRODUCTS = new Set([
  'auto-insurance',
  'home-insurance',
  'business-insurance',
]);

const RETENTION_DAYS_UNCONVERTED = 90;

function isValidEmail(email: string): boolean {
  if (typeof email !== 'string' || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function addDays(d: Date, days: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + days);
  return r;
}

function routeFor(product: string): string {
  if (KLC_LIVE_PRODUCTS.has(product)) return 'KLC Group Canada Inc.';
  if (FUTURE_PC_PRODUCTS.has(product)) return 'Future P&C list (KLC RIBO 2027)';
  if (product === 'mortgages') return 'MBLAA referral partner';
  return 'Editorial response';
}

export async function POST(request: Request) {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json(
      { ok: false, error: 'Storage not configured' },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { product, name, email, phone, postalCode, message, consent, consentText } =
    (body ?? {}) as {
      product?: string;
      name?: string;
      email?: string;
      phone?: string;
      postalCode?: string;
      message?: string;
      consent?: boolean;
      consentText?: string;
    };

  if (!consent) {
    return NextResponse.json({ ok: false, error: 'Consent required' }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: 'Valid email required' },
      { status: 400 },
    );
  }
  if (!name || !name.trim()) {
    return NextResponse.json({ ok: false, error: 'Name required' }, { status: 400 });
  }
  if (!product || !ALLOWED_PRODUCTS.has(product)) {
    return NextResponse.json({ ok: false, error: 'Invalid product' }, { status: 400 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  const submittedAt = new Date();
  const retentionUntil = addDays(submittedAt, RETENTION_DAYS_UNCONVERTED);

  try {
    await writeClient.create({
      _type: 'contactInquiry',
      product,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() ?? '',
      postalCode: postalCode?.trim().toUpperCase() ?? '',
      message: message?.trim() ?? '',
      consent: true,
      consentText: consentText ?? '',
      routedTo: routeFor(product),
      ipAddress: ip,
      userAgent: request.headers.get('user-agent') ?? undefined,
      submittedAt: submittedAt.toISOString(),
      retentionUntil: retentionUntil.toISOString(),
      status: 'new',
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact inquiry failed', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to submit' },
      { status: 500 },
    );
  }
}
