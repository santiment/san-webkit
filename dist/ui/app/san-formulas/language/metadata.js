export function setModelMetadata(model, metadata) {
    Object.assign(model, { __metadata: metadata });
}
export function getModelMetadata(model) {
    // @ts-ignore
    return model.__metadata;
}
export function getLocalVariables(formula) {
    return Array.from(formula.matchAll(/(\w+)\s*=/g)).map((match) => match[1]);
}
