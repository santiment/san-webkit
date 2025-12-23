import type { ComponentProps, Snippet } from 'svelte';
import type { TBasicItem } from './types.js';
import Popover from '../Popover/index.js';
declare class __sveltets_Render<T extends TBasicItem> {
    props(): {
        class?: string;
        selected?: T | undefined;
        trigger?: Snippet;
        label?: Snippet<[T]> | undefined;
        children: Snippet;
        triggerClass?: string;
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
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T extends TBasicItem>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T extends TBasicItem>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Dropdown: $$IsomorphicComponent;
type Dropdown<T extends TBasicItem> = InstanceType<typeof Dropdown<T>>;
export default Dropdown;
