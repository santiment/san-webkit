import { getContext, setContext } from 'svelte';
import { query, Universal } from './../api';
import { Cache } from './../api/cache';
import { calculateTrialDaysLeft, checkIsIncompleteSubscription, getSanbaseSubscription, normalizeAnnualDiscount, Status, } from './../utils/subscription';
import { Plan, PlanName } from './../utils/plans';
import { QueryStore } from './utils';
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
    .then(({ currentUser, annualDiscount }) => {
    const subscription = currentUser && getSanbaseSubscription(currentUser.subscriptions);
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
            return Object.assign(customerQuery, balanceQuery.currentUser);
        });
    }
    const store = QueryStore(Object.assign({}, DEFAULT, defaultValue), fetch, '', DEFAULT);
    store.clear = function () {
        Cache.delete(CUSTOMER_QUERY);
        Cache.delete(BALANCE_QUERY);
        this.fetched = false;
    };
    return setContext(CTX, { customer$: store });
}
export const getCustomer$Ctx = () => getContext(CTX);
//# sourceMappingURL=customer.js.map