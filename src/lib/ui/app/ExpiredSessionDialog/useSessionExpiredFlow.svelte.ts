import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
import { deleteSavedValue, getSavedBoolean, saveBoolean } from '$lib/utils/localStorage.js'

import { showExpiredSessionDialog$ } from './ExpiredSessionDialog.svelte'

const LS_WAS_USER_LOGGED_IN = '__LS_WUL'
const LS_SESSION_POPUP_SHOWN = '__LS_SESSION_POPUP_SHOWN'

export function useSessionExpiredFlow() {
  const { currentUser } = useCustomerCtx()
  const wasUserPossiblyLogin = getSavedBoolean(LS_WAS_USER_LOGGED_IN)
  const wasPopupAlreadyShown = getSavedBoolean(LS_SESSION_POPUP_SHOWN)
  const showExpiredSessionDialog = showExpiredSessionDialog$()

  $effect(() => {
    if (currentUser && !wasUserPossiblyLogin) {
      saveBoolean(LS_WAS_USER_LOGGED_IN, true)
      saveBoolean(LS_SESSION_POPUP_SHOWN, false)
    } else if (!currentUser && wasUserPossiblyLogin && !wasPopupAlreadyShown) {
      showExpiredSessionDialog()
      saveBoolean(LS_SESSION_POPUP_SHOWN, true)
    }

    return () => {
      if (!currentUser) {
        deleteSavedValue(LS_WAS_USER_LOGGED_IN)
      }
    }
  })
}
