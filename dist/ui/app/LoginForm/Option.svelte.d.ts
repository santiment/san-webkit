import type { MouseEventHandler } from 'svelte/elements';
type TProps = {
    class?: string;
    title: string;
    icon: string;
    href?: string;
    loading?: boolean;
    isSignUp?: boolean;
    onclick: MouseEventHandler<HTMLButtonElement>;
};
declare const Option: import("svelte").Component<TProps, {}, "">;
type Option = ReturnType<typeof Option>;
export default Option;
