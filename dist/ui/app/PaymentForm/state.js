import { ss, useObserve } from 'svelte-runes';
import { tap } from 'rxjs';
import { untrack } from 'svelte';
import { createCtx } from '../../../utils/index.js';
import { Mutation } from '../../../api/index.js';
import { CardMethod } from './PaymentScreen/PaymentMethodSelector/Card/index.js';
import { queryProductsWithPlans } from '../SubscriptionPlan/api.js';
import { getFormattedPlan } from '../SubscriptionPlan/utils.js';
const DEFAULT_PAYMENT_METHOD = CardMethod;
export const usePaymentFormCtx = createCtx('usePaymentFormCtx', () => {
    const paymentForm = ss({
        isCardPayment: DEFAULT_PAYMENT_METHOD === CardMethod,
        setupIntentClientSecret: '',
        cardElement: null,
        addressElement: null,
    });
    const billingPeriod = ss('month');
    const paymentMethod = ss(DEFAULT_PAYMENT_METHOD);
    const productsWithPlans = ss([]);
    const plan = ss({
        selected: null,
        month: null,
        year: null,
        formatted: null,
    });
    const update = () => {
        paymentForm.$ = paymentForm.$;
    };
    useObserve(() => queryProductsWithPlans()().pipe(tap((data) => (productsWithPlans.$ = data))));
    useObserve(() => mutateCreateStripeSetupIntent()().pipe(tap((clientSecret) => {
        paymentForm.$.setupIntentClientSecret = clientSecret;
        update();
    })));
    return {
        paymentForm,
        paymentMethod,
        billingPeriod,
        subscriptionPlan: plan,
        selectPaymentMethod(option) {
            paymentMethod.$ = option;
            paymentForm.$.isCardPayment = option === CardMethod;
            update();
        },
        selectSubscriptionPlan(selectedPlan) {
            untrack(() => {
                if (!selectedPlan) {
                    return (plan.$ = { selected: null, month: null, year: null, formatted: null });
                }
                if (plan.$.month?.name !== selectedPlan.name) {
                    const productPlans = productsWithPlans.$.find((product) => product.id === selectedPlan.product.id);
                    const [monthPlan, yearPlan] = productPlans?.plans
                        .filter((plan) => plan.isDeprecated === false && plan.name === selectedPlan.name)
                        .sort((a, b) => a.amount - b.amount) || [null, null];
                    Object.assign(plan.$, {
                        month: monthPlan,
                        year: yearPlan,
                        formatted: monthPlan && getFormattedPlan(monthPlan, yearPlan),
                    });
                }
                billingPeriod.$ = selectedPlan.interval;
                plan.$.selected = selectedPlan;
                plan.$ = plan.$;
            });
        },
    };
});
export const mutateCreateStripeSetupIntent = Mutation(() => `mutation { createStripeSetupIntent { clientSecret } }`, (data) => data.createStripeSetupIntent.clientSecret);
