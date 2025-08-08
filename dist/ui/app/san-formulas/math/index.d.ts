import type { TMetricTargetSelectorInputObject } from '../../Chart/api/index.js';
export declare const DEFINITIONS: {
    selector_from: any;
    asset_metric: {
        (args: (import("mathjs").ConstantNode | import("mathjs").SymbolNode | import("mathjs").FunctionNode)[], _math: any, scope: Map<any, any>): unknown;
        rawArgs: boolean;
        tempId: "__asset_metric_id";
        getTransformationVariableName(scope: Map<any, any>): string;
    };
    sma: any;
    ema: any;
    rsi: any;
    add: any;
    subtract: any;
    multiply: any;
    divide: any;
    pow: any;
    unaryMinus: any;
    unaryPlus: any;
};
export declare const TRANSFORMABLE_FNS: Map<string, {
    tempId: string;
    getTransformationVariableName: (scope: Map<any, any>) => string;
}>;
export { math as SanFormulas, Timeseries } from './core.js';
export declare function evaluateTransformationScope(formulaExpr: string, scopeSetup: [string, null | TMetricTargetSelectorInputObject][]): Map<string, any>;
