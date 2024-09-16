import { ss, ssd, useObserve } from 'svelte-runes';
import { tap } from 'rxjs';
import { untrack } from 'svelte';
import { createCtx } from '../../../utils/index.js';
import { Mutation } from '../../../api/index.js';
import { CardMethod } from './PaymentScreen/PaymentMethodSelector/Card/index.js';
import { queryProductsWithPlans } from '../SubscriptionPlan/api.js';
import { getFormattedPlan } from '../SubscriptionPlan/utils.js';
export const SCREENS = [
    { name: '1. Choose your plan', backLabel: 'Choose plan' },
    { name: '2. Payment details' },
];
const DEFAULT_PAYMENT_METHOD = CardMethod;
export const usePaymentFormCtx = createCtx('usePaymentFormCtx', ({ defaultPlan = null } = {}) => {
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
        selected: defaultPlan,
        month: null,
        year: null,
        formatted: null,
    });
    const coupon = ss(null);
    const discount = ssd(() => {
        const selectedPlan = plan.$.selected;
        if (!selectedPlan)
            return null;
        if (plan.$.formatted?.isBusiness)
            return null;
        const discountCoupon = coupon.$;
        if (!discountCoupon || discountCoupon.isValid === false)
            return;
        const amountOff = Math.floor(selectedPlan.amount * (discountCoupon.percentOff / 100));
        const amount = selectedPlan.amount - amountOff;
        return {
            description: 'Promo code',
            percentOff: discountCoupon.percentOff,
            amount,
            amountOff,
            price: Math.ceil(amount / 100),
            priceOff: Math.floor(amountOff / 100),
        };
    });
    const update = () => {
        paymentForm.$ = paymentForm.$;
    };
    useObserve(() => queryProductsWithPlans()().pipe(tap((data) => (productsWithPlans.$ = data)), tap(() => defaultPlan && selectSubscriptionPlan(defaultPlan))));
    useObserve(() => mutateCreateStripeSetupIntent()().pipe(tap((clientSecret) => {
        paymentForm.$.setupIntentClientSecret = clientSecret;
        update();
    })));
    function selectSubscriptionPlan(selectedPlan) {
        untrack(() => {
            if (!selectedPlan) {
                return (plan.$ = { selected: null, month: null, year: null, formatted: null });
            }
            // NOTE: Checking if a plan with a different name was selected
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
                coupon.$ = null;
            }
            billingPeriod.$ = selectedPlan.interval;
            plan.$.selected = selectedPlan;
            plan.$ = plan.$;
        });
    }
    return {
        paymentForm,
        paymentMethod,
        billingPeriod,
        subscriptionPlan: plan,
        coupon,
        discount,
        productsWithPlans,
        selectPaymentMethod(option) {
            paymentMethod.$ = option;
            paymentForm.$.isCardPayment = option === CardMethod;
            update();
        },
        selectSubscriptionPlan,
    };
});
export const mutateCreateStripeSetupIntent = Mutation(() => `mutation { createStripeSetupIntent { clientSecret } }`, (data) => data.createStripeSetupIntent.clientSecret);
