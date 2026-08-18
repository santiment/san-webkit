import { replaceState } from '$app/navigation'
import { page } from '$app/state'

import { Query } from '$lib/api/executor.js'

import { mutateCreateShortUrl } from './short.js'

type TUseFromPathOptions = {
  setShortToSearchParam?: boolean
}

export const getUrlPath = (url: URL) => url.pathname + url.search + url.hash

export function useFromPath(path: string, options: TUseFromPathOptions = {}) {
  let normalizedFrom = $state(path)

  $effect(() => {
    if (path.length < 250) return

    let aborted = false
    mutateCreateShortUrl(Query)(path).then((shortUrl) => {
      if (aborted) return

      const shortRoute = `/s/${shortUrl}`

      if (options.setShortToSearchParam) {
        const url = new URL(location.href)

        url.searchParams.set('from', shortRoute)
        replaceState(url, page.state)
      }

      normalizedFrom = shortRoute
    })

    return () => {
      aborted = true
    }
  })

  return {
    get $() {
      return normalizedFrom
    },
  }
}
