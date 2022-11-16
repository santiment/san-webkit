import { TrackCategory } from './utils';
const track = TrackCategory('Explorer');
export const trackExplorerFiltersUse = (filter) => track('explorer_filters_use', { filter });
export const trackExplorerFeaturesFilter = ({ feature, features, isRemoved, }) => track('explorer_features_filter', { feature, features, is_removed: isRemoved });
export const trackExplorerItemCopyLink = ({ id, type }) => track('explorer_item_copy_link', { id, type });
export const trackExplorerShowMore = ({ page, size }) => track('explorer_show_more', { page, size });
//# sourceMappingURL=explorer.js.map