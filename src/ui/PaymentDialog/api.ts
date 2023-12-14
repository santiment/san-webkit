import type { SubscribeMutation } from '@/api/plans'
import { mutate } from '@/api'

export const mutateCreateStripeSetupIntent = () =>
  mutate<SAN.API.Query<'createStripeSetupIntent', { clientSecret: string }>>(`mutation {
   createStripeSetupIntent { clientSecret }
 }`).then((data) => data.createStripeSetupIntent.clientSecret)

export const mutateSubscribe = (variables: {
  planId: number
  cardToken?: string
  coupon?: string
  paymentMethodId?: string
}) =>
  mutate<SubscribeMutation>(
    `mutation($cardToken:String, $coupon:String, $paymentMethodId: String, $planId: Int!) {
    subscribe(cardToken:$cardToken, coupon:$coupon , paymentMethodId:$paymentMethodId, planId:$planId) {
      id
      trialEnd
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
    { variables },
  ).then(({ subscribe }) => subscribe)
