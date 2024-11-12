import type { IChartApi } from '@santiment-network/chart'

import { getBrowserCssVariable } from '$ui/utils/index.js'

export function getTheme(watermarkOpacity = 'FA') {
  const waterloo = getBrowserCssVariable('waterloo')
  const fiord = getBrowserCssVariable('fiord')
  const porcelain = getBrowserCssVariable('porcelain')

  // const night_mystic = '#232639'

  return {
    grid: {
      vertLines: { color: porcelain },
      horzLines: { color: porcelain },
    },
    timeScale: {
      borderColor: waterloo,
    },
    layout: {
      textColor: fiord,
    },
    watermark: porcelain + watermarkOpacity,

    crosshair: {
      // horzLine: {
      //   labelBackgroundColor: night_mystic,
      // },
      // vertLine: {
      //   labelBackgroundColor: night_mystic,
      // },
    },
  } satisfies Parameters<IChartApi['applyOptions']>[0] & { watermark: string }
}
