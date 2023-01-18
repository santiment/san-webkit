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
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
