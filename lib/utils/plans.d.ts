export declare enum Product {
    SANAPI = "SanAPI",
    SANBASE = "Sanbase"
}
export declare enum ProductId {
    SANAPI = 1,
    SANBASE = 2
}
export declare const ProductNameById: {
    readonly 1: Product.SANAPI;
    readonly 2: Product.SANBASE;
};
export declare const keepNonDeprecatedPlans: (plans: SAN.Plan[]) => SAN.Plan[];
export declare const checkIsSanbaseProduct: (product: Pick<SAN.Product, 'id'>) => boolean;
export declare enum Plan {
    FREE = "FREE",
    PRO = "PRO",
    PRO_PLUS = "PRO_PLUS"
}
export declare const PlanName: {
    readonly FREE: "Free";
    readonly PRO: "Pro";
    readonly PRO_PLUS: "Pro+";
};
export declare enum Billing {
    MONTH = "month",
    YEAR = "year"
}
export declare const checkIsYearlyPlan: ({ interval }: Pick<SAN.Plan, 'interval'>) => boolean;
export declare const calcDiscount: (percentOff?: number) => number;
export declare const getPrice: (amount: number, percentOff?: number) => number;
export declare function getPlanMonthPrice({ amount, interval }: Pick<SAN.Plan, 'amount' | 'interval'>, percentOff?: number): number;
export declare const priceFormatter: (price: number) => string;
export declare const formatPrice: (plan: SAN.Plan) => string;
export declare const formatMonthlyPrice: (plan: SAN.Plan, percentOff?: number) => string;
export declare const onlyProLikePlans: ({ name }: SAN.Plan) => boolean;
export declare const onlyProAndFreeLikePlans: ({ name }: SAN.Plan) => boolean;
export declare function getAlternativePlan(plan: SAN.Plan, plans: SAN.Plan[]): SAN.Plan | undefined;
export declare function getSavedAmount(plan: SAN.Plan, altPlan: SAN.Plan, percentOff?: number): string;
