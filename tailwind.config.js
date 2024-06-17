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

        lima: '#26C953',
        'lima-hover': '#1bad44',
        'lima-light-1': { day: '#D6F6D6', night: '#1B3E33' },

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
