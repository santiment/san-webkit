import { BROWSER } from 'esm-env'
import * as amplitude from '@amplitude/analytics-browser'
import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
import { useUiCtx } from '$lib/ctx/ui/index.svelte.js'
import { SubscriptionPlan } from '$ui/app/SubscriptionPlan/plans.js'

function useDebouncedFn<GFunction extends (...args: any[]) => void>(time: number, fn: GFunction) {
  let timer: number

  const clear = () => clearTimeout(timer)
  $effect(() => clear)

  return ((...args) => {
    clear()
    setTimeout(() => fn(...args), time)
  }) as GFunction
}

export function useAmplitudeFlow() {
  if (!BROWSER) return

  const { customer, currentUser } = useCustomerCtx.get()
  const { ui } = useUiCtx.get()

  const updateUserData = useDebouncedFn(
    1000,
    (userId?: string | number, name?: null | string, email?: null | string) =>
      setAmplitudeUserProperties({ user_id: userId, userId, name, email }),
  )

  const updateUserSanbaseVersion = useDebouncedFn(1000, (isLiteVersion: boolean) =>
    setAmplitudeUserProperties({ sanbase_version: isLiteVersion ? 'LITE' : 'CLASSIC' }),
  )

  const updateUserSanbasePlan = useDebouncedFn(1000, (sanbase_plan?: string) =>
    setAmplitudeUserProperties({ sanbase_plan: sanbase_plan || SubscriptionPlan.FREE.key }),
  )

  $effect(() => {
    const userId = currentUser.$$?.id
    const name = currentUser.$$?.username
    const email = currentUser.$$?.email

    updateUserData(userId, name, email)
  })

  $effect(() => {
    updateUserSanbaseVersion(ui.$$.isLiteVersion)
  })

  $effect(() => {
    updateUserSanbasePlan(customer.$.sanbaseSubscription?.plan?.name)
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
