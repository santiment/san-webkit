import { BROWSER } from 'esm-env';
import { UniQuery } from '../../api/executor.js';
import { ApiQuery } from '../../api/index.js';
import { calculateDaysTo } from '../../utils/dates/index.js';
import { getApiSubscription, getCustomerSubscriptionData, getPrimarySubscription, getSanbaseSubscription, } from '../../ui/app/SubscriptionPlan/subscription.js';
export const DEFAULT = {
    currentUser: null,
    isLoggedIn: false,
    sanBalance: 0,
    isEligibleForSanbaseTrial: false,
    annualDiscount: normalizeAnnualDiscount(null),
    isEarlyAccessMember: false,
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
    trialDaysLeft: null,
    primarySubscription: null,
    sanbaseSubscription: null,
    apiSubscription: null,
    subscriptions: [],
};
const queryCurrentUser = ApiQuery(() => `{
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
    areUserAffiliateDatailsSubmitted
    featureAccessLevel
    ethAccounts { address }
    apikeys
    ${BROWSER ? 'following { users { id } }' : ''}
    settings {
      theme
      isPromoter
      sanbaseVersion
      alertNotifyEmail
      alertNotifyTelegram
      hasTelegramConnected
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
export const queryCustomerAnnualDiscount = ApiQuery(() => `{
  annualDiscount:checkAnnualDiscountEligibility {
    isEligible
    discount {
      percentOff
      expireAt
    }
  }
}`, (gql) => gql.annualDiscount, { cache: false });
export const queryCurrentUserSanBalance = ApiQuery(() => '{currentUser{sanBalance}}', (gql) => gql.currentUser, { cache: false });
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
    const currentUserPromise = queryCurrentUser(executor)();
    const sanBalancePromise = BROWSER ? queryCurrentUserSanBalance(executor)() : Promise.resolve();
    return currentUserPromise
        .then((currentUser) => {
        if (!currentUser)
            return update(defaultValue);
        const annualDiscountPromise = queryCustomerAnnualDiscount(executor)();
        const { subscriptions, isEligibleForSanbaseTrial } = currentUser;
        const sanbaseSubscription = getSanbaseSubscription(subscriptions);
        const apiSubscription = getApiSubscription(subscriptions);
        const primarySubscription = getPrimarySubscription(subscriptions);
        update({
            ...defaultValue,
            currentUser,
            isEligibleForSanbaseTrial,
            ...getCustomerSubscriptionData(primarySubscription),
            isLoggedIn: true,
            isEarlyAccessMember: checkIsEarlyAccessMember(currentUser),
            primarySubscription,
            sanbaseSubscription,
            apiSubscription,
        });
        sanBalancePromise
            .then((data) => update({ sanBalance: data?.sanBalance ?? 0 }))
            .catch(() => { });
        return annualDiscountPromise
            .then((data) => update({ annualDiscount: normalizeAnnualDiscount(data) }))
            .catch(() => { });
    })
        .catch(() => update(defaultValue));
}
function checkIsEarlyAccessMember(currentUser) {
    const { email, featureAccessLevel } = currentUser;
    return (email?.endsWith('@santiment.net') ||
        featureAccessLevel === 'BETA' ||
        featureAccessLevel === 'ALPHA');
}
