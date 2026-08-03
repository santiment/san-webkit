export declare const AFFILIATLY_PROXY_ROUTE = "/api/track/affiliatly";
export declare const TRACKING_QUERY_KEYS: readonly ["aff", "fid", "ref", "air", "rfsn", "aa", "tr", "abc", "coupon-code", "hair"];
type TConversionOptions = {
    couponCode?: string;
    clientEmail?: string;
};
export declare const trackAffiliatlySignup: (userId: string | number) => void;
export declare const trackAffiliatlyPayment: (orderId: string | number, amount: number, options?: TConversionOptions) => void;
export declare function trackAffiliatlyVisit(searchParams: URLSearchParams): void;
export {};
