import { Mutation } from '$lib/api/index.js'

export const mutateUpdateSubscription = Mutation(
  (currentSubscriptionId: string | number, planId: string | number) => `mutation {
    updateSubscription(subscriptionId:${currentSubscriptionId}, planId:${planId}) {
      id
    }
  }`,
)
