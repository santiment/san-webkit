import { BROWSER } from 'esm-env';
import { UniQuery } from '../../api/executor.js';
import { Fetcher } from '../../api/index.js';
import { calculateDaysTo } from '../../utils/dates.js';
import { getApiSubscription, getCustomerSubscriptionData, getPrimarySubscription, getSanbaseSubscription, } from '../../ui/app/SubscriptionPlan/subscription.js';
export const DEFAULT = {
    currentUser: null,
    isLoggedIn: false,
    sanBalance: 0,
    isEligibleForSanbaseTrial: false,
    annualDiscount: normalizeAnnualDiscount(null),
    isCanceledSubscription: false,
    isIncompleteSubscription: false,
    planName: '',
    plan: null,
    isFree: true,
    isPro: false,
    isMax: false,
    isProPlus: false, // deprecated
    isBusinessPro: false,
    isBusinessMax: false,
    isCustom: false,
    isBusinessSubscription: false,
    isConsumerSubscription: false,
    isTrialSubscription: false,
    trialDaysLeft: 0,
    primarySubscription: null,
    sanbaseSubscription: null,
    apiSubscription: null,
    subscriptions: [],
};
export const queryCurrentUserSubscriptions = Fetcher(() => `{
  currentUser {
    id
    email
    name
    username
    avatarUrl
    privacyPolicyAccepted
    marketingAccepted
    firstLogin
    isModerator
    isEligibleForSanbaseTrial
    ethAccounts { address }
    settings {
      theme
      isPromoter
      sanbaseVersion
    }
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
}`, (gql) => gql.currentUser, { cache: false });
export const queryCustomerAnnualDiscount = Fetcher(() => `{
  annualDiscount:checkAnnualDiscountEligibility {
    isEligible
    discount {
      percentOff
      expireAt
    }
  }
}`, (gql) => gql.annualDiscount, { cache: false });
export const queryCurrentUserSanBalance = Fetcher(() => '{currentUser{sanBalance}}', (gql) => gql.currentUser, { cache: false });
export function normalizeAnnualDiscount(annualDiscount) {
    const { isEligible = false, discount } = annualDiscount || {};
    const expireAt = discount?.expireAt ?? null;
    const discountExpireAt = isEligible && expireAt;
    return {
        isEligible,
        expireAt,
        percent: discount && isEligible ? discount.percentOff : null,
        daysLeft: discountExpireAt ? calculateDaysTo(discountExpireAt) : 0,
    };
}
export function loadCustomerData(fetcher, update) {
    const executor = UniQuery(fetcher);
    const defaultValue = Object.assign({}, DEFAULT);
    const subscriptionsPromise = queryCurrentUserSubscriptions(executor)();
    const sanBalancePromise = BROWSER ? queryCurrentUserSanBalance(executor)() : Promise.resolve();
    return subscriptionsPromise
        .then((currentUser) => {
        if (!currentUser)
            return update(defaultValue);
        const annualDiscountPromise = queryCustomerAnnualDiscount(executor)();
        const { subscriptions } = currentUser;
        const sanbaseSubscription = getSanbaseSubscription(subscriptions);
        const apiSubscription = getApiSubscription(subscriptions);
        const primarySubscription = getPrimarySubscription(subscriptions);
        update(Object.assign({}, defaultValue, currentUser, { currentUser }, getCustomerSubscriptionData(primarySubscription), {
            isLoggedIn: true,
            primarySubscription,
            sanbaseSubscription,
            apiSubscription,
        }));
        sanBalancePromise
            .then((data) => update({ sanBalance: data?.sanBalance ?? 0 }))
            .catch(() => { });
        return annualDiscountPromise
            .then((data) => update({ annualDiscount: normalizeAnnualDiscount(data) }))
            .catch(() => { });
    })
        .catch(() => update(defaultValue));
}
