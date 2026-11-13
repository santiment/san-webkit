import type { TSeries } from '../../ctx/series.svelte.js';
type TProps = {
    metric: TSeries;
    class?: string;
};
declare const Value: import("svelte").Component<TProps, {}, "">;
type Value = ReturnType<typeof Value>;
export default Value;
