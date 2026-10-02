import { type TRegistryMetric } from '../../../../../../ctx/metrics-registry/index.js';
type TProps = {
    metric: TRegistryMetric | null;
    onSelect: (metric: TRegistryMetric) => void;
};
declare const Metrics: import("svelte").Component<TProps, {}, "">;
type Metrics = ReturnType<typeof Metrics>;
export default Metrics;
