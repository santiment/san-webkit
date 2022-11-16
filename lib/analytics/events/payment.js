import { TrackCategory } from './utils';
const track = TrackCategory('Payment');
export var CurrencyType;
(function (CurrencyType) {
    CurrencyType["USD"] = "USD";
})(CurrencyType || (CurrencyType = {}));
export const trackPaymentFormClosed = () => track('payment_form_closed');
export const trackPaymentFormOpened = ({ plan, planId, amount, billing, source, currency = CurrencyType.USD, }) => track('payment_form_opened', {
    plan,
    plan_id: planId,
    amount,
    billing,
    source,
    currency,
    source_url: window.location.href,
});
export const trackPaymentFormSubmitted = ({ source, amount, promocode, plan, planId, billing, currency = CurrencyType.USD, hasSanTokensDiscount = false, }) => track('payment_form_submitted', {
    currency,
    source,
    amount,
    promocode,
    plan,
    plan_id: planId,
    billing,
    san_tokens_discount: hasSanTokensDiscount,
    source_url: window.location.href,
});
export const trackPaymentSuccess = (source) => track('payment_success', { source, source_url: window.location.href });
export const trackPaymentFail = (source) => track('payment_fail', { source, source_url: window.location.href });
export const trackPaymentFormPlanSelect = ({ amount, plan, planId, billing, currency = CurrencyType.USD, }) => track('payment_form_plan_select', {
    currency,
    amount,
    plan,
    planId,
    billing,
    source_url: window.location.href,
});
//# sourceMappingURL=payment.js.map