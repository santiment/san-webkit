import { DrawingPaneView } from '../pane-view.js';
import { RectanglePaneRenderer } from './renderer.js';
export declare class RectanglePaneView extends DrawingPaneView {
    private _p1;
    private _p2;
    update(): void;
    renderer(): RectanglePaneRenderer;
}
