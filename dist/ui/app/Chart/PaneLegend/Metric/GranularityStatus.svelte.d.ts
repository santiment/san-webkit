import type { TSeries } from '../../ctx/series.svelte.js';
type TProps = {
    metric: TSeries;
    onclick?: (e: MouseEvent & {
        currentTarget: HTMLElement;
    }) => void;
};
declare const GranularityStatus: import("svelte").Component<TProps, {}, "">;
type GranularityStatus = ReturnType<typeof GranularityStatus>;
export default GranularityStatus;
