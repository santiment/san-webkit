import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        items: any[];
        key: string | undefined;
        renderAmount?: number | undefined;
        maxHeight: number;
        defaultItemHeight?: number | undefined;
        viewportNode?: HTMLElement | undefined;
        renderHeight: any;
        hideEmptyResults?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            item: any;
            i: any;
        };
        empty: {};
    };
};
export declare type IndexProps = typeof __propDef.props;
export declare type IndexEvents = typeof __propDef.events;
export declare type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
