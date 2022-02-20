import { query } from './index'
import { keepNonDeprecatedPlans, checkIsSanbaseProduct } from '../utils/plans'
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

type ProductPlans = SAN.Product & {
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
export const querySanbasePlans = () => queryProductPlans(getSanbasePlans)

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
