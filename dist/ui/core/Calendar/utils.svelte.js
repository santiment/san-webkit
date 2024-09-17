export const createPlaceholder = (getDefault) => {
    let placeholderState = $state();
    const placeholder = {
        get date() {
            return placeholderState ?? getDefault();
        },
        set date(val) {
            placeholderState = val;
        },
    };
    return placeholder;
};
