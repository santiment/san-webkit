import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        items: {
            name: string;
        }[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TagsProps = typeof __propDef.props;
export type TagsEvents = typeof __propDef.events;
export type TagsSlots = typeof __propDef.slots;
export default class Tags extends SvelteComponent<TagsProps, TagsEvents, TagsSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        items: {
            name: string;
        }[];
    }>);
    $$bindings: "";
}
export {};
