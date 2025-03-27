import { onMount } from 'svelte'
import { page } from '$app/state'

import { trackEvent } from './index.js'

export function usePageViewEventTracking() {
  onMount(() => {
    let sourcePathname = ''
    let sourceSearchParams = ''

    $effect(() => {
      const pathname = page.url.pathname

      const data = {
        url: window.location.origin + pathname,
        url_type: window.getPageType?.(pathname),
        url_host: window.location.host,
        url_pathname: pathname,
        search_params: window.location.search,

        source_url: window.location.origin + sourcePathname,
        source_url_type: window.getPageType?.(sourcePathname),
        source_url_host: window.location.host,
        source_url_pathname: sourcePathname,
        source_search_params: sourceSearchParams,
      }

      if (sourcePathname !== pathname) {
        trackEvent('page_view', data)
      }

      sourcePathname = pathname
      sourceSearchParams = data.search_params
    })
  })
}
