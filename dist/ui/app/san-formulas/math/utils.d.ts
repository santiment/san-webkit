import type { ConstantNode, FunctionNode, SymbolNode } from 'mathjs';
import { Timeseries } from './core.js';
export declare function createTransformableMathFunction<GName extends string, GProcessedArgs = any>(name: GName, controller: {
    processArgs: (args: (ConstantNode | SymbolNode | FunctionNode)[], scope: Map<any, any>) => GProcessedArgs;
    processResult: (processedArgs: GProcessedArgs) => unknown;
}): {
    (args: (ConstantNode | SymbolNode | FunctionNode)[], _math: any, scope: Map<any, any>): unknown;
    rawArgs: boolean;
    tempId: `__${GName}_id`;
    getTransformationVariableName(scope: Map<any, any>): string;
};
export declare function alignTimeseries(a: Timeseries, b: Timeseries): [Timeseries, Timeseries];
