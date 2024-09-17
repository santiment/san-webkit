import { Query } from '../../../api/executor.js';
import { useStripeCtx } from '../../../ctx/stripe/index.js';
import { notifcation } from '../../core/Notifications/index.js';
import { mutateSubscribe } from './api.js';
import { usePaymentFormCtx } from './state.js';
import { useCustomerCtx } from '../../../ctx/customer/index.js';
export function usePaymentFlow() {
    const { paymentForm, subscriptionPlan, coupon } = usePaymentFormCtx.get();
    const { stripe: stripeLoader } = useStripeCtx();
    const { customer } = useCustomerCtx();
    async function startCardPaymentFlow() {
        const { selected: plan } = subscriptionPlan.$;
        if (!plan) {
            return Promise.reject(new Error('No selected plan'));
        }
        const { cardElement, addressElement } = paymentForm.$;
        if (!cardElement || !addressElement) {
            return Promise.reject(new Error('Incorrect data filled'));
        }
        const stripe = stripeLoader.$;
        if (!stripe) {
            return Promise.reject(new Error('Failed to load Stripe'));
        }
        const addressData = await addressElement
            .getValue()
            .catch(() => ({ complete: false, value: null }));
        if (!addressData.complete || !addressData.value) {
            return Promise.reject(new Error('Incorrect billing information'));
        }
        const { name, address } = addressData.value;
        const { token: cardToken, error: cardTokenError } = await stripe.createToken(cardElement, {
            name,
            address_city: address.city,
            address_country: address.country,
            address_line1: address.line1,
            address_line2: address.line2 || undefined,
        });
        if (cardTokenError) {
            return Promise.reject('Cannot create card token');
        }
        return processPayment({
            paymentMethod: {
                card: cardElement,
                billing_details: addressData.value,
            },
            plan,
            cardToken,
        });
    }
    async function confirmPaymentSetup(stripe, setupIntentClientSecret, { setupIntent, paymentMethod, }) {
        if (setupIntent) {
            return { setupIntent, error: null };
        }
        return stripe.confirmCardSetup(setupIntentClientSecret, { payment_method: paymentMethod }, { handleActions: false });
    }
    async function processPayment({ plan, cardToken, ...paymentData }) {
        const stripe = stripeLoader.$;
        if (!stripe)
            return;
        const { setupIntentClientSecret } = paymentForm.$;
        if (!setupIntentClientSecret)
            return;
        const { setupIntent, error: confirmError } = await confirmPaymentSetup(stripe, setupIntentClientSecret, paymentData);
        if (confirmError) {
            // Report to the browser that the payment failed, prompting it to
            // re-show the payment interface, or show an error message and close
            // the payment interface.
            return Promise.reject('setupIntent error');
        }
        if (!setupIntent) {
            return Promise.reject('setupIntent error');
        }
        if (!setupIntent.payment_method) {
            return Promise.reject('paymentMethod is missing');
        }
        // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
        // handle the flow. If using an API version older than "2019-02-11"
        // instead check for: `paymentIntent.status === "requires_source_action"`.
        if (setupIntent?.status === 'requires_action') {
            // Let Stripe.js handle the rest of the payment flow.
            const { error } = await stripe.confirmCardSetup(setupIntentClientSecret);
            if (error) {
                console.error(error);
                return Promise.reject('3DS setupIntent error');
                // The payment failed -- ask your customer for a new payment method.
            }
        }
        const { payment_method } = setupIntent;
        const paymentMethodId = typeof payment_method === 'string' ? payment_method : payment_method.id;
        return mutateSubscribe(Query)({
            paymentMethodId,
            coupon: coupon.$?.isValid ? coupon.$.value : undefined,
            planId: +plan.id,
            cardToken: cardToken?.id,
        })
            .then(async (subscription) => {
            if (!subscription?.paymentIntent?.clientSecret) {
                return subscription;
            }
            // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
            // handle the flow. If using an API version older than "2019-02-11"
            // instead check for: `paymentIntent.status === "requires_source_action"`.
            if (setupIntent.status === 'requires_action') {
                // Let Stripe.js handle the rest of the payment flow.
                const { error } = await stripe.confirmCardPayment(subscription.paymentIntent.clientSecret);
                if (error) {
                    console.error(error);
                    // The payment failed -- ask your customer for a new payment method.
                }
                else {
                    subscription.status = 'ACTIVE';
                }
            }
            return subscription;
        })
            .then((subscription) => {
            customer.reload();
            notifcation.success(`You have successfully upgraded to the "${plan.name}" plan!`);
            return subscription;
        })
            .catch((error) => {
            notifcation.error(`Error during the payment`, {
                description: 'Please try again or contact our support',
            });
            return Promise.reject(error);
        });
    }
    return { startCardPaymentFlow, processPayment };
}
