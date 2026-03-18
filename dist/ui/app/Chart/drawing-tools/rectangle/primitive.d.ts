import type { TPoint } from '../types.js';
import { DrawingPrimitive } from '../primitive.js';
import { RectanglePaneView } from './pane-view.js';
export default class RectanglePrimitive extends DrawingPrimitive<'rectangle'> {
    __type: "rectangle";
    protected _paneViews: RectanglePaneView[];
    updateEndPoint(point: TPoint): void;
}
