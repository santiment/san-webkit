import { trackEvent } from '$lib/analytics/index.js'

export function onSupportClick(e?: Event) {
  if (window.Intercom) e?.preventDefault()

  window.Intercom?.('show')

  trackEvent('action', {
    type: 'show_intercom',
  })
}
