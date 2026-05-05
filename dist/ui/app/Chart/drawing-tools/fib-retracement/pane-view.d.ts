import type { TViewPoint } from '../types.js';
import { DrawingPaneView } from '../_core/pane-view.js';
import { type TRenderData } from './renderer.js';
import { DrawingCompositePaneRenderer } from '../_core/renderer.js';
export declare class FibRetracementPaneView extends DrawingPaneView {
    get viewPoints(): [TViewPoint, TViewPoint];
    data: {
        levels: TRenderData["levels"];
    };
    protected _renderer: DrawingCompositePaneRenderer;
    update(): void;
    renderer(): DrawingCompositePaneRenderer;
}
