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
export type UserPlanCardProps = typeof __propDef.props;
export type UserPlanCardEvents = typeof __propDef.events;
export type UserPlanCardSlots = typeof __propDef.slots;
export default class UserPlanCard extends SvelteComponentTyped<UserPlanCardProps, UserPlanCardEvents, UserPlanCardSlots> {
}
export {};
