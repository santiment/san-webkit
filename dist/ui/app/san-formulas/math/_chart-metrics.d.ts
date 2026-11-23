import { Timeseries } from './core.js';
export declare const MathChartMetrics: {
    selector_from: any;
    api_metric: {
        (args: (import("mathjs").ConstantNode | import("mathjs").SymbolNode | import("mathjs").FunctionNode)[], _math: any, scope: Map<any, any>): unknown;
        rawArgs: boolean;
        tempId: "__api_metric_id";
        getTransformationVariableName(scope: Map<any, any>): string;
    };
    raw_sql: {
        (args: (import("mathjs").ConstantNode | import("mathjs").SymbolNode | import("mathjs").FunctionNode)[], _math: any, scope: Map<any, any>): unknown;
        rawArgs: boolean;
        tempId: "__raw_sql_id";
        getTransformationVariableName(scope: Map<any, any>): string;
    };
    raw_sql_column: (input: any, column: string) => Timeseries;
};
