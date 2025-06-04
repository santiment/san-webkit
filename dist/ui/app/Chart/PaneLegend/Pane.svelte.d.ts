import type { IPaneApi, Time } from '@santiment-network/chart-next';
import { type Snippet } from 'svelte';
type TProps = {
    class?: string;
    children: Snippet;
    chartPane: IPaneApi<Time>;
};
declare const Pane: import("svelte").Component<TProps, {}, "">;
type Pane = ReturnType<typeof Pane>;
export default Pane;
