import { type Observable, type OperatorFunction, type UnaryFunction } from 'rxjs';
export declare function useObserveFnCall<GData = unknown>(fn: <T>() => UnaryFunction<T extends Observable<unknown> ? any : Observable<GData>, any>): unknown extends GData ? () => void : (...args: undefined extends GData ? [] | [GData] : [GData]) => void;
export declare const pipeGroupBy: <T>(groupFn: (data: T) => any, operator: OperatorFunction<T, any>) => UnaryFunction<Observable<T>, Observable<any>>;
