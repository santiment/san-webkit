import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { debounce } from './../../utils/fn.js';
const CTX = 'AssetSearcher$$';
export function Searcher$$(options = {}) {
    let searchTerm = '';
    const searchTerm$ = writable(searchTerm);
    const [onSearch, clear] = debounce(250, (value) => {
        searchTerm$.set((searchTerm = value));
    });
    const onInput = ({ currentTarget }) => onSearch(currentTarget.value);
    const match = (value, target) => target.toLowerCase().includes(value);
    const matchAsset = (value, { slug, ticker, name }) => match(value, slug) || match(value, ticker) || match(value, name);
    function filter(items) {
        const value = searchTerm.toLowerCase();
        return items.filter((item) => matchAsset(value, options.accessAsset(item)));
    }
    function onKeyUp({ currentTarget, code }) {
        var _a;
        if (!currentTarget)
            return;
        const inputNode = currentTarget;
        if (code === 'Escape') {
            if (searchTerm) {
                inputNode.value = searchTerm = '';
                searchTerm$.set(searchTerm);
            }
            else
                (_a = options.onEscape) === null || _a === void 0 ? void 0 : _a.call(options);
        }
    }
    return setContext(CTX, {
        searchTerm$,
        filter,
        onKeyUp,
        onInput,
        clear() {
            searchTerm$.set('');
            clear();
        },
    });
}
export const getSearcher$Ctx = () => getContext(CTX);
//# sourceMappingURL=search.js.map