import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type TProps = {
    class?: string;
    children: Snippet;
} & HTMLAttributes<HTMLTableRowElement>;
declare const TableRow: import("svelte").Component<TProps, {}, "">;
type TableRow = ReturnType<typeof TableRow>;
export default TableRow;
