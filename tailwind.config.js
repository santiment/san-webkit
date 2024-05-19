import plugin from 'tailwindcss/plugin'
import { createColors } from './plugins/tailwind'

export const classes =
  '.text-2xs.text-xs.text-sm.text-base.text-lg.text-xl.text-2xl.text-3xl.text-4xl.text-5xl'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,mdx}'],
  safelist: ['night-mode'],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'var(--porcelain)',
      },
    },

    fontSize: {
      '2xs': ['10px', '14px'],
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '26px'],
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
    createColors({
      colors: {
        white: {
          day: '#ffffff',
          night: '#181B2B',
        },

        whale: { day: '#FCFDFE', night: '#1A1D2F' },

        athens: { day: '#F3F4FA', night: '#1E2234' },
        porcelain: { day: '#e7eaf3', night: '#202436' },
        mystic: { day: '#D2D6E7', night: '#222639' },
        casper: { day: '#9FAAC4', night: '#4E5472' },
        waterloo: { day: '#7A859E', night: '#7A809A' },
        fiord: { day: '#505573', night: '#A2A7BD' },
        rhino: { day: '#2F354D', night: '#DFE1EC' },

        mirage: { day: '#181b2b', night: '#F8F9FF' },
        black: { day: '#181b2b', night: '#F8F9FF' },

        green: '#14C393',
        'green-hover': '#24AC85',
        'green-light-1': { day: '#EDF8F5', night: '#182833' },
        'green-light-2': { day: '#DCF6EF', night: '#173D40' },
        'green-light-3': { day: '#B0EBDB', night: '#165E55' },

        red: '#FF6363',
        'red-hover': '#F85454',
        'red-light-1': { day: '#FFEEEE', night: '#2E2130' },

        orange: '#FFAD4D',
        'orange-hover': '#FD9317',
        'orange-light-1': { day: '#FEF3E4', night: '#382F2E' },

        yellow: '#FFCB47',
        'yellow-hover': '#FBB80D',

        blue: '#5275FF',
        'blue-hover': '#375BE9',

        purple: '#8358FF',
        'purple-hover': '#6339DD',

        lima: '#26C953',
        'lima-light-1': { day: '#D6F6D6', night: '#1B3E33' },
      },
    }),

    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        '.center': {
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.column': {
          display: 'flex',
          flexDirection: 'column',
        },
        '.text-mono': {
          fontFamily: 'Monospace',
        },
        // '.text-lg': {
        //   fontSize: '18px',
        //   lineHeight: '26px',
        // },
      })
    }),
  ],
}
