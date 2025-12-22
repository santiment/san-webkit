import plugin from 'tailwindcss/plugin'
import tailwindAnimate from 'tailwindcss-animate'

import { createColors } from './plugins/tailwind'

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
        dropdown: '0 4px 8px 0 rgba(24, 27, 43, 0.08)',
      },

      dropShadow: {
        dropdown: '0 4px 8px rgba(24, 27, 43, 0.08)',
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
      lg: { max: '1279px' }, //Laptop
      md: { max: '992px' }, //Tablet
      sm: { max: '768px' }, //Phone
      xs: { max: '480px' }, //Phone XS
    },

    fontSize: {
      '2xs': ['10px', '14px'],
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '26px'],
      'lg-2': ['20px', '28px'],
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
    createColors({
      colors: {
        white: {
          day: '#ffffff',
          night: '#181B2B',
        },

        whale: { day: '#FCFDFE', night: '#1A1D2F' },

        athens: { day: '#F3F4FA', night: '#1E2234' },
        porcelain: { day: '#ECEEF5', night: '#262A3E' },
        mystic: { day: '#D2D6E7', night: '#343A52' },
        casper: { day: '#9FAAC4', night: '#4E5472' },
        waterloo: { day: '#7A859E', night: '#7A809A' },
        fiord: { day: '#505573', night: '#A2A7BD' },
        rhino: { day: '#2F354D', night: '#DFE1EC' },

        mirage: { day: '#181b2b', night: '#F8F9FF' },
        black: { day: '#181b2b', night: '#F8F9FF' },

        shark: '#15181F',

        green: '#14C393',
        'green-hover': '#24AC85',
        'green-light-1': { day: '#EDF8F5', night: '#182833' },
        'green-light-2': { day: '#DCF6EF', night: '#173D40' },
        'green-light-3': { day: '#B0EBDB', night: '#165E55' },
        'green-light-4': { day: '#6CC5AE', night: '#31826D' },

        lima: '#26C953',
        'lima-hover': '#1bad44',
        'lima-light-1': { day: '#D6F6D6', night: '#1B3E33' },
        'lima-light-2': { day: '#B4EFB4', night: '#215536' },

        red: '#FF6363',
        'red-hover': '#F85454',
        'red-light-1': { day: '#FFEEEE', night: '#2E2130' },
        'red-light-2': { day: '#ffcece', night: '#4f2b36' },
        'red-light-3': { day: '#ffadad', night: '#74353e' },

        yellow: '#FFCB47',
        'yellow-hover': '#FBB80D',
        'yellow-light-1': { day: '#fff5da', night: '#2c2929' },

        orange: '#FFAD4D',
        'orange-hover': '#FD9317',
        'orange-light-1': { day: '#FEF3E4', night: '#382F2E' },
        'orange-light-2': { day: '#ffe7ca', night: '#503f3d' },
        'orange-light-3': { day: '#ffd6a6', night: '#8A6A56' },
        'orange-pale': { day: '#fff9f0', night: '#26242d' },

        blue: '#5275FF',
        'blue-hover': '#375BE9',
        'blue-light-1': { day: '#ecf0fe', night: '#1d223e' },
        'blue-light-2': { day: '#dae0fd', night: '#273160' },
        'blue-light-3': { day: '#a9baff', night: '#354895' },

        cyan: '#68dbf4',
        'cyan-hover': { day: '#18c0e4', night: '#5bcde5' },
        'cyan-light-1': { day: '#d7f6fc', night: '#253a4b' },

        purple: '#8358FF',
        'purple-hover': '#6339DD',
        'purple-light-1': { day: '#f5f4ff', night: '#1d1e35' },
        'purple-light-2': { day: '#e7e4ff', night: '#28244b' },
        'purple-light-3': { day: '#d4c5ff', night: '#3e3075' },
        'purple-light-4': { day: '#c1abff', night: '#4e3995' },
      },
    }),

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
