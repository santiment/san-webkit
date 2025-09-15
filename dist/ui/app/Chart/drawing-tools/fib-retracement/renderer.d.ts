import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type { IPrimitivePaneRenderer, Coordinate } from '@santiment-network/chart-next';
export type TRenderData = {
    x1: Coordinate;
    x2: Coordinate;
    y1: Coordinate;
    y2: Coordinate;
    levels: {
        color: string;
        level: number;
        value: string;
        y: Coordinate;
    }[];
};
export declare class FibRetracementPaneRenderer implements IPrimitivePaneRenderer {
    private _data;
    constructor(data: TRenderData);
    draw(target: CanvasRenderingTarget2D): void;
}
