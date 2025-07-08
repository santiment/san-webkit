var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { track, Tracker } from './../../analytics/index.js';
import { trackTwitterPurchaseEvent, TwitterTrackActions } from './../../analytics/twitter.js';
import { mutateSubscribe } from './../../api/plans.js';
import { getPlanName } from './../../utils/plans.js';
import { notifications$ } from './../../ui/Notifications/index.js';
import { paymentCard$ } from './../../stores/paymentCard.js';
import { trackPaymentFail, trackPaymentFormSubmitted, trackPaymentSuccess, } from './../../analytics/events/payment.js';
import { start3DSPaymentFlow } from './flow.js';
export const CardBrandIllustration = {
    MasterCard: { id: 'mastercard', w: 33, h: 20 },
    mastercard: { id: 'mastercard', w: 33, h: 20 },
    Visa: { id: 'visa', w: 46.5, h: 16 },
    visa: { id: 'visa', w: 46.5, h: 16 },
};
export const checkSanDiscount = (sanBalance) => sanBalance >= 1000;
export function mapPlans(plans, ...plansFilters) {
    const PlanBillings = {};
    plans.forEach((plan) => {
        if (!plansFilters.every((f) => f(plan)))
            return;
        const planBillings = PlanBillings[plan.name];
        if (planBillings)
            planBillings.push(plan);
        else
            PlanBillings[plan.name] = [plan];
    });
    return Object.values(PlanBillings).flat();
}
function getFormData(form) {
    const data = {};
    new FormData(form).forEach((value, key) => (data[key] = value));
    return data;
}
export function getPaymentFormData(form) {
    const data = getFormData(form);
    const discount = form.discount;
    if (discount && discount.dataset.isValid !== 'true') {
        delete data.discount;
    }
    return data;
}
function submitPayment(plan, discount, source, cardTokenId) {
    // track.event('Payment form submitted', { category: 'User' })
    return mutateSubscribe(cardTokenId, +plan.id, discount);
}
export function createCardToken(
/* eslint-disable */
stripe, card, 
/* eslint-enable */
checkoutInfo) {
    return stripe.createToken(card, checkoutInfo).then(({ token, error }) => {
        if (error)
            return Promise.reject(error);
        if (!token)
            return Promise.reject('Stripe token is missing');
        return token;
    });
}
export function buyPlan(customer$, plan, 
/* eslint-disable */
stripe, card, 
/* eslint-enable */
form, source, savedCard, hasSanTokensDiscount = false) {
    const { discount } = form, checkoutInfo = __rest(form, ["discount"]);
    trackPaymentFormSubmitted({
        plan: plan.name,
        planId: +plan.id,
        amount: plan.amount,
        billing: plan.interval,
        promocode: discount,
        hasSanTokensDiscount,
        source,
    });
    const promise = savedCard
        ? submitPayment(plan, discount, source, undefined)
        : start3DSPaymentFlow(stripe, {
            planId: plan.id,
            coupon: discount,
            card,
            checkoutInfo: checkoutInfo,
        });
    return promise
        .then((data) => onPaymentSuccess(data, source, customer$))
        .catch((data) => onPaymentError(data, source));
}
export function onPaymentSuccess(data, source, customer$, method) {
    const { plan } = data;
    const { name, amount } = plan;
    const title = getPlanName(name);
    trackTwitterPurchaseEvent();
    track.event(TwitterTrackActions.purchase, {
        value: amount.toString(),
        currency: 'USD',
        num_items: '1',
    }, [Tracker.TWQ]);
    // track.event('Payment success', { category: 'User' })
    trackPaymentSuccess(source, method);
    notifications$.show({
        type: 'success',
        title: `You have successfully upgraded to the "${title}" plan!`,
    });
    customer$.refetch();
    paymentCard$.refetch();
    return Promise.resolve(data);
}
export function onPaymentError(error, source, method) {
    // track.event('Payment failed', { category: 'User' })
    trackPaymentFail(source, method);
    notifications$.show({
        type: 'error',
        title: `Error during the payment`,
    });
    return Promise.reject(error);
}
//# sourceMappingURL=utils.js.map