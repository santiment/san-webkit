import { DrawingAxisPaneRenderer } from './renderer.js';
export class DrawingPaneView {
    _source;
    isHovered = false;
    isSelected = false;
    constructor(source) {
        this._source = source;
    }
    renderer() {
        if (!this._source.isVisible()) {
            return null;
        }
        return this._renderer;
    }
    hitTest(x, y) {
        const result = this._renderer.hitTest(x, y);
        if (!result) {
            this.isHovered = false;
            return null;
        }
        this.isHovered = true;
        return {
            // @ts-expect-error
            externalId: {
                primitive: this._source,
                hit: result,
            },
            cursorStyle: 'pointer',
            zOrder: 'normal',
        };
    }
    zOrder() {
        return this.isSelected ? 'top' : 'normal';
    }
    move(diffXY, handleIndices) {
        const [diffX, diffY] = diffXY;
        if (handleIndices !== undefined) {
            this.movePoint(handleIndices[0], handleIndices[1], diffX, diffY);
            return;
        }
        for (let i = 0; i < this.viewPoints.length; i++) {
            this.movePoint(i, i, diffX, diffY);
        }
    }
    movePoint(xIndex, yIndex, diffX, diffY) {
        const { viewPoints, finalizedViewPoints } = this._source;
        viewPoints[xIndex].x = (finalizedViewPoints[xIndex].x + diffX);
        viewPoints[yIndex].y = (finalizedViewPoints[yIndex].y + diffY);
    }
}
export class DrawingAxisPaneView {
    _source;
    _points = [];
    _vertical = false;
    constructor(source) {
        this._source = source;
    }
    update() {
        this._points = this._source.viewPoints.map((coordinate) => this._vertical ? coordinate.y : coordinate.x);
    }
    renderer() {
        return this._source.isSelected()
            ? new DrawingAxisPaneRenderer(this._points, this._source.options.axisLabels.bg, this._vertical)
            : null;
    }
    zOrder() {
        return 'bottom';
    }
}
export class DrawingPriceAxisPaneView extends DrawingAxisPaneView {
    _vertical = true;
}
export class DrawingTimeAxisPaneView extends DrawingAxisPaneView {
}
