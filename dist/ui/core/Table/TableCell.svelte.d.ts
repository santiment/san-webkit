import type { Snippet } from 'svelte';
import type { HTMLTdAttributes } from 'svelte/elements';
type TProps = {
    class?: string;
    children: Snippet;
} & HTMLTdAttributes;
declare const TableCell: import("svelte").Component<TProps, {}, "">;
type TableCell = ReturnType<typeof TableCell>;
export default TableCell;
