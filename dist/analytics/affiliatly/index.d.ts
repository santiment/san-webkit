export declare const AFFILIATLY_PROXY_ROUTE = "/api/track/affiliatly";
type TConversionOptions = {
    couponCode?: string;
    clientEmail?: string;
};
export declare const trackAffiliatlySignup: (userId: string | number) => Promise<void>;
export declare const trackAffiliatlyPayment: (orderId: string | number, amount: number, options?: TConversionOptions) => Promise<void>;
export {};
