import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string | undefined;
        onDragStart: (e: MouseEvent) => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            gridItem: (node: HTMLElement) => void;
        };
    };
};
export type ItemProps = typeof __propDef.props;
export type ItemEvents = typeof __propDef.events;
export type ItemSlots = typeof __propDef.slots;
export default class Item extends SvelteComponentTyped<ItemProps, ItemEvents, ItemSlots> {
}
export {};
