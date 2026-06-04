import type { TData } from './types.js';
import type { default as FibRetracementPrimitive } from './fib-retracement/primitive.js';
import type { default as RectanglePrimitive } from './rectangle/primitive.js';
import type { default as TrendlinePrimitive } from './trendline/primitive.js';
import type { default as HorizontalLinePrimitive } from './horizontal-line/primitive.js';
import type { default as VerticalLinePrimitive } from './vertical-line/primitive.js';
type TDrawingPrimitives = typeof RectanglePrimitive | typeof FibRetracementPrimitive | typeof TrendlinePrimitive | typeof HorizontalLinePrimitive | typeof VerticalLinePrimitive;
type TDrawingPrimitive = TDrawingPrimitives['prototype'];
export type TDrawingPrimitiveOptions = TDrawingPrimitive['options'];
export type TTypeToDrawingPrimitive = {
    [K in TDrawingPrimitives as K['prototype']['__type']]: K['prototype'];
};
export type TDrawingTypes = keyof TTypeToDrawingPrimitive;
export type TApiDrawing = {
    type: TDrawingTypes;
    data: TData;
    options?: Record<string, unknown>;
};
type TDrawingTool = {
    type: TDrawingTypes;
    data: TData;
    drawing: null | TDrawingPrimitive;
    options?: Record<string, unknown>;
    Primitive: undefined | Promise<{
        default: TDrawingPrimitives;
    }>;
};
export declare function importPrimitive(type: TDrawingTypes): Promise<typeof import("./trendline/primitive.js")> | Promise<typeof import("./horizontal-line/primitive.js")> | Promise<typeof import("./vertical-line/primitive.js")> | Promise<typeof import("./rectangle/primitive.js")> | Promise<typeof import("./fib-retracement/primitive.js")>;
export declare const useDrawingToolsCtx: (({ drawings: defaultDrawings }?: {
    drawings?: TApiDrawing[];
}) => {
    drawingTools: {
        selected: {
            readonly $: TDrawingTool | null;
        };
        drawings: {
            $: TDrawingTool[];
            readonly areVisible$: boolean;
            delete(drawingTool: null | TDrawingTool): void;
            toggleVisibility(): void;
            export$(): {
                type: "fib-retracement" | "rectangle" | "trendline" | "horizontal-line" | "vertical-line";
                data: TData;
                options: {
                    lineWidth: number;
                } | {
                    fillStyle: string;
                } | {
                    lineWidth: number;
                    strokeColor: string;
                    lineStyle: import("./types.js").TLineStyles;
                };
            }[];
        };
        readonly drawing$: "" | "fib-retracement" | "rectangle" | "trendline" | "horizontal-line" | "vertical-line";
        onSelect: (type: TDrawingTypes) => void;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        drawingTools: {
            selected: {
                readonly $: TDrawingTool | null;
            };
            drawings: {
                $: TDrawingTool[];
                readonly areVisible$: boolean;
                delete(drawingTool: null | TDrawingTool): void;
                toggleVisibility(): void;
                export$(): {
                    type: "fib-retracement" | "rectangle" | "trendline" | "horizontal-line" | "vertical-line";
                    data: TData;
                    options: {
                        lineWidth: number;
                    } | {
                        fillStyle: string;
                    } | {
                        lineWidth: number;
                        strokeColor: string;
                        lineStyle: import("./types.js").TLineStyles;
                    };
                }[];
            };
            readonly drawing$: "" | "fib-retracement" | "rectangle" | "trendline" | "horizontal-line" | "vertical-line";
            onSelect: (type: TDrawingTypes) => void;
        };
    };
    set: ({ drawings: defaultDrawings }?: {
        drawings?: TApiDrawing[];
    }) => {
        drawingTools: {
            selected: {
                readonly $: TDrawingTool | null;
            };
            drawings: {
                $: TDrawingTool[];
                readonly areVisible$: boolean;
                delete(drawingTool: null | TDrawingTool): void;
                toggleVisibility(): void;
                export$(): {
                    type: "fib-retracement" | "rectangle" | "trendline" | "horizontal-line" | "vertical-line";
                    data: TData;
                    options: {
                        lineWidth: number;
                    } | {
                        fillStyle: string;
                    } | {
                        lineWidth: number;
                        strokeColor: string;
                        lineStyle: import("./types.js").TLineStyles;
                    };
                }[];
            };
            readonly drawing$: "" | "fib-retracement" | "rectangle" | "trendline" | "horizontal-line" | "vertical-line";
            onSelect: (type: TDrawingTypes) => void;
        };
    };
    __CTX: "webkit_useDrawingToolsCtx";
};
export {};
