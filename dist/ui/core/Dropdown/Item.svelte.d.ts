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
            false: string;
        };
        icon: {
            false: string;
        };
        accent: {
            green: string;
            blue: string;
            orange: string;
            custom: string;
        };
        variant: {
            fill: string;
            border: string;
            ghost: string;
            title: string;
            link: string;
            plain: string;
        };
        iconOnRight: {
            true: string;
        };
        explanation: {
            true: string;
        };
        disabled: {
            true: string;
        };
        rounded: {
            true: string;
        };
        circle: {
            true: string;
        };
        size: {
            auto: string;
            md: string;
            lg: string;
            sm: string;
            xs: string;
        };
        loading: {
            true: string;
        };
    }, undefined, "flex items-center cursor-pointer gap-2 rounded-md", import("tailwind-variants/dist/config.js").TVConfig<{
        children: {
            false: string;
        };
        icon: {
            false: string;
        };
        accent: {
            green: string;
            blue: string;
            orange: string;
            custom: string;
        };
        variant: {
            fill: string;
            border: string;
            ghost: string;
            title: string;
            link: string;
            plain: string;
        };
        iconOnRight: {
            true: string;
        };
        explanation: {
            true: string;
        };
        disabled: {
            true: string;
        };
        rounded: {
            true: string;
        };
        circle: {
            true: string;
        };
        size: {
            auto: string;
            md: string;
            lg: string;
            sm: string;
            xs: string;
        };
        loading: {
            true: string;
        };
    }, {
        children: {
            false: string;
        };
        icon: {
            false: string;
        };
        accent: {
            green: string;
            blue: string;
            orange: string;
            custom: string;
        };
        variant: {
            fill: string;
            border: string;
            ghost: string;
            title: string;
            link: string;
            plain: string;
        };
        iconOnRight: {
            true: string;
        };
        explanation: {
            true: string;
        };
        disabled: {
            true: string;
        };
        rounded: {
            true: string;
        };
        circle: {
            true: string;
        };
        size: {
            auto: string;
            md: string;
            lg: string;
            sm: string;
            xs: string;
        };
        loading: {
            true: string;
        };
    }>, {
        children: {
            false: string;
        };
        icon: {
            false: string;
        };
        accent: {
            green: string;
            blue: string;
            orange: string;
            custom: string;
        };
        variant: {
            fill: string;
            border: string;
            ghost: string;
            title: string;
            link: string;
            plain: string;
        };
        iconOnRight: {
            true: string;
        };
        explanation: {
            true: string;
        };
        disabled: {
            true: string;
        };
        rounded: {
            true: string;
        };
        circle: {
            true: string;
        };
        size: {
            auto: string;
            md: string;
            lg: string;
            sm: string;
            xs: string;
        };
        loading: {
            true: string;
        };
    }, undefined, import("tailwind-variants").TVReturnType<{
        children: {
            false: string;
        };
        icon: {
            false: string;
        };
        accent: {
            green: string;
            blue: string;
            orange: string;
            custom: string;
        };
        variant: {
            fill: string;
            border: string;
            ghost: string;
            title: string;
            link: string;
            plain: string;
        };
        iconOnRight: {
            true: string;
        };
        explanation: {
            true: string;
        };
        disabled: {
            true: string;
        };
        rounded: {
            true: string;
        };
        circle: {
            true: string;
        };
        size: {
            auto: string;
            md: string;
            lg: string;
            sm: string;
            xs: string;
        };
        loading: {
            true: string;
        };
    }, undefined, "flex items-center cursor-pointer gap-2 rounded-md", import("tailwind-variants/dist/config.js").TVConfig<{
        children: {
            false: string;
        };
        icon: {
            false: string;
        };
        accent: {
            green: string;
            blue: string;
            orange: string;
            custom: string;
        };
        variant: {
            fill: string;
            border: string;
            ghost: string;
            title: string;
            link: string;
            plain: string;
        };
        iconOnRight: {
            true: string;
        };
        explanation: {
            true: string;
        };
        disabled: {
            true: string;
        };
        rounded: {
            true: string;
        };
        circle: {
            true: string;
        };
        size: {
            auto: string;
            md: string;
            lg: string;
            sm: string;
            xs: string;
        };
        loading: {
            true: string;
        };
    }, {
        children: {
            false: string;
        };
        icon: {
            false: string;
        };
        accent: {
            green: string;
            blue: string;
            orange: string;
            custom: string;
        };
        variant: {
            fill: string;
            border: string;
            ghost: string;
            title: string;
            link: string;
            plain: string;
        };
        iconOnRight: {
            true: string;
        };
        explanation: {
            true: string;
        };
        disabled: {
            true: string;
        };
        rounded: {
            true: string;
        };
        circle: {
            true: string;
        };
        size: {
            auto: string;
            md: string;
            lg: string;
            sm: string;
            xs: string;
        };
        loading: {
            true: string;
        };
    }>, unknown, unknown, undefined>>>, "children" | "icon" | "explanation"> & {
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
