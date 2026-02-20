import type { TSeries } from '../../ctx/series.svelte.js';
import { type Snippet } from 'svelte';
type TProps = {
    metric: TSeries;
    label?: Snippet<[TSeries]>;
    paneControls?: boolean;
    onmouseenter?: () => void;
    onmouseleave?: () => void;
};
declare const Metric: import("svelte").Component<TProps, {}, "">;
type Metric = ReturnType<typeof Metric>;
export default Metric;
