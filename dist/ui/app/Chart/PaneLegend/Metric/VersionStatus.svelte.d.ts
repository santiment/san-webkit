import type { TSeries } from '../../ctx/series.svelte.js';
type TProps = {
    metric: TSeries;
};
declare const VersionStatus: import("svelte").Component<TProps, {}, "">;
type VersionStatus = ReturnType<typeof VersionStatus>;
export default VersionStatus;
