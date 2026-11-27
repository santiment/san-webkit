import type { Snippet } from 'svelte';
type TProps = {
    tooltipSyncKey: string;
    children: Snippet<[{
        offset: number;
    }]>;
} & {
    as: any;
} & Record<string, any>;
declare const InteractiveContainer: import("svelte").Component<TProps, {}, "">;
type InteractiveContainer = ReturnType<typeof InteractiveContainer>;
export default InteractiveContainer;
