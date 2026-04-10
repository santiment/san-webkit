import { positionPoint, RenderHitTest, } from '../_core/renderer.js';
import { drawLine } from '../trendline/renderer.js';
export class HorizontalLinePaneRenderer {
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
            drawLine(ctx, positionPoint(0, scope.horizontalPixelRatio), positionPoint(p1.y, scope.verticalPixelRatio), positionPoint(scope.mediaSize.width, scope.horizontalPixelRatio), positionPoint(p1.y, scope.verticalPixelRatio), 2 * scope.verticalPixelRatio, this._paneView.strokeColor);
            ctx.restore();
        });
    }
    hitTest(_, y) {
        const [p1] = this._paneView.viewPoints;
        if (y < p1.y - 2 || y > p1.y + 2) {
            return null;
        }
        return { type: RenderHitTest.PRIMITIVE };
    }
}
