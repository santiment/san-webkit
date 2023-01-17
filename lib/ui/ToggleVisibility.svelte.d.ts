import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        handleClick?: ((_: any) => any) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ToggleVisibilityProps = typeof __propDef.props;
export declare type ToggleVisibilityEvents = typeof __propDef.events;
export declare type ToggleVisibilitySlots = typeof __propDef.slots;
export default class ToggleVisibility extends SvelteComponentTyped<ToggleVisibilityProps, ToggleVisibilityEvents, ToggleVisibilitySlots> {
}
export {};
