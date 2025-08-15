import type { Snippet } from 'svelte';
import type { TMiniChartProps } from './types.js';
type TProps = {
    class?: string;
    data?: TMiniChartProps['data'];
    width?: number;
    height?: number;
    valueKey?: TMiniChartProps['valueKey'];
    style?: string;
    areaFill: Snippet<[{
        points: string[];
        linePoints: string;
    }]>;
    children?: Snippet;
    onmousemove: (e: MouseEvent) => void;
    onmouseleave: (e: MouseEvent) => void;
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
