import { SvelteComponent } from "svelte";
import { type Snippet } from 'svelte';
import { type CreateDialogProps } from '@melt-ui/svelte';
declare const __propDef: {
    props: {
        class?: string;
        children: Snippet<[{
            close: () => void;
        }]>;
        onOpenChange: CreateDialogProps["onOpenChange"];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DesktopDialogProps = typeof __propDef.props;
export type DesktopDialogEvents = typeof __propDef.events;
export type DesktopDialogSlots = typeof __propDef.slots;
export default class DesktopDialog extends SvelteComponent<DesktopDialogProps, DesktopDialogEvents, DesktopDialogSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string;
        children: Snippet<[{
            close: () => void;
        }]>;
        onOpenChange: CreateDialogProps["onOpenChange"];
    }>);
    $$bindings: "";
}
export {};
