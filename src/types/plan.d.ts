declare namespace SAN {
  type PlanInterval = 'month' | 'year'

  type Plan = {
    id: string | number
    name: string
    interval: PlanInterval
    amount: number
    isDeprecated: boolean
    product: Product
  }

  type Product = {
    id: import('../utils/plans').ProductId
  }
}
