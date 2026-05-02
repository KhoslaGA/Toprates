'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '../brand/Icon';
import { colors, fonts } from '@/styles/tokens';

export type NewsletterSource =
  | 'home_hero'
  | 'home_bottom_cta'
  | 'about'
  | 'whats_coming'
  | 'article_inline'
  | 'footer'
  | 'coming_soon'
  | 'other';

interface NewsletterFormProps {
  source: NewsletterSource;
  /** Visual variant — "inline" for compact dark-on-dark, "full" for the prominent block. */
  variant?: 'inline' | 'full';
  /** Override placeholder text on the email input. */
  placeholder?: string;
}

/**
 * CASL-compliant newsletter signup. Writes to /api/newsletter, which captures
 * the consent text + scope + method + IP per CASL audit requirements. The
 * `consented` flag must be true for the API to accept the submission.
 */
export default function NewsletterForm({
  source,
  variant = 'inline',
  placeholder = 'your@email.com',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [consented, setConsented] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@') || submitting) return;
    if (!consented) {
      setError('Please tick the consent box to subscribe.');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email,
          source,
          scope: 'newsletter_plus_brokerage_launch',
          consented,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || "Couldn't subscribe. Please try again.");
      } else {
        setDone(true);
      }
    } catch {
      setError("Couldn't reach the server. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background:
            variant === 'inline'
              ? 'rgba(15,189,201,0.12)'
              : 'rgba(255,255,255,0.12)',
          border:
            variant === 'inline'
              ? '1px solid rgba(15,189,201,0.3)'
              : '1px solid rgba(255,255,255,0.2)',
          borderRadius: 12,
          padding: '14px 20px',
          fontFamily: fonts.heading,
          fontWeight: 700,
          fontSize: 14,
          color: variant === 'inline' ? '#0fbdc9' : '#fff',
        }}
      >
        <Icon name="check" size={16} color={variant === 'inline' ? '#0fbdc9' : '#fff'} />
        You&rsquo;re in. The next guide ships in a couple of weeks.
      </div>
    );
  }

  // Inline variant — dark background (used in hero, footer-like contexts)
  if (variant === 'inline') {
    return (
      <form onSubmit={submit} style={{ maxWidth: 520 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <input
            type="email"
            required
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              padding: '14px 18px',
              borderRadius: 12,
              border: '1.5px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.05)',
              color: '#fff',
              fontFamily: fonts.heading,
              fontSize: 14,
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={submitting}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 22px',
              borderRadius: 12,
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 15,
              cursor: submitting ? 'wait' : 'pointer',
              border: 'none',
              whiteSpace: 'nowrap',
              background: colors.teal,
              color: '#fff',
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? 'Subscribing…' : 'Subscribe'}{' '}
            <Icon name="arrow" size={14} color="#fff" />
          </button>
        </div>
        <label
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            marginTop: 12,
            fontFamily: fonts.heading,
            fontSize: 11,
            lineHeight: 1.55,
            color: 'rgba(246,239,224,0.55)',
          }}
        >
          <input
            type="checkbox"
            required
            checked={consented}
            onChange={(e) => setConsented(e.target.checked)}
            style={{ marginTop: 3 }}
          />
          <span>
            I agree to receive the TopRates.ca newsletter and a launch announcement when our
            brokerage (KLC Group) goes live in summer 2027. Unsubscribe anytime.{' '}
            <Link href="/privacy" style={{ color: '#0fbdc9' }}>
              Privacy policy
            </Link>
            .
          </span>
        </label>
        {error && (
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 12,
              color: '#f59e0b',
              marginTop: 10,
            }}
          >
            {error}
          </p>
        )}
      </form>
    );
  }

  // Full variant — light background, more breathing room
  return (
    <form onSubmit={submit} style={{ maxWidth: 560, margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: 10 }}>
        <input
          type="email"
          required
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: 1,
            padding: '15px 20px',
            borderRadius: 12,
            border: `1.5px solid ${colors.borderSoft}`,
            background: '#fff',
            color: colors.navy,
            fontFamily: fonts.heading,
            fontSize: 15,
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={submitting}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '15px 24px',
            borderRadius: 12,
            fontFamily: fonts.heading,
            fontWeight: 800,
            fontSize: 15,
            cursor: submitting ? 'wait' : 'pointer',
            border: 'none',
            whiteSpace: 'nowrap',
            background: colors.navy,
            color: '#fff',
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? 'Subscribing…' : 'Subscribe'} <Icon name="arrow" size={14} color="#fff" />
        </button>
      </div>
      <label
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 8,
          marginTop: 14,
          fontFamily: fonts.heading,
          fontSize: 12,
          lineHeight: 1.6,
          color: colors.muted,
        }}
      >
        <input
          type="checkbox"
          required
          checked={consented}
          onChange={(e) => setConsented(e.target.checked)}
          style={{ marginTop: 3 }}
        />
        <span>
          I agree to receive the TopRates.ca newsletter and a launch announcement when our
          brokerage (KLC Group) goes live in summer 2027. Unsubscribe anytime.{' '}
          <Link href="/privacy" style={{ color: colors.teal, textDecoration: 'underline' }}>
            Privacy policy
          </Link>
          .
        </span>
      </label>
      {error && (
        <p
          style={{
            fontFamily: fonts.heading,
            fontSize: 13,
            color: '#dc2626',
            marginTop: 10,
          }}
        >
          {error}
        </p>
      )}
    </form>
  );
}
