import { checkIsOutsideLine, RenderHitTest, } from '../_core/renderer.js';
export class FibRetracementPaneRenderer {
    _paneView;
    constructor(paneView) {
        this._paneView = paneView;
    }
    hitTest(x, y) {
        const [p1, p2] = this._paneView.viewPoints;
        if (checkIsOutsideLine(x, y, p1, p2)) {
            return null;
        }
        return { type: RenderHitTest.PRIMITIVE };
    }
    draw(target) {
        target.useBitmapCoordinateSpace((scope) => {
            const ctx = scope.context;
            const { verticalPixelRatio, horizontalPixelRatio } = scope;
            const [p1, p2] = this._paneView.viewPoints;
            const { levels } = this._paneView.data;
            // Draw the main trend line (from x1 to x2 at level 0% and 100%)
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(pos(p1.x, horizontalPixelRatio), pos(p1.y, verticalPixelRatio));
            ctx.lineTo(pos(p2.x, horizontalPixelRatio), pos(p2.y, verticalPixelRatio));
            ctx.setLineDash([3 * scope.horizontalPixelRatio, 3 * scope.horizontalPixelRatio]);
            ctx.strokeStyle = '#2962FF';
            ctx.lineWidth = scope.verticalPixelRatio;
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.restore();
            // Draw each retracement level
            levels.forEach(({ color, y, level, value }, i) => {
                // Drawing level lines
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(pos(p1.x, horizontalPixelRatio), pos(y, verticalPixelRatio));
                ctx.lineTo(pos(p2.x, horizontalPixelRatio), pos(y, verticalPixelRatio));
                ctx.strokeStyle = color;
                ctx.lineWidth = scope.verticalPixelRatio;
                ctx.stroke();
                ctx.restore();
                // Drawing background
                const prevLevel = levels[i - 1];
                if (prevLevel) {
                    ctx.save();
                    ctx.fillStyle = color + '25';
                    ctx.fillRect(pos(p1.x, horizontalPixelRatio), pos(y, verticalPixelRatio), pos(p2.x, horizontalPixelRatio) - pos(p1.x, horizontalPixelRatio), pos(prevLevel.y, verticalPixelRatio) - pos(y, verticalPixelRatio));
                    ctx.restore();
                }
                // Drawing level label
                ctx.save();
                const label = `${level} (${value})`;
                ctx.font = `${11 * scope.verticalPixelRatio}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`;
                ctx.textBaseline = 'middle';
                ctx.fillStyle = color;
                ctx.textAlign = 'right';
                ctx.fillText(label, pos(p1.x - 5, horizontalPixelRatio), pos(y, verticalPixelRatio));
                ctx.restore();
            });
        });
    }
}
function pos(coor, pixelRatio) {
    return Math.round(coor * pixelRatio);
}
