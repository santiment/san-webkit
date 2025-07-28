import type { IChartApi } from '@santiment-network/chart-next'
import type { TSeries } from './ctx/series.svelte.js'

import { getDateFormats, getTimeFormats } from '$lib/utils/dates/index.js'
import { applyHexColorOpacity, getBrowserCssVariable } from '$ui/utils/index.js'
import { calculatePercentageChange } from '$lib/utils/formatters/index.js'

const LEGEND_CONFIG = {
  font: '12px "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  lineHeight: 18,
  paddingHorizontal: 6,
  paddingVertical: 4,
  gap: 6,
  borderRadius: 4,
}

function createCompositeScreenshot(container: HTMLElement): HTMLCanvasElement | null {
  const sourceCanvases = container.querySelectorAll('canvas')
  if (!sourceCanvases.length) return null

  const containerBounds = container.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1

  const finalCanvas = document.createElement('canvas')

  finalCanvas.width = containerBounds.width * dpr
  finalCanvas.height = containerBounds.height * dpr

  const ctx = finalCanvas.getContext('2d')
  if (!ctx) return null

  ctx.scale(dpr, dpr)
  ctx.fillStyle = getBrowserCssVariable('white')
  ctx.fillRect(0, 0, containerBounds.width, containerBounds.height)

  sourceCanvases.forEach((canvasEl) => {
    const { left, top, width, height } = canvasEl.getBoundingClientRect()
    ctx.drawImage(canvasEl, left - containerBounds.left, top - containerBounds.top, width, height)
  })

  return finalCanvas
}

function drawMetricsOnCanvas(ctx: CanvasRenderingContext2D, chart: IChartApi, metrics: TSeries[]) {
  const metricsGroupedByPane: Record<number, TSeries[]> = {}

  metrics.forEach((metric) => {
    const paneIndex = metric.pane && metric.pane.$ != null ? metric.pane.$ : 0

    if (!metricsGroupedByPane[paneIndex]) {
      metricsGroupedByPane[paneIndex] = []
    }

    metricsGroupedByPane[paneIndex].push(metric)
  })

  ctx.font = LEGEND_CONFIG.font
  ctx.textBaseline = 'middle'

  const chartBounds = chart.chartElement().getBoundingClientRect()

  chart.panes().forEach((pane, index) => {
    const paneMetrics = metricsGroupedByPane[index]
    if (!paneMetrics?.length) return

    let paneElement: HTMLElement | null

    try {
      paneElement = pane.getHTMLElement()
    } catch {
      return
    }

    if (!paneElement) return

    const paneBounds = paneElement.getBoundingClientRect()
    const paneStartX = paneBounds.left - chartBounds.left + LEGEND_CONFIG.paddingHorizontal
    let currentY = paneBounds.top - chartBounds.top + LEGEND_CONFIG.paddingVertical

    paneMetrics.forEach((metric) => {
      const legendData = prepareLegendDataForMetric(metric)
      const badgeHeight = drawLegendBadge(ctx, legendData, { x: paneStartX, y: currentY })
      currentY += badgeHeight + LEGEND_CONFIG.paddingVertical
    })
  })
}

function prepareLegendDataForMetric(metric: TSeries) {
  const label = metric.label ?? metric.apiMetricName
  const lastDataPoint = metric.data.$[metric.data.$.length - 1]
  const firstDataPoint = metric.data.$.find((item) => item.value !== undefined)

  const lastValue = lastDataPoint?.value
  const firstValue = firstDataPoint?.value
  const formattedValue = metric.tooltipFormatter ? metric.tooltipFormatter(lastValue) : lastValue

  const percentChangeText =
    firstValue !== undefined && lastValue !== undefined
      ? ` (${calculatePercentageChange(firstValue, lastValue)})`
      : ''

  return {
    labelText: `${label}: `,
    valueText: `${formattedValue}${percentChangeText}`,
    color: metric.color?.$ || getBrowserCssVariable('black'),
  }
}

function drawLegendBadge(
  ctx: CanvasRenderingContext2D,
  legendData: ReturnType<typeof prepareLegendDataForMetric>,
  position: { x: number; y: number },
) {
  const { labelText, valueText, color } = legendData
  const { paddingHorizontal, paddingVertical, lineHeight, gap, borderRadius } = LEGEND_CONFIG

  const badgeBg = applyHexColorOpacity(getBrowserCssVariable('white'), 'b0')

  const labelWidth = ctx.measureText(labelText).width
  const valueWidth = ctx.measureText(valueText).width

  const badgeWidth = labelWidth + gap + valueWidth + paddingHorizontal * 2
  const badgeHeight = lineHeight + paddingVertical * 2
  const badgeTopY = position.y

  const textBaselineY = badgeTopY + paddingVertical + lineHeight / 2

  ctx.globalAlpha = 0.7
  ctx.fillStyle = badgeBg
  ctx.beginPath()
  ctx.roundRect(position.x, badgeTopY, badgeWidth, badgeHeight, borderRadius)
  ctx.fill()
  ctx.globalAlpha = 1

  const textStartX = position.x + paddingHorizontal

  ctx.fillStyle = getBrowserCssVariable('black')
  ctx.fillText(labelText, textStartX, textBaselineY)

  ctx.fillStyle = color
  ctx.fillText(valueText, textStartX + labelWidth + gap, textBaselineY)

  return badgeHeight
}

export async function downloadChartAsJpeg(title: string, metrics: TSeries[], chart?: IChartApi) {
  const chartContainer = chart?.chartElement()
  if (!title || !chartContainer || !chart) return

  const finalCanvas = createCompositeScreenshot(chartContainer)
  if (!finalCanvas) return

  const ctx = finalCanvas.getContext('2d')
  if (!ctx) return

  drawMetricsOnCanvas(ctx, chart, metrics)

  const url = finalCanvas.toDataURL('image/jpeg', 0.9)
  const now = new Date()
  const { DD, MMM, YYYY } = getDateFormats(now)
  const { HH, mm, ss } = getTimeFormats(now)

  const a = document.createElement('a')
  a.href = url
  a.download = `${title} [${HH}.${mm}.${ss}, ${DD} ${MMM}, ${YYYY}].jpeg`
  a.click()
}
