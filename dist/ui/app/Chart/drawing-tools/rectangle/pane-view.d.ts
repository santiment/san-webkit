import type { TViewPoint } from '../types.js';
import type { TRectangleOptions } from './primitive.js';
import { DrawingPaneView } from '../_core/pane-view.js';
import { DrawingCompositePaneRenderer } from '../_core/renderer.js';
export declare class RectanglePaneView extends DrawingPaneView {
    get viewPoints(): [TViewPoint, TViewPoint];
    get options(): TRectangleOptions;
    protected _renderer: DrawingCompositePaneRenderer;
    update(): void;
}
