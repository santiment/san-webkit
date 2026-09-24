export function createStepSchema(base) {
    const schema = {
        name: base.name,
        initState: base.initState,
        validate: base.validate,
        ui: base.ui,
        reduceToApi: base.reduceToApi,
    };
    return schema;
}
