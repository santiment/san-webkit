import type { default as FibRetracementPrimitive } from './fib-retracement/primitive.js';
import type { default as RectanglePrimitive } from './rectangle/primitive.js';
type TDrawingPrimitives = typeof RectanglePrimitive | typeof FibRetracementPrimitive;
export type TTypeToDrawingPrimitive = {
    [K in TDrawingPrimitives as K['prototype']['__type']]: K['prototype'];
};
export type TDrawingTypes = keyof TTypeToDrawingPrimitive;
type TDrawing = {
    __: any;
};
export declare function importPrimitive(type: TDrawingTypes): Promise<typeof import("./rectangle/primitive.js")> | Promise<typeof import("./fib-retracement/primitive.js")>;
export declare const useDrawingToolsCtx: (({ drawings: defaultDrawings }?: {
    drawings?: TDrawing[];
}) => {
    drawingTools: {
        readonly drawing$: "" | "fib_retracement" | "rectangle";
        onSelect: (type: TDrawingTypes) => void;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        drawingTools: {
            readonly drawing$: "" | "fib_retracement" | "rectangle";
            onSelect: (type: TDrawingTypes) => void;
        };
    };
    set: ({ drawings: defaultDrawings }?: {
        drawings?: TDrawing[];
    }) => {
        drawingTools: {
            readonly drawing$: "" | "fib_retracement" | "rectangle";
            onSelect: (type: TDrawingTypes) => void;
        };
    };
    __CTX: "webkit_useDrawingToolsCtx";
};
export {};
