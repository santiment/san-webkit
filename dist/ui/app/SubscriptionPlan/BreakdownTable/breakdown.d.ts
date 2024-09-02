export type TBreakdownFeature = {
    name: string;
    description?: string;
    isLimit?: boolean;
    isAccess?: boolean;
    isCheck?: boolean;
    postfix?: string;
};
export declare const CONSUMER_PLANS_BREAKDOWN: ({
    category: string;
    features: ({
        name: string;
        description: string;
        isCheck: boolean;
        isAccess?: undefined;
    } | {
        name: string;
        isAccess: boolean;
        description?: undefined;
        isCheck?: undefined;
    })[];
    link?: undefined;
    isCheck?: undefined;
} | {
    category: string;
    features: never[];
    link: {
        title: string;
        url: string;
    };
    isCheck?: undefined;
} | {
    category: string;
    features: ({
        name: string;
        description: string;
        isAccess: boolean;
        isCheck?: undefined;
    } | {
        name: string;
        isCheck: boolean;
        description?: undefined;
        isAccess?: undefined;
    } | {
        name: string;
        isAccess: boolean;
        description?: undefined;
        isCheck?: undefined;
    })[];
    link?: undefined;
    isCheck?: undefined;
} | {
    category: string;
    features: ({
        name: string;
        isLimit: boolean;
        description?: undefined;
        isCheck?: undefined;
    } | {
        name: string;
        description: string;
        isLimit: boolean;
        isCheck?: undefined;
    } | {
        name: string;
        isCheck: boolean;
        isLimit?: undefined;
        description?: undefined;
    })[];
    link?: undefined;
    isCheck?: undefined;
} | {
    category: string;
    features: ({
        name: string;
        isLimit: boolean;
        isAccess?: undefined;
    } | {
        name: string;
        isAccess: boolean;
        isLimit?: undefined;
    })[];
    link?: undefined;
    isCheck?: undefined;
} | {
    category: string;
    isCheck: boolean;
    features: {
        name: string;
    }[];
    link?: undefined;
})[];
export declare const BUSINESS_PLANS_BREAKDOWN: ({
    category: string;
    features: never[];
    link: {
        title: string;
        url: string;
    };
    isCheck?: undefined;
} | {
    category: string;
    isCheck: boolean;
    features: {
        name: string;
    }[];
    link?: undefined;
} | {
    category: string;
    features: ({
        name: string;
        description: string;
        isAccess: boolean;
        isCheck?: undefined;
    } | {
        name: string;
        isCheck: boolean;
        description?: undefined;
        isAccess?: undefined;
    } | {
        name: string;
        isAccess: boolean;
        description?: undefined;
        isCheck?: undefined;
    })[];
    link?: undefined;
    isCheck?: undefined;
} | {
    category: string;
    features: ({
        name: string;
        isLimit: boolean;
        description?: undefined;
        isCheck?: undefined;
    } | {
        name: string;
        description: string;
        isLimit: boolean;
        isCheck?: undefined;
    } | {
        name: string;
        isCheck: boolean;
        isLimit?: undefined;
        description?: undefined;
    })[];
    link?: undefined;
    isCheck?: undefined;
} | {
    category: string;
    features: ({
        name: string;
        isLimit: boolean;
        isAccess?: undefined;
    } | {
        name: string;
        isAccess: boolean;
        isLimit?: undefined;
    })[];
    link?: undefined;
    isCheck?: undefined;
})[];
export declare const SubscriptionPlanBreakdown: Record<string, undefined | Record<string, any>>;
