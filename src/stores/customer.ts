import { getContext, setContext } from 'svelte'
import { query, Universal } from '@/api'
import { Cache } from '@/api/cache'
import {
  calculateTrialDaysLeft,
  checkIsIncompleteSubscription,
  getApiSubscription,
  getSanbaseSubscription,
  normalizeAnnualDiscount,
  Status,
} from '@/utils/subscription'
import { Plan, PlanName, checkIsBusinessPlan } from '@/utils/plans'
import { QueryStore, setSessionValue } from './utils'
import { BROWSER } from 'esm-env'

export type CustomerType = {
  isLoggedIn: boolean
  sanBalance: number
  isEligibleForTrial: boolean
  annualDiscount: ReturnType<typeof normalizeAnnualDiscount>
  isIncompleteSubscription: boolean
  isPro: boolean
  isProPlus: boolean
  isMax: boolean
  isBusinessPro: boolean
  isBusinessMax: boolean
  isTrial: boolean
  trialDaysLeft: number
  planName: string

  subscription: undefined | null | SAN.Subscription
  sanbaseSubscription?: undefined | null | SAN.Subscription
  apiSubscription?: undefined | null | SAN.Subscription
  subscriptions: SAN.Subscription[]

  isCanceled: boolean
}

export const DEFAULT = {
  isLoggedIn: false,
  sanBalance: 0,
  isEligibleForTrial: false,
  annualDiscount: normalizeAnnualDiscount(null),
  isIncompleteSubscription: false,
  planName: '',

  isPro: false,
  isMax: false,
  isProPlus: false, // deprecated
  isBusinessPro: false,
  isBusinessMax: false,

  isTrial: false,
  trialDaysLeft: 0,

  subscription: null,
  sanbaseSubscription: null,
  apiSubscription: null,
  subscriptions: [],

  isCanceled: false,
} as CustomerType

export const CUSTOMER_QUERY = `{
  currentUser {
    isEligibleForTrial:isEligibleForSanbaseTrial
    subscriptions {
      id
      status
      trialEnd
      cancelAtPeriodEnd
      currentPeriodEnd
      plan {
        id
        name
        amount
        interval
        product { id }
      }
    }
  }
}`

export const ANNUAL_DISCOUNT_QUERY = `{
  annualDiscount:checkAnnualDiscountEligibility {
    isEligible
    discount {
      percentOff
      expireAt
    }
  }
}`

const BALANCE_QUERY = '{currentUser{sanBalance}}'

function getCustomerSubscriptionData(subscription: undefined | null | any) {
  if (!subscription) {
    return {
      isIncompleteSubscription: false,
      isPro: false,
      isProPlus: false,
      isMax: false,
      isBusinessPro: false,
      isBusinessMax: false,

      isTrial: false,
      trialDaysLeft: 0,
    }
  }

  const { trialEnd, plan, status, cancelAtPeriodEnd } = subscription

  const isBusiness = checkIsBusinessPlan(plan)
  const planName = plan.name
  const trialDaysLeft = trialEnd ? calculateTrialDaysLeft(trialEnd) : 0

  const isBusinessMax = isBusiness && planName === Plan.BUSINESS_MAX
  const isBusinessPro = isBusinessMax || planName === Plan.BUSINESS_PRO
  const isProPlus = isBusiness || planName === Plan.PRO_PLUS
  const isMax = isBusiness || planName === Plan.MAX

  return {
    isIncompleteSubscription: checkIsIncompleteSubscription(subscription),
    isMax,
    isProPlus,
    isPro: isProPlus || isMax || planName === Plan.PRO,
    isBusinessMax,
    isBusinessPro,

    isTrial: trialDaysLeft > 0 && status === Status.TRIALING,
    trialDaysLeft,
    planName: PlanName[planName] || planName,
    isCanceled: !!cancelAtPeriodEnd,
  }
}

function getBusinessOrSanbaseSubscription(apiSubscription?: any, sanbaseSubscription?: any) {
  if (!apiSubscription) return sanbaseSubscription

  return checkIsBusinessPlan(apiSubscription.plan) ? apiSubscription : sanbaseSubscription
}

export const queryCustomer = Universal(
  (query) => () =>
    query<any>(CUSTOMER_QUERY)
      .then(async ({ currentUser }) => {
        const sanbaseSubscription = currentUser && getSanbaseSubscription(currentUser.subscriptions)
        const apiSubscription = currentUser && getApiSubscription(currentUser.subscriptions)
        const annualDiscount =
          currentUser && (await query<any>(ANNUAL_DISCOUNT_QUERY)).annualDiscount

        const subscription = getBusinessOrSanbaseSubscription(apiSubscription, sanbaseSubscription)

        return Object.assign(
          {},
          DEFAULT,
          {
            annualDiscount: normalizeAnnualDiscount(annualDiscount),
            isLoggedIn: !!currentUser,
            subscription,

            sanbaseSubscription,
            apiSubscription,
          },
          getCustomerSubscriptionData(subscription),
          currentUser,
        )
      })
      .catch(() => DEFAULT) as Promise<CustomerType>,
)

const CTX = 'Customer$$'
export function Customer$$(defaultValue?: CustomerType) {
  function fetch() {
    return Promise.all([queryCustomer(), query<any>(BALANCE_QUERY)]).then(
      ([customerQuery, balanceQuery]) => {
        const customer = Object.assign(customerQuery, balanceQuery.currentUser)
        if (BROWSER) setSessionValue({ customer })
        return customer
      },
    )
  }

  const store = QueryStore<CustomerType>(
    Object.assign({}, DEFAULT, defaultValue),
    fetch,
    '',
    DEFAULT,
  )
  store.clear = function () {
    Cache.delete(CUSTOMER_QUERY)
    Cache.delete(ANNUAL_DISCOUNT_QUERY)
    Cache.delete(BALANCE_QUERY)
    this.fetched = false
  }

  return setContext(CTX, { customer$: store })
}

export const getCustomer$Ctx = () => getContext<ReturnType<typeof Customer$$>>(CTX)

export type Customer$Type = ReturnType<typeof Customer$$>['customer$']
