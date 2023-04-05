import { SvelteComponentTyped } from "svelte";
import type { CustomerData } from './../../stores/user';
import { AccountStatusType } from './../../ui/AccountStatus.svelte';
declare const __propDef: {
    props: {
        ui: any;
        currentUser: any;
        onLogoutClick: any;
        isOpened?: boolean | undefined;
        tooltipClass?: string | undefined;
        variant?: AccountStatusType.First | undefined;
        subscription: Pick<SAN.Subscription, 'plan' | 'trialEnd'>;
        customerData?: Pick<CustomerData, "annualDiscount" | "isEligibleForTrial"> | undefined;
        isAppUpdateAvailable?: boolean | undefined;
        version?: string | undefined;
        isShowingFollowers?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
