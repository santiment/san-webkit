import type { TSeries } from '../ctx/series.svelte.js'

import { MetricStyle } from '$lib/ctx/metrics-registry/types/index.js'
import { applyHexColorOpacity } from '$ui/utils/index.js'

export function applyHistogramBaselineColorData(series: TSeries): boolean {
  const { data, ui } = series

  if (ui.$$.style !== MetricStyle.HISTOGRAM) {
    return false
  }

  const { color, baseline } = ui.$$
  if (!baseline || color === baseline.bottomColor) {
    return false
  }

  const { value, bottomColor } = baseline

  series.chartSeriesApi?.setData(
    data.$.map((item) => {
      const valueColor = item.value ? (item.value > value ? color : bottomColor) : 'transparent'
      return { ...item, color: valueColor }
    }),
  )

  return true
}

export function getAreaSeriesColors(series: TSeries) {
  const {
    color,
    isFilledGradient = false,
    baseline = { value: 0, bottomColor: color },
  } = series.ui.$$

  const opacity = isFilledGradient ? '50' : '1c'
  const gradientOpacity = isFilledGradient ? '09' : opacity

  const topLineColor = color
  const bottomLineColor = baseline.bottomColor

  return {
    baseValue: { type: 'price', price: baseline.value },
    topLineColor,
    bottomLineColor,
    topFillColor1: applyHexColorOpacity(topLineColor, opacity),
    topFillColor2: applyHexColorOpacity(topLineColor, gradientOpacity),
    bottomFillColor2: applyHexColorOpacity(bottomLineColor, opacity),
    bottomFillColor1: applyHexColorOpacity(bottomLineColor, gradientOpacity),
  }
}

export function getCandlesSeriesColors(series: TSeries) {
  const { color, candleDownColor } = series.ui.$$

  const downColor = candleDownColor || color

  return {
    downColor,
    wickDownColor: downColor,
    upColor: color,
    wickUpColor: color,
    //borderVisible: !isOtherHighlighted,
  }
}
