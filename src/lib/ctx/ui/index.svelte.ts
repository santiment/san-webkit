import { BROWSER } from 'esm-env'

import { ApiMutation } from '$lib/api/index.js'
import { Query } from '$lib/api/executor.js'
import { createCtx } from '$lib/utils/index.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.js'
import { getSavedBoolean, saveBoolean } from '$lib/utils/localStorage/index.js'

const mutateUpdateUserSettings = ApiMutation(
  (isNightMode: boolean) => `mutation {
    updateUserSettings(settings: { theme: "${isNightMode ? 'nightmode' : ''}" }) {
      theme
    }
  }`,
)

const HALLOWEEN_NIGHT_MODE = 'HALLOWEEN_NIGHT_MODE_2025'

export const useUiCtx = createCtx('useUiCtx', ({ isLiteVersion = false } = {}) => {
  const { currentUser } = useCustomerCtx.get()

  const savedHalloweenNightMode = getSavedBoolean(HALLOWEEN_NIGHT_MODE) ?? true

  const isNightMode =
    savedHalloweenNightMode ??
    (currentUser.$$?.settings.theme === 'nightmode' ||
      (BROWSER && document.body.classList.contains('night-mode')))

  const ui = $state({ isNightMode, isLiteVersion, timeZone: 'UTC' })

  if (BROWSER) document.body.classList.toggle('night-mode', isNightMode || false)

  return {
    ui: {
      get $$() {
        return ui
      },

      toggleNightMode() {
        const isNightMode = document.body.classList.toggle('night-mode')

        if (currentUser.$$) {
          mutateUpdateUserSettings(Query)(isNightMode)
        }

        saveBoolean(HALLOWEEN_NIGHT_MODE, isNightMode)

        ui.isNightMode = isNightMode
      },
    },
  }
})
