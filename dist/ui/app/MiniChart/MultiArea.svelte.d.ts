import type { TMiniChartProps, TArea } from './types.js';
type TProps = {
    id?: string;
    width: TMiniChartProps['width'];
    height: TMiniChartProps['height'];
    areas: TArea[];
    tooltipVisible?: boolean;
    tooltipSyncKey?: string;
};
declare const MultiArea: import("svelte").Component<TProps, {}, "">;
type MultiArea = ReturnType<typeof MultiArea>;
export default MultiArea;
