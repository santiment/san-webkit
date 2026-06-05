import { getBrowserCssVariable } from '$ui/utils/index.js'

export function buildCalendlyInlineUrl(url: string) {
  const strip = (hex: string) => hex.trim().replace('#', '')
  const background = strip(getBrowserCssVariable('white'))
  const text = strip(getBrowserCssVariable('rhino'))

  const u = new URL(url)
  u.searchParams.set('hide_gdpr_banner', '1')
  u.searchParams.set('embed_type', 'Inline')
  u.searchParams.set('embed_domain', globalThis.location?.hostname ?? '1')
  u.searchParams.set('background_color', background)
  u.searchParams.set('text_color', text)
  return u.toString()
}
