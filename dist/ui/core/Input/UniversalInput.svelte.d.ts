import type { HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { SS } from 'svelte-runes';
type TCommonProps = {
    ref?: SS<undefined | null | HTMLElement>;
    class?: string;
    type?: 'text' | 'number' | 'email';
    placeholder?: string;
    icon?: string;
    iconSize?: number | string;
    inputClass?: string;
    left?: Snippet;
    right?: Snippet;
};
type TInputProps = {
    as: 'input';
} & HTMLInputAttributes & TCommonProps;
type TTextAreaProps = {
    as: 'textarea';
} & HTMLTextareaAttributes & TCommonProps;
type TProps = TInputProps | TTextAreaProps;
declare const UniversalInput: import("svelte").Component<TProps, {}, "">;
type UniversalInput = ReturnType<typeof UniversalInput>;
export default UniversalInput;
