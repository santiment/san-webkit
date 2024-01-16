import { getContext, setContext } from 'svelte';
import { query, Universal } from './../api/index.js';
import { Cache } from './../api/cache.js';
import { calculateTrialDaysLeft, checkIsIncompleteSubscription, getSanbaseSubscription, normalizeAnnualDiscount, Status, } from './../utils/subscription.js';
import { Plan, PlanName } from './../utils/plans.js';
import { QueryStore, setSessionValue } from './utils.js';
export const DEFAULT = {
    isLoggedIn: false,
    sanBalance: 0,
    isEligibleForTrial: false,
    annualDiscount: normalizeAnnualDiscount(null),
    isIncompleteSubscription: false,
    planName: '',
    isPro: false,
    isProPlus: false,
    isTrial: false,
    trialDaysLeft: 0,
    subscription: null,
    subscriptions: [],
    isCanceled: false,
};
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
}`;
export const ANNUAL_DISCOUNT_QUERY = `{
  annualDiscount:checkAnnualDiscountEligibility {
    isEligible
    discount {
      percentOff
      expireAt
    }
  }
}`;
const BALANCE_QUERY = '{currentUser{sanBalance}}';
function getCustomerSubscriptionData(subscription) {
    if (!subscription) {
        return {
            isIncompleteSubscription: false,
            isPro: false,
            isProPlus: false,
            isTrial: false,
            trialDaysLeft: 0,
        };
    }
    const { trialEnd, plan, status, cancelAtPeriodEnd } = subscription;
    const planName = plan.name;
    const trialDaysLeft = trialEnd ? calculateTrialDaysLeft(trialEnd) : 0;
    const isProPlus = planName === Plan.PRO_PLUS;
    return {
        isIncompleteSubscription: checkIsIncompleteSubscription(subscription),
        isProPlus,
        isPro: isProPlus || planName === Plan.PRO,
        isTrial: trialDaysLeft > 0 && status === Status.TRIALING,
        trialDaysLeft,
        planName: PlanName[planName] || planName,
        isCanceled: !!cancelAtPeriodEnd,
    };
}
export const queryCustomer = Universal((query) => () => query(CUSTOMER_QUERY)
    .then(async ({ currentUser }) => {
    const subscription = currentUser && getSanbaseSubscription(currentUser.subscriptions);
    const annualDiscount = currentUser && (await query(ANNUAL_DISCOUNT_QUERY)).annualDiscount;
    return Object.assign({}, DEFAULT, {
        annualDiscount: normalizeAnnualDiscount(annualDiscount),
        isLoggedIn: !!currentUser,
        subscription,
    }, getCustomerSubscriptionData(subscription), currentUser);
})
    .catch(() => DEFAULT));
const CTX = 'Customer$$';
export function Customer$$(defaultValue) {
    function fetch() {
        return Promise.all([queryCustomer(), query(BALANCE_QUERY)]).then(([customerQuery, balanceQuery]) => {
            const customer = Object.assign(customerQuery, balanceQuery.currentUser);
            if (process.browser)
                setSessionValue({ customer });
            return customer;
        });
    }
    const store = QueryStore(Object.assign({}, DEFAULT, defaultValue), fetch, '', DEFAULT);
    store.clear = function () {
        Cache.delete(CUSTOMER_QUERY);
        Cache.delete(ANNUAL_DISCOUNT_QUERY);
        Cache.delete(BALANCE_QUERY);
        this.fetched = false;
    };
    return setContext(CTX, { customer$: store });
}
export const getCustomer$Ctx = () => getContext(CTX);
//# sourceMappingURL=customer.js.map