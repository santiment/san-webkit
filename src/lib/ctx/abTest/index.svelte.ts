import { createCtx } from '$lib/utils/index.js'

import { setABCookies, type ABSettings } from './cookies.js'

export const useABTestCtx = createCtx('webkit_useABTestCtx', (initialValue?: ABSettings) => {
  const settings = $state.raw(initialValue)

  return {
    abTests: {
      get $() {
        return settings
      },

      setCookies() {
        if (!settings) return

        setABCookies(settings)
      },
    },
  }
})
