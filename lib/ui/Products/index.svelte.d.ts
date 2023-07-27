import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        activeClass?: string | undefined;
        dropdownClassName?: string | undefined;
        tooltipClass?: string | undefined;
        isCompact?: boolean | undefined;
        isColumn?: boolean | undefined;
        isOpened?: undefined;
        active?: string | undefined;
        closeTimeout?: undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            trigger: (node: HTMLElement) => {
                destroy: () => void;
            };
        };
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
