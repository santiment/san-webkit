import type { TSeries } from '../../ctx/series.svelte.js';
type TProps = {
    metric: TSeries;
};
declare const PaneControls: import("svelte").Component<TProps, {}, "">;
type PaneControls = ReturnType<typeof PaneControls>;
export default PaneControls;
