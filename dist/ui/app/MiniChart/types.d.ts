export type TMiniChartProps = {
    data: {
        [key: string]: any | number;
    }[] | number[];
    points: string[];
    width: number;
    height: number;
    valueKey?: string;
    style?: string;
};
export type TArea = {
    data: TMiniChartProps['data'];
    color: string;
    formatter?: (v: number) => string;
    title?: string;
};
