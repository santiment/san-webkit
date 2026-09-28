export const DATA_STORE_TYPE_RESOLVER = {};
export function handleGenericDataStoreMetric(storeParameters, queryVariables, recache) {
    const resolver = DATA_STORE_TYPE_RESOLVER[storeParameters.type];
    return resolver?.(storeParameters, queryVariables, recache) || Promise.resolve([]);
}
export function registerDataStoreTypeResolver(type, resolver) {
    DATA_STORE_TYPE_RESOLVER[type] = resolver;
}
