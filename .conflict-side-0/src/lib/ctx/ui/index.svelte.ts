import { BROWSER } from 'esm-env'

import { ApiMutation } from '$lib/api/index.js'
import { createCtx } from '$lib/utils/index.js'
import { Query } from '$lib/api/executor.js'

import { useCustomerCtx } from '../customer/index.svelte.js'

export const mutateUpdateUserSettings = ApiMutation(
  (isNightMode: boolean) => `mutation {
    updateUserSettings(settings: { theme: "${isNightMode ? 'nightmode' : ''}" }) {
      theme
    }
  }`,
)

export const useUiCtx = createCtx(
  'useUiCtx',
  ({ isLiteVersion = false, isNightMode = false, timeZone = 'UTC' } = {}) => {
    const ui = $state({ isNightMode, isLiteVersion, timeZone })

    if (BROWSER) {
      document.body.classList.toggle('night-mode', isNightMode || false)
    }

    return {
      ui: {
        get $$() {
          return ui
        },

        toggleNightMode(): boolean {
          document.body.classList.toggle('theme-transition', true)

          const isNightMode = document.body.classList.toggle('night-mode')

          // NOTE: Awaiting sync DOM styles update
          void document.body.offsetWidth
          document.body.classList.toggle('theme-transition', false)

          return (ui.isNightMode = isNightMode)
        },
      },
    }
  },
)

export function useCustomerNightModeToggleFlow() {
  const { ui } = useUiCtx.get()
  const { currentUser } = useCustomerCtx.get()

  return {
    toggleNightMode() {
      const isNightMode = ui.toggleNightMode()

      if (currentUser.$$) {
        mutateUpdateUserSettings(Query)(isNightMode)
      }
    },
  }
}
