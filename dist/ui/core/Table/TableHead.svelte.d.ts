import type { Snippet } from 'svelte';
import type { HTMLThAttributes } from 'svelte/elements';
type TProps = {
    class?: string;
    children: Snippet;
} & HTMLThAttributes;
declare const TableHead: import("svelte").Component<TProps, {}, "">;
type TableHead = ReturnType<typeof TableHead>;
export default TableHead;
