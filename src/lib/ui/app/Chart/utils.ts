import type { TSeries } from './ctx/series.svelte.js'

import { getDateFormats, getTimeFormats } from '$lib/utils/dates/index.js'

export function calculatePercentageChange(a: number, b: number) {
  const p = ((b - a) / a) * 100
  return `${p >= 0 ? '+' : ''}${p.toFixed(2)}%`
}

function convertHexToRgb(hex: string) {
  let c = hex.replace(/^#/, '')
  if (c.length === 3)
    c = c
      .split('')
      .map((ch) => ch + ch)
      .join('')
  const n = parseInt(c, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

function removeAiOverlayCanvas(container: HTMLElement): void {
  const canvases = Array.from(container.querySelectorAll<HTMLCanvasElement>('canvas'))
  if (canvases.length <= 1) return

  let topCanvas = canvases[0]
  let topZ = parseInt(getComputedStyle(topCanvas).zIndex || '0', 10)

  for (const c of canvases) {
    const z = parseInt(getComputedStyle(c).zIndex || '0', 10)

    if (z > topZ) {
      topZ = z
      topCanvas = c
    }
  }

  topCanvas.remove()
}

export async function downloadChartAsJpeg(
  title: string,
  container: HTMLElement,
  chart: any,
  metrics: TSeries[],
) {
  if (!title || !container || !chart) return

  removeAiOverlayCanvas(container)

  const canvases = container.querySelectorAll('canvas')

  if (!canvases.length) return

  const bounds = container.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1
  const cnv = document.createElement('canvas')

  cnv.width = bounds.width * dpr
  cnv.height = bounds.height * dpr

  const ctx = cnv.getContext('2d')!
  ctx.scale(dpr, dpr)

  const whiteHex = getComputedStyle(document.documentElement).getPropertyValue('--white').trim()
  const [r, g, b] = convertHexToRgb(whiteHex)
  const badgeBg = `rgba(${r},${g},${b},0.7)`
  const black = getComputedStyle(document.documentElement).getPropertyValue('--black').trim()

  ctx.fillStyle = whiteHex
  ctx.fillRect(0, 0, bounds.width, bounds.height)

  canvases.forEach((c) => {
    const rct = c.getBoundingClientRect()
    ctx.drawImage(c, rct.left - bounds.left, rct.top - bounds.top, rct.width, rct.height)
  })

  const byPane: Record<number, TSeries[]> = {}
  metrics.forEach((m) => {
    const i = m.pane?.$ ?? 0
    ;(byPane[i] ||= []).push(m)
  })

  const lh = 18,
    ph = 6,
    pv = 4,
    gap = 6,
    rad = 4

  ctx.font = '12px "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  ctx.textBaseline = 'middle'

  chart.panes().forEach((pApi: any, i: number) => {
    const list = byPane[i]
    if (!list?.length) return

    let el: HTMLElement

    try {
      el = pApi.getHTMLElement()
    } catch {
      return
    }

    const pr = el.getBoundingClientRect()
    const x = pr.left - bounds.left + ph
    let y = pr.top - bounds.top + pv + lh / 2

    list.forEach((m) => {
      const label = m.label ?? m.apiMetricName
      const first = m.data.$[0].value
      const last = m.data.$[m.data.$.length - 1].value
      const val = m.tooltipFormatter ? m.tooltipFormatter(last) : last
      const ch = calculatePercentageChange(first, last)

      const prefix = `${label}: `
      const disp = `${val} (${ch})`
      const w1 = ctx.measureText(prefix).width
      const w2 = ctx.measureText(disp).width
      const bw = w1 + gap + w2 + ph * 2
      const bh = lh + pv * 2

      ctx.globalAlpha = 0.7
      ctx.fillStyle = badgeBg
      ctx.beginPath()

      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(x - ph, y - lh / 2 - pv, bw, bh, rad)
      } else {
        ctx.moveTo(x, y)
      }
      ctx.fill()
      ctx.globalAlpha = 1

      ctx.fillStyle = black
      ctx.fillText(prefix, x, y)

      ctx.fillStyle = m.color?.$ || black
      ctx.fillText(disp, x + w1 + gap, y)

      y += bh + pv
    })
  })

  const url = cnv.toDataURL('image/jpeg', 0.95)
  const now = new Date()
  const { DD, MMM, YYYY } = getDateFormats(now)
  const { HH, mm, ss } = getTimeFormats(now)
  const a = document.createElement('a')

  a.download = `${title} [${HH}.${mm}.${ss}, ${DD} ${MMM}, ${YYYY}].jpeg`
  a.href = url
  a.click()
}
