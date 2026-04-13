import type { TViewPoint } from '../types.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { RectanglePaneView } from './pane-view.js';
export default class RectanglePrimitive extends DrawingPrimitive<'rectangle'> {
    __type: "rectangle";
    protected _paneViews: RectanglePaneView[];
    updateEndPoint(point: TViewPoint): void;
    protected sortViewPoints(): void;
}
