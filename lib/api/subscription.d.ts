export declare const queryPaymentCard: () => Promise<any>;
export declare const clearPaymentCardQuery: () => void;
export declare const mutateUpdatePaymentCard: (cardToken: string) => Promise<any>;
export declare const mutateDeletePaymentCard: () => Promise<any>;
export declare const UPDATE_SUBSCRIPTION_MUTATION: (currentSubscriptionId: number, planId: number) => string;
export declare const mutateUpdateSubscription: (currentSubscriptionId: number, planId: number) => Promise<any>;
export declare const queryBillingHistory: () => Promise<any>;
export declare const mutateCancelSubscription: (id: number) => Promise<SAN.API.QueryBase>;
type UpcomingInvoiceQuery = SAN.API.Query<'upcomingInvoice', {
    dueDate: string;
    amount: number;
}>;
export declare const queryUpcomingInvoice: (subscriptionId: number) => Promise<UpcomingInvoiceQuery>;
export {};
