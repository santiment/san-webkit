import { SvelteComponentTyped } from "svelte";
import { Billing } from './../../../utils/plans';
declare const __propDef: {
    props: {
        class?: string | undefined;
        billing?: Billing.MONTH | undefined;
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
