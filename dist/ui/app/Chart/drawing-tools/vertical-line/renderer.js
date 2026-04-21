import { positionPoint, RenderHitTest, } from '../_core/renderer.js';
import { drawLine } from '../trendline/renderer.js';
export class VerticalLinePaneRenderer {
    _paneView;
    constructor(paneView) {
        this._paneView = paneView;
    }
    draw(target) {
        target.useBitmapCoordinateSpace((scope) => {
            const p1 = this._paneView.viewPoints[0];
            if (p1.y === null) {
                return;
            }
            const ctx = scope.context;
            ctx.save();
            drawLine(ctx, positionPoint(p1.x, scope.horizontalPixelRatio), positionPoint(0, scope.verticalPixelRatio), positionPoint(p1.x, scope.horizontalPixelRatio), positionPoint(scope.mediaSize.height, scope.verticalPixelRatio), 2 * scope.verticalPixelRatio, this._paneView.strokeColor);
            ctx.restore();
        });
    }
    hitTest(x, _) {
        const [p1] = this._paneView.viewPoints;
        if (x < p1.x - 2 || x > p1.x + 2) {
            return null;
        }
        return { type: RenderHitTest.PRIMITIVE };
    }
}
