import type { HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { SS } from 'svelte-runes';
type TCommonProps = {
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
    ref?: SS<undefined | null | HTMLInputElement>;
} & HTMLInputAttributes & TCommonProps;
type TTextAreaProps = {
    as: 'textarea';
    ref?: SS<undefined | null | HTMLTextAreaElement>;
} & HTMLTextareaAttributes & TCommonProps;
type TProps = TInputProps | TTextAreaProps;
declare const UniversalInput: import("svelte").Component<TProps, {}, "">;
type UniversalInput = ReturnType<typeof UniversalInput>;
export default UniversalInput;
