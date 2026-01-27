import { calculateDaysTo } from '../../../utils/dates/index.js';
import { checkIsCustomPlan } from './utils.js';
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
    if (apiSubscription && checkIsBusinessPlan(apiSubscription.plan.name)) {
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
        isCustom: false,
        isBusinessSubscription: false,
        isConsumerSubscription: false,
        isCanceledSubscription: false,
        isIncompleteSubscription: false,
        isTrialSubscription: false,
        trialDaysLeft: null,
    };
    if (!subscription) {
        return defaultValue;
    }
    try {
        const { trialEnd, plan, status, cancelAtPeriodEnd, currentPeriodEnd = Date.now(), } = subscription;
        const isBusiness = checkIsBusinessPlan(plan.name);
        const trialDaysLeft = trialEnd ? calculateDaysTo(trialEnd) : null;
        const isCustom = checkIsCustomPlan(plan.name);
        const isBusinessMax = isBusiness && plan.name === SubscriptionPlan.BUSINESS_MAX.key;
        const isBusinessPro = isBusinessMax || plan.name === SubscriptionPlan.BUSINESS_PRO.key;
        const isMax = isBusiness || plan.name === SubscriptionPlan.MAX.key;
        const isProPlus = isBusiness || plan.name === SubscriptionPlan.PRO_PLUS.key;
        const isPro = isProPlus || isMax || plan.name === SubscriptionPlan.PRO.key;
        const isFree = !isPro && !isMax && !isBusinessPro && !isBusinessMax && !isCustom;
        return {
            plan,
            planName: getPlanName(plan.name),
            isBusinessMax,
            isBusinessPro,
            isMax,
            isProPlus,
            isPro,
            isFree,
            isCustom,
            isBusinessSubscription: isBusiness,
            isConsumerSubscription: isFree ? false : !isBusiness,
            isCanceledSubscription: !!cancelAtPeriodEnd,
            isIncompleteSubscription: checkIsIncompleteSubscription(subscription),
            isTrialSubscription: !!trialDaysLeft && trialDaysLeft > 0 && status === Status.TRIALING,
            trialDaysLeft,
            currentPeriodEnd,
        };
    }
    catch (e) {
        console.error(e);
        return defaultValue;
    }
}
