import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type { Coordinate } from '@santiment-network/chart-next';
import type { TrendlinePaneView } from './pane-view.js';
import { type TPaneRenderer, type TRenderHitTestData } from '../_core/renderer.js';
export declare class TrendlinePaneRenderer implements TPaneRenderer {
    private _paneView;
    constructor(paneView: TrendlinePaneView);
    draw(target: CanvasRenderingTarget2D): void;
    hitTest(x: Coordinate, y: Coordinate): TRenderHitTestData | null;
}
export declare function drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, width: number, color: string): void;
