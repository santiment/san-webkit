import type { TUUIDv7 } from '../../../../utils/uuid/index.js';
import type { Coordinate, Time } from '@santiment-network/chart-next';
export interface TViewPoint {
    x: Coordinate | null;
    y: Coordinate | null;
}
export interface TPoint {
    time: Time;
    value: number;
}
export type TOptions = {
    axisLabels: {
        bg: string;
        textColor: string;
    };
};
export type TData = {
    seriesId?: TUUIDv7;
    points: TPoint[];
};
export declare const LineStyle: {
    readonly SOLID: 0;
    readonly DASHED: 1;
    readonly DOTTED: 2;
};
export type TLineStyle = typeof LineStyle;
export type TLineStyles = TLineStyle[keyof TLineStyle];
