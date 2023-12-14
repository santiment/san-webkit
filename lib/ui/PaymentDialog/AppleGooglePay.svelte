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
$: plan.name && stripe && handleStripButtons(stripe, plan, ctx);
function handleStripButtons(stripe, plan, ctx) {
    console.log(ctx);
    startStripePaymentButtonsFlow(stripe, {
        total: ctx.total,
        plan,
        coupon: ctx.coupon,
        onSuccess,
        onError,
    });
}
function onSuccess(data) {
    onPaymentSuccess(data, source, customer$);
    closeDialog();
}
function onError(e) {
    onPaymentError(e, source);
}
</script>

<div id="payment-request-button" class="mrg-s mrg--t" />
