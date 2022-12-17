import { SvelteComponentTyped } from "svelte";
import Plan from './Plan.svelte';
declare const __propDef: {
    props: {
        class?: string | undefined;
        plans: SAN.Plan[];
        isShowingMore?: boolean | undefined;
        isLoggedIn?: boolean | undefined;
        isEligibleForTrial?: boolean | undefined;
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
