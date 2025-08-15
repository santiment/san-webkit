import type { TSeries } from '../../ctx/series.svelte.js';
type TProps = {
    metric: TSeries;
    paneControls?: boolean;
};
declare const Controls: import("svelte").Component<TProps, {}, "">;
type Controls = ReturnType<typeof Controls>;
export default Controls;
