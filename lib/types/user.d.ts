declare namespace SAN {
  type Author = {
    id: number
    username?: string | null
    email?: string | null
    avatarUrl?: string | null
  }

  type CurrentUser = {
    id: number
  }

  type Subscription = {
    id: number
    /** 'ACTIVE' | 'TRIALING' */
    status: string
    trialEnd?: string
    currentPeriodEnd: string
    cancelAtPeriodEnd?: boolean
    plan: {
      id: string
      name: string // 'PRO'
      product: SAN.Product
      amount: number
      interval: string
    }
  }

  type AnnualDiscount = {
    isEligible: boolean
    discount: null | { percentOff: number; expireAt: string }
  }

  type PaymentCard = {
    brand: 'MasterCard' | 'UnionPay' | 'Visa' | 'Unknown'
    last4: string
    expMonth: number
    expYear: number
  }
}
