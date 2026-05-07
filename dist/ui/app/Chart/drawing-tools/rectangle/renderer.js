import { checkIsOutsideRect, positionsBox, RenderHitTest, } from '../_core/renderer.js';
export class RectanglePaneRenderer {
    _paneView;
    _fillColor;
    constructor(paneView, fillColor) {
        this._paneView = paneView;
        this._fillColor = fillColor;
    }
    draw(target) {
        target.useBitmapCoordinateSpace((scope) => {
            const [p1, p2] = this._paneView.viewPoints;
            if (p1.x === null || p1.y === null || p2.x === null || p2.y === null) {
                return;
            }
            const ctx = scope.context;
            const horizontalPositions = positionsBox(p1.x, p2.x, scope.horizontalPixelRatio);
            const verticalPositions = positionsBox(p1.y, p2.y, scope.verticalPixelRatio);
            ctx.fillStyle = this._fillColor;
            ctx.fillRect(horizontalPositions.position, verticalPositions.position, horizontalPositions.length, verticalPositions.length);
        });
    }
    hitTest(x, y) {
        const [p1, p2] = this._paneView.viewPoints;
        if (checkIsOutsideRect(x, y, p1.x, p2.x, p1.y, p2.y)) {
            return null;
        }
        return { type: RenderHitTest.PRIMITIVE };
    }
}
