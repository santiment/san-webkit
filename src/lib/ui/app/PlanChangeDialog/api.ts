import { ApiMutation } from '$lib/api/index.js'

export const mutateUpdateSubscription = ApiMutation(
  (currentSubscriptionId: string | number, planId: string | number) => `mutation {
    updateSubscription(subscriptionId:${currentSubscriptionId}, planId:${planId}) {
      id
    }
  }`,
)
