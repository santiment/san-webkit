import { Mutation } from '$lib/api/index.js'
import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js'

export const mutateSubscribe = Mutation(
  (variables: {
    planId: number | string
    cardToken?: string
    coupon?: string
    paymentMethodId?: string
  }) => ({
    schema: `mutation($cardToken:String, $coupon:String, $paymentMethodId: String, $planId: Int!) {
    subscribe(cardToken:$cardToken, coupon:$coupon , paymentMethodId:$paymentMethodId, planId:$planId) {
      id
      trialEnd
      status
      paymentIntent { status clientSecret }
      plan {
        id
        name
        amount
        product {
          id
        }
      }
    }
  }`,
    variables,
  }),

  (gql: {
    subscribe: null | {
      id: string
      trialEnd: null | string
      status: string
      paymentIntent: null | {
        status: string
        clientSecret: string
      }
      plan: TSubscriptionPlan
    }
  }) => gql.subscribe,
)
