import { CURRENT_USER_MOCK } from './user';
import { ANNUAL_DISCOUNT_MOCK } from './annualDiscount';
import { SAVED_CARD_MOCK } from './savedCard';
export declare const MOCKS: readonly [{
    readonly schema: "currentUser";
    readonly query: "currentUser";
    readonly mock: typeof import("./user").mockUser;
}, {
    readonly schema: "annualDiscount";
    readonly query: "checkAnnualDiscountEligibility";
    readonly mock: typeof import("./annualDiscount").mockAnnualDiscount;
}, {
    readonly schema: "savedCard";
    readonly query: "fetchDefaultPaymentInstrument";
    readonly mock: typeof import("./savedCard").mockSavedCard;
}];
export declare function ApiMock(req: any, schema: Record<string, any>): Promise<unknown>;
type Mock<T> = T extends {
    mock: (arg: infer S) => any;
} ? S : never;
declare module '@storybook/svelte' {
    interface Parameters {
        mockApi?: () => {
            annualDiscount?: Mock<typeof ANNUAL_DISCOUNT_MOCK>;
            currentUser?: Mock<typeof CURRENT_USER_MOCK>;
            savedCard?: Mock<typeof SAVED_CARD_MOCK>;
        } & Record<string, any>;
    }
}
export {};
