export type TSubscriptionPlan = {
  id: string
  name: string
  interval: 'month' | 'year'
  amount: number
  product: { id: string }
}
