import { SvelteComponentTyped } from "svelte";
import { Plan } from './../../../utils/plans';
declare const __propDef: {
    props: {
        plan: SAN.Plan;
        plans: SAN.Plan[];
        discount?: number | undefined;
        isEligibleForTrial: boolean;
        isLoggedIn?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PlanProps = typeof __propDef.props;
export declare type PlanEvents = typeof __propDef.events;
export declare type PlanSlots = typeof __propDef.slots;
export default class Plan extends SvelteComponentTyped<PlanProps, PlanEvents, PlanSlots> {
}
export {};
