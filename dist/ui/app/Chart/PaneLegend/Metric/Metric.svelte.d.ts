import type { TSeries } from '../../ctx/series.svelte.js';
import { type ComponentProps, type Snippet } from 'svelte';
import Controls from './Controls.svelte';
type TProps = {
    metric: TSeries;
    isFocused?: boolean;
    label?: Snippet<[TSeries]>;
    onmouseenter?: () => void;
    onmouseleave?: () => void;
} & ComponentProps<typeof Controls>;
declare const Metric: import("svelte").Component<TProps, {}, "">;
type Metric = ReturnType<typeof Metric>;
export default Metric;
