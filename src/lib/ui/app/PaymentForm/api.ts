import type { TSubscriptionPlan } from '../SubscriptionPlan/types.js'

import { ApiQuery, ApiMutation } from '$lib/api/index.js'

export const mutateSubscribe = ApiMutation(
  (variables: {
    planId: number
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

export type TCoupon = {
  isValid: boolean
  percentOff: number
}
export const queryDiscountCoupon = ApiQuery(
  (coupon: string) => `{
  getCoupon(coupon:"${coupon}") {
    isValid
    percentOff
  }
}`,
  (gql: { getCoupon: null | TCoupon }) => gql.getCoupon,
  { cache: false },
)
