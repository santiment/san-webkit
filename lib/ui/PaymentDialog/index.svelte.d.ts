import { SvelteComponentTyped } from "svelte";
import { Plan } from './../../utils/plans';
export declare const showPaymentDialog: (props?: any) => Promise<unknown>;
export declare const dataPreloader: (node: HTMLElement) => void;
declare const __propDef: {
    props: {
        [x: string]: any;
        DialogPromise: SAN.DialogController;
        plan?: Plan.PRO | undefined;
        interval?: SAN.PlanInterval | undefined;
        isSinglePlan?: boolean | undefined;
        plansFilter?: (({ name }: SAN.Plan) => boolean) | undefined;
        trialDaysLeft?: number | undefined;
        onPaymentSuccess?: (() => void) | undefined;
        onPaymentError: any;
        source: string;
        planData: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IndexProps = typeof __propDef.props;
export declare type IndexEvents = typeof __propDef.events;
export declare type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
