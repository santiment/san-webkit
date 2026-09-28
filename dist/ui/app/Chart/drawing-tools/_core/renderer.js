import { getBrowserCssVariable } from '../../../../utils/index.js';
export const RenderHitTest = {
    PRIMITIVE: 1,
    HANDLE: 2,
};
export class DrawingCompositePaneRenderer {
    _renderers;
    constructor(renderers) {
        this._renderers = renderers;
    }
    draw(target) {
        for (const renderer of this._renderers) {
            renderer.draw(target);
        }
    }
    hitTest(x, y) {
        for (let i = this._renderers.length - 1; i > -1; i--) {
            const result = this._renderers[i].hitTest?.(x, y);
            if (result !== null) {
                return result;
            }
        }
        return null;
    }
}
export class HandleRenderer {
    _paneView;
    _config;
    _size = 8 / 2;
    constructor(paneView, config) {
        this._paneView = paneView;
        this._config = config;
    }
    get viewPoint() {
        const x = this._paneView.viewPoints[this._config.pointIndices[0]].x;
        const y = this._paneView.viewPoints[this._config.pointIndices[1]].y;
        return { x, y };
    }
    draw(target) {
        if (!this._paneView.isSelected && !this._paneView.isHovered) {
            return;
        }
        target.useBitmapCoordinateSpace((scope) => {
            const { x, y } = this.viewPoint;
            if (x === null || y === null) {
                return;
            }
            const ctx = scope.context;
            const horizontalPositions = positionsBox(x - this._size, x + this._size, scope.horizontalPixelRatio);
            const verticalPositions = positionsBox(y - this._size, y + this._size, scope.verticalPixelRatio);
            ctx.fillStyle = getBrowserCssVariable('white');
            ctx.fillRect(horizontalPositions.position, verticalPositions.position, horizontalPositions.length, verticalPositions.length);
            ctx.strokeStyle = getBrowserCssVariable('waterloo');
            ctx.lineWidth = 3;
            ctx.strokeRect(horizontalPositions.position, verticalPositions.position, horizontalPositions.length, verticalPositions.length);
        });
    }
    hitTest(x, y) {
        const { x: px, y: py } = this.viewPoint;
        if (checkIsOutsideRect(x, y, px - this._size, px + this._size, py - this._size, py + this._size)) {
            return null;
        }
        return { type: RenderHitTest.HANDLE, indices: this._config.pointIndices };
    }
}
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
export function positionPoint(coor, pixelRatio) {
    return Math.round(coor * pixelRatio);
}
/**
 *
 * @param x - x coordinate of the point to check
 * @param y - y coordinate of the point to check
 * @param px1 - x coordinate of the left of the rectangle
 * @param px2 - x coordinate of the right of the rectangle
 * @param py1 - y coordinate of the top of the rectangle
 * @param py2 - y coordinate of the bottom of the rectangle
 * @returns {boolean} - true if the point is outside the rectangle, false otherwise
 */
export function checkIsOutsideRect(x, y, px1, px2, py1, py2) {
    return x < px1 || x > px2 || y < py1 || y > py2;
}
const TOLERANCE = 7;
/**
 *
 * @param x - x coordinate of the point to check
 * @param y - y coordinate of the point to check
 * @param p1 - first point of the line
 * @param p2 - second point of the line
 * @returns {boolean} - true if the point is outside the line, false otherwise
 */
export function checkIsOutsideLine(x, y, p1, p2, tolerance = TOLERANCE) {
    const [top, bottom] = p1.y < p2.y ? [p1, p2] : [p2, p1];
    if (y < top.y || y > bottom.y) {
        return true;
    }
    // Calculate the progress between bottom and top (0 at bottom, 1 at top)
    const t = (y - bottom.y) / (top.y - bottom.y);
    // Calculate left boundary at this Y (interpolate between leftBottom and leftTop)
    const leftX = bottom.x + t * (top.x - bottom.x);
    // Calculate right boundary at this Y (interpolate between rightBottom and rightTop)
    const rightX = bottom.x + t * (top.x - bottom.x);
    // Check if X is outside the horizontal bounds at this Y
    if (x < leftX - tolerance || x > rightX + tolerance) {
        return true;
    }
    return false;
}
