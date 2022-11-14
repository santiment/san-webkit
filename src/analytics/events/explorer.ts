import { TrackCategory } from './utils'

const track = TrackCategory('Explorer')

// Favorites, New, By Santiment, My creations, My likes
export const trackExplorerFiltersUse = (filter: string) => track('explorer_filters_use', { filter })

// Insights, Charts, Watchlists, Screeners
export const trackExplorerFeaturesFilter = (feature: string) =>
  track('explorer_features_filter', { feature })
