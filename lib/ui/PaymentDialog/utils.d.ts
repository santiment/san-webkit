/// <reference types="stripe-v3" />
export declare const CardBrandIllustration: {
    MasterCard: {
        id: string;
        w: number;
        h: number;
    };
    mastercard: {
        id: string;
        w: number;
        h: number;
    };
    Visa: {
        id: string;
        w: number;
        h: number;
    };
    visa: {
        id: string;
        w: number;
        h: number;
    };
};
export declare const checkSanDiscount: (sanBalance: number) => boolean;
export declare function mapPlans(plans: SAN.Plan[], ...plansFilters: ((plan: SAN.Plan) => boolean)[]): any;
type FormData = {
    name: string;
    discount?: string;
};
export declare function getPaymentFormData(form: HTMLFormElement): FormData;
export declare function createCardToken(stripe: stripe.Stripe, card: stripe.elements.Element, checkoutInfo: {
    [key: string]: any;
}): Promise<stripe.Token>;
export declare function buyPlan(customer$: SAN.CustomerStore, plan: SAN.Plan, stripe: stripe.Stripe, card: stripe.elements.Element, form: {
    [key: string]: any;
}, source: string, savedCard?: SAN.PaymentCard, hasSanTokensDiscount?: boolean): Promise<any>;
export declare function onPaymentSuccess(data: any, source: any, customer$: SAN.CustomerStore, method?: string): Promise<any>;
export declare function onPaymentError(error: any, source: any, method?: string): Promise<never>;
export {};
