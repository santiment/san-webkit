import type { HTMLInputAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
type $$ComponentProps = HTMLInputAttributes & {
    class?: string;
    type?: 'text' | 'number' | 'email';
    placeholder?: string;
    icon?: string;
    iconSize?: number | string;
    inputClass?: string;
    left?: Snippet;
    right?: Snippet;
};
declare const Input: import("svelte").Component<$$ComponentProps, {}, "">;
type Input = ReturnType<typeof Input>;
export default Input;
