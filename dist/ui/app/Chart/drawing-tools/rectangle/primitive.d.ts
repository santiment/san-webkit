import type { TViewPoint } from '../types.js';
import { DrawingPrimitive } from '../_core/primitive.js';
import { RectanglePaneView } from './pane-view.js';
export type TRectangleOptions = {
    fillStyle: string;
};
export default class RectanglePrimitive extends DrawingPrimitive<'rectangle', TRectangleOptions> {
    __type: "rectangle";
    protected _paneViews: RectanglePaneView[];
    updateEndPoint(point: TViewPoint): void;
    protected constructOptions(options: Partial<TRectangleOptions>): {
        fillStyle: string;
    };
    protected sortViewPoints(): void;
}
