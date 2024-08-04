import { parse, Kind } from 'graphql';
import { startWith, Subject } from 'rxjs';
import { Query, RxQuery } from './executor.js';
export const ApiMock = {
    mocks: {},
    add(queryName, rules) {
        this.mocks['query ' + queryName] = rules;
    },
    reset() {
        this.mocks = {};
    },
};
export function MockExecutor(executor, schema, options) {
    const mockedResult = MockExecutor.getMock(schema);
    if (mockedResult === undefined)
        return;
    const data = options?.map ? options.map(mockedResult.data) : mockedResult.data;
    if (executor === RxQuery) {
        return new Subject().pipe(startWith(data));
    }
    return new Promise((resolve) => {
        return resolve(data);
    });
}
MockExecutor.getMock = (schema) => {
    const normalizedSchema = typeof schema === 'string' ? { query: schema } : { query: schema.schema };
    return mockApi(normalizedSchema, ApiMock.mocks);
};
export function mockApi(schema, register) {
    const { query, variables } = schema;
    const operation = parse(query).definitions[0];
    if (operation.kind !== Kind.OPERATION_DEFINITION) {
        return;
    }
    let hasData = false;
    const data = {};
    let error = null;
    operation.selectionSet.selections.forEach((query) => {
        if (query.kind !== Kind.FIELD)
            return;
        const name = query.name.value;
        const mocked = register['query ' + name]?.mock();
        if (mocked !== undefined) {
            if (mocked?.error) {
                error = mocked.error;
            }
            else {
                // @ts-expect-error
                data[query.alias?.value || name] = mocked;
                if (mocked)
                    mapAlises(mocked, query);
            }
            hasData = true;
        }
    });
    if (hasData)
        return { data, error };
}
function mapAlises(data, query) {
    if (query.kind !== Kind.FIELD)
        return;
    query.selectionSet?.selections.forEach((query) => {
        if (query.kind !== Kind.FIELD)
            return;
        if (!query.alias)
            return;
        const value = data[query.name.value];
        data[query.alias.value] = value;
        return mapAlises(value, query);
    });
}
