import type { TMetricData } from '../../api/index.js';
import { Query } from '../../../../../api/executor.js';
export type TRawSqlData = {
    rows: (string | number)[][];
    columns: string[];
    columnTypes: ('Date' | 'Float64')[];
};
export declare const queryRunRawSqlQuery: <GExecutor extends (<T>(schema: import("../../../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>) | typeof Query = <T>(schema: import("../../../../../api/executor.js").TGqlSchema, options?: Partial<{
    map: (data: unknown) => T;
}>) => import("rxjs").Observable<T>>(executorConfig?: GExecutor | ({
    executor: GExecutor;
} & {
    cache?: boolean;
    cacheTime?: number;
    recache?: boolean;
} & Partial<{
    fetcher: (typeof globalThis)["fetch"];
    signal: null | AbortSignal;
}>)) => <GData extends Record<string, TMetricData> = Record<string, TMetricData>>(variables: {
    sql: string;
    parameters?: null | Record<string, any>;
}) => GExecutor extends (...args: any[]) => import("rxjs").Observable<any> ? import("rxjs").Observable<GData> : Promise<GData>;
