import { TrackCategory } from './utils';
const track = TrackCategory('Explorer');
export const trackExplorerFiltersUse = (filter) => track('explorer_filters_use', { filter });
export const trackExplorerFeaturesFilter = (feature) => track('explorer_features_filter', { feature });
//# sourceMappingURL=explorer.js.map