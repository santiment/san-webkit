import { Query, RxQuery, type TGqlSchema } from './executor.js';
type TMockConfig = {
    mock: () => any;
};
export declare const ApiMock: {
    mocks: Record<string, TMockConfig | undefined>;
    add(queryName: string, rules: TMockConfig): void;
    reset(): void;
};
export declare function MockExecutor(executor: typeof RxQuery | typeof Query, schema: TGqlSchema, options?: Parameters<typeof RxQuery>[1]): import("rxjs").Observable<unknown> | Promise<unknown> | undefined;
export declare namespace MockExecutor {
    var getMock: (schema: TGqlSchema) => {
        data: {};
        error: null;
    } | undefined;
}
export declare function mockApi(schema: {
    query: string;
    variables?: string;
}, register: (typeof ApiMock)['mocks']): {
    data: {};
    error: null;
} | undefined;
export {};
