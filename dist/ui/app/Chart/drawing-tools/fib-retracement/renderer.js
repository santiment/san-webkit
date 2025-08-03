export class FibRetracementPaneRenderer {
    _data;
    constructor(data) {
        this._data = data;
    }
    draw(target) {
        target.useBitmapCoordinateSpace((scope) => {
            const ctx = scope.context;
            const { verticalPixelRatio, horizontalPixelRatio } = scope;
            const { x1, x2, y1, y2, levels } = this._data;
            // Draw the main trend line (from x1 to x2 at level 0% and 100%)
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(pos(x1, horizontalPixelRatio), pos(y1, verticalPixelRatio));
            ctx.lineTo(pos(x2, horizontalPixelRatio), pos(y2, verticalPixelRatio));
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
                ctx.moveTo(pos(x1, horizontalPixelRatio), pos(y, verticalPixelRatio));
                ctx.lineTo(pos(x2, horizontalPixelRatio), pos(y, verticalPixelRatio));
                ctx.strokeStyle = color;
                ctx.lineWidth = scope.verticalPixelRatio;
                ctx.stroke();
                ctx.restore();
                // Drawing background
                const prevLevel = levels[i - 1];
                if (prevLevel) {
                    ctx.save();
                    ctx.fillStyle = color + '25';
                    ctx.fillRect(pos(x1, horizontalPixelRatio), pos(y, verticalPixelRatio), pos(x2, horizontalPixelRatio) - pos(x1, horizontalPixelRatio), pos(prevLevel.y, verticalPixelRatio) - pos(y, verticalPixelRatio));
                    ctx.restore();
                }
                // Drawing level label
                ctx.save();
                const label = `${level} (${value})`;
                ctx.font = `${11 * scope.verticalPixelRatio}px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`;
                ctx.textBaseline = 'middle';
                ctx.fillStyle = color;
                ctx.textAlign = 'right';
                ctx.fillText(label, x1 - 5, y);
                ctx.restore();
            });
        });
    }
}
function pos(coor, pixelRatio) {
    return Math.round(coor * pixelRatio);
}
