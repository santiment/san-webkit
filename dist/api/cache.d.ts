import { Observable } from 'rxjs';
import { RxQuery, type Query, type TGqlSchema } from './executor.js';
import type { TExecutorOptions } from './index.js';
type TExecutor = typeof RxQuery | typeof Query;
type TResult = Promise<unknown> | Observable<unknown>;
export declare const ApiCache: {
    queries: Map<string, Partial<{
        observable: Observable<unknown>;
        promise: Promise<unknown>;
    }>>;
    add(schema: TGqlSchema, config: {
        executor: TExecutor;
        result: TResult;
        options: TExecutorOptions;
    }): void;
    delete(key: string): void;
    get(schema: TGqlSchema, executor: TExecutor): any;
};
export {};
