import { checkIsOutsideLine, positionPoint, RenderHitTest, } from '../_core/renderer.js';
export class TrendlinePaneRenderer {
    _paneView;
    constructor(paneView) {
        this._paneView = paneView;
    }
    draw(target) {
        target.useBitmapCoordinateSpace((scope) => {
            const [p1, p2] = this._paneView.viewPoints;
            if (p1.x === null || p1.y === null || p2.x === null || p2.y === null) {
                return;
            }
            const ctx = scope.context;
            ctx.save();
            drawLine(ctx, positionPoint(p1.x, scope.horizontalPixelRatio), positionPoint(p1.y, scope.verticalPixelRatio), positionPoint(p2.x, scope.horizontalPixelRatio), positionPoint(p2.y, scope.verticalPixelRatio), 2 * scope.verticalPixelRatio, this._paneView.strokeColor);
            ctx.restore();
        });
    }
    hitTest(x, y) {
        const [p1, p2] = this._paneView.viewPoints;
        if (checkIsOutsideLine(x, y, p1, p2)) {
            return null;
        }
        return { type: RenderHitTest.PRIMITIVE };
    }
}
export function drawLine(ctx, x1, y1, x2, y2, width, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
}
