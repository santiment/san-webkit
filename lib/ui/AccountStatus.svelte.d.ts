import { SvelteComponentTyped } from "svelte";
export declare enum AccountStatusType {
    First = 0,
    Second = 1
}
import type { CustomerData } from './../stores/user';
declare const __propDef: {
    props: {
        currentUser: any;
        variant?: AccountStatusType.First | undefined;
        subscription: Pick<SAN.Subscription, 'plan' | 'trialEnd'>;
        customerData?: Pick<CustomerData, "annualDiscount" | "isEligibleForTrial"> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AccountStatusProps = typeof __propDef.props;
export type AccountStatusEvents = typeof __propDef.events;
export type AccountStatusSlots = typeof __propDef.slots;
export default class AccountStatus extends SvelteComponentTyped<AccountStatusProps, AccountStatusEvents, AccountStatusSlots> {
}
export {};
