import type { TViewPoint } from '../types.js';
import { DrawingPaneView } from '../_core/pane-view.js';
import { DrawingCompositePaneRenderer } from '../_core/renderer.js';
export declare class TrendlinePaneView extends DrawingPaneView {
    get viewPoints(): [TViewPoint, TViewPoint];
    strokeColor: string;
    protected _renderer: DrawingCompositePaneRenderer;
    update(): void;
    renderer(): DrawingCompositePaneRenderer;
}
