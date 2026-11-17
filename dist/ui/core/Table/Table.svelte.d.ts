import type { Snippet } from 'svelte';
import type { HTMLTableAttributes } from 'svelte/elements';
type TProps = {
    class?: string;
    children: Snippet;
} & HTMLTableAttributes;
declare const Table: import("svelte").Component<TProps, {}, "">;
type Table = ReturnType<typeof Table>;
export default Table;
