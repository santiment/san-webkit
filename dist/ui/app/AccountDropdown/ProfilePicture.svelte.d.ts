interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const ProfilePicture: $$__sveltets_2_IsomorphicComponent<Partial<Pick<import("svelte/elements").HTMLButtonAttributes & Omit<import("tailwind-variants").VariantProps<import("tailwind-variants").TVReturnType<{
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
    ref?: import("svelte-runes").SS<undefined | null | HTMLElement>;
    href?: string;
    icon?: string;
    class?: string;
    iconSize?: number | string;
    iconHeight?: number | string;
    iconOnRight?: boolean;
    explanation?: string;
    loading?: boolean;
    target?: import("svelte/elements").HTMLAnchorAttributes["target"];
    action?: import("svelte/action").Action;
    actionArgs?: any;
    children?: import("svelte").Snippet;
} & {
    $$events?: {
        [evt: string]: CustomEvent<any>;
    } | undefined;
    $$slots?: {} | undefined;
}, "class" | "ref" | "as">>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type ProfilePicture = InstanceType<typeof ProfilePicture>;
export default ProfilePicture;
