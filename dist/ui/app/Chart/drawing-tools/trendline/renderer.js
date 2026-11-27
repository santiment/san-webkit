import { checkIsOutsideLine, positionPoint, RenderHitTest, } from '../_core/renderer.js';
import { LineStyle } from '../types.js';
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
            const { lineWidth, strokeColor, lineStyle } = this._paneView.options;
            ctx.save();
            drawLine(ctx, positionPoint(p1.x, scope.horizontalPixelRatio), positionPoint(p1.y, scope.verticalPixelRatio), positionPoint(p2.x, scope.horizontalPixelRatio), positionPoint(p2.y, scope.verticalPixelRatio), lineWidth * scope.verticalPixelRatio, strokeColor, createLineSegments(lineStyle, lineWidth, scope));
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
export function createLineSegments(lineStyle, lineWidth, scope) {
    const segments = lineStyle
        ? lineStyle === LineStyle.DOTTED
            ? [Math.max(lineWidth, 2), 5]
            : [8, 8]
        : undefined;
    return (segments &&
        [
            positionPoint(segments[0], scope.horizontalPixelRatio),
            positionPoint(segments[1], scope.horizontalPixelRatio),
        ]);
}
export function drawLine(ctx, x1, y1, x2, y2, width, color, lineDash) {
    ctx.beginPath();
    if (lineDash) {
        ctx.setLineDash(lineDash);
    }
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
}
