/**
 * Design tokens — single source of truth.
 *
 * Use these in inline styles across the app. Keep string values so they drop
 * straight into style={{...}} without interpolation.
 */

export const colors = {
  paper: '#ffffff',
  surface: '#fbf8f0',
  cream: '#f6efe0',
  teal: '#0A7E8C',
  tealHover: '#0d9aa8',
  tealDark: '#086874',
  navy: '#1B2A4A',
  navyDark: '#0f1e38',
  gold: '#B8960C',
  border: '#e8ecf0',
  borderSoft: 'rgba(27,42,74,0.1)',
  borderFaint: 'rgba(27,42,74,0.06)',
  subtleBg: '#f8fafb',
  muted: '#6b7b8d',
  mutedAlt: 'rgba(27,42,74,0.6)',
  text: '#2D2D2D',
  red: '#CC3333',
  green: '#0D8050',
} as const;

export const fonts = {
  heading: "'Outfit', system-ui, sans-serif",
  body: "'DM Sans', system-ui, sans-serif",
  serif: "'Newsreader', Georgia, serif",
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;

export const layout = {
  maxWidth: 1080,
  maxWidthWide: 1200, // hero/footer per mockup
  navHeight: 64,
  navHeightMobile: 56,
} as const;

// Shorthand for places that still read TEAL/NAVY/GOLD the way mockups do.
export const TEAL = colors.teal;
export const NAVY = colors.navy;
export const GOLD = colors.gold;
