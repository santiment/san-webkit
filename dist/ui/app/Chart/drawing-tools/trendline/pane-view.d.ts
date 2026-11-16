import type { TViewPoint } from '../types.js';
import type { TLineOptions } from './primitive.js';
import { DrawingPaneView } from '../_core/pane-view.js';
import { DrawingCompositePaneRenderer } from '../_core/renderer.js';
export declare class TrendlinePaneView extends DrawingPaneView {
    get viewPoints(): [TViewPoint, TViewPoint];
    get options(): TLineOptions;
    protected _renderer: DrawingCompositePaneRenderer;
    update(): void;
}
