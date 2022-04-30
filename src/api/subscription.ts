import { mutate, query } from '@/api'
import { Cache } from '@/api/cache'

const PAYMENT_CARD_QUERY = `{
  card: fetchDefaultPaymentInstrument {
    brand
    last4
    expMonth
    expYear
  }
}`

type PaymentCardQuery = SAN.API.Query<'card', undefined | SAN.PaymentCard>

const accessor = ({ card }) => card
export const queryPaymentCard = () => query<PaymentCardQuery>(PAYMENT_CARD_QUERY).then(accessor)
export const clearPaymentCardQuery = () => Cache.delete(PAYMENT_CARD_QUERY)

// ----------------------------------

const UPDATE_PAYMENT_CARD_MUTATION = (cardToken: string) => `mutation {
    updateDefaultPaymentInstrument(cardToken: "${cardToken}")
  }`

export const mutateUpdatePaymentCard = (cardToken: string) =>
  mutate<any>(UPDATE_PAYMENT_CARD_MUTATION(cardToken))

// -------------------------------

const DELETE_PAYMENT_CARD_MUTATION = `mutation {
    deleteDefaultPaymentInstrument
  }`

export const mutateDeletePaymentCard = () => mutate<any>(DELETE_PAYMENT_CARD_MUTATION)

// ------------------------------------

export const UPDATE_SUBSCRIPTION_MUTATION = (
  currentSubscriptionId: number,
  planId: number,
) => `mutation {
    updateSubscription(subscriptionId:${currentSubscriptionId}, planId:${planId}) {
      id
    }
  }`

export const mutateUpdateSubscription = (currentSubscriptionId: number, planId: number) =>
  mutate<any>(UPDATE_SUBSCRIPTION_MUTATION(currentSubscriptionId, planId))

// ---------------------------

const BILLING_HISTORY_QUERY = `{
  payments {
    amount
    createdAt
    description
    status
  }
}`

const billingHistoryAccessor = ({ payments }) => payments
export const queryBillingHistory = () =>
  query<any>(BILLING_HISTORY_QUERY).then(billingHistoryAccessor)
