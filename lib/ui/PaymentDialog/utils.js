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
import { track, Tracker } from './../../analytics';
import { trackTwitterPurchaseEvent, TwitterTrackActions } from './../../analytics/twitter';
import { mutateSubscribe } from './../../api/plans';
import { PlanName } from './../../utils/plans';
import { customerData$ } from './../../stores/user';
import { notifications$ } from './../../ui/Notifications';
import { subscription$ } from './../../stores/subscription';
import { paymentCard$ } from './../../stores/paymentCard';
export const CardBrandIllustration = {
    MasterCard: { id: 'mastercard', w: 33, h: 20 },
    Visa: { id: 'visa', w: 46.5, h: 16 },
};
export function mapPlans(plans, plansFilter) {
    const PlanBillings = {};
    plans.forEach((plan) => {
        if (!plansFilter(plan))
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
function submitPayment(plan, discount, cardTokenId) {
    track.event('upgrade', { method: 'Payment submitted' });
    return mutateSubscribe(cardTokenId, +plan.id, discount);
}
export function createCardToken(stripe, card, checkoutInfo) {
    return stripe.createToken(card, checkoutInfo).then(({ token, error }) => {
        if (error)
            return Promise.reject(error);
        if (!token)
            return Promise.reject('Stripe token is missing');
        return token;
    });
}
export function buyPlan(plan, stripe, card, form, savedCard) {
    const { discount } = form, checkoutInfo = __rest(form, ["discount"]);
    const promise = savedCard
        ? submitPayment(plan, discount)
        : createCardToken(stripe, card, checkoutInfo).then((token) => {
            return submitPayment(plan, discount, token.id);
        });
    return promise.then(onPaymentSuccess).catch(onPaymentError);
}
function onPaymentSuccess(data) {
    const { plan } = data;
    const { name, amount } = plan;
    const title = PlanName[name] || name;
    trackTwitterPurchaseEvent();
    track.event(TwitterTrackActions.purchase, {
        value: amount.toString(),
        currency: 'USD',
        num_items: '1',
    }, [Tracker.TWQ]);
    track.event('Purchase', { category: 'User' });
    notifications$.show({
        type: 'success',
        title: `You have successfully upgraded to the "${title}" plan!`,
    });
    subscription$.refetch();
    customerData$.refetch();
    paymentCard$.refetch();
    return Promise.resolve(data);
}
function onPaymentError(error) {
    track.event('upgrade', { method: 'Payment fail' });
    notifications$.show({
        type: 'error',
        title: `Error during the payment`,
    });
    return Promise.reject(error);
}
//# sourceMappingURL=utils.js.map