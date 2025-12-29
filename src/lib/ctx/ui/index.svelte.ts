import { BROWSER } from 'esm-env'

import { ApiMutation } from '$lib/api/index.js'
import { Query } from '$lib/api/executor.js'
import { createCtx } from '$lib/utils/index.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.js'

import { getSavedNightMode, saveNightMode } from './storage.js'

const mutateUpdateUserSettings = ApiMutation(
  (isNightMode: boolean) => `mutation {
    updateUserSettings(settings: { theme: "${isNightMode ? 'nightmode' : ''}" }) {
      theme
    }
  }`,
)

export const useUiCtx = createCtx('useUiCtx', ({ isLiteVersion = false } = {}) => {
  const { currentUser } = useCustomerCtx.get()

  const isNightMode =
    currentUser.$$?.settings.theme === 'nightmode' ||
    (BROWSER && (getSavedNightMode() ?? document.body.classList.contains('night-mode')))

  const ui = $state({ isNightMode, isLiteVersion, timeZone: 'UTC' })

  if (BROWSER) document.body.classList.toggle('night-mode', isNightMode || false)

  return {
    ui: {
      get $$() {
        return ui
      },

      toggleNightMode() {
        document.body.classList.toggle('theme-transition', true)

        const isNightMode = document.body.classList.toggle('night-mode')

        // NOTE: Awaiting sync DOM styles update
        void document.body.offsetWidth
        document.body.classList.toggle('theme-transition', false)

        if (currentUser.$$) {
          mutateUpdateUserSettings(Query)(isNightMode)
        }

        saveNightMode(isNightMode)
        ui.isNightMode = isNightMode
      },
    },
  }
})
