import { SvelteComponent } from "svelte";
import type { ComponentProps, Snippet } from 'svelte';
import Trigger from './Trigger.svelte';
declare const __propDef: {
    props: {
        class?: string | undefined;
        children: ComponentProps<Trigger>['children'];
        content: Snippet<[{
            close: () => void;
        }]>;
        noStyles?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PopoverProps = typeof __propDef.props;
export type PopoverEvents = typeof __propDef.events;
export type PopoverSlots = typeof __propDef.slots;
export default class Popover extends SvelteComponent<PopoverProps, PopoverEvents, PopoverSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string | undefined;
        children: (this: void, args_0: {
            ref: import("svelte-runes").SS<HTMLElement | null>;
        }) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
        content: (this: void, args_0: {
            close: () => void;
        }) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        };
        noStyles?: boolean | undefined;
    }>);
    $$bindings: "";
}
export {};
