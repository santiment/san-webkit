import { createCtx } from '$lib/utils/index.js'
import { ss } from 'svelte-runes'
import { DEFAULT, loadCustomerData } from './api.js'
import { BROWSER } from 'esm-env'

export const useCustomerCtx = createCtx('useCustomerCtx', () => {
  const defaultValue = Object.assign({}, DEFAULT)
  const customer = ss(defaultValue)

  if (BROWSER) reload()

  function reload() {
    loadCustomerData(fetch, (data) => {
      Object.assign(customer.$, data)
      customer.$ = customer.$
    })
  }

  return {
    customer: {
      get $() {
        return customer.$
      },

      reload,
    },
  }
})
