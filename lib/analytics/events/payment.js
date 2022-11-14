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
export const trackPaymentFormSubmitted = ({ amount, promocode, plan, billing, currency = CurrencyType.USD, hasSanTokensDiscount = false, }) => track('payment_form_submitted', {
    currency,
    amount,
    promocode,
    plan,
    billing,
    san_tokens_discount: hasSanTokensDiscount,
    source_url: window.location.href,
});
export const trackPaymentSuccess = () => track('payment_success', { source_url: window.location.href });
export const trackPaymentFormPlanSelect = ({ amount, plan, billing, currency = CurrencyType.USD, }) => track('payment_form_plan_select', {
    currency,
    amount,
    plan,
    billing,
    source_url: window.location.href,
});
//# sourceMappingURL=payment.js.map