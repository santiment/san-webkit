import { type Watchlist } from '../../api.js';
type TProps = {
    selectedId: number | null;
    onSelect: (watchlist: Watchlist | null) => void;
    loadScreeners?: boolean;
};
declare const ListOfWatchlists: import("svelte").Component<TProps, {}, "">;
type ListOfWatchlists = ReturnType<typeof ListOfWatchlists>;
export default ListOfWatchlists;
