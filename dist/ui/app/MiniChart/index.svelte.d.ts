import type { Snippet } from 'svelte';
import type { TMiniChartProps } from './types.js';
type TProps = {
    class?: string;
    data?: TMiniChartProps['data'];
    width?: number;
    margin?: number;
    height?: number;
    valueKey?: TMiniChartProps['valueKey'];
    style?: string;
    children?: Snippet<[{
        points: string[];
        linePoints: string;
    }]>;
    onmousemove?: (e: MouseEvent) => void;
    onmouseleave?: (e: MouseEvent) => void;
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
