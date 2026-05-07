import type { TViewPoint } from '../types.js';
import { DrawingPaneView } from '../_core/pane-view.js';
import { DrawingCompositePaneRenderer } from '../_core/renderer.js';
export declare class VerticalLinePaneView extends DrawingPaneView {
    get viewPoints(): [TViewPoint];
    strokeColor: string;
    isSelected: boolean;
    protected _renderer: DrawingCompositePaneRenderer;
    update(): void;
    move(diffXY: [number, number]): void;
}
