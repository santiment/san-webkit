import { positionPoint, RenderHitTest, } from '../_core/renderer.js';
import { createLineSegments, drawLine } from '../trendline/renderer.js';
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
            const { lineWidth, strokeColor, lineStyle } = this._paneView.options;
            ctx.save();
            drawLine(ctx, positionPoint(p1.x, scope.horizontalPixelRatio), positionPoint(0, scope.verticalPixelRatio), positionPoint(p1.x, scope.horizontalPixelRatio), positionPoint(scope.mediaSize.height, scope.verticalPixelRatio), lineWidth * scope.verticalPixelRatio, strokeColor, createLineSegments(lineStyle, lineWidth, scope));
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
