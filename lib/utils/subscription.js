import { ONE_DAY_IN_MS } from './dates';
import { PlanName, checkIsSanbaseProduct, checkIsYearlyPlan } from './plans';
export var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["TRIALING"] = "TRIALING";
    Status["INCOMPLETE"] = "INCOMPLETE";
})(Status || (Status = {}));
export const checkIsTrialSubscription = ({ status } = {}) => status === Status.TRIALING;
export const checkIsIncompleteSubscription = ({ status } = {}) => status === Status.INCOMPLETE;
export const checkIsActiveSubscription = ({ status }) => status === Status.ACTIVE || status === Status.TRIALING || status === Status.INCOMPLETE;
export const calculateTrialDaysLeft = (trialEnd) => Math.ceil((+new Date(trialEnd) - Date.now()) / ONE_DAY_IN_MS);
export function getSanbaseSubscription(subscriptions) {
    return subscriptions.find((subscription) => checkIsActiveSubscription(subscription) && checkIsSanbaseProduct(subscription.plan.product));
}
export function getTrialDaysLeft(subscription) {
    let trialEnd = subscription.trialEnd;
    if (!trialEnd)
        return;
    const daysLeft = calculateTrialDaysLeft(trialEnd);
    if (daysLeft < 1)
        return;
    return daysLeft === 1 ? 'last day' : `${daysLeft} days left`;
}
export function getUserSubscriptionInfo(customerData, subscription) {
    var _a, _b;
    const { isEligibleForTrial, annualDiscount } = customerData;
    const annualDiscountPercent = (annualDiscount === null || annualDiscount === void 0 ? void 0 : annualDiscount.isEligible) && ((_a = annualDiscount.discount) === null || _a === void 0 ? void 0 : _a.percentOff);
    const discountExpireAt = (annualDiscount === null || annualDiscount === void 0 ? void 0 : annualDiscount.isEligible) && ((_b = annualDiscount.discount) === null || _b === void 0 ? void 0 : _b.expireAt);
    const subscriptionPlan = subscription === null || subscription === void 0 ? void 0 : subscription.plan.name;
    const userPlanName = PlanName[subscriptionPlan] || subscriptionPlan;
    const trialDaysLeft = (subscription === null || subscription === void 0 ? void 0 : subscription.trialEnd) ? calculateTrialDaysLeft(subscription.trialEnd) : 0;
    return {
        isEligibleForTrial,
        isIncomplete: checkIsIncompleteSubscription(subscription),
        annualDiscount,
        annualDiscountPercent,
        annualDiscountDaysLeft: discountExpireAt ? calculateTrialDaysLeft(discountExpireAt) : 0,
        userPlanName,
        trialDaysLeft,
    };
}
export function getNextPaymentDate(plan) {
    const target = checkIsYearlyPlan(plan) ? 'FullYear' : 'Month';
    const date = new Date();
    date['set' + target](date['get' + target]() + 1);
    return date;
}
//# sourceMappingURL=subscription.js.map