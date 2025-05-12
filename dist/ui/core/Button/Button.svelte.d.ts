import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { Action } from 'svelte/action';
import type { SS } from 'svelte-runes';
import { type VariantProps } from 'tailwind-variants';
import { type TSvgId } from '../Svg/index.js';
declare const Button: import("svelte").Component<HTMLButtonAttributes & Omit<VariantProps<import("tailwind-variants").TVReturnType<{
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
}, undefined, "flex items-center cursor-pointer gap-2 rounded-md", import("tailwind-variants/dist/config").TVConfig<{
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
}, undefined, "flex items-center cursor-pointer gap-2 rounded-md", import("tailwind-variants/dist/config").TVConfig<{
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
    ref?: SS<undefined | null | HTMLElement>;
    href?: string;
    icon?: TSvgId;
    class?: string;
    iconSize?: number | string;
    iconHeight?: number | string;
    iconOnRight?: boolean;
    explanation?: string;
    loading?: boolean;
    target?: HTMLAnchorAttributes["target"];
    action?: Action;
    actionArgs?: any;
    children?: Snippet;
}, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
