import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type TProps = {
    class?: string;
    children: Snippet;
} & HTMLAttributes<HTMLTableSectionElement>;
declare const TableBody: import("svelte").Component<TProps, {}, "">;
type TableBody = ReturnType<typeof TableBody>;
export default TableBody;
