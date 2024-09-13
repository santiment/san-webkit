import { SvelteComponent } from "svelte";
import type { ComponentProps } from 'svelte';
import MobileDrawer from './MobileDrawer.svelte';
declare const __propDef: {
    props: Pick<{
        close: () => void;
        children: import("svelte").Snippet<[{
            close: () => void;
        }]>;
        isNested?: boolean;
    }, "close" | "children"> & {
        onClose: ComponentProps<MobileDrawer>["close"];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MobileDialogProps = typeof __propDef.props;
export type MobileDialogEvents = typeof __propDef.events;
export type MobileDialogSlots = typeof __propDef.slots;
export default class MobileDialog extends SvelteComponent<MobileDialogProps, MobileDialogEvents, MobileDialogSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<Pick<{
        close: () => void;
        children: import("svelte").Snippet<[{
            close: () => void;
        }]>;
        isNested?: boolean;
    }, "close" | "children"> & {
        onClose: ComponentProps<MobileDrawer>["close"];
    }>);
    $$bindings: "";
}
export {};
