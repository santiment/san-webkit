import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type TProps = {
    class?: string;
    sticky?: boolean;
    children: Snippet;
} & HTMLAttributes<HTMLTableSectionElement>;
declare const TableHeader: import("svelte").Component<TProps, {}, "">;
type TableHeader = ReturnType<typeof TableHeader>;
export default TableHeader;
