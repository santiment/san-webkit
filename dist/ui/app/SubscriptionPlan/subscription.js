import { calculateDaysTo } from '../../../utils/dates.js';
import { SubscriptionPlan } from './plans.js';
import { checkIsBusinessPlan, checkIsSanApiProduct, checkIsSanbaseProduct, getPlanName, } from './utils.js';
export var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["TRIALING"] = "TRIALING";
    Status["INCOMPLETE"] = "INCOMPLETE";
})(Status || (Status = {}));
export const checkIsTrialSubscription = ({ status } = {}) => status === Status.TRIALING;
export const checkIsIncompleteSubscription = ({ status } = {}) => status === Status.INCOMPLETE;
export const checkIsActiveSubscription = ({ status } = {}) => status === Status.ACTIVE || status === Status.TRIALING || status === Status.INCOMPLETE;
function getSubscription(subscriptions, productChecker) {
    try {
        return (subscriptions?.find((subscription) => checkIsActiveSubscription(subscription) && productChecker(subscription.plan.product)) ?? null);
    }
    catch (e) {
        console.error(e);
        return null;
    }
}
export const getSanbaseSubscription = (subscriptions) => getSubscription(subscriptions, checkIsSanbaseProduct);
export const getApiSubscription = (subscriptions) => getSubscription(subscriptions, checkIsSanApiProduct);
export function getPrimarySubscription(subscriptions) {
    const apiSubscription = getApiSubscription(subscriptions);
    if (apiSubscription && checkIsBusinessPlan(apiSubscription.plan)) {
        return apiSubscription;
    }
    return getSanbaseSubscription(subscriptions);
}
export function getCustomerSubscriptionData(subscription) {
    const defaultValue = {
        planName: '',
        isPro: false,
        isProPlus: false,
        isMax: false,
        isBusinessPro: false,
        isBusinessMax: false,
        isCanceledSubscription: false,
        isIncompleteSubscription: false,
        isTrialSubscription: false,
        trialDaysLeft: 0,
    };
    if (!subscription) {
        return defaultValue;
    }
    try {
        const { trialEnd, plan, status, cancelAtPeriodEnd } = subscription;
        const isBusiness = checkIsBusinessPlan(plan);
        const planName = plan.name;
        const trialDaysLeft = trialEnd ? calculateDaysTo(trialEnd) : 0;
        const isBusinessMax = isBusiness && planName === SubscriptionPlan.BUSINESS_MAX.key;
        const isBusinessPro = isBusinessMax || planName === SubscriptionPlan.BUSINESS_PRO.key;
        const isMax = isBusiness || planName === SubscriptionPlan.MAX.key;
        const isProPlus = isBusiness || planName === SubscriptionPlan.PRO_PLUS.key;
        const isPro = isProPlus || isMax || planName === SubscriptionPlan.PRO.key;
        return {
            plan,
            planName: getPlanName(plan),
            isBusinessMax,
            isBusinessPro,
            isMax,
            isProPlus,
            isPro,
            isFree: !isPro && !isMax && !isBusinessPro && !isBusinessMax,
            isCanceledSubscription: !!cancelAtPeriodEnd,
            isIncompleteSubscription: checkIsIncompleteSubscription(subscription),
            isTrialSubscription: trialDaysLeft > 0 && status === Status.TRIALING,
            trialDaysLeft,
        };
    }
    catch (e) {
        console.error(e);
        return defaultValue;
    }
}
