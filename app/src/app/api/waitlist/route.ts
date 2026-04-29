import { NextResponse } from 'next/server';
import { writeClient } from '@/lib/sanity/writeClient';

export const runtime = 'nodejs';

const ALLOWED_SOURCES = new Set(['home_hero', 'home_bottom_cta', 'other']);

function isValidEmail(email: string): boolean {
  if (typeof email !== 'string' || email.length > 254) return false;
  // Pragmatic regex — full RFC 5322 is overkill for a waitlist gate
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json(
      { ok: false, error: 'Waitlist storage not configured' },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { email, source } = (body ?? {}) as { email?: string; source?: string };

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: 'Valid email required' },
      { status: 400 },
    );
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedSource = ALLOWED_SOURCES.has(source ?? '') ? source : 'other';

  try {
    await writeClient.create({
      _type: 'waitlistEntry',
      email: normalizedEmail,
      source: normalizedSource,
      userAgent: request.headers.get('user-agent') ?? undefined,
      referer: request.headers.get('referer') ?? undefined,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Waitlist create failed', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to save entry' },
      { status: 500 },
    );
  }
}
