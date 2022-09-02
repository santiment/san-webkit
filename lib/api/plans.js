import { mutate, query } from './../api';
import { keepNonDeprecatedPlans, checkIsSanbaseProduct } from './../utils/plans';
import { Cache } from './cache';
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
}`;
const accessor = ({ productsWithPlans }) => productsWithPlans;
export const queryPlans = () => query(PLANS_QUERY).then(accessor);
export const queryProductPlans = (productGetter, plansFilter = keepNonDeprecatedPlans) => queryPlans().then(productGetter).then(plansFilter);
const getSanbasePlans = (products) => { var _a; return (_a = products.find(checkIsSanbaseProduct)) === null || _a === void 0 ? void 0 : _a.plans; };
export const querySanbasePlans = () => queryProductPlans(getSanbasePlans);
export function getCachedSanbasePlans() {
    const cached = Cache.get(PLANS_QUERY);
    return cached && keepNonDeprecatedPlans(getSanbasePlans(accessor(cached)));
}
// -------------------------------------
const COUPON_QUERY = (coupon) => `{
  getCoupon(coupon:"${coupon}") {
    isValid
    percentOff
  }
}`;
const couponOptions = { cache: false };
const couponAccessor = ({ getCoupon }) => getCoupon;
export const queryCoupon = (coupon) => query(COUPON_QUERY(coupon), couponOptions).then(couponAccessor);
// -------------------------------------
const SUBSCRIBE_MUTATION = (cardToken, planId, coupon) => `
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
  }`;
const subscribeAccessor = ({ subscribe }) => subscribe;
export const mutateSubscribe = (cardToken, planId, coupon) => mutate(SUBSCRIBE_MUTATION(cardToken, planId, coupon)).then(subscribeAccessor);
//# sourceMappingURL=plans.js.map