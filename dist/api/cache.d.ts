import { Observable } from 'rxjs';
import { RxQuery, type Query, type TGqlSchema } from './executor.js';
import type { TExecutorOptions } from './index.js';
export declare const ApiCache: {
    queries: Map<string, Observable<unknown> | Promise<unknown>>;
    add(schema: TGqlSchema, config: {
        executor: typeof RxQuery | typeof Query;
        result: Promise<unknown> | Observable<unknown>;
        options: TExecutorOptions;
    }): void;
    delete(key: string): void;
    get(schema: TGqlSchema, executor: typeof RxQuery | typeof Query): Observable<unknown> | Promise<unknown> | undefined;
};
