import type { RequestEvent } from '@sveltejs/kit'
import type { TCurrentUser } from '../customer/api.js'

import { BROWSER } from 'esm-env'

import { ApiMutation } from '$lib/api/index.js'
import { Query } from '$lib/api/executor.js'
import { createCtx } from '$lib/utils/index.js'
import { useCustomerCtx } from '$lib/ctx/customer/index.js'

import { getNightModeFromCookies, saveNightModeCookie } from './cookies.js'

const mutateUpdateUserSettings = ApiMutation(
  (isNightMode: boolean) => `mutation {
    updateUserSettings(settings: { theme: "${isNightMode ? 'nightmode' : ''}" }) {
      theme
    }
  }`,
)

export function getNightModePreference({
  currentUser,
  event,
}: {
  currentUser?: TCurrentUser | null
  event?: RequestEvent
}) {
  return currentUser?.settings.theme === 'nightmode' || getNightModeFromCookies(event)
}

export const useUiCtx = createCtx(
  'useUiCtx',
  (props: { isLiteVersion?: boolean; isNightMode?: boolean } = {}) => {
    const { currentUser } = useCustomerCtx.get()

    const ui = $state({
      isNightMode: props.isNightMode,
      isLiteVersion: props.isLiteVersion,
      timeZone: 'UTC',
    })

    if (BROWSER) {
      toggleThemeClass(ui.isNightMode)
    }

    function toggleThemeClass(value?: boolean) {
      document.body.classList.toggle('night-mode', value)
    }

    return {
      ui: {
        get $$() {
          return ui
        },

        toggleNightMode() {
          document.body.classList.toggle('theme-transition', true)

          ui.isNightMode = !ui.isNightMode

          toggleThemeClass(ui.isNightMode)

          // NOTE: Awaiting sync DOM styles update
          void document.body.offsetWidth
          document.body.classList.toggle('theme-transition', false)

          if (currentUser.$$) {
            mutateUpdateUserSettings(Query)(ui.isNightMode)
          }

          saveNightModeCookie(ui.isNightMode)
        },
      },
    }
  },
)
