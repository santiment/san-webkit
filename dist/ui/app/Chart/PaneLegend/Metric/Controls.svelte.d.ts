import type { TSeries } from '../../ctx/series.svelte.js';
import type { ComponentProps } from 'svelte';
import PaneControls from './PaneControls.svelte';
type TProps = {
    metric: TSeries;
    paneControls?: boolean;
    onVisibilityChange?: (newValue: boolean, oldValue: boolean) => void;
    onPaneChange?: ComponentProps<typeof PaneControls>['onPaneChange'];
};
declare const Controls: import("svelte").Component<TProps, {}, "">;
type Controls = ReturnType<typeof Controls>;
export default Controls;
