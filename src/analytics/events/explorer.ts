import { TrackCategory } from './utils'

const track = TrackCategory('Explorer')

// Favorites, New, By Santiment, My creations, My likes
export const trackExplorerFiltersUse = (explorer_filter_type: string) =>
  track('explorer_filters_use', { explorer_filter_type })

// Insights, Charts, Watchlists, Screeners
export const trackExplorerFeaturesFilter = (explorer_filter_feature: string) =>
  track('explorer_features_filter', { explorer_filter_feature })
