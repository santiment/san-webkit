declare namespace SAN {
  type PlanInterval = 'month' | 'year'

  type Plan = {
    id: string | number
    name: import('../utils/plans').Plan
    interval: PlanInterval
    amount: number
    isDeprecated: boolean
  }

  type Product = {
    id: import('../utils/plans').ProductId
  }
}
