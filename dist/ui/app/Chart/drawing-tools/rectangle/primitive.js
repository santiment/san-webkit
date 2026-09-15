import { getBrowserCssVariable } from '../../../../utils/index.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { RectanglePaneView } from './pane-view.js';
export default class RectanglePrimitive extends DrawingPrimitive {
    __type = 'rectangle';
    _paneViews = [new RectanglePaneView(this)];
    updateEndPoint(point) {
        this.viewPoints[this.viewPoints.length - 1] = point;
        this.requestUpdate();
    }
    constructOptions(options) {
        return { fillStyle: getBrowserCssVariable('blue') + '50', ...options };
    }
    sortViewPoints() {
        const [p1, p2] = this.viewPoints;
        const [top, bottom] = p1.y < p2.y ? [p1.y, p2.y] : [p2.y, p1.y];
        const [left, right] = p1.x < p2.x ? [p1.x, p2.x] : [p2.x, p1.x];
        Object.assign(p1, { x: left, y: top });
        Object.assign(p2, { x: right, y: bottom });
    }
}
