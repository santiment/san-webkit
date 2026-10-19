import { type TApiMetricSeries } from '../../ctx/ai-explanation.svelte.js';
type TProps = {
    metric: TApiMetricSeries;
};
declare const AiExplanationStatus: import("svelte").Component<TProps, {}, "">;
type AiExplanationStatus = ReturnType<typeof AiExplanationStatus>;
export default AiExplanationStatus;
