import { Timeseries } from './core.js';
export declare const MathConditions: {
    larger: ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
    largerEq: ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
    smaller: ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
    smallerEq: ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
    equal: ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
    unequal: ((a: Timeseries, b: Timeseries) => Timeseries) & ((a: Timeseries, b: number) => Timeseries) & ((a: number, b: Timeseries) => Timeseries) & ((a: number, b: number) => number);
    if: (condition: Timeseries, ifTrue: Timeseries | number, ifFalse: Timeseries | number) => Timeseries;
};
