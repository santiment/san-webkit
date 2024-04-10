import { SvelteComponentTyped } from "svelte";
import { Plan } from './../../utils/plans';
declare const __propDef: {
    props: {
        class?: string | undefined;
        plan: SAN.Plan;
        source: string;
        plans?: SAN.Plan[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PlanButtonProps = typeof __propDef.props;
export type PlanButtonEvents = typeof __propDef.events;
export type PlanButtonSlots = typeof __propDef.slots;
export default class PlanButton extends SvelteComponentTyped<PlanButtonProps, PlanButtonEvents, PlanButtonSlots> {
}
export {};
