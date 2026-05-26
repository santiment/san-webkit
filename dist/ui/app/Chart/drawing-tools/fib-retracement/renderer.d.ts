import type { CanvasRenderingTarget2D } from 'fancy-canvas';
import type { Coordinate } from '@santiment-network/chart-next';
import type { FibRetracementPaneView } from './pane-view.js';
import { type TPaneRenderer, type TRenderHitTestData } from '../_core/renderer.js';
export type TRenderData = {
    levels: {
        color: string;
        level: number;
        value: string;
        y: Coordinate;
    }[];
};
export declare class FibRetracementPaneRenderer implements TPaneRenderer {
    private _paneView;
    constructor(paneView: FibRetracementPaneView);
    hitTest(x: Coordinate, y: Coordinate): TRenderHitTestData | null;
    draw(target: CanvasRenderingTarget2D): void;
}
