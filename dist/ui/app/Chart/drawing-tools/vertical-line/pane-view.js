import { getBrowserCssVariable } from '../../../../utils/index.js';
import { DrawingPaneView } from '../_core/pane-view.js';
import { DrawingCompositePaneRenderer, HandleRenderer } from '../_core/renderer.js';
import { VerticalLinePaneRenderer } from './renderer.js';
export class VerticalLinePaneView extends DrawingPaneView {
    get viewPoints() {
        return this._source.viewPoints;
    }
    strokeColor = getBrowserCssVariable('waterloo');
    isSelected = true;
    _renderer = new DrawingCompositePaneRenderer([
        new VerticalLinePaneRenderer(this),
        new HandleRenderer(this, { pointIndices: [0, 0] }),
    ]);
    update() { }
    move(diffXY) {
        this.movePoint(0, 0, diffXY[0], 0);
    }
    renderer() {
        return this._renderer;
    }
}
