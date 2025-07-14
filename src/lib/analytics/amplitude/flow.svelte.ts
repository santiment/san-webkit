import type { ABSettings } from '$lib/ctx/abTest/cookies.js'

import { BROWSER } from 'esm-env'
import * as amplitude from '@amplitude/analytics-browser'

import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
import { useUiCtx } from '$lib/ctx/ui/index.svelte.js'
import { SubscriptionPlan } from '$ui/app/SubscriptionPlan/plans.js'
import { useABTestCtx } from '$lib/ctx/abTest/index.svelte.js'

export function useDebouncedFn<GFunction extends (...args: any[]) => void>(
  time: number,
  fn: GFunction,
) {
  let timer: NodeJS.Timeout

  const clear = () => clearTimeout(timer)
  $effect(() => clear)

  return ((...args) => {
    clear()
    timer = setTimeout(() => fn(...args), time)
  }) as GFunction
}

export function useAmplitudeFlow() {
  if (!BROWSER) return

  const { customer, currentUser } = useCustomerCtx.get()
  const { ui } = useUiCtx.get()
  const { abTests } = useABTestCtx.get()

  type UserData = {
    id?: string | number
    name?: string | null
    email?: string | null
    featureAccessLevel?: string
  }
  const updateUserData = useDebouncedFn(
    1000,
    ({ id: userId, name, email, featureAccessLevel }: UserData, abTests?: ABSettings) =>
      setAmplitudeUserProperties({
        user_id: userId,
        userId,
        name,
        email,
        feature_access_level: featureAccessLevel,
        abTests,
      }),
  )

  const updateUserSanbaseVersion = useDebouncedFn(1000, (isLiteVersion: boolean) =>
    setAmplitudeUserProperties({ sanbase_version: isLiteVersion ? 'LITE' : 'CLASSIC' }),
  )

  const updateUserSanbasePlan = useDebouncedFn(1000, (sanbase_plan?: string) =>
    setAmplitudeUserProperties({ sanbase_plan: sanbase_plan || SubscriptionPlan.FREE.key }),
  )

  $effect(() => {
    updateUserData(currentUser.$$ ?? {}, abTests.$)
  })

  $effect(() => {
    updateUserSanbaseVersion(ui.$$.isLiteVersion)
  })

  $effect(() => {
    updateUserSanbasePlan(customer.$.plan?.name)
  })
}

export function setAmplitudeUserProperties(props: Record<string, any>) {
  if (process.env.IS_LOGGING_ENABLED) return

  const identity = new amplitude.Identify()

  Object.keys(props).forEach((key) => {
    identity.set(key, props[key])
  })

  amplitude.identify(identity)

  return identity
}
