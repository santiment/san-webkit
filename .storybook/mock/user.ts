// import { getTodaysEnd } from '@/utils/dates'
import { checkIsBusinessPlan, Plan, Product } from '$lib/utils/plans/index.js'

import { getTodaysEnd } from '../../src/lib/utils/dates/index.js'

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

  ethAccounts?: { address: string }[]

  /** @default null */
  plan?: null | {
    /** @default false */
    proPlus?: boolean

    /** @default false */
    pro?: boolean

    /** @default false */
    max?: boolean

    /** @default false */
    businessPro?: boolean

    /** @default false */
    businessMax?: boolean

    /** @default false */
    custom?: boolean

    /** @default false */
    monthly?: boolean

    /** @default false */
    yearly?: boolean

    /** @default false */
    trial?: boolean

    /** @default undefined */
    name?: string

    /** @default undefined */
    trialDaysLeft?: number

    /** @default undefined */
    cancelledInDays?: number
  }

  promoCodes?: PromoCode[]

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

    ethAccounts = [],

    plan = null,
    promoCodes,
    overwrite,
  } = currentUser

  const subscriptions = [] as any[]

  if (plan) {
    const {
      pro = false,
      max = false,
      proPlus = false,
      businessPro = false,
      businessMax = false,
      custom = false,
      monthly = false,
      yearly = false,
      trial = false,
      trialDaysLeft,
      cancelledInDays,
      name: planName,
    } = plan

    if (!pro && !max && !proPlus && !businessPro && !businessMax && !planName && !custom) {
      return document.write(
        'Plan should have "pro" or "proPlus" value set to "true" or have "name" property set',
      )
    }

    if (!monthly && !yearly) {
      return document.write('Plan should have "monthly" or "yearly" value set to "true"')
    }

    let trialEnd: string | null = null
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

    if (pro || max || proPlus || businessPro || businessMax || custom || planName) {
      let name = planName
      if (pro) name = Plan.PRO
      else if (max) name = Plan.MAX
      else if (proPlus) name = Plan.PRO_PLUS
      else if (businessPro) name = Plan.BUSINESS_PRO
      else if (businessMax) name = Plan.BUSINESS_MAX
      else if (custom) name = Plan.CUSTOM

      const id = name && checkIsBusinessPlan(name) ? Product.SANAPI.id : Product.SANBASE.id

      subscriptions[0] = {
        status: trial ? 'TRIALING' : 'ACTIVE',
        trialEnd,
        cancelAtPeriodEnd: cancelledInDays !== undefined,
        currentPeriodEnd: currentPeriodEndDate.toISOString(),
        id: '63074',
        plan: {
          amount: 52900,
          id: '202',
          interval: yearly ? 'year' : 'month',
          name: name,
          product: { id },
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
      ? 'https://stage-sanbase-images.s3.amazonaws.com/uploads/9159027c9a89bea92bf8d2b936e239c4e98fb8d2b0ab195b604f547be8cf647a_1575455341226_1575455341095.jpeg'
      : null,
    sanBalance,
    ethAccounts,
    isEligibleForSanbaseTrial,
    isModerator: moderator,
    subscriptions,
    promoCodes,
    ...overwrite,
  }
}

export const CURRENT_USER_MOCK = {
  name: 'currentUser',
  apiQuery: 'currentUser',
  mock: mockUser,
} as const
