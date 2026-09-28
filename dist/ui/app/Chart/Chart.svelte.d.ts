import { type Snippet } from 'svelte';
import { createChart, createRangeSelection } from '@santiment-network/chart-next';
import { type TMode } from './types.js';
type TRangeSelectHandler = Parameters<typeof createRangeSelection>[1]['onRangeSelectChange'];
type TProps = {
    /**
     * DRAG, SHIFT, ZOOM
     */
    mode?: TMode;
    class?: string;
    watermark?: boolean;
    watermarkOpacity?: string;
    options?: Parameters<typeof createChart>[1];
    onRangeSelectChange: TRangeSelectHandler;
    onRangeSelectEnd: TRangeSelectHandler;
    children: Snippet;
};
declare const Chart: import("svelte").Component<TProps, {}, "mode">;
type Chart = ReturnType<typeof Chart>;
export default Chart;
