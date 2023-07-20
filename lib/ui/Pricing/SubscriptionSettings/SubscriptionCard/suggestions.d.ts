export declare const PRO_SUGGESTION: {
    label: string;
    badge: string;
    badgeIcon: {
        id: string;
        w: number;
    };
    green: boolean;
};
export declare const PRO_PLUS_SUGGESTION: {
    label: string;
    badge: string;
    badgeIcon: {
        id: string;
        w: number;
    };
    orange: boolean;
};
export declare function getSuggestions(userPlan: null | SAN.Plan, annualDiscount: SAN.Customer['annualDiscount']): any;
