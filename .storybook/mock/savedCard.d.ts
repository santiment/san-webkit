export declare function mockSavedCard(savedCard: boolean): {
    last4: string;
    expMonth: number;
    expYear: number;
    brand: string;
    error?: undefined;
} | {
    error: {
        message: string;
    };
    last4?: undefined;
    expMonth?: undefined;
    expYear?: undefined;
    brand?: undefined;
};
export declare const SAVED_CARD_MOCK: {
    readonly schema: "savedCard";
    readonly query: "fetchDefaultPaymentInstrument";
    readonly mock: typeof mockSavedCard;
};
