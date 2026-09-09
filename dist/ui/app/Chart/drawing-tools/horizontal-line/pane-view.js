import { getBrowserCssVariable } from '../../../../utils/index.js';
import { DrawingPaneView } from '../_core/pane-view.js';
import { DrawingCompositePaneRenderer, HandleRenderer } from '../_core/renderer.js';
import { HorizontalLinePaneRenderer } from './renderer.js';
export class HorizontalLinePaneView extends DrawingPaneView {
    get viewPoints() {
        return this._source.viewPoints;
    }
    get options() {
        return this._source.options;
    }
    strokeColor = getBrowserCssVariable('waterloo');
    isSelected = true;
    _renderer = new DrawingCompositePaneRenderer([
        new HorizontalLinePaneRenderer(this),
        new HandleRenderer(this, { pointIndices: [0, 0] }),
    ]);
    update() { }
    move(diffXY) {
        this.movePoint(0, 0, 0, diffXY[1]);
    }
}
