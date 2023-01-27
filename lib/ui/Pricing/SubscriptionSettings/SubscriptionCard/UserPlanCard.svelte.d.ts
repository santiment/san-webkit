import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        plan: any;
        subscription: any;
        discount: any;
        suggestionsCount: any;
        isEligibleForTrial?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type UserPlanCardProps = typeof __propDef.props;
export declare type UserPlanCardEvents = typeof __propDef.events;
export declare type UserPlanCardSlots = typeof __propDef.slots;
export default class UserPlanCard extends SvelteComponentTyped<UserPlanCardProps, UserPlanCardEvents, UserPlanCardSlots> {
}
export {};
