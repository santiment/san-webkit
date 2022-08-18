export declare const COMPARE_TABLE: ({
    category: string;
    features: ({
        name: string;
        isLimit: boolean;
        description?: undefined;
        isCheck?: undefined;
        isAccess?: undefined;
    } | {
        name: string;
        description: string;
        isCheck: boolean;
        isLimit?: undefined;
        isAccess?: undefined;
    } | {
        name: string;
        isAccess: boolean;
        isLimit?: undefined;
        description?: undefined;
        isCheck?: undefined;
    })[];
    link?: undefined;
    isCheck?: undefined;
} | {
    category: string;
    link: {
        title: string;
        url: string;
    };
    features: {
        name: string;
        postfix: string;
    }[];
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
})[];
export declare const FREE_COMPARED_FEATURES: {
    'Browser tabs': string;
    'Bi-weekly report': boolean;
    'Pro Insights': boolean;
    'API calls / minute': number;
    'API calls / hour': number;
    'API calls / month': string;
    'Priority support': boolean;
    'Dedicated account manager': boolean;
    'Custom onboarding & education': boolean;
    "Chart's data period": boolean;
    'Download chart as SCV': boolean;
    'Hide watermark on charts': boolean;
    'Embed charts': string;
    'Custom Alerts': number;
    'Alert durations': string;
    Webhooks: boolean;
    Screeners: number;
    'Screener filters': string;
    'Google Sheets Plugin': boolean;
    CSV: boolean;
};
export declare const PRO_COMPARED_FEATURES: {
    'API calls / minute': number;
    'API calls / hour': number;
    'API calls / month': string;
    'Dedicated account manager': boolean;
    'Custom onboarding & education': boolean;
    'Hide watermark on charts': boolean;
    'Embed charts': string;
    'Custom Alerts': number;
};
export declare const PRO_PLUS_COMPARED_FEATURES: {
    'API calls / minute': number;
    'API calls / hour': number;
    'API calls / month': string;
};
export declare const PlanFeatures: {
    FREE: {
        'Browser tabs': string;
        'Bi-weekly report': boolean;
        'Pro Insights': boolean;
        'API calls / minute': number;
        'API calls / hour': number;
        'API calls / month': string;
        'Priority support': boolean;
        'Dedicated account manager': boolean;
        'Custom onboarding & education': boolean;
        "Chart's data period": boolean;
        'Download chart as SCV': boolean;
        'Hide watermark on charts': boolean;
        'Embed charts': string;
        'Custom Alerts': number;
        'Alert durations': string;
        Webhooks: boolean;
        Screeners: number;
        'Screener filters': string;
        'Google Sheets Plugin': boolean;
        CSV: boolean;
    };
    PRO: {
        'API calls / minute': number;
        'API calls / hour': number;
        'API calls / month': string;
        'Dedicated account manager': boolean;
        'Custom onboarding & education': boolean;
        'Hide watermark on charts': boolean;
        'Embed charts': string;
        'Custom Alerts': number;
    };
    PRO_PLUS: {
        'API calls / minute': number;
        'API calls / hour': number;
        'API calls / month': string;
    };
};
