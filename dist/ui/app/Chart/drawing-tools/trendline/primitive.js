import { getBrowserCssVariable } from '../../../../utils/index.js';
import { LineStyle } from '../types.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { TrendlinePaneView } from './pane-view.js';
export const LineOptionsDefaults = {
    strokeColor: getBrowserCssVariable('waterloo'),
    lineWidth: 2,
    lineStyle: LineStyle.SOLID,
};
export default class TrendlinePrimitive extends DrawingPrimitive {
    __type = 'trendline';
    _paneViews = [new TrendlinePaneView(this)];
    updateEndPoint(point) {
        this.viewPoints[this.viewPoints.length - 1] = point;
        this.requestUpdate();
    }
    constructOptions(options) {
        return {
            ...LineOptionsDefaults,
            ...options,
        };
    }
}
