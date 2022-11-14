import { TrackCategory } from './utils';
const track = TrackCategory('Payment');
export var CurrencyType;
(function (CurrencyType) {
    CurrencyType["USD"] = "USD";
})(CurrencyType || (CurrencyType = {}));
export const trackPaymentFormOpened = (currency = CurrencyType.USD) => track('payment_form_opened', { currency, source_url: window.location.href });
export const trackPaymentFormSubmitted = ({ amount, promocode, subscription_tier, timeframe, currency = CurrencyType.USD, san_tokens_discount = false, }) => track('payment_form_submitted', {
    currency,
    amount,
    promocode,
    subscription_tier,
    timeframe,
    san_tokens_discount,
    source_url: window.location.href,
});
export const trackPaymentSuccess = (payment_success) => track('payment_success', { payment_success, source_url: window.location.href });
//# sourceMappingURL=payment.js.map