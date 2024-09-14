import { Mutation } from '$lib/api/index.js'
import { Query } from '$lib/api/executor.js'
import { createCtx } from '$lib/utils/index.js'
import { BROWSER } from 'esm-env'
import { useCustomerCtx } from '$lib/ctx/customer/index.js'

const mutateUpdateUserSettings = Mutation(
  (isNightMode: boolean) => `mutation {
    updateUserSettings(settings: { theme: "${isNightMode ? 'nightmode' : ''}" }) {
      theme
    }
  }`,
)

export const useUiCtx = createCtx('useUiCtx', () => {
  const { currentUser } = useCustomerCtx.get()

  const isNightMode =
    currentUser.$$?.settings.theme === 'nightmode' ||
    (BROWSER && document.body.classList.contains('night-mode'))

  const ui = $state({ isNightMode, isLiteVersion: false })

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

        ui.isNightMode = isNightMode
      },
    },
  }
})