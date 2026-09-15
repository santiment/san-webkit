export type TProduct = {
    id: string;
    plans: TSubscriptionPlan[];
};
export type TSubscriptionPlan = {
    id: string;
    name: string;
    interval: 'month' | 'year';
    amount: number;
    isDeprecated: boolean;
    product: {
        id: string;
    };
};
