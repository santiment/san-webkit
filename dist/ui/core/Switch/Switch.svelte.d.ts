import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        name?: string | undefined;
        disabled?: boolean | undefined;
        value?: string | undefined;
        required?: boolean | undefined;
        checked?: boolean | undefined;
        onCheckedChange?: import("bits-ui/dist/internal/types.js").OnChangeFn<boolean> | undefined;
        includeInput?: boolean | undefined;
        inputAttrs?: Partial<Omit<import("svelte/elements.js").HTMLInputAttributes, "value" | "name" | "type" | "checked">> | undefined;
        asChild?: boolean | undefined;
        el?: HTMLButtonElement | undefined;
    } & import("svelte/elements.js").HTMLButtonAttributes & {
        icon?: {
            active: {
                id: string;
                w: number;
                h?: number;
            };
            inactive: {
                id: string;
                w: number;
                h?: number;
            };
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
type SwitchProps_ = typeof __propDef.props;
export { SwitchProps_ as SwitchProps };
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
export default class Switch extends SvelteComponent<SwitchProps_, SwitchEvents, SwitchSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        name?: string | undefined;
        disabled?: boolean | undefined;
        value?: string | undefined;
        required?: boolean | undefined;
        checked?: boolean | undefined;
        onCheckedChange?: import("bits-ui/dist/internal/types.js").OnChangeFn<boolean> | undefined;
        includeInput?: boolean | undefined;
        inputAttrs?: Partial<Omit<import("svelte/elements.js").HTMLInputAttributes, "value" | "name" | "type" | "checked">> | undefined;
        asChild?: boolean | undefined;
        el?: HTMLButtonElement | undefined;
    } & import("svelte/elements.js").HTMLButtonAttributes & {
        icon?: {
            active: {
                id: string;
                w: number;
                h?: number;
            };
            inactive: {
                id: string;
                w: number;
                h?: number;
            };
        };
    }>);
    $$bindings: "";
}
