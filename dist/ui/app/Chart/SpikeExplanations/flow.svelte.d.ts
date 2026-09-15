import { type BitmapCoordinates, type ICircleDrawOptions, type IRenderItem } from '@santiment-network/chart-next';
export declare const AI_ICON: {
    readonly boxSize: readonly [9, 7];
    readonly path: Path2D;
};
export declare function drawSpikeExplanation(this: IRenderItem, ctx: CanvasRenderingContext2D, coords: BitmapCoordinates, circleOptions: ICircleDrawOptions): void;
