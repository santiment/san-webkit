/**
 * Assigning object with a same reference will NOT trigger an update
 */
export function ss(value) {
    if (value && typeof value === 'object' && '$' in value) {
        return value;
    }
    let state = $state.raw(value);
    return {
        get $() {
            return state;
        },
        set $(value) {
            state = value;
        },
    };
}
