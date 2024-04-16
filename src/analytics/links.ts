import { BROWSER } from 'esm-env'
import { trackLink } from './events/general'

export function startLinksListener() {
  if (!BROWSER) return

  const root = document.documentElement

  root.addEventListener('click', (e) => {
    // Adapted from https://github.com/visionmedia/page.js
    // MIT license https://github.com/visionmedia/page.js#license
    const { button, metaKey, ctrlKey, shiftKey, altKey, defaultPrevented } = e
    if (button) return
    if (metaKey || ctrlKey || shiftKey || altKey) return
    if (defaultPrevented) return

    const target = e.target as null | HTMLElement
    if (!target) return

    const anchor = target.closest('a')
    if (!anchor) return

    const href = anchor.getAttribute('href') || ''
    const isExternal = href.startsWith('http')
    const { type, source } = anchor.dataset

    if (isExternal) {
      e.preventDefault()
      window.open(href, '_blank')?.focus()
    }

    if (type && source) {
      trackLink({ url: href, external: isExternal, type, source })
    }
  })
}
