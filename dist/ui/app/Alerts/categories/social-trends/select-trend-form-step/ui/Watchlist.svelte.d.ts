import type { TTrendState } from '../schema.js';
import type { Watchlist } from '../../../watchlist/api.js';
type TProps = {
    stepState: {
        $$: TTrendState;
    };
};
declare const Watchlist: import("svelte").Component<TProps, {}, "">;
type Watchlist = ReturnType<typeof Watchlist>;
export default Watchlist;
