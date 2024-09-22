import { SvelteComponentTyped } from "svelte";
import { Plan } from './../../utils/plans';
export declare const showPaymentDialog: (props?: any) => any;
export declare const dataPreloader: (node: HTMLElement) => void;
declare const __propDef: {
    props: {
        [x: string]: any;
        DialogPromise: SAN.DialogController;
        plan?: Plan.PRO | undefined;
        interval?: SAN.PlanInterval | undefined;
        plansFilter?: ((_: SAN.Plan) => boolean) | undefined;
        onPaymentSuccess?: (() => void) | undefined;
        onPaymentError: any;
        source: string;
        planData: SAN.Plan;
        plans?: SAN.Plan[] | undefined;
    };
    events: {
        submit: SubmitEvent;
    } & {
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
