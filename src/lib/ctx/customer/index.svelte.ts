import { BROWSER } from 'esm-env'

import { createCtx } from '$lib/utils/index.js'

import { DEFAULT, loadCustomerData, type TCustomer } from './api.js'
import { dispatchSentryUserEvent } from './events.js'

export const useCustomerCtx = createCtx('useCustomerCtx', (initialValue?: TCustomer) => {
  const defaultValue = Object.assign({}, DEFAULT, initialValue)
  let state = $state.raw(defaultValue)

  let currentUser = $state<TCustomer['currentUser']>(defaultValue.currentUser)

  if (BROWSER) reload()

  function reload() {
    return loadCustomerData(fetch, (data) => {
      const customer = Object.assign({}, state, data)

      state = customer
      currentUser = state.currentUser

      if (currentUser) {
        dispatchSentryUserEvent(currentUser)
      }
    })
  }

  return {
    customer: {
      get $() {
        return state
      },

      reload,
    },

    currentUser: {
      get $$() {
        return currentUser
      },
    },
  }
})
