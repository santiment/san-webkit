import type { TMiniChartProps } from './types.js';
import type { Snippet } from 'svelte';
type TProps = {
    class?: string;
    id?: string;
    data: TMiniChartProps['data'];
    width: TMiniChartProps['width'];
    height: TMiniChartProps['height'];
    valueKey?: TMiniChartProps['valueKey'];
    style: TMiniChartProps['style'];
    onmousemove?: any;
    onmouseleave?: any;
    children?: Snippet;
};
declare const Area: import("svelte").Component<TProps, {}, "">;
type Area = ReturnType<typeof Area>;
export default Area;
