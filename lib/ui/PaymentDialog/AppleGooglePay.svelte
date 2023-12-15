<script>import { stripe as stripe$ } from './../../stores/stripe';
import { startStripePaymentButtonsFlow } from './flow';
import { onPaymentSuccess, onPaymentError } from './utils';
import { getCustomer$Ctx } from './../../stores/customer';
import { noop } from './../../utils';
export let plan;
export let source;
export let closeDialog = noop;
export let ctx = { total: 0, coupon: '' };
const { customer$ } = getCustomer$Ctx();
$: stripe = $stripe$;
$: stripe && handleStripButtons(stripe, plan, ctx);
function handleStripButtons(stripe, plan, ctx) {
    startStripePaymentButtonsFlow(stripe, {
        total: ctx.total,
        plan: plan.name ? plan : { id: -1, name: 'Placeholder', amount: 9999999999 },
        coupon: ctx.coupon,
        onSuccess,
        onError,
    });
}
function onSuccess(data, method) {
    onPaymentSuccess(data, source, customer$, method);
    closeDialog();
}
function onError(e, method) {
    onPaymentError(e, source, method);
}
</script>

<div id="payment-request-button" class="mrg-s mrg--t" />
