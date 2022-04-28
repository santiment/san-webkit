import { mutate } from '@/api'

export const UPDATE_PAYMENT_CARD_MUTATION = (cardToken: string) => `mutation {
    updateDefaultPaymentInstrument(cardToken: "${cardToken}")
  }`

export const mutateUpdatePaymentCard = (cardToken: string) =>
  mutate<any>(UPDATE_PAYMENT_CARD_MUTATION(cardToken))
