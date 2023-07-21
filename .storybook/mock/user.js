import { getTodaysEnd } from '@/utils/dates'

export const NULL_ANNUAL_DISCOUNT = {
  discount: null,
  isEligible: false,
}

export function mockUser(currentUser) {
  if (!currentUser) return null

  const {
    name = 'Santiment Mock User',
    username = 'santiment.mock.user',
    email = 'user.mock@santiment.net',
    avatarUrl = null,
    moderator = false,
    sanBalance = 0,
    isEligibleForSanbaseTrial = false,

    plan = null,
  } = currentUser

  const subscriptions = []

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
      document.body.innerText = 'Plan should have "pro" or "proPlus" value set to "true"'
      return
    }

    if (!monthly && !yearly) {
      document.body.innerText = 'Plan should have "monthly" or "yearly" value set to "true"'
      return
    }

    let trialEnd = null
    if (trial) {
      const date = getTodaysEnd()

      if (trialDaysLeft === undefined) {
        date.setDate(date.getDate() + 14)
      } else {
        date.setDate(date.getDate() + trialDaysLeft)
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

  const data = {
    id: 42,
    name,
    username,
    email,
    avatarUrl,
    sanBalance,
    isEligibleForSanbaseTrial,
    isModerator: moderator,
    subscriptions,
  }

  return data
}
