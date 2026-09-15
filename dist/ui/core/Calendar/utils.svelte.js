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
const monthFormatter = new Intl.DateTimeFormat('en', { month: 'short' });
export const formatMonth = (month) => monthFormatter.format(new Date(0, month - 1, 1));
