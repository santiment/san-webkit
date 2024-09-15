import * as amplitude from '@amplitude/analytics-browser'
import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
import { BROWSER } from 'esm-env'

export function useAmplitudeFlow() {
  if (!BROWSER) return

  const { currentUser } = useCustomerCtx.get()

  $effect(() => {
    const userId = currentUser.$$?.id
    const name = currentUser.$$?.username
    const email = currentUser.$$?.email

    setAmplitudeUserProperties({
      user_id: userId,
      userId,
      name,
      email,
    })
  })
}

function setAmplitudeUserProperties(props: Record<string, any>) {
  if (process.env.IS_LOGGING_ENABLED) return

  const identity = new amplitude.Identify()

  Object.keys(props).forEach((key) => {
    identity.set(key, props[key])
  })

  amplitude.identify(identity)

  return identity
}
