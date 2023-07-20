import { newHeadScript } from './utils.js';
const STRIPE_KEY = process.env.IS_STAGE_BACKEND || process.env.IS_DEV_MODE
    ? 'pk_test_gy9lndGDPXEFslDp8mJ24C3p'
    : 'pk_live_t7lOPOW79IIVcxjPPK5QfESD';
export const bootStripe = () => { var _a; return (window.StripeInstance = (_a = window.Stripe) === null || _a === void 0 ? void 0 : _a.call(window, STRIPE_KEY)); };
export function initStripe(onload = bootStripe) {
    newHeadScript(undefined, {
        async: true,
        src: 'https://js.stripe.com/v3',
    }).onload = onload;
}
//# sourceMappingURL=stripe.js.map