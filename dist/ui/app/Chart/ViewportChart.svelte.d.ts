declare const ViewportChart: import("svelte").Component<{
    mode?: import("./types").TMode;
    class?: string;
    watermark?: boolean;
    watermarkOpacity?: string;
    options?: Parameters<typeof import("@santiment-network/chart-next").createChart>[1];
    onRangeSelectChange: (start: import("@santiment-network/chart-next").MouseEventParams<import("@santiment-network/chart-next").Time>, end: import("@santiment-network/chart-next").MouseEventParams<import("@santiment-network/chart-next").Time>) => void;
    onRangeSelectEnd: (start: import("@santiment-network/chart-next").MouseEventParams<import("@santiment-network/chart-next").Time>, end: import("@santiment-network/chart-next").MouseEventParams<import("@santiment-network/chart-next").Time>) => void;
    children: import("svelte").Snippet;
}, {}, "">;
type ViewportChart = ReturnType<typeof ViewportChart>;
export default ViewportChart;
