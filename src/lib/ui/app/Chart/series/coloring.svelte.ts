import type { TSeries } from '../ctx/series.svelte.js'

import { MetricStyle } from '$lib/ctx/metrics-registry/types/index.js'
import { applyHexColorOpacity } from '$ui/utils/index.js'

export function applyHistogramBaselineColorData(series: TSeries): boolean {
  const { data, ui } = series

  if (ui.$$.style !== MetricStyle.HISTOGRAM) {
    return false
  }

  const baseline = $state.snapshot(ui.$$.baseline)
  if (!baseline) {
    return false
  }

  const { value, topColor, bottomColor } = baseline

  series.chartSeriesApi?.setData(
    data.$.map((item) => {
      const color = item.value > value ? topColor : bottomColor
      return { ...item, color }
    }),
  )

  return true
}

export function getAreaSeriesColors(series: TSeries) {
  const { color, isFilledGradient = false } = series.ui.$$
  const baseline = $state.snapshot(series.ui.$$.baseline)

  const opacity = isFilledGradient ? '50' : '1c'

  if (!baseline) {
    return {
      lineColor: color,
      topColor: applyHexColorOpacity(color, opacity),
      bottomColor: applyHexColorOpacity(color, isFilledGradient ? '00' : opacity),
    }
  }

  const topLineColor = baseline.topColor
  const bottomLineColor = baseline.bottomColor
  const gradientOpacity = isFilledGradient ? '09' : opacity

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
