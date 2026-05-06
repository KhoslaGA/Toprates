import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens — match src/styles/tokens.ts. Used by LifeLeadForm,
        // Eyebrow, DisclaimerBlock, and any other component that prefers
        // Tailwind utility classes over inline styles.
        teal: '#0A7E8C',
        'teal-hover': '#0d9aa8',
        'teal-dark': '#086874',
        navy: '#1B2A4A',
        'navy-dark': '#0f1e38',
        gold: '#B8960C',
        cream: '#f6efe0',
        paper: '#fbf8f0',
        mute: 'rgba(27, 42, 74, 0.6)',
        border: 'rgba(27, 42, 74, 0.1)',
        'border-soft': 'rgba(27, 42, 74, 0.06)',

        primary: {
          50: '#f0f4f8',
          100: '#d9e2f0',
          200: '#b3c5e1',
          300: '#8ca8d2',
          400: '#5a7fbd',
          500: '#3d5a9f',
          600: '#1a365d',
          700: '#152d4a',
          800: '#0f2340',
          900: '#0a1829',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Brand families — display = Outfit (heading); mono = JetBrains Mono
        // (eyebrows + caption work). Font CSS variables wired in layout.tsx.
        display: ['"Inter Tight"', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.10)',
        'lg': '0 10px 25px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
