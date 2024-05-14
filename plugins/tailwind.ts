import plugin from 'tailwindcss/plugin'

export function hexToRgb(hex: string) {
  return (hex.slice(1).match(/\w{2}/g) || []).map((value) => parseInt(`0x${value}`))
}

export const createColors = plugin.withOptions(
  ({ colors }) => {
    const dayVariables = {}
    const nightVariables = {}

    for (const key in colors) {
      const color = colors[key]
      const { day, night } = typeof color === 'object' ? color : { day: color, night: undefined }

      dayVariables[`--c-${key}`] = hexToRgb(day).join(' ')
      dayVariables[`--${key}`] = day

      if (night) {
        nightVariables[`--c-${key}`] = hexToRgb(night).join(' ')
        nightVariables[`--${key}`] = night
      }
    }

    return function ({ addBase, addUtilities }) {
      addBase({ ':root': dayVariables })

      addUtilities({ '.night-mode': nightVariables })
    }
  },
  ({ colors }: { colors: Record<string, string | { day: string; night: string }> }) => {
    const resultColors = {}

    for (const key in colors) {
      const color = colors[key]

      const DEFAULT = `rgb(var(--c-${key}) / <alpha-value>)`

      if (typeof color === 'object') {
        const { day, night } = color
        resultColors[key] = { DEFAULT, day, night }
      } else {
        resultColors[key] = { DEFAULT, day: color }
      }
    }

    return { theme: { extend: { colors: resultColors } } }
  },
)
