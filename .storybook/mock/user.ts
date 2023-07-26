import { getTodaysEnd } from './../../lib/utils/dates'

export type CurrentUser = null | {
  /** @default 42 */
  id?: null | number

  /** @default "Santiment Mock User" */
  name?: null | string

  /** @default "santiment.mock.user" */
  username?: null | string

  /** @default "user.mock@santiment.net" */
  email?: null | string

  /** @default false */
  avatar?: boolean

  /** @default false */
  moderator?: boolean

  /** @default 0 */
  sanBalance?: number

  /** @default false */
  isEligibleForSanbaseTrial?: boolean

  /** @default null */
  plan?: null | {
    /** @default false */
    pro?: boolean

    /** @default false */
    proPlus?: boolean

    /** @default false */
    monthly?: boolean

    /** @default false */
    yearly?: boolean

    /** @default false */
    trial?: boolean

    /** @default undefined */
    trialDaysLeft?: number

    /** @default undefined */
    cancelledInDays?: number
  }

  overwrite?: Record<string, any>
}

export function mockUser(currentUser: CurrentUser) {
  if (!currentUser) return null

  const {
    id = 42,
    name = 'Santiment Mock User',
    username = 'santiment.mock.user',
    email = 'user.mock@santiment.net',
    avatar = false,
    moderator = false,
    sanBalance = 0,
    isEligibleForSanbaseTrial = false,

    plan = null,
    overwrite,
  } = currentUser

  const subscriptions = [] as any[]

  if (plan) {
    const {
      pro = false,
      proPlus = false,
      monthly = false,
      yearly = false,
      trial = false,
      trialDaysLeft,
      cancelledInDays,
    } = plan

    if (!pro && !proPlus) {
      return document.write('Plan should have "pro" or "proPlus" value set to "true"')
    }

    if (!monthly && !yearly) {
      return document.write('Plan should have "monthly" or "yearly" value set to "true"')
    }

    let trialEnd = null
    if (trial) {
      const date = getTodaysEnd()

      if (trialDaysLeft === undefined) {
        date.setDate(date.getDate() + 13)
      } else {
        date.setDate(date.getDate() + trialDaysLeft - 1)
      }

      trialEnd = date.toISOString()
    }

    const currentPeriodEndDate = getTodaysEnd()
    if (cancelledInDays === undefined) {
      currentPeriodEndDate.setDate(currentPeriodEndDate.getDate() + 30)
    } else {
      currentPeriodEndDate.setDate(currentPeriodEndDate.getDate() + cancelledInDays)
    }

    if (pro || proPlus) {
      subscriptions[0] = {
        status: 'ACTIVE',
        trialEnd,
        cancelAtPeriodEnd: cancelledInDays !== undefined,
        currentPeriodEnd: currentPeriodEndDate.toISOString(),
        id: '63074',
        plan: {
          amount: 52900,
          id: '202',
          interval: yearly ? 'year' : 'month',
          name: proPlus ? 'PRO_PLUS' : 'PRO',
          product: { id: '2' },
        },
      }
    }
  }

  return {
    id,
    name,
    username,
    email,
    avatarUrl: avatar
      ? 'https://production-sanbase-images.s3.amazonaws.com/uploads/242dc675b4de34d792f5cc7f29627fa67168b3e2284077163916237facf058e8_1671661438252_Optimism%20%28OP%29%20%5B23.23.48%2C%2021%20Dec%2C%202022%5D.png'
      : null,
    sanBalance,
    isEligibleForSanbaseTrial,
    isModerator: moderator,
    subscriptions,
    ...overwrite,
  }
}

export const CURRENT_USER_MOCK = {
  schema: 'currentUser',
  query: 'currentUser',
  mock: mockUser,
} as const
