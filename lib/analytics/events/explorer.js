import { TrackCategory } from './utils.js';
const track = TrackCategory('Explorer');
// Favorites, New, By Santiment, My creations, My likes
export const trackExplorerFiltersUse = (filter) => track('explorer_filters_use', { filter });
// Insights, Charts, Watchlists, Screeners
export const trackExplorerFeaturesFilter = ({ feature, features, isRemoved, }) => track('explorer_features_filter', { feature, features, is_removed: isRemoved });
export const trackExplorerShowMore = ({ page, size }) => track('explorer_show_more', { page, size });
export const trackExplorerItemOpened = ({ id, feature }) => track('explorer_item_opened', { id, feature });
export const trackExplorerSidepanel = ({ type, action, error, }) => track('explorer_sidepanel', {
    type,
    action,
    error,
});
//# sourceMappingURL=explorer.js.map