import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type { Coordinate } from '@santiment-network/chart-next';
import type { RectanglePaneView } from './pane-view.js';
import { type TPaneRenderer, type TRenderHitTestData } from '../_core/renderer.js';
export declare class RectanglePaneRenderer implements TPaneRenderer {
    private _paneView;
    private _fillColor;
    constructor(paneView: RectanglePaneView, fillColor: string);
    draw(target: CanvasRenderingTarget2D): void;
    hitTest(x: Coordinate, y: Coordinate): TRenderHitTestData | null;
}
