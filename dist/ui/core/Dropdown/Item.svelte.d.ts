import type { TBasicItem } from './types.js';
declare class __sveltets_Render<T extends TBasicItem> {
    props(): {
        class?: string;
        item: T;
        iconSize?: number;
        valueKey?: keyof T | undefined;
        onclick: () => void;
        skipCloseDelay?: boolean;
    } & Omit<import("svelte/elements.js").HTMLButtonAttributes & Omit<import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
        children: {
            false: "";
        };
        icon: {
            false: "";
        };
        accent: {
            green: "";
            blue: "";
            orange: "";
            custom: "";
        };
        variant: {
            fill: "px-5 fill-white-day text-white-day";
            border: "border bg-transparent px-2.5 fill-waterloo hover:bg-(--ghost-active-bg) active:bg-(--ghost-active-bg)";
            ghost: "px-2.5 fill-waterloo hover:bg-(--ghost-active-bg) active:bg-(--ghost-active-bg)";
            title: "rounded-none hover:underline";
            link: "rounded-none inline-flex text-green fill-green hover:underline select-text";
            plain: "rounded-none";
        };
        iconOnRight: {
            true: "flex-row-reverse justify-end";
        };
        explanation: {
            true: "expl-tooltip";
        };
        disabled: {
            true: "cursor-not-allowed";
        };
        rounded: {
            true: "rounded-[14px]";
        };
        circle: {
            true: "rounded-full";
        };
        size: {
            auto: "h-8 py-[5px] sm:h-10 sm:py-1.5 sm:text-base";
            md: "h-8 py-[5px]";
            lg: "h-10 py-1.5 text-base";
            sm: "p-0";
            xs: "p-0";
        };
        loading: {
            true: "loading";
        };
    }, undefined, "flex items-center cursor-pointer gap-2 rounded-md select-none", {
        children: {
            false: "";
        };
        icon: {
            false: "";
        };
        accent: {
            green: "";
            blue: "";
            orange: "";
            custom: "";
        };
        variant: {
            fill: "px-5 fill-white-day text-white-day";
            border: "border bg-transparent px-2.5 fill-waterloo hover:bg-(--ghost-active-bg) active:bg-(--ghost-active-bg)";
            ghost: "px-2.5 fill-waterloo hover:bg-(--ghost-active-bg) active:bg-(--ghost-active-bg)";
            title: "rounded-none hover:underline";
            link: "rounded-none inline-flex text-green fill-green hover:underline select-text";
            plain: "rounded-none";
        };
        iconOnRight: {
            true: "flex-row-reverse justify-end";
        };
        explanation: {
            true: "expl-tooltip";
        };
        disabled: {
            true: "cursor-not-allowed";
        };
        rounded: {
            true: "rounded-[14px]";
        };
        circle: {
            true: "rounded-full";
        };
        size: {
            auto: "h-8 py-[5px] sm:h-10 sm:py-1.5 sm:text-base";
            md: "h-8 py-[5px]";
            lg: "h-10 py-1.5 text-base";
            sm: "p-0";
            xs: "p-0";
        };
        loading: {
            true: "loading";
        };
    }, undefined, import("tailwind-variants").TVReturnTypeLike<{
        children: {
            false: "";
        };
        icon: {
            false: "";
        };
        accent: {
            green: "";
            blue: "";
            orange: "";
            custom: "";
        };
        variant: {
            fill: "px-5 fill-white-day text-white-day";
            border: "border bg-transparent px-2.5 fill-waterloo hover:bg-(--ghost-active-bg) active:bg-(--ghost-active-bg)";
            ghost: "px-2.5 fill-waterloo hover:bg-(--ghost-active-bg) active:bg-(--ghost-active-bg)";
            title: "rounded-none hover:underline";
            link: "rounded-none inline-flex text-green fill-green hover:underline select-text";
            plain: "rounded-none";
        };
        iconOnRight: {
            true: "flex-row-reverse justify-end";
        };
        explanation: {
            true: "expl-tooltip";
        };
        disabled: {
            true: "cursor-not-allowed";
        };
        rounded: {
            true: "rounded-[14px]";
        };
        circle: {
            true: "rounded-full";
        };
        size: {
            auto: "h-8 py-[5px] sm:h-10 sm:py-1.5 sm:text-base";
            md: "h-8 py-[5px]";
            lg: "h-10 py-1.5 text-base";
            sm: "p-0";
            xs: "p-0";
        };
        loading: {
            true: "loading";
        };
    }, undefined>>>, "children" | "icon" | "explanation"> & {
        as?: "button" | "label" | "div";
        for?: string;
        ref?: import("svelte-runes").SS<undefined | null | HTMLElement>;
        href?: string;
        class?: string;
        icon?: import("../Svg/types.js").TSvgId;
        iconSize?: number | string;
        iconHeight?: number | string;
        iconOnRight?: boolean;
        iconIllus?: boolean;
        explanation?: string;
        loading?: boolean;
        dropdown?: boolean;
        target?: import("svelte/elements.js").HTMLAnchorAttributes["target"];
        action?: import("svelte/action").Action;
        actionArgs?: any;
        children?: import("svelte").Snippet;
    }, "class" | "iconSize" | "onclick">;
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
declare const Item: $$IsomorphicComponent;
type Item<T extends TBasicItem> = InstanceType<typeof Item<T>>;
export default Item;
