import { DrawingPaneView } from '../pane-view.js';
import { FibRetracementPaneRenderer } from './renderer.js';
export declare class FibRetracementPaneView extends DrawingPaneView {
    private _data;
    update(): void;
    renderer(): FibRetracementPaneRenderer | null;
}
