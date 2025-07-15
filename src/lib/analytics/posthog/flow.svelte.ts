import type { ABSettings } from '$lib/ctx/abTest/cookies.js'

import { posthog } from 'posthog-js'
import { BROWSER } from 'esm-env'

import { useCustomerCtx } from '$lib/ctx/customer/index.js'
import { SubscriptionPlan } from '$ui/app/SubscriptionPlan/plans.js'
import { useABTestCtx } from '$lib/ctx/abTest/index.svelte.js'

import { useDebouncedFn } from '../amplitude/flow.svelte.js'

export function usePosthogFlow() {
  if (!BROWSER) return

  const { customer, currentUser } = useCustomerCtx.get()
  const { abTests } = useABTestCtx.get()

  type User = {
    id: string
    name: string | null
    email: string | null
  }
  const updateUserData = useDebouncedFn(
    1000,
    ({ id, email, name }: User, abTests?: ABSettings) =>
      id && posthog.identify(id.toString(), { name, email, abTests }),
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
    if (currentUser.$$) {
      const { id, name, email } = currentUser.$$
      updateUserData({ id, name, email }, abTests.$)
    }
  })

  $effect(() => {
    const featureAccessLevel = currentUser.$$?.featureAccessLevel

    updateUserSanbasePlan(customer.$.plan?.name, featureAccessLevel)
  })
}
