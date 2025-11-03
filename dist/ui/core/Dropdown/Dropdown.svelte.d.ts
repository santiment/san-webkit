import type { ComponentProps, Snippet } from 'svelte';
import Popover from '../Popover/Popover.svelte';
declare class __sveltets_Render<T extends {
    icon?: string;
    title: string;
} | string> {
    props(): {
        class?: string;
        items: T[];
        valueKey?: keyof T | undefined;
        selected?: T | undefined;
        label?: Snippet<[T]> | undefined;
        trigger?: Snippet;
        triggerClass?: string;
        onSelect: (item: T) => void;
        closeDelay?: number;
    } & Omit<{
        class?: string;
        children?: import("bits-ui").DatePickerTriggerProps["child"];
        content: Snippet<[{
            close: () => void;
        }]>;
        noStyles?: boolean;
        isOpened?: boolean;
        matchTriggerWidth?: boolean;
        align?: import("bits-ui").DatePickerContentProps["align"];
        side?: import("bits-ui").DatePickerContentProps["side"];
        rootProps?: import("bits-ui").PopoverRootProps;
        contentProps?: import("bits-ui").DatePickerContentProps;
        portalTo?: ComponentProps<typeof Popover.Portal>["to"];
    }, "content" | "children">;
    events(): {};
    slots(): {};
    bindings(): "selected";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T extends {
        icon?: string;
        title: string;
    } | string>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T extends {
        icon?: string;
        title: string;
    } | string>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Dropdown: $$IsomorphicComponent;
type Dropdown<T extends {
    icon?: string;
    title: string;
} | string> = InstanceType<typeof Dropdown<T>>;
export default Dropdown;
