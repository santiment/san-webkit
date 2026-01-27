import type { TSeries } from '../ctx/index.js';
type TProps = {
    series: TSeries;
    index: number;
    canvasNode: null | HTMLCanvasElement;
    register: (paint: (ctx: CanvasRenderingContext2D) => void) => () => void;
};
declare const Metric: import("svelte").Component<TProps, {}, "">;
type Metric = ReturnType<typeof Metric>;
export default Metric;
