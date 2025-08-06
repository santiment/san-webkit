import { useDebouncedFn } from '../../analytics/amplitude/flow.svelte.js';
import { createCtx } from '../../utils/index.js';
export const useSearchCtx = createCtx('webkit_useSearchCtx', ({ getCompareValues }) => {
    let searchTerm = $state('');
    const onSearch = useDebouncedFn(250, (value) => {
        searchTerm = value;
    });
    const onInput = ({ currentTarget }) => onSearch(currentTarget.value);
    const match = (value, target) => target.toLowerCase().includes(value);
    const matchItem = (value, item) => {
        const compareValues = getCompareValues(item);
        return Array.isArray(compareValues)
            ? compareValues.some((target) => match(value, target))
            : match(value, compareValues);
    };
    const filter = (items) => {
        const value = searchTerm.toLocaleLowerCase();
        if (!value)
            return items;
        return items.filter((item) => matchItem(value, item));
    };
    const onKeyUp = ({ currentTarget, code }) => {
        if (!currentTarget)
            return;
        if (code === 'Escape') {
            if (searchTerm) {
                currentTarget.value = searchTerm = '';
            }
        }
    };
    return {
        searchTerm: {
            get $() {
                return searchTerm;
            },
        },
        filter,
        onKeyUp,
        onInput,
        clear() {
            searchTerm = '';
        },
    };
});
