import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type { Coordinate } from '@santiment-network/chart-next';
import type { HorizontalLinePaneView } from './pane-view.js';
import { type TPaneRenderer, type TRenderHitTestData } from '../_core/renderer.js';
export declare class HorizontalLinePaneRenderer implements TPaneRenderer {
    private _paneView;
    constructor(paneView: HorizontalLinePaneView);
    draw(target: CanvasRenderingTarget2D): void;
    hitTest(_: Coordinate, y: Coordinate): TRenderHitTestData | null;
}
