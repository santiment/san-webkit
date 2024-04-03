import { mutate, query } from '@/api'
import {
  keepNonDeprecatedPlans,
  checkIsSanbaseProduct,
  nonDeprecatedFilter,
  isIndividualPlan,
  isBusinessPlan,
  checkIsSanApiProduct,
} from '@/utils/plans'
import { Cache } from './cache'

export const PLANS_QUERY = `{
  productsWithPlans {
    id
    plans {
      id
      name
      interval
      amount
      isDeprecated
    }
  }
}`

export type ProductPlans = SAN.Product & {
  plans: SAN.Plan[]
}
type Query = SAN.API.Query<'productsWithPlans', ProductPlans[]>

type ProductGetter = (products: ProductPlans[]) => undefined | ProductPlans['plans']

const accessor = ({ productsWithPlans }: Query) => productsWithPlans
export const queryPlans = () => query<Query>(PLANS_QUERY).then(accessor)

export const queryProductPlans = (
  productGetter: ProductGetter,
  plansFilter = keepNonDeprecatedPlans,
) => queryPlans().then(productGetter).then(plansFilter)

const getSanbasePlans: ProductGetter = (products) => products.find(checkIsSanbaseProduct)?.plans

const filterPlans = (plans: SAN.Plan[], ...selectors: ((p: SAN.Plan) => boolean)[]) =>
  plans.filter((p) => selectors.every((s) => s(p)))

const findProductPlans = (
  products: Awaited<ReturnType<typeof queryPlans>>,
  selector: (product: SAN.Product) => boolean,
) => products.find(selector)?.plans ?? []

export const getIndividualPlans = (products: ProductPlans[]) =>
  filterPlans(
    findProductPlans(products, checkIsSanbaseProduct),
    nonDeprecatedFilter,
    isIndividualPlan,
  )
export const getBusinessPlans = (products: ProductPlans[]) =>
  filterPlans(findProductPlans(products, checkIsSanApiProduct), nonDeprecatedFilter, isBusinessPlan)

export const querySanbasePlans = () => queryProductPlans(getSanbasePlans)

export function getCachedProducts() {
  const cached = Cache.get<Query>(PLANS_QUERY)
  return cached && accessor(cached)
}

export function getCachedSanbasePlans() {
  const cached = Cache.get<Query>(PLANS_QUERY)
  return cached && keepNonDeprecatedPlans(getSanbasePlans(accessor(cached)) as any)
}

// -------------------------------------

const COUPON_QUERY = (coupon: string) => `{
  getCoupon(coupon:"${coupon}") {
    isValid
    percentOff
  }
}`

type CouponQuery = SAN.API.Query<
  'getCoupon',
  {
    percentOff: number
    isValid: boolean
  }
>

const couponOptions = { cache: false }
const couponAccessor = ({ getCoupon }: CouponQuery) => getCoupon
export const queryCoupon = (coupon: string) =>
  query<CouponQuery>(COUPON_QUERY(coupon), couponOptions).then(couponAccessor)

// -------------------------------------

const SUBSCRIBE_MUTATION = (cardToken: undefined | string, planId: number, coupon?: string) => `
  mutation {
    subscribe(
      ${cardToken ? `cardToken:"${cardToken}"` : ''}
      planId:${planId}
      ${coupon ? 'coupon:"' + coupon + '"' : ''}
    ) {
      id
      trialEnd
      plan {
        id
        name
        amount
        product {
          id
        }
      }
    }
  }`

export type SubscribeMutation = SAN.API.Query<
  'subscribe',
  {
    id: string | number
    trialEnd: string | null
    plan: {
      id: string | number
      name: string
      product: {
        id: string | number
      }
    }
  }
>

const subscribeAccessor = ({ subscribe }: SubscribeMutation) => subscribe
export const mutateSubscribe = (cardToken: undefined | string, planId: number, coupon?: string) =>
  mutate<SubscribeMutation>(SUBSCRIBE_MUTATION(cardToken, planId, coupon)).then(subscribeAccessor)

// -------------

type PppSettings = {
  isEligibleForPpp: boolean
  country: string
  plans: SAN.Plan[]
}

export const queryPppSettings = () =>
  query<SAN.API.Query<'pppSettings', null | PppSettings>>(`{
  pppSettings {
    isEligibleForPpp
    country
    plans {
      id
      name
      interval
      amount
      isDeprecated
    }
  }
}`).then((data) => {
    if (data.pppSettings?.plans) {
      data.pppSettings.plans = data.pppSettings.plans.sort((a, b) => a.amount - b.amount)
    }

    return data.pppSettings
  })
