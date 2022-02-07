declare namespace SAN {
  type Author = {
    id: number
    username: string | null
    email: string | null
    avatarUrl: string | null
  }

  type CurrentUser = {
    id: number
  }

  type Subscription = {
    /** 'ACTIVE' | 'TRIALING' */
    status: string
    trialEnd?: string
    plan: {
      name: string // 'PRO'
      product: {
        id: number
      }
    }
  }
}
