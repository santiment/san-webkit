import { createCtx, useDebouncedFn } from '../../utils/index.js';
export const useSearchFlow = ({ getCompareValues }) => {
    let searchTerm = $state.raw([]);
    const isSearching = $derived(searchTerm.length > 0);
    const onSearch = useDebouncedFn(250, (value) => {
        searchTerm = value ? value.split(' ') : [];
    });
    const oninput = ({ currentTarget }) => onSearch(currentTarget.value.trim().toLowerCase());
    const match = (value, target) => target.toLowerCase().includes(value);
    const matchItem = (value, item) => {
        const compareValues = getCompareValues(item);
        return Array.isArray(compareValues)
            ? compareValues.some((target) => match(value, target))
            : match(value, compareValues);
    };
    const filter = (items) => isSearching
        ? items.filter((item) => searchTerm.every((value) => matchItem(value, item)))
        : items;
    const onkeyup = ({ currentTarget, code }) => {
        if (!currentTarget)
            return;
        if (code === 'Escape') {
            if (searchTerm) {
                searchTerm = [];
                currentTarget.value = '';
            }
        }
    };
    return {
        searchTerm: {
            get $() {
                return searchTerm;
            },
        },
        isSearching: {
            get $() {
                return isSearching;
            },
        },
        filter,
        /** @deprecated use [onkeyup] instead */
        onKeyUp: onkeyup,
        /** @deprecated use [oninput] instead */
        onInput: oninput,
        onkeyup,
        oninput,
        clear() {
            searchTerm = [];
        },
    };
};
/** @deprecated use [useSearchFlow] instead */
export const useSearchCtx = createCtx('webkit_useSearchCtx', useSearchFlow);
