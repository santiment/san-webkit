import { BROWSER } from 'esm-env'
import * as amplitude from '@amplitude/analytics-browser'
import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
import { useUiCtx } from '$lib/ctx/ui/index.svelte.js'
import { SubscriptionPlan } from '$ui/app/SubscriptionPlan/plans.js'

export function useAmplitudeFlow() {
  if (!BROWSER) return

  const { customer, currentUser } = useCustomerCtx.get()
  const { ui } = useUiCtx.get()

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

  $effect(() => {
    setAmplitudeUserProperties({
      sanbase_version: ui.$$.isLiteVersion ? 'LITE' : 'CLASSIC',
    })
  })

  $effect(() => {
    setAmplitudeUserProperties({
      sanbase_plan: customer.$.sanbaseSubscription?.plan?.name || SubscriptionPlan.FREE.key,
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
