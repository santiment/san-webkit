import { type Observable, type UnaryFunction } from 'rxjs';
export declare function useObserveFnCall<GData = undefined>(fn: <T>() => UnaryFunction<T extends Observable<unknown> ? any : Observable<GData>, any>): GData extends undefined ? () => void : (data: GData) => void;
