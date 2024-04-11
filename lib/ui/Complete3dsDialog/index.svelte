<script>var _a;
import { BROWSER } from 'esm-env';
import { showComplete3dsDialog$ } from './Dialog.svelte';
import { getCustomer$Ctx } from './../../stores/customer';
import { queryGetSubscriptionWithPaymentIntent } from './api';
const showComplete3dsDialog = showComplete3dsDialog$();
const { customer$ } = getCustomer$Ctx();
$: customer = $customer$;
$: incompleteSubscriptionId = customer.isIncompleteSubscription && ((_a = customer.subscription) === null || _a === void 0 ? void 0 : _a.id);
$: if (BROWSER && incompleteSubscriptionId) {
    queryGetSubscriptionWithPaymentIntent(incompleteSubscriptionId).then((paymentIntent) => {
        if (!paymentIntent)
            return;
        if (paymentIntent.status === 'requires_action') {
            showComplete3dsDialog({ paymentIntent: paymentIntent.clientSecret });
        }
    });
}
</script>
