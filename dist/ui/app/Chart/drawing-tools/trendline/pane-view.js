import { getBrowserCssVariable } from '../../../../utils/index.js';
import { DrawingPaneView } from '../_core/pane-view.js';
import { DrawingCompositePaneRenderer, HandleRenderer } from '../_core/renderer.js';
import { TrendlinePaneRenderer } from './renderer.js';
export class TrendlinePaneView extends DrawingPaneView {
    get viewPoints() {
        return this._source.viewPoints;
    }
    strokeColor = getBrowserCssVariable('waterloo');
    _renderer = new DrawingCompositePaneRenderer([
        new TrendlinePaneRenderer(this),
        new HandleRenderer(this, { pointIndices: [0, 0] }),
        new HandleRenderer(this, { pointIndices: [1, 1] }),
    ]);
    update() { }
    renderer() {
        return this._renderer;
    }
}
