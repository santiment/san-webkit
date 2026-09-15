import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type { Coordinate } from '@santiment-network/chart-next';
import type { VerticalLinePaneView } from './pane-view.js';
import { type TPaneRenderer, type TRenderHitTestData } from '../_core/renderer.js';
export declare class VerticalLinePaneRenderer implements TPaneRenderer {
    private _paneView;
    constructor(paneView: VerticalLinePaneView);
    draw(target: CanvasRenderingTarget2D): void;
    hitTest(x: Coordinate, _: Coordinate): TRenderHitTestData | null;
}
