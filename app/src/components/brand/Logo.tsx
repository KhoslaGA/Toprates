import { BoAvatar, type BoAccessory } from './Bo';

const LOGO_PALETTE = {
  teal: '#0A7E8C',
  tealDk: '#086874',
  tealLt: '#0d9aa8',
  navy: '#1B2A4A',
  gold: '#B8960C',
  ink: '#0d1628',
  paper: '#ffffff',
  cream: '#f6efe0',
} as const;

export type LogoVariant = 'color' | 'mono-dark' | 'mono-light';
export type MonogramVariant = 'teal' | 'navy' | 'paper' | 'mono-dark' | 'mono-light';

interface MonogramProps {
  size?: number;
  variant?: MonogramVariant;
  radius?: number;
}

export function Monogram({ size = 96, variant = 'teal', radius = 22 }: MonogramProps) {
  const bg =
    variant === 'teal' ? LOGO_PALETTE.teal
    : variant === 'navy' ? LOGO_PALETTE.navy
    : variant === 'paper' ? LOGO_PALETTE.paper
    : variant === 'mono-dark' ? LOGO_PALETTE.ink
    : LOGO_PALETTE.paper;

  const fg =
    variant === 'teal' ? LOGO_PALETTE.paper
    : variant === 'navy' ? LOGO_PALETTE.paper
    : variant === 'paper' ? LOGO_PALETTE.teal
    : variant === 'mono-dark' ? LOGO_PALETTE.paper
    : LOGO_PALETTE.ink;

  const accent =
    variant === 'teal' ? LOGO_PALETTE.gold
    : variant === 'navy' ? LOGO_PALETTE.gold
    : variant === 'paper' ? LOGO_PALETTE.gold
    : fg;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="TopRates mark">
      <rect x="0" y="0" width="100" height="100" rx={radius} fill={bg} />
      <rect x="20" y="26" width="60" height="14" rx="3.5" fill={fg} />
      <rect x="43" y="26" width="14" height="52" rx="3.5" fill={fg} />
      <path d="M60 58 L68 66 L82 50" stroke={accent} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

interface WordmarkProps {
  height?: number;
  variant?: LogoVariant;
}

export function Wordmark({ height = 56, variant = 'color' }: WordmarkProps) {
  const ratio = 5.2;
  const width = Math.round(height * ratio);

  const topColor = variant === 'mono-dark' ? LOGO_PALETTE.ink
                 : variant === 'mono-light' ? LOGO_PALETTE.paper
                 : LOGO_PALETTE.teal;
  const caColor  = variant === 'mono-dark' ? LOGO_PALETTE.ink
                 : variant === 'mono-light' ? LOGO_PALETTE.paper
                 : LOGO_PALETTE.navy;
  const dotColor = variant === 'mono-dark' ? LOGO_PALETTE.ink
                 : variant === 'mono-light' ? LOGO_PALETTE.paper
                 : LOGO_PALETTE.gold;

  return (
    <svg width={width} height={height} viewBox="0 0 520 100" role="img" aria-label="TopRates.ca">
      <text x="0" y="76" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="88" letterSpacing="-3">
        <tspan fill={topColor}>TopRates</tspan>
        <tspan fill={dotColor}>.</tspan>
        <tspan fill={caColor}>ca</tspan>
      </text>
    </svg>
  );
}

interface LockupProps {
  height?: number;
  variant?: LogoVariant;
  outline?: boolean;
  accessory?: BoAccessory;
}

export function HorizontalLockup({
  height = 80,
  variant = 'color',
  outline = true,
  accessory = 'hardhat',
}: LockupProps) {
  const avatarSize = height;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.18 }}>
      <BoAvatar size={avatarSize} outline={outline} blush={true} accessory={accessory} />
      <Wordmark height={height * 0.55} variant={variant} />
    </div>
  );
}

export function StackedLockup({
  height = 160,
  variant = 'color',
  outline = true,
  accessory = 'hardhat',
}: LockupProps) {
  const avatarSize = height * 0.65;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: height * 0.08 }}>
      <BoAvatar size={avatarSize} outline={outline} blush={true} accessory={accessory} />
      <Wordmark height={height * 0.22} variant={variant} />
    </div>
  );
}
