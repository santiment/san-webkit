import { newHeadScript } from '$lib/analytics/utils.js'

const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js'
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css'

let widgetPromise: Promise<void> | null = null

function ensureWidget(): Promise<void> {
  if (widgetPromise) return widgetPromise

  widgetPromise = new Promise((resolve) => {
    // @ts-expect-error
    if (window.Calendly) {
      resolve()
      return
    }

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = WIDGET_CSS
    document.head.appendChild(link)

    newHeadScript(undefined, { src: WIDGET_JS, async: true }, () => resolve())
  })

  return widgetPromise
}

export async function openCalendly(url: string) {
  await ensureWidget()

  const u = new URL(url)
  u.searchParams.set('hide_gdpr_banner', '1')
  u.searchParams.set('hide_landing_page_details', '1')
  u.searchParams.set('hide_event_type_details', '1')
  u.searchParams.set('embed_type', 'Inline')
  u.searchParams.set('embed_domain', globalThis.location?.hostname ?? '1')

  // @ts-expect-error
  window.Calendly?.initPopupWidget({
    url: u.toString(),
    pageSettings: {
      hideGdprBanner: true,
      hideLandingPageDetails: true,
      hideEventTypeDetails: true,
    },
  })
}
