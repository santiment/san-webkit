declare namespace SAN {
  type Plan = {
    id: string | number
    name: string
    interval: 'month' | 'year'
    amount: number
    isDeprecated: boolean
  }

  type Product = {
    id: import('../utils/plans').ProductId
  }
}
