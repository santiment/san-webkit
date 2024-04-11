import { query } from '@/api'

export const queryGetSubscriptionWithPaymentIntent = (id: number | string) =>
  query<
    SAN.API.Query<
      'data',
      {
        paymentIntent?: {
          clientSecret: string
          status: 'requires_action' | 'requires_payment_method' | string
        }
      }
    >
  >(
    `{
  data:getSubscriptionWithPaymentIntent(subscriptionId:"${id}") {
    paymentIntent {
      clientSecret
      status
    }
  }
}`,
    {
      cache: false,
    },
  ).then((data) => data.data.paymentIntent)
