import { mutateCreateStripeSetupIntent, mutateSubscribe } from './api.js';
export async function startStripePaymentButtonsFlow(stripe, { plan, total, coupon, onSuccess, onError, }) {
    const paymentRequest = stripe.paymentRequest({
        country: 'CH',
        currency: 'usd',
        total: {
            label: plan.name + (process.env.IS_STAGE_BACKEND ? ' (STAGE)' : ''),
            amount: total || plan.amount,
        },
        requestPayerName: true,
        requestPayerEmail: true,
    });
    const elements = stripe.elements();
    const prButton = elements.create('paymentRequestButton', {
        paymentRequest,
    });
    // Check the availability of the Payment Request API first.
    const result = await paymentRequest.canMakePayment();
    if (!result) {
        const node = document.getElementById('payment-request-button');
        return node && (node.style.display = 'none');
    }
    prButton.mount('#payment-request-button');
    paymentRequest.on('paymentmethod', (ev) => {
        if (!stripe)
            return;
        startPaymentIntentFlow(stripe, {
            planId: +plan.id,
            paymentMethodId: ev.paymentMethod.id,
            coupon,
        })
            .then((data) => {
            onSuccess(data, ev.methodName);
            ev.complete('success');
            return data;
        })
            .catch((e) => {
            onError(e, ev.methodName);
            ev.complete('fail');
            return Promise.reject(e);
        });
    });
}
export async function startPaymentIntentFlow(stripe, variables) {
    if (!stripe)
        return Promise.reject('Stripe not found');
    const clientSecret = await mutateCreateStripeSetupIntent();
    if (!clientSecret)
        return Promise.reject('Unable to get SetupIntent clientSecret');
    const { paymentMethodId } = variables;
    const { setupIntent, error: confirmError } = await stripe.confirmCardSetup(clientSecret, { payment_method: paymentMethodId }, { handleActions: false });
    if (confirmError) {
        // Report to the browser that the payment failed, prompting it to
        // re-show the payment interface, or show an error message and close
        // the payment interface.
        return Promise.reject('setupIntent error');
    }
    else {
        // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
        // handle the flow. If using an API version older than "2019-02-11"
        // instead check for: `paymentIntent.status === "requires_source_action"`.
        if ((setupIntent === null || setupIntent === void 0 ? void 0 : setupIntent.status) === 'requires_action') {
            // Let Stripe.js handle the rest of the payment flow.
            const { error } = await stripe.confirmCardSetup(clientSecret);
            if (error) {
                console.log({ error });
                return Promise.reject('setupIntent error');
                // The payment failed -- ask your customer for a new payment method.
            }
        }
    }
    const vars = Object.assign({}, variables);
    if (!vars.coupon)
        delete vars.coupon;
    return mutateSubscribe(vars);
}
//# sourceMappingURL=flow.js.map