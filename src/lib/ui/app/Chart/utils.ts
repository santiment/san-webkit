import { toJpeg } from 'html-to-image'

import { getDateFormats, getTimeFormats } from '$lib/utils/dates/index.js'

export async function downloadChartAsJpeg(title: string, chartNode: HTMLElement) {
  if (!title || !chartNode) return

  const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--white')

  const dataUrl = await toJpeg(chartNode, {
    quality: 0.95,
    style: {
      backgroundColor,
    },
  })

  const date = new Date()
  const { DD, MMM, YYYY } = getDateFormats(date)
  const { HH, mm, ss } = getTimeFormats(date)

  const a = document.createElement('a')
  a.download = `${title} [${HH}.${mm}.${ss}, ${DD} ${MMM}, ${YYYY}].jpeg`
  a.href = dataUrl
  a.click()
}
