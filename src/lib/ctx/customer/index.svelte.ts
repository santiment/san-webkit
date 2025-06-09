import { BROWSER } from 'esm-env'
import { setUser } from '@sentry/sveltekit'

import { createCtx } from '$lib/utils/index.js'

import { DEFAULT, loadCustomerData, type TCustomer } from './api.js'

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
        const { id, username } = currentUser
        try {
          setUser({ id, username: username || '' })
        } catch (e) {
          console.error(e)
        }
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
