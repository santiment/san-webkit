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
export declare const nonDeprecatedFilter: ({ isDeprecated }: {
    isDeprecated: boolean;
}) => boolean;
export declare const keepNonDeprecatedPlans: (plans: SAN.Plan[]) => SAN.Plan[];
export declare const checkIsSanbaseProduct: (product: Pick<SAN.Product, 'id'>) => boolean;
export declare const checkIsSanApiProduct: (product: Pick<SAN.Product, 'id'>) => boolean;
export declare enum Plan {
    PRO_PLUS = "PRO_PLUS",
    FREE = "FREE",
    PRO = "PRO",
    MAX = "MAX",
    BUSINESS_PRO = "BUSINESS_PRO",
    BUSINESS_MAX = "BUSINESS_MAX",
    CUSTOM = "CUSTOM"
}
export declare const INDIVIDUAL_PLANS: Set<Plan>;
export declare const BUSINESS_PLANS: Set<Plan>;
export declare const PlanName: {
    readonly PRO_PLUS: "Pro+";
    readonly FREE: "FREE";
    readonly PRO: "Sanbase Pro";
    readonly MAX: "Sanbase Max";
    readonly BUSINESS_PRO: "Business Pro";
    readonly BUSINESS_MAX: "Business Max";
    readonly CUSTOM: "Enterprise";
};
export declare enum Billing {
    MONTH = "month",
    YEAR = "year"
}
export declare enum PlanType {
    INDIVIDUAL = "individual",
    BUSINESS = "business"
}
export declare const checkIsIndividualPlan: ({ name }: SAN.Plan) => boolean;
export declare const checkIsBusinessPlan: ({ name }: SAN.Plan) => boolean;
export declare const checkIsPlanWithPrice: ({ amount }: SAN.Plan) => boolean;
export declare const checkIsYearlyPlan: ({ interval }: Pick<SAN.Plan, 'interval'>) => boolean;
export declare const calcDiscount: (percentOff?: number) => number;
export declare function calculateYearDiscount(monthPlan: SAN.Plan, yearPlan: SAN.Plan): number;
export declare const getPrice: (amount: number, percentOff?: number) => number;
export declare function getPlanMonthPrice({ amount, interval }: Pick<SAN.Plan, 'amount' | 'interval'>, percentOff?: number): number;
export declare const priceFormatter: (price: number) => string;
export declare const formatPrice: (plan: Pick<SAN.Plan, 'amount'>) => string;
export declare const formatMonthlyPrice: (plan: SAN.Plan, percentOff?: number) => string;
export declare const onlyProLikePlans: ({ name }: SAN.Plan) => boolean;
export declare const onlyProAndFreeLikePlans: ({ name }: SAN.Plan) => boolean;
export declare function getAlternativePlan(plan: SAN.Plan, plans: SAN.Plan[]): SAN.Plan | undefined;
export declare function getSavedAmount(plan: SAN.Plan, altPlan: SAN.Plan, percentOff?: number): string;
