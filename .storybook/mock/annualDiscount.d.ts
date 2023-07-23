export type AnnualDiscount = null | 35 | 50;
export declare function mockAnnualDiscount(annualDiscount: AnnualDiscount): {
    isEligible: boolean;
    discount: {
        percentOff: AnnualDiscount;
        expireAt: any;
    };
};
export declare const ANNUAL_DISCOUNT_MOCK: {
    readonly schema: "annualDiscount";
    readonly query: "checkAnnualDiscountEligibility";
    readonly mock: typeof mockAnnualDiscount;
};
