export function createAlertStep(apiAlert, schema) {
    let _state = $state(schema.initState(apiAlert));
    const _isValid = $derived(schema.validate(_state));
    return {
        name: schema.name,
        ui: schema.ui,
        reduceToApi: schema.reduceToApi,
        state: {
            get $$() {
                return _state;
            },
            set $$(value) {
                _state = value;
            },
        },
        isValid: {
            get $() {
                return _isValid;
            },
        },
    };
}
