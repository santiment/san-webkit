import type { SelectContentProps, Selected } from 'bits-ui';
import type { Snippet } from 'svelte';
import { Select } from 'bits-ui';
declare class __sveltets_Render<T> {
    props(): {
        items: Selected<T>[];
        selected?: Selected<T> | undefined;
        onSelect?: ((value: Selected<T> | undefined) => void) | undefined;
        side?: SelectContentProps["side"];
        align?: SelectContentProps["align"];
        triggerClass?: string;
        contentClass?: string;
        option?: Snippet<[Selected<T>]> | undefined;
        matchTriggerWidth?: boolean;
    } & import("svelte/elements").HTMLButtonAttributes & Omit<import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    }, undefined, "flex transition-colors items-center cursor-pointer gap-2 rounded-md", import("tailwind-variants/dist/config").TVConfig<{
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
    }, undefined, "flex transition-colors items-center cursor-pointer gap-2 rounded-md", import("tailwind-variants/dist/config").TVConfig<{
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
        icon?: import("../Svg").TSvgId;
        class?: string;
        iconSize?: number | string;
        iconHeight?: number | string;
        iconOnRight?: boolean;
        explanation?: string;
        loading?: boolean;
        dropdown?: boolean;
        active?: boolean;
        target?: import("svelte/elements").HTMLAnchorAttributes["target"];
        action?: import("svelte/action").Action;
        actionArgs?: any;
        children?: Snippet;
    };
    events(): {};
    slots(): {};
    bindings(): "selected";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {}): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Select: $$IsomorphicComponent;
type Select<T> = InstanceType<typeof Select<T>>;
export default Select;
