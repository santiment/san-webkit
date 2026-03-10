export class DrawingAxisPaneRenderer {
    _points;
    _fillColor;
    _vertical = false;
    constructor(points, fillColor, vertical) {
        this._points = points;
        this._fillColor = fillColor;
        this._vertical = vertical;
    }
    draw(target) {
        target.useBitmapCoordinateSpace((scope) => {
            const [p1, p2] = this._points;
            if (p1 === null || p2 === null)
                return;
            const ctx = scope.context;
            ctx.globalAlpha = 0.5;
            const positions = positionsBox(p1, p2, this._vertical ? scope.verticalPixelRatio : scope.horizontalPixelRatio);
            ctx.fillStyle = this._fillColor;
            if (this._vertical) {
                ctx.fillRect(0, positions.position, 15, positions.length);
            }
            else {
                ctx.fillRect(positions.position, 0, positions.length, 15);
            }
        });
    }
}
/**
 * Determines the bitmap position and length for a dimension of a shape to be drawn.
 * @param position1Media - media coordinate for the first point
 * @param position2Media - media coordinate for the second point
 * @param pixelRatio - pixel ratio for the corresponding axis (vertical or horizontal)
 * @returns Position of of the start point and length dimension.
 */
export function positionsBox(position1Media, position2Media, pixelRatio) {
    const scaledPosition1 = Math.round(pixelRatio * position1Media);
    const scaledPosition2 = Math.round(pixelRatio * position2Media);
    return {
        position: Math.min(scaledPosition1, scaledPosition2),
        length: Math.abs(scaledPosition2 - scaledPosition1) + 1,
    };
}
