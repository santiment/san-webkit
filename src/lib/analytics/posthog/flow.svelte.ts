import { posthog } from 'posthog-js'
import { BROWSER } from 'esm-env'

import { useCustomerCtx } from '$lib/ctx/customer/index.js'
import { SubscriptionPlan } from '$ui/app/SubscriptionPlan/plans.js'

import { useDebouncedFn } from '../amplitude/flow.svelte.js'

export function usePosthogFlow() {
  if (!BROWSER) return

  const { customer, currentUser } = useCustomerCtx.get()

  const updateUserData = useDebouncedFn(
    1000,
    (userId?: string | number, name?: null | string, email?: null | string) =>
      userId && posthog.identify(userId.toString(), { name, email }),
  )

  const updateUserSanbasePlan = useDebouncedFn(
    1000,
    (sanbase_plan?: string, featureAccessLevel?: string) =>
      posthog.capture('$set', {
        $set: {
          sanbase_plan: sanbase_plan || SubscriptionPlan.FREE.key,
          feature_access_level: featureAccessLevel,
        },
      }),
  )

  $effect(() => {
    const userId = currentUser.$$?.id
    const name = currentUser.$$?.username
    const email = currentUser.$$?.email

    if (userId) {
      updateUserData(userId, name, email)
    }
  })

  $effect(() => {
    const featureAccessLevel = currentUser.$$?.featureAccessLevel

    updateUserSanbasePlan(customer.$.plan?.name, featureAccessLevel)
  })
}
