import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { Action } from 'svelte/action';
import type { SS } from 'svelte-runes';
import { type VariantProps } from 'tailwind-variants';
import { type TSvgId } from '../Svg/index.js';
declare const Button: import("svelte").Component<HTMLButtonAttributes & Omit<VariantProps<import("tailwind-variants").TVReturnType<{
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
    ref?: SS<undefined | null | HTMLElement>;
    href?: string;
    class?: string;
    icon?: TSvgId;
    iconSize?: number | string;
    iconHeight?: number | string;
    iconOnRight?: boolean;
    iconIllus?: boolean;
    explanation?: string;
    loading?: boolean;
    dropdown?: boolean;
    target?: HTMLAnchorAttributes["target"];
    action?: Action;
    actionArgs?: any;
    children?: Snippet;
}, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
