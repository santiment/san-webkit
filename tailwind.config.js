import plugin from 'tailwindcss/plugin'
import tailwindAnimate from 'tailwindcss-animate'

import { createColors } from './plugins/tailwind'
import { BREAKPOINTS } from './src/lib/ctx/device/breakpoints.js'

export const classes =
  '.text-2xs.text-xs.text-sm.text-base.text-lg.text-xl.text-2xl.text-3xl.text-4xl.text-5xl'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,mdx}'],
  safelist: ['night-mode'],
  darkMode: ['selector', '.night-mode'],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'var(--porcelain)',
      },

      boxShadow: {
        dropdown: ['0 4px 16px 0 rgba(24, 27, 43, 0.13)', '0 6px 8px 0 rgba(24, 27, 43, 0.05)'],
        modal: ['0 2px 24px 3px rgba(24, 27, 43, 0.08)', '1px 3px 7px 2px rgba(47, 53, 77, 0.08)'],
      },

      dropShadow: {
        dropdown: ['0 4px 16px rgba(24, 27, 43, 0.13)', '0 6px 8px rgba(24, 27, 43, 0.05)'],
        modal: ['0 2px 24px rgba(24, 27, 43, 0.08)', '1px 3px 7px rgba(47, 53, 77, 0.08)'],
      },

      animation: {
        shake: 'shake 1s infinite',
      },
    },

    keyframes: {
      shake: {
        '0%': { transform: 'translate(0, -2%)' },
        '10%': { transform: 'translate(1%, -1%)' },
        '20%': { transform: 'translate(2%, 0)' },
        '30%': { transform: 'translate(-4%, 1%)' },
        '40%': { transform: 'translate(4%, -1%)' },
        '50%': { transform: 'translate(-4%, 0)' },
        '60%': { transform: 'translate(4%, 0)' },
        '70%': { transform: 'translate(-4%, 0)' },
        '80%': { transform: 'translate(2%, -2%)' },
        '90%': { transform: 'translate(-1%, -2%)' },
        '100%': { transform: 'translate(0, -3%)' },
      },
    },

    screens: {
      // Default styles are for desktop and large desktop if lg: styles are present
      lg: { max: BREAKPOINTS.lg }, // Regular Desktop
      md: { max: BREAKPOINTS.md }, // Tablet / small laptop
      sm: { max: BREAKPOINTS.sm }, // Phone

      // Do not use. Left only for compatibility
      xs: { max: BREAKPOINTS.xs }, // Phone XS
    },

    fontSize: {
      '2xs': ['10px', '14px'],
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '26px'],
      'lg-2': ['20px', '28px'],
      'lg-3': ['22px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['26px', '32px'],
      '3xl': ['32px', '40px'],
      '4xl': ['40px', '48px'],
      '5xl': ['48px', '56px'],
    },

    fontFamily: {
      sans: ['Proxima Nova', 'sans-serif'],
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  plugins: [
    tailwindAnimate,
    createColors(),

    plugin(function ({ addUtilities }) {
      addUtilities({
        '.row': {
          display: 'flex',
        },
        '.column': {
          display: 'flex',
          flexDirection: 'column',
        },
        '.center': {
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.text-mono': {
          fontFamily: 'Monospace',
        },

        '.single-line': {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },

        '.no-scrollbar': {
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },

        '.link-as-bg': {
          '&::before': {
            position: 'absolute',
            content: '""',
            display: 'block',
            inset: 0,
            zIndex: 0,
          },
        },
        '.link-pointer': {
          position: 'relative',
          display: 'inline-flex',
          color: 'var(--accent, var(--green))',
          fill: 'var(--accent, var(--green))',

          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '1px',
            bottom: '2px',
            left: 0,
            background: 'var(--accent, var(--green))',
            transform: 'scaleX(0)',
            transition: 'transform 0.3s',
            transformOrigin: 'bottom left',
          },

          '&:hover::after': {
            transform: 'scaleX(1)',
          },
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        // '.text-lg': {
        //   fontSize: '18px',
        //   lineHeight: '26px',
        // },
      })
    }),
  ],
}
