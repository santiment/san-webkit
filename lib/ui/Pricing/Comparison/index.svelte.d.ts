import { SvelteComponentTyped } from "svelte";
import Plan from './Plan.svelte';
declare const __propDef: {
    props: {
        class?: string | undefined;
        plans: SAN.Plan[];
        isShowingMore?: boolean | undefined;
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
