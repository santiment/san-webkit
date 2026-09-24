import { DrawingPaneView } from '../_core/pane-view.js';
import { DrawingCompositePaneRenderer, HandleRenderer } from '../_core/renderer.js';
import { RectanglePaneRenderer } from './renderer.js';
export class RectanglePaneView extends DrawingPaneView {
    get viewPoints() {
        return this._source.viewPoints;
    }
    get options() {
        return this._source.options;
    }
    _renderer = new DrawingCompositePaneRenderer([
        new RectanglePaneRenderer(this),
        // top left
        new HandleRenderer(this, {
            pointIndices: [0, 0],
        }),
        // top right
        new HandleRenderer(this, {
            pointIndices: [1, 0],
        }),
        // bottom right
        new HandleRenderer(this, {
            pointIndices: [1, 1],
        }),
        // bottom left
        new HandleRenderer(this, {
            pointIndices: [0, 1],
        }),
    ]);
    update() { }
}
