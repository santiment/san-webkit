import { getContext, setContext } from 'svelte';
import { query, Universal } from './../api/index.js';
import { Cache } from './../api/cache.js';
import { calculateTrialDaysLeft, checkIsIncompleteSubscription, getApiSubscription, getSanbaseSubscription, normalizeAnnualDiscount, Status, } from './../utils/subscription.js';
import { Plan, PlanName } from './../utils/plans.js';
import { QueryStore, setSessionValue } from './utils.js';
import { BROWSER } from 'esm-env';
export const DEFAULT = {
    isLoggedIn: false,
    sanBalance: 0,
    isEligibleForTrial: false,
    annualDiscount: normalizeAnnualDiscount(null),
    isIncompleteSubscription: false,
    planName: '',
    isPro: false,
    isMax: false,
    isProPlus: false,
    isTrial: false,
    trialDaysLeft: 0,
    subscription: null,
    apiSubscription: null,
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
            isMax: false,
            isTrial: false,
            trialDaysLeft: 0,
        };
    }
    const { trialEnd, plan, status, cancelAtPeriodEnd } = subscription;
    const planName = plan.name;
    const trialDaysLeft = trialEnd ? calculateTrialDaysLeft(trialEnd) : 0;
    const isProPlus = planName === Plan.PRO_PLUS;
    const isMax = planName === Plan.MAX;
    return {
        isIncompleteSubscription: checkIsIncompleteSubscription(subscription),
        isMax,
        isProPlus,
        isPro: isProPlus || isMax || planName === Plan.PRO,
        isTrial: trialDaysLeft > 0 && status === Status.TRIALING,
        trialDaysLeft,
        planName: PlanName[planName] || planName,
        isCanceled: !!cancelAtPeriodEnd,
    };
}
export const queryCustomer = Universal((query) => () => query(CUSTOMER_QUERY)
    .then(async ({ currentUser }) => {
    const subscription = currentUser && getSanbaseSubscription(currentUser.subscriptions);
    const apiSubscription = currentUser && getApiSubscription(currentUser.subscriptions);
    const annualDiscount = currentUser && (await query(ANNUAL_DISCOUNT_QUERY)).annualDiscount;
    return Object.assign({}, DEFAULT, {
        annualDiscount: normalizeAnnualDiscount(annualDiscount),
        isLoggedIn: !!currentUser,
        subscription,
        apiSubscription,
    }, getCustomerSubscriptionData(subscription), currentUser);
})
    .catch(() => DEFAULT));
const CTX = 'Customer$$';
export function Customer$$(defaultValue) {
    function fetch() {
        return Promise.all([queryCustomer(), query(BALANCE_QUERY)]).then(([customerQuery, balanceQuery]) => {
            const customer = Object.assign(customerQuery, balanceQuery.currentUser);
            if (BROWSER)
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