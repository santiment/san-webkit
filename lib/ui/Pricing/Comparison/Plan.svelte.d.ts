import { SvelteComponentTyped } from "svelte";
import { Plan } from './../../../utils/plans';
declare const __propDef: {
    props: {
        plan: SAN.Plan;
        plans?: SAN.Plan[] | undefined;
        discount?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlanProps = typeof __propDef.props;
export type PlanEvents = typeof __propDef.events;
export type PlanSlots = typeof __propDef.slots;
export default class Plan extends SvelteComponentTyped<PlanProps, PlanEvents, PlanSlots> {
}
export {};
