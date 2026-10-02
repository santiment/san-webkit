import { Timeseries } from './core.js';
export declare const MathOperators: {
    add: ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
    subtract: ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
    multiply: ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
    divide: ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
    pow: ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
    log: ((x: number) => number) & ((x: Timeseries) => Timeseries) & ((x: number, base: number) => number) & ((x: Timeseries, base: number) => Timeseries);
    exp: ((a: Timeseries) => Timeseries) & ((a: number) => number);
    unaryMinus: ((a: Timeseries) => Timeseries) & ((a: number) => number);
    unaryPlus: ((a: Timeseries) => Timeseries) & ((a: number) => number);
    absolute: ((a: Timeseries) => Timeseries) & ((a: number) => number);
};
export declare function createBinaryMathOperator<GName extends string>(name: GName, operation: (a: number, b: number) => number): ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
