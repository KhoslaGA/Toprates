/**
 * Design tokens — single source of truth.
 *
 * Use these in inline styles across the app. Keep string values so they drop
 * straight into style={{...}} without interpolation.
 */

export const colors = {
  teal: '#0A7E8C',
  tealHover: '#0d9aa8',
  navy: '#1B2A4A',
  navyDark: '#0f1e38',
  gold: '#B8960C',
  border: '#e8ecf0',
  subtleBg: '#f8fafb',
  muted: '#6b7b8d',
  text: '#2D2D2D',
  red: '#CC3333',
  green: '#0D8050',
} as const;

export const fonts = {
  heading: "'Outfit', system-ui, sans-serif",
  body: "'DM Sans', system-ui, sans-serif",
  serif: "'Newsreader', Georgia, serif",
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
